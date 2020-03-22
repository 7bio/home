import React from 'react';
import './navigationBar.css';
import { COLORS } from '../../constants';

// import NavigationButton from './NavigationButton';

class NavigationBar extends React.PureComponent {
  render() {
    return (
      <div className="burger">
        <div
          className="burger__line"
          style={{ backgroundColor: COLORS.primary.green }}
        />
        <div className="burger__line" />
        <div className="burger__line" />
      </div>
    );
  }
}

// <div className="nav-links">
//   <NavigationButton destination="/" text="Home" />
//   <NavigationButton destination="/about/" text="About" />
//   <NavigationButton destination="/team/" text="Team" />
//   <NavigationButton destination="/news/" text="News" />
//   <NavigationButton destination="/contact" text="Contact" />
// </div>;

export default NavigationBar;
