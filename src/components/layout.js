import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import "./../styles/global.css"
import PrimaryLogo from '../../static/images/logo_no_background.png';

const ListLink = props => (
  <li className="sevenbio__navbar-li">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div >
    <header className="sevenbio__header">
      <div className="sevenbio__logo--primary">
        <img src={PrimaryLogo}></img>
      </div>
      <ul className="sevenbio__navbar-ul">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About Us</ListLink>
        <ListLink to="/team/">Our Team</ListLink>
        <ListLink to="/news/">News</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)