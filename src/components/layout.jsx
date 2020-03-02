import React from 'react';
import Helmet from 'react-helmet';
import './layout.css';
import '../styles/global.css';
import PropTypes from 'prop-types';

import PrimaryLogo from '../images/logo_no_background.png';
import NavBar from './nav';
import favicon from '../images/gpcr_favicon.png';

export default Object.assign(
  ({ children }) => (
    <div>
      <Helmet
        defer={false}
        title="Seven Biosciences"
        link={[
          { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
        ]}
      />
      <main>
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
            <div className="footer__content">
              © 2019 Seven Biosciences, Inc.
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
  { propTypes: { children: PropTypes.string.isRequired } }
);

// https://stackoverflow.com/questions/51271992/adding-proptypes-to-unnamed-anonymous-default-exported-functions-e-i-export-d
