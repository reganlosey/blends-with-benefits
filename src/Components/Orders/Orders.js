import './Orders.scss';
import { useSelector } from 'react-redux';


const Orders = () => {
  const allOrders = useSelector((state) => state.orders.allOrders)
  const orderCards = allOrders.map((order) => {
    console.log(order)
      return <article className="order-card"
      key={Math.floor(Math.random() * Date.now())}
      >
        <h1>{order.map((item) => item.productName)}</h1>
      </article>
      
  })


  return (
    <div>
      {orderCards}
    </div>
  )
}

export default Orders