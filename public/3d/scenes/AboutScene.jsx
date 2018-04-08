/*
 *  About Scene.
 *    About that one lad.
 *
 *  Dependencies:
 *
 *  Version:
 *    1.0.0 - 2018/04/08
 */
import SceneComponent from './SceneComponent';
import * as THREE from 'three';
import PVM from './../models/pvm.json';
import * as Easing from './../../animation/Easing.js';

class AboutScene extends SceneComponent {
  constructor(props) {
    super(props);
  }

  onSetup(scene, camera, renderer) {
    this.loader = this.loader || new THREE.ObjectLoader();

    this.pvm = this.pvm || this.loader.parse(PVM);
    if(typeof this.screenMaterial === typeof undefined) {
      let child = this.pvm.children[0].children[27];//TV Screen
      this.screenMaterial = child.material;
    }
    this.pvm.position.x = 0.7;
    this.pvm.position.z = -0.7;
    scene.add(this.pvm);
  }

  onUpdate(scene, camera, renderer) {
    var dur = 1500;
    let time = new Date().getTime();
    let t = (time % dur) / dur;
    let h = ((time+dur/4) % dur) / dur;

    let d;
    let q;
    if(t < 0.5) {
      d = Easing.easeInOutQuad(t, 0, 1, 0.5);
    } else {
      d = Easing.easeInOutQuad(t-0.5, 1, -1, 0.5);
    }

    if(h < 0.5) {
      q = Easing.easeInOutQuad(h, 0, 1, 0.5);
    } else {
      q = Easing.easeInOutQuad(h-0.5, 1, -1, 0.5);
    }

    this.pvm.rotation.x = THREE.Math.degToRad((d*10) - 90);
    this.pvm.rotation.z = THREE.Math.degToRad(134-(q*2));
    this.pvm.position.y = (0.5 - q)/11;

    this.screenMaterial.color = new THREE.Color(q/8, q/4, 0.5+q/2);
  }
}

export default AboutScene;
