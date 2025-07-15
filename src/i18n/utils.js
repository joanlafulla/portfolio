import { labels, defaultLang, showDefaultLang } from './ui.js';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in labels) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
    return function translate(key) {
        return labels[lang][key] || labels[defaultLang][key];
    }
}

export function useTranslatedPath(lang) {
  return function translatePath(path, l) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}