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

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="c-navbar">
        This is my navbar
      </nav>
    )
  }
}

export default Navbar;
