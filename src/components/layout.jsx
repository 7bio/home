import React from 'react';
import Helmet from 'react-helmet';
import './layout.css';
import 'typeface-lato';
import PropTypes from 'prop-types';

import PrimaryLogo from '../../static/images/top_left_logo.png';
import NavigationBar from './NavigationBar';
import favicon from '../../static/images/favicon.png';

console.log('document is', document);
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});

export default Object.assign(
  ({ children }) => (
    <div style={{ height: '100%' }}>
      <Helmet
        defer={false}
        title="Seven Biosciences"
        link={[
          { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
        ]}
      />
      <div className="main">
        <div className="main__header">
          <div className="main__header__logo__container">
            <img
              src={PrimaryLogo}
              className="myLogo"
              alt="logo for Seven Biosciences"
            />
          </div>
          <NavigationBar />
        </div>
        <div className="main__body">hello</div>
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

// what the
