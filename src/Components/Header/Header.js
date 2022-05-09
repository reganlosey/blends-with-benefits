import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header header__left">
        <Link to="/" className="header-link header-link--home">BWB</Link>
      </div>
      <div className="header header__center">
        <Link to="/shop" className="header-link header-link--shop">All Brews</Link>
        <Link to="/shop/coffee" className="header-link header-link--coffee">Coffee</Link>
        <Link to="/shop/tea" className="header-link header-link--tea">Tea</Link>
      </div>
      <div className="header header__right">
        <Link to="/orders" className="header-link header-link--profile">Your Orders</Link>
        <Link to="/cart" className="header-link header-link--cart">Your Cart</Link>
      </div>
    </header>
  )

}

export default Header;