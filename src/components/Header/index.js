import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="bg-container">
    <li>
      <Link className="link-design" to="/">
        Home
      </Link>
      <Link className="link-design" to="/about">
        About
      </Link>
    </li>
  </ul>
)

export default Header
