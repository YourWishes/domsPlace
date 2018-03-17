/*
 *  Section
 *    Simple Page Section.
 *
 *  Dependencies:
 *    styles/components/_section.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */

import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clazz = "c-section";

    if(this.props.section) clazz += " c-section--style-"+this.props.section;
    if(this.props.full) clazz += " c-section--full-width";
    if(this.props.className) clazz += " " + this.props.className;

    return (
      <section className={ clazz }>
        { this.props.children }
      </section>
    )
  }
}

export default Section;
