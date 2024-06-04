import axios from 'axios';
/**
 * @file 一些常用方法
 */
export function isMobile(ua = '') {
  return ua.toLowerCase().match(/iphone|ipod|ipad|android/);
}

export function noop() {}

let fetcher = ({ url, method, data, config, headers }) => {
  config = config || {};
  config.headers = config.headers || headers || {};
  config.withCredentials = true;

  if (method !== 'post' && method !== 'put' && method !== 'patch') {
    if (data) {
      config.params = data;
    }
    return axios[method](url, config);
  } else if (data && data instanceof FormData) {
    // config.headers = config.headers || {};
    // config.headers['Content-Type'] = 'multipart/form-data';
  } else if (
    data &&
    typeof data !== 'string' &&
    !(data instanceof Blob) &&
    !(data instanceof ArrayBuffer)
  ) {
    data = JSON.stringify(data);
    config.headers['Content-Type'] = 'application/json';
  }

  return axios[method](url, data, config);
};

export function getFetcher() {
  return fetcher;
}
