'use strict';

import Language from './../language/Language';
import { SET_LANGUAGE, LANGUAGES } from './../actions/language';

const initialState = {
  code: Language.getLanguage()
};

function language(state, action) {
  if(typeof state === typeof undefined) {
    state = initialState;
  }

  switch(action.type) {
    case SET_LANGUAGE:
      if(!(action.theme)) return state;
      return {
        code: action.code
      };
    default:
      return state;
  }
}

export default language;
