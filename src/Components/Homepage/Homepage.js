import './Homepage.scss'
import { Link } from 'react-router-dom';
import siteSvg from '../../assets/site_name.svg'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="intro">
        <p className="intro--heading">Hey There Hot Stuff, Welcome To</p>
        {/* <p className="intro--subheading">Welcome to</p> */}
        <h1 className="intro--site-name">BLENDS WITH BENEFITS</h1>
      </div>
      <div className="browse-wrapper">
        <button className="browse-wrapper--coffee-btn">Browse Coffee</button>
        <button className="browse-wrapper--tea-btn">Browse Tea</button>
      </div>

    </div>
  )

}

export default Homepage;