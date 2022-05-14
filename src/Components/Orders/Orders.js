import './Orders.scss';
import beansIcon from '../../assets/coffee-pot.svg';
import teaBagIcon from '../../assets/tea-cup.svg';
import { useSelector } from 'react-redux';


const Orders = () => {
  const allOrders = useSelector((state) => state.orders.allOrders)
  const today = Math.floor(new Date / 90000000)

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: "currency",
      currency: "USD"
    })
  }

  const orderCards = allOrders.map((order, index) => {
    return <div className="order-card"
      key={index + 1}
    >
      <div className="order-card--header">
        <p className="order-card--order-num">Order#: {today + index} </p>
        <div className="order-card--date-and-total">
          <p className="order-card--total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
          <p className="order-card--order-date">Placed On: {new Date(order[0].orderDate).toDateString()}</p>
        </div>
      </div>
      <p className="items-ordered-txt">Items Ordered</p>
      <div className="order-summary">
        {order.map((item) =>
          <div key={item.id}
            className="ordered-item">
            <img className="ordered-item--item-icon" src={item.type === "Tea" ? teaBagIcon : beansIcon} />
            <p className="ordered-item--item-name">{item.productName} :(x {item.quantity}lbs)</p>
          </div>)
        }
      </div>
      {/* <div className="order-card--footer"> */}
      {/* </div> */}
    </div>
  })


  return (
    <div className="orders">
      <div className="order-card-container">
        <h3 className="order-card-container--header"> Your Orders</h3>
        {allOrders.length ? orderCards : <p className="empty-orders-txt">Awful quiet in here...</p>}
      </div>
    </div>

  )
}

export default Orders