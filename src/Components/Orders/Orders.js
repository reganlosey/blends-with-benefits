import './Orders.scss';
import beansIcon from '../../assets/coffee-pot.svg';
import teaBagIcon from '../../assets/tea-cup.svg';
import { useSelector } from 'react-redux';


const Orders = () => {
  const allOrders = useSelector((state) => state.orders.allOrders)


  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: "currency",
      currency: "USD"
    })
  }

  const orderCards = allOrders.map((order, index) => {
    return <div className="order-details"
      key={index + 1}
    >
      <div className="items-list">
        {order.map((item) =>
          <div className="ordered-item">
            <img className="ordered-item--item-icon" src={item.type === "Tea" ? teaBagIcon : beansIcon} />
            <p className="ordered-item--item-name">{item.productName} :(x {item.quantity}lbs)</p>
          </div>)
        }
        {/* <button className="cancel-order-btn">Cancel Order</button> */}
      </div>
      <div className="order-details-sidebar">
        <p className="order-details--order-num">Order#: 6574983 </p>
        <p className="order-details--order-date">Placed On: {new Date(order[0].orderDate).toDateString()}</p>
        <p className="order-details--order-total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
      </div>
    </div>
  })


  return (
    <div className="orders">
      <div className="order-card">
        <h3 className="order-card--header"> Your Orders</h3>
        <div className="order-card--inner">
          {allOrders.length ? orderCards : <p className="empty-orders-txt">Awful quiet in here...</p>}
        </div>
      </div>
    </div>

  )
}

export default Orders