import {derived, writable} from 'svelte/store';
import {ru} from '~/i18n/ru';
import {en} from '~/i18n/en';

export type I18Lang = 'en' | 'ru';

export type I18nKey = keyof typeof ru | keyof typeof en;

type IDictionary = {[k in I18Lang]: { [k in I18nKey]: string }};

export function getClientLocale(): I18Lang {
  if (typeof window !== 'undefined') {
    return (window.navigator.language || window.navigator.languages[0]) as I18Lang;
  }
  return 'en';
}

let currentLocale: I18Lang;
let currentDictionary: IDictionary;

function getAvailableLocale(newLocale: I18Lang) {
  if (currentDictionary[newLocale]) {
    return newLocale;
  }

  if (typeof newLocale === 'string') {
    const fallbackLocale = newLocale.split('-').shift() as I18Lang;

    if (currentDictionary[fallbackLocale]) {
      return fallbackLocale;
    }
  }
  return null;
}

function pluralize(count: number, words: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
}

function getLocalizedMessage(path: I18nKey, ints: number|{[k: string]: string}, locale = currentLocale) {
  let message = currentDictionary[locale][path];

  if (!message) {
    return path;
  }

  if (isFinite(Number(ints))) { // pluralize
    let pluralKey = pluralize(ints as number, [
      path,
      locale === 'ru' ? `${path}_some` : `${path}_plural`,
      `${path}_plural`
    ]);
    const pluralMessage = currentDictionary[locale][pluralKey as I18nKey];
    if (pluralMessage) {
      return pluralMessage;
    }
  } else if (ints && typeof ints === 'object') { // replacements
    return message.replace(/{(.*?)}/g, (match, group) => ints[group]);
  }

  return message;
}

const dictionary = writable({});
dictionary.subscribe((newDictionary: IDictionary) => {
  currentDictionary = newDictionary;
});

const locale = writable({});
const localeSet = locale.set;
locale.set = (newLocale: I18Lang) => {
  const availableLocale = getAvailableLocale(newLocale);
  if (availableLocale) {
    return localeSet(availableLocale);
  }
  return localeSet(newLocale);
};
locale.update = fn => localeSet(fn(currentLocale));
locale.subscribe((newLocale: I18Lang) => {
  currentLocale = newLocale;
});

const format = derived([locale, dictionary], () => getLocalizedMessage);

export {locale, format as _, dictionary}
