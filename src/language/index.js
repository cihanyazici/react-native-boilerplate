import I18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
import tr from './tr';
import en from './en';
const locales = Localization;
I18n.locale = locales.locale.split("-")[0];
I18n.fallbacks = true;
I18n.locales.no = 'en';
I18n.translations = {
    en,
    tr,
};
export default I18n;