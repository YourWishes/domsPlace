/*
 *  Header
 *    Header for page, contains navbar as well as other consistant top of page
 *    elements.
 *
 *  Dependencies:
 *    styles/components/_header.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/23
 */

import React from 'react';

import Navbar from './navigation/Navbar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="c-header">
        <Navbar />
      </header>
    )
  }
}

export default Header;
