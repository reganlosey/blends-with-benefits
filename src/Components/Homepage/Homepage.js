import './Homepage.scss'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="intro">
        <p className="intro--heading">Hey There Hot Stuff, Welcome To</p>
        <h1 className="intro--site-name">BLENDS WITH BENEFITS</h1>
      </div>
      <div className="browse-wrapper">
        <button className="browse-wrapper--coffee-btn"><Link to="/shop/coffee">Browse Coffee</Link></button>
        <button className="browse-wrapper--tea-btn"><Link to="/shop/tea">Browse Tea</Link></button>
      </div>

    </div>
  )

}

export default Homepage;