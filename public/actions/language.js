import Language from './../language/Language';

export const SET_LANGUAGE = "SET_LANGUAGE";
export const LANGUAGES = Language.getLanguages();

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    code: language
  }
};
