import './Brew.scss'
import beansIcon from '../../assets/coffee-pot.svg';
import teaBagIcon from '../../assets/tea-cup.svg';

const Brew = ({ id, productName, type, price, hasCaffeine, quantity, addToCart }) => {
  return (
    <article className={type === 'Tea' ? "brew-card brew-card--tea" : "brew-card brew-card--coffee"}>
      <div className="brew-info">
        <div className="brew-info__header">
          <p className="brew-info--name">{productName}</p>
        </div>
        <img className="card-icon" src={type === "Tea" ? teaBagIcon : beansIcon} />
        <div className="brew-info__body">
          <p className="brew-info--type">{type}</p>
          <p className="brew-info--price">${price}/lb</p>
          <p className="brew-info--caffeine">{hasCaffeine ? "Caffeinated: Yes" : "Caffeinated: No"} </p>
          <button onClick={(e) => addToCart(id)} className="brew-card--cart-btn">Add To Cart</button>
        </div>
      </div>
    </article>
  )
}

export default Brew;