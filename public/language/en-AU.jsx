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
      "platforms": {
        "heading": "Platforms I work with",
        "footer": "... And many more!"
      },
      "work": {
        "heading": "Some of my work",
        "paragraph": "Interested to see what I can do? Check out some of my personal favourite projects that I have built!",
        "kopa": {
          "heading": "KOPA Life",
          "description": () => { return (
            <Fragment>
              <p>
                KOPA Life is a modern modular furniture designer in Australia.
                Since 2016 they have created many modern design pieces, including
                their signature KUBE, a modular couch available in removable and
                attachable components.
              </p>
              <p>
                The website features a modern minimalistic design, with a focus
                on great imagery, and a fully fledged in-site 3D Couch builder,
                which allows you to design your perfect couch and hit one button
                to purchase the couch you've designed.
              </p>
            </Fragment>
          ); }
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
  },

  "window": {
    "address": "Address:"
  }
}
