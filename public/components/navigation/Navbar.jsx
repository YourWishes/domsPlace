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
import { Link, NavLink } from 'react-router-dom';
import Menu from './Menu';

const NavbarLink = function(props) {
  return (
    <NavLink exact to={props.to} className="c-navbar__link" activeClassName="active">
      <span className="c-navbar__link-text">{props.children}</span>
    </NavLink>
  )
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="c-navbar">
        <Menu open />

        <Link to="/" className="c-navbar__logo-container">
          <img src={ require('./../../images/logo.svg') } className="c-navbar__logo" alt="domsPlace" />
        </Link>

        <div className="c-navbar__links">
          <NavbarLink exact to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </div>
      </nav>
    )
  }
}

export default Navbar;
