import './Orders.scss';
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
    return <div className="order-items"
      key={index + 1}
    >
      <h1 className="order-items--summary-text">Order #{index + 1}</h1>
      <p className="order-items--items-ordered">Items Ordered</p>
      <p className="order-items--items-list">{order.map((item) => `${item.productName} : ${item.quantity} lbs`)} </p>
      <p className="order-items--order-date"> Placed On: {new Date(order[0].orderDate).toDateString()}</p>
      <p className="order-items--order-total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
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