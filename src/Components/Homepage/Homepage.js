import './Homepage.scss'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="intro">
        <h1 className="intro--heading">Hey there, hot stuff</h1>
        <h2 className="intro-subheading">Welcome to</h2>
        <p className="intro--site-name">Blends With Benefits</p>
        {/* <p className="intro--details">
          We know that the daily grind can be exhausting and finding the right cup of coffee or tea be a tall order.
        </p>
        <p className="intro--details">
          But don't worry, we're here to help you to find your one and only.
        </p> */}
      </div>
      <div className="get-started">
        {/* <p>Let's get started</p> */}
        <button className="get-started--start-btn">
          <Link to="/shop">Browse All Brews</Link>
        </button>
      </div>
    </div>
  )

}

export default Homepage;