import enAU from './en-AU.jsx';

const LANGUAGES = {
  'en-AU': enAU
}

class Language {
  constructor() {
    this.setLanguage("en-AU");
  }

  setLanguage(lang) {
    this.data = LANGUAGES[lang];
  }

  get(key) {

  }
}

const lang = new Language();
export default lang;
