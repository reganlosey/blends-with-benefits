import './Homepage.scss'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="intro">
        <p className="intro--site-name">Blends With Benefits</p>
      </div>
      <div className="get-started">
        <button className="get-started--start-btn">
          <Link to="/shop">Browse All Brews</Link>
        </button>
      </div>
    </div>
  )

}

export default Homepage;