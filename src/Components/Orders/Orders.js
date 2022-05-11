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
    console.log(order)
    console.log(typeof order[0].orderDate)
    return <article className="order-card"
      key={index + 1}
    >
      <div className="order-items">
        <h1>Items Ordered</h1>
        <p className="items-list">{order.map((item) => `${item.productName} : ${item.quantity} lbs`)} </p>
        <p className="order-date"> Placed On: {new Date(order[0].orderDate).toDateString()}</p>
        <p className="order-total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
        <h1></h1>
      </div>
    </article>

  })


  return (
    <div>
      {orderCards}
    </div>
  )
}

export default Orders