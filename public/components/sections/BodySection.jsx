/*
 *  Body Section
 *    Section for content bodies.
 *
 *  Dependencies:
 *    styles/components/_section--style-body.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/01
 */

import React from 'react';
import Section from './../Section';

class BodySection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let children;

    if(this.props.children) {
      if(this.props.unpadded) {
        children = this.props.children;  
      } else {
        children = (
          <div className="c-body-section__wrapper">
            {this.props.children}
          </div>
        );
      }
    }

    return (
      <Section section="body" className={this.props.className}>
        <div className="c-section--style-body__inner">
          { this.props.title }
          { children }
        </div>
      </Section>
    )
  }
}

export default BodySection;
