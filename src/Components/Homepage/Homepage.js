import './Homepage.scss'
import {NavLink} from 'react-router-dom';


const Homepage = () => {
  return (
    <div className="homepage">
      <section className="welcome-msg">
        <h1>Hey there, brew-tiful</h1>
        <h2>Welcome to Blends With Benefits</h2>
        <p>
          We know that the daily grind can be exhausting and finding the right cup of coffee or tea be a tall order.
        </p>
        <p>
          But don't worry, we're here to help you to find your one and only.
        </p>
      </section>
    </div>
  )

}

export default Homepage;