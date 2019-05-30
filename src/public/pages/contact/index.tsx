// Copyright (c) 2019 Dominic Masters
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

import * as React from 'react';
import { fetch } from 'cross-fetch';
import { Title, Heading2 } from './../../objects/typography/heading/';
import { PageBoundary } from './../../objects/page/boundary/';
import { Input, InputType, TextArea } from './../../objects/widgets/input/';
import { ButtonGroup } from './../../objects/widgets/button/';
import { PageWrapper } from './../../components/page/wrapper/';

import './styles.scss';

export interface ContactPageState {
  name:string,
  nameError?:string,

  email:string,
  emailError?:string,

  message:string,
  messageError?:string,

  submitting:boolean,
  result:string|true|null
};

export class ContactPage extends React.Component<any, ContactPageState> {
  constructor(props:any) {
    super(props);

    this.state = { name:"", email:"", message: "", result: null, submitting: false };
  }

  async onSubmit(e:React.FormEvent<HTMLFormElement>) {
    if(this.state.submitting || this.state.result === true) return;
    let { name, email, message } = this.state;

    e.preventDefault();

    this.setState({ nameError: undefined, emailError: undefined, messageError: undefined });

    if(!name || !name.length) return this.setState({ nameError: "Enter your name" });
    if(!email || !email.length) return this.setState({ emailError: "Enter your email" });
    if(!message || !message.length) return this.setState({ messageError: "Enter your message" });

    this.setState({ submitting:true });
    let result;
    try {
      result = await fetch('/contact/send', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' }
      });
      result = await result.json();
      console.log(result);
      if(result !== true) alert(result);
    } catch(ex) {
      console.error(ex);
      result = ex && ex.message ? ex.message : typeof ex === typeof '' ? ex : "An unexpected error occured!";
    }

    this.setState({ submitting: false, result });
  }

  render() {
    let { result, submitting } = this.state;
    let disabled = result === true || submitting;

    return <PageWrapper title="Contact Me">
      <form className="p-contact__form" onSubmit={e => this.onSubmit(e)}>
        <PageBoundary size="medium" className="p-contact__boundary">

          <div className={`p-contact__submit ${result === true ? 'has-submitted' : ''}`}>
            <Title large className="p-contact__title">Contact Me</Title>

            <div className="p-contact__split is-form">
              <div className="p-contact__content">
                <p>
                  Feel free to reach out, I usually respond within a few days.
                </p>
                <p>
                  If you prefer to call, then leave your phone number and what
                  times you're available and I'll get in touch!
                </p>
              </div>

              <div className="p-contact__fields">
                <Input
                  name="name" placeholder="Enter your name." title="Your name"
                  value={this.state.name} maxLength="128" error={this.state.nameError}
                  onChange={ e => this.setState({ name: e.target['value'] })}
                  disabled={disabled}
                />

                <Input
                  name="email" title="Your email address" placeholder="Enter your email address"
                  type={InputType.EMAIL} value={this.state.email} maxLength="128"
                  error={this.state.emailError}
                  onChange={e => this.setState({ email: e.target['value'] })}
                  disabled={disabled}
                />

                <TextArea
                  title="Your message" name="message" placeholder="Enter a short message to send to me."
                  value={this.state.message} maxLength="1024" rows="5" error={this.state.messageError}
                  onChange={ e => this.setState({ message: e.target['value'] }) }
                  disabled={disabled}
                />

                <ButtonGroup>
                  <Input type={InputType.SUBMIT} primary disabled={disabled} loading={submitting}>
                    Send
                  </Input>

                  <Input type={InputType.RESET} secondary disabled={disabled}>Restart</Input>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <div className={`p-contact__result ${result === true ? 'has-submitted' : ''}`}>
            <Heading2>Thank you!</Heading2>
            <p>
              Thank you for reaching out! I will get back to you shortly
              (usually within a few days).
            </p>
          </div>

        </PageBoundary>
      </form>
    </PageWrapper>;
  }
};

export default ContactPage;
