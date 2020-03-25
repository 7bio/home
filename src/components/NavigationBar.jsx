import React from 'react';
import './navigationBar.css';
// import { COLORS } from '../../constants';

import NavigationButton from './NavigationButton';

class NavigationBar extends React.PureComponent {
  render() {
    return (
      <div className="main__header__links__container">
        <div className="nav-links">
          <NavigationButton destination="/" text="Home" />
          <NavigationButton destination="/about/" text="About" />
          <NavigationButton destination="/team/" text="Team" />
          <NavigationButton destination="/news/" text="News" />
          <NavigationButton destination="/contact" text="Contact" />
        </div>
        <div className="burger">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default NavigationBar;
