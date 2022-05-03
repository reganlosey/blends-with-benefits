import './Header.scss'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className="header-link__home">BWB</NavLink>
      </div>
      <div className="header-right">
        <Link to="/shop" className="header-link__shop">Shop All Brews</Link>
        <Link to="/profile" className="header-link__profile">Your Profile</Link>
      </div>
    </header>
  )

}

export default Header;