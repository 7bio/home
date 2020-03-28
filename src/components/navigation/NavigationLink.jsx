import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './navigationLink.css';

class NavigationLink extends React.PureComponent {
  render() {
    const { destination, text } = this.props;
    return (
      <li>
        <Link
          to={destination}
          className="header__link__a"
          activeClassName="header__link__a--active"
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
