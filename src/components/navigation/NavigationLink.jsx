import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class NavigationLink extends React.PureComponent {
  render() {
    const { destination, text } = this.props;
    return (
      <li>
        <Link
          to={destination}
          className="header__links__text"
          activeClassName="header__links__text--active"
        >
          {text}
        </Link>
      </li>
    );
  }
}

export default NavigationLink;

NavigationLink.propTypes = {
  destination: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};