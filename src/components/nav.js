import React from "react";
import NavLink from './navLink';

class NavBar extends React.PureComponent {
  render() {
    return (
      <div className="header__links">
        <NavLink destination='/' text='Home' />
        <NavLink destination='/home/about/' text='About' />
        <NavLink destination='/home/team/' text='Team' />
        <NavLink destination='/home/news/' text='News' />
        <NavLink destination='/home/contact' text='Contact' />
      </div>);
  }
}

export default NavBar;
