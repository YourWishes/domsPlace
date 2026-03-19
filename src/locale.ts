export const LANGUAGES = <const>{
  'en': 'English'
};

export type LocaleLanguage = keyof typeof LANGUAGES;

export type LocaleString = {
  [K in LocaleLanguage]:string;
};