import {dictionary, getClientLocale, locale, _} from './lib';
import {getCookie, setCookie} from '~/utils/getCookie';
import {en} from '~/i18n/en';
import {ru} from '~/i18n/ru';

export type I18Lang = 'en' | 'ru';

export type I18nKey = keyof typeof ru | keyof typeof en;

const COOKIE_KEY = 'i18next';

dictionary.set({en, ru});

setLanguage(getLanguage());

export function getLanguage() {
  const clientLocale = getCookie(COOKIE_KEY) || getClientLocale() || 'en';
  return clientLocale.substr(0, 2) as I18Lang;
}

export function setLanguage(lang: I18Lang) {
  locale.set(lang);
  setCookie(COOKIE_KEY, lang);
}

export function toggleLanguage() {
  const newLang = getLanguage() === 'ru' ? 'en' : 'ru';
  setLanguage(newLang);
}

let formatter: any;

_.subscribe((f) => {
  formatter = f;
});

export const t = (v: I18nKey, i?: any) => formatter(v, i);

export {locale, _}
