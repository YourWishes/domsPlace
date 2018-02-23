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
        This is my navbar11
      </nav>
    )
  }
}

export default Navbar;
