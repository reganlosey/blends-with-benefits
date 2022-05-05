import './Cart.scss'

const Cart = ({ cartItems }) => {
  console.log(cartItems)
  const allItems = cartItems.map((item) => {
    return (
      <div className="single-item"
        key={item.id}
      >
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
        <div className="cart-content">
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
        </div>
        {allItems}
      </div>
    </div>
  )

}

export default Cart;