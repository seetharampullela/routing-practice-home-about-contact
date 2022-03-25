// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="navigation-container">
    <ul className="header-list-container">
      <li>
        <div className="header-left-elements">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="wave-img"
          />
          <p>Wave</p>
        </div>
      </li>
      <div className="header-right-elements">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
    </ul>
  </nav>
)
export default Header
