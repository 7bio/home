import React from 'react';
import './navigationBar.css';
import { Link } from 'gatsby';
// import { COLORS } from '../../constants';

import NavigationButton from './NavigationButton';
import NavigationLink from './NavigationLink';

class NavigationBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ulRef = React.createRef();
    this.state = {
      myList: [],
      burger: null,
    };

    this.handleClick = () => {
      const { condition, myList, burger } = this.state;
      myList.classList.toggle('nav-active');
      // animate links
      myList.childNodes.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
        }
      });
      // animate burger
      burger.classList.toggle('toggle');
    };
  }

  render() {
    const { condition } = this.state;

    // let resizeTimer;
    // window.addEventListener('resize', () => {
    //   document.body.classList.add('resize-animation-stopper');
    //   clearTimeout(resizeTimer);
    //   resizeTimer = setTimeout(() => {
    //     document.body.classList.remove('resize-animation-stopper');
    //   }, 400);
    // });

    return (
      <div className="main__header__links__container">
        <ul
          ref={list => {
            this.setState({ myList: list });
          }}
          className="nav-links"
        >
          <NavigationLink destination="/" text="Home" />
          <NavigationLink destination="/about/" text="About" />
          <NavigationLink destination="/team/" text="Team" />
          <NavigationLink destination="/news/" text="News" />
          <NavigationLink destination="/contact" text="Contact" />
        </ul>
        <div
          role="button"
          className="burger"
          tabIndex={0}
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          ref={burger => {
            this.setState({ burger });
          }}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </div>
    );
  }
}

/* <NavigationButton destination="/" text="Home" />
            <NavigationButton destination="/about/" text="About" />
            <NavigationButton destination="/team/" text="Team" />
            <NavigationButton destination="/news/" text="News" />
            <NavigationButton destination="/contact" text="Contact" /> */

export default NavigationBar;
