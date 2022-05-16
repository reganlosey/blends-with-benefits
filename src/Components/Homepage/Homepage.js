import './Homepage.scss'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="intro">
        <p className="intro--heading">Hey there hot stuff, welcome to</p>
        <h1 className="intro--site-name">Blends With Benefits</h1>
      </div>
      <div className="browse-wrapper">
        <button className="browse-wrapper--coffee-btn"><Link to="/shop/coffee">Browse Coffee</Link></button>
        <button className="browse-wrapper--tea-btn"><Link to="/shop/tea">Browse Tea</Link></button>
      </div>

    </div>
  )

}

export default Homepage;