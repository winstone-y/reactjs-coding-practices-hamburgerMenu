// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <Link to="/about" className="body-card">
      <img
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
        className="image"
      />
    </Link>
  </>
)

export default About
