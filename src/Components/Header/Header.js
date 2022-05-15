import './Header.scss'
import siteLogo from '../../assets/site-logo-txt.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header--left">
      </div> */}
      <div className="header--right">
        <Link to="/">
          <img className="site-logo" src={siteLogo} alt="the letters BWB" />
        </Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  )

}

export default Header;