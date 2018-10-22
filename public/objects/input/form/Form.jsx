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

import React from 'react';
import Loader, { LoaderBackdrop } from '@objects/loading/Loader';
import Input, { InputGroup, TextArea } from './../Input';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    //Prepare our initial state
    let s = {
      ajax: props.ajax || false,
      loader: props.loader || false,
      loading: false,
      onSubmit: props.onSubmit,
      contentType: props.contentType || props.encType || "application/x-www-form-urlencoded",
      manager: props.manager
    };

    //Determine action and method based off the internals
    if(props.action) s.action = props.action;
    if(props.method) s.method = props.method;

    if(props.get) {
      s.action = props.get;
      s.method = "GET";
    }

    if(props.post) {
      s.action = props.post;
      s.method = "POST";
    }

    //Write our state to the component
    this.state = s;
  }

  componentDidMount() {
    if(this.props.manager) this.props.manager.addForm(this);
  }

  componentWillUnmount() {
    if(this.props.manager) this.props.manager.removeForm(this);
  }

  submit() {
    this.onSubmit();
  }

  onSubmit(e) {
    //Is Ajax?
    if(!this.state.ajax) {
      return this.state.onSubmit ? this.state.onSubmit(e) : true;
    }

    if(e) e.preventDefault();
    if(!this.state.action) return console.warning("This form has no action.");
    if(this.state.submitting) return false;//Already submitting?

    //Start submitting!
    this.setState({
      loading: true,
      submitting: true
    });

    //Prepare our data
    let data;
    if(this.props.manager) {
      data = this.props.manager.getFormData();
    }

    if(this.state.contentType == "application/json") {
      let dataJson = {};
      data.forEach(function(value, key) {
        dataJson[key] = value;
      });
      data = JSON.stringify(dataJson);
    }

    //Prepare our request.
    fetch(this.state.action, {
      method: this.state.method,
      mode: this.state.mode,
      body: data,
      headers: {
        "Content-Type": this.state.contentType
      }
    })
      .then(this.onSubmitted.bind(this))
      .catch(this.onError.bind(this))
    ;

    return false;
  }

  onSubmitted(response) {
    let method = 'text';
    let isJson = response.headers.get("Content-Type").toLowerCase().indexOf("application/json") !== -1;
    if(isJson) method = 'json';

    if(!response.ok) {
      let is4xx = Math.floor(response.status / 400) === 1;
      if(is4xx) {
        return response[method]()
          .then(this.onErrorText.bind(this))
          .catch(this.onError.bind(this))
        ;
      } else {
        throw Error(response.statusText);
      }
    }

    if(this.props.onData) return this.props.onData(response);

    //Handle the old fashioned way (expect json)
    response[method]()
      .then(this.onData.bind(this))
      .catch(this.onError.bind(this))
    ;
  }

  onData(response) {
    if(this.props.onSuccess) return this.props.onSuccess(response);
    console.log(response);
  }

  onErrorText(e,a,b) {
    this.onError(e,a,b);
  }

  onError(e, a, b) {
    this.setState({
      loading: false,
      submitting: false
    });
    if(this.props.onError) return this.props.onError(e, a, b);

    if(e) console.error(e);
    if(a) console.error(a);
    if(b) console.error(b);
  }

  render() {
    let clazz = "o-form";
    if(this.props.className) clazz += " " + this.props.className;

    //Do I need a loader?
    let loader;
    if(this.state.loader && this.state.loading) {
      loader = (
        <LoaderBackdrop className="o-form__loader">
          <Loader className="o-form__loader-spinner" />
        </LoaderBackdrop>
      );
    }

    return (
      <form
        ref="formDOM"
        className={clazz}
        method={ this.state.method }
        autoComplete={ this.props.autoComplete }
        target={ this.props.target }
        onSubmit={ this.onSubmit.bind(this) }
      >
        { this.props.children }
        { loader }
      </form>
    );
  }
}

//FormManager
class FormManager {
  constructor() {
    this.forms = [];
    this.inputs = [];
  }

  addForm(form) { this.forms.push(form); }
  addInput(input) { this.inputs.push(input); }

  removeForm(form) {
    let i = this.forms.indexOf(form);
    if(i === -1) return;
    this.forms.splice(i, 1);
  }

  removeInput(input) {
    let i = this.inputs.indexOf(input);
    if(i === -1) return;
    this.inputs.splice(i, 1);
  }

  onChange(input, event) {}

  submit() {
    for(let i = 0; i < this.forms.length; i++) {
      this.forms[i].submit();
    }
  }

  getFormData() {
    let data = new FormData();

    for(let i = 0; i < this.inputs.length; i++) {
      let input = this.inputs[i];
      data.append(input.props.name, input.state.value);
    }

    return data;
  }
}

export {
  FormManager
};
