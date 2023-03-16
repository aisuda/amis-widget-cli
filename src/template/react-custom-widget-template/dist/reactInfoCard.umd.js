/*! For license information please see reactInfoCard.umd.js.LICENSE.txt */
!(function (e, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define([], r)
    : 'object' == typeof exports
    ? (exports.amisWidget = r())
    : (e.amisWidget = r());
})(this, function () {
  return (function () {
    var e = {
        391: function () {},
        490: function () {},
        940: function (e, r, o) {
          var t = o(490);
          t.__esModule && (t = t.default),
            'string' == typeof t && (t = [[e.id, t, '']]),
            t.locals && (e.exports = t.locals),
            (0, o(346).Z)('7c81504e', t, !1, { sourceMap: !1 });
        },
        325: function (e, r, o) {
          var t = o(391);
          t.__esModule && (t = t.default),
            'string' == typeof t && (t = [[e.id, t, '']]),
            t.locals && (e.exports = t.locals),
            (0, o(346).Z)('2c1625b5', t, !1, { sourceMap: !1 });
        },
        346: function (e, r, o) {
          'use strict';
          function t(e, r) {
            for (var o = [], t = {}, n = 0; n < r.length; n++) {
              var a = r[n],
                i = a[0],
                l = {
                  id: e + ':' + n,
                  css: a[1],
                  media: a[2],
                  sourceMap: a[3],
                };
              t[i]
                ? t[i].parts.push(l)
                : o.push((t[i] = { id: i, parts: [l] }));
            }
            return o;
          }
          o.d(r, {
            Z: function () {
              return p;
            },
          });
          var n = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !n)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var a = {},
            i =
              n && (document.head || document.getElementsByTagName('head')[0]),
            l = null,
            c = 0,
            s = !1,
            d = function () {},
            g = null,
            u = 'data-vue-ssr-id',
            m =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function p(e, r, o, n) {
            (s = o), (g = n || {});
            var i = t(e, r);
            return (
              f(i),
              function (r) {
                for (var o = [], n = 0; n < i.length; n++) {
                  var l = i[n];
                  (c = a[l.id]).refs--, o.push(c);
                }
                for (
                  r ? f((i = t(e, r))) : (i = []), n = 0;
                  n < o.length;
                  n++
                ) {
                  var c;
                  if (0 === (c = o[n]).refs) {
                    for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                    delete a[c.id];
                  }
                }
              }
            );
          }
          function f(e) {
            for (var r = 0; r < e.length; r++) {
              var o = e[r],
                t = a[o.id];
              if (t) {
                t.refs++;
                for (var n = 0; n < t.parts.length; n++) t.parts[n](o.parts[n]);
                for (; n < o.parts.length; n++) t.parts.push(x(o.parts[n]));
                t.parts.length > o.parts.length &&
                  (t.parts.length = o.parts.length);
              } else {
                var i = [];
                for (n = 0; n < o.parts.length; n++) i.push(x(o.parts[n]));
                a[o.id] = { id: o.id, refs: 1, parts: i };
              }
            }
          }
          function b() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), i.appendChild(e), e;
          }
          function x(e) {
            var r,
              o,
              t = document.querySelector('style[' + u + '~="' + e.id + '"]');
            if (t) {
              if (s) return d;
              t.parentNode.removeChild(t);
            }
            if (m) {
              var n = c++;
              (t = l || (l = b())),
                (r = S.bind(null, t, n, !1)),
                (o = S.bind(null, t, n, !0));
            } else
              (t = b()),
                (r = y.bind(null, t)),
                (o = function () {
                  t.parentNode.removeChild(t);
                });
            return (
              r(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap
                  )
                    return;
                  r((e = t));
                } else o();
              }
            );
          }
          var h,
            v =
              ((h = []),
              function (e, r) {
                return (h[e] = r), h.filter(Boolean).join('\n');
              });
          function S(e, r, o, t) {
            var n = o ? '' : t.css;
            if (e.styleSheet) e.styleSheet.cssText = v(r, n);
            else {
              var a = document.createTextNode(n),
                i = e.childNodes;
              i[r] && e.removeChild(i[r]),
                i.length ? e.insertBefore(a, i[r]) : e.appendChild(a);
            }
          }
          function y(e, r) {
            var o = r.css,
              t = r.media,
              n = r.sourceMap;
            if (
              (t && e.setAttribute('media', t),
              g.ssrId && e.setAttribute(u, r.id),
              n &&
                ((o += '\n/*# sourceURL=' + n.sources[0] + ' */'),
                (o +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                  ' */')),
              e.styleSheet)
            )
              e.styleSheet.cssText = o;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(o));
            }
          }
        },
      },
      r = {};
    function o(t) {
      var n = r[t];
      if (void 0 !== n) return n.exports;
      var a = (r[t] = { id: t, exports: {} });
      return e[t](a, a.exports, o), a.exports;
    }
    (o.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(r, { a: r }), r;
    }),
      (o.d = function (e, r) {
        for (var t in r)
          o.o(r, t) &&
            !o.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      }),
      (o.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (o.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var t = {};
    return (
      (function () {
        'use strict';
        o.r(t);
        var e = require('@babel/runtime/helpers/assertThisInitialized'),
          r = o.n(e),
          n = require('@babel/runtime/helpers/inheritsLoose'),
          a = o.n(n),
          i = require('react'),
          l = o.n(i),
          c = require('classnames'),
          s = o.n(c);
        const d = i.createContext({
            getPrefixCls: (e, r) => r || (e ? `ant-${e}` : 'ant'),
            iconPrefixCls: 'anticon',
          }),
          { Consumer: g } = d;
        var u = (0, i.createContext)(void 0),
          m = require('rc-pagination/es/locale/en_US'),
          p = o.n(m),
          f = require('rc-picker/es/locale/en_US'),
          b = o.n(f),
          x = {
            placeholder: 'Select time',
            rangePlaceholder: ['Start time', 'End time'],
          },
          h = {
            lang: Object.assign(
              {
                placeholder: 'Select date',
                yearPlaceholder: 'Select year',
                quarterPlaceholder: 'Select quarter',
                monthPlaceholder: 'Select month',
                weekPlaceholder: 'Select week',
                rangePlaceholder: ['Start date', 'End date'],
                rangeYearPlaceholder: ['Start year', 'End year'],
                rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
                rangeMonthPlaceholder: ['Start month', 'End month'],
                rangeWeekPlaceholder: ['Start week', 'End week'],
              },
              b(),
            ),
            timePickerLocale: Object.assign({}, x),
          },
          v = h;
        const S = '${label} is not a valid ${type}';
        var y = {
            locale: 'en',
            Pagination: p(),
            DatePicker: h,
            TimePicker: x,
            Calendar: v,
            global: { placeholder: 'Please select' },
            Table: {
              filterTitle: 'Filter menu',
              filterConfirm: 'OK',
              filterReset: 'Reset',
              filterEmptyText: 'No filters',
              filterCheckall: 'Select all items',
              filterSearchPlaceholder: 'Search in filters',
              emptyText: 'No data',
              selectAll: 'Select current page',
              selectInvert: 'Invert current page',
              selectNone: 'Clear all data',
              selectionAll: 'Select all data',
              sortTitle: 'Sort',
              expand: 'Expand row',
              collapse: 'Collapse row',
              triggerDesc: 'Click to sort descending',
              triggerAsc: 'Click to sort ascending',
              cancelSort: 'Click to cancel sorting',
            },
            Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
            Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
            Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
            Transfer: {
              titles: ['', ''],
              searchPlaceholder: 'Search here',
              itemUnit: 'item',
              itemsUnit: 'items',
              remove: 'Remove',
              selectCurrent: 'Select current page',
              removeCurrent: 'Remove current page',
              selectAll: 'Select all data',
              removeAll: 'Remove all data',
              selectInvert: 'Invert current page',
            },
            Upload: {
              uploading: 'Uploading...',
              removeFile: 'Remove file',
              uploadError: 'Upload error',
              previewFile: 'Preview file',
              downloadFile: 'Download file',
            },
            Empty: { description: 'No data' },
            Icon: { icon: 'icon' },
            Text: {
              edit: 'Edit',
              copy: 'Copy',
              copied: 'Copied',
              expand: 'Expand',
            },
            PageHeader: { back: 'Back' },
            Form: {
              optional: '(optional)',
              defaultValidateMessages: {
                default: 'Field validation error for ${label}',
                required: 'Please enter ${label}',
                enum: '${label} must be one of [${enum}]',
                whitespace: '${label} cannot be a blank character',
                date: {
                  format: '${label} date format is invalid',
                  parse: '${label} cannot be converted to a date',
                  invalid: '${label} is an invalid date',
                },
                types: {
                  string: S,
                  method: S,
                  array: S,
                  object: S,
                  number: S,
                  date: S,
                  boolean: S,
                  integer: S,
                  float: S,
                  regexp: S,
                  email: S,
                  url: S,
                  hex: S,
                },
                string: {
                  len: '${label} must be ${len} characters',
                  min: '${label} must be at least ${min} characters',
                  max: '${label} must be up to ${max} characters',
                  range: '${label} must be between ${min}-${max} characters',
                },
                number: {
                  len: '${label} must be equal to ${len}',
                  min: '${label} must be minimum ${min}',
                  max: '${label} must be maximum ${max}',
                  range: '${label} must be between ${min}-${max}',
                },
                array: {
                  len: 'Must be ${len} ${label}',
                  min: 'At least ${min} ${label}',
                  max: 'At most ${max} ${label}',
                  range: 'The amount of ${label} must be between ${min}-${max}',
                },
                pattern: {
                  mismatch: '${label} does not match the pattern ${pattern}',
                },
              },
            },
            Image: { preview: 'Preview' },
            QRCode: { expired: 'QR code expired', refresh: 'Refresh' },
          },
          C = (e) => {
            const {
                componentName: r = 'global',
                defaultLocale: o,
                children: t,
              } = e,
              n = i.useContext(u);
            return t(
              i.useMemo(() => {
                var e;
                const t = o || y[r],
                  a =
                    null !== (e = null == n ? void 0 : n[r]) && void 0 !== e
                      ? e
                      : {};
                return Object.assign(
                  Object.assign({}, t instanceof Function ? t() : t),
                  a || {},
                );
              }, [r, o, n]),
              i.useMemo(() => {
                const e = n && n.locale;
                return n && n.exist && !e ? y.locale : e;
              }, [n]),
              n,
            );
          },
          E = require('@ctrl/tinycolor'),
          T = require('@ant-design/cssinjs'),
          w = '5.2.0',
          M = require('@ant-design/colors');
        const H = {
          blue: '#1677ff',
          purple: '#722ED1',
          cyan: '#13C2C2',
          green: '#52C41A',
          magenta: '#EB2F96',
          pink: '#eb2f96',
          red: '#F5222D',
          orange: '#FA8C16',
          yellow: '#FADB14',
          volcano: '#FA541C',
          geekblue: '#2F54EB',
          gold: '#FAAD14',
          lime: '#A0D911',
        };
        var z = Object.assign(Object.assign({}, H), {
          colorPrimary: '#1677ff',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
          colorInfo: '#1677ff',
          colorTextBase: '',
          colorBgBase: '',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
          fontFamilyCode:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 14,
          lineWidth: 1,
          lineType: 'solid',
          motionUnit: 0.1,
          motionBase: 0,
          motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
          motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
          motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
          motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
          motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
          borderRadius: 6,
          sizeUnit: 4,
          sizeStep: 4,
          sizePopupArrow: 16,
          controlHeight: 32,
          zIndexBase: 0,
          zIndexPopupBase: 1e3,
          opacityImage: 1,
          wireframe: !1,
        });
        const B = (e, r) => new E.TinyColor(e).setAlpha(r).toRgbString(),
          O = (e, r) => new E.TinyColor(e).darken(r).toHexString(),
          P = (e) => {
            const r = (0, M.generate)(e);
            return {
              1: r[0],
              2: r[1],
              3: r[2],
              4: r[3],
              5: r[4],
              6: r[5],
              7: r[6],
              8: r[4],
              9: r[5],
              10: r[6],
            };
          },
          $ = (e, r) => {
            const o = e || '#fff',
              t = r || '#000';
            return {
              colorBgBase: o,
              colorTextBase: t,
              colorText: B(t, 0.88),
              colorTextSecondary: B(t, 0.65),
              colorTextTertiary: B(t, 0.45),
              colorTextQuaternary: B(t, 0.25),
              colorFill: B(t, 0.15),
              colorFillSecondary: B(t, 0.06),
              colorFillTertiary: B(t, 0.04),
              colorFillQuaternary: B(t, 0.02),
              colorBgLayout: O(o, 4),
              colorBgContainer: O(o, 0),
              colorBgElevated: O(o, 0),
              colorBgSpotlight: B(t, 0.85),
              colorBorder: O(o, 15),
              colorBorderSecondary: O(o, 6),
            };
          };
        function I(e) {
          return e >= 0 && e <= 255;
        }
        var k = function (e, r) {
            const { r: o, g: t, b: n, a: a } = new E.TinyColor(e).toRgb();
            if (a < 1) return e;
            const { r: i, g: l, b: c } = new E.TinyColor(r).toRgb();
            for (let e = 0.01; e <= 1; e += 0.01) {
              const r = Math.round((o - i * (1 - e)) / e),
                a = Math.round((t - l * (1 - e)) / e),
                s = Math.round((n - c * (1 - e)) / e);
              if (I(r) && I(a) && I(s))
                return new E.TinyColor({
                  r: r,
                  g: a,
                  b: s,
                  a: Math.round(100 * e) / 100,
                }).toRgbString();
            }
            return new E.TinyColor({ r: o, g: t, b: n, a: 1 }).toRgbString();
          },
          F = function (e, r) {
            var o = {};
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) &&
                r.indexOf(t) < 0 &&
                (o[t] = e[t]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var n = 0;
              for (t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                r.indexOf(t[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, t[n]) &&
                  (o[t[n]] = e[t[n]]);
            }
            return o;
          };
        function L(e) {
          const { override: r } = e,
            o = F(e, ['override']),
            t = Object.assign({}, r);
          Object.keys(z).forEach((e) => {
            delete t[e];
          });
          const n = Object.assign(Object.assign({}, o), t);
          return Object.assign(
            Object.assign(Object.assign({}, n), {
              colorLink: n.colorInfoText,
              colorLinkHover: n.colorInfoHover,
              colorLinkActive: n.colorInfoActive,
              colorFillContent: n.colorFillSecondary,
              colorFillContentHover: n.colorFill,
              colorFillAlter: n.colorFillQuaternary,
              colorBgContainerDisabled: n.colorFillTertiary,
              colorBorderBg: n.colorBgContainer,
              colorSplit: k(n.colorBorderSecondary, n.colorBgContainer),
              colorTextPlaceholder: n.colorTextQuaternary,
              colorTextDisabled: n.colorTextQuaternary,
              colorTextHeading: n.colorText,
              colorTextLabel: n.colorTextSecondary,
              colorTextDescription: n.colorTextTertiary,
              colorTextLightSolid: n.colorWhite,
              colorHighlight: n.colorError,
              colorBgTextHover: n.colorFillSecondary,
              colorBgTextActive: n.colorFill,
              colorIcon: n.colorTextTertiary,
              colorIconHover: n.colorText,
              colorErrorOutline: k(n.colorErrorBg, n.colorBgContainer),
              colorWarningOutline: k(n.colorWarningBg, n.colorBgContainer),
              fontSizeIcon: n.fontSizeSM,
              lineWidth: n.lineWidth,
              controlOutlineWidth: 2 * n.lineWidth,
              controlInteractiveSize: n.controlHeight / 2,
              controlItemBgHover: n.colorFillTertiary,
              controlItemBgActive: n.colorPrimaryBg,
              controlItemBgActiveHover: n.colorPrimaryBgHover,
              controlItemBgActiveDisabled: n.colorFill,
              controlTmpOutline: n.colorFillQuaternary,
              controlOutline: k(n.colorPrimaryBg, n.colorBgContainer),
              lineType: n.lineType,
              borderRadius: n.borderRadius,
              borderRadiusXS: n.borderRadiusXS,
              borderRadiusSM: n.borderRadiusSM,
              borderRadiusLG: n.borderRadiusLG,
              fontWeightStrong: 600,
              opacityLoading: 0.65,
              linkDecoration: 'none',
              linkHoverDecoration: 'none',
              linkFocusDecoration: 'none',
              controlPaddingHorizontal: 12,
              controlPaddingHorizontalSM: 8,
              paddingXXS: n.sizeXXS,
              paddingXS: n.sizeXS,
              paddingSM: n.sizeSM,
              padding: n.size,
              paddingMD: n.sizeMD,
              paddingLG: n.sizeLG,
              paddingXL: n.sizeXL,
              paddingContentHorizontalLG: n.sizeLG,
              paddingContentVerticalLG: n.sizeMS,
              paddingContentHorizontal: n.sizeMS,
              paddingContentVertical: n.sizeSM,
              paddingContentHorizontalSM: n.size,
              paddingContentVerticalSM: n.sizeXS,
              marginXXS: n.sizeXXS,
              marginXS: n.sizeXS,
              marginSM: n.sizeSM,
              margin: n.size,
              marginMD: n.sizeMD,
              marginLG: n.sizeLG,
              marginXL: n.sizeXL,
              marginXXL: n.sizeXXL,
              boxShadow:
                '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
              boxShadowSecondary:
                '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
              boxShadowTertiary:
                '\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ',
              screenXS: 480,
              screenXSMin: 480,
              screenXSMax: 575,
              screenSM: 576,
              screenSMMin: 576,
              screenSMMax: 767,
              screenMD: 768,
              screenMDMin: 768,
              screenMDMax: 991,
              screenLG: 992,
              screenLGMin: 992,
              screenLGMax: 1199,
              screenXL: 1200,
              screenXLMin: 1200,
              screenXLMax: 1599,
              screenXXL: 1600,
              screenXXLMin: 1600,
              boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
              boxShadowCard: `\n      0 1px 2px -2px ${new E.TinyColor(
                'rgba(0, 0, 0, 0.16)',
              ).toRgbString()},\n      0 3px 6px 0 ${new E.TinyColor(
                'rgba(0, 0, 0, 0.12)',
              ).toRgbString()},\n      0 5px 12px 4px ${new E.TinyColor(
                'rgba(0, 0, 0, 0.09)',
              ).toRgbString()}\n    `,
              boxShadowDrawerRight:
                '\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ',
              boxShadowDrawerLeft:
                '\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ',
              boxShadowDrawerUp:
                '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
              boxShadowDrawerDown:
                '\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
              boxShadowTabsOverflowLeft:
                'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
              boxShadowTabsOverflowRight:
                'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
              boxShadowTabsOverflowTop:
                'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
              boxShadowTabsOverflowBottom:
                'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
            }),
            t,
          );
        }
        const j = (0, T.createTheme)(function (e) {
            const r = Object.keys(H)
              .map((r) => {
                const o = (0, M.generate)(e[r]);
                return new Array(10)
                  .fill(1)
                  .reduce((e, t, n) => ((e[`${r}-${n + 1}`] = o[n]), e), {});
              })
              .reduce((e, r) => Object.assign(Object.assign({}, e), r), {});
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(Object.assign({}, e), r),
                      (function (e, r) {
                        let {
                          generateColorPalettes: o,
                          generateNeutralColorPalettes: t,
                        } = r;
                        const {
                            colorSuccess: n,
                            colorWarning: a,
                            colorError: i,
                            colorInfo: l,
                            colorPrimary: c,
                            colorBgBase: s,
                            colorTextBase: d,
                          } = e,
                          g = o(c),
                          u = o(n),
                          m = o(a),
                          p = o(i),
                          f = o(l),
                          b = t(s, d);
                        return Object.assign(Object.assign({}, b), {
                          colorPrimaryBg: g[1],
                          colorPrimaryBgHover: g[2],
                          colorPrimaryBorder: g[3],
                          colorPrimaryBorderHover: g[4],
                          colorPrimaryHover: g[5],
                          colorPrimary: g[6],
                          colorPrimaryActive: g[7],
                          colorPrimaryTextHover: g[8],
                          colorPrimaryText: g[9],
                          colorPrimaryTextActive: g[10],
                          colorSuccessBg: u[1],
                          colorSuccessBgHover: u[2],
                          colorSuccessBorder: u[3],
                          colorSuccessBorderHover: u[4],
                          colorSuccessHover: u[4],
                          colorSuccess: u[6],
                          colorSuccessActive: u[7],
                          colorSuccessTextHover: u[8],
                          colorSuccessText: u[9],
                          colorSuccessTextActive: u[10],
                          colorErrorBg: p[1],
                          colorErrorBgHover: p[2],
                          colorErrorBorder: p[3],
                          colorErrorBorderHover: p[4],
                          colorErrorHover: p[5],
                          colorError: p[6],
                          colorErrorActive: p[7],
                          colorErrorTextHover: p[8],
                          colorErrorText: p[9],
                          colorErrorTextActive: p[10],
                          colorWarningBg: m[1],
                          colorWarningBgHover: m[2],
                          colorWarningBorder: m[3],
                          colorWarningBorderHover: m[4],
                          colorWarningHover: m[4],
                          colorWarning: m[6],
                          colorWarningActive: m[7],
                          colorWarningTextHover: m[8],
                          colorWarningText: m[9],
                          colorWarningTextActive: m[10],
                          colorInfoBg: f[1],
                          colorInfoBgHover: f[2],
                          colorInfoBorder: f[3],
                          colorInfoBorderHover: f[4],
                          colorInfoHover: f[4],
                          colorInfo: f[6],
                          colorInfoActive: f[7],
                          colorInfoTextHover: f[8],
                          colorInfoText: f[9],
                          colorInfoTextActive: f[10],
                          colorBgMask: new E.TinyColor('#000')
                            .setAlpha(0.45)
                            .toRgbString(),
                          colorWhite: '#fff',
                        });
                      })(e, {
                        generateColorPalettes: P,
                        generateNeutralColorPalettes: $,
                      }),
                    ),
                    ((e) => {
                      const r = (function (e) {
                          const r = new Array(10).fill(null).map((r, o) => {
                            const t = o - 1,
                              n = e * Math.pow(2.71828, t / 5),
                              a = o > 1 ? Math.floor(n) : Math.ceil(n);
                            return 2 * Math.floor(a / 2);
                          });
                          return (
                            (r[1] = e),
                            r.map((e) => ({ size: e, lineHeight: (e + 8) / e }))
                          );
                        })(e),
                        o = r.map((e) => e.size),
                        t = r.map((e) => e.lineHeight);
                      return {
                        fontSizeSM: o[0],
                        fontSize: o[1],
                        fontSizeLG: o[2],
                        fontSizeXL: o[3],
                        fontSizeHeading1: o[6],
                        fontSizeHeading2: o[5],
                        fontSizeHeading3: o[4],
                        fontSizeHeading4: o[3],
                        fontSizeHeading5: o[2],
                        lineHeight: t[1],
                        lineHeightLG: t[2],
                        lineHeightSM: t[0],
                        lineHeightHeading1: t[6],
                        lineHeightHeading2: t[5],
                        lineHeightHeading3: t[4],
                        lineHeightHeading4: t[3],
                        lineHeightHeading5: t[2],
                      };
                    })(e.fontSize),
                  ),
                  (function (e) {
                    const { sizeUnit: r, sizeStep: o } = e;
                    return {
                      sizeXXL: r * (o + 8),
                      sizeXL: r * (o + 4),
                      sizeLG: r * (o + 2),
                      sizeMD: r * (o + 1),
                      sizeMS: r * o,
                      size: r * o,
                      sizeSM: r * (o - 1),
                      sizeXS: r * (o - 2),
                      sizeXXS: r * (o - 3),
                    };
                  })(e),
                ),
                ((e) => {
                  const { controlHeight: r } = e;
                  return {
                    controlHeightSM: 0.75 * r,
                    controlHeightXS: 0.5 * r,
                    controlHeightLG: 1.25 * r,
                  };
                })(e),
              ),
              (function (e) {
                const {
                  motionUnit: r,
                  motionBase: o,
                  borderRadius: t,
                  lineWidth: n,
                } = e;
                return Object.assign(
                  {
                    motionDurationFast: `${(o + r).toFixed(1)}s`,
                    motionDurationMid: `${(o + 2 * r).toFixed(1)}s`,
                    motionDurationSlow: `${(o + 3 * r).toFixed(1)}s`,
                    lineWidthBold: n + 1,
                  },
                  ((e) => {
                    let r = e,
                      o = e,
                      t = e,
                      n = e;
                    return (
                      e < 6 && e >= 5
                        ? (r = e + 1)
                        : e < 16 && e >= 6
                        ? (r = e + 2)
                        : e >= 16 && (r = 16),
                      e < 7 && e >= 5
                        ? (o = 4)
                        : e < 8 && e >= 7
                        ? (o = 5)
                        : e < 14 && e >= 8
                        ? (o = 6)
                        : e < 16 && e >= 14
                        ? (o = 7)
                        : e >= 16 && (o = 8),
                      e < 6 && e >= 2 ? (t = 1) : e >= 6 && (t = 2),
                      e > 4 && e < 8 ? (n = 4) : e >= 8 && (n = 6),
                      {
                        borderRadius: e > 16 ? 16 : e,
                        borderRadiusXS: t,
                        borderRadiusSM: o,
                        borderRadiusLG: r,
                        borderRadiusOuter: n,
                      }
                    );
                  })(t),
                );
              })(e),
            );
          }),
          D = { token: z, hashed: !0 },
          A = l().createContext(D);
        function R() {
          const {
              token: e,
              hashed: r,
              theme: o,
              components: t,
            } = l().useContext(A),
            n = `${w}-${r || ''}`,
            a = o || j,
            [i, c] = (0, T.useCacheToken)(a, [z, e], {
              salt: n,
              override: Object.assign({ override: e }, t),
              formatToken: L,
            });
          return [a, i, r ? c : ''];
        }
        var X = () => {
            const [, e] = R();
            let r = {};
            return (
              new E.TinyColor(e.colorBgBase).toHsl().l < 0.5 &&
                (r = { opacity: 0.65 }),
              i.createElement(
                'svg',
                {
                  style: r,
                  width: '184',
                  height: '152',
                  viewBox: '0 0 184 152',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                i.createElement(
                  'g',
                  { fill: 'none', fillRule: 'evenodd' },
                  i.createElement(
                    'g',
                    { transform: 'translate(24 31.67)' },
                    i.createElement('ellipse', {
                      fillOpacity: '.8',
                      fill: '#F5F5F7',
                      cx: '67.797',
                      cy: '106.89',
                      rx: '67.797',
                      ry: '12.668',
                    }),
                    i.createElement('path', {
                      d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                      fill: '#AEB8C2',
                    }),
                    i.createElement('path', {
                      d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                      fill: 'url(#linearGradient-1)',
                      transform: 'translate(13.56)',
                    }),
                    i.createElement('path', {
                      d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                      fill: '#F5F5F7',
                    }),
                    i.createElement('path', {
                      d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                      fill: '#DCE0E6',
                    }),
                  ),
                  i.createElement('path', {
                    d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                    fill: '#DCE0E6',
                  }),
                  i.createElement(
                    'g',
                    { transform: 'translate(149.65 15.383)', fill: '#FFF' },
                    i.createElement('ellipse', {
                      cx: '20.654',
                      cy: '3.167',
                      rx: '2.849',
                      ry: '2.815',
                    }),
                    i.createElement('path', {
                      d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
                    }),
                  ),
                ),
              )
            );
          },
          N = () => {
            const [, e] = R(),
              {
                colorFill: r,
                colorFillTertiary: o,
                colorFillQuaternary: t,
                colorBgContainer: n,
              } = e,
              {
                borderColor: a,
                shadowColor: l,
                contentColor: c,
              } = (0, i.useMemo)(
                () => ({
                  borderColor: new E.TinyColor(r).onBackground(n).toHexString(),
                  shadowColor: new E.TinyColor(o).onBackground(n).toHexString(),
                  contentColor: new E.TinyColor(t)
                    .onBackground(n)
                    .toHexString(),
                }),
                [r, o, t, n],
              );
            return i.createElement(
              'svg',
              {
                width: '64',
                height: '41',
                viewBox: '0 0 64 41',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              i.createElement(
                'g',
                {
                  transform: 'translate(0 1)',
                  fill: 'none',
                  fillRule: 'evenodd',
                },
                i.createElement('ellipse', {
                  fill: l,
                  cx: '32',
                  cy: '33',
                  rx: '32',
                  ry: '7',
                }),
                i.createElement(
                  'g',
                  { fillRule: 'nonzero', stroke: a },
                  i.createElement('path', {
                    d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                  }),
                  i.createElement('path', {
                    d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                    fill: c,
                  }),
                ),
              ),
            );
          };
        const W = (e) => ({
            a: {
              color: e.colorLink,
              textDecoration: e.linkDecoration,
              backgroundColor: 'transparent',
              outline: 'none',
              cursor: 'pointer',
              transition: `color ${e.motionDurationSlow}`,
              '-webkit-text-decoration-skip': 'objects',
              '&:hover': { color: e.colorLinkHover },
              '&:active': { color: e.colorLinkActive },
              '&:active,\n  &:hover': {
                textDecoration: e.linkHoverDecoration,
                outline: 0,
              },
              '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
              '&[disabled]': {
                color: e.colorTextDisabled,
                cursor: 'not-allowed',
              },
            },
          }),
          G = (e, r) => {
            const { fontFamily: o, fontSize: t } = e,
              n = `[class^="${r}"], [class*=" ${r}"]`;
            return {
              [n]: {
                fontFamily: o,
                fontSize: t,
                boxSizing: 'border-box',
                '&::before, &::after': { boxSizing: 'border-box' },
                [n]: {
                  boxSizing: 'border-box',
                  '&::before, &::after': { boxSizing: 'border-box' },
                },
              },
            };
          },
          U = 'undefined' != typeof CSSINJS_STATISTIC;
        let _ = !0;
        function q() {
          for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
            r[o] = arguments[o];
          if (!U) return Object.assign.apply(Object, [{}].concat(r));
          _ = !1;
          const t = {};
          return (
            r.forEach((e) => {
              Object.keys(e).forEach((r) => {
                Object.defineProperty(t, r, {
                  configurable: !0,
                  enumerable: !0,
                  get: () => e[r],
                });
              });
            }),
            (_ = !0),
            t
          );
        }
        const V = {};
        function Q() {}
        const K = (e) => {
          const {
            componentCls: r,
            margin: o,
            marginXS: t,
            marginXL: n,
            fontSize: a,
            lineHeight: i,
          } = e;
          return {
            [r]: {
              marginInline: t,
              fontSize: a,
              lineHeight: i,
              textAlign: 'center',
              [`${r}-image`]: {
                height: e.emptyImgHeight,
                marginBottom: t,
                opacity: e.opacityImage,
                img: { height: '100%' },
                svg: { height: '100%', margin: 'auto' },
              },
              [`${r}-description`]: { color: e.colorText },
              [`${r}-footer`]: { marginTop: o },
              '&-normal': {
                marginBlock: n,
                color: e.colorTextDisabled,
                [`${r}-description`]: { color: e.colorTextDisabled },
                [`${r}-image`]: { height: e.emptyImgHeightMD },
              },
              '&-small': {
                marginBlock: t,
                color: e.colorTextDisabled,
                [`${r}-image`]: { height: e.emptyImgHeightSM },
              },
            },
          };
        };
        var J,
          Z,
          Y =
            ((J = 'Empty'),
            (Z = (e) => {
              const { componentCls: r, controlHeightLG: o } = e,
                t = q(e, {
                  emptyImgCls: `${r}-img`,
                  emptyImgHeight: 2.5 * o,
                  emptyImgHeightMD: o,
                  emptyImgHeightSM: 0.875 * o,
                });
              return [K(t)];
            }),
            (e) => {
              const [r, o, t] = R(),
                { getPrefixCls: n, iconPrefixCls: a } = (0, i.useContext)(d),
                l = n();
              return (
                (0, T.useStyleRegister)(
                  { theme: r, token: o, hashId: t, path: ['Shared', l] },
                  () => [{ '&': W(o) }],
                ),
                [
                  (0, T.useStyleRegister)(
                    { theme: r, token: o, hashId: t, path: [J, e, a] },
                    () => {
                      const { token: r, flush: t } = (function (e) {
                          let r,
                            o = e,
                            t = Q;
                          return (
                            U &&
                              ((r = new Set()),
                              (o = new Proxy(e, {
                                get(e, o) {
                                  return _ && r.add(o), e[o];
                                },
                              })),
                              (t = (e, o) => {
                                V[e] = { global: Array.from(r), component: o };
                              })),
                            { token: o, keys: r, flush: t }
                          );
                        })(o),
                        n = Object.assign(Object.assign({}, undefined), o[J]),
                        i = q(
                          r,
                          {
                            componentCls: `.${e}`,
                            prefixCls: e,
                            iconCls: `.${a}`,
                            antCls: `.${l}`,
                          },
                          n,
                        ),
                        c = Z(i, o[J]);
                      return t(J, n), [G(o, e), c];
                    },
                  ),
                  t,
                ]
              );
            });
        const ee = i.createElement(X, null),
          re = i.createElement(N, null),
          oe = (e) => {
            var {
                className: r,
                rootClassName: o,
                prefixCls: t,
                image: n = ee,
                description: a,
                children: l,
                imageStyle: c,
              } = e,
              g = (function (e, r) {
                var o = {};
                for (var t in e)
                  Object.prototype.hasOwnProperty.call(e, t) &&
                    r.indexOf(t) < 0 &&
                    (o[t] = e[t]);
                if (
                  null != e &&
                  'function' == typeof Object.getOwnPropertySymbols
                ) {
                  var n = 0;
                  for (t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                    r.indexOf(t[n]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, t[n]) &&
                      (o[t[n]] = e[t[n]]);
                }
                return o;
              })(e, [
                'className',
                'rootClassName',
                'prefixCls',
                'image',
                'description',
                'children',
                'imageStyle',
              ]);
            const { getPrefixCls: u, direction: m } = i.useContext(d),
              p = u('empty', t),
              [f, b] = Y(p);
            return f(
              i.createElement(C, { componentName: 'Empty' }, (e) => {
                const t = void 0 !== a ? a : e.description,
                  d = 'string' == typeof t ? t : 'empty';
                let u = null;
                return (
                  (u =
                    'string' == typeof n
                      ? i.createElement('img', { alt: d, src: n })
                      : n),
                  i.createElement(
                    'div',
                    Object.assign(
                      {
                        className: s()(
                          b,
                          p,
                          {
                            [`${p}-normal`]: n === re,
                            [`${p}-rtl`]: 'rtl' === m,
                          },
                          r,
                          o,
                        ),
                      },
                      g,
                    ),
                    i.createElement(
                      'div',
                      { className: `${p}-image`, style: c },
                      u,
                    ),
                    t &&
                      i.createElement(
                        'div',
                        { className: `${p}-description` },
                        t,
                      ),
                    l &&
                      i.createElement('div', { className: `${p}-footer` }, l),
                  )
                );
              }),
            );
          };
        (oe.PRESENTED_IMAGE_DEFAULT = ee), (oe.PRESENTED_IMAGE_SIMPLE = re);
        var te = oe,
          ne = (require('antd/less/common.less'), o(325), o(940)),
          ae = o.n(ne),
          ie = (function (e) {
            function o() {
              var o;
              return (
                ((o = e.call(this) || this).agreeDataFormat =
                  o.agreeDataFormat.bind(r()(o))),
                o
              );
            }
            a()(o, e);
            var t = o.prototype;
            return (
              (t.agreeDataFormat = function (e) {
                return e && e <= 9999
                  ? e
                  : e && e > 9999
                  ? Math.floor(e / 1e3) / 10 + 'w'
                  : void 0;
              }),
              (t.render = function () {
                console.log('myStyle:', ae());
                var e = this.props,
                  r = e.title,
                  o = (e.backgroundImage, e.img_count),
                  t = e.comment_count;
                return i.createElement(
                  'div',
                  { className: 'news-card ' + ae().cssTest1 },
                  i.createElement(
                    'div',
                    { className: 'news-title' },
                    r ||
                      'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                  ),
                  i.createElement(
                    'div',
                    { className: 'item-imgbox' },
                    i.createElement('div', { className: 'news-img' }),
                    o > 0 &&
                      i.createElement('div', { className: 'img-count' }, o),
                  ),
                  i.createElement(
                    'div',
                    { className: 'news-info' },
                    i.createElement(
                      'div',
                      { className: 'left media-mark' },
                      '爱速搭 · 低代码平台',
                    ),
                    t &&
                      t > 0 &&
                      i.createElement(
                        'div',
                        { className: 'cmt-num right' },
                        this.agreeDataFormat(t),
                        '评',
                      ),
                  ),
                  i.createElement(te, {
                    image: te.PRESENTED_IMAGE_SIMPLE,
                    description: i.createElement(i.Fragment, null, '暂无内容'),
                  }),
                );
              }),
              o
            );
          })(i.PureComponent);
        (0, require('amis-widget').registerRendererByType)(ie, {
          type: 'react-info-card',
          usage: 'renderer',
          weight: 99,
          framework: 'react',
        });
      })(),
      t
    );
  })();
});
