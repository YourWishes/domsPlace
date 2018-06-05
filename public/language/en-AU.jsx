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
