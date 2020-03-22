import React from 'react';
import NavigationButton from './NavigationButton';

class NavigationBar extends React.PureComponent {
  render() {
    return (
      <>
        <div className="nav-links">
          <NavigationButton destination="/" text="Home" />
          <NavigationButton destination="/about/" text="About" />
          <NavigationButton destination="/team/" text="Team" />
          <NavigationButton destination="/news/" text="News" />
          <NavigationButton destination="/contact" text="Contact" />
        </div>
        <div className="burger">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </>
    );
  }
}

export default NavigationBar;
