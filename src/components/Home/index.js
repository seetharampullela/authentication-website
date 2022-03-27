// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="clothes-container">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air ...........
          ...............................................
          ...............................................
          ...............................................
          ...............................................
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes-image"
        />
      </div>
    </div>
  </div>
)
export default Home
