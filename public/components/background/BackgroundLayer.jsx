/*
 *  Background Layer
 *    Simple Background Layer.
 *
 *  Dependencies:
 *    styles/components/_background-layer.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */
import React from 'react';

class BackgroundLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class={"c-background-layer c-background-layer--" + this.props.layer} ref="layer">
      </div>
    );
  }
}

export default BackgroundLayer;
