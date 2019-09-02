import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import "./../styles/global.css"
import PrimaryLogo from '../../static/images/primary_logo_black.png';



const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div >
    <header>
      <div className="container">
        <div className="primary-logo">
          <img src={PrimaryLogo}></img>
        </div>
        <div className="nav-main">
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About Us</ListLink>
            <ListLink to="/team/">Our Team</ListLink>
            <ListLink to="/news/">News</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </div>
      </div>
    </header>
    {children}
  </div>
)