/*
 *  BlankPromo
 *    Blank Promo section.
 *
 *  Dependencies:
 *    styles/components/_section--style-blank-promo.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */

import React from 'react';
import Section from './../Section';

class BlankPromo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section section="blank-promo" full>
      </Section>
    )
  }
}

export default BlankPromo;
