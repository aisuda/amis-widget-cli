/**
 * @file 一些常用方法
 */
export function isMobile(ua = '') {
  return ua.toLowerCase().match(/iphone|ipod|ipad|android/);
}

export function noop() {}

let fetcher = null;

export function getFetcher() {
  return fetcher;
}
