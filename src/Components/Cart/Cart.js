import './Cart.scss'
import { useState, useEffect } from 'react';
import { addItemToCart, removeItemFromCart } from '../../state/cartSlice';
import { useSelector, useDispatch } from "react-redux";
import beansIcon from '../../assets/beans_icon.png';
import teaBagIcon from '../../assets/teabag_icon.png';


const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    calculateTotals()
  }, [])

  const calculateTotals = () => {
    const totals = cartItems.reduce((sum, item) => {
      sum += (item.price * item.quantity)
      return sum
    }, 0)

    setSubTotal(totals)
    if (totals > 0 && totals < 20) {
      setShippingCost(5)
    } else {
      setShippingCost(0)
    }
    return subTotal
  }


  const adjustQuantity = (e, id) => {
    const adjustment = cartItems.forEach((brew) => {
      const matchedBrew = brew.id === id
      if (e.target.className.includes('increase') && matchedBrew) {
        dispatch(addItemToCart({
          id: brew.id,
          productName: brew.productName,
          type: brew.type,
          price:brew.price,
          hasCaffeine: brew.hasCaffeine,
          quantity: brew.quantity
        }))
        calculateTotals()
      } else if (e.target.className.includes('decrease') && brew.quantity > 0 && matchedBrew) {
          dispatch(removeItemFromCart({
          id: brew.id,
          productName: brew.productName,
          type: brew.type,
          price:brew.price,
          hasCaffeine: brew.hasCaffeine,
          quantity: brew.quantity
        }))
        calculateTotals()
      } else if (e.target.className.includes('remove') && matchedBrew) {
        brew.quantity = 0;
      }
    })
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
          <button className="cart-counter--decrease-btn" onClick={(e) => adjustQuantity(e, item.id)}>-</button>
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
        <h3 className="cart-card__cart-header">
          Your Cart
        </h3>
        <div className="cart-content-container">
          {cartItems.length ? allItems : <p>Looks like your cart needs a refill...</p>}
        </div>
        <div className="cart-footer">
          <div className="cart-totals">
            <p className="cart-totals--subtotal">Subtotal: {formatPrice(subTotal)}</p>
            <p className="cart-totals--tax">Tax: {formatPrice(subTotal * .08)}</p>
            <p className="cart-totals--shipping">Shipping: {shippingCost ? formatPrice(shippingCost) : "Free!"}</p>
            <p className="cart-totals--final-total">Total: {formatPrice(subTotal + (subTotal * 0.08) + shippingCost)}</p>
          </div>

        </div>
      </div>
    </div>
  )

}

export default Cart;