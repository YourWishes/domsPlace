/*
 *  Menu
 *    Simple expandable menu.
 *
 *  Dependencies:
 *    styles/components/_menu.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/01
 */

import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/fontawesome-free-solid'


const MenuGroup = function(props) {
  return (
    <nav className="c-menu__group">
      <h1 className="c-menu__group-title">{props.title}</h1>
      {props.children}
    </nav>
  )
}

const MenuItem = function(props) {
  return (
    <NavLink className="c-menu__item" to={props.to}>
      {props.children}
    </NavLink>
  )
}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    if(this.state.open) {
      document.body.classList.add('is-menu-open');
    } else {
      document.body.classList.remove('is-menu-open');
    }


    return (
      <nav className="c-menu__wrapper open">
        <div className="c-menu">
          <div className="c-menu__fix">
            <div className={"c-menu__container" + (this.state.open === true ? " open": "")}>
              <div className="c-menu__body">
                <div className="c-menu__fix c-menu__groups">

                  <MenuGroup title="Get in touch">
                    <MenuItem to="/contact">Contact Me</MenuItem>
                  </MenuGroup>

                  <MenuGroup title="Legal Stuff">
                    <MenuItem to="/privacy-policy">Privacy Policy</MenuItem>
                  </MenuGroup>

                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="c-menu__button" onClick={this.toggleMenu.bind(this)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    )
  }
}

export default Menu;
