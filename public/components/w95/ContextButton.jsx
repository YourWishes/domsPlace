import React, { Component } from 'react';
import { render } from 'react-dom';

import ContextMenuButton from './ContextMenuButton';

class ContextButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = function(e) {
      if(this.isOpen()) {
        //Already active, close menu.
        this.props.menu.closeMenu();
      } else {
        this.props.menu.openMenu(this.props.selfRef, this);
      }
      e.stopPropagation();
    }.bind(this);

    this.handleHover = function() {
      this.props.menu.hoverMenu(this.props.selfRef, this);
    }.bind(this);
  }

  componentDidMount() {
    let e = this.refs[this.props.selfRef];

    e.addEventListener('click', this.handleClick);
    e.addEventListener('mouseover', this.handleHover);
  }

  componentWillUmount() {
    let e = this.refs[this.props.selfRef];

    e.removeEventListener('click', this.handleClick);
    e.removeEventListener('mouseover', this.handleHover);
  }

  open() {
    if(this.isDisabled()) return this.hide();
    this.refs[this.props.selfRef].addClass("active");
  }

  isDisabled() {return this.refs[this.props.selfRef].hasClass("disabled");}

  hide() {
    this.refs[this.props.selfRef].removeClass("active");
  }

  isOpen() {
    return this.refs[this.props.selfRef].hasClass("active");
  }

  render() {
    let cls = "btn";

    let options = [];
    if(this.props.data === "disabled") {
      cls += " disabled";
    } else {
      let opts = Object.keys(this.props.data);
      for(let i = 0; i < opts.length; i++) {
        let k = opts[i];
        let o = this.props.data[k];
        //options.push(<div className="menu-option">{k}</div>);
        options.push(<ContextMenuButton ref={k} key={k} selfRef={k} data={o} button={this} title={k} />);
      }
    }

    let menu = <div></div>;
    if(options.length > 0) {
      menu = (
        <div className="menu">
          {options}
        </div>
      );
    }

    return (
      <div className={cls} ref={this.props.selfRef}>
        {this.props.title}
        {menu}
      </div>
    )
  }
}

export default ContextButton;
