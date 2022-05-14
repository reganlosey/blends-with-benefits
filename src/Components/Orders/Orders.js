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
      <div className="order-details--header">
        <div className="num-total">
          <p className="order-details--order-num">Order#: 6574983 </p>
          <p className="order-details--order-date">Placed On: {new Date(order[0].orderDate).toDateString()}</p>
        </div>
        <div className="total-and-cancel">
          <p className="order-details--order-total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
        </div>
      </div>
      <div className="items-list">
        <p className="items-ordered-txt">Items Ordered</p>
        {order.map((item) =>
          <div key={item.id}
            className="ordered-item">
            <img className="ordered-item--item-icon" src={item.type === "Tea" ? teaBagIcon : beansIcon} />
            <p className="ordered-item--item-name">{item.productName} :(x {item.quantity}lbs)</p>
          </div>)
        }
      </div>
    </div>
  })


  return (
    <div className="orders">
      <div className="order-card">
        <h3 className="order-card--header"> Your Orders</h3>
        {allOrders.length ? orderCards : <p className="empty-orders-txt">Awful quiet in here...</p>}
        {/* <div className="order-card--inner">
        </div> */}
      </div>
    </div>

  )
}

export default Orders