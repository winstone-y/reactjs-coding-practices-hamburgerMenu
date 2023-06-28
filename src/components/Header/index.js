// Write your code here

import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-bg">
    <Link to="/" className="logo-button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="trigger-button"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <>
            <div className="btn">
              <button
                type="button"
                className="trigger-button menu-item"
                onClick={() => close()}
                data-testid="closeButton"
              >
                Close <IoMdClose className="menu-icon" />
              </button>
            </div>
            <ul className="menu-body">
              <li className="menu-item">
                <AiFillHome className="menu-icon" />
                <Link to="/" className="link-item">
                  <p className="link-text">Home</p>
                </Link>
              </li>
              <li className="menu-item">
                <BsInfoCircleFill className="menu-icon" />
                <Link to="/about" className="link-item">
                  <p className="link-text">About</p>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
