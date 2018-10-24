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

import Styles from './Form.scss';

import FormGroup from './group/FormGroup';
import Loader, { LoaderBackdrop } from '@objects/loading/Loader';
import Input, { TextArea } from './../Input';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    let {
      ajax, loader, onSubmit, contentType, encType, manager, action, method,
      get, post
    } = props;

    contentType = contentType || encType ||  "application/x-www-form-urlencoded";

    //Determine action and method based off the internals
    if(get) {
      action = get;
      method = "GET";
    }

    if(post) {
      action = post;
      method = "POST";
    }

    //Prepare our initial state
    this.state = {
      ajax,
      loader,
      loading: false,
      onSubmit,
      contentType,
      manager
    };
  }

  componentDidMount() {
    let { manager } = this.props;
    if(manager) manager.addForm(this);
  }

  componentWillUnmount() {
    let { manager } = this.props;
    if(manager) manager.removeForm(this);
  }

  submit() {
    this.onSubmit();
  }

  onSubmit(e) {
    let {
      ajax, onSubmit, action, submitting, method, mode, contentType
    } = this.state;
    let { manager } = this.props;

    //Is Ajax?
    if(!ajax) {
      return onSubmit ? onSubmit(e) : true;
    }

    if(e && e.preventDefault) e.preventDefault();
    if(!action) return console.warning("This form has no action.");
    if(submitting) return false;//Already submitting?

    //Start submitting!
    this.setState({
      loading: true,
      submitting: true
    });

    //Prepare our data
    let data;
    if(manager) data = manager.getFormData();
    data = data || {};

    if(contentType == "application/json") {
      let dataJson = {};
      data.forEach((value, key) => {
        dataJson[key] = value;
      });
      data = JSON.stringify(dataJson);
    }

    //Prepare our request.
    fetch(action, {
      method: method,
      mode: mode,
      body: data,
      headers: {
        "Content-Type": contentType
      }
    }).then(resp => this.onSubmitted(resp)).catch((e,a,b) => this.onError(e,a,b));

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
          .then((e,a,b) => this.onErrorText(e,a,b))
          .catch((e,a,b) => this.onError(e,a,b))
        ;
      }
      throw Error(response.statusText);
    }

    if(this.props.onData) return this.props.onData(response);

    //Handle the old fashioned way (expect json)
    response[method]()
      .then(resp => this.onData(resp))
      .catch((e,a,b) => this.onError(e,a,b))
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
    let { className, children } = this.props;
    let { loader, loading } = this.state;

    let clazz = "o-form";
    if(className) clazz += ` ${className}`

    //Do I need a loader?
    let loaderElement;
    if(loader && loading) {
      loaderElement = (
        <LoaderBackdrop className="o-form__loader">
          <Loader className="o-form__loader-spinner" />
        </LoaderBackdrop>
      );
    }

    return (
      <form
        {...this.props}
        ref="formDOM"
        className={ clazz }
        method={ this.state.method }
        onSubmit={ (e) => this.onSubmit(e) }
      >
        { children }
        { loaderElement }
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
  FormManager,
  FormGroup
};
