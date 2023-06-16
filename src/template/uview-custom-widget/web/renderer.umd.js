var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value);
  return value;
};
(function (global2, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(require('react'), require('vue'))
    : typeof define === 'function' && define.amd
    ? define(['react', 'vue'], factory)
    : ((global2 =
        typeof globalThis !== 'undefined' ? globalThis : global2 || self),
      factory(global2.react, global2.vue));
})(this, function (React, vue) {
  var _a;
  ('use strict');
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }
  var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
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
  function isObject$7(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  var isObject_1 = isObject$7;
  var isArray$8 = Array.isArray;
  var isArray_1 = isArray$8;
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
  var objectProto$c = Object.prototype;
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$c.toString;
  var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
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
  var objectProto$b = Object.prototype;
  var nativeObjectToString = objectProto$b.toString;
  function objectToString$2(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$2;
  var Symbol$4 = _Symbol,
    getRawTag = _getRawTag,
    objectToString$1 = _objectToString;
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
  var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
  function baseGetTag$6(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString$1(value);
  }
  var _baseGetTag = baseGetTag$6;
  function isObjectLike$7(value) {
    return value != null && typeof value == 'object';
  }
  var isObjectLike_1 = isObjectLike$7;
  var baseGetTag$5 = _baseGetTag,
    isObjectLike$6 = isObjectLike_1;
  var symbolTag$2 = '[object Symbol]';
  function isSymbol$3(value) {
    return (
      typeof value == 'symbol' ||
      (isObjectLike$6(value) && baseGetTag$5(value) == symbolTag$2)
    );
  }
  var isSymbol_1 = isSymbol$3;
  var isArray$7 = isArray_1,
    isSymbol$2 = isSymbol_1;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
  function isKey$1(value, object) {
    if (isArray$7(value)) {
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
      (object != null && value in Object(object))
    );
  }
  var _isKey = isKey$1;
  var baseGetTag$4 = _baseGetTag,
    isObject$6 = isObject_1;
  var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
  function isFunction$3(value) {
    if (!isObject$6(value)) {
      return false;
    }
    var tag = baseGetTag$4(value);
    return (
      tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag
    );
  }
  var isFunction_1 = isFunction$3;
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
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }
  var _toSource = toSource$2;
  var isFunction$2 = isFunction_1,
    isMasked = _isMasked,
    isObject$5 = isObject_1,
    toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype,
    objectProto$a = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
  var reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty$9)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );
  function baseIsNative$1(value) {
    if (!isObject$5(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative,
    getValue = _getValue;
  function getNative$7(object, key) {
    var value = getValue(object, key);
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
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$8 = Object.prototype;
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1
      ? data[key] !== void 0
      : hasOwnProperty$7.call(data, key);
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
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$1(array[length][0], key)) {
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
  function ListCache$4(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype['delete'] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;
  var getNative$5 = _getNative,
    root$5 = _root;
  var Map$4 = getNative$5(root$5, 'Map');
  var _Map = Map$4;
  var Hash = _Hash,
    ListCache$3 = _ListCache,
    Map$3 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$3 || ListCache$3)(),
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
  function MapCache$2(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$2.prototype.clear = mapCacheClear;
  MapCache$2.prototype['delete'] = mapCacheDelete;
  MapCache$2.prototype.get = mapCacheGet;
  MapCache$2.prototype.has = mapCacheHas;
  MapCache$2.prototype.set = mapCacheSet;
  var _MapCache = MapCache$2;
  var MapCache$1 = _MapCache;
  var FUNC_ERROR_TEXT = 'Expected a function';
  function memoize$1(func, resolver) {
    if (
      typeof func != 'function' ||
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
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$1)();
    return memoized;
  }
  memoize$1.Cache = MapCache$1;
  var memoize_1 = memoize$1;
  var memoize = memoize_1;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped$1(func) {
    var result = memoize(func, function (key) {
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
  var stringToPath$1 = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push('');
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(
        quote ? subString.replace(reEscapeChar, '$1') : number || match,
      );
    });
    return result;
  });
  var _stringToPath = stringToPath$1;
  function arrayMap$1(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var _arrayMap = arrayMap$1;
  var Symbol$3 = _Symbol,
    arrayMap = _arrayMap,
    isArray$6 = isArray_1,
    isSymbol$1 = isSymbol_1;
  var INFINITY$1 = 1 / 0;
  var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
  function baseToString$1(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$6(value)) {
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
  var isArray$5 = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;
  function castPath$4(value, object) {
    if (isArray$5(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
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
  function baseGet$1(object, path) {
    path = castPath$3(path, object);
    var index = 0,
      length = path.length;
    while (object != null && index < length) {
      object = object[toKey$2(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var _baseGet = baseGet$1;
  var getNative$4 = _getNative;
  var defineProperty$2 = (function () {
    try {
      var func = getNative$4(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();
  var _defineProperty = defineProperty$2;
  var defineProperty$1 = _defineProperty;
  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      });
    } else {
      object[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$2;
  var baseAssignValue$1 = _baseAssignValue,
    eq = eq_1;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function assignValue$3(object, key, value) {
    var objValue = object[key];
    if (
      !(hasOwnProperty$6.call(object, key) && eq(objValue, value)) ||
      (value === void 0 && !(key in object))
    ) {
      baseAssignValue$1(object, key, value);
    }
  }
  var _assignValue = assignValue$3;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$3(value, length) {
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
  var _isIndex = isIndex$3;
  var assignValue$2 = _assignValue,
    castPath$2 = _castPath,
    isIndex$2 = _isIndex,
    isObject$4 = isObject_1,
    toKey$1 = _toKey;
  function baseSet$1(object, path, value, customizer) {
    if (!isObject$4(object)) {
      return object;
    }
    path = castPath$2(path, object);
    var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;
    while (nested != null && ++index < length) {
      var key = toKey$1(path[index]),
        newValue = value;
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject$4(objValue)
            ? objValue
            : isIndex$2(path[index + 1])
            ? []
            : {};
        }
      }
      assignValue$2(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  var _baseSet = baseSet$1;
  var baseGet = _baseGet,
    baseSet = _baseSet,
    castPath$1 = _castPath;
  function basePickBy$1(object, paths, predicate) {
    var index = -1,
      length = paths.length,
      result = {};
    while (++index < length) {
      var path = paths[index],
        value = baseGet(object, path);
      if (predicate(value, path)) {
        baseSet(result, castPath$1(path, object), value);
      }
    }
    return result;
  }
  var _basePickBy = basePickBy$1;
  function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
  }
  var _baseHasIn = baseHasIn$1;
  var baseGetTag$3 = _baseGetTag,
    isObjectLike$5 = isObjectLike_1;
  var argsTag$2 = '[object Arguments]';
  function baseIsArguments$1(value) {
    return isObjectLike$5(value) && baseGetTag$3(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments,
    isObjectLike$4 = isObjectLike_1;
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
  var isArguments$3 = baseIsArguments(
    (function () {
      return arguments;
    })(),
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike$4(value) &&
          hasOwnProperty$5.call(value, 'callee') &&
          !propertyIsEnumerable$1.call(value, 'callee')
        );
      };
  var isArguments_1 = isArguments$3;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength$3(value) {
    return (
      typeof value == 'number' &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER
    );
  }
  var isLength_1 = isLength$3;
  var castPath = _castPath,
    isArguments$2 = isArguments_1,
    isArray$4 = isArray_1,
    isIndex$1 = _isIndex,
    isLength$2 = isLength_1,
    toKey = _toKey;
  function hasPath$1(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1,
      length = path.length,
      result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return (
      !!length &&
      isLength$2(length) &&
      isIndex$1(key, length) &&
      (isArray$4(object) || isArguments$2(object))
    );
  }
  var _hasPath = hasPath$1;
  var baseHasIn = _baseHasIn,
    hasPath = _hasPath;
  function hasIn$1(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var hasIn_1 = hasIn$1;
  var basePickBy = _basePickBy,
    hasIn = hasIn_1;
  function basePick$1(object, paths) {
    return basePickBy(object, paths, function (value, path) {
      return hasIn(object, path);
    });
  }
  var _basePick = basePick$1;
  function arrayPush$3(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var _arrayPush = arrayPush$3;
  var Symbol$2 = _Symbol,
    isArguments$1 = isArguments_1,
    isArray$3 = isArray_1;
  var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
  function isFlattenable$1(value) {
    return (
      isArray$3(value) ||
      isArguments$1(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol])
    );
  }
  var _isFlattenable = isFlattenable$1;
  var arrayPush$2 = _arrayPush,
    isFlattenable = _isFlattenable;
  function baseFlatten$1(array, depth, predicate, isStrict, result) {
    var index = -1,
      length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten$1(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush$2(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var _baseFlatten = baseFlatten$1;
  var baseFlatten = _baseFlatten;
  function flatten$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  var flatten_1 = flatten$1;
  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$1;
  var apply = _apply;
  var nativeMax = Math.max;
  function overRest$1(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
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
    : function (func, string) {
        return defineProperty(func, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
        });
      };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800,
    HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func) {
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
      return func.apply(void 0, arguments);
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
  function flatRest$1(func) {
    return setToString(overRest(func, void 0, flatten), func + '');
  }
  var _flatRest = flatRest$1;
  var basePick = _basePick,
    flatRest = _flatRest;
  var pick = flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
  });
  var pick_1 = pick;
  var baseGetTag$2 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;
  var numberTag$3 = '[object Number]';
  function isNumber(value) {
    return (
      typeof value == 'number' ||
      (isObjectLike$3(value) && baseGetTag$2(value) == numberTag$3)
    );
  }
  var isNumber_1 = isNumber;
  var ListCache$2 = _ListCache;
  function stackClear$1() {
    this.__data__ = new ListCache$2();
    this.size = 0;
  }
  var _stackClear = stackClear$1;
  function stackDelete$1(key) {
    var data = this.__data__,
      result = data['delete'](key);
    this.size = data.size;
    return result;
  }
  var _stackDelete = stackDelete$1;
  function stackGet$1(key) {
    return this.__data__.get(key);
  }
  var _stackGet = stackGet$1;
  function stackHas$1(key) {
    return this.__data__.has(key);
  }
  var _stackHas = stackHas$1;
  var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;
  function Stack$1(entries) {
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }
  Stack$1.prototype.clear = stackClear;
  Stack$1.prototype['delete'] = stackDelete;
  Stack$1.prototype.get = stackGet;
  Stack$1.prototype.has = stackHas;
  Stack$1.prototype.set = stackSet;
  var _Stack = Stack$1;
  function arrayEach$1(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var _arrayEach = arrayEach$1;
  var assignValue$1 = _assignValue,
    baseAssignValue = _baseAssignValue;
  function copyObject$4(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
      length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$1(object, key, newValue);
      }
    }
    return object;
  }
  var _copyObject = copyObject$4;
  function baseTimes$1(n, iteratee) {
    var index = -1,
      result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  var isBuffer$2 = { exports: {} };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  (function (module2, exports2) {
    var root2 = _root,
      stubFalse2 = stubFalse_1;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module2.exports = isBuffer2;
  })(isBuffer$2, isBuffer$2.exports);
  var baseGetTag$1 = _baseGetTag,
    isLength$1 = isLength_1,
    isObjectLike$2 = isObjectLike_1;
  var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';
  var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] =
    typedArrayTags[float64Tag$2] =
    typedArrayTags[int8Tag$2] =
    typedArrayTags[int16Tag$2] =
    typedArrayTags[int32Tag$2] =
    typedArrayTags[uint8Tag$2] =
    typedArrayTags[uint8ClampedTag$2] =
    typedArrayTags[uint16Tag$2] =
    typedArrayTags[uint32Tag$2] =
      true;
  typedArrayTags[argsTag$1] =
    typedArrayTags[arrayTag$1] =
    typedArrayTags[arrayBufferTag$2] =
    typedArrayTags[boolTag$2] =
    typedArrayTags[dataViewTag$3] =
    typedArrayTags[dateTag$2] =
    typedArrayTags[errorTag$1] =
    typedArrayTags[funcTag$1] =
    typedArrayTags[mapTag$4] =
    typedArrayTags[numberTag$2] =
    typedArrayTags[objectTag$2] =
    typedArrayTags[regexpTag$2] =
    typedArrayTags[setTag$4] =
    typedArrayTags[stringTag$2] =
    typedArrayTags[weakMapTag$2] =
      false;
  function baseIsTypedArray$1(value) {
    return (
      isObjectLike$2(value) &&
      isLength$1(value.length) &&
      !!typedArrayTags[baseGetTag$1(value)]
    );
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  function baseUnary$3(func) {
    return function (value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$3;
  var _nodeUtil = { exports: {} };
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
  var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$2 = _baseUnary,
    nodeUtil$2 = _nodeUtil.exports;
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
  var isTypedArray$1 = nodeIsTypedArray
    ? baseUnary$2(nodeIsTypedArray)
    : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$1;
  var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray$2 = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex = _isIndex,
    isTypedArray = isTypedArray_1;
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$2(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
    for (var key in value) {
      if (
        (inherited || hasOwnProperty$4.call(value, key)) &&
        !(
          skipIndexes &&
          (key == 'length' ||
            (isBuff && (key == 'offset' || key == 'parent')) ||
            (isType &&
              (key == 'buffer' ||
                key == 'byteLength' ||
                key == 'byteOffset')) ||
            isIndex(key, length))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$2;
  var objectProto$4 = Object.prototype;
  function isPrototype$3(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;
    return value === proto;
  }
  var _isPrototype = isPrototype$3;
  function overArg$2(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$2;
  var overArg$1 = _overArg;
  var nativeKeys$1 = overArg$1(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;
  var isPrototype$2 = _isPrototype,
    nativeKeys = _nativeKeys;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function baseKeys$1(object) {
    if (!isPrototype$2(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$1;
  var isFunction$1 = isFunction_1,
    isLength = isLength_1;
  function isArrayLike$2(value) {
    return value != null && isLength(value.length) && !isFunction$1(value);
  }
  var isArrayLike_1 = isArrayLike$2;
  var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$1 = isArrayLike_1;
  function keys$3(object) {
    return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
  }
  var keys_1 = keys$3;
  var copyObject$3 = _copyObject,
    keys$2 = keys_1;
  function baseAssign$1(object, source) {
    return object && copyObject$3(source, keys$2(source), object);
  }
  var _baseAssign = baseAssign$1;
  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;
  var isObject$3 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function baseKeysIn$1(object) {
    if (!isObject$3(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object),
      result = [];
    for (var key in object) {
      if (
        !(
          key == 'constructor' &&
          (isProto || !hasOwnProperty$2.call(object, key))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;
  var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike = isArrayLike_1;
  function keysIn$3(object) {
    return isArrayLike(object)
      ? arrayLikeKeys(object, true)
      : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$3;
  var copyObject$2 = _copyObject,
    keysIn$2 = keysIn_1;
  function baseAssignIn$1(object, source) {
    return object && copyObject$2(source, keysIn$2(source), object);
  }
  var _baseAssignIn = baseAssignIn$1;
  var _cloneBuffer = { exports: {} };
  (function (module2, exports2) {
    var root2 = _root;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0,
      allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
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
    module2.exports = cloneBuffer2;
  })(_cloneBuffer, _cloneBuffer.exports);
  function copyArray$1(source, array) {
    var index = -1,
      length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var _copyArray = copyArray$1;
  function arrayFilter$1(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;
  function stubArray$2() {
    return [];
  }
  var stubArray_1 = stubArray$2;
  var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1;
  var objectProto$1 = Object.prototype;
  var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbols$3 = !nativeGetSymbols$1
    ? stubArray$1
    : function (object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
  var _getSymbols = getSymbols$3;
  var copyObject$1 = _copyObject,
    getSymbols$2 = _getSymbols;
  function copySymbols$1(source, object) {
    return copyObject$1(source, getSymbols$2(source), object);
  }
  var _copySymbols = copySymbols$1;
  var overArg = _overArg;
  var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$2;
  var arrayPush$1 = _arrayPush,
    getPrototype$1 = _getPrototype,
    getSymbols$1 = _getSymbols,
    stubArray = stubArray_1;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn$2 = !nativeGetSymbols
    ? stubArray
    : function (object) {
        var result = [];
        while (object) {
          arrayPush$1(result, getSymbols$1(object));
          object = getPrototype$1(object);
        }
        return result;
      };
  var _getSymbolsIn = getSymbolsIn$2;
  var copyObject = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn;
  function copySymbolsIn$1(source, object) {
    return copyObject(source, getSymbolsIn$1(source), object);
  }
  var _copySymbolsIn = copySymbolsIn$1;
  var arrayPush = _arrayPush,
    isArray$1 = isArray_1;
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$2;
  var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$1 = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys$1(object, keys$1, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$1 = keysIn_1;
  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }
  var _getAllKeysIn = getAllKeysIn$1;
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
  var mapTag$3 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$3 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
  var getTag$3 = baseGetTag;
  if (
    (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$1 && getTag$3(new Map$1()) != mapTag$3) ||
    (Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$3(new Set()) != setTag$3) ||
    (WeakMap && getTag$3(new WeakMap()) != weakMapTag$1)
  ) {
    getTag$3 = function (value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : void 0,
        ctorString = Ctor ? toSource(Ctor) : '';
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$3;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  var _getTag = getTag$3;
  var objectProto = Object.prototype;
  var hasOwnProperty$1 = objectProto.hasOwnProperty;
  function initCloneArray$1(array) {
    var length = array.length,
      result = new array.constructor(length);
    if (
      length &&
      typeof array[0] == 'string' &&
      hasOwnProperty$1.call(array, 'index')
    ) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var _initCloneArray = initCloneArray$1;
  var root = _root;
  var Uint8Array$1 = root.Uint8Array;
  var _Uint8Array = Uint8Array$1;
  var Uint8Array2 = _Uint8Array;
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  var _cloneArrayBuffer = cloneArrayBuffer$3;
  var cloneArrayBuffer$2 = _cloneArrayBuffer;
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(
      buffer,
      dataView.byteOffset,
      dataView.byteLength,
    );
  }
  var _cloneDataView = cloneDataView$1;
  var reFlags = /\w*$/;
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var _cloneRegExp = cloneRegExp$1;
  var Symbol$1 = _Symbol;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0,
    symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var _cloneSymbol = cloneSymbol$1;
  var cloneArrayBuffer$1 = _cloneArrayBuffer;
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep
      ? cloneArrayBuffer$1(typedArray.buffer)
      : typedArray.buffer;
    return new typedArray.constructor(
      buffer,
      typedArray.byteOffset,
      typedArray.length,
    );
  }
  var _cloneTypedArray = cloneTypedArray$1;
  var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray;
  var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$2:
        return new Ctor();
      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$2:
        return new Ctor();
      case symbolTag$1:
        return cloneSymbol(object);
    }
  }
  var _initCloneByTag = initCloneByTag$1;
  var isObject$2 = isObject_1;
  var objectCreate = Object.create;
  var baseCreate$1 = (function () {
    function object() {}
    return function (proto) {
      if (!isObject$2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  })();
  var _baseCreate = baseCreate$1;
  var baseCreate = _baseCreate,
    getPrototype = _getPrototype,
    isPrototype = _isPrototype;
  function initCloneObject$1(object) {
    return typeof object.constructor == 'function' && !isPrototype(object)
      ? baseCreate(getPrototype(object))
      : {};
  }
  var _initCloneObject = initCloneObject$1;
  var getTag$2 = _getTag,
    isObjectLike$1 = isObjectLike_1;
  var mapTag$1 = '[object Map]';
  function baseIsMap$1(value) {
    return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
  }
  var _baseIsMap = baseIsMap$1;
  var baseIsMap = _baseIsMap,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtil.exports;
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
  var isMap_1 = isMap$1;
  var getTag$1 = _getTag,
    isObjectLike = isObjectLike_1;
  var setTag$1 = '[object Set]';
  function baseIsSet$1(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$1;
  }
  var _baseIsSet = baseIsSet$1;
  var baseIsSet = _baseIsSet,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtil.exports;
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  var isSet_1 = isSet$1;
  var Stack = _Stack,
    arrayEach = _arrayEach,
    assignValue = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBuffer.exports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn = _getAllKeysIn,
    getTag = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray = isArray_1,
    isBuffer = isBuffer$2.exports,
    isMap = isMap_1,
    isObject$1 = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn = keysIn_1;
  var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
  var cloneableTags = {};
  cloneableTags[argsTag] =
    cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] =
    cloneableTags[dataViewTag] =
    cloneableTags[boolTag] =
    cloneableTags[dateTag] =
    cloneableTags[float32Tag] =
    cloneableTags[float64Tag] =
    cloneableTags[int8Tag] =
    cloneableTags[int16Tag] =
    cloneableTags[int32Tag] =
    cloneableTags[mapTag] =
    cloneableTags[numberTag] =
    cloneableTags[objectTag] =
    cloneableTags[regexpTag] =
    cloneableTags[setTag] =
    cloneableTags[stringTag] =
    cloneableTags[symbolTag] =
    cloneableTags[uint8Tag] =
    cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] =
    cloneableTags[uint32Tag] =
      true;
  cloneableTags[errorTag] =
    cloneableTags[funcTag] =
    cloneableTags[weakMapTag] =
      false;
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) {
      result = object
        ? customizer(value, key, object, stack)
        : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject$1(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(
          baseClone$1(subValue, bitmask, customizer, subValue, value, stack),
        );
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key2) {
        result.set(
          key2,
          baseClone$1(subValue, bitmask, customizer, key2, value, stack),
        );
      });
    }
    var keysFunc = isFull
      ? isFlat
        ? getAllKeysIn
        : getAllKeys
      : isFlat
      ? keysIn
      : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function (subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(
        result,
        key2,
        baseClone$1(subValue, bitmask, customizer, key2, value, stack),
      );
    });
    return result;
  }
  var _baseClone = baseClone$1;
  var baseClone = _baseClone;
  var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }
  var cloneDeep_1 = cloneDeep;
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
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;
          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === 'object') {
            if (
              arg.toString !== Object.prototype.toString &&
              !arg.toString.toString().includes('[native code]')
            ) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn2.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(' ');
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
  function getFramework(_framework) {
    let defaultFramework = Framework.react;
    if (!_framework) {
      return defaultFramework;
    }
    let curFramework = _framework.toLowerCase().trim();
    switch (curFramework) {
      case 'jquery':
      case 'jq':
        curFramework = Framework.jquery;
        break;
      case 'vue2':
      case 'vue 2':
      case 'vue2.0':
      case 'vue 2.0':
        curFramework = Framework.vue2;
        console.error(
          'vue3-aipage-widget \u4E0D\u652F\u6301 vue2.0 \u6280\u672F\u6808\uFF0C\u8BF7\u6539\u7528aipage-widget\u652F\u6301\u3002',
        );
        break;
      case 'vue':
      case 'vue3':
      case 'vue 3':
      case 'vue3.0':
      case 'vue 3.0':
        curFramework = Framework.vue3;
        break;
      default:
        curFramework = Framework.react;
    }
    return curFramework;
  }
  var Framework;
  (function (Framework2) {
    Framework2['react'] = 'react';
    Framework2['vue2'] = 'vue2';
    Framework2['vue3'] = 'vue3';
    Framework2['jquery'] = 'jquery';
  })(Framework || (Framework = {}));
  function isString$1(str) {
    return Object.prototype.toString.call(str).slice(8, -1) === 'String';
  }
  function isObject(curObj) {
    let isObject2 = false;
    if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
      isObject2 = true;
    }
    return isObject2;
  }
  function isNumberFormat(val) {
    return parseFloat(String(val)).toString() !== 'NaN';
  }
  function camelToKebab(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  function transformComponentId(str) {
    return `-${str}`.replace(/(-[A-Za-z0-9])/g, (m) => {
      return m.toUpperCase().replace('-', '');
    });
  }
  function cloneObject(target, persistOwnProps = true) {
    const obj =
      target && target.__super
        ? Object.create(target.__super, {
            __super: {
              value: target.__super,
              writable: false,
              enumerable: false,
            },
          })
        : Object.create(Object.prototype);
    persistOwnProps &&
      target &&
      Object.keys(target).forEach((key) => (obj[key] = target[key]));
    return obj;
  }
  function extendObject(target, src, persistOwnProps = true) {
    const obj = cloneObject(target, persistOwnProps);
    src && Object.keys(src).forEach((key) => (obj[key] = src[key]));
    return obj;
  }
  const viewportWidth = 375;
  const parseThemeColor = function (color) {
    return color;
  };
  function toRpx(size) {
    const result = (+[size][size && 0] / 375) * viewportWidth;
    return Number.isNaN(result) ? void 0 : `${Math.round(result)}px`;
  }
  function getBackgroundStyle(background = {}) {
    const newBackground = pick_1(
      cloneDeep_1(background) || {},
      'backgroundImage',
      'backgroundRepeat',
      'backgroundSize',
      'backgroundPosition',
      'backgroundColor',
    );
    if (
      background.backgroundImage &&
      /linear-gradient/g.test(background.backgroundImage)
    ) {
      newBackground.backgroundImage = background.backgroundImage;
    } else {
      if (background.backgroundColor) {
        newBackground.backgroundColor = parseThemeColor(
          background.backgroundColor,
        );
      }
      if (background.backgroundImage) {
        newBackground.backgroundImage = `url('${background.backgroundImage}')`;
      }
    }
    return newBackground;
  }
  function getFontStyle(rawFont = {}) {
    let font = pick_1(
      cloneDeep_1(rawFont) || {},
      'color',
      'fontFamily',
      'lineHeight',
      'textAlign',
    );
    if (rawFont.bold) {
      font.fontWeight = 'bold';
    }
    if (rawFont.italic) {
      font.fontStyle = 'italic';
    }
    if (rawFont.underline) {
      font.textDecoration = 'underline';
    }
    if (rawFont.lines) {
      font.WebkitLineClamp = `${rawFont.lines}`;
    }
    if (font.lineHeight) {
      font.lineHeight =
        font.lineHeight >= 12
          ? `${parseInt(font.lineHeight, 10)}px`
          : parseInt(font.lineHeight, 10);
    }
    font.fontSize = toRpx(+rawFont.fontSize);
    font.letterSpacing = toRpx(+rawFont.letterSpacing);
    return font;
  }
  function getBoxStyle(box = {}) {
    const newBox = pick_1(
      cloneDeep_1(box) || {},
      'borderLeftStyle',
      'borderRightStyle',
      'borderTopStyle',
      'borderBottomStyle',
      'borderLeftColor',
      'borderRightColor',
      'borderTopColor',
      'borderBottomColor',
    );
    if (+box.borderTopWidth > 0) {
      newBox.borderTopWidth = toRpx(+box.borderTopWidth);
      newBox.borderTopColor = parseThemeColor(box.borderTopColor);
    } else {
      delete newBox.borderTopStyle;
    }
    if (+box.borderLeftWidth > 0) {
      newBox.borderLeftWidth = toRpx(+box.borderLeftWidth);
      newBox.borderLeftColor = parseThemeColor(box.borderLeftColor);
    } else {
      delete newBox.borderLeftStyle;
    }
    if (+box.borderRightWidth > 0) {
      newBox.borderRightWidth = toRpx(+box.borderRightWidth);
      newBox.borderRightColor = parseThemeColor(box.borderRightColor);
    } else {
      delete newBox.borderRightStyle;
    }
    if (+box.borderBottomWidth > 0) {
      newBox.borderBottomWidth = toRpx(+box.borderBottomWidth);
      newBox.borderBottomColor = parseThemeColor(box.borderBottomColor);
    } else {
      delete newBox.borderBottomStyle;
    }
    newBox.marginTop = toRpx(+box.marginTop);
    newBox.marginLeft = toRpx(+box.marginLeft);
    newBox.marginRight = toRpx(+box.marginRight);
    newBox.marginBottom = toRpx(+box.marginBottom);
    newBox.paddingTop = toRpx(+box.paddingTop);
    newBox.paddingLeft = toRpx(+box.paddingLeft);
    newBox.paddingRight = toRpx(+box.paddingRight);
    newBox.paddingBottom = toRpx(+box.paddingBottom);
    newBox.borderTopLeftRadius = toRpx(+box.borderTopLeftRadius);
    newBox.borderTopRightRadius = toRpx(+box.borderTopRightRadius);
    newBox.borderBottomLeftRadius = toRpx(+box.borderBottomLeftRadius);
    newBox.borderBottomRightRadius = toRpx(+box.borderBottomRightRadius);
    return newBox;
  }
  function getFlexStyle(style = {}) {
    var _a2, _b;
    let result = {};
    if (style.display) {
      result.display = style.display;
    }
    if (result.display === 'flex') {
      let flexSetting = style.flexSetting || {};
      result.flexDirection = flexSetting.direction || 'row';
      result.alignItems = flexSetting.align || 'stretch';
      result.justifyContent = flexSetting.justify || 'flex-start';
    }
    if (((_a2 = style.flexSetting) == null ? void 0 : _a2.flexShrink) >= 0) {
      result.flexShrink = +style.flexSetting.flexShrink;
    }
    if (((_b = style.flexSetting) == null ? void 0 : _b.flex) >= 0) {
      result.flex = +style.flexSetting.flex;
    }
    return result;
  }
  function toWHset(style, label) {
    const unit = style[label + 'Unit'] || 'px';
    if (unit === 'auto' || style[label] <= 0) {
      return 'auto';
    } else if (unit === 'px') {
      return toRpx(+style[label]);
    }
    return style[label] + unit;
  }
  function getBoxPosition(component) {
    let { style = {}, isFlow } =
      (component == null ? void 0 : component.componentProperties) || {};
    let pos = (style.justification || 'top left').split(' ');
    let result = {};
    if (isFlow) {
      result.height = toWHset(style, 'height');
      result.width = toWHset(style, 'width');
      result.maxWidth = '100%';
      if (result.width > 0) {
        result.flexShrink = 0;
      }
    } else {
      result[pos[1]] = +style.x + 'px';
      result[pos[0]] = +style.y + 'px';
      result.height = toWHset(style, 'height') || 'auto';
      result.width = toWHset(style, 'width') || '100%';
      result.position = style.position || 'absolute';
    }
    if (style.opacity >= 0) {
      result.opacity = +style.opacity / 100;
    }
    if (style.display) {
      result.display = style.display;
    }
    return result;
  }
  function getBoxShadow(config = {}) {
    const { angle = 0, x, y, blur, size, color, distance } = config;
    const shadowX =
      typeof x !== 'undefined'
        ? x
        : Math.round(Math.sin(angle * (Math.PI / 180)) * distance);
    const shadowY =
      typeof y !== 'undefined'
        ? y
        : -Math.round(Math.cos(angle * (Math.PI / 180)) * distance);
    if (!x && !y && !blur && !size && !distance) {
      return {};
    }
    if (isNumber_1(shadowX) && isNumber_1(shadowY)) {
      return {
        boxShadow: `${toRpx(shadowX)} ${toRpx(shadowY)} ${toRpx(
          blur || 0,
        )} ${toRpx(size || 0)} ${parseThemeColor(color)}`,
      };
    }
    return {};
  }
  function isValidCSS(rule, val) {
    return CSS.supports(rule, val);
  }
  function transformStyle(style = {}) {
    let result = {};
    Object.keys(style).forEach((key) => {
      switch (key) {
        case 'box':
          result = Object.assign(result, getBoxStyle(style.box));
          break;
        case 'background':
          result = Object.assign(result, getBackgroundStyle(style.background));
          break;
        case 'font':
          result = Object.assign(result, getFontStyle(style.font));
          break;
        case 'lineHeight':
          result.lineHeight =
            style[key] >= 12
              ? `${parseInt(style[key], 10)}px`
              : parseInt(style[key], 10);
          break;
        case 'boxShadow':
          result = Object.assign(result, getBoxShadow(style.boxShadow));
          break;
        case 'opacity':
          result.opacity = +style[key] / 100;
          break;
        case 'width':
          result.width = style.autoWidth ? 'auto' : toWHset(style, 'width');
          break;
        case 'flexSetting':
          result = Object.assign(result, getFlexStyle(style));
          break;
        case 'height':
          result.height = toWHset(style, 'height');
          break;
        default:
          let val = isNumberFormat(style[key])
            ? `${+style[key]}px`
            : style[key];
          if (isObject(style[key])) {
            result = Object.assign(result, {
              [key]: transformStyle(style[key]),
            });
          } else if (
            ![
              'x',
              'y',
              'css',
              'lineClamp',
              'columns',
              'flex',
              'scrollX',
            ].includes(key) &&
            isValidCSS(camelToKebab(key), val)
          ) {
            result[key] = isNumberFormat(style[key])
              ? `${+style[key]}px`
              : style[key];
          }
          break;
      }
    });
    return result;
  }
  (_a = window.matchMedia) == null
    ? void 0
    : _a.call(window, '(max-width: 768px)').matches;
  function createVue3Component(vueObj) {
    if (
      !vueObj ||
      (typeof vueObj !== 'function' && typeof vueObj !== 'object')
    ) {
      return;
    }
    class VueFactory extends React__default['default'].Component {
      constructor(props) {
        super(props);
        __publicField(this, 'domRef');
        __publicField(this, 'app');
        __publicField(this, 'vm');
        __publicField(this, 'isUnmount');
        this.domRef = React__default['default'].createRef();
        this.resolveAmisProps = this.resolveAmisProps.bind(this);
      }
      componentDidMount() {
        const { amisData, amisFunc } = this.resolveAmisProps();
        const { data, ...rest } = (vueObj =
          typeof vueObj === 'function' ? new vueObj() : vueObj);
        this.app = vue.createApp({
          data: () =>
            extendObject(amisData, typeof data === 'function' ? data() : data),
          ...rest,
          props: rest.props || {},
        });
        Object.keys(amisFunc).forEach((key) => {
          this.app.$props[key] = amisFunc[key];
        });
        this.vm = this.app.mount(this.domRef.current);
        this.domRef.current.setAttribute('data-component-id', this.props.id);
      }
      componentDidUpdate() {
        if (!this.isUnmount) {
          const { amisData } = this.resolveAmisProps();
          if (this.vm) {
            Object.keys(amisData).forEach((key) => {
              this.vm[key] = amisData[key];
            });
            this.vm.$forceUpdate();
          }
        }
      }
      componentWillUnmount() {
        this.isUnmount = true;
        this.app.unmount();
      }
      resolveAmisProps() {
        let amisFunc = {};
        let amisData = {};
        Object.keys(this.props).forEach((key) => {
          const value = this.props[key];
          if (typeof value === 'function') {
            amisFunc[key] = value;
          } else {
            if (vue.isProxy(value)) {
              amisData[key] = vue.shallowRef(value);
            } else if (isObject_1(value)) {
              amisData[key] = vue.ref(value);
            } else {
              amisData[key] = value;
            }
          }
        });
        return { amisData, amisFunc };
      }
      render() {
        const { componentProperties, node } = this.props;
        const style =
          componentProperties && componentProperties.style
            ? componentProperties.style
            : {};
        const curStyle = {
          ...getBoxPosition(node || this.props),
          ...transformStyle(style),
        };
        return React__default['default'].createElement('div', {
          ref: this.domRef,
          style: curStyle,
        });
      }
    }
    return VueFactory;
  }
  function registerRenderer(newRenderer, rendererOption) {
    if (!newRenderer) {
      return;
    }
    const curRendererOption = {
      type: '',
      framework: Framework.react,
    };
    if (rendererOption && isString$1(rendererOption)) {
      Object.assign(curRendererOption, {
        type: rendererOption,
      });
    } else {
      Object.assign(curRendererOption, rendererOption);
    }
    if (curRendererOption && !curRendererOption.type) {
      console.error(
        `${consoleTag}\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u578B\uFF08type\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    } else {
      curRendererOption.framework = getFramework(curRendererOption.framework);
      const resolverMap = {
        react: (i) => i,
        vue3: createVue3Component,
      };
      const curRendererComponent =
        resolverMap[curRendererOption.framework](newRenderer);
      if (window) {
        const newComponentId = AddCustomRenderer(
          curRendererOption.type,
          curRendererComponent,
        );
        if (newComponentId) {
          console.info(
            `${consoleTag}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668(${curRendererOption.type})\u4E8B\u4EF6:`,
            {
              type: curRendererOption.type,
              component: curRendererComponent,
              framework: curRendererOption.framework,
            },
          );
          window.postMessage(
            {
              type: 'aipage-editor-register-renderer-event',
              eventMsg: `${consoleTag}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u6E32\u67D3\u5668`,
              customComponentId: newComponentId,
            },
            '*',
          );
        }
      }
    }
  }
  function AddCustomRenderer(type, component) {
    if (window && !window.AIPageEditorCustomRenderers) {
      window.AIPageEditorCustomRenderers = {};
    }
    const componentId = transformComponentId(type);
    if (!window.AIPageEditorCustomRenderers[componentId]) {
      window.AIPageEditorCustomRenderers[componentId] = component;
      return componentId;
    } else {
      console.error(
        `${consoleTag}\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u6E32\u67D3\u5668\u7C7B\u578B(${type})\u3002`,
      );
    }
    return null;
  }
  var image = '';
  var resizeSensor = '';
  var toast = '';
  const extend = Object.assign;
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isFunction = (val) => typeof val === 'function';
  const isString = (val) => typeof val === 'string';
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === '[object Object]';
  const LINEFEED = '\n';
  const SCHEME_RE = /^([a-z-]+:)?\/\//i;
  const DATA_RE = /^data:.*,.*/;
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
  function getCustomDataset(el) {
    return extend({}, el.dataset, el.__uniDataset);
  }
  function passive(passive2) {
    return { passive: passive2 };
  }
  function normalizeTarget(el) {
    const { id, offsetTop, offsetLeft } = el;
    return {
      id,
      dataset: getCustomDataset(el),
      offsetTop,
      offsetLeft,
    };
  }
  /*!
   * vue-router v4.2.2
   * (c) 2023 Eduardo San Martin Morote
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
  var NavigationFailureType;
  (function (NavigationFailureType2) {
    NavigationFailureType2[(NavigationFailureType2['aborted'] = 4)] = 'aborted';
    NavigationFailureType2[(NavigationFailureType2['cancelled'] = 8)] =
      'cancelled';
    NavigationFailureType2[(NavigationFailureType2['duplicated'] = 16)] =
      'duplicated';
  })(NavigationFailureType || (NavigationFailureType = {}));
  function PolySymbol(name) {
    return Symbol(name);
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
  var animation = {
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
      if (evt.touches.length > 1) {
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
      hoverTouch = false;
      if (hovering.value) {
        hoverReset();
      }
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
        onTouchend,
        onTouchcancel,
      },
    };
  }
  function useCustomEvent(ref2, emit2) {
    return (name, evt, detail) => {
      if (ref2.value) {
        emit2(name, normalizeCustomEvent(name, evt, ref2.value, detail || {}));
      }
    };
  }
  function normalizeCustomEvent(name, domEvt, el, detail) {
    const target = normalizeTarget(el);
    return {
      type: detail.type || name,
      timeStamp: domEvt.timeStamp || 0,
      target,
      currentTarget: target,
      detail,
    };
  }
  const baseUrl = '/';
  function addBase(filePath) {
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
  const isIOS$1 = /* @__PURE__ */ /iphone|ipad|ipod/i.test(ua);
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
  function formatApiArgs(args, options) {
    const params = args[0];
    if (
      !options ||
      (!isPlainObject(options.formatArgs) && isPlainObject(params))
    ) {
      return;
    }
    const formatArgs = options.formatArgs;
    const keys2 = Object.keys(formatArgs);
    for (let i = 0; i < keys2.length; i++) {
      const name = keys2[i];
      const formatterOrDefaultValue = formatArgs[name];
      if (isFunction(formatterOrDefaultValue)) {
        const errMsg = formatterOrDefaultValue(args[0][name], params);
        if (isString(errMsg)) {
          return errMsg;
        }
      } else {
        if (!hasOwn(params, name)) {
          params[name] = formatterOrDefaultValue;
        }
      }
    }
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
  function wrapperSyncApi(name, fn, protocol, options) {
    return (...args) => {
      const errMsg = beforeInvokeApi(name, args, protocol, options);
      if (errMsg) {
        throw new Error(errMsg);
      }
      return fn.apply(null, args);
    };
  }
  function defineSyncApi(name, fn, protocol, options) {
    return wrapperSyncApi(name, fn, void 0, options);
  }
  const API_UPX2PX = 'upx2px';
  const EPS = 1e-4;
  const BASE_DEVICE_WIDTH = 750;
  let isIOS = false;
  let deviceWidth = 0;
  let deviceDPR = 0;
  let maxWidth = 960;
  let baseWidth = 375;
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
    const config = __uniConfig.globalStyle || {};
    maxWidth = checkValue(config.rpxCalcMaxDeviceWidth, 960);
    baseWidth = checkValue(config.rpxCalcBaseDeviceWidth, 375);
  }
  const upx2px = /* @__PURE__ */ defineSyncApi(
    API_UPX2PX,
    (number, newDeviceWidth) => {
      if (deviceWidth === 0) {
        checkDeviceWidth();
        {
          checkMaxWidth();
        }
      }
      number = Number(number);
      if (number === 0) {
        return 0;
      }
      let width = newDeviceWidth || deviceWidth;
      {
        width = width <= maxWidth ? width : baseWidth;
      }
      let result = (number / BASE_DEVICE_WIDTH) * width;
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
      return number < 0 ? -result : result;
    },
  );
  const validator = [
    {
      name: 'id',
      type: String,
      required: true,
    },
  ];
  validator.concat({
    name: 'componentInstance',
    type: Object,
  });
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
  var ResizeSensor = /* @__PURE__ */ defineBuiltInComponent({
    name: 'ResizeSensor',
    props: {
      initial: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['resize'],
    setup(props2, { emit: emit2 }) {
      const rootRef = vue.ref(null);
      const reset = useResizeSensorReset(rootRef);
      const update = useResizeSensorUpdate(rootRef, emit2, reset);
      useResizeSensorLifecycle(rootRef, props2, update, reset);
      return () =>
        vue.createVNode(
          'uni-resize-sensor',
          {
            ref: rootRef,
            onAnimationstartOnce: update,
          },
          [
            vue.createVNode(
              'div',
              {
                onScroll: update,
              },
              [vue.createVNode('div', null, null)],
              40,
              ['onScroll'],
            ),
            vue.createVNode(
              'div',
              {
                onScroll: update,
              },
              [vue.createVNode('div', null, null)],
              40,
              ['onScroll'],
            ),
          ],
          40,
          ['onAnimationstartOnce'],
        );
    },
  });
  function useResizeSensorUpdate(rootRef, emit2, reset) {
    const size = vue.reactive({
      width: -1,
      height: -1,
    });
    vue.watch(
      () => extend({}, size),
      (value) => emit2('resize', value),
    );
    return () => {
      const rootEl = rootRef.value;
      size.width = rootEl.offsetWidth;
      size.height = rootEl.offsetHeight;
      reset();
    };
  }
  function useResizeSensorReset(rootRef) {
    return () => {
      const { firstElementChild, lastElementChild } = rootRef.value;
      firstElementChild.scrollLeft = 1e5;
      firstElementChild.scrollTop = 1e5;
      lastElementChild.scrollLeft = 1e5;
      lastElementChild.scrollTop = 1e5;
    };
  }
  function useResizeSensorLifecycle(rootRef, props2, update, reset) {
    vue.onActivated(reset);
    vue.onMounted(() => {
      if (props2.initial) {
        vue.nextTick(update);
      }
      const rootEl = rootRef.value;
      if (rootEl.offsetParent !== rootEl.parentElement) {
        rootEl.parentElement.style.position = 'relative';
      }
      if (!('AnimationEvent' in window)) {
        reset();
      }
    });
  }
  const props$s = {
    src: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'scaleToFill',
    },
    lazyLoad: {
      type: [Boolean, String],
      default: false,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
  };
  const FIX_MODES = {
    widthFix: ['offsetWidth', 'height', (value, ratio) => value / ratio],
    heightFix: ['offsetHeight', 'width', (value, ratio) => value * ratio],
  };
  const IMAGE_MODES = {
    aspectFit: ['center center', 'contain'],
    aspectFill: ['center center', 'cover'],
    widthFix: [, '100% 100%'],
    heightFix: [, '100% 100%'],
    top: ['center top'],
    bottom: ['center bottom'],
    center: ['center center'],
    left: ['left center'],
    right: ['right center'],
    'top left': ['left top'],
    'top right': ['right top'],
    'bottom left': ['left bottom'],
    'bottom right': ['right bottom'],
  };
  var index$r = /* @__PURE__ */ defineBuiltInComponent({
    name: 'Image',
    props: props$s,
    setup(props2, { emit: emit2 }) {
      const rootRef = vue.ref(null);
      const state2 = useImageState(rootRef, props2);
      const trigger = useCustomEvent(rootRef, emit2);
      const { fixSize } = useImageSize(rootRef, props2, state2);
      useImageLoader(state2, fixSize, trigger);
      return () => {
        const { mode: mode2 } = props2;
        const { imgSrc, modeStyle, src } = state2;
        let imgTsx;
        {
          imgTsx = imgSrc
            ? vue.createVNode(
                'img',
                {
                  src: imgSrc,
                  draggable: props2.draggable,
                },
                null,
                8,
                ['src', 'draggable'],
              )
            : vue.createVNode('img', null, null);
        }
        return vue.createVNode(
          'uni-image',
          {
            ref: rootRef,
          },
          [
            vue.createVNode(
              'div',
              {
                style: modeStyle,
              },
              null,
              4,
            ),
            imgTsx,
            FIX_MODES[mode2]
              ? vue.createVNode(
                  ResizeSensor,
                  {
                    onResize: fixSize,
                  },
                  null,
                  8,
                  ['onResize'],
                )
              : vue.createVNode('span', null, null),
          ],
          512,
        );
      };
    },
  });
  function useImageState(rootRef, props2) {
    const imgSrc = vue.ref('');
    const modeStyleRef = vue.computed(() => {
      let size = 'auto';
      let position = '';
      const opts = IMAGE_MODES[props2.mode];
      if (!opts) {
        position = '0% 0%';
        size = '100% 100%';
      } else {
        opts[0] && (position = opts[0]);
        opts[1] && (size = opts[1]);
      }
      return `background-image:${
        imgSrc.value ? 'url("' + imgSrc.value + '")' : 'none'
      };background-position:${position};background-size:${size};`;
    });
    const state2 = vue.reactive({
      rootEl: rootRef,
      src: vue.computed(() => (props2.src ? getRealPath(props2.src) : '')),
      origWidth: 0,
      origHeight: 0,
      origStyle: {
        width: '',
        height: '',
      },
      modeStyle: modeStyleRef,
      imgSrc,
    });
    vue.onMounted(() => {
      const rootEl = rootRef.value;
      const style = rootEl.style;
      state2.origWidth = Number(style.width) || 0;
      state2.origHeight = Number(style.height) || 0;
    });
    return state2;
  }
  function useImageLoader(state2, fixSize, trigger) {
    let img;
    const setState = (width = 0, height = 0, imgSrc = '') => {
      state2.origWidth = width;
      state2.origHeight = height;
      state2.imgSrc = imgSrc;
    };
    const loadImage = (src) => {
      if (!src) {
        resetImage();
        setState();
        return;
      }
      img = img || new Image();
      img.onload = (evt) => {
        const { width, height } = img;
        setState(width, height, src);
        fixSize();
        resetImage();
        trigger('load', evt, {
          width,
          height,
        });
      };
      img.onerror = (evt) => {
        setState();
        resetImage();
        trigger('error', evt, {
          errMsg: `GET ${state2.src} 404 (Not Found)`,
        });
      };
      img.src = src;
    };
    const resetImage = () => {
      if (img) {
        img.onload = null;
        img.onerror = null;
        img = null;
      }
    };
    vue.watch(
      () => state2.src,
      (value) => loadImage(value),
    );
    vue.onMounted(() => loadImage(state2.src));
    vue.onBeforeUnmount(() => resetImage());
  }
  const isChrome = navigator.vendor === 'Google Inc.';
  function fixNumber(num) {
    if (isChrome && num > 10) {
      num = Math.round(num / 2) * 2;
    }
    return num;
  }
  function useImageSize(rootRef, props2, state2) {
    const fixSize = () => {
      const { mode: mode2 } = props2;
      const names = FIX_MODES[mode2];
      if (!names) {
        return;
      }
      const { origWidth, origHeight } = state2;
      const ratio = origWidth && origHeight ? origWidth / origHeight : 0;
      if (!ratio) {
        return;
      }
      const rootEl = rootRef.value;
      const value = rootEl[names[0]];
      if (value) {
        rootEl.style[names[1]] = fixNumber(names[2](value, ratio)) + 'px';
      }
    };
    const resetSize = () => {
      const { style } = rootRef.value;
      const {
        origStyle: { width, height },
      } = state2;
      style.width = width;
      style.height = height;
    };
    vue.watch(
      () => props2.mode,
      (value, oldValue) => {
        if (FIX_MODES[oldValue]) {
          resetSize();
        }
        if (FIX_MODES[value]) {
          fixSize();
        }
      },
    );
    return {
      fixSize,
      resetSize,
    };
  }
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
  const SPACE_UNICODE = {
    ensp: '\u2002',
    emsp: '\u2003',
    nbsp: '\xA0',
  };
  function parseText(text2, options) {
    return text2
      .replace(/\\n/g, LINEFEED)
      .split(LINEFEED)
      .map((text22) => {
        return normalizeText(text22, options);
      });
  }
  function normalizeText(text2, { space, decode: decode2 }) {
    if (!text2) {
      return text2;
    }
    if (space && SPACE_UNICODE[space]) {
      text2 = text2.replace(/ /g, SPACE_UNICODE[space]);
    }
    if (!decode2) {
      return text2;
    }
    return text2
      .replace(/&nbsp;/g, SPACE_UNICODE.nbsp)
      .replace(/&ensp;/g, SPACE_UNICODE.ensp)
      .replace(/&emsp;/g, SPACE_UNICODE.emsp)
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
  }
  var index$j = /* @__PURE__ */ defineBuiltInComponent({
    name: 'Text',
    props: {
      selectable: {
        type: [Boolean, String],
        default: false,
      },
      space: {
        type: String,
        default: '',
      },
      decode: {
        type: [Boolean, String],
        default: false,
      },
    },
    setup(props2, { slots }) {
      return () => {
        const children = [];
        if (slots.default) {
          slots.default().forEach((vnode) => {
            if (vnode.shapeFlag & 8 && vnode.type !== vue.Comment) {
              const lines = parseText(vnode.children, {
                space: props2.space,
                decode: props2.decode,
              });
              const len = lines.length - 1;
              lines.forEach((line, index2) => {
                if (index2 === 0 && !line);
                else {
                  children.push(vue.createTextVNode(line));
                }
                if (index2 !== len) {
                  children.push(vue.createVNode('br'));
                }
              });
            } else {
              children.push(vnode);
            }
          });
        }
        return vue.createVNode(
          'uni-text',
          {
            selectable: props2.selectable ? true : null,
          },
          [vue.createVNode('span', null, children)],
          8,
          ['selectable'],
        );
      };
    },
  });
  var index$h = /* @__PURE__ */ defineBuiltInComponent({
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
      navigationBar.titleColor = titleColor || '#ffffff';
      navigationBar.backgroundColor = backgroundColor || '#F7F7F7';
    }
    return pageMeta;
  }
  function getStateId() {
    return (history.state && history.state.__id__) || 1;
  }
  const currentPagesMap = /* @__PURE__ */ new Map();
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
  addInteractListener();
  function updateDocumentTitle(title) {
    {
      document.title = title;
    }
  }
  function useDocumentTitle(pageMeta) {
    function update() {
      updateDocumentTitle(pageMeta.navigationBar.titleText);
    }
    vue.watchEffect(update);
    vue.onActivated(update);
  }
  var PageHead = /* @__PURE__ */ defineSystemComponent({
    name: 'PageHead',
    setup() {
      const headRef = vue.ref(null);
      const pageMeta = usePageMeta();
      const navigationBar = pageMeta.navigationBar;
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
  var PageBody = defineSystemComponent({
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
  var text = '';
  var view = '';
  var uIcon_vue_vue_type_style_index_0_scoped_true_lang = '';
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    name: 'u-icon',
    emits: ['click', 'touchstart'],
    props: {
      name: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
      size: {
        type: [Number, String],
        default: 'inherit',
      },
      bold: {
        type: Boolean,
        default: false,
      },
      index: {
        type: [Number, String],
        default: '',
      },
      hoverClass: {
        type: String,
        default: '',
      },
      customPrefix: {
        type: String,
        default: 'uicon',
      },
      label: {
        type: [String, Number],
        default: '',
      },
      labelPos: {
        type: String,
        default: 'right',
      },
      labelSize: {
        type: [String, Number],
        default: '28',
      },
      labelColor: {
        type: String,
        default: '#606266',
      },
      marginLeft: {
        type: [String, Number],
        default: '6',
      },
      marginTop: {
        type: [String, Number],
        default: '6',
      },
      marginRight: {
        type: [String, Number],
        default: '6',
      },
      marginBottom: {
        type: [String, Number],
        default: '6',
      },
      imgMode: {
        type: String,
        default: 'widthFix',
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        },
      },
      width: {
        type: [String, Number],
        default: '',
      },
      height: {
        type: [String, Number],
        default: '',
      },
      top: {
        type: [String, Number],
        default: 0,
      },
      showDecimalIcon: {
        type: Boolean,
        default: false,
      },
      inactiveColor: {
        type: String,
        default: '#ececec',
      },
      percent: {
        type: [Number, String],
        default: '50',
      },
    },
    computed: {
      customClass() {
        let classes = [];
        let { customPrefix, name } = this;
        let index = name.indexOf('-icon-');
        if (index > -1) {
          customPrefix = name.substring(0, index + 5);
          classes.push(name);
        } else {
          classes.push(`${customPrefix}-${name}`);
        }
        if (customPrefix === 'uicon') {
          classes.push('u-iconfont');
        } else {
          classes.push(customPrefix);
        }
        if (
          this.showDecimalIcon &&
          this.inactiveColor &&
          this.$u.config.type.includes(this.inactiveColor)
        ) {
          classes.push('u-icon__icon--' + this.inactiveColor);
        } else if (this.color && this.$u.config.type.includes(this.color))
          classes.push('u-icon__icon--' + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize:
            this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
          fontWeight: this.bold ? 'bold' : 'normal',
          top: this.$u.addUnit(this.top),
        };
        if (
          this.showDecimalIcon &&
          this.inactiveColor &&
          !this.$u.config.type.includes(this.inactiveColor)
        ) {
          style.color = this.inactiveColor;
        } else if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf('/') !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width
          ? this.$u.addUnit(this.width)
          : this.$u.addUnit(this.size);
        style.height = this.height
          ? this.$u.addUnit(this.height)
          : this.$u.addUnit(this.size);
        return style;
      },
      decimalIconStyle() {
        let style = {};
        style = {
          fontSize:
            this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
          fontWeight: this.bold ? 'bold' : 'normal',
          top: this.$u.addUnit(this.top),
          width: this.percent + '%',
        };
        if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      decimalIconClass() {
        let classes = [];
        classes.push(this.customPrefix + '-' + this.name);
        if (this.customPrefix == 'uicon') {
          classes.push('u-iconfont');
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && this.$u.config.type.includes(this.color))
          classes.push('u-icon__icon--' + this.color);
        else classes.push('u-icon__icon--primary');
        return classes;
      },
    },
    methods: {
      click() {
        this.$emit('click', this.index);
      },
      touchstart() {
        this.$emit('touchstart', this.index);
      },
    },
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_v_uni_image = index$r;
    const _component_v_uni_text = index$j;
    const _component_v_uni_view = index$h;
    return (
      vue.openBlock(),
      vue.createBlock(
        _component_v_uni_view,
        {
          style: vue.normalizeStyle([$props.customStyle]),
          class: vue.normalizeClass(['u-icon', ['u-icon--' + $props.labelPos]]),
          onClick: $options.click,
        },
        {
          default: vue.withCtx(() => [
            $options.isImg
              ? (vue.openBlock(),
                vue.createBlock(
                  _component_v_uni_image,
                  {
                    key: 0,
                    class: 'u-icon__img',
                    src: $props.name,
                    mode: $props.imgMode,
                    style: vue.normalizeStyle([$options.imgStyle]),
                  },
                  null,
                  8,
                  ['src', 'mode', 'style'],
                ))
              : (vue.openBlock(),
                vue.createBlock(
                  _component_v_uni_view,
                  {
                    key: 1,
                    class: vue.normalizeClass([
                      'u-icon__icon',
                      $options.customClass,
                    ]),
                    style: vue.normalizeStyle([$options.iconStyle]),
                    'hover-class': $props.hoverClass,
                    onTouchstart: $options.touchstart,
                  },
                  {
                    default: vue.withCtx(() => [
                      $props.showDecimalIcon
                        ? (vue.openBlock(),
                          vue.createBlock(
                            _component_v_uni_text,
                            {
                              key: 0,
                              style: vue.normalizeStyle([
                                $options.decimalIconStyle,
                              ]),
                              class: vue.normalizeClass([
                                $options.decimalIconClass,
                                'u-icon__decimal',
                              ]),
                              'hover-class': $props.hoverClass,
                            },
                            null,
                            8,
                            ['style', 'class', 'hover-class'],
                          ))
                        : vue.createCommentVNode('v-if', true),
                    ]),
                    _: 1,
                  },
                  8,
                  ['class', 'style', 'hover-class', 'onTouchstart'],
                )),
            vue.createCommentVNode(
              ' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u4F20\u503C\u9ED8\u8BA4\u4E3Anull\uFF0C\u6545\u9700\u8981\u589E\u52A0null\u7684\u5224\u65AD ',
            ),
            $props.label !== '' && $props.label !== null
              ? (vue.openBlock(),
                vue.createBlock(
                  _component_v_uni_text,
                  {
                    key: 2,
                    class: 'u-icon__label',
                    style: vue.normalizeStyle({
                      color: $props.labelColor,
                      fontSize: _ctx.$u.addUnit($props.labelSize),
                      marginLeft:
                        $props.labelPos == 'right'
                          ? _ctx.$u.addUnit($props.marginLeft)
                          : 0,
                      marginTop:
                        $props.labelPos == 'bottom'
                          ? _ctx.$u.addUnit($props.marginTop)
                          : 0,
                      marginRight:
                        $props.labelPos == 'left'
                          ? _ctx.$u.addUnit($props.marginRight)
                          : 0,
                      marginBottom:
                        $props.labelPos == 'top'
                          ? _ctx.$u.addUnit($props.marginBottom)
                          : 0,
                    }),
                  },
                  {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString($props.label), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ['style'],
                ))
              : vue.createCommentVNode('v-if', true),
          ]),
          _: 1,
        },
        8,
        ['style', 'onClick', 'class'],
      )
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [
    ['render', _sfc_render$3],
    ['__scopeId', 'data-v-477f2e54'],
  ]);
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  var uTimeLineItem_vue_vue_type_style_index_0_scoped_true_lang = '';
  const _sfc_main$2 = {
    name: 'u-time-line-item',
    props: {
      bgColor: {
        type: String,
        default: '#ffffff',
      },
      nodeTop: {
        type: [String, Number],
        default: '',
      },
    },
    data() {
      return {};
    },
    computed: {
      nodeStyle() {
        let style = {
          backgroundColor: this.bgColor,
        };
        if (this.nodeTop != '') style.top = this.nodeTop + 'rpx';
        return style;
      },
    },
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_v_uni_view = index$h;
    return (
      vue.openBlock(),
      vue.createBlock(
        _component_v_uni_view,
        { class: 'u-time-axis-item' },
        {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, 'content', {}, void 0, true),
            vue.createVNode(
              _component_v_uni_view,
              {
                class: 'u-time-axis-node',
                style: vue.normalizeStyle([$options.nodeStyle]),
              },
              {
                default: vue.withCtx(() => [
                  vue.renderSlot(
                    _ctx.$slots,
                    'node',
                    {},
                    () => [
                      vue.createVNode(_component_v_uni_view, {
                        class: 'u-dot',
                      }),
                    ],
                    true,
                  ),
                ]),
                _: 3,
              },
              8,
              ['style'],
            ),
          ]),
          _: 3,
        },
      )
    );
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [
    ['render', _sfc_render$2],
    ['__scopeId', 'data-v-20ad8016'],
  ]);
  var uTimeLine_vue_vue_type_style_index_0_scoped_true_lang = '';
  const _sfc_main$1 = {
    name: 'u-time-line',
    data() {
      return {};
    },
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_v_uni_view = index$h;
    return (
      vue.openBlock(),
      vue.createBlock(
        _component_v_uni_view,
        { class: 'u-time-axis' },
        {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, 'default', {}, void 0, true),
          ]),
          _: 3,
        },
      )
    );
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
    ['render', _sfc_render$1],
    ['__scopeId', 'data-v-f8289406'],
  ]);
  var uniTimeLine_vue_vue_type_style_index_0_scoped_true_lang = '';
  const _sfc_main = {
    props: ['componentProperties', 'id'],
    data() {
      return {
        show: true,
        mode: 'date',
        timeLineDemo: [
          {
            status: '\u8FD0\u8F93\u4E2D',
            desc: '\u3010\u6DF1\u5733\u5E02\u3011\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C\u9065\u770B\u7011\u5E03\u6302\u524D\u5DDD\uFF0C\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C\u7591\u662F\u94F6\u6CB3\u843D\u4E5D\u5929\u3002',
            time: '2019-05-10 12:12',
          },
          {
            status: '\u8FD0\u8F93\u4E2D',
            desc: '\u3010\u6DF1\u5733\u5E02\u3011\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C\u9065\u770B\u7011\u5E03\u6302\u524D\u5DDD\uFF0C\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C\u7591\u662F\u94F6\u6CB3\u843D\u4E5D\u5929\u3002',
            time: '2019-05-08 12:12',
          },
          {
            status: '\u5F85\u53D6\u4EF6',
            desc: '[\u81EA\u63D0\u67DC]\u60A8\u7684\u5FEB\u4EF6\u5DF2\u653E\u5728\u697C\u4E0B\u4FA7\u95E8\uFF0C\u76F4\u8D70\u524D\u65B953.6\u7C73\uFF0C\u5DE6\u62D0\u7EA610\u6B65\uFF0C\u518D\u53F3\u62D0\u76F4\u8D70\uFF0C\u89C1\u4E00\u7EA2\u706F\u7B3C\u505C\u4E0B\uFF0C\u53E9\u95E8\u4E09\u4E0B\uFF0C\u558A\u201C\u829D\u9EBB\u5F00\u95E8\u201D\u5373\u53EF\u3002',
            time: '2019-05-12 12:12',
          },
        ],
      };
    },
    computed: {
      timeLine() {
        return (
          (this.componentProperties &&
            this.componentProperties.data &&
            this.componentProperties.data.timeLine) ||
          this.timeLineDemo
        );
      },
      timeLineReverse() {
        return this.timeLine ? this.timeLine.reverse() : [];
      },
    },
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(
      vue.resolveDynamicComponent('u-icon'),
      __easycom_0,
    );
    const _component_v_uni_view = index$h;
    const _component_u_time_line_item = resolveEasycom(
      vue.resolveDynamicComponent('u-time-line-item'),
      __easycom_2,
    );
    const _component_u_time_line = resolveEasycom(
      vue.resolveDynamicComponent('u-time-line'),
      __easycom_3,
    );
    return (
      vue.openBlock(),
      vue.createBlock(
        _component_u_time_line,
        { class: 'time-line' },
        {
          default: vue.withCtx(() => [
            (vue.openBlock(true),
            vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.timeLineReverse, (item, index) => {
                return (
                  vue.openBlock(),
                  vue.createBlock(
                    _component_u_time_line_item,
                    { key: index },
                    vue.createSlots(
                      {
                        content: vue.withCtx(() => [
                          vue.createVNode(
                            _component_v_uni_view,
                            null,
                            {
                              default: vue.withCtx(() => [
                                vue.createVNode(
                                  _component_v_uni_view,
                                  { class: 'u-order-title' },
                                  {
                                    default: vue.withCtx(() => [
                                      vue.createTextVNode(
                                        vue.toDisplayString(item.status),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                                vue.createVNode(
                                  _component_v_uni_view,
                                  { class: 'u-order-desc' },
                                  {
                                    default: vue.withCtx(() => [
                                      vue.createTextVNode(
                                        vue.toDisplayString(item.desc),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                                vue.createVNode(
                                  _component_v_uni_view,
                                  { class: 'u-order-time' },
                                  {
                                    default: vue.withCtx(() => [
                                      vue.createTextVNode(
                                        vue.toDisplayString(item.time),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          ),
                        ]),
                        _: 2,
                      },
                      [
                        index === 0
                          ? {
                              name: 'node',
                              fn: vue.withCtx(() => [
                                vue.createVNode(
                                  _component_v_uni_view,
                                  {
                                    class: 'u-node',
                                    style: { background: '#19be6b' },
                                  },
                                  {
                                    default: vue.withCtx(() => [
                                      vue.createCommentVNode(
                                        ' \u6B64\u5904\u4E3AuView\u7684icon\u7EC4\u4EF6 ',
                                      ),
                                      vue.createVNode(_component_u_icon, {
                                        name: 'pushpin-fill',
                                        color: '#fff',
                                        size: 24,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                            }
                          : void 0,
                      ],
                    ),
                    1024,
                  )
                );
              }),
              128,
            )),
          ]),
          _: 1,
        },
      )
    );
  }
  var InfoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [
    ['render', _sfc_render],
    ['__scopeId', 'data-v-cbc7eb8c'],
  ]);
  registerRenderer(InfoCard, {
    type: 'uni-time-line',
    framework: 'vue3',
  });
});
