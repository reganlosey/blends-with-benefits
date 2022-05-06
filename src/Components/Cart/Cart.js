import './Cart.scss'
import { useState, useEffect, useRef } from 'react';


const Cart = ({ cartItems }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  let dollarUS = Intl.NumberFormat('en-US', {
    style:"currency",
    currency:"USD",
    minimumFractionDigits: 3,
    maximumSignificantDigits: 6
  })

const formatPrice = (price) => {
  return price.toLocaleString('en-US', {
    style:"currency",
    currency:"USD"
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
        console.log('increase>>', id)
        brew.quantity++
        calculateTotals()
      } else if (e.target.className.includes('decrease') && brew.quantity >0 && matchedBrew) {
        brew.quantity--
        calculateTotals()
      } else if(e.target.className.includes('remove') && matchedBrew){
        brew.quantity = 0;
      }
    })
  }



  const allItems = cartItems.map((item) => {
    return (
      <div
        key={item.id}
        className="cart-content">
        <div className="cart-content--item-image"></div>
        <img />
        <div className="item-details">
          ITEM DETAILS
          <p className="item-details--item-name">{item.productName}</p>
          <p className="item-details--item-type">{item.type}</p>
          <p className="item-details--item-pounds">${item.price}/lb</p>
        </div>
        <div className="cart-counter">
          CART COUNTER
          <button className="cart-counter--increase-btn" onClick={(e) => adjustQuantity(e, item.id)}>+</button>
          <p className="cart-counter--num-items">{item.quantity}</p>
          <button className="cart-counter--decrease-btn" onClick={(e) => adjustQuantity(e, item.id)}>-</button>
          <button onClick={() => calculateTotals()}>CLICK ME!</button>
        </div>
        <div className="cart-prices">
          CART PRICES
          <p className="cart-prices--item-price">${item.price * item.quantity}</p>
          <button className="cart-prices--remove-item">Remove</button>
        </div>
      </div>
    )
  })
  return (
    <div className="cart">
      <div className="cart-card">
        <div className="cart-card__cart-header">
          CART HEADER
          <h3 className="cart-header--heading">Your Cart</h3>
          <h4 className="cart-header--action">${subTotal + (subTotal * 0.08)}</h4>
        </div>
        <div className="cart-content-container">
          {cartItems.length ? allItems : <p>Looks like your cart needs a refill...</p>}
        </div>
        <div className="cart-footer">
          <p className="cart-totals--subtotal">Subtotal: {formatPrice(subTotal)}</p>
          <p className="cart-totals--tax">Tax: {formatPrice(subTotal * .08)}</p>
          <p className="cart-totals--shipping">Shipping: { shippingCost ? formatPrice(shippingCost) : "Free!"}</p>
          <p className="cart-totals--final-total">Total: {formatPrice(subTotal + (subTotal * 0.08) + shippingCost)}</p>

        </div>
      </div>
    </div>
  )

}

export default Cart;