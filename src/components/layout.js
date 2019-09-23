import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import "./../styles/global.css"
import PrimaryLogo from '../../static/images/logo_no_background.png';

export default ({ children }) => (
  <div className="landing-page">
    <div className="landing-page--header">
      <div className="header__logo__container">
        <img src={PrimaryLogo} className="header__img"></img>
      </div>
      <div className="header__links">
        <div className="header__links__single">
          <Link to="/" className="header__links__text" activeClassName="header__links__text--active">Home</Link>
          <div id="circle"></div>
        </div>
        <div className="header__links__single">
          <Link to="/about/" className="header__links__text" activeClassName="header__links__text--active">About Us</Link>
          <div id="circle"></div>
        </div>
        <div className="header__links__single">
          <Link to="/team/" className="header__links__text" activeClassName="header__links__text--active">Our Team</Link>
          <div id="circle"></div>
        </div>
        <div className="header__links__single">
          <Link to="/news/" className="header__links__text" activeClassName="header__links__text--active">News</Link>
          <div id="circle"></div>
        </div>
        <div className="header__links__single">
          <Link to="/contact/" className="header__links__text" activeClassName="header__links__text--active">Contact</Link>
          <div id="circle"></div>
        </div>
      </div>
    </div>
    <div className="landing-page--body">
      {children}
    </div>
    <div className="footer">
      <div className="footer__content">
        © 2019 Seven Biosciences, Inc.
      </div>
    </div>

  </div>
)
