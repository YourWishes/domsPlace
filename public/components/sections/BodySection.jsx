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
    return (
      <Section section="body" className={this.props.className}>
        <div className="c-section--style-body__inner">
          {this.props.children}
        </div>
      </Section>
    )
  }
}

export default BodySection;
