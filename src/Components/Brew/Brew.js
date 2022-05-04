import './Brew.scss'

const Brew = ({ id, productName, type, price, hasCaffeine }) => {
  console.log(productName)
  return (
    <article className="brew-card">
      <p className="brew-info__name">{productName}</p>
      <p className="brew-info__type">{type}</p>
      <p className="brew-info__price">Price: ${price}</p>
      <p className="brew-info__caffeine">{hasCaffeine ? "Caffeinated: Yes" : "Caffeinated: No"} </p>
    </article>
  )
}

export default Brew;