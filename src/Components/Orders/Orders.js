import './Orders.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Orders = () => {
  const allOrders = useSelector((state) => state.orders.allOrders)
  const [orderDate, setOrderDate] = useState('');
  const [subTotal, setSubTotal] = useState(0);

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: "currency",
      currency: "USD"
    })
  }
  
  const orderCards = allOrders.map((order, index) => {
    return <article className="order-card"
      key={index + 1}
    >
      <div className="order-items">
        <h1 className="order-items--summary-text">Order Summary</h1>
        <p className="order-items--items-ordered">Items Ordered</p>
        <p className="order-items--items-list">{order.map((item) => `${item.productName} : ${item.quantity} lbs`)} </p>
        <p className="order-items--order-date"> Placed On: {new Date(order[0].orderDate).toDateString()}</p>
        <p className="order-items--order-total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
        <h1></h1>
      </div>
    </article>
  })


  return (
    <div className="order-card-container">
      {allOrders.length ? orderCards : <p className="empty-order-txt">Awful quiet in here...</p>}
    </div>
  )
}

export default Orders