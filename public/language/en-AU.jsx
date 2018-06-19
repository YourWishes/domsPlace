import React, { Fragment } from 'react';
import { LanguageTools } from './Language';

module.exports = {
  "site": {
    "name": "domsPlace"
  },

  "navbar": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },

  "pages": {
    "about": {
      "banner": {
        "title": "About Dominic Masters",
        "subtitle": () => {
          return LanguageTools.random([
            "Developer, Nerd, Occasionally Funny.",
            "Once forgot his own birthday."
          ]);
        }
      },
      "video": {
        "heading": "Learn about me",
        "paragraph": "Watch this short video about me, made by.. me!"
      },
      "programming": {
        "heading": "Programmer",
        "paragraph": () => {
          return (<Fragment>
            <p>
              I am a programmer, it's my job, as well as my passion. I have been
              doing programming in some form for as long as I can remember, and
              continue to learn and enhance my knowledge in the field.
            </p>
            <p>
              With over { new Date().getFullYear() - 2004 } years of experience,
              and countless lines of code written, there isn't much I can't
              develop. Whether you're looking to build a web project, create a
              game engine, convert data from one format to another, or maintain
              an old legacy system, I can do it all.
            </p>
          </Fragment>);
        }
      },
      "admin": {
        "heading": "Systems Admin",
        "paragraph": () => {
          return (<Fragment>
            <p>
              Beyond programming knowledge, I also have extensive knowledge in
              the field of systems administration, and while a little outdated,
              I can still solve most systems issues.
            </p>
          </Fragment>);
        }
      }
    },

    "contact": {
      "name": {
        "label": "Name",
        "placeholder": "Enter your name."
      },

      "email": {
        "label": "Email Address",
        "placeholder": "Email Address."
      },

      "message": {
        "label": "Message",
        "placeholder": "Message."
      },

      "send": "Send",
      "reset": "Reset"
    }
  }
}
