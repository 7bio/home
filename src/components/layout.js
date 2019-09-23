import React from "react"
import "./layout.css"
import "./../styles/global.css"
import PrimaryLogo from '../../static/images/logo_no_background.png';
import NavBar from './nav.js';

export default ({ children }) => (
  <div className="default">
    <div className="default__header">
      <div className="header__logo__container">
        <a href="/"><img src={ PrimaryLogo } className="header__img" alt="logo for Seven Biosciences"/></a>
      </div>
      <NavBar />
    </div>
    <div className="default__body">
      { children }
    </div>
    <div className="footer">
      <div className="footer__content">
        © 2019 Seven Biosciences, Inc.
      </div>
    </div>
  </div>
)
