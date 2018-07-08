// Copyright (c) 2018 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from './../input/Input';
import Language from './../language/Language';
import { openModal, closeModal } from './../actions/ModalActions';
import { Heading4 } from './../typography/Typography';
import Keyboard from './../keyboard/Keyboard';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Keyboard.addListener(this);
  }

  componentWillUnmount() {
    Keyboard.removeListener(this);
  }

  onKeyUp(e) {
    if(!Keyboard.isEscape()) return;
    e.preventDefault();
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    //Add necessary buttons
    let buttons = [];
    if(this.props.buttons) {
      if(Array.isArray(buttons)) {
        buttons.concat(this.props.buttons);
      } else {
        buttons.push(this.props.buttons);
      }
    }

    if(this.props.close) {
      buttons.push(<Button key="close" onClick={this.props.closeModal}>{ Language.get("modal.close") }</Button>);
    }

    //Inner divs
    let heading,body,footer;
    if(this.props.title) {
      heading = (
        <div className="o-modal__box-heading">
          <Heading4 className="o-modal__title">
            { this.props.title }
          </Heading4>
        </div>
      );
    }

    if(this.props.children) {
      body = (
        <div className="o-modal__box-body">
          { this.props.children }
        </div>
      );
    }

    if(buttons) {
      footer = (
        <div className="o-modal__box-footer">
          { buttons }
        </div>
      );
    }

    //Create our modal contents
    let contents = (
      <div className="o-modal">
        <div className="o-modal__inner">
          {/* Provides both a good overlay, and a nice clickable area  */}
          <div className="o-modal__backdrop" onClick={this.props.closeModal}>
          </div>

          {/* Box itself, has a background and a shadow */}
          <div className={"o-modal__box" + (this.props.large ? " is-large":"")}>
            { heading }
            { body }
            { footer }
          </div>
        </div>
      </div>
    );

    //Display?
    let displayedContents = <div></div>;

    if(this.props.modal.open) {
      displayedContents = (
        <CSSTransition
          appear={true}
          timeout={200}
          classNames="o-modal__transition"
          mountOnEnter={ true }
          unmountOnExit={ true }
          key="modal"
        >
          { contents }
        </CSSTransition>
      );
    }

    //Wrap entire contents of modal in transitional container.
    return (
      <TransitionGroup className="o-modal__transition-container">
        { displayedContents }
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    language: state.language
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openModal: openModal,
    closeModal: closeModal
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
