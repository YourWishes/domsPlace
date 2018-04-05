/*
 *  Background Layers
 *    Wrapper for the background layer's, provides logic in a cost efficient manner.
 *
 *  Dependencies:
 *    ./BackgrundLayer.jsx
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */
import React from 'react';
import BackgroundLayer from './BackgroundLayer';

class BackgroundLayers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.layerMounted = true;
    this.onFrame();
  }

  componentWillUnmount() {
    this.layerMounted = false;
  }

  onFrame() {
    if(this.layerMounted) {
      requestAnimationFrame(this.onFrame.bind(this));
    }

    //https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
    let h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    for(var i = 0; i < this.props.layers.length; i++) {
      let layerContainer = this.refs["layer-"+i];
      let layer = layerContainer.refs.layer;
      layer.style["transform"] = "translateY(-"+(percent/4)+"%) translateZ(0)";
    }
  }

  render() {
    let layers = [];

    for(var i = 0; i < this.props.layers.length; i++) {
      let l = this.props.layers[i];
      let e = <BackgroundLayer layer={l.layer} key={"layer-"+i} ref={"layer-"+i} />
      layers.push(e);
    }

    return (
      <div class="c-background-layers" ref="">
        {layers}
      </div>
    );
  }
}

export default BackgroundLayers;
