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
import { openModal, closeModal } from './../actions/ModalActions';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let junk = [];
    for(let x = 0; x < 1000; x++) {
      junk.push(<div  key={x}>Hello World</div>);
    }

    //Add necessary buttons
    let buttons;
    if(this.props.buttons) buttons = this.props.button;

    //Create our modal contents
    let contents = (
      <div className="o-modal">
        <div className="o-modal__inner">
          <div className="o-modal__backdrop" onClick={this.props.closeModal}>
          </div>

          <div className="o-modal__box">
            <div className="o-modal__box-inner">
              <div className="o-modal__box-body">
                <div className="o-modal__box-body-inner">
                  { junk }
                </div>
              </div>

              <div className="o-modal__box-footer">
                { buttons }
              </div>
            </div>
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
    modal: state.modal
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openModal: openModal,
    closeModal: closeModal
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
