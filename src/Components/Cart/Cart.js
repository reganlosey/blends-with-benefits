import './Cart.scss'
import { useState, useEffect } from 'react';


const Cart = ({ cartItems, adjustQuantity }) => {
  const [cartTotals, setCartTotals] = useState(0);

  useEffect(() => {
    calculateTotals()
  }, [])

  // const adjustQuantity = (e) => {
  //   e.preventDefault()
  //   cartItems.find((item) => {
  //     if (e.target.className.includes('increase')){
  //       item.quantity++
  //     }
  //   })
  // }

  const calculateTotals = () => {
    const totals = cartItems.reduce((sum, item) => {
      sum += (item.price * item.quantity)
      return sum
    }, 0)
    setCartTotals(totals)
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
          <h4 className="cart-header--action">${cartTotals + (cartTotals * 0.08)}</h4>
        </div>
        <div className="cart-content-container">
          {cartItems.length ? allItems : <p>Looks like your cart needs a refill...</p>}
        </div>
        <div className="cart-totals">
          CART TOTALS
          <p className="cart-totals--subtotal">Subtotal:</p>
          <p className="cart-totals--tax">Tax</p>
          <p className="cart-totals--shipping">Shipping</p>
          <p className="cart-totals--final-total">Total:</p>

        </div>
      </div>
    </div>
  )

}

export default Cart;