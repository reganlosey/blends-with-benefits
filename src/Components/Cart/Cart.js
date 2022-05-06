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
          <h3 className="cart-info--heading">Your Cart</h3>
          <h4 className="cart-info--action">Remove All</h4>
        </div>
        {/* <div className="cart-content">
          <div className="cart-content--item-image"></div>
          <img />
          <div className="item-details">
            ITEM DETAILS
            <p className="item-details--item-name">Coffee</p>
            <p className="item-details--item-pounds">2lbs</p>
          </div>
          <div className="cart-counter">
            CART COUNTER
            <button className="cart-counter--increase-btn">+</button>
            <button className="cart-counter--decrease-btn">-</button>
          </div>
          <div className="cart-prices">
            CART PRICES
            <p className="cart-prices--item-price">$10/lb</p>
            <button className="cart-prices--remove-item">Remove</button>
          </div>
        </div> */}
        {allItems}
      </div>
    </div>
  )

}

export default Cart;