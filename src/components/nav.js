import React from "react";
import NavLink from './navLink';

class NavBar extends React.PureComponent {
  render() {
    return (
      <div className="header__links">
        <NavLink destination='/' text='Home' />
        <NavLink destination='/about/' text='About' />
        <NavLink destination='/team/' text='Team' />
        <NavLink destination='/news/' text='News' />
        <NavLink destination='/contact' text='Contact' />
      </div>);
  }
}

export default NavBar;
