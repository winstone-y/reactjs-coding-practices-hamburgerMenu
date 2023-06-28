import {Link} from 'react-router-dom'
import Header from '../Header'

// Write your code here

const Home = () => (
  <>
    <Header />
    <Link to="/" className="body-card">
      <img
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
        className="image"
      />
    </Link>
  </>
)

export default Home
