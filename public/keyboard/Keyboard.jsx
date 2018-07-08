// Copyright (c) 2018 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const KEY_ESCAPE = 27;
const KEY_CTRL = 17;
const KEY_ENTER = 13;

class Keyboard {
  constructor(){
    //Bound events
    this.onKeyUpBound = this.onKeyUp.bind(this);
    this.onKeyDownBound = this.onKeyDown.bind(this);

    this.listeners = [];

    this.states = {};
  }

  isRegistered() {return this.registered === true;}

  register() {
    if(this.isRegistered()) return;
    this.registered = true;
    document.addEventListener('keyup', this.onKeyUpBound);
    document.addEventListener('keydown', this.onKeyDownBound);
  }

  unregister() {
    this.registered = false;
    document.removeEventListener('keyup', this.onKeyUpBound);
    document.removeEventListener('keydown', this.onKeyDownBound);
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    let index = this.listeners.indexOf(listener);
    if(index === -1) return;
    this.listeners.splice(index,1);
  }

  tellListeners(keyCode, event) {
    for(let i = 0; i < this.listeners.length; i++) {
      let l = this.listeners[i];
      if(typeof l[event] !== "function") continue;
      l[event](keyCode, this);
    }
  }

  onKeyUp(e) {
    //console.log("Key " + e.keyCode); // FOR TESTING KEY COMBOS
    this.tellListeners(e.keyCode, "onKeyUp");
    this.states[e.keyCode] = false;
    this.tellListeners(e.keyCode, "onKeyRelease");
  }

  onKeyDown(e) {
    this.tellListeners(e.keyCode, "onKeyPress");
    this.states[e.keyCode] = true;
    this.tellListeners(e.keyCode, "onKeyRelease");
  }

  isKey(key) {
    return typeof this.states[key] !== typeof undefined && this.states[key] === true;
  }

  //Now the submits
  isEscape() {
    return this.isKey(KEY_ESCAPE);
  }

  isSubmit() {
    return this.isKey(KEY_CTRL) && this.isKey(KEY_ENTER);
  }
}

export default new Keyboard();
