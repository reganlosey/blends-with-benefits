import './Header.scss'
import siteLogo from '../../assets/site-logo-vctr.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className="home-link" >
          <img className="site-logo" src={siteLogo} alt="the letters BWB" />
        </NavLink>
      </div>
      <div className="header-center">
        <NavLink to="shop/coffee" className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--coffee' : 'nav-link nav-link--coffee'}>Shop Coffee</NavLink>
        <NavLink to="shop/tea" className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--tea' : 'nav-link nav-link--tea'}>Shop Tea</NavLink>
        <NavLink to="/shop/" className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--shop' : 'nav-link nav-link--shop'}>Shop All</NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/orders" className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--orders' : 'nav-link nav-link--orders'}>
          Orders
        </NavLink>
        <NavLink to="/cart" className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--cart' : 'nav-link nav-link--cart'} >
          Cart
        </NavLink>
      </div>


    </header>
  )

}

export default Header;