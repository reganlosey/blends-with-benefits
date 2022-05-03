import './Shop.scss';
import Brew from '../Brew/Brew';

const Shop = ({ allBrews }) => {
  const teaCards = [];
  const coffeeCards = [];
  const brewCards = allBrews.forEach((brew) => {
    if (brew.type !== "Tea" && !coffeeCards.includes(brew)) {
      coffeeCards.push(<Brew
        id={brew.id}
        key={brew.id}
        productName={brew.productName}
        type={brew.type}
        price={brew.price}
        hasCaffeine={brew.hasCaffeine}
      />)
    } else {
      teaCards.push(<Brew
        id={brew.id}
        key={brew.id}
        productName={brew.productName}
        type={brew.type}
        price={brew.price}
        hasCaffeine={brew.hasCaffeine}
      />)
    }
  })

  return (
    <div className="shop">
      <div className="tea-cards">
        {teaCards}
      </div>
      <div className="coffee-cards">
        {/* {coffeeCards} */}
      </div>
    </div>
  )

}

export default Shop;