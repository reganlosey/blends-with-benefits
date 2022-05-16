import './Header.scss'
import siteLogo from '../../assets/site-logo-vctr.svg';
import ordersText from '../../assets/orders-txt-vctr.png';
import cartText from '../../assets/cart-txt-vctr.png'
import { NavLink} from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className="header-link" >
          <img className="site-logo" src={siteLogo} alt="the letters BWB" />
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/orders" className={(navData) => navData.isActive ? 'header-active' : 'orders-link'}>
          {/* <p className="orders-link-txt">ORDERS</p> */}
          ORDERS
          {/* <img className="orders-img" src={ordersText} alt="img of the word orders" /> */}
        </NavLink>
        <NavLink to="/cart" className={(navData) => navData.isActive ? 'header-active' : 'cart-link'} >
          {/* <img className="cart-img" src={cartText} alt="img of the word cart" /> */}
          <p className="cart-link-txt">CART</p>
        </NavLink>
      </div>


    </header>
  )

}

export default Header;