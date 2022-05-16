import './Cart.scss'
import { useState, useEffect } from 'react';
import { persistor } from '../../redux/store';
import { addItemToCart, removeItemFromCart, clearCart } from '../../redux/cartSlice';
import { placeOrder } from '../../redux/orderSlice';
import { useSelector, useDispatch} from "react-redux";
import beansIcon from '../../assets/coffee-pot.svg';
import teaBagIcon from '../../assets/tea-cup.svg';


const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const cartItems = useSelector((state) => state.cart.items)
  const orders = useSelector((state) => state.orders.allOrders)
  const dispatch = useDispatch()
  const today = Date.now()

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    calculateTotals()
  }, [subTotal, cartItems])

  const calculateTotals = () => {
    const totals = cartItems.reduce((sum, item) => {
      sum += (item.price * item.quantity)
      return sum
    }, 0)

    setSubTotal(totals)
    if (totals < 20) {
      setShippingCost(5)
    } else {
      setShippingCost(0)
    }
  }


  const adjustQuantity = (e, id) => {
    e.preventDefault()
    const adjustment = cartItems.forEach((brew) => {
      console.log(id)
      const matchedBrew = brew.id === id
      if (e.target.className.includes('increase') && matchedBrew) {
        dispatch(addItemToCart({
          id: brew.id,
          productName: brew.productName,
          type: brew.type,
          price: brew.price,
          hasCaffeine: brew.hasCaffeine,
          quantity: brew.quantity
        }))
        calculateTotals()
      } else if (e.target.className.includes('decrease') && brew.quantity > 0 && matchedBrew) {
        dispatch(removeItemFromCart({
          id: brew.id,
          productName: brew.productName,
          type: brew.type,
          price: brew.price,
          hasCaffeine: brew.hasCaffeine,
          quantity: brew.quantity
        }))
        calculateTotals()
      }
    })
  }

  const placeNewOrder = (e) => {
    e.preventDefault()
    const newOrder = cartItems.reduce((arr, item) => {
      if (!orders.includes(item)) {
        arr.push({
          id: item.id,
          productName: item.productName,
          type: item.type,
          price: item.price,
          hasCaffeine: item.hasCaffeine,
          quantity: item.quantity,
          subTotal: subTotal,
          shippingCost: shippingCost,
          orderDate: today
        })
      }
      return arr
    }, [])
    dispatch(placeOrder(
      newOrder
    ))
    dispatch(clearCart())
    setSubTotal(0);
  }

  const allItems = cartItems.map((item) => {
    return (
      <div
        key={item.id}
        className="cart-item">
        <img className="cart-item--item-icon" src={item.type === "Tea" ? teaBagIcon : beansIcon} />
        <div className="item-details">
          <p className="item-details--item-name">{item.productName}</p>
          <p className="item-details--item-type">{item.type}</p>
          <p className="item-details--item-pounds">${item.price}/lb</p>
        </div>
        <div className="cart-counter">
          <button className="cart-counter--decrease-btn" disabled={item.quantity ? false : true} onClick={(e) => adjustQuantity(e, item.id)}>-</button>
          <p className="cart-counter--num-items">{item.quantity} lbs</p>
          <button className="cart-counter--increase-btn" onClick={(e) => adjustQuantity(e, item.id)}>+</button>
        </div>
        <div className="cart-prices">
          <p className="cart-prices--item-price">${item.price * item.quantity}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="cart">
      <div className="cart-card">
        <h3 className="cart-card--cart-header">
          Your Cart
        </h3>
        <div className="cart-content-container">
          {cartItems.length ? allItems : <p className="empty-txt">Your cart's looking a little...emp-tea</p>}
        </div>
        <div className="cart-sidebar">
          <div className="cart-totals">
            <p className="cart-totals--subtotal">Subtotal: {formatPrice(subTotal)}</p>
            <p className="cart-totals--shipping">Shipping: {shippingCost ? formatPrice(shippingCost) : "Free!"}</p>
            <p className="cart-totals--tax">Tax: {formatPrice(subTotal * .08)}</p>
          </div>
          <div className="place-order">
            <p className="place-order--final-total">Total: {formatPrice(subTotal + (subTotal * 0.08) + shippingCost)}</p>
            <button
              className="place-order--btn"
              disabled={subTotal ? false : true}
              onClick={(e) => placeNewOrder(e)}
            > Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Cart;