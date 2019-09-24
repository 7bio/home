import React from 'react';
import './layout.css';
import './../styles/global.css';
import PropTypes from 'prop-types';
import PrimaryLogo from '../images/logo_no_background.png';
import NavBar from './nav';

export default Object.assign(
  ({ children }) => (
    <div className="default">
      <div className="default__header">
        <div className="header__logo__container">
          <img
            src={PrimaryLogo}
            className="header__img"
            alt="logo for Seven Biosciences"
          />
        </div>
        <NavBar />
      </div>
      <div className="default__body">{children}</div>
      <div className="footer">
        <div className="footer__content">© 2019 Seven Biosciences, Inc.</div>
      </div>
    </div>
  ),
  { propTypes: { children: PropTypes.string.isRequired } }
);

// https://stackoverflow.com/questions/51271992/adding-proptypes-to-unnamed-anonymous-default-exported-functions-e-i-export-d
