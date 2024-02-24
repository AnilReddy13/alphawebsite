import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <><nav className="nav-header">
    <div className="nav-content">
      <div className="nav-content nav-bar-large-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707491780/Untitled_design_7_1_q0b0tk.png"
          alt="website logo" />
        <ul className="nav-menu">
        <li className="nav-menu-item">
        <Link className="route-link" to="/">
              Home
            </Link>
            </li>
          <li className="nav-menu-item">
            <Link className="route-link" to="/courses">
              Courses
            </Link>
          </li>
          <li className="nav-menu-item">
          <Link  className="route-link" to="/programms">
              Programms
            </Link>
          </li>
          <li className="nav-menu-item">
          <Link className="route-link" to="/community">
              Community
            </Link>
          </li>
          <li className="nav-menu-item">
          <Link className="route-link" to="/jobs">
              Jobs
            </Link>
          </li>
        </ul>
        <Link to="/profile">
        <button type="button" className="profile-desktop-btn">
          Profile
        </button>
        </Link>
      </div>
    </div>
  </nav> </>
)
export default Header