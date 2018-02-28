/*
 *  Poly
 *    Poly styled section.
 *
 *  Dependencies:
 *    styles/components/_section--style-poly.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */

import React from 'react';
import Section from './../Section';
import * as THREE from 'three';

const CUBES = [
  {
    size: [1, 1, 1],
    pos: [-4,-0.3,1],
    velocity: [0.3, 0.1, 0],
    color: 0xFFFFFF
  },
  {
    size: [1, 1, 1],
    pos: [1,-0.8,-0.3],
    velocity: [-0.3, 0.05, 0.1],
    color: 0xCCFFFF
  },
  {
    size: [1, 1, 1],
    pos: [-0.8,0.4,-5],
    velocity: [0, -0.1, 0.1],
    color: 0xf7ffb7
  },
  {
    size: [1, 1, 1],
    pos: [6,1,-2],
    velocity: [0.2, 0.5, 0],
    color: 0xffb7ee
  },
  {
    size: [1, 1, 1],
    pos: [-3,1,0.3],
    velocity: [0.2, 0.5, 0],
    color: 0xaaffb9
  },
  {
    size: [0.8, 0.8, 0.8],
    pos: [2.2,1,0.3],
    velocity: [1, 0.1, -0.1],
    color: 0xff66ab
  }
];

class Poly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(typeof this.scene !== typeof undefined) return;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(17, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.isAlive = true;

    this.render = new THREE.WebGLRenderer({canvas: this.refs.canvas, alpha: true});
    this.render.setSize(window.innerWidth, window.innerHeight);

    this.cubes = [];
    this.outlines = [];
    for(var i = 0; i < CUBES.length; i++) {
      let c = CUBES[i];

      let geometry = new THREE.BoxGeometry(c.size[0],c.size[1],c.size[2]);

      let material = new THREE.MeshLambertMaterial( { color: c.color } );
      let cube = new THREE.Mesh(geometry, material);
      cube.position.x = c.pos[0];
      cube.position.y = c.pos[1];
      cube.position.z = c.pos[2];
      cube.rotation.x = Math.random()*360;
      cube.rotation.y = Math.random()*360;
      cube.rotation.z = Math.random()*360;
      cube.velocity = c.velocity;
      this.scene.add(cube);
      this.cubes.push(cube);

      if(typeof c.outline !== typeof undefined) {
        let outline = new THREE.MeshBasicMaterial( { color: c.outline, side: THREE.BackSide } );
        let outlineMesh = new THREE.Mesh( geometry, outline );
        outlineMesh.position.x = cube.position.x;
        outlineMesh.position.y = cube.position.y;
        outlineMesh.position.z = cube.position.z;
        outlineMesh.scale.multiplyScalar(1.05);

        this.outlines[i] = outlineMesh;
        this.scene.add( outlineMesh );
      }
    }

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

    this.render.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.fov = vfovRad * 180 / Math.PI;
    this.camera.updateProjectionMatrix();
    requestAnimationFrame(this.onFrame.bind(this));
    this.render.render(this.scene, this.camera);

    for(var i = 0; i < this.cubes.length; i++) {
      let e = this.cubes[i];
      let o = this.outlines[i];
      let c = CUBES[i];

      e.rotation.x += c.velocity[0] * diff;
      e.rotation.y += c.velocity[1] * diff;
      e.rotation.z += c.velocity[2] * diff;

      if(typeof o !== typeof undefined) {
        o.rotation.x = e.rotation.x;
        o.rotation.y = e.rotation.y;
        o.rotation.z = e.rotation.z;
      }
    }
    this.lastTime = now;
  }

  render() {
    return (
      <Section section="poly" full>
        <div className="c-section--style-poly__canvas" ref="canvasSpace"></div>
        <canvas ref="canvas" className="c-section--style-poly__canvas">
        </canvas>
      </Section>
    )
  }
}

export default Poly;
