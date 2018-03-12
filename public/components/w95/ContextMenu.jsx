import React, { Component } from 'react';
import { render } from 'react-dom';

import ContextButton from './ContextButton';
import ContextMenuButton from './ContextMenuButton';

class ContextMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = function(e) {
      this.closeMenu();
      e.stopPropagation();
    }.bind(this);
  }

  isOpen() {
    return this.open;
  }

  openMenu(ref, el) {
    let keys = Object.keys(this.refs);
    for(let i = 0; i < keys.length; i++) {
      this.refs[keys[i]].hide(ref, el);
    }
    el.open();
    this.open = true;
  }

  closeMenu() {
    let keys = Object.keys(this.refs);
    for(let i = 0; i < keys.length; i++) {
      this.refs[keys[i]].hide();
    }
    this.open  = false;
  }

  hoverMenu(ref, el) {
    if(!this.isOpen()) return;
    this.openMenu(ref, el);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    let contextButtons = [];
    let btnKeys = Object.keys(this.props.menu);
    for(let i = 0; i < btnKeys.length; i++) {
      let key = btnKeys[i];
      var b = this.props.menu[key];
      if(b === false) continue;
      contextButtons.push(<ContextButton data={b} title={key} menu={this} ref={key} key={key} selfRef={key} />);
    }

    return (
      <div className="context-menu">
        {contextButtons}
      </div>
    );
  }
}

export default ContextMenu;
