(function (global2, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('react'), require('vue')))
    : typeof define === 'function' && define.amd
    ? define(['react', 'vue'], factory)
    : ((global2 =
        typeof globalThis !== 'undefined' ? globalThis : global2 || self),
      (global2.plugin = factory()));
})(this, function () {
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
  function isObject$4(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  var isObject_1 = isObject$4;
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
  function isKey$1(value, object) {
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
      (object != null && value in Object(object))
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
  var Map$2 = getNative$5(root$5, 'Map');
  var _Map = Map$2;
  var Hash = _Hash,
    ListCache = _ListCache,
    Map$1 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$1 || ListCache)(),
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
    memoized.cache = new (memoize$1.Cache || MapCache)();
    return memoized;
  }
  memoize$1.Cache = MapCache;
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
  function castPath$4(value, object) {
    if (isArray$2(value)) {
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
  function baseAssignValue$1(object, key, value) {
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
  var _baseAssignValue = baseAssignValue$1;
  var baseAssignValue = _baseAssignValue,
    eq = eq_1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function assignValue$1(object, key, value) {
    var objValue = object[key];
    if (
      !(hasOwnProperty$1.call(object, key) && eq(objValue, value)) ||
      (value === void 0 && !(key in object))
    ) {
      baseAssignValue(object, key, value);
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
  function baseSet$1(object, path, value, customizer) {
    if (!isObject$1(object)) {
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
      isLength(length) &&
      isIndex(key, length) &&
      (isArray$1(object) || isArguments$1(object))
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
  function arrayPush$1(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
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
  flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
  });
  var isBuffer = { exports: {} };
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
    var Buffer = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module2.exports = isBuffer2;
  })(isBuffer, isBuffer.exports);
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
  var nodeUtil$2 = _nodeUtil.exports;
  nodeUtil$2 && nodeUtil$2.isTypedArray;
  var _cloneBuffer = { exports: {} };
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
    Map = _Map,
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
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
  var getTag = baseGetTag;
  if (
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map()) != mapTag) ||
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
  var nodeUtil$1 = _nodeUtil.exports;
  nodeUtil$1 && nodeUtil$1.isMap;
  var nodeUtil = _nodeUtil.exports;
  nodeUtil && nodeUtil.isSet;
  var classnames = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function (module2) {
    (function () {
      var hasOwn = {}.hasOwnProperty;
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
              if (hasOwn.call(arg, key) && arg[key]) {
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
        `${consoleTag}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u540D\u79F0\uFF08name\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    } else if (!_editorPluginObj.id) {
      console.error(
        `${consoleTag}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6ID\uFF08id\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    } else if (!_editorPluginObj.componentId) {
      console.error(
        `${consoleTag}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u6E32\u67D3\u5668ID\uFF08componentId\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    } else if (!_editorPluginObj.description) {
      console.error(
        `${consoleTag}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u63CF\u8FF0\uFF08description\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    } else if (
      !_editorPluginObj.tags ||
      (Array.isArray(_editorPluginObj.tags) &&
        _editorPluginObj.tags.length === 0)
    ) {
      console.error(
        `${consoleTag}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u5206\u7C7B\uFF08tags\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
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
            `${consoleTag}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u63D2\u4EF6(${newEditorPlugin.name})\u4E8B\u4EF6:`,
            newEditorPlugin,
          );
          window.postMessage(
            {
              type: 'aipage-editor-register-plugin-event',
              eventMsg: `${consoleTag}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u63D2\u4EF6`,
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
  function AddCustomPlugin(id, plugin) {
    if (window && !window.AIPageEditorCustomPlugins) {
      window.AIPageEditorCustomPlugins = {};
    }
    const componentId = transformComponentId(id);
    if (!window.AIPageEditorCustomPlugins[componentId]) {
      window.AIPageEditorCustomPlugins[componentId] = plugin;
      return componentId;
    } else {
      console.error(
        `${consoleTag}\u6CE8\u518C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u63D2\u4EF6(${id})\u3002`,
      );
    }
    return null;
  }
  (_a = window.matchMedia) == null
    ? void 0
    : _a.call(window, '(max-width: 768px)').matches;
  const InfoCardPlugin = {
    name: '\u7269\u6D41\u8282\u70B9',
    description: 'uview\u7248TimeLine\u7EC4\u4EF6\u793A\u4F8B',
    componentId: 'uni-time-line',
    id: 'uni-time-line',
    tags: ['uview\u7EC4\u4EF6'],
    pluginIcon: 'cards-plugin',
    order: 1,
    type: 'element',
    device: ['mobile', 'app'],
    docLink: '',
    demoProperties: {
      componentId: 'uni-time-line',
      type: 'element',
      componentProperties: {
        data: {
          timeLine: [
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
        },
        style: {},
      },
    },
    panelControls: {
      type: 'tabs',
      tabs: [
        {
          title: '\u5C5E\u6027',
          controls: [
            {
              type: 'collapse',
              title: '\u6570\u636E',
              controls: [
                {
                  name: 'data.timeLine',
                  type: 'setting-list',
                  label: '\u7269\u6D41\u8282\u70B9',
                  mode: 'normal',
                  fullSize: true,
                  setting: [
                    {
                      type: 'input-text',
                      name: 'status',
                      label: '\u72B6\u6001',
                    },
                    {
                      type: 'textarea',
                      name: 'desc',
                      label: '\u8BE6\u7EC6',
                    },
                    {
                      type: 'input-datetime',
                      name: 'time',
                      label: '\u65F6\u95F4',
                      format: 'YYYY-MM-DD HH:mm',
                    },
                  ],
                  enableDataBinding: true,
                },
              ],
            },
          ],
        },
        {
          title: '\u5916\u89C2',
          controls: [
            {
              title: '\u5E03\u5C40',
              type: 'collapse',
              controls: [
                {
                  type: 'button-icon-group',
                  name: 'style.display',
                  label: '\u663E\u793A',
                  value: 'block',
                  options: [
                    {
                      label: '\u5757\u7EA7(block)',
                      icon: 'block',
                      value: 'block',
                    },
                    {
                      label: '\u884C\u5185\u533A\u5757(inline-block)',
                      icon: 'inlineBlock',
                      value: 'inline-block',
                    },
                    {
                      label: '\u884C\u5185\u5143\u7D20(inline)',
                      icon: 'inline',
                      value: 'inline',
                    },
                  ],
                },
                {
                  name: 'style',
                  type: 'whSet',
                  label: '\u5BBD\u5EA6',
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
              title: '\u8FB9\u8DDD',
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
