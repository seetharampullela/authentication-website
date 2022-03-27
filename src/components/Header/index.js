// Write your JS code here
// import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="header-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-image"
        />
      </div>
      <ul className="header-list-container">
        <li>
          <p className="header-description">Home</p>
        </li>
        <li>
          <p className="header-description">Products</p>
        </li>
        <li>
          <p className="header-description">Cart</p>
        </li>
        <li>
          <button type="button" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>

    {/* //for small size */}
    <nav className="header-container-small">
      <div className="logo-logout-icon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-image"
        />
        <button type="button" className="logout-icon-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
            alt="logout"
            className="logout-icon"
          />
        </button>
      </div>
      <ul className="header-list-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="logout-icon-2"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav product"
            className="logout-icon-2"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="logout-icon-2"
          />
        </li>
      </ul>
    </nav>
  </>
)
export default Header
