(function (global2, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('react'), require('vue')))
    : typeof define === 'function' && define.amd
    ? define(['react', 'vue'], factory)
    : ((global2 =
        typeof globalThis !== 'undefined' ? globalThis : global2 || self),
      (global2.plugin = factory(global2.react, global2.vue)));
})(this, function (React, vue) {
  var _a;
  ('use strict');
  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};
  function isObject$6(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  var isObject_1 = isObject$6;
  window.uni || (window.uni = {});
  const toast$1 = '';
  const extend = Object.assign;
  const hasOwnProperty$7 = Object.prototype.hasOwnProperty;
  const hasOwn$1 = (val, key) => hasOwnProperty$7.call(val, key);
  const isArray$7 = Array.isArray;
  const isFunction$2 = (val) => typeof val === 'function';
  const isString = (val) => typeof val === 'string';
  const isObject$5 = (val) => val !== null && typeof val === 'object';
  const isPromise = (val) => {
    return isObject$5(val) && isFunction$2(val.then) && isFunction$2(val.catch);
  };
  const objectToString$2 = Object.prototype.toString;
  const toTypeString = (value) => objectToString$2.call(value);
  const isPlainObject = (val) => toTypeString(val) === '[object Object]';
  const LINEFEED = '\n';
  const UNI_STORAGE_LOCALE = 'UNI_LOCALE';
  const SCHEME_RE = /^([a-z-]+:)?\/\//i;
  const DATA_RE = /^data:.*,.*/;
  const ON_HIDE = 'onHide';
  const ON_THEME_CHANGE = 'onThemeChange';
  const ON_UNLOAD = 'onUnload';
  const ON_BACK_PRESS = 'onBackPress';
  const ON_NAVIGATION_BAR_CHANGE = 'onNavigationBarChange';
  function getLen(str = '') {
    return ('' + str).replace(/[^\x00-\xff]/g, '**').length;
  }
  function hasLeadingSlash(str) {
    return str.indexOf('/') === 0;
  }
  function addLeadingSlash(str) {
    return hasLeadingSlash(str) ? str : '/' + str;
  }
  function removeLeadingSlash(str) {
    return hasLeadingSlash(str) ? str.slice(1) : str;
  }
  const invokeArrayFns = (fns, arg) => {
    let ret;
    for (let i = 0; i < fns.length; i++) {
      ret = fns[i](arg);
    }
    return ret;
  };
  function once(fn, ctx = null) {
    let res;
    return (...args) => {
      if (fn) {
        res = fn.apply(ctx, args);
        fn = null;
      }
      return res;
    };
  }
  function sortObject(obj) {
    let sortObj = {};
    if (isPlainObject(obj)) {
      Object.keys(obj)
        .sort()
        .forEach((key) => {
          const _key = key;
          sortObj[_key] = obj[_key];
        });
    }
    return !Object.keys(sortObj) ? obj : sortObj;
  }
  function passive(passive2) {
    return { passive: passive2 };
  }
  function decode(text) {
    try {
      return decodeURIComponent('' + text);
    } catch (err) {}
    return '' + text;
  }
  const PLUS_RE = /\+/g;
  function parseQuery(search) {
    const query = {};
    if (search === '' || search === '?') return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, ' ');
      let eqPos = searchParam.indexOf('=');
      let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray$7(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function parseUrl(url2) {
    const [path, querystring] = url2.split('?', 2);
    return {
      path,
      query: parseQuery(querystring || ''),
    };
  }
  class EventChannel {
    constructor(id2, events) {
      this.id = id2;
      this.listener = {};
      this.emitCache = [];
      if (events) {
        Object.keys(events).forEach((name) => {
          this.on(name, events[name]);
        });
      }
    }
    emit(eventName, ...args) {
      const fns = this.listener[eventName];
      if (!fns) {
        return this.emitCache.push({
          eventName,
          args,
        });
      }
      fns.forEach((opt) => {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter((opt) => opt.type !== 'once');
    }
    on(eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    }
    once(eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    }
    off(eventName, fn) {
      const fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (let i = 0; i < fns.length; ) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    }
    _clearCache(eventName) {
      for (let index = 0; index < this.emitCache.length; index++) {
        const cache = this.emitCache[index];
        const _name = eventName
          ? cache.eventName === eventName
            ? eventName
            : null
          : cache.eventName;
        if (!_name) continue;
        const location = this.emit.apply(this, [_name, ...cache.args]);
        if (typeof location === 'number') {
          this.emitCache.pop();
          continue;
        }
        this.emitCache.splice(index, 1);
        index--;
      }
    }
    _addListener(eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn,
        type,
      });
    }
  }
  const E = function () {};
  E.prototype = {
    on: function (name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx,
      });
      return this;
    },
    once: function (name, callback, ctx) {
      var self2 = this;
      function listener() {
        self2.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function (name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;
      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }
      return this;
    },
    off: function (name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }
      liveEvents.length ? (e[name] = liveEvents) : delete e[name];
      return this;
    },
  };
  var E$1 = E;
  const borderStyles = {
    black: 'rgba(0,0,0,0.4)',
    white: 'rgba(255,255,255,0.4)',
  };
  function normalizeTabBarStyles(borderStyle) {
    if (borderStyle && borderStyle in borderStyles) {
      return borderStyles[borderStyle];
    }
    return borderStyle;
  }
  function normalizeTitleColor(titleColor) {
    return titleColor === 'black' ? '#000000' : '#ffffff';
  }
  function normalizeStyles(pageStyle, themeConfig = {}, mode = 'light') {
    const modeStyle = themeConfig[mode];
    const styles = {};
    if (!modeStyle) {
      return pageStyle;
    }
    Object.keys(pageStyle).forEach((key) => {
      let styleItem = pageStyle[key];
      styles[key] = (() => {
        if (isPlainObject(styleItem)) {
          return normalizeStyles(styleItem, themeConfig, mode);
        } else if (isArray$7(styleItem)) {
          return styleItem.map((item) =>
            isPlainObject(item)
              ? normalizeStyles(item, themeConfig, mode)
              : item,
          );
        } else if (isString(styleItem) && styleItem.startsWith('@')) {
          const _key = styleItem.replace('@', '');
          let _styleItem = modeStyle[_key] || styleItem;
          switch (key) {
            case 'titleColor':
              _styleItem = normalizeTitleColor(_styleItem);
              break;
            case 'borderStyle':
              _styleItem = normalizeTabBarStyles(_styleItem);
              break;
          }
          return _styleItem;
        }
        return styleItem;
      })();
    });
    return styles;
  }
  const isObject$4 = (val) => val !== null && typeof val === 'object';
  const defaultDelimiters = ['{', '}'];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = '';
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: 'text', value: text });
        }
        text = '';
        let sub = '';
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub)
          ? 'list'
          : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: 'text', value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values)
      ? 'list'
      : isObject$4(values)
      ? 'named'
      : 'unknown';
    if (mode === 'unknown') {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case 'text':
          compiled.push(token.value);
          break;
        case 'list':
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case 'named':
          if (mode === 'named') {
            compiled.push(values[token.value]);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = 'zh-Hans';
  const LOCALE_ZH_HANT = 'zh-Hant';
  const LOCALE_EN = 'en';
  const LOCALE_FR = 'fr';
  const LOCALE_ES = 'es';
  const hasOwnProperty$6 = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty$6.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, '-');
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === 'chinese') {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('zh') === 0) {
      if (locale.indexOf('-hans') > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf('-hant') > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages && Object.keys(messages).length > 0) {
      locales = Object.keys(messages);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale =
        normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(
          `Cannot translate the value of keypath ${key}. Use the value of keypath as default.`,
        );
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== 'undefined' && getLocale) {
      return getLocale();
    }
    if (typeof global !== 'undefined' && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== 'string') {
      [locale, messages] = [messages, locale];
    }
    if (typeof locale !== 'string') {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== 'string') {
      fallbackLocale =
        (typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale) ||
        LOCALE_EN;
    }
    const i18n2 = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher,
    });
    let t = (key, values) => {
      if (typeof getApp$1 !== 'function') {
        t = function (key2, values2) {
          return i18n2.t(key2, values2);
        };
      } else {
        t = function (key2, values2) {
          getApp$1().$vm;
          return i18n2.t(key2, values2);
        };
      }
      return t(key, values);
    };
    return {
      i18n: i18n2,
      f(message, values, delimiters) {
        return i18n2.f(message, values, delimiters);
      },
      t(key, values) {
        return t(key, values);
      },
      add(locale2, message, override = true) {
        return i18n2.add(locale2, message, override);
      },
      watch(fn) {
        return i18n2.watchLocale(fn);
      },
      getLocale() {
        return i18n2.getLocale();
      },
      setLocale(newLocale) {
        return i18n2.setLocale(newLocale);
      },
    };
  }
  /*!
   * vue-router v4.3.2
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */
  var NavigationType;
  (function (NavigationType2) {
    NavigationType2['pop'] = 'pop';
    NavigationType2['push'] = 'push';
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function (NavigationDirection2) {
    NavigationDirection2['back'] = 'back';
    NavigationDirection2['forward'] = 'forward';
    NavigationDirection2['unknown'] = '';
  })(NavigationDirection || (NavigationDirection = {}));
  const NavigationFailureSymbol = Symbol('');
  var NavigationFailureType;
  (function (NavigationFailureType2) {
    NavigationFailureType2[(NavigationFailureType2['aborted'] = 4)] = 'aborted';
    NavigationFailureType2[(NavigationFailureType2['cancelled'] = 8)] =
      'cancelled';
    NavigationFailureType2[(NavigationFailureType2['duplicated'] = 16)] =
      'duplicated';
  })(NavigationFailureType || (NavigationFailureType = {}));
  function isNavigationFailure(error, type) {
    return (
      error instanceof Error &&
      NavigationFailureSymbol in error &&
      (type == null || !!(error.type & type))
    );
  }
  const isEnableLocale = /* @__PURE__ */ once(
    () =>
      typeof __uniConfig !== 'undefined' &&
      __uniConfig.locales &&
      !!Object.keys(__uniConfig.locales).length,
  );
  let i18n;
  function useI18n() {
    if (!i18n) {
      let locale;
      {
        {
          locale =
            (navigator.cookieEnabled &&
              window.localStorage &&
              localStorage[UNI_STORAGE_LOCALE]) ||
            __uniConfig.locale ||
            navigator.language;
        }
      }
      i18n = initVueI18n(locale);
      if (isEnableLocale()) {
        const localeKeys = Object.keys(__uniConfig.locales || {});
        if (localeKeys.length) {
          localeKeys.forEach((locale2) =>
            i18n.add(locale2, __uniConfig.locales[locale2]),
          );
        }
        i18n.setLocale(locale);
      }
    }
    return i18n;
  }
  function normalizeMessages(module2, keys, values) {
    return keys.reduce((res, name, index2) => {
      res[module2 + name] = values[index2];
      return res;
    }, {});
  }
  const initI18nShowToastMsgsOnce = /* @__PURE__ */ once(() => {
    const name = 'uni.showToast.';
    const keys = ['unpaired'];
    {
      useI18n().add(
        LOCALE_EN,
        normalizeMessages(name, keys, [
          'Please note showToast must be paired with hideToast',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_ES,
        normalizeMessages(name, keys, [
          'Tenga en cuenta que showToast debe estar emparejado con hideToast',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_FR,
        normalizeMessages(name, keys, [
          'Veuillez noter que showToast doit être associé à hideToast',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_ZH_HANS,
        normalizeMessages(name, keys, [
          '请注意 showToast 与 hideToast 必须配对使用',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_ZH_HANT,
        normalizeMessages(name, keys, [
          '請注意 showToast 與 hideToast 必須配對使用',
        ]),
        false,
      );
    }
  });
  const initI18nShowLoadingMsgsOnce = /* @__PURE__ */ once(() => {
    const name = 'uni.showLoading.';
    const keys = ['unpaired'];
    {
      useI18n().add(
        LOCALE_EN,
        normalizeMessages(name, keys, [
          'Please note showLoading must be paired with hideLoading',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_ES,
        normalizeMessages(name, keys, [
          'Tenga en cuenta que showLoading debe estar emparejado con hideLoading',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_FR,
        normalizeMessages(name, keys, [
          'Veuillez noter que showLoading doit être associé à hideLoading',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_ZH_HANS,
        normalizeMessages(name, keys, [
          '请注意 showLoading 与 hideLoading 必须配对使用',
        ]),
        false,
      );
    }
    {
      useI18n().add(
        LOCALE_ZH_HANT,
        normalizeMessages(name, keys, [
          '請注意 showLoading 與 hideLoading 必須配對使用',
        ]),
        false,
      );
    }
  });
  function initBridge(subscribeNamespace) {
    const emitter2 = new E$1();
    return {
      on(event, callback) {
        return emitter2.on(event, callback);
      },
      once(event, callback) {
        return emitter2.once(event, callback);
      },
      off(event, callback) {
        return emitter2.off(event, callback);
      },
      emit(event, ...args) {
        return emitter2.emit(event, ...args);
      },
      subscribe(event, callback, once2 = false) {
        emitter2[once2 ? 'once' : 'on'](
          `${subscribeNamespace}.${event}`,
          callback,
        );
      },
      unsubscribe(event, callback) {
        emitter2.off(`${subscribeNamespace}.${event}`, callback);
      },
      subscribeHandler(event, args, pageId) {
        emitter2.emit(`${subscribeNamespace}.${event}`, args, pageId);
      },
    };
  }
  const INVOKE_VIEW_API = 'invokeViewApi';
  const INVOKE_SERVICE_API = 'invokeServiceApi';
  let invokeServiceMethodId = 1;
  const invokeServiceMethod = (name, args, callback) => {
    const { subscribe, publishHandler } = UniViewJSBridge$1;
    const id2 = callback ? invokeServiceMethodId++ : 0;
    callback && subscribe(INVOKE_SERVICE_API + '.' + id2, callback, true);
    publishHandler(INVOKE_SERVICE_API, { id: id2, name, args });
  };
  const ViewJSBridge = /* @__PURE__ */ extend(
    /* @__PURE__ */ initBridge('service'),
    {
      invokeServiceMethod,
    },
  );
  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x;
  }
  var attrs = ['top', 'left', 'right', 'bottom'];
  var inited$1;
  var elementComputedStyle = {};
  var support;
  function getSupport() {
    if (!('CSS' in window) || typeof CSS.supports != 'function') {
      support = '';
    } else if (CSS.supports('top: env(safe-area-inset-top)')) {
      support = 'env';
    } else if (CSS.supports('top: constant(safe-area-inset-top)')) {
      support = 'constant';
    } else {
      support = '';
    }
    return support;
  }
  function init() {
    support = typeof support === 'string' ? support : getSupport();
    if (!support) {
      attrs.forEach(function (attr2) {
        elementComputedStyle[attr2] = 0;
      });
      return;
    }
    function setStyle(el, style) {
      var elStyle = el.style;
      Object.keys(style).forEach(function (key) {
        var val = style[key];
        elStyle[key] = val;
      });
    }
    var cbs = [];
    function parentReady(callback) {
      if (callback) {
        cbs.push(callback);
      } else {
        cbs.forEach(function (cb) {
          cb();
        });
      }
    }
    var passiveEvents = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          passiveEvents = { passive: true };
        },
      });
      window.addEventListener('test', null, opts);
    } catch (e2) {}
    function addChild(parent, attr2) {
      var a1 = document.createElement('div');
      var a2 = document.createElement('div');
      var a1Children = document.createElement('div');
      var a2Children = document.createElement('div');
      var W = 100;
      var MAX = 1e4;
      var aStyle = {
        position: 'absolute',
        width: W + 'px',
        height: '200px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        paddingBottom: support + '(safe-area-inset-' + attr2 + ')',
      };
      setStyle(a1, aStyle);
      setStyle(a2, aStyle);
      setStyle(a1Children, {
        transition: '0s',
        animation: 'none',
        width: '400px',
        height: '400px',
      });
      setStyle(a2Children, {
        transition: '0s',
        animation: 'none',
        width: '250%',
        height: '250%',
      });
      a1.appendChild(a1Children);
      a2.appendChild(a2Children);
      parent.appendChild(a1);
      parent.appendChild(a2);
      parentReady(function () {
        a1.scrollTop = a2.scrollTop = MAX;
        var a1LastScrollTop = a1.scrollTop;
        var a2LastScrollTop = a2.scrollTop;
        function onScroll() {
          if (
            this.scrollTop === (this === a1 ? a1LastScrollTop : a2LastScrollTop)
          ) {
            return;
          }
          a1.scrollTop = a2.scrollTop = MAX;
          a1LastScrollTop = a1.scrollTop;
          a2LastScrollTop = a2.scrollTop;
          attrChange(attr2);
        }
        a1.addEventListener('scroll', onScroll, passiveEvents);
        a2.addEventListener('scroll', onScroll, passiveEvents);
      });
      var computedStyle = getComputedStyle(a1);
      Object.defineProperty(elementComputedStyle, attr2, {
        configurable: true,
        get: function () {
          return parseFloat(computedStyle.paddingBottom);
        },
      });
    }
    var parentDiv = document.createElement('div');
    setStyle(parentDiv, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '0',
      height: '0',
      zIndex: '-1',
      overflow: 'hidden',
      visibility: 'hidden',
    });
    attrs.forEach(function (key) {
      addChild(parentDiv, key);
    });
    document.body.appendChild(parentDiv);
    parentReady();
    inited$1 = true;
  }
  function getAttr(attr2) {
    if (!inited$1) {
      init();
    }
    return elementComputedStyle[attr2];
  }
  var changeAttrs = [];
  function attrChange(attr2) {
    if (!changeAttrs.length) {
      setTimeout(function () {
        var style = {};
        changeAttrs.forEach(function (attr3) {
          style[attr3] = elementComputedStyle[attr3];
        });
        changeAttrs.length = 0;
        callbacks.forEach(function (callback) {
          callback(style);
        });
      }, 0);
    }
    changeAttrs.push(attr2);
  }
  var callbacks = [];
  function onChange(callback) {
    if (!getSupport()) {
      return;
    }
    if (!inited$1) {
      init();
    }
    if (typeof callback === 'function') {
      callbacks.push(callback);
    }
  }
  function offChange(callback) {
    var index2 = callbacks.indexOf(callback);
    if (index2 >= 0) {
      callbacks.splice(index2, 1);
    }
  }
  var safeAreaInsets = {
    get support() {
      return (typeof support === 'string' ? support : getSupport()).length != 0;
    },
    get top() {
      return getAttr('top');
    },
    get left() {
      return getAttr('left');
    },
    get right() {
      return getAttr('right');
    },
    get bottom() {
      return getAttr('bottom');
    },
    onChange,
    offChange,
  };
  var out = safeAreaInsets;
  const safeAreaInsets$1 = /* @__PURE__ */ getDefaultExportFromCjs(out);
  const onEventPrevent = /* @__PURE__ */ vue.withModifiers(() => {}, [
    'prevent',
  ]);
  function getWindowOffsetCssVar(style, name) {
    return parseInt((style.getPropertyValue(name).match(/\d+/) || ['0'])[0]);
  }
  function getWindowTop() {
    const style = document.documentElement.style;
    const top = getWindowOffsetCssVar(style, '--window-top');
    return top ? top + safeAreaInsets$1.top : 0;
  }
  function getWindowOffset() {
    const style = document.documentElement.style;
    const top = getWindowTop();
    const bottom = getWindowOffsetCssVar(style, '--window-bottom');
    const left = getWindowOffsetCssVar(style, '--window-left');
    const right = getWindowOffsetCssVar(style, '--window-right');
    const topWindowHeight = getWindowOffsetCssVar(style, '--top-window-height');
    return {
      top,
      bottom: bottom ? bottom + safeAreaInsets$1.bottom : 0,
      left: left ? left + safeAreaInsets$1.left : 0,
      right: right ? right + safeAreaInsets$1.right : 0,
      topWindowHeight: topWindowHeight || 0,
    };
  }
  function PolySymbol(name) {
    return Symbol(name);
  }
  const ICON_PATH_SUCCESS_NO_CIRCLE =
    'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z';
  const ICON_PATH_WARN =
    'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z';
  function createSvgIconVNode(path, color2 = '#000', size = 27) {
    return vue.createVNode(
      'svg',
      {
        width: size,
        height: size,
        viewBox: '0 0 32 32',
      },
      [
        vue.createVNode(
          'path',
          {
            d: path,
            fill: color2,
          },
          null,
          8,
          ['d', 'fill'],
        ),
      ],
      8,
      ['width', 'height'],
    );
  }
  function getCurrentPage() {
    const pages = getCurrentPages$1();
    const len = pages.length;
    if (len) {
      return pages[len - 1];
    }
  }
  function getCurrentPageMeta() {
    const page = getCurrentPage();
    if (page) {
      return page.$page.meta;
    }
  }
  function getCurrentPageId() {
    const meta = getCurrentPageMeta();
    if (meta) {
      return meta.id;
    }
    return -1;
  }
  function getCurrentPageVm() {
    const page = getCurrentPage();
    if (page) {
      return page.$vm;
    }
  }
  const PAGE_META_KEYS = ['navigationBar', 'pullToRefresh'];
  function initGlobalStyle() {
    return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
  }
  function initRouteMeta(pageMeta, id2) {
    const globalStyle = initGlobalStyle();
    const res = extend({ id: id2 }, globalStyle, pageMeta);
    PAGE_META_KEYS.forEach((name) => {
      res[name] = extend({}, globalStyle[name], pageMeta[name]);
    });
    const { navigationBar } = res;
    navigationBar.titleText &&
      navigationBar.titleImage &&
      (navigationBar.titleText = '');
    return res;
  }
  function invokeHook(vm, name, args) {
    if (isString(vm)) {
      args = name;
      name = vm;
      vm = getCurrentPageVm();
    } else if (typeof vm === 'number') {
      const page = getCurrentPages$1().find((page2) => page2.$page.id === vm);
      if (page) {
        vm = page.$vm;
      } else {
        vm = getCurrentPageVm();
      }
    }
    if (!vm) {
      return;
    }
    const hooks = vm.$[name];
    return hooks && invokeArrayFns(hooks, args);
  }
  function normalizeRoute(toRoute) {
    if (toRoute.indexOf('/') === 0) {
      return toRoute;
    }
    let fromRoute = '';
    const pages = getCurrentPages$1();
    if (pages.length) {
      fromRoute = pages[pages.length - 1].$page.route;
    }
    return getRealRoute(fromRoute, toRoute);
  }
  function getRealRoute(fromRoute, toRoute) {
    if (toRoute.indexOf('/') === 0) {
      return toRoute;
    }
    if (toRoute.indexOf('./') === 0) {
      return getRealRoute(fromRoute, toRoute.slice(2));
    }
    const toRouteArray = toRoute.split('/');
    const toRouteLength = toRouteArray.length;
    let i = 0;
    for (; i < toRouteLength && toRouteArray[i] === '..'; i++) {}
    toRouteArray.splice(0, i);
    toRoute = toRouteArray.join('/');
    const fromRouteArray = fromRoute.length > 0 ? fromRoute.split('/') : [];
    fromRouteArray.splice(fromRouteArray.length - i - 1, i + 1);
    return addLeadingSlash(fromRouteArray.concat(toRouteArray).join('/'));
  }
  function getRouteOptions(path, alias = false) {
    if (alias) {
      return __uniRoutes.find(
        (route2) => route2.path === path || route2.alias === path,
      );
    }
    return __uniRoutes.find((route2) => route2.path === path);
  }
  const invokeOnCallback = (name, res) =>
    UniServiceJSBridge$1.emit('api.' + name, res);
  let invokeViewMethodId = 1;
  function publishViewMethodName(pageId) {
    return (pageId || getCurrentPageId()) + '.' + INVOKE_VIEW_API;
  }
  const invokeViewMethod = (name, args, pageId, callback) => {
    const { subscribe, publishHandler } = UniServiceJSBridge$1;
    const id2 = callback ? invokeViewMethodId++ : 0;
    callback && subscribe(INVOKE_VIEW_API + '.' + id2, callback, true);
    publishHandler(
      publishViewMethodName(pageId),
      { id: id2, name, args },
      pageId,
    );
  };
  const invokeViewMethodKeepAlive = (name, args, callback, pageId) => {
    const { subscribe, unsubscribe, publishHandler } = UniServiceJSBridge$1;
    const id2 = invokeViewMethodId++;
    const subscribeName = INVOKE_VIEW_API + '.' + id2;
    subscribe(subscribeName, callback);
    publishHandler(
      publishViewMethodName(pageId),
      { id: id2, name, args },
      pageId,
    );
    return () => {
      unsubscribe(subscribeName);
    };
  };
  const ServiceJSBridge = /* @__PURE__ */ extend(
    /* @__PURE__ */ initBridge(
      'view',
      /* view 指的是 service 层订阅的是 view 层事件 */
    ),
    {
      invokeOnCallback,
      invokeViewMethod,
      invokeViewMethodKeepAlive,
    },
  );
  function converPx(value) {
    if (/^-?\d+[ur]px$/i.test(value)) {
      return value.replace(/(^-?\d+)[ur]px$/i, (text2, num) => {
        return `${upx2px(parseFloat(num))}px`;
      });
    } else if (/^-?[\d\.]+$/.test(value)) {
      return `${value}px`;
    }
    return value || '';
  }
  function converType(type) {
    return type
      .replace(/[A-Z]/g, (text2) => {
        return `-${text2.toLowerCase()}`;
      })
      .replace('webkit', '-webkit');
  }
  function getStyle(action) {
    const animateTypes1 = [
      'matrix',
      'matrix3d',
      'scale',
      'scale3d',
      'rotate3d',
      'skew',
      'translate',
      'translate3d',
    ];
    const animateTypes2 = [
      'scaleX',
      'scaleY',
      'scaleZ',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'skewX',
      'skewY',
      'translateX',
      'translateY',
      'translateZ',
    ];
    const animateTypes3 = ['opacity', 'background-color'];
    const animateTypes4 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
    const animates = action.animates;
    const option = action.option;
    const transition = option.transition;
    const style = {};
    const transform = [];
    animates.forEach((animate) => {
      let type = animate.type;
      let args = [...animate.args];
      if (animateTypes1.concat(animateTypes2).includes(type)) {
        if (type.startsWith('rotate') || type.startsWith('skew')) {
          args = args.map((value) => parseFloat(value) + 'deg');
        } else if (type.startsWith('translate')) {
          args = args.map(converPx);
        }
        if (animateTypes2.indexOf(type) >= 0) {
          args.length = 1;
        }
        transform.push(`${type}(${args.join(',')})`);
      } else if (animateTypes3.concat(animateTypes4).includes(args[0])) {
        type = args[0];
        const value = args[1];
        style[type] = animateTypes4.includes(type) ? converPx(value) : value;
      }
    });
    style.transform = style.webkitTransform = transform.join(' ');
    style.transition = style.webkitTransition = Object.keys(style)
      .map(
        (type) =>
          `${converType(type)} ${transition.duration}ms ${
            transition.timingFunction
          } ${transition.delay}ms`,
      )
      .join(',');
    style.transformOrigin = style.webkitTransformOrigin =
      option.transformOrigin;
    return style;
  }
  function startAnimation(context) {
    const animation2 = context.animation;
    if (!animation2 || !animation2.actions || !animation2.actions.length) {
      return;
    }
    let index2 = 0;
    const actions = animation2.actions;
    const length = animation2.actions.length;
    function animate() {
      const action = actions[index2];
      const transition = action.option.transition;
      const style = getStyle(action);
      Object.keys(style).forEach((key) => {
        context.$el.style[key] = style[key];
      });
      index2 += 1;
      if (index2 < length) {
        setTimeout(animate, transition.duration + transition.delay);
      }
    }
    setTimeout(() => {
      animate();
    }, 0);
  }
  const animation = {
    props: ['animation'],
    watch: {
      animation: {
        deep: true,
        handler() {
          startAnimation(this);
        },
      },
    },
    mounted() {
      startAnimation(this);
    },
  };
  const defineBuiltInComponent = (options) => {
    options.__reserved = true;
    const { props: props2, mixins } = options;
    if (!props2 || !props2.animation) {
      (mixins || (options.mixins = [])).push(animation);
    }
    return defineSystemComponent(options);
  };
  const defineSystemComponent = (options) => {
    options.__reserved = true;
    options.compatConfig = {
      MODE: 3,
      // 标记为vue3
    };
    return vue.defineComponent(options);
  };
  const hoverProps = {
    hoverClass: {
      type: String,
      default: 'none',
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false,
    },
    hoverStartTime: {
      type: [Number, String],
      default: 50,
    },
    hoverStayTime: {
      type: [Number, String],
      default: 400,
    },
  };
  function useHover(props2) {
    const hovering = vue.ref(false);
    let hoverTouch = false;
    let hoverStartTimer;
    let hoverStayTimer;
    function hoverReset() {
      requestAnimationFrame(() => {
        clearTimeout(hoverStayTimer);
        hoverStayTimer = setTimeout(() => {
          hovering.value = false;
        }, parseInt(props2.hoverStayTime));
      });
    }
    function onTouchstartPassive(evt) {
      if (evt.touches.length > 1) {
        return;
      }
      handleHoverStart(evt);
    }
    function onMousedown(evt) {
      if (hoverTouch) {
        return;
      }
      handleHoverStart(evt);
      window.addEventListener('mouseup', handlePCHoverEnd);
    }
    function handleHoverStart(evt) {
      if (evt._hoverPropagationStopped) {
        return;
      }
      if (
        !props2.hoverClass ||
        props2.hoverClass === 'none' ||
        props2.disabled
      ) {
        return;
      }
      if (props2.hoverStopPropagation) {
        evt._hoverPropagationStopped = true;
      }
      hoverTouch = true;
      hoverStartTimer = setTimeout(() => {
        hovering.value = true;
        if (!hoverTouch) {
          hoverReset();
        }
      }, parseInt(props2.hoverStartTime));
    }
    function onTouchend() {
      handleHoverEnd();
    }
    function onMouseup() {
      if (!hoverTouch) {
        return;
      }
      handlePCHoverEnd();
    }
    function handleHoverEnd() {
      hoverTouch = false;
      if (hovering.value) {
        hoverReset();
      }
    }
    function handlePCHoverEnd() {
      handleHoverEnd();
      window.removeEventListener('mouseup', handlePCHoverEnd);
    }
    function onTouchcancel() {
      hoverTouch = false;
      hovering.value = false;
      clearTimeout(hoverStartTimer);
    }
    return {
      hovering,
      binding: {
        onTouchstartPassive,
        onMousedown,
        onTouchend,
        onMouseup,
        onTouchcancel,
      },
    };
  }
  function addBase(filePath) {
    const { base: baseUrl } = __uniConfig.router;
    if (addLeadingSlash(filePath).indexOf(baseUrl) === 0) {
      return addLeadingSlash(filePath);
    }
    return baseUrl + filePath;
  }
  function getRealPath(filePath) {
    const { base, assets } = __uniConfig.router;
    if (base === './') {
      if (
        filePath.indexOf('./static/') === 0 ||
        (assets && filePath.indexOf('./' + assets + '/') === 0)
      ) {
        filePath = filePath.slice(1);
      }
    }
    if (filePath.indexOf('/') === 0) {
      if (filePath.indexOf('//') === 0) {
        filePath = 'https:' + filePath;
      } else {
        return addBase(filePath.slice(1));
      }
    }
    if (
      SCHEME_RE.test(filePath) ||
      DATA_RE.test(filePath) ||
      filePath.indexOf('blob:') === 0
    ) {
      return filePath;
    }
    const pages = getCurrentPages$1();
    if (pages.length) {
      return addBase(
        getRealRoute(pages[pages.length - 1].$page.route, filePath).slice(1),
      );
    }
    return filePath;
  }
  const ua = navigator.userAgent;
  const isAndroid = /* @__PURE__ */ /android/i.test(ua);
  const isIOS$1 = /* @__PURE__ */ /iphone|ipad|ipod/i.test(ua);
  const isWindows = /* @__PURE__ */ ua.match(/Windows NT ([\d|\d.\d]*)/i);
  const isMac = /* @__PURE__ */ /Macintosh|Mac/i.test(ua);
  const isLinux = /* @__PURE__ */ /Linux|X11/i.test(ua);
  const isIPadOS = isMac && navigator.maxTouchPoints > 0;
  function getScreenFix() {
    return (
      /^Apple/.test(navigator.vendor) && typeof window.orientation === 'number'
    );
  }
  function isLandscape(screenFix) {
    return screenFix && Math.abs(window.orientation) === 90;
  }
  function getScreenWidth(screenFix, landscape) {
    return screenFix
      ? Math[landscape ? 'max' : 'min'](screen.width, screen.height)
      : screen.width;
  }
  function getScreenHeight(screenFix, landscape) {
    return screenFix
      ? Math[landscape ? 'min' : 'max'](screen.height, screen.width)
      : screen.height;
  }
  function getWindowWidth(screenWidth) {
    return (
      Math.min(
        window.innerWidth,
        document.documentElement.clientWidth,
        screenWidth,
      ) || screenWidth
    );
  }
  function getBaseSystemInfo() {
    const screenFix = getScreenFix();
    const windowWidth = getWindowWidth(
      getScreenWidth(screenFix, isLandscape(screenFix)),
    );
    return {
      platform: isIOS$1 ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth,
    };
  }
  const HTTP_METHODS = [
    'GET',
    'OPTIONS',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'TRACE',
    'CONNECT',
    'PATCH',
  ];
  function elemInArray(str, arr) {
    if (!str || arr.indexOf(str) === -1) {
      return arr[0];
    }
    return str;
  }
  function tryCatch(fn) {
    return function () {
      try {
        return fn.apply(fn, arguments);
      } catch (e2) {
        console.error(e2);
      }
    };
  }
  let invokeCallbackId = 1;
  const invokeCallbacks = {};
  function addInvokeCallback(id2, name, callback, keepAlive = false) {
    invokeCallbacks[id2] = {
      name,
      keepAlive,
      callback,
    };
    return id2;
  }
  function invokeCallback(id2, res, extras) {
    if (typeof id2 === 'number') {
      const opts = invokeCallbacks[id2];
      if (opts) {
        if (!opts.keepAlive) {
          delete invokeCallbacks[id2];
        }
        return opts.callback(res, extras);
      }
    }
    return res;
  }
  const API_SUCCESS = 'success';
  const API_FAIL = 'fail';
  const API_COMPLETE = 'complete';
  function getApiCallbacks(args) {
    const apiCallbacks = {};
    for (const name in args) {
      const fn = args[name];
      if (isFunction$2(fn)) {
        apiCallbacks[name] = tryCatch(fn);
        delete args[name];
      }
    }
    return apiCallbacks;
  }
  function normalizeErrMsg$1(errMsg, name) {
    if (!errMsg || errMsg.indexOf(':fail') === -1) {
      return name + ':ok';
    }
    return name + errMsg.substring(errMsg.indexOf(':fail'));
  }
  function createAsyncApiCallback(
    name,
    args = {},
    { beforeAll, beforeSuccess } = {},
  ) {
    if (!isPlainObject(args)) {
      args = {};
    }
    const { success, fail, complete } = getApiCallbacks(args);
    const hasSuccess = isFunction$2(success);
    const hasFail = isFunction$2(fail);
    const hasComplete = isFunction$2(complete);
    const callbackId = invokeCallbackId++;
    addInvokeCallback(callbackId, name, (res) => {
      res = res || {};
      res.errMsg = normalizeErrMsg$1(res.errMsg, name);
      isFunction$2(beforeAll) && beforeAll(res);
      if (res.errMsg === name + ':ok') {
        isFunction$2(beforeSuccess) && beforeSuccess(res, args);
        hasSuccess && success(res);
      } else {
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    return callbackId;
  }
  const HOOK_SUCCESS = 'success';
  const HOOK_FAIL = 'fail';
  const HOOK_COMPLETE = 'complete';
  const globalInterceptors = {};
  const scopedInterceptors = {};
  function wrapperHook(hook, params) {
    return function (data) {
      return hook(data, params) || data;
    };
  }
  function queue(hooks, data, params) {
    let promise2 = false;
    for (let i = 0; i < hooks.length; i++) {
      const hook = hooks[i];
      if (promise2) {
        promise2 = Promise.resolve(wrapperHook(hook, params));
      } else {
        const res = hook(data, params);
        if (isPromise(res)) {
          promise2 = Promise.resolve(res);
        }
        if (res === false) {
          return {
            then() {},
            catch() {},
          };
        }
      }
    }
    return (
      promise2 || {
        then(callback) {
          return callback(data);
        },
        catch() {},
      }
    );
  }
  function wrapperOptions(interceptors2, options = {}) {
    [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
      const hooks = interceptors2[name];
      if (!isArray$7(hooks)) {
        return;
      }
      const oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(hooks, res, options).then((res2) => {
          return (isFunction$2(oldCallback) && oldCallback(res2)) || res2;
        });
      };
    });
    return options;
  }
  function wrapperReturnValue(method, returnValue) {
    const returnValueHooks = [];
    if (isArray$7(globalInterceptors.returnValue)) {
      returnValueHooks.push(...globalInterceptors.returnValue);
    }
    const interceptor = scopedInterceptors[method];
    if (interceptor && isArray$7(interceptor.returnValue)) {
      returnValueHooks.push(...interceptor.returnValue);
    }
    returnValueHooks.forEach((hook) => {
      returnValue = hook(returnValue) || returnValue;
    });
    return returnValue;
  }
  function getApiInterceptorHooks(method) {
    const interceptor = /* @__PURE__ */ Object.create(null);
    Object.keys(globalInterceptors).forEach((hook) => {
      if (hook !== 'returnValue') {
        interceptor[hook] = globalInterceptors[hook].slice();
      }
    });
    const scopedInterceptor = scopedInterceptors[method];
    if (scopedInterceptor) {
      Object.keys(scopedInterceptor).forEach((hook) => {
        if (hook !== 'returnValue') {
          interceptor[hook] = (interceptor[hook] || []).concat(
            scopedInterceptor[hook],
          );
        }
      });
    }
    return interceptor;
  }
  function invokeApi(method, api2, options, params) {
    const interceptor = getApiInterceptorHooks(method);
    if (interceptor && Object.keys(interceptor).length) {
      if (isArray$7(interceptor.invoke)) {
        const res = queue(interceptor.invoke, options);
        return res.then((options2) => {
          return api2(
            wrapperOptions(getApiInterceptorHooks(method), options2),
            ...params,
          );
        });
      } else {
        return api2(wrapperOptions(interceptor, options), ...params);
      }
    }
    return api2(options, ...params);
  }
  function hasCallback(args) {
    if (
      isPlainObject(args) &&
      [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction$2(args[cb]))
    ) {
      return true;
    }
    return false;
  }
  function handlePromise(promise2) {
    return promise2;
  }
  function promisify(name, fn) {
    return (args = {}, ...rest) => {
      if (hasCallback(args)) {
        return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
      }
      return wrapperReturnValue(
        name,
        handlePromise(
          new Promise((resolve, reject) => {
            invokeApi(
              name,
              fn,
              extend(args, { success: resolve, fail: reject }),
              rest,
            );
          }),
        ),
      );
    };
  }
  function formatApiArgs(args, options) {
    const params = args[0];
    if (
      !options ||
      (!isPlainObject(options.formatArgs) && isPlainObject(params))
    ) {
      return;
    }
    const formatArgs = options.formatArgs;
    const keys = Object.keys(formatArgs);
    for (let i = 0; i < keys.length; i++) {
      const name = keys[i];
      const formatterOrDefaultValue = formatArgs[name];
      if (isFunction$2(formatterOrDefaultValue)) {
        const errMsg = formatterOrDefaultValue(args[0][name], params);
        if (isString(errMsg)) {
          return errMsg;
        }
      } else {
        if (!hasOwn$1(params, name)) {
          params[name] = formatterOrDefaultValue;
        }
      }
    }
  }
  function invokeSuccess(id2, name, res) {
    return invokeCallback(id2, extend(res || {}, { errMsg: name + ':ok' }));
  }
  function invokeFail(id2, name, errMsg, errRes) {
    return invokeCallback(
      id2,
      extend({ errMsg: name + ':fail' + (errMsg ? ' ' + errMsg : '') }, errRes),
    );
  }
  function beforeInvokeApi(name, args, protocol, options) {
    if (options && options.beforeInvoke) {
      const errMsg2 = options.beforeInvoke(args);
      if (isString(errMsg2)) {
        return errMsg2;
      }
    }
    const errMsg = formatApiArgs(args, options);
    if (errMsg) {
      return errMsg;
    }
  }
  function normalizeErrMsg(errMsg) {
    if (!errMsg || isString(errMsg)) {
      return errMsg;
    }
    if (errMsg.stack) {
      console.error(errMsg.message + LINEFEED + errMsg.stack);
      return errMsg.message;
    }
    return errMsg;
  }
  function wrapperTaskApi(name, fn, protocol, options) {
    return (args) => {
      const id2 = createAsyncApiCallback(name, args, options);
      const errMsg = beforeInvokeApi(name, [args], protocol, options);
      if (errMsg) {
        return invokeFail(id2, name, errMsg);
      }
      return fn(args, {
        resolve: (res) => invokeSuccess(id2, name, res),
        reject: (errMsg2, errRes) =>
          invokeFail(id2, name, normalizeErrMsg(errMsg2), errRes),
      });
    };
  }
  function wrapperSyncApi(name, fn, protocol, options) {
    return (...args) => {
      const errMsg = beforeInvokeApi(name, args, protocol, options);
      if (errMsg) {
        throw new Error(errMsg);
      }
      return fn.apply(null, args);
    };
  }
  function wrapperAsyncApi(name, fn, protocol, options) {
    return wrapperTaskApi(name, fn, protocol, options);
  }
  function defineTaskApi(name, fn, protocol, options) {
    return promisify(name, wrapperTaskApi(name, fn, void 0, options));
  }
  function defineSyncApi(name, fn, protocol, options) {
    return wrapperSyncApi(name, fn, void 0, options);
  }
  function defineAsyncApi(name, fn, protocol, options) {
    return promisify(name, wrapperAsyncApi(name, fn, void 0, options));
  }
  const API_UPX2PX = 'upx2px';
  const EPS = 1e-4;
  const BASE_DEVICE_WIDTH = 750;
  let isIOS = false;
  let deviceWidth = 0;
  let deviceDPR = 0;
  let maxWidth = 960;
  let baseWidth = 375;
  let includeWidth = 750;
  function checkDeviceWidth() {
    const {
      platform,
      pixelRatio: pixelRatio2,
      windowWidth,
    } = getBaseSystemInfo();
    deviceWidth = windowWidth;
    deviceDPR = pixelRatio2;
    isIOS = platform === 'ios';
  }
  function checkValue(value, defaultValue) {
    const newValue = Number(value);
    return isNaN(newValue) ? defaultValue : newValue;
  }
  function checkMaxWidth() {
    const config2 = __uniConfig.globalStyle || {};
    maxWidth = checkValue(config2.rpxCalcMaxDeviceWidth, 960);
    baseWidth = checkValue(config2.rpxCalcBaseDeviceWidth, 375);
    includeWidth = checkValue(config2.rpxCalcBaseDeviceWidth, 750);
  }
  const upx2px = /* @__PURE__ */ defineSyncApi(
    API_UPX2PX,
    (number2, newDeviceWidth) => {
      if (deviceWidth === 0) {
        checkDeviceWidth();
        {
          checkMaxWidth();
        }
      }
      number2 = Number(number2);
      if (number2 === 0) {
        return 0;
      }
      let width = newDeviceWidth || deviceWidth;
      {
        width =
          number2 === includeWidth || width <= maxWidth ? width : baseWidth;
      }
      let result = (number2 / BASE_DEVICE_WIDTH) * width;
      if (result < 0) {
        result = -result;
      }
      result = Math.floor(result + EPS);
      if (result === 0) {
        if (deviceDPR === 1 || !isIOS) {
          result = 1;
        } else {
          result = 0.5;
        }
      }
      return number2 < 0 ? -result : result;
    },
  );
  const API_GET_LOCALE = 'getLocale';
  const getLocale = /* @__PURE__ */ defineSyncApi(API_GET_LOCALE, () => {
    return useI18n().getLocale();
  });
  const API_REQUEST = 'request';
  const dataType = {
    JSON: 'json',
  };
  const RESPONSE_TYPE = ['text', 'arraybuffer'];
  const DEFAULT_RESPONSE_TYPE = 'text';
  const encode = encodeURIComponent;
  function stringifyQuery(url2, data) {
    let str = url2.split('#');
    const hash = str[1] || '';
    str = str[0].split('?');
    let query = str[1] || '';
    url2 = str[0];
    const search = query.split('&').filter((item) => item);
    const params = {};
    search.forEach((item) => {
      const part = item.split('=');
      params[part[0]] = part[1];
    });
    for (const key in data) {
      if (hasOwn$1(data, key)) {
        let v2 = data[key];
        if (typeof v2 === 'undefined' || v2 === null) {
          v2 = '';
        } else if (isPlainObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        params[encode(key)] = encode(v2);
      }
    }
    query = Object.keys(params)
      .map((item) => `${item}=${params[item]}`)
      .join('&');
    return url2 + (query ? '?' + query : '') + (hash ? '#' + hash : '');
  }
  const RequestProtocol = {
    method: String,
    data: [Object, String, Array, ArrayBuffer],
    url: {
      type: String,
      required: true,
    },
    header: Object,
    dataType: String,
    responseType: String,
    withCredentials: Boolean,
  };
  const RequestOptions = {
    formatArgs: {
      method(value, params) {
        params.method = elemInArray((value || '').toUpperCase(), HTTP_METHODS);
      },
      data(value, params) {
        params.data = value || '';
      },
      url(value, params) {
        if (
          params.method === HTTP_METHODS[0] &&
          isPlainObject(params.data) &&
          Object.keys(params.data).length
        ) {
          params.url = stringifyQuery(value, params.data);
        }
      },
      header(value, params) {
        const header = (params.header = value || {});
        if (params.method !== HTTP_METHODS[0]) {
          if (
            !Object.keys(header).find(
              (key) => key.toLowerCase() === 'content-type',
            )
          ) {
            header['Content-Type'] = 'application/json';
          }
        }
      },
      dataType(value, params) {
        params.dataType = (value || dataType.JSON).toLowerCase();
      },
      responseType(value, params) {
        params.responseType = (value || '').toLowerCase();
        if (RESPONSE_TYPE.indexOf(params.responseType) === -1) {
          params.responseType = DEFAULT_RESPONSE_TYPE;
        }
      },
    },
  };
  function encodeQueryString(url2) {
    if (!isString(url2)) {
      return url2;
    }
    const index2 = url2.indexOf('?');
    if (index2 === -1) {
      return url2;
    }
    const query = url2
      .slice(index2 + 1)
      .trim()
      .replace(/^(\?|#|&)/, '');
    if (!query) {
      return url2;
    }
    url2 = url2.slice(0, index2);
    const params = [];
    query.split('&').forEach((param) => {
      const parts = param.replace(/\+/g, ' ').split('=');
      const key = parts.shift();
      const val = parts.length > 0 ? parts.join('=') : '';
      params.push(key + '=' + encodeURIComponent(val));
    });
    return params.length ? url2 + '?' + params.join('&') : url2;
  }
  const ANIMATION_IN$1 = [
    'slide-in-right',
    'slide-in-left',
    'slide-in-top',
    'slide-in-bottom',
    'fade-in',
    'zoom-out',
    'zoom-fade-out',
    'pop-in',
    'none',
  ];
  const ANIMATION_OUT$1 = [
    'slide-out-right',
    'slide-out-left',
    'slide-out-top',
    'slide-out-bottom',
    'fade-out',
    'zoom-in',
    'zoom-fade-in',
    'pop-out',
    'none',
  ];
  const BaseRouteProtocol = {
    url: {
      type: String,
      required: true,
    },
  };
  const API_NAVIGATE_TO = 'navigateTo';
  const API_REDIRECT_TO = 'redirectTo';
  const API_RE_LAUNCH = 'reLaunch';
  const API_SWITCH_TAB = 'switchTab';
  const API_NAVIGATE_BACK = 'navigateBack';
  const API_PRELOAD_PAGE = 'preloadPage';
  const API_UN_PRELOAD_PAGE = 'unPreloadPage';
  const NavigateToProtocol = /* @__PURE__ */ extend(
    {},
    BaseRouteProtocol,
    createAnimationProtocol(ANIMATION_IN$1),
  );
  const NavigateBackProtocol = /* @__PURE__ */ extend(
    {
      delta: {
        type: Number,
      },
    },
    createAnimationProtocol(ANIMATION_OUT$1),
  );
  const RedirectToProtocol = BaseRouteProtocol;
  const ReLaunchProtocol = BaseRouteProtocol;
  const SwitchTabProtocol = BaseRouteProtocol;
  const NavigateToOptions = /* @__PURE__ */ createRouteOptions(API_NAVIGATE_TO);
  const RedirectToOptions = /* @__PURE__ */ createRouteOptions(API_REDIRECT_TO);
  const ReLaunchOptions = /* @__PURE__ */ createRouteOptions(API_RE_LAUNCH);
  const SwitchTabOptions = /* @__PURE__ */ createRouteOptions(API_SWITCH_TAB);
  const NavigateBackOptions = {
    formatArgs: {
      delta(value, params) {
        value = parseInt(value + '') || 1;
        params.delta = Math.min(getCurrentPages$1().length - 1, value);
      },
    },
  };
  function createAnimationProtocol(animationTypes) {
    return {
      animationType: {
        type: String,
        validator(type) {
          if (type && animationTypes.indexOf(type) === -1) {
            return (
              '`' +
              type +
              '` is not supported for `animationType` (supported values are: `' +
              animationTypes.join('`|`') +
              '`)'
            );
          }
        },
      },
      animationDuration: {
        type: Number,
      },
    };
  }
  let navigatorLock;
  function beforeRoute() {
    navigatorLock = '';
  }
  function createRouteOptions(type) {
    return {
      formatArgs: {
        url: createNormalizeUrl(type),
      },
      beforeAll: beforeRoute,
    };
  }
  function createNormalizeUrl(type) {
    return function normalizeUrl(url2, params) {
      if (!url2) {
        return `Missing required args: "url"`;
      }
      url2 = normalizeRoute(url2);
      const pagePath = url2.split('?')[0];
      const routeOptions = getRouteOptions(pagePath, true);
      if (!routeOptions) {
        return 'page `' + url2 + '` is not found';
      }
      if (type === API_NAVIGATE_TO || type === API_REDIRECT_TO) {
        if (routeOptions.meta.isTabBar) {
          return `can not ${type} a tabbar page`;
        }
      } else if (type === API_SWITCH_TAB) {
        if (!routeOptions.meta.isTabBar) {
          return 'can not switch to no-tabBar page';
        }
      }
      if (
        (type === API_SWITCH_TAB || type === API_PRELOAD_PAGE) &&
        routeOptions.meta.isTabBar &&
        params.openType !== 'appLaunch'
      ) {
        url2 = pagePath;
      }
      if (routeOptions.meta.isEntry) {
        url2 = url2.replace(routeOptions.alias, '/');
      }
      params.url = encodeQueryString(url2);
      if (type === API_UN_PRELOAD_PAGE) {
        return;
      } else if (type === API_PRELOAD_PAGE) {
        if (routeOptions.meta.isTabBar) {
          const pages = getCurrentPages$1();
          const tabBarPagePath = routeOptions.path.slice(1);
          if (pages.find((page) => page.route === tabBarPagePath)) {
            return 'tabBar page `' + tabBarPagePath + '` already exists';
          }
        }
        return;
      }
      if (navigatorLock === url2 && params.openType !== 'appLaunch') {
        return `${navigatorLock} locked`;
      }
      if (__uniConfig.ready) {
        navigatorLock = url2;
      }
    };
  }
  const API_HIDE_LOADING = 'hideLoading';
  const API_SHOW_LOADING = 'showLoading';
  const ShowLoadingProtocol = {
    title: String,
    mask: Boolean,
  };
  const ShowLoadingOptions = {
    formatArgs: {
      title: '',
      mask: false,
    },
  };
  const API_SHOW_TOAST = 'showToast';
  const SHOW_TOAST_ICON = ['success', 'loading', 'none', 'error'];
  const ShowToastProtocol = {
    title: String,
    icon: String,
    image: String,
    duration: Number,
    mask: Boolean,
  };
  const ShowToastOptions = {
    formatArgs: {
      title: '',
      icon(type, params) {
        params.icon = elemInArray(type, SHOW_TOAST_ICON);
      },
      image(value, params) {
        if (value) {
          params.image = getRealPath(value);
        } else {
          params.image = '';
        }
      },
      duration: 1500,
      mask: false,
    },
  };
  const IndexOptions = {
    beforeInvoke() {
      const pageMeta = getCurrentPageMeta();
      if (pageMeta && !pageMeta.isTabBar) {
        return 'not TabBar page';
      }
    },
    formatArgs: {
      index(value) {
        if (!__uniConfig.tabBar.list[value]) {
          return 'tabbar item not found';
        }
      },
    },
  };
  ({
    beforeInvoke: IndexOptions.beforeInvoke,
    formatArgs: /* @__PURE__ */ extend(
      {
        pagePath(value, params) {
          if (value) {
            params.pagePath = removeLeadingSlash(value);
          }
        },
      },
      IndexOptions.formatArgs,
    ),
  });
  const GRADIENT_RE = /^(linear|radial)-gradient\(.+?\);?$/;
  ({
    beforeInvoke: IndexOptions.beforeInvoke,
    formatArgs: {
      backgroundImage(value, params) {
        if (value && !GRADIENT_RE.test(value)) {
          params.backgroundImage = getRealPath(value);
        }
      },
      borderStyle(value, params) {
        if (value) {
          params.borderStyle = value === 'white' ? 'white' : 'black';
        }
      },
    },
  });
  ({
    beforeInvoke: IndexOptions.beforeInvoke,
    formatArgs: /* @__PURE__ */ extend(
      {
        text(value, params) {
          if (getLen(value) >= 4) {
            params.text = '...';
          }
        },
      },
      IndexOptions.formatArgs,
    ),
  });
  const passiveOptions$1 = /* @__PURE__ */ passive(true);
  const states = [];
  let userInteract = 0;
  let inited;
  const setUserAction = (userAction) =>
    states.forEach((vm) => (vm.userAction = userAction));
  function addInteractListener(vm = { userAction: false }) {
    if (!inited) {
      const eventNames = [
        'touchstart',
        'touchmove',
        'touchend',
        'mousedown',
        'mouseup',
      ];
      eventNames.forEach((eventName) => {
        document.addEventListener(
          eventName,
          function () {
            !userInteract && setUserAction(true);
            userInteract++;
            setTimeout(() => {
              !--userInteract && setUserAction(false);
            }, 0);
          },
          passiveOptions$1,
        );
      });
      inited = true;
    }
    states.push(vm);
  }
  const OPEN_TYPES = [
    'navigate',
    'redirect',
    'switchTab',
    'reLaunch',
    'navigateBack',
  ];
  const ANIMATION_IN = [
    'slide-in-right',
    'slide-in-left',
    'slide-in-top',
    'slide-in-bottom',
    'fade-in',
    'zoom-out',
    'zoom-fade-out',
    'pop-in',
    'none',
  ];
  const ANIMATION_OUT = [
    'slide-out-right',
    'slide-out-left',
    'slide-out-top',
    'slide-out-bottom',
    'fade-out',
    'zoom-in',
    'zoom-fade-in',
    'pop-out',
    'none',
  ];
  const navigatorProps = {
    hoverClass: {
      type: String,
      default: 'navigator-hover',
    },
    url: {
      type: String,
      default: '',
    },
    openType: {
      type: String,
      default: 'navigate',
      validator(value) {
        return Boolean(~OPEN_TYPES.indexOf(value));
      },
    },
    delta: {
      type: Number,
      default: 1,
    },
    hoverStartTime: {
      type: [Number, String],
      default: 50,
    },
    hoverStayTime: {
      type: [Number, String],
      default: 600,
    },
    exists: {
      type: String,
      default: '',
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false,
    },
    animationType: {
      type: String,
      default: '',
      validator(value) {
        return !value || ANIMATION_IN.concat(ANIMATION_OUT).includes(value);
      },
    },
    animationDuration: {
      type: [String, Number],
      default: 300,
    },
  };
  function createNavigatorOnClick(props2) {
    return () => {
      if (props2.openType !== 'navigateBack' && !props2.url) {
        console.error(
          '<navigator/> should have url attribute when using navigateTo, redirectTo, reLaunch or switchTab',
        );
        return;
      }
      const animationDuration = parseInt(props2.animationDuration);
      switch (props2.openType) {
        case 'navigate':
          navigateTo({
            url: props2.url,
            animationType: props2.animationType || 'pop-in',
            animationDuration,
          });
          break;
        case 'redirect':
          redirectTo({
            url: props2.url,
            // @ts-ignore
            exists: props2.exists,
          });
          break;
        case 'switchTab':
          switchTab({
            url: props2.url,
          });
          break;
        case 'reLaunch':
          reLaunch({
            url: props2.url,
          });
          break;
        case 'navigateBack':
          navigateBack({
            delta: props2.delta,
            animationType: props2.animationType || 'pop-out',
            animationDuration,
          });
          break;
      }
    };
  }
  /* @__PURE__ */ defineBuiltInComponent({
    name: 'Navigator',
    inheritAttrs: false,
    compatConfig: {
      MODE: 3,
    },
    props: extend({}, navigatorProps, {
      renderLink: {
        type: Boolean,
        default: true,
      },
    }),
    setup(props2, { slots }) {
      const vm = vue.getCurrentInstance();
      const __scopeId = (vm && vm.vnode.scopeId) || '';
      const { hovering, binding } = useHover(props2);
      const onClick = createNavigatorOnClick(props2);
      return () => {
        const { hoverClass, url: url2 } = props2;
        const hasHoverClass = props2.hoverClass && props2.hoverClass !== 'none';
        const navigatorTsx = vue.createVNode(
          'uni-navigator',
          vue.mergeProps(
            {
              class: hasHoverClass && hovering.value ? hoverClass : '',
            },
            hasHoverClass && binding,
            vm ? vm.attrs : {},
            {
              [__scopeId]: '',
            },
            {
              onClick: onClick,
            },
          ),
          [slots.default && slots.default()],
          16,
          ['onClick'],
        );
        return props2.renderLink
          ? vue.createVNode(
              'a',
              {
                class: 'navigator-wrap',
                href: url2,
                onClick: onEventPrevent,
                onMousedown: onEventPrevent,
              },
              [navigatorTsx],
              40,
              ['href', 'onClick', 'onMousedown'],
            )
          : navigatorTsx;
      };
    },
  });
  /* @__PURE__ */ defineBuiltInComponent({
    name: 'View',
    props: extend({}, hoverProps),
    setup(props2, { slots }) {
      const { hovering, binding } = useHover(props2);
      return () => {
        const hoverClass = props2.hoverClass;
        if (hoverClass && hoverClass !== 'none') {
          return vue.createVNode(
            'uni-view',
            vue.mergeProps(
              {
                class: hovering.value ? hoverClass : '',
              },
              binding,
            ),
            [slots.default && slots.default()],
            16,
          );
        }
        return vue.createVNode('uni-view', null, [
          slots.default && slots.default(),
        ]);
      };
    },
  });
  const pageMetaKey = PolySymbol('upm');
  function usePageMeta() {
    return vue.inject(pageMetaKey);
  }
  function providePageMeta(id2) {
    const pageMeta = initPageMeta(id2);
    vue.provide(pageMetaKey, pageMeta);
    return pageMeta;
  }
  function initPageMeta(id2) {
    return vue.reactive(
      normalizePageMeta(
        JSON.parse(JSON.stringify(initRouteMeta(__uniRoutes[0].meta, id2))),
      ),
    );
  }
  function normalizePageMeta(pageMeta) {
    {
      const { navigationBar } = pageMeta;
      const { titleSize, titleColor, backgroundColor } = navigationBar;
      navigationBar.titleText = navigationBar.titleText || '';
      navigationBar.type = navigationBar.type || 'default';
      navigationBar.titleSize = titleSize || '16px';
      navigationBar.titleColor = titleColor || '#000000';
      navigationBar.backgroundColor = backgroundColor || '#F8F8F8';
    }
    return pageMeta;
  }
  function getStateId() {
    return (history.state && history.state.__id__) || 1;
  }
  const SEP = '$$';
  const currentPagesMap = /* @__PURE__ */ new Map();
  function pruneCurrentPages() {
    currentPagesMap.forEach((page, id2) => {
      if (page.$.isUnmounted) {
        currentPagesMap.delete(id2);
      }
    });
  }
  function getCurrentPagesMap() {
    return currentPagesMap;
  }
  function getCurrentPages$1() {
    const curPages = [];
    const pages = currentPagesMap.values();
    for (const page of pages) {
      if (page.$.__isTabBar) {
        if (page.$.__isActive) {
          curPages.push(page);
        }
      } else {
        curPages.push(page);
      }
    }
    return curPages;
  }
  function removeRouteCache(routeKey) {
    const vnode = pageCacheMap.get(routeKey);
    if (vnode) {
      pageCacheMap.delete(routeKey);
      routeCache.pruneCacheEntry(vnode);
    }
  }
  function removePage(routeKey, removeRouteCaches = true) {
    const pageVm = currentPagesMap.get(routeKey);
    pageVm.$.__isUnload = true;
    invokeHook(pageVm, ON_UNLOAD);
    currentPagesMap.delete(routeKey);
    removeRouteCaches && removeRouteCache(routeKey);
  }
  let id = /* @__PURE__ */ getStateId();
  function createPageState(type, __id__) {
    return {
      __id__: __id__ || ++id,
      __type__: type,
    };
  }
  function normalizeRouteKey(path, id2) {
    return path + SEP + id2;
  }
  const pageCacheMap = /* @__PURE__ */ new Map();
  const routeCache = {
    get(key) {
      return pageCacheMap.get(key);
    },
    set(key, value) {
      pruneRouteCache(key);
      pageCacheMap.set(key, value);
    },
    delete(key) {
      const vnode = pageCacheMap.get(key);
      if (!vnode) {
        return;
      }
      pageCacheMap.delete(key);
    },
    forEach(fn) {
      pageCacheMap.forEach(fn);
    },
  };
  function pruneRouteCache(key) {
    const pageId = parseInt(key.split(SEP)[1]);
    if (!pageId) {
      return;
    }
    routeCache.forEach((vnode, key2) => {
      const cPageId = parseInt(key2.split(SEP)[1]);
      if (cPageId && cPageId > pageId) {
        routeCache.delete(key2);
        routeCache.pruneCacheEntry(vnode);
        vue.nextTick(() => pruneCurrentPages());
      }
    });
  }
  let appVm;
  function getApp$1() {
    return appVm;
  }
  const UUID_KEY = '__DC_STAT_UUID';
  const storage =
    (navigator.cookieEnabled &&
      (window.localStorage || window.sessionStorage)) ||
    {};
  let deviceId;
  function deviceId$1() {
    deviceId = deviceId || storage[UUID_KEY];
    if (!deviceId) {
      deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
      try {
        storage[UUID_KEY] = deviceId;
      } catch (error) {}
    }
    return deviceId;
  }
  function IEVersion() {
    const userAgent = navigator.userAgent;
    const isIE =
      userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
    const isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
    const isIE11 =
      userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    if (isIE) {
      const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      const fIEVersion = parseFloat(RegExp.$1);
      if (fIEVersion > 6) {
        return fIEVersion;
      } else {
        return 6;
      }
    } else if (isEdge) {
      return -1;
    } else if (isIE11) {
      return 11;
    } else {
      return -1;
    }
  }
  function getTheme() {
    if (__uniConfig.darkmode !== true)
      return isString(__uniConfig.darkmode) ? __uniConfig.darkmode : 'light';
    try {
      return window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
    } catch (error) {
      return 'light';
    }
  }
  function getBrowserInfo() {
    let osname;
    let osversion = '0';
    let model = '';
    let deviceType = 'phone';
    const language = navigator.language;
    if (isIOS$1) {
      osname = 'iOS';
      const osversionFind = ua.match(/OS\s([\w_]+)\slike/);
      if (osversionFind) {
        osversion = osversionFind[1].replace(/_/g, '.');
      }
      const modelFind = ua.match(/\(([a-zA-Z]+);/);
      if (modelFind) {
        model = modelFind[1];
      }
    } else if (isAndroid) {
      osname = 'Android';
      const osversionFind = ua.match(/Android[\s/]([\w\.]+)[;\s]/);
      if (osversionFind) {
        osversion = osversionFind[1];
      }
      const infoFind = ua.match(/\((.+?)\)/);
      const infos = infoFind ? infoFind[1].split(';') : ua.split(' ');
      const otherInfo = [
        /\bAndroid\b/i,
        /\bLinux\b/i,
        /\bU\b/i,
        /^\s?[a-z][a-z]$/i,
        /^\s?[a-z][a-z]-[a-z][a-z]$/i,
        /\bwv\b/i,
        /\/[\d\.,]+$/,
        /^\s?[\d\.,]+$/,
        /\bBrowser\b/i,
        /\bMobile\b/i,
      ];
      for (let i = 0; i < infos.length; i++) {
        const info = infos[i];
        if (info.indexOf('Build') > 0) {
          model = info.split('Build')[0].trim();
          break;
        }
        let other;
        for (let o2 = 0; o2 < otherInfo.length; o2++) {
          if (otherInfo[o2].test(info)) {
            other = true;
            break;
          }
        }
        if (!other) {
          model = info.trim();
          break;
        }
      }
    } else if (isIPadOS) {
      model = 'iPad';
      osname = 'iOS';
      deviceType = 'pad';
      osversion = isFunction$2(window.BigInt) ? '14.0' : '13.0';
    } else if (isWindows || isMac || isLinux) {
      model = 'PC';
      osname = 'PC';
      deviceType = 'pc';
      osversion = '0';
      let osversionFind = ua.match(/\((.+?)\)/)[1];
      if (isWindows) {
        osname = 'Windows';
        switch (isWindows[1]) {
          case '5.1':
            osversion = 'XP';
            break;
          case '6.0':
            osversion = 'Vista';
            break;
          case '6.1':
            osversion = '7';
            break;
          case '6.2':
            osversion = '8';
            break;
          case '6.3':
            osversion = '8.1';
            break;
          case '10.0':
            osversion = '10';
            break;
        }
        const framework =
          osversionFind && osversionFind.match(/[Win|WOW]([\d]+)/);
        if (framework) {
          osversion += ` x${framework[1]}`;
        }
      } else if (isMac) {
        osname = 'macOS';
        const _osversion =
          (osversionFind && osversionFind.match(/Mac OS X (.+)/)) || '';
        if (osversion) {
          osversion = _osversion[1].replace(/_/g, '.');
          if (osversion.indexOf(';') !== -1) {
            osversion = osversion.split(';')[0];
          }
        }
      } else if (isLinux) {
        osname = 'Linux';
        const _osversion =
          (osversionFind && osversionFind.match(/Linux (.*)/)) || '';
        if (_osversion) {
          osversion = _osversion[1];
          if (osversion.indexOf(';') !== -1) {
            osversion = osversion.split(';')[0];
          }
        }
      }
    } else {
      osname = 'Other';
      osversion = '0';
      deviceType = 'unknown';
    }
    const system = `${osname} ${osversion}`;
    const platform = osname.toLocaleLowerCase();
    let browserName = '';
    let browserVersion = String(IEVersion());
    if (browserVersion !== '-1') {
      browserName = 'IE';
    } else {
      const browseVendors = ['Version', 'Firefox', 'Chrome', 'Edge{0,1}'];
      const vendors = ['Safari', 'Firefox', 'Chrome', 'Edge'];
      for (let index2 = 0; index2 < browseVendors.length; index2++) {
        const vendor = browseVendors[index2];
        const reg = new RegExp(`(${vendor})/(\\S*)\\b`);
        if (reg.test(ua)) {
          browserName = vendors[index2];
          browserVersion = ua.match(reg)[2];
        }
      }
    }
    let deviceOrientation = 'portrait';
    const orientation =
      typeof window.screen.orientation === 'undefined'
        ? window.orientation
        : window.screen.orientation.angle;
    deviceOrientation = Math.abs(orientation) === 90 ? 'landscape' : 'portrait';
    return {
      deviceBrand: void 0,
      brand: void 0,
      deviceModel: model,
      deviceOrientation,
      model,
      system,
      platform,
      browserName: browserName.toLocaleLowerCase(),
      browserVersion,
      language,
      deviceType,
      ua,
      osname,
      osversion,
      theme: getTheme(),
    };
  }
  const getWindowInfo = /* @__PURE__ */ defineSyncApi('getWindowInfo', () => {
    const pixelRatio2 = window.devicePixelRatio;
    const screenFix = getScreenFix();
    const landscape = isLandscape(screenFix);
    const screenWidth = getScreenWidth(screenFix, landscape);
    const screenHeight = getScreenHeight(screenFix, landscape);
    const windowWidth = getWindowWidth(screenWidth);
    let windowHeight = window.innerHeight;
    const statusBarHeight = safeAreaInsets$1.top;
    const safeArea = {
      left: safeAreaInsets$1.left,
      right: windowWidth - safeAreaInsets$1.right,
      top: safeAreaInsets$1.top,
      bottom: windowHeight - safeAreaInsets$1.bottom,
      width: windowWidth - safeAreaInsets$1.left - safeAreaInsets$1.right,
      height: windowHeight - safeAreaInsets$1.top - safeAreaInsets$1.bottom,
    };
    const { top: windowTop, bottom: windowBottom } = getWindowOffset();
    windowHeight -= windowTop;
    windowHeight -= windowBottom;
    return {
      windowTop,
      windowBottom,
      windowWidth,
      windowHeight,
      pixelRatio: pixelRatio2,
      screenWidth,
      screenHeight,
      statusBarHeight,
      safeArea,
      safeAreaInsets: {
        top: safeAreaInsets$1.top,
        right: safeAreaInsets$1.right,
        bottom: safeAreaInsets$1.bottom,
        left: safeAreaInsets$1.left,
      },
      screenTop: screenHeight - windowHeight,
    };
  });
  let browserInfo;
  let _initBrowserInfo = true;
  function initBrowserInfo() {
    if (!_initBrowserInfo) return;
    browserInfo = getBrowserInfo();
  }
  const getDeviceInfo = /* @__PURE__ */ defineSyncApi('getDeviceInfo', () => {
    initBrowserInfo();
    const {
      deviceBrand,
      deviceModel,
      brand,
      model,
      platform,
      system,
      deviceOrientation,
      deviceType,
    } = browserInfo;
    return {
      brand,
      deviceBrand,
      deviceModel,
      devicePixelRatio: window.devicePixelRatio,
      deviceId: deviceId$1(),
      deviceOrientation,
      deviceType,
      model,
      platform,
      system,
    };
  });
  const getAppBaseInfo = /* @__PURE__ */ defineSyncApi('getAppBaseInfo', () => {
    initBrowserInfo();
    const { theme, language, browserName, browserVersion } = browserInfo;
    return {
      appId: __uniConfig.appId,
      appName: __uniConfig.appName,
      appVersion: __uniConfig.appVersion,
      appVersionCode: __uniConfig.appVersionCode,
      appLanguage: getLocale ? getLocale() : language,
      enableDebug: false,
      hostSDKVersion: void 0,
      hostPackageName: void 0,
      hostFontSizeSetting: void 0,
      hostName: browserName,
      hostVersion: browserVersion,
      hostTheme: theme,
      hostLanguage: language,
      language,
      SDKVersion: '',
      theme,
      version: '',
    };
  });
  const getSystemInfoSync = /* @__PURE__ */ defineSyncApi(
    'getSystemInfoSync',
    () => {
      _initBrowserInfo = true;
      initBrowserInfo();
      _initBrowserInfo = false;
      const windowInfo = getWindowInfo();
      const deviceInfo = getDeviceInfo();
      const appBaseInfo = getAppBaseInfo();
      _initBrowserInfo = true;
      const {
        ua: ua2,
        browserName,
        browserVersion,
        osname,
        osversion,
      } = browserInfo;
      const systemInfo = extend(windowInfo, deviceInfo, appBaseInfo, {
        ua: ua2,
        browserName,
        browserVersion,
        uniPlatform: 'web',
        uniCompileVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion,
        fontSizeSetting: void 0,
        osName: osname.toLocaleLowerCase(),
        osVersion: osversion,
        osLanguage: void 0,
        osTheme: void 0,
      });
      delete systemInfo.screenTop;
      delete systemInfo.enableDebug;
      if (!__uniConfig.darkmode) delete systemInfo.theme;
      return sortObject(systemInfo);
    },
  );
  addInteractListener();
  const KEY_MAPS = {
    esc: ['Esc', 'Escape'],
    // tab: ['Tab'],
    enter: ['Enter'],
    // space: [' ', 'Spacebar'],
    // up: ['Up', 'ArrowUp'],
    // left: ['Left', 'ArrowLeft'],
    // right: ['Right', 'ArrowRight'],
    // down: ['Down', 'ArrowDown'],
    // delete: ['Backspace', 'Delete', 'Del'],
  };
  const KEYS = Object.keys(KEY_MAPS);
  function useKeyboard() {
    const key = vue.ref('');
    const disable = vue.ref(false);
    const onKeyup = (evt) => {
      if (disable.value) {
        return;
      }
      const res = KEYS.find((key2) => KEY_MAPS[key2].indexOf(evt.key) !== -1);
      if (res) {
        key.value = res;
      }
      vue.nextTick(() => (key.value = ''));
    };
    vue.onMounted(() => {
      document.addEventListener('keyup', onKeyup);
    });
    vue.onBeforeUnmount(() => {
      document.removeEventListener('keyup', onKeyup);
    });
    return {
      key,
      disable,
    };
  }
  function createRootApp(component, rootState, callback) {
    rootState.onClose = (...args) => (
      (rootState.visible = false), callback.apply(null, args)
    );
    return vue.createApp(
      vue.defineComponent({
        setup() {
          return () => (
            vue.openBlock(),
            vue.createBlock(
              component,
              rootState,
              null,
              16,
              /* FULL_PROPS */
            )
          );
        },
      }),
    );
  }
  function ensureRoot(id2) {
    let rootEl = document.getElementById(id2);
    if (!rootEl) {
      rootEl = document.createElement('div');
      rootEl.id = id2;
      document.body.append(rootEl);
    }
    return rootEl;
  }
  function usePopup(props2, { onEsc, onEnter }) {
    const visible = vue.ref(props2.visible);
    const { key, disable } = useKeyboard();
    vue.watch(
      () => props2.visible,
      (value) => (visible.value = value),
    );
    vue.watch(
      () => visible.value,
      (value) => (disable.value = !value),
    );
    vue.watchEffect(() => {
      const { value } = key;
      if (value === 'esc') {
        onEsc && onEsc();
      } else if (value === 'enter') {
        onEnter && onEnter();
      }
    });
    return visible;
  }
  const request = /* @__PURE__ */ defineTaskApi(
    API_REQUEST,
    (
      {
        url: url2,
        data,
        header,
        method,
        dataType: dataType2,
        responseType,
        withCredentials,
        timeout: timeout2 = __uniConfig.networkTimeout.request,
      },
      { resolve, reject },
    ) => {
      let body = null;
      const contentType = normalizeContentType(header);
      if (method !== 'GET') {
        if (isString(data) || data instanceof ArrayBuffer) {
          body = data;
        } else {
          if (contentType === 'json') {
            try {
              body = JSON.stringify(data);
            } catch (error) {
              body = data.toString();
            }
          } else if (contentType === 'urlencoded') {
            const bodyArray = [];
            for (const key in data) {
              if (hasOwn$1(data, key)) {
                bodyArray.push(
                  encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
                );
              }
            }
            body = bodyArray.join('&');
          } else {
            body = data.toString();
          }
        }
      }
      const xhr = new XMLHttpRequest();
      const requestTask = new RequestTask(xhr);
      xhr.open(method, url2);
      for (const key in header) {
        if (hasOwn$1(header, key)) {
          xhr.setRequestHeader(key, header[key]);
        }
      }
      const timer = setTimeout(function () {
        xhr.onload = xhr.onabort = xhr.onerror = null;
        requestTask.abort();
        reject('timeout');
      }, timeout2);
      xhr.responseType = responseType;
      xhr.onload = function () {
        clearTimeout(timer);
        const statusCode = xhr.status;
        let res = responseType === 'text' ? xhr.responseText : xhr.response;
        if (responseType === 'text' && dataType2 === 'json') {
          try {
            res = JSON.parse(res);
          } catch (error) {}
        }
        resolve({
          data: res,
          statusCode,
          header: parseHeaders(xhr.getAllResponseHeaders()),
          cookies: [],
        });
      };
      xhr.onabort = function () {
        clearTimeout(timer);
        reject('abort');
      };
      xhr.onerror = function () {
        clearTimeout(timer);
        reject();
      };
      xhr.withCredentials = withCredentials;
      xhr.send(body);
      return requestTask;
    },
    RequestProtocol,
    RequestOptions,
  );
  function normalizeContentType(header) {
    const name = Object.keys(header).find(
      (name2) => name2.toLowerCase() === 'content-type',
    );
    if (!name) {
      return;
    }
    const contentType = header[name];
    if (contentType.indexOf('application/json') === 0) {
      return 'json';
    } else if (contentType.indexOf('application/x-www-form-urlencoded') === 0) {
      return 'urlencoded';
    }
    return 'string';
  }
  class RequestTask {
    constructor(xhr) {
      this._xhr = xhr;
    }
    abort() {
      if (this._xhr) {
        this._xhr.abort();
        delete this._xhr;
      }
    }
    onHeadersReceived(callback) {
      throw new Error('Method not implemented.');
    }
    offHeadersReceived(callback) {
      throw new Error('Method not implemented.');
    }
  }
  function parseHeaders(headers) {
    const headersObject = {};
    headers.split(LINEFEED).forEach((header) => {
      const find = header.match(/(\S+\s*):\s*(.*)/);
      if (!find || find.length !== 3) {
        return;
      }
      headersObject[find[1]] = find[2];
    });
    return headersObject;
  }
  const navigateBack = /* @__PURE__ */ defineAsyncApi(
    API_NAVIGATE_BACK,
    (args, { resolve, reject }) => {
      let canBack = true;
      if (
        invokeHook(ON_BACK_PRESS, {
          from: args.from || 'navigateBack',
        }) === true
      ) {
        canBack = false;
      }
      if (!canBack) {
        return reject(ON_BACK_PRESS);
      }
      getApp$1().$router.go(-args.delta);
      return resolve();
    },
    NavigateBackProtocol,
    NavigateBackOptions,
  );
  function navigate({ type, url: url2, tabBarText, events }, __id__) {
    const router = getApp$1().$router;
    const { path, query } = parseUrl(url2);
    return new Promise((resolve, reject) => {
      const state2 = createPageState(type, __id__);
      router[type === 'navigateTo' ? 'push' : 'replace']({
        path,
        query,
        state: state2,
        force: true,
      }).then((failure) => {
        if (isNavigationFailure(failure)) {
          return reject(failure.message);
        }
        if (type === 'switchTab') {
          router.currentRoute.value.meta.tabBarText = tabBarText;
        }
        if (type === 'navigateTo') {
          const meta = router.currentRoute.value.meta;
          if (!meta.eventChannel) {
            meta.eventChannel = new EventChannel(state2.__id__, events);
          }
          return resolve({
            eventChannel: meta.eventChannel,
          });
        }
        return resolve();
      });
    });
  }
  const navigateTo = /* @__PURE__ */ defineAsyncApi(
    API_NAVIGATE_TO,
    ({ url: url2, events }, { resolve, reject }) =>
      navigate({ type: API_NAVIGATE_TO, url: url2, events })
        .then(resolve)
        .catch(reject),
    NavigateToProtocol,
    NavigateToOptions,
  );
  function removeLastPage() {
    const page = getCurrentPage();
    if (!page) {
      return;
    }
    const $page = page.$page;
    removePage(normalizeRouteKey($page.path, $page.id));
  }
  const redirectTo = /* @__PURE__ */ defineAsyncApi(
    API_REDIRECT_TO,
    ({ url: url2 }, { resolve, reject }) => {
      return (
        // TODO exists 属性未实现
        removeLastPage(),
        navigate({ type: API_REDIRECT_TO, url: url2 })
          .then(resolve)
          .catch(reject)
      );
    },
    RedirectToProtocol,
    RedirectToOptions,
  );
  function removeAllPages() {
    const keys = getCurrentPagesMap().keys();
    for (const routeKey of keys) {
      removePage(routeKey);
    }
  }
  const reLaunch = /* @__PURE__ */ defineAsyncApi(
    API_RE_LAUNCH,
    ({ url: url2 }, { resolve, reject }) => {
      return (
        removeAllPages(),
        navigate({ type: API_RE_LAUNCH, url: url2 }).then(resolve).catch(reject)
      );
    },
    ReLaunchProtocol,
    ReLaunchOptions,
  );
  function removeNonTabBarPages() {
    const curTabBarPageVm = getCurrentPageVm();
    if (!curTabBarPageVm) {
      return;
    }
    const pagesMap = getCurrentPagesMap();
    const keys = pagesMap.keys();
    for (const routeKey of keys) {
      const page = pagesMap.get(routeKey);
      if (!page.$.__isTabBar) {
        removePage(routeKey);
      } else {
        page.$.__isActive = false;
      }
    }
    if (curTabBarPageVm.$.__isTabBar) {
      curTabBarPageVm.$.__isVisible = false;
      invokeHook(curTabBarPageVm, ON_HIDE);
    }
  }
  function isSamePage(url2, $page) {
    return url2 === $page.fullPath || (url2 === '/' && $page.meta.isEntry);
  }
  function getTabBarPageId(url2) {
    const pages = getCurrentPagesMap().values();
    for (const page of pages) {
      const $page = page.$page;
      if (isSamePage(url2, $page)) {
        page.$.__isActive = true;
        return $page.id;
      }
    }
  }
  const switchTab = /* @__PURE__ */ defineAsyncApi(
    API_SWITCH_TAB,
    // @ts-ignore
    ({ url: url2, tabBarText }, { resolve, reject }) => {
      return (
        removeNonTabBarPages(),
        navigate(
          { type: API_SWITCH_TAB, url: url2, tabBarText },
          getTabBarPageId(url2),
        )
          .then(resolve)
          .catch(reject)
      );
    },
    SwitchTabProtocol,
    SwitchTabOptions,
  );
  function onThemeChange(callback) {
    if (__uniConfig.darkmode) {
      UniServiceJSBridge$1.on(ON_THEME_CHANGE, callback);
    }
  }
  function offThemeChange(callback) {
    UniServiceJSBridge$1.off(ON_THEME_CHANGE, callback);
  }
  function parseTheme(pageStyle) {
    let parsedStyle = {};
    if (__uniConfig.darkmode) {
      parsedStyle = normalizeStyles(
        pageStyle,
        __uniConfig.themeConfig,
        getTheme(),
      );
    }
    return __uniConfig.darkmode ? parsedStyle : pageStyle;
  }
  function useTheme(pageStyle, onThemeChangeCallback) {
    const isReactived = vue.isReactive(pageStyle);
    const reactivePageStyle = isReactived
      ? vue.reactive(parseTheme(pageStyle))
      : parseTheme(pageStyle);
    if (__uniConfig.darkmode && isReactived) {
      vue.watch(pageStyle, (value) => {
        const _pageStyle = parseTheme(value);
        for (const key in _pageStyle) {
          reactivePageStyle[key] = _pageStyle[key];
        }
      });
    }
    onThemeChangeCallback && onThemeChange(onThemeChangeCallback);
    return reactivePageStyle;
  }
  const props$5 = {
    title: {
      type: String,
      default: '',
    },
    icon: {
      default: 'success',
      validator(value) {
        return SHOW_TOAST_ICON.indexOf(value) !== -1;
      },
    },
    image: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 1500,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
    },
  };
  const ToastIconClassName = 'uni-toast__icon';
  const ICONCOLOR = {
    light: '#fff',
    dark: 'rgba(255,255,255,0.9)',
  };
  const getIconColor = (theme) => ICONCOLOR[theme];
  const Toast = /* @__PURE__ */ vue.defineComponent({
    name: 'Toast',
    props: props$5,
    setup(props2) {
      initI18nShowToastMsgsOnce();
      initI18nShowLoadingMsgsOnce();
      const { Icon } = useToastIcon(props2);
      const visible = usePopup(props2, {});
      return () => {
        const { mask, duration, title, image: image2 } = props2;
        return vue.createVNode(
          vue.Transition,
          {
            name: 'uni-fade',
          },
          {
            default: () => [
              vue.withDirectives(
                vue.createVNode(
                  'uni-toast',
                  {
                    'data-duration': duration,
                  },
                  [
                    mask
                      ? vue.createVNode(
                          'div',
                          {
                            class: 'uni-mask',
                            style: 'background: transparent;',
                            onTouchmove: onEventPrevent,
                          },
                          null,
                          40,
                          ['onTouchmove'],
                        )
                      : '',
                    !image2 && !Icon.value
                      ? vue.createVNode(
                          'div',
                          {
                            class: 'uni-sample-toast',
                          },
                          [
                            vue.createVNode(
                              'p',
                              {
                                class: 'uni-simple-toast__text',
                              },
                              [title],
                            ),
                          ],
                        )
                      : vue.createVNode(
                          'div',
                          {
                            class: 'uni-toast',
                          },
                          [
                            image2
                              ? vue.createVNode(
                                  'img',
                                  {
                                    src: image2,
                                    class: ToastIconClassName,
                                  },
                                  null,
                                  10,
                                  ['src'],
                                )
                              : Icon.value,
                            vue.createVNode(
                              'p',
                              {
                                class: 'uni-toast__content',
                              },
                              [title],
                            ),
                          ],
                        ),
                  ],
                  8,
                  ['data-duration'],
                ),
                [[vue.vShow, visible.value]],
              ),
            ],
          },
        );
      };
    },
  });
  function useToastIcon(props2) {
    const iconColor = vue.ref(getIconColor(getTheme()));
    const _onThemeChange = ({ theme }) =>
      (iconColor.value = getIconColor(theme));
    vue.watchEffect(() => {
      if (props2.visible) {
        onThemeChange(_onThemeChange);
      } else {
        offThemeChange(_onThemeChange);
      }
    });
    const Icon = vue.computed(() => {
      switch (props2.icon) {
        case 'success':
          return vue.createVNode(
            createSvgIconVNode(
              ICON_PATH_SUCCESS_NO_CIRCLE,
              iconColor.value,
              38,
            ),
            {
              class: ToastIconClassName,
            },
          );
        case 'error':
          return vue.createVNode(
            createSvgIconVNode(ICON_PATH_WARN, iconColor.value, 38),
            {
              class: ToastIconClassName,
            },
          );
        case 'loading':
          return vue.createVNode(
            'i',
            {
              class: [ToastIconClassName, 'uni-loading'],
            },
            null,
            2,
          );
        default:
          return null;
      }
    });
    return {
      Icon,
    };
  }
  let showToastState;
  let showType = '';
  let timeoutId;
  const scope = /* @__PURE__ */ vue.effectScope();
  function watchVisible() {
    scope.run(() => {
      vue.watch(
        [() => showToastState.visible, () => showToastState.duration],
        ([visible, duration]) => {
          if (visible) {
            timeoutId && clearTimeout(timeoutId);
            if (showType === 'onShowLoading') return;
            timeoutId = setTimeout(() => {
              hidePopup('onHideToast');
            }, duration);
          } else {
            timeoutId && clearTimeout(timeoutId);
          }
        },
      );
    });
  }
  function createToast(args) {
    if (!showToastState) {
      showToastState = vue.reactive(extend(args, { visible: false }));
      vue.nextTick(() => {
        watchVisible();
        UniServiceJSBridge$1.on('onHidePopup', () => hidePopup('onHidePopup'));
        createRootApp(Toast, showToastState, () => {}).mount(
          ensureRoot('u-a-t'),
        );
      });
    } else {
      extend(showToastState, args);
    }
    setTimeout(() => {
      showToastState.visible = true;
    }, 10);
  }
  const showToast = /* @__PURE__ */ defineAsyncApi(
    API_SHOW_TOAST,
    (args, { resolve, reject }) => {
      createToast(args);
      showType = 'onShowToast';
      resolve();
    },
    ShowToastProtocol,
    ShowToastOptions,
  );
  const showLoadingDefaultState = {
    icon: 'loading',
    duration: 1e8,
    image: '',
  };
  const showLoading = /* @__PURE__ */ defineAsyncApi(
    API_SHOW_LOADING,
    (args, { resolve, reject }) => {
      extend(args, showLoadingDefaultState);
      createToast(args);
      showType = 'onShowLoading';
      resolve();
    },
    ShowLoadingProtocol,
    ShowLoadingOptions,
  );
  const hideLoading = /* @__PURE__ */ defineAsyncApi(
    API_HIDE_LOADING,
    (args, { resolve, reject }) => {
      hidePopup('onHideLoading');
      resolve();
    },
  );
  function hidePopup(type) {
    const { t: t2 } = useI18n();
    if (!showType) {
      return;
    }
    let warnMsg = '';
    if (type === 'onHideToast' && showType !== 'onShowToast') {
      warnMsg = t2('uni.showToast.unpaired');
    } else if (type === 'onHideLoading' && showType !== 'onShowLoading') {
      warnMsg = t2('uni.showLoading.unpaired');
    }
    if (warnMsg) {
      return console.warn(warnMsg);
    }
    showType = '';
    setTimeout(() => {
      showToastState.visible = false;
    }, 10);
  }
  function updateDocumentTitle(title) {
    {
      document.title = title;
    }
    UniServiceJSBridge$1.emit(ON_NAVIGATION_BAR_CHANGE, { titleText: title });
  }
  function useDocumentTitle(pageMeta) {
    function update() {
      updateDocumentTitle(pageMeta.navigationBar.titleText);
    }
    vue.watchEffect(update);
    vue.onActivated(update);
  }
  const UniViewJSBridge$1 = /* @__PURE__ */ extend(ViewJSBridge, {
    publishHandler(event, args, pageId) {
      UniServiceJSBridge$1.subscribeHandler(event, args, pageId);
    },
  });
  const UniServiceJSBridge$1 = /* @__PURE__ */ extend(ServiceJSBridge, {
    publishHandler(event, args, pageId) {
      UniViewJSBridge$1.subscribeHandler(event, args, pageId);
    },
  });
  const PageHead = /* @__PURE__ */ defineSystemComponent({
    name: 'PageHead',
    setup() {
      const headRef = vue.ref(null);
      const pageMeta = usePageMeta();
      const navigationBar = useTheme(pageMeta.navigationBar, () => {
        const _navigationBar = parseTheme(pageMeta.navigationBar);
        navigationBar.backgroundColor = _navigationBar.backgroundColor;
        navigationBar.titleColor = _navigationBar.titleColor;
      });
      const { clazz: clazz2, style } = usePageHead(navigationBar);
      return () => {
        const backButtonTsx = null;
        const leftButtonsTsx = [];
        const rightButtonsTsx = [];
        const type = navigationBar.type || 'default';
        const placeholderTsx =
          type !== 'transparent' &&
          type !== 'float' &&
          vue.createVNode(
            'div',
            {
              class: {
                'uni-placeholder': true,
                'uni-placeholder-titlePenetrate': navigationBar.titlePenetrate,
              },
            },
            null,
            2,
          );
        return vue.createVNode(
          'uni-page-head',
          {
            'uni-page-head-type': type,
          },
          [
            vue.createVNode(
              'div',
              {
                ref: headRef,
                class: clazz2.value,
                style: style.value,
              },
              [
                vue.createVNode(
                  'div',
                  {
                    class: 'uni-page-head-hd',
                  },
                  [backButtonTsx, ...leftButtonsTsx],
                ),
                createPageHeadBdTsx(navigationBar),
                vue.createVNode(
                  'div',
                  {
                    class: 'uni-page-head-ft',
                  },
                  [...rightButtonsTsx],
                ),
              ],
              6,
            ),
            placeholderTsx,
          ],
          8,
          ['uni-page-head-type'],
        );
      };
    },
  });
  function createPageHeadBdTsx(navigationBar, searchInput) {
    {
      return createPageHeadTitleTextTsx(navigationBar);
    }
  }
  function createPageHeadTitleTextTsx({
    type,
    loading,
    titleSize,
    titleText,
    titleImage,
  }) {
    return vue.createVNode(
      'div',
      {
        class: 'uni-page-head-bd',
      },
      [
        vue.createVNode(
          'div',
          {
            style: {
              fontSize: titleSize,
              opacity: type === 'transparent' ? 0 : 1,
            },
            class: 'uni-page-head__title',
          },
          [
            loading
              ? vue.createVNode(
                  'i',
                  {
                    class: 'uni-loading',
                  },
                  null,
                )
              : titleImage
              ? vue.createVNode(
                  'img',
                  {
                    src: titleImage,
                    class: 'uni-page-head__title_image',
                  },
                  null,
                  8,
                  ['src'],
                )
              : titleText,
          ],
          4,
        ),
      ],
    );
  }
  function usePageHead(navigationBar) {
    const clazz2 = vue.computed(() => {
      const { type, titlePenetrate, shadowColorType } = navigationBar;
      const clazz3 = {
        'uni-page-head': true,
        'uni-page-head-transparent': type === 'transparent',
        'uni-page-head-titlePenetrate': titlePenetrate === 'YES',
        'uni-page-head-shadow': !!shadowColorType,
      };
      if (shadowColorType) {
        clazz3[`uni-page-head-shadow-${shadowColorType}`] = true;
      }
      return clazz3;
    });
    const style = vue.computed(() => {
      const backgroundColor = navigationBar.backgroundColor;
      return {
        backgroundColor,
        color: navigationBar.titleColor,
        transitionDuration: navigationBar.duration,
        transitionTimingFunction: navigationBar.timingFunc,
      };
    });
    return {
      clazz: clazz2,
      style,
    };
  }
  const PageBody = defineSystemComponent({
    name: 'PageBody',
    setup(props2, ctx) {
      const pageRefresh = null;
      return () => {
        const pageRefreshTsx = false;
        return vue.createVNode(vue.Fragment, null, [
          pageRefreshTsx,
          vue.createVNode(
            'uni-page-wrapper',
            pageRefresh,
            [
              vue.createVNode('uni-page-body', null, [
                vue.renderSlot(ctx.slots, 'default'),
              ]),
            ],
            16,
          ),
        ]);
      };
    },
  });
  defineSystemComponent({
    name: 'Page',
    setup(_props, ctx) {
      const pageMeta = providePageMeta(getStateId());
      const navigationBar = pageMeta.navigationBar;
      useDocumentTitle(pageMeta);
      return () =>
        vue.createVNode(
          'uni-page',
          { 'data-page': pageMeta.route },
          navigationBar.style !== 'custom'
            ? [vue.createVNode(PageHead), createPageBodyVNode(ctx)]
            : [createPageBodyVNode(ctx)],
        );
    },
  });
  function createPageBodyVNode(ctx) {
    return (
      vue.openBlock(),
      vue.createBlock(
        PageBody,
        { key: 0 },
        {
          default: vue.withCtx(() => [vue.renderSlot(ctx.slots, 'page')]),
          _: 3,
        },
      )
    );
  }
  function isArray$6(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj)) return obj;
    if (typeof obj !== 'object' && typeof obj !== 'function') {
      return obj;
    }
    var o = isArray$6(obj) ? [] : {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== 'object' || typeof source !== 'object') return false;
    for (var prop in source) {
      if (!source.hasOwnProperty(prop)) continue;
      if (prop in target) {
        if (typeof target[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (typeof source[prop] !== 'object') {
            target[prop] = source[prop];
          } else {
            if (target[prop].concat && source[prop].concat) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = deepMerge(target[prop], source[prop]);
            }
          }
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
      value,
    );
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
  }
  function date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
      value,
    );
  }
  function number(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value,
    );
  }
  function carNo(value) {
    const xreg =
      /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg =
      /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    } else if (value.length === 8) {
      return xreg.test(value);
    } else {
      return false;
    }
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    let reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    let reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case 'undefined':
        return true;
      case 'string':
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
          return true;
        break;
      case 'boolean':
        if (!value) return true;
        break;
      case 'number':
        if (0 === value || isNaN(value)) return true;
        break;
      case 'object':
        if (null === value || value.length === 0) return true;
        for (var i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value == 'string') {
      try {
        var obj = JSON.parse(value);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === 'function') {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === '[object Array]';
    }
  }
  function object(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === 'function';
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split('?')[0];
    return new RegExp(/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)$/).test(
      newValue,
    );
  }
  function video(value) {
    const newValue = value.split('?')[0];
    return new RegExp(
      /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|3gp)$/,
    ).test(newValue);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === '[object RegExp]';
  }
  function string(value) {
    return typeof value === 'string';
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string,
  };
  class Request {
    // 设置全局默认配置
    setConfig(customConfig) {
      this.config = deepMerge(this.config, customConfig);
    }
    // 主要请求部分
    request(options = {}) {
      if (
        this.interceptor.request &&
        typeof this.interceptor.request === 'function'
      ) {
        let interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          return new Promise(() => {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise((resolve, reject) => {
        options.complete = (response) => {
          hideLoading();
          clearTimeout(this.config.timer);
          this.config.timer = null;
          if (this.config.originalData) {
            if (
              this.interceptor.response &&
              typeof this.interceptor.response === 'function'
            ) {
              let resInterceptors = this.interceptor.response(response);
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                reject(response);
              }
            } else {
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (
                this.interceptor.response &&
                typeof this.interceptor.response === 'function'
              ) {
                let resInterceptors = this.interceptor.response(response.data);
                if (resInterceptors !== false) {
                  resolve(resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                resolve(response.data);
              }
            } else {
              reject(response);
            }
          }
        };
        options.url = test.url(options.url)
          ? options.url
          : this.config.baseUrl +
            (options.url.indexOf('/') == 0 ? options.url : '/' + options.url);
        if (this.config.showLoading && !this.config.timer) {
          this.config.timer = setTimeout(() => {
            showLoading({
              title: this.config.loadingText,
              mask: this.config.loadingMask,
            });
            this.config.timer = null;
          }, this.config.loadingTime);
        }
        request(options);
      });
    }
    constructor() {
      this.config = {
        baseUrl: '',
        // 请求的根域名
        // 默认的请求头
        header: {},
        method: 'POST',
        // 设置为json，返回后uni.request会对数据进行一次JSON.parse
        dataType: 'json',
        // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
        responseType: 'text',
        showLoading: true,
        // 是否显示请求中的loading
        loadingText: '请求中...',
        loadingTime: 800,
        // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
        timer: null,
        // 定时器
        originalData: false,
        // 是否在拦截器中返回服务端的原始数据，见文档说明
        loadingMask: true,
        // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
      };
      this.interceptor = {
        // 请求前的拦截
        request: null,
        // 请求后的拦截
        response: null,
      };
      this.get = (url2, data = {}, header = {}) => {
        return this.request({
          method: 'GET',
          url: url2,
          header,
          data,
        });
      };
      this.post = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: 'POST',
          header,
          data,
        });
      };
      this.put = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: 'PUT',
          header,
          data,
        });
      };
      this.delete = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: 'DELETE',
          header,
          data,
        });
      };
    }
  }
  const http = new Request();
  function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
    let prefix = isPrefix ? '?' : '';
    let _result = [];
    if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1)
      arrayFormat = 'brackets';
    for (let key in data) {
      let value = data[key];
      if (['', void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case 'indices':
            for (let i = 0; i < value.length; i++) {
              _result.push(key + '[' + i + ']=' + value[i]);
            }
            break;
          case 'brackets':
            value.forEach((_value) => {
              _result.push(key + '[]=' + _value);
            });
            break;
          case 'repeat':
            value.forEach((_value) => {
              _result.push(key + '=' + _value);
            });
            break;
          case 'comma':
            let commaStr = '';
            value.forEach((_value) => {
              commaStr += (commaStr ? ',' : '') + _value;
            });
            _result.push(key + '=' + commaStr);
            break;
          default:
            value.forEach((_value) => {
              _result.push(key + '[]=' + _value);
            });
        }
      } else {
        _result.push(key + '=' + value);
      }
    }
    return _result.length ? prefix + _result.join('&') : '';
  }
  class Router {
    constructor() {
      this.config = {
        type: 'navigateTo',
        url: '',
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: 'pop-in',
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false,
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === '/' ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = '';
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return (url2 += '&' + query);
      } else {
        query = uni.$u.queryParams(params);
        return (url2 += query);
      }
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === 'string') {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = 'navigateTo';
      } else {
        mergeConfig = uni.$u.deepClone(options, this.config);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
      if (typeof uni.$u.routeIntercept === 'function') {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
      } = config2;
      if (config2.type == 'navigateTo' || config2.type == 'to') {
        navigateTo({
          url: url2,
          animationType,
          animationDuration,
        });
      }
      if (config2.type == 'redirectTo' || config2.type == 'redirect') {
        redirectTo({
          url: url2,
        });
      }
      if (config2.type == 'switchTab' || config2.type == 'tab') {
        switchTab({
          url: url2,
        });
      }
      if (config2.type == 'reLaunch' || config2.type == 'launch') {
        reLaunch({
          url: url2,
        });
      }
      if (config2.type == 'navigateBack' || config2.type == 'back') {
        navigateBack({
          delta,
        });
      }
    }
  }
  const route = new Router().route;
  if (!String.prototype.padStart) {
    String.prototype.padStart = function (maxLength, fillString = ' ') {
      if (Object.prototype.toString.call(fillString) !== '[object String]')
        throw new TypeError('fillString must be String');
      let str = this;
      if (str.length >= maxLength) return String(str);
      let fillLength = maxLength - str.length,
        times = Math.ceil(fillLength / fillString.length);
      while ((times >>= 1)) {
        fillString += fillString;
        if (times === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, fmt = 'yyyy-mm-dd') {
    if (!dateTime) dateTime = Number(/* @__PURE__ */ new Date());
    if (dateTime.toString().length == 10) dateTime *= 1e3;
    let date2 = new Date(dateTime);
    let ret;
    let opt = {
      'y+': date2.getFullYear().toString(),
      // 年
      'm+': (date2.getMonth() + 1).toString(),
      // 月
      'd+': date2.getDate().toString(),
      // 日
      'h+': date2.getHours().toString(),
      // 时
      'M+': date2.getMinutes().toString(),
      // 分
      's+': date2.getSeconds().toString(),
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'),
        );
      }
    }
    return fmt;
  }
  function timeFrom(dateTime = null, format = 'yyyy-mm-dd') {
    if (!dateTime) dateTime = Number(/* @__PURE__ */ new Date());
    if (dateTime.toString().length == 10) dateTime *= 1e3;
    let timestamp = +new Date(Number(dateTime));
    let timer = (Number(/* @__PURE__ */ new Date()) - timestamp) / 1e3;
    let tips = '';
    switch (true) {
      case timer < 300:
        tips = '刚刚';
        break;
      case timer >= 300 && timer < 3600:
        tips = parseInt(timer / 60) + '分钟前';
        break;
      case timer >= 3600 && timer < 86400:
        tips = parseInt(timer / 3600) + '小时前';
        break;
      case timer >= 86400 && timer < 2592e3:
        tips = parseInt(timer / 86400) + '天前';
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = parseInt(timer / (86400 * 30)) + '个月前';
          } else {
            tips = parseInt(timer / (86400 * 365)) + '年前';
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function colorGradient(
    startColor = 'rgb(0, 0, 0)',
    endColor = 'rgb(255, 255, 255)',
    step = 10,
  ) {
    let startRGB = hexToRgb(startColor, false);
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];
    let endRGB = hexToRgb(endColor, false);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];
    let sR = (endR - startR) / step;
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;
    let colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(
        'rgb(' +
          Math.round(sR * i + startR) +
          ',' +
          Math.round(sG * i + startG) +
          ',' +
          Math.round(sB * i + startB) +
          ')',
      );
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#';
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      let sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
      }
      if (!str) {
        return sColorChange;
      } else {
        return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
      }
    } else if (/^(rgb|RGB)/.test(sColor)) {
      let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
      return arr.map((val) => Number(val));
    } else {
      return sColor;
    }
  }
  function rgbToHex(rgb) {
    let _this = rgb;
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
      let strHex = '#';
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? '0' + hex : hex;
        if (hex === '0') {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      let aNum = _this.replace(/#/, '').split('');
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
        let numHex = '#';
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha = 0.3) {
    color2 = rgbToHex(color2);
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = color2.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = '#';
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      var sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
      }
      return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
    } else {
      return sColor;
    }
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba,
  };
  function guid(len = 32, firstU = true, radix = null) {
    let chars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        '',
      );
    let uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 3) | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return 'u' + uuid.join('');
    } else {
      return uuid.join('');
    }
  }
  let color = {
    primary: '#2979ff',
    primaryDark: '#2b85e4',
    primaryDisabled: '#a0cfff',
    primaryLight: '#ecf5ff',
    bgColor: '#f3f4f6',
    info: '#909399',
    infoDark: '#82848a',
    infoDisabled: '#c8c9cc',
    infoLight: '#f4f4f5',
    warning: '#ff9900',
    warningDark: '#f29100',
    warningDisabled: '#fcbd71',
    warningLight: '#fdf6ec',
    error: '#fa3534',
    errorDark: '#dd6161',
    errorDisabled: '#fab6b6',
    errorLight: '#fef0f0',
    success: '#19be6b',
    successDark: '#18b566',
    successDisabled: '#71d5a1',
    successLight: '#dbf1e1',
    mainColor: '#303133',
    contentColor: '#606266',
    tipsColor: '#909399',
    lightColor: '#c0c4cc',
    borderColor: '#e4e7ed',
  };
  function type2icon(type = 'success', fill = false) {
    if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1)
      type = 'success';
    let iconName = '';
    switch (type) {
      case 'primary':
        iconName = 'info-circle';
        break;
      case 'info':
        iconName = 'info-circle';
        break;
      case 'error':
        iconName = 'close-circle';
        break;
      case 'warning':
        iconName = 'error-circle';
        break;
      case 'success':
        iconName = 'checkmark-circle';
        break;
      default:
        iconName = 'checkmark-circle';
    }
    if (fill) iconName += '-fill';
    return iconName;
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  function addUnit(value = 'auto', unit = 'rpx') {
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      let gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    } else {
      return 0;
    }
  }
  function trim$1(str, pos = 'both') {
    if (pos == 'both') {
      return str.replace(/^\s+|\s+$/g, '');
    } else if (pos == 'left') {
      return str.replace(/^\s*/, '');
    } else if (pos == 'right') {
      return str.replace(/(\s*$)/g, '');
    } else if (pos == 'all') {
      return str.replace(/\s+/g, '');
    } else {
      return str;
    }
  }
  function toast(title, duration = 1500) {
    showToast({
      title,
      icon: 'none',
      duration,
    });
  }
  function getParent(name, keys) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        let data = {};
        if (Array.isArray(keys)) {
          keys.map((val) => {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          for (let i in keys) {
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return data;
      }
    }
    return {};
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function os() {
    return getSystemInfoSync().platform;
  }
  function sys() {
    return getSystemInfoSync();
  }
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) typeof func2 === 'function' && func2();
    } else {
      timeout = setTimeout(function () {
        typeof func2 === 'function' && func2();
      }, wait);
    }
  }
  let timeoutArr = [];
  let flagArr = [];
  function throttle(
    fn,
    time = 500,
    isImmediate = true,
    timeoutName = 'default',
  ) {
    if (!timeoutArr[timeoutName]) timeoutArr[timeoutName] = null;
    if (isImmediate) {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        if (typeof fn === 'function') fn();
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
        }, time);
      }
    } else {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
          if (typeof fn === 'function') fn();
        }, time);
      }
    }
  }
  function addStyle(customStyle, target = 'object') {
    if (
      test.empty(customStyle) ||
      (typeof customStyle === 'object' && target === 'object') ||
      (target === 'string' && typeof customStyle === 'string')
    ) {
      return customStyle;
    }
    if (target === 'object') {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(';');
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(':');
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = '';
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, '-$1').toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  let version = '1.10.1';
  const config = {
    v: version,
    version,
    // 主题名称
    type: ['primary', 'success', 'info', 'error', 'warning'],
  };
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965,
  };
  function wranning(str) {}
  const $u = {
    queryParams,
    route,
    timeFormat,
    date: timeFormat,
    // 另名date
    timeFrom,
    colorGradient: colorGradient$1.colorGradient,
    colorToRgba: colorGradient$1.colorToRgba,
    guid,
    color,
    sys,
    os,
    type2icon,
    randomArray,
    wranning,
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    test,
    random,
    deepClone,
    deepMerge,
    getParent,
    $parent,
    addUnit,
    trim: trim$1,
    type: ['primary', 'success', 'error', 'warning', 'info'],
    http,
    toast,
    config,
    // uView配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    addStyle,
  };
  uni.$u = $u;
  var isArray$5 = Array.isArray;
  var isArray_1 = isArray$5;
  var freeGlobal$1 =
    typeof commonjsGlobal == 'object' &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf =
    typeof self == 'object' && self && self.Object === Object && self;
  var root$8 = freeGlobal || freeSelf || Function('return this')();
  var _root = root$8;
  var root$7 = _root;
  var Symbol$6 = root$7.Symbol;
  var _Symbol = Symbol$6;
  var Symbol$5 = _Symbol;
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$6.toString;
  var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$5.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$5 = Object.prototype;
  var nativeObjectToString = objectProto$5.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$4 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
  var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
  function baseGetTag$4(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString(value);
  }
  var _baseGetTag = baseGetTag$4;
  function isObjectLike$3(value) {
    return value != null && typeof value == 'object';
  }
  var isObjectLike_1 = isObjectLike$3;
  var baseGetTag$3 = _baseGetTag,
    isObjectLike$2 = isObjectLike_1;
  var symbolTag = '[object Symbol]';
  function isSymbol$3(value) {
    return (
      typeof value == 'symbol' ||
      (isObjectLike$2(value) && baseGetTag$3(value) == symbolTag)
    );
  }
  var isSymbol_1 = isSymbol$3;
  var isArray$4 = isArray_1,
    isSymbol$2 = isSymbol_1;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
  function isKey$1(value, object2) {
    if (isArray$4(value)) {
      return false;
    }
    var type = typeof value;
    if (
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean' ||
      value == null ||
      isSymbol$2(value)
    ) {
      return true;
    }
    return (
      reIsPlainProp.test(value) ||
      !reIsDeepProp.test(value) ||
      (object2 != null && value in Object(object2))
    );
  }
  var _isKey = isKey$1;
  var baseGetTag$2 = _baseGetTag,
    isObject$3 = isObject_1;
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
  function isFunction$1(value) {
    if (!isObject$3(value)) {
      return false;
    }
    var tag = baseGetTag$2(value);
    return (
      tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
    );
  }
  var isFunction_1 = isFunction$1;
  var root$6 = _root;
  var coreJsData$1 = root$6['__core-js_shared__'];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '',
    );
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();
  function isMasked$1(func2) {
    return !!maskSrcKey && maskSrcKey in func2;
  }
  var _isMasked = isMasked$1;
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource$2(func2) {
    if (func2 != null) {
      try {
        return funcToString$1.call(func2);
      } catch (e) {}
      try {
        return func2 + '';
      } catch (e) {}
    }
    return '';
  }
  var _toSource = toSource$2;
  var isFunction = isFunction_1,
    isMasked = _isMasked,
    isObject$2 = isObject_1,
    toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype,
    objectProto$4 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  var reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty$4)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );
  function baseIsNative$1(value) {
    if (!isObject$2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object2, key) {
    return object2 == null ? void 0 : object2[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative,
    getValue = _getValue;
  function getNative$7(object2, key) {
    var value = getValue(object2, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$7;
  var getNative$6 = _getNative;
  var nativeCreate$4 = getNative$6(Object, 'create');
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$3.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1
      ? data[key] !== void 0
      : hasOwnProperty$2.call(data, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;
  function Hash$1(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype['delete'] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$2(value, other) {
    return value === other || (value !== value && other !== other);
  }
  var eq_1 = eq$2;
  var eq$1 = eq_1;
  function assocIndexOf$4(array2, key) {
    var length = array2.length;
    while (length--) {
      if (eq$1(array2[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key) {
    var data = this.__data__,
      index = assocIndexOf$3(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data = this.__data__,
      index = assocIndexOf$2(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;
  function ListCache$1(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$1.prototype.clear = listCacheClear;
  ListCache$1.prototype['delete'] = listCacheDelete;
  ListCache$1.prototype.get = listCacheGet;
  ListCache$1.prototype.has = listCacheHas;
  ListCache$1.prototype.set = listCacheSet;
  var _ListCache = ListCache$1;
  var getNative$5 = _getNative,
    root$5 = _root;
  var Map$3 = getNative$5(root$5, 'Map');
  var _Map = Map$3;
  var Hash = _Hash,
    ListCache = _ListCache,
    Map$2 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$2 || ListCache)(),
      string: new Hash(),
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = typeof value;
    return type == 'string' ||
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean'
      ? value !== '__proto__'
      : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
      size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;
  function MapCache$1(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$1.prototype.clear = mapCacheClear;
  MapCache$1.prototype['delete'] = mapCacheDelete;
  MapCache$1.prototype.get = mapCacheGet;
  MapCache$1.prototype.has = mapCacheHas;
  MapCache$1.prototype.set = mapCacheSet;
  var _MapCache = MapCache$1;
  var MapCache = _MapCache;
  var FUNC_ERROR_TEXT = 'Expected a function';
  function memoize$1(func2, resolver) {
    if (
      typeof func2 != 'function' ||
      (resolver != null && typeof resolver != 'function')
    ) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func2.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache)();
    return memoized;
  }
  memoize$1.Cache = MapCache;
  var memoize_1 = memoize$1;
  var memoize = memoize_1;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped$1(func2) {
    var result = memoize(func2, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var _memoizeCapped = memoizeCapped$1;
  var memoizeCapped = _memoizeCapped;
  var rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath$1 = memoizeCapped(function (string2) {
    var result = [];
    if (string2.charCodeAt(0) === 46) {
      result.push('');
    }
    string2.replace(rePropName, function (match, number2, quote, subString) {
      result.push(
        quote ? subString.replace(reEscapeChar, '$1') : number2 || match,
      );
    });
    return result;
  });
  var _stringToPath = stringToPath$1;
  function arrayMap$1(array2, iteratee) {
    var index = -1,
      length = array2 == null ? 0 : array2.length,
      result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array2[index], index, array2);
    }
    return result;
  }
  var _arrayMap = arrayMap$1;
  var Symbol$3 = _Symbol,
    arrayMap = _arrayMap,
    isArray$3 = isArray_1,
    isSymbol$1 = isSymbol_1;
  var INFINITY$1 = 1 / 0;
  var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
  function baseToString$1(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$3(value)) {
      return arrayMap(value, baseToString$1) + '';
    }
    if (isSymbol$1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }
  var _baseToString = baseToString$1;
  var baseToString = _baseToString;
  function toString$1(value) {
    return value == null ? '' : baseToString(value);
  }
  var toString_1 = toString$1;
  var isArray$2 = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;
  function castPath$4(value, object2) {
    if (isArray$2(value)) {
      return value;
    }
    return isKey(value, object2) ? [value] : stringToPath(toString(value));
  }
  var _castPath = castPath$4;
  var isSymbol = isSymbol_1;
  var INFINITY = 1 / 0;
  function toKey$3(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }
  var _toKey = toKey$3;
  var castPath$3 = _castPath,
    toKey$2 = _toKey;
  function baseGet$1(object2, path) {
    path = castPath$3(path, object2);
    var index = 0,
      length = path.length;
    while (object2 != null && index < length) {
      object2 = object2[toKey$2(path[index++])];
    }
    return index && index == length ? object2 : void 0;
  }
  var _baseGet = baseGet$1;
  var getNative$4 = _getNative;
  var defineProperty$2 = (function () {
    try {
      var func2 = getNative$4(Object, 'defineProperty');
      func2({}, '', {});
      return func2;
    } catch (e) {}
  })();
  var _defineProperty = defineProperty$2;
  var defineProperty$1 = _defineProperty;
  function baseAssignValue$1(object2, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object2, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      });
    } else {
      object2[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$1;
  var baseAssignValue = _baseAssignValue,
    eq = eq_1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function assignValue$1(object2, key, value) {
    var objValue = object2[key];
    if (
      !(hasOwnProperty$1.call(object2, key) && eq(objValue, value)) ||
      (value === void 0 && !(key in object2))
    ) {
      baseAssignValue(object2, key, value);
    }
  }
  var _assignValue = assignValue$1;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$2(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
  }
  var _isIndex = isIndex$2;
  var assignValue = _assignValue,
    castPath$2 = _castPath,
    isIndex$1 = _isIndex,
    isObject$1 = isObject_1,
    toKey$1 = _toKey;
  function baseSet$1(object2, path, value, customizer) {
    if (!isObject$1(object2)) {
      return object2;
    }
    path = castPath$2(path, object2);
    var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object2;
    while (nested != null && ++index < length) {
      var key = toKey$1(path[index]),
        newValue = value;
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object2;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject$1(objValue)
            ? objValue
            : isIndex$1(path[index + 1])
            ? []
            : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object2;
  }
  var _baseSet = baseSet$1;
  var baseGet = _baseGet,
    baseSet = _baseSet,
    castPath$1 = _castPath;
  function basePickBy$1(object2, paths, predicate) {
    var index = -1,
      length = paths.length,
      result = {};
    while (++index < length) {
      var path = paths[index],
        value = baseGet(object2, path);
      if (predicate(value, path)) {
        baseSet(result, castPath$1(path, object2), value);
      }
    }
    return result;
  }
  var _basePickBy = basePickBy$1;
  function baseHasIn$1(object2, key) {
    return object2 != null && key in Object(object2);
  }
  var _baseHasIn = baseHasIn$1;
  var baseGetTag$1 = _baseGetTag,
    isObjectLike$1 = isObjectLike_1;
  var argsTag = '[object Arguments]';
  function baseIsArguments$1(value) {
    return isObjectLike$1(value) && baseGetTag$1(value) == argsTag;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments,
    isObjectLike = isObjectLike_1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var isArguments$2 = baseIsArguments(
    (function () {
      return arguments;
    })(),
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike(value) &&
          hasOwnProperty.call(value, 'callee') &&
          !propertyIsEnumerable.call(value, 'callee')
        );
      };
  var isArguments_1 = isArguments$2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength$1(value) {
    return (
      typeof value == 'number' &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER
    );
  }
  var isLength_1 = isLength$1;
  var castPath = _castPath,
    isArguments$1 = isArguments_1,
    isArray$1 = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey = _toKey;
  function hasPath$1(object2, path, hasFunc) {
    path = castPath(path, object2);
    var index = -1,
      length = path.length,
      result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object2 != null && hasFunc(object2, key))) {
        break;
      }
      object2 = object2[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object2 == null ? 0 : object2.length;
    return (
      !!length &&
      isLength(length) &&
      isIndex(key, length) &&
      (isArray$1(object2) || isArguments$1(object2))
    );
  }
  var _hasPath = hasPath$1;
  var baseHasIn = _baseHasIn,
    hasPath = _hasPath;
  function hasIn$1(object2, path) {
    return object2 != null && hasPath(object2, path, baseHasIn);
  }
  var hasIn_1 = hasIn$1;
  var basePickBy = _basePickBy,
    hasIn = hasIn_1;
  function basePick$1(object2, paths) {
    return basePickBy(object2, paths, function (value, path) {
      return hasIn(object2, path);
    });
  }
  var _basePick = basePick$1;
  function arrayPush$1(array2, values) {
    var index = -1,
      length = values.length,
      offset = array2.length;
    while (++index < length) {
      array2[offset + index] = values[index];
    }
    return array2;
  }
  var _arrayPush = arrayPush$1;
  var Symbol$2 = _Symbol,
    isArguments = isArguments_1,
    isArray = isArray_1;
  var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
  function isFlattenable$1(value) {
    return (
      isArray(value) ||
      isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol])
    );
  }
  var _isFlattenable = isFlattenable$1;
  var arrayPush = _arrayPush,
    isFlattenable = _isFlattenable;
  function baseFlatten$1(array2, depth, predicate, isStrict, result) {
    var index = -1,
      length = array2.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array2[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten$1(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var _baseFlatten = baseFlatten$1;
  var baseFlatten = _baseFlatten;
  function flatten$1(array2) {
    var length = array2 == null ? 0 : array2.length;
    return length ? baseFlatten(array2, 1) : [];
  }
  var flatten_1 = flatten$1;
  function apply$1(func2, thisArg, args) {
    switch (args.length) {
      case 0:
        return func2.call(thisArg);
      case 1:
        return func2.call(thisArg, args[0]);
      case 2:
        return func2.call(thisArg, args[0], args[1]);
      case 3:
        return func2.call(thisArg, args[0], args[1], args[2]);
    }
    return func2.apply(thisArg, args);
  }
  var _apply = apply$1;
  var apply = _apply;
  var nativeMax = Math.max;
  function overRest$1(func2, start, transform) {
    start = nativeMax(start === void 0 ? func2.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array2 = Array(length);
      while (++index < length) {
        array2[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array2);
      return apply(func2, this, otherArgs);
    };
  }
  var _overRest = overRest$1;
  function constant$1(value) {
    return function () {
      return value;
    };
  }
  var constant_1 = constant$1;
  function identity$1(value) {
    return value;
  }
  var identity_1 = identity$1;
  var constant = constant_1,
    defineProperty = _defineProperty,
    identity = identity_1;
  var baseSetToString$1 = !defineProperty
    ? identity
    : function (func2, string2) {
        return defineProperty(func2, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string2),
          writable: true,
        });
      };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800,
    HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func2) {
    var count = 0,
      lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func2.apply(void 0, arguments);
    };
  }
  var _shortOut = shortOut$1;
  var baseSetToString = _baseSetToString,
    shortOut = _shortOut;
  var setToString$1 = shortOut(baseSetToString);
  var _setToString = setToString$1;
  var flatten = flatten_1,
    overRest = _overRest,
    setToString = _setToString;
  function flatRest$1(func2) {
    return setToString(overRest(func2, void 0, flatten), func2 + '');
  }
  var _flatRest = flatRest$1;
  var basePick = _basePick,
    flatRest = _flatRest;
  flatRest(function (object2, paths) {
    return object2 == null ? {} : basePick(object2, paths);
  });
  var isBuffer = { exports: {} };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  isBuffer.exports;
  (function (module2, exports2) {
    var root2 = _root,
      stubFalse2 = stubFalse_1;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module2.exports = isBuffer2;
  })(isBuffer, isBuffer.exports);
  isBuffer.exports;
  var _nodeUtil = { exports: {} };
  _nodeUtil.exports;
  (function (module2, exports2) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = (function () {
      try {
        var types =
          freeModule && freeModule.require && freeModule.require('util').types;
        if (types) {
          return types;
        }
        return (
          freeProcess && freeProcess.binding && freeProcess.binding('util')
        );
      } catch (e) {}
    })();
    module2.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtil.exports);
  var _nodeUtilExports = _nodeUtil.exports;
  var nodeUtil$2 = _nodeUtilExports;
  nodeUtil$2 && nodeUtil$2.isTypedArray;
  var _cloneBuffer = { exports: {} };
  _cloneBuffer.exports;
  (function (module2, exports2) {
    var root2 = _root;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
        result = allocUnsafe
          ? allocUnsafe(length)
          : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer;
  })(_cloneBuffer, _cloneBuffer.exports);
  _cloneBuffer.exports;
  var getNative$3 = _getNative,
    root$4 = _root;
  var DataView$1 = getNative$3(root$4, 'DataView');
  var _DataView = DataView$1;
  var getNative$2 = _getNative,
    root$3 = _root;
  var Promise$2 = getNative$2(root$3, 'Promise');
  var _Promise = Promise$2;
  var getNative$1 = _getNative,
    root$2 = _root;
  var Set$1 = getNative$1(root$2, 'Set');
  var _Set = Set$1;
  var getNative = _getNative,
    root$1 = _root;
  var WeakMap$1 = getNative(root$1, 'WeakMap');
  var _WeakMap = WeakMap$1;
  var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;
  var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
  var dataViewTag = '[object DataView]';
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
  var getTag = baseGetTag;
  if (
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag(new Map$1()) != mapTag) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag(new Set()) != setTag) ||
    (WeakMap && getTag(new WeakMap()) != weakMapTag)
  ) {
    getTag = function (value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : void 0,
        ctorString = Ctor ? toSource(Ctor) : '';
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  var root = _root;
  root.Uint8Array;
  var Symbol$1 = _Symbol;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
  symbolProto ? symbolProto.valueOf : void 0;
  var nodeUtil$1 = _nodeUtilExports;
  nodeUtil$1 && nodeUtil$1.isMap;
  var nodeUtil = _nodeUtilExports;
  nodeUtil && nodeUtil.isSet;
  var classnames = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function (module2) {
    (function () {
      var hasOwn2 = {}.hasOwnProperty;
      function classNames() {
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (typeof arg !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (
          arg.toString !== Object.prototype.toString &&
          !arg.toString.toString().includes('[native code]')
        ) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn2.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames);
  const consoleTag = '[vue3-aipage-widget]';
  var Framework;
  (function (Framework2) {
    Framework2['react'] = 'react';
    Framework2['vue2'] = 'vue2';
    Framework2['vue3'] = 'vue3';
    Framework2['jquery'] = 'jquery';
  })(Framework || (Framework = {}));
  function isEditorPlugin(EditorPlugin) {
    let _isEditorPlugin = false;
    if (!EditorPlugin || !isObject(EditorPlugin)) {
      return false;
    }
    const _editorPluginObj = EditorPlugin;
    if (!_editorPluginObj.name) {
      console.error(
        `${consoleTag}自定义插件注册失败，插件名称（name）不能为空。`,
      );
    } else if (!_editorPluginObj.id) {
      console.error(`${consoleTag}自定义插件注册失败，插件ID（id）不能为空。`);
    } else if (!_editorPluginObj.componentId) {
      console.error(
        `${consoleTag}自定义插件注册失败，渲染器ID（componentId）不能为空。`,
      );
    } else if (!_editorPluginObj.description) {
      console.error(
        `${consoleTag}自定义插件注册失败，插件描述（description）不能为空。`,
      );
    } else if (
      !_editorPluginObj.tags ||
      (Array.isArray(_editorPluginObj.tags) &&
        _editorPluginObj.tags.length === 0)
    ) {
      console.error(
        `${consoleTag}自定义插件注册失败，插件分类（tags）不能为空。`,
      );
    } else {
      if (!_editorPluginObj.pluginIcon) {
        _editorPluginObj.pluginIcon = 'cards-plugin';
      }
      if (!_editorPluginObj.type) {
        _editorPluginObj.type = 'element';
      }
      _isEditorPlugin = true;
    }
    return _isEditorPlugin;
  }
  function isObject(curObj) {
    let isObject2 = false;
    if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
      isObject2 = true;
    }
    return isObject2;
  }
  function transformComponentId(str) {
    return `-${str}`.replace(/(-[A-Za-z0-9])/g, (m) => {
      return m.toUpperCase().replace('-', '');
    });
  }
  function registerPlugin(newEditorPlugin) {
    if (isEditorPlugin(newEditorPlugin)) {
      if (window && window.postMessage) {
        const newComponentId = AddCustomPlugin(
          newEditorPlugin.id,
          newEditorPlugin,
        );
        if (newComponentId) {
          console.info(
            `${consoleTag}触发注册自定义插件(${newEditorPlugin.name})事件:`,
            newEditorPlugin,
          );
          window.postMessage(
            {
              type: 'aipage-editor-register-plugin-event',
              eventMsg: `${consoleTag}注册一个自定义aipage-editor插件`,
              editorPluginName: newEditorPlugin.name,
              customEditorPlugin: newEditorPlugin,
            },
            '*',
          );
        }
      }
    }
    return newEditorPlugin;
  }
  function AddCustomPlugin(id2, plugin) {
    if (window && !window.AIPageEditorCustomPlugins) {
      window.AIPageEditorCustomPlugins = {};
    }
    const componentId = transformComponentId(id2);
    if (!window.AIPageEditorCustomPlugins[componentId]) {
      window.AIPageEditorCustomPlugins[componentId] = plugin;
      return componentId;
    } else {
      console.error(
        `${consoleTag}注册自定义插件失败，已存在同名插件(${id2})。`,
      );
    }
    return null;
  }
  (_a = window.matchMedia) == null
    ? void 0
    : _a.call(window, '(max-width: 768px)').matches;
  const InfoCardPlugin = {
    name: '物流节点',
    description: 'uview版TimeLine组件示例',
    componentId: 'uni-time-line',
    id: 'uni-time-line',
    tags: ['uview组件'],
    // 组件分类
    pluginIcon: 'cards-plugin',
    order: 1,
    // 展示顺序（从小到大展示）
    type: 'element',
    // 渲染器类型
    device: ['mobile', 'app'],
    // 设置类型，目前支持3种类型: pc、mobile、app
    docLink: '',
    demoProperties: {
      componentId: 'uni-time-line',
      type: 'element',
      componentProperties: {
        data: {
          timeLine: [
            {
              status: '运输中',
              desc: '【深圳市】日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天。',
              time: '2019-05-10 12:12',
            },
            {
              status: '运输中',
              desc: '【深圳市】日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天。',
              time: '2019-05-08 12:12',
            },
            {
              status: '待取件',
              desc: '[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。',
              time: '2019-05-12 12:12',
            },
          ],
        },
        style: {},
      },
    },
    panelControls: {
      type: 'tabs',
      tabs: [
        {
          title: '属性',
          controls: [
            {
              type: 'collapse',
              title: '数据',
              controls: [
                {
                  name: 'data.timeLine',
                  type: 'setting-list',
                  label: '物流节点',
                  mode: 'normal',
                  fullSize: true,
                  setting: [
                    {
                      type: 'input-text',
                      name: 'status',
                      label: '状态',
                    },
                    {
                      type: 'textarea',
                      name: 'desc',
                      label: '详细',
                    },
                    {
                      type: 'input-datetime',
                      name: 'time',
                      label: '时间',
                      format: 'YYYY-MM-DD HH:mm',
                    },
                  ],
                  enableDataBinding: true,
                  // 有这个属性则组件会自动开启动态数据绑定
                },
              ],
            },
          ],
        },
        {
          title: '外观',
          controls: [
            {
              title: '布局',
              type: 'collapse',
              controls: [
                {
                  type: 'button-icon-group',
                  name: 'style.display',
                  label: '显示',
                  value: 'block',
                  options: [
                    {
                      label: '块级(block)',
                      icon: 'block',
                      value: 'block',
                    },
                    {
                      label: '行内区块(inline-block)',
                      icon: 'inlineBlock',
                      value: 'inline-block',
                    },
                    {
                      label: '行内元素(inline)',
                      icon: 'inline',
                      value: 'inline',
                    },
                  ],
                },
                {
                  name: 'style',
                  type: 'whSet',
                  label: '宽度',
                  options: [
                    {
                      label: '',
                      value: 'width',
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapse',
              title: '边距',
              controls: {
                name: 'style.box',
                type: 'boxModel',
                label: false,
              },
            },
          ],
        },
      ],
    },
  };
  registerPlugin(InfoCardPlugin);
  return InfoCardPlugin;
});
