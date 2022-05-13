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
    return <article className="order-content"
      key={index + 1}
    >ORDER CONTENT
      <div className="order-items"> ORDER ITEMS
        <h1 className="order-items--summary-text">Order Summary</h1>
        <p className="order-items--items-ordered">Items Ordered</p>
        <p className="order-items--items-list">{order.map((item) => `${item.productName} : ${item.quantity} lbs`)} </p>
        <p className="order-items--order-date"> Placed On: {new Date(order[0].orderDate).toDateString()}</p>
        <p className="order-items--order-total">Order Total: {formatPrice(order[0].subTotal + (order[0].subTotal * .08))}</p>
      </div>
    </article>
  })


  return (
    <div className="orders">
      ORDERS
      <div className="order-card"> ORDER CARD
        <h3 className="order-card__header"> HEADER
        </h3>
        <div className="order-content-container">
          ORDER CONTENT Container
          {allOrders.length ? orderCards : <p className="empty-order-txt">Awful quiet in here...</p>}
        </div>

      </div>
    </div>
  )
}

export default Orders