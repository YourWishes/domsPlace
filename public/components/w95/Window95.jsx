import React, { Component } from 'react';

import ContextMenuButton from './ContextMenuButton';
import ContextButton from './ContextButton';
import ContextMenu from './ContextMenu';

const defaultButtons = {
  maximize: false,
  minimize: "disabled",
  close: true
};

const defaultMenus = {
  "File": {
    "New...": true,
    "Open...": "disabled",
    "Exit": true,
  },

  "Edit": "disabled",
  "Help": {
    "View Help...": true,
    "About domsPlace();": true
  }
};

class Window95 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ? this.props.title : "Untitled",
      buttons: this.props.buttons ? this.props.buttons : defaultButtons,
      menu: this.props.menu ? this.props.menu : defaultMenus
    };
  }

  render() {
    let btns = [];
    let btnKeys = Object.keys(this.state.buttons);
    for(let i = 0; i < btnKeys.length; i++) {
      let key = btnKeys[i];
      var b = this.state.buttons[key];
      if(b === false) continue;
      let cls = "btn " + btnKeys[i];
      if(b !== true && b !== false) cls += " " + b;
      btns.push(<div className={cls} key={i}></div>);
    }

    let menu = <div></div>
    if(this.state.menu !== "false") {
      menu = <ContextMenu menu={this.state.menu} />;
    }

    let clss = "c-window ";
    if(this.props.className) clss += this.props.className;

    return (
      <div className={clss}>
        <div className="load_me_stuff"></div>
        <div className="c-title-bar">
          {this.state.title}
          <div className="buttons">
            {btns}
          </div>
        </div>
        {menu}

        {this.props.children}
      </div>
    );
  }
}

export default Window95;
