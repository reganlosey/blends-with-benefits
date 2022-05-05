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
          {allItems}
        </div>
    </div>
  )

}

export default Cart;