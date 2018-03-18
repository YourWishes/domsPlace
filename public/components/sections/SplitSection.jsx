/*
 *  Poly
 *    Poly styled section.
 *
 *  Dependencies:
 *    styles/components/_section--style-split.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/11
 */
import React from 'react';
import Section from './../Section';

const SplitSectionSection = function(props) {
  let clazz = "c-section--style-split__split-part";

  if(typeof props.className !== typeof undefined) clazz += " " + props.className;

  return (
    <div className={clazz}>
      {props.children}
    </div>
  );
}

class SplitSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Section section="split" full={this.props.full ? true : false} className={this.props.className}>
        <SplitSectionSection className={this.props.leftClass}>
          {this.props.left}
        </SplitSectionSection>

        <SplitSectionSection className={this.props.rightClass}>
          {this.props.right}
        </SplitSectionSection>
      </Section>
    );
  }
}

export default SplitSection;
