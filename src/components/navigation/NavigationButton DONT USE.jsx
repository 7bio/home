import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './navigationLink.css';

class NavigationButton extends React.PureComponent {
  render() {
    const { destination, text } = this.props;
    return (
      <Link
        to={destination}
      // className="header__links__te"
      // activeClassName="header__links__te"
      >
        wtf
      </Link>
    );
  }
}

export default NavigationButton;

NavigationButton.propTypes = {
  destination: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
