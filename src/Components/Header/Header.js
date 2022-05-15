import './Header.scss'
import siteLogo from '../../assets/site-logo-vctr.svg';
import ordersText from '../../assets/orders-txt-vctr.svg';
import cartText from '../../assets/cart-txt-vctr.svg'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-link" >
          <img className="site-logo" src={siteLogo} alt="the letters BWB" />
        </Link>
      </div>
      <div className="header-right">
        <Link to="/orders" className="header-link">
          <img className="orders-img" src={ordersText} alt="img of the word orders" />
        </Link>
        <Link to="/cart" className="header-link" >
          <img className="cart-img" src={cartText} alt="img of the word cart" />
        </Link>
      </div>


    </header>
  )

}

export default Header;