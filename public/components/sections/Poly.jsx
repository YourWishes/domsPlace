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
import ThreeSection from './ThreeSection';
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

  onSetup(scene) {
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

      scene.add(cube);
      this.cubes.push(cube);

      if(typeof c.outline !== typeof undefined) {
        let outline = new THREE.MeshBasicMaterial( { color: c.outline, side: THREE.BackSide } );
        let outlineMesh = new THREE.Mesh( geometry, outline );
        outlineMesh.position.x = cube.position.x;
        outlineMesh.position.y = cube.position.y;
        outlineMesh.position.z = cube.position.z;
        outlineMesh.scale.multiplyScalar(1.05);

        this.outlines[i] = outlineMesh;
        scene.add( outlineMesh );
      }
    }

  }

  onRender(diff) {
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
  }

  render() {
    return (
      <ThreeSection
        onRender={this.onRender.bind(this)}
        onSetup={this.onSetup.bind(this)}
      />
    )
  }
}

export default Poly;
