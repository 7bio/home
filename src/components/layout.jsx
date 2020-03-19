import React from 'react';
import Helmet from 'react-helmet';
import './styles.css';
import '../styles/global.css';
import PropTypes from 'prop-types';

import PrimaryLogo from '../images/logo_no_background.png';
import NavigationBar from './NavigationBar';
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
      <div className="main">
        <div className="main__header">
          <div className="header__logo__container">
            <img
              src={PrimaryLogo}
              className="header__img"
              alt="logo for Seven Biosciences"
            />
          </div>
          <NavigationBar />
        </div>
        <div className="main__body">{children}</div>
        <div className="main__footer">
          <div className="main__footer__content">
            © 2019 Seven Biosciences, Inc.
          </div>
        </div>
      </div>
    </div>
  ),
  { propTypes: { children: PropTypes.string.isRequired } }
);

// https://stackoverflow.com/questions/51271992/adding-proptypes-to-unnamed-anonymous-default-exported-functions-e-i-export-d
