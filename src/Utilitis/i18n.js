import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en';
import fr from './locales/fr';
import he from './locales/he';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
  // console.log(I18n.locale);
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  he,
};

export default I18n;
