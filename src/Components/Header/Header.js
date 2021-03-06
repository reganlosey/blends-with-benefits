import './Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className="home-link" >
          BWB
        </NavLink>
      </div>
      <div className="header-center">
        <NavLink to="/shop/"
          className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--shop' : 'nav-link nav-link--shop'}>All Blends</NavLink>
        <NavLink to="shop/coffee"
          className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--coffee' : 'nav-link nav-link--coffee'}>Coffee</NavLink>
        <NavLink to="shop/tea"
          className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--tea' : 'nav-link nav-link--tea'}>Tea</NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/cart"
          className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--cart' : 'nav-link nav-link--cart'} >
          Cart
        </NavLink>
        <NavLink to="/orders"
          className={(navData) => navData.isActive ? 'nav-link-a nav-link-a--orders' : 'nav-link nav-link--orders'}>
          Orders
        </NavLink>
      </div>


    </header>
  )

}

export default Header;