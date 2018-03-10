/*
 *  ThreeJS Section
 *    Section for Three JS.
 *
 *  Version:
 *    1.0.0 - 2018/03/10
 */

import React from 'react';
import Section from './../Section';
import * as THREE from 'three';

class ThreeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(typeof this.scene !== typeof undefined) return;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(17, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.isAlive = true;

    this.renderer = new THREE.WebGLRenderer({canvas: this.refs.canvas, alpha: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.camera.position.z = 5;

    this.ambient1 = new THREE.AmbientLight(0xFFCCFF, 0.2);
    this.scene.add(this.ambient1);
    this.ambient2 = new THREE.AmbientLight(0xFFFFFF, 0.5);
    this.scene.add(this.ambient2);

    this.light = new THREE.DirectionalLight(0x22BBFF, 0.5);
    this.light.position.x = this.camera.position.x;
    this.light.position.y = this.camera.position.y;
    this.light.position.z = this.camera.position.z + 8;
    this.scene.add(this.light);

    if(typeof this.props.onSetup !== typeof undefined) {
      this.props.onSetup(this.scene, this.camera, this.renderer);
    }

    this.onFrame();
  }

  componentWillUnmount() {
    this.isAlive = false;
  }

  onFrame() {
    if(!this.isAlive) return;

    let now = new Date();
    let width = this.refs.canvasSpace.clientWidth;
    let height = this.refs.canvasSpace.clientHeight;
    let diff = now.getTime() - (this.lastTime || new Date()).getTime();
    diff = diff / 1000;

    let hfov = 95;
    let hfovRad = hfov * Math.PI / 180;
    let vfovRad = 2*Math.atan(Math.tan(hfovRad/2)*height/width);

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.camera.aspect = width / height;
    this.camera.fov = vfovRad * 180 / Math.PI;
    this.camera.updateProjectionMatrix();

    if(typeof this.props.onRender !== typeof undefined) {
      this.props.onRender(diff);
    }

    this.renderer.render(this.scene, this.camera);
    this.lastTime = now;

    requestAnimationFrame(this.onFrame.bind(this));
  }

  render() {
    return (
      <Section section="three" full>
        <div className="c-section--style-three__canvas" ref="canvasSpace"></div>
        <canvas ref="canvas" className="c-section--style-three__canvas">
        </canvas>
      </Section>
    )
  }
}

export default ThreeSection;
