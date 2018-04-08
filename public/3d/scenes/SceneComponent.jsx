/*
 *  Scene Component
 *    About that one lad.
 *
 *  Dependencies:
 *    styles/components/_scene-component.scss
 *
 *  Version:
 *    1.0.0 - 2018/04/08
 */

import React from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

class SceneComponet extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(typeof this.scene !== typeof undefined) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      17,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.isAlive = true;

    this.renderer = new THREE.WebGLRenderer({canvas: this.refs.canvas, alpha: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.camera.position.z = 1;

    this.ambient1 = new THREE.AmbientLight(0xFFCCFF, 0.2);
    this.scene.add(this.ambient1);
    this.ambient2 = new THREE.AmbientLight(0xFFFFFF, 0.5);
    this.scene.add(this.ambient2);

    this.light = new THREE.DirectionalLight(0x22BBFF, 0.3);
    this.light.position.x = this.camera.position.x;
    this.light.position.y = this.camera.position.y;
    this.light.position.z = this.camera.position.z;
    this.scene.add(this.light);

    if(typeof this.onSetup !== typeof undefined) {
      this.onSetup(this.scene, this.camera, this.renderer);
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

    if(typeof this.onUpdate !== typeof undefined) {
      this.onUpdate(diff);
    }

    this.renderer.render(this.scene, this.camera);
    this.lastTime = now;

    requestAnimationFrame(this.onFrame.bind(this));
  }

  render() {
    return (
      <div className="c-scene-component">
        <div className="c-scene-component__canvas-space" ref="canvasSpace"></div>
        <canvas ref="canvas" className="c-scene-component__canvas">
        </canvas>
      </div>
    );
  }
}

export default SceneComponet;
