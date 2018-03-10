/*
 *  Poly
 *    Poly styled section.
 *
 *  Dependencies:
 *    styles/components/_section--style-phone.scss
 *
 *  Version:
 *    1.1.0 - 2018/03/10
 */
import React from 'react';
import ThreeSection from './ThreeSection';
import * as THREE from 'three';
import * as Easing from './../../animation/Easing';

import PhoneModel from './../../3d/phone.json';

class PhoneSection extends React.Component {
  constructor(props) {
    super(props);
  }

  onSetup(scene) {
    this.loader = new THREE.JSONLoader();
    this.data = this.loader.parse(PhoneModel);

    this.material = new THREE.MeshLambertMaterial({
      color: 0xff66ab
    });

    this.mesh = new THREE.Mesh(this.data.geometry, this.material);
    this.mesh.position.z = 2;
    scene.add(this.mesh);
  }

  getV(j) {
    var x = new Date().getTime() % j;
    var h = x;
    if(x > (j/2)) h = (j/2) - (x - (j/2));
    h *= 2;
    return Easing.easeInOutQuart(h, 0, 1, j);
  }

  onRender(diff) {
    this.mesh.rotation.set(
      THREE.Math.degToRad(this.getV(25000)*5),
      THREE.Math.degToRad(this.getV(15000)*10),
      THREE.Math.degToRad(this.getV(40000)*20)
    );
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

export default PhoneSection;
