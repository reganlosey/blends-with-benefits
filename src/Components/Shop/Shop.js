import './Shop.scss';
import Brew from '../Brew/Brew';
import { useParams } from 'react-router-dom';

const Shop = ({ allBrews, addToCart }) => {
  const params = useParams()
  const reqParams = useParams().query === 'coffee' ? ['espresso', 'coffee'] : 'tea';
  const brewCards = allBrews.reduce((arr, brew) => {
    let brewCard = <Brew
      id={brew.id}
      key={brew.id}
      productName={brew.productName}
      type={brew.type}
      price={brew.price}
      hasCaffeine={brew.hasCaffeine}
      addToCart={addToCart}
      />
    if (reqParams.includes(brew.type.toLowerCase()) && !arr.includes(brewCard)) {
      arr.push(brewCard)
    } else if (!params.query && !arr.includes(brewCard)) {
      arr.push(brewCard)
    }
    return arr
  }, [])

  return (
    <div className="shop">
      <div className="brew-cards">
        {brewCards}
      </div>
    </div>
  )

}

export default Shop;