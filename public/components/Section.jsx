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
    let style = (this.props.section ?  "c-section--style-"+this.props.section : "");
    let fullWidth = this.props.full ? "c-section--full-width" : "";
    console.log(this.props);

    return (
      <section className={"c-section " + style + " " + fullWidth }>
        { this.props.children }
      </section>
    )
  }
}

export default Section;
