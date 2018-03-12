import React, { Component } from 'react';
import { render } from 'react-dom';

class ContextMenuButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = function(e) {
      e.stopPropagation();
      if(this.isDisabled()) return;
      this.props.button.props.menu.closeMenu();
      this.clicked();
    }.bind(this);
  }

  clicked() {
    if(typeof this.props.data === 'function') {
      this.props.data();
    }
  }

  componentDidMount() {
    this.refs.option.addEventListener('click', this.handleClick);
  }

  componentWillUmount() {
    this.refs.option.removeEventListener('click', this.handleClick);
  }

  isDisabled() {return this.props.data === "disabled";}

  render() {
    let cls = "menu-option";

    if(this.isDisabled()) cls += " disabled";

    return (
      <div className={cls} ref="option">
        {this.props.title}
      </div>
    );
  }
}

export default ContextMenuButton;
