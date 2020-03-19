import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class NavigationButton extends React.PureComponent {
  render() {
    const { destination, text } = this.props;
    return (
      <div className="header__links__single">
        <Link
          to={destination}
          className="header__links__text"
          activeClassName="header__links__text--active"
        >
          {text}
        </Link>
        <div id="circle" />
      </div>
    );
  }
}

export default NavigationButton;

NavigationButton.propTypes = {
  destination: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
