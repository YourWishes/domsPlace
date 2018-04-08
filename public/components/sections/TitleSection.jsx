/*
 *  Title Section
 *    Simple title section used for most pages.
 *
 *  Dependencies:
 *    styles/components/_section--style-title.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */

import React from 'react';
import { connect } from 'react-redux';

import Language from './../../language/Language';
import Section from './../Section';

class TitleSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let children = [];

    if(this.props.scene) {
      //3D Model to add to the title, naisu
      children.push(
        <div className="c-section--style-title__model-container" key="model">
          { this.props.scene }
        </div>
      );
    }

    return (
      <Section section="title">
        <h1 className="c-section--style-title__title">
          { Language.get(this.props.title) }
        </h1>
        { children }
      </Section>
    )
  }
}


const mapStateToProps = function(state) {
  return { code: state.language.code }
}
export default connect(mapStateToProps)(TitleSection);
