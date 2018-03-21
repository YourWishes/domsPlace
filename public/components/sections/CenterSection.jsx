/*
 *  Center Section
 *    Section for centered items.
 *
 *  Dependencies:
 *    styles/components/_section--style-center.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/21
 */

import React from 'react';
import Section from './../Section';

class CenterSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section section="center" className={this.props.className}>
      </Section>
    )
  }
}

export default CenterSection;
