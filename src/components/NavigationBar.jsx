import React from 'react';
import NavigationButton from './NavigationButton';

class NavigationBar extends React.PureComponent {
  render() {
    return (
      <div className="header__links">
        <NavigationButton destination="/" text="Home" />
        <NavigationButton destination="/about/" text="About" />
        <NavigationButton destination="/team/" text="Team" />
        <NavigationButton destination="/news/" text="News" />
        <NavigationButton destination="/contact" text="Contact" />
      </div>
    );
  }
}

export default NavigationBar;
