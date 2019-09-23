import React from "react"
import "./layout.css"
import "./../styles/global.css"
import PrimaryLogo from '../../static/images/logo_no_background.png';
import NavBar from './nav.js';

export default ({ children }) => (
  <div className="landing-page">
    <div className="landing-page--header">
      <div className="header__logo__container">
        <img src={PrimaryLogo} className="header__img"></img>
      </div>
      <NavBar />
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
