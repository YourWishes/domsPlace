import enAU from './en-AU.jsx';

const LANGUAGES = {
  'en-AU': enAU
}

class Language {
  constructor() {
    this.setLanguage("en-AU");
  }

  setLanguage(lang) {
    this.langName = lang;
    this.data = LANGUAGES[lang];
  }

  getLanguage() {
    return this.langName;
  }

  get(key) {
    if(typeof key === typeof undefined)  return "Key \"undefined\".";
    let j = this.getRecursive(key.split("."));
    if(typeof j === typeof undefined || j == null) return "Missing \"" + key + "\"";
    return j;
  }

  getRecursive(key_array, data_obj) {
    if(typeof data_obj === typeof undefined) data_obj = this.data;
    if(typeof data_obj === typeof undefined) return null;

    let k = key_array[0];
    let o = data_obj[k];
    if(typeof o === typeof undefined) return null;
    if(typeof o === 'function') o = o();

    //Awesome
    if(key_array.length > 1) {
      if(typeof o !== typeof {}) return null;
      key_array.shift();
      return this.getRecursive(key_array, o);
    }
    return o;
  }

  getLanguages() {
    return Object.keys(LANGUAGES);
  }
}

const lang = new Language();
export default lang;
