/*
 *  Header
 *    Header for page, contains navbar as well as other consistant top of page
 *    elements.
 *
 *  Dependencies:
 *    styles/components/_navbar.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/23
 */

import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

const NavLink = function(props) {
  return (
    <a href={props.to} className="c-navbar__link">
      <span className="c-navbar__link-text">{props.children}</span>
    </a>
  )
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="c-navbar">
        <button type="button" className="c-navbar__menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <a href="#" className="c-navbar__logo-container">
          <img src={ require('./../../images/logo.svg') } className="c-navbar__logo" alt="domsPlace" />
        </a>

        <div className="c-navbar__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    )
  }
}

export default Navbar;
