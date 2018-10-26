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

import Styles from './Modal.scss';

import Language from '@public/language/Language';
import { openModal, closeModal } from '@public/actions/ModalActions';
import Keyboard from '@public/keyboard/Keyboard';

import { Button } from './../input/Input';
import { Heading4 } from '@objects/typography/Typography';

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
    this.props.closeModal();
  }

  render() {
    let newProps = {...this.props};
    let { buttons, closeModal, close, title, children, large, modal } = newProps;
    ["onExited"].forEach(e => delete newProps[e]);

    //Add necessary buttons
    buttons = buttons || [];
    if(!Array.isArray(buttons)) buttons = [ buttons ];

    if(close) buttons = [...buttons,<Button key="close" onClick={closeModal} children={Language.get("modal.close")} />];

    //Inner divs
    let heading,body,footer;

    if(title) {
      heading = (
        <div className="o-modal__box-heading">
          <Heading4 className="o-modal__title">{ title }</Heading4>
        </div>
      );
    }
    if(children) body = <div className="o-modal__box-body" children={ children } />;
    if(buttons && buttons.length) footer = <div className="o-modal__box-footer">{ buttons }</div>;

    //Create our modal contents
    let contents = <div />;

    if(modal.open) {
      contents = (
        <div className="o-modal">
          <div className="o-modal__inner">
            {/* Provides both a good overlay, and a nice clickable area  */}
            <div className="o-modal__backdrop" onClick={closeModal} />

            {/* Box itself, has a background and a shadow */}
            <div className={"o-modal__box"+(large ? " is-large":"")}>
              { heading }
              { body }
              { footer }
            </div>
          </div>
        </div>
      );
    }

    //Wrap entire contents of modal in transitional container.
    return (
      <TransitionGroup className="o-modal__transition-container">
        <CSSTransition appear={true} timeout={200} classNames="o-modal__transition" mountOnEnter={ true } unmountOnExit={ true } key="modal">
          { contents }
        </CSSTransition>
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
