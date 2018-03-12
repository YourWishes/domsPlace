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
import { connect } from 'react-redux';
import Language from './../../language/Language';

const MenuItems = {
  "navbar.contact.title": {
    "navbar.contact.about": "/about",
    "navbar.contact.contact": "/contact"
  },
  "navbar.legal.title": {
    "navbar.legal.privacy": "/privacy-policy"
  }
}

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
    <NavLink className="c-menu__item" to={props.to} onClick={props.onClick}>
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

  openMenu() {
    this.setState({
      open: true
    });
  }

  closeMenu() {
    this.setState({
      open: false
    })
  }

  render() {
    if(this.state.open) {
      document.body.classList.add('is-menu-open');
    } else {
      document.body.classList.remove('is-menu-open');
    }

    let menu = [];
    let keys = Object.keys(MenuItems);
    for(var i = 0; i < keys.length; i++) {
      let k = keys[i];
      let sKeys = Object.keys(MenuItems[k]);
      let menuItems = [];
      for(var x = 0; x < sKeys.length; x++) {
        let sKey = sKeys[x];
        console.log(sKey);
        menuItems.push(<MenuItem to={MenuItems[k][sKey]} onClick={this.closeMenu.bind(this)} key={x+"-"+i}>{Language.get(sKey)}</MenuItem>)
      }
      menu.push(
        <MenuGroup title={Language.get(k)} key={i}>
          {menuItems}
        </MenuGroup>
      );
    }

    return (
      <nav className="c-menu__wrapper open">
        <div className="c-menu">
          <div className="c-menu__fix">
            <div className={"c-menu__container" + (this.state.open === true ? " open": "")}>
              <div className="c-menu__body">
                <div className="c-menu__fix c-menu__groups">
                  {menu}
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

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(Menu);
