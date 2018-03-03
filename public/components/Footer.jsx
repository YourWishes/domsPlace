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

const FooterLink = function(props) {
  return (
    <span className="c-footer__link">
      <a href={props.to} className="c-footer__link-link">
        {props.children}
      </a>
    </span>
  )
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let year = new Date().getFullYear();
    return (
      <footer className="c-footer">
        <span className="c-footer__copyright">
          2012 ~ {year} | Dominic Masters.
        </span>

        <nav className="c-footer__links">
          <FooterLink to="/">Privacy Policy</FooterLink>
          <FooterLink to="/">Contact Us</FooterLink>
        </nav>
      </footer>
    )
  }
}

export default Footer;
