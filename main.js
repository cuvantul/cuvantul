(this.wordle = this.wordle || {}),
  (this.wordle.bundle = (function (e) {
    'use strict';

    function a(e) {
      return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }

    function s(e, a) {
      if (!(e instanceof a))
        throw new TypeError('Cannot call a class as a function');
    }

    function t(e, a) {
      for (var s = 0; s < a.length; s++) {
        var t = a[s];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          'value' in t && (t.writable = !0),
          Object.defineProperty(e, t.key, t);
      }
    }

    function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e;
    }

    function n(e, a, s) {
      return (
        a in e
          ? Object.defineProperty(e, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = s),
        e
      );
    }

    function r(e, a) {
      if ('function' != typeof a && null !== a)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (e.prototype = Object.create(a && a.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0,
        },
      })),
        a && l(e, a);
    }

    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }

    function l(e, a) {
      return (l =
        Object.setPrototypeOf ||
        function (e, a) {
          return (e.__proto__ = a), e;
        })(e, a);
    }

    function d() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }

    function u(e, a, s) {
      return (u = d()
        ? Reflect.construct
        : function (e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t))();
            return s && l(o, s.prototype), o;
          }).apply(null, arguments);
    }

    function c(e) {
      var a = 'function' == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (
          null === e ||
          ((s = e), -1 === Function.toString.call(s).indexOf('[native code]'))
        )
          return e;
        var s;
        if ('function' != typeof e)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        if (void 0 !== a) {
          if (a.has(e)) return a.get(e);
          a.set(e, t);
        }

        function t() {
          return u(e, arguments, i(this).constructor);
        }
        return (
          (t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          l(t, e)
        );
      })(e);
    }

    function p(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }

    function m(e, a) {
      return !a || ('object' != typeof a && 'function' != typeof a) ? p(e) : a;
    }

    function h(e) {
      var a = d();
      return function () {
        var s,
          t = i(e);
        if (a) {
          var o = i(this).constructor;
          s = Reflect.construct(t, arguments, o);
        } else s = t.apply(this, arguments);
        return m(this, s);
      };
    }

    function y(e, a) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, a) {
          var s =
            null == e
              ? null
              : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                e['@@iterator'];
          if (null == s) return;
          var t,
            o,
            n = [],
            r = !0,
            i = !1;
          try {
            for (
              s = s.call(e);
              !(r = (t = s.next()).done) &&
              (n.push(t.value), !a || n.length !== a);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, a) ||
        b(e, a) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        })()
      );
    }

    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return f(e);
        })(e) ||
        (function (e) {
          if (
            ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e['@@iterator']
          )
            return Array.from(e);
        })(e) ||
        b(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        })()
      );
    }

    function b(e, a) {
      if (e) {
        if ('string' == typeof e) return f(e, a);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === s && e.constructor && (s = e.constructor.name),
          'Map' === s || 'Set' === s
            ? Array.from(e)
            : 'Arguments' === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            ? f(e, a)
            : void 0
        );
      }
    }

    function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t;
    }
    var k = document.createElement('template');
    k.innerHTML =
      "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), '_letter', ''),
          n(p(e), '_state', 'empty'),
          n(p(e), '_animation', 'idle'),
          n(p(e), '_last', !1),
          n(p(e), '_reveal', !1),
          e.attachShadow({
            mode: 'open',
          }),
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: 'last',
              set: function (e) {
                this._last = e;
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                  (this.$tile = this.shadowRoot.querySelector('.tile')),
                  this.$tile.addEventListener('animationend', function (a) {
                    'PopIn' === a.animationName && (e._animation = 'idle'),
                      'FlipIn' === a.animationName &&
                        ((e.$tile.dataset.state = e._state),
                        (e._animation = 'flip-out')),
                      'FlipOut' === a.animationName &&
                        ((e._animation = 'idle'),
                        e._last &&
                          e.dispatchEvent(
                            new CustomEvent('game-last-tile-revealed-in-row', {
                              bubbles: !0,
                              composed: !0,
                            }),
                          )),
                      e._render();
                  }),
                  this._render();
              },
            },
            {
              key: 'attributeChangedCallback',
              value: function (e, a, s) {
                switch (e) {
                  case 'letter':
                    if (s === a) break;
                    var t = 'null' === s ? '' : s;
                    (this._letter = t),
                      (this._state = t ? 'tbd' : 'empty'),
                      (this._animation = t ? 'pop' : 'idle');
                    break;
                  case 'evaluation':
                    if (!s) break;
                    this._state = s;
                    break;
                  case 'reveal':
                    (this._animation = 'flip-in'), (this._reveal = !0);
                }
                this._render();
              },
            },
            {
              key: '_render',
              value: function () {
                this.$tile &&
                  ((this.$tile.textContent = this._letter),
                  ['empty', 'tbd'].includes(this._state) &&
                    (this.$tile.dataset.state = this._state),
                  (['empty', 'tbd'].includes(this._state) || this._reveal) &&
                    this.$tile.dataset.animation != this._animation &&
                    (this.$tile.dataset.animation = this._animation));
              },
            },
          ],
          [
            {
              key: 'observedAttributes',
              get: function () {
                return ['letter', 'evaluation', 'reveal'];
              },
            },
          ],
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-tile', v);
    var w = document.createElement('template');
    w.innerHTML =
      '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({
            mode: 'open',
          }),
          (e._letters = ''),
          (e._evaluation = []),
          e._length,
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: 'evaluation',
              get: function () {
                return this._evaluation;
              },
              set: function (e) {
                var a = this;
                (this._evaluation = e),
                  this.$tiles &&
                    this.$tiles.forEach(function (e, s) {
                      e.setAttribute('evaluation', a._evaluation[s]),
                        setTimeout(function () {
                          e.setAttribute('reveal', '');
                        }, 300 * s);
                    });
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                  (this.$row = this.shadowRoot.querySelector('.row'));
                for (
                  var a = function (a) {
                      var s = document.createElement('game-tile'),
                        t = e._letters[a];
                      (t && s.setAttribute('letter', t), e._evaluation[a]) &&
                        (s.setAttribute('evaluation', e._evaluation[a]),
                        setTimeout(function () {
                          s.setAttribute('reveal', '');
                        }, 100 * a));
                      a === e._length - 1 && (s.last = !0),
                        e.$row.appendChild(s);
                    },
                    s = 0;
                  s < this._length;
                  s++
                )
                  a(s);
                (this.$tiles = this.shadowRoot.querySelectorAll('game-tile')),
                  this.addEventListener('animationend', function (a) {
                    'Shake' === a.animationName && e.removeAttribute('invalid');
                  });
              },
            },
            {
              key: 'attributeChangedCallback',
              value: function (e, a, s) {
                switch (e) {
                  case 'letters':
                    this._letters = s || '';
                    break;
                  case 'length':
                    this._length = parseInt(s, 10);
                    break;
                  case 'win':
                    if (null === s) {
                      this.$tiles.forEach(function (e) {
                        e.classList.remove('win');
                      });
                      break;
                    }
                    this.$tiles.forEach(function (e, a) {
                      e.classList.add('win'),
                        (e.style.animationDelay = ''.concat(100 * a, 'ms'));
                    });
                }
                this._render();
              },
            },
            {
              key: '_render',
              value: function () {
                var e = this;
                this.$row &&
                  this.$tiles.forEach(function (a, s) {
                    var t = e._letters[s];
                    t
                      ? a.setAttribute('letter', t)
                      : a.removeAttribute('letter');
                  });
              },
            },
          ],
          [
            {
              key: 'observedAttributes',
              get: function () {
                return ['letters', 'length', 'invalid', 'win'];
              },
            },
          ],
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-row', x);
    var z = document.createElement('template');
    z.innerHTML = '\n  <slot></slot>\n';
    var j = 'darkTheme',
      S = 'colorBlindTheme',
      _ = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), 'isDarkTheme', !1),
            n(p(e), 'isColorBlindTheme', !1),
            e.attachShadow({
              mode: 'open',
            });
          var o = JSON.parse(window.localStorage.getItem(j)),
            r = window.matchMedia('(prefers-color-scheme: dark)').matches,
            i = JSON.parse(window.localStorage.getItem(S));
          return (
            !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            (!0 !== i && !1 !== i) || e.setColorBlindTheme(i),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'setDarkTheme',
              value: function (e) {
                var a = document.querySelector('body');
                e && !a.classList.contains('nightmode')
                  ? a.classList.add('nightmode')
                  : a.classList.remove('nightmode'),
                  (this.isDarkTheme = e),
                  window.localStorage.setItem(j, JSON.stringify(e));
              },
            },
            {
              key: 'setColorBlindTheme',
              value: function (e) {
                var a = document.querySelector('body');
                e && !a.classList.contains('colorblind')
                  ? a.classList.add('colorblind')
                  : a.classList.remove('colorblind'),
                  (this.isColorBlindTheme = e),
                  window.localStorage.setItem(S, JSON.stringify(e));
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                  this.shadowRoot.addEventListener(
                    'game-setting-change',
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked;
                      switch (t) {
                        case 'dark-theme':
                          return void e.setDarkTheme(o);
                        case 'color-blind-theme':
                          return void e.setColorBlindTheme(o);
                      }
                    },
                  );
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));

    function q(e, a) {
      return e === a || (e != e && a != a);
    }

    function E(e, a) {
      for (var s = e.length; s--; ) if (q(e[s][0], a)) return s;
      return -1;
    }
    customElements.define('game-theme-manager', _);
    var A = Array.prototype.splice;

    function C(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (C.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
      (C.prototype.delete = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return (
          !(s < 0) &&
          (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
        );
      }),
      (C.prototype.get = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return s < 0 ? void 0 : a[s][1];
      }),
      (C.prototype.has = function (e) {
        return E(this.__data__, e) > -1;
      }),
      (C.prototype.set = function (e, a) {
        var s = this.__data__,
          t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : (s[t][1] = a), this;
      });
    var L =
        'object' == ('undefined' == typeof global ? 'undefined' : a(global)) &&
        global &&
        global.Object === Object &&
        global,
      T =
        'object' == ('undefined' == typeof self ? 'undefined' : a(self)) &&
        self &&
        self.Object === Object &&
        self,
      I = L || T || Function('return this')(),
      M = I.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      $ = O.toString,
      P = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;

    function D(e) {
      return null == e
        ? void 0 === e
          ? '[object Undefined]'
          : '[object Null]'
        : N && N in Object(e)
        ? (function (e) {
            var a = R.call(e, P),
              s = e[P];
            try {
              e[P] = void 0;
              var t = !0;
            } catch (e) {}
            var o = $.call(e);
            return t && (a ? (e[P] = s) : delete e[P]), o;
          })(e)
        : (function (e) {
            return H.call(e);
          })(e);
    }

    function G(e) {
      var s = a(e);
      return null != e && ('object' == s || 'function' == s);
    }

    function B(e) {
      if (!G(e)) return !1;
      var a = D(e);
      return (
        '[object Function]' == a ||
        '[object GeneratorFunction]' == a ||
        '[object AsyncFunction]' == a ||
        '[object Proxy]' == a
      );
    }
    var F,
      W = I['__core-js_shared__'],
      Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + F
        : '';
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      V = Object.prototype,
      K = X.toString,
      Q = V.hasOwnProperty,
      Z = RegExp(
        '^' +
          K.call(Q)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?',
            ) +
          '$',
      );

    function ee(e) {
      return (
        !(!G(e) || ((a = e), Y && Y in a)) &&
        (B(e) ? Z : U).test(
          (function (e) {
            if (null != e) {
              try {
                return J.call(e);
              } catch (e) {}
              try {
                return e + '';
              } catch (e) {}
            }
            return '';
          })(e),
        )
      );
      var a;
    }

    function ae(e, a) {
      var s = (function (e, a) {
        return null == e ? void 0 : e[a];
      })(e, a);
      return ee(s) ? s : void 0;
    }
    var se = ae(I, 'Map'),
      te = ae(Object, 'create');
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;

    function re(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }

    function ie(e, s) {
      var t,
        o,
        n = e.__data__;
      return (
        'string' == (o = a((t = s))) ||
        'number' == o ||
        'symbol' == o ||
        'boolean' == o
          ? '__proto__' !== t
          : null === t
      )
        ? n['string' == typeof s ? 'string' : 'hash']
        : n.map;
    }

    function le(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (re.prototype.clear = function () {
      (this.__data__ = te ? te(null) : {}), (this.size = 0);
    }),
      (re.prototype.delete = function (e) {
        var a = this.has(e) && delete this.__data__[e];
        return (this.size -= a ? 1 : 0), a;
      }),
      (re.prototype.get = function (e) {
        var a = this.__data__;
        if (te) {
          var s = a[e];
          return '__lodash_hash_undefined__' === s ? void 0 : s;
        }
        return oe.call(a, e) ? a[e] : void 0;
      }),
      (re.prototype.has = function (e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e);
      }),
      (re.prototype.set = function (e, a) {
        var s = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (s[e] = te && void 0 === a ? '__lodash_hash_undefined__' : a),
          this
        );
      }),
      (le.prototype.clear = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new re(),
            map: new (se || C)(),
            string: new re(),
          });
      }),
      (le.prototype.delete = function (e) {
        var a = ie(this, e).delete(e);
        return (this.size -= a ? 1 : 0), a;
      }),
      (le.prototype.get = function (e) {
        return ie(this, e).get(e);
      }),
      (le.prototype.has = function (e) {
        return ie(this, e).has(e);
      }),
      (le.prototype.set = function (e, a) {
        var s = ie(this, e),
          t = s.size;
        return s.set(e, a), (this.size += s.size == t ? 0 : 1), this;
      });

    function de(e) {
      var a = (this.__data__ = new C(e));
      this.size = a.size;
    }
    (de.prototype.clear = function () {
      (this.__data__ = new C()), (this.size = 0);
    }),
      (de.prototype.delete = function (e) {
        var a = this.__data__,
          s = a.delete(e);
        return (this.size = a.size), s;
      }),
      (de.prototype.get = function (e) {
        return this.__data__.get(e);
      }),
      (de.prototype.has = function (e) {
        return this.__data__.has(e);
      }),
      (de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
          var t = s.__data__;
          if (!se || t.length < 199)
            return t.push([e, a]), (this.size = ++s.size), this;
          s = this.__data__ = new le(t);
        }
        return s.set(e, a), (this.size = s.size), this;
      });
    var ue = (function () {
      try {
        var e = ae(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (e) {}
    })();

    function ce(e, a, s) {
      '__proto__' == a && ue
        ? ue(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0,
          })
        : (e[a] = s);
    }

    function pe(e, a, s) {
      ((void 0 !== s && !q(e[a], s)) || (void 0 === s && !(a in e))) &&
        ce(e, a, s);
    }
    var me,
      he = function (e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
          var i = n[me ? r : ++t];
          if (!1 === a(o[i], i, o)) break;
        }
        return e;
      },
      ye =
        'object' == (void 0 === e ? 'undefined' : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      ge =
        ye &&
        'object' == ('undefined' == typeof module ? 'undefined' : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      be = ge && ge.exports === ye ? I.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) {
      var s,
        t,
        o = a
          ? ((s = e.buffer),
            (t = new s.constructor(s.byteLength)),
            new ke(t).set(new ke(s)),
            t)
          : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length);
    }
    var we = Object.create,
      xe = (function () {
        function e() {}
        return function (a) {
          if (!G(a)) return {};
          if (we) return we(a);
          e.prototype = a;
          var s = new e();
          return (e.prototype = void 0), s;
        };
      })();
    var ze,
      je,
      Se =
        ((ze = Object.getPrototypeOf),
        (je = Object),
        function (e) {
          return ze(je(e));
        }),
      _e = Object.prototype;

    function qe(e) {
      var a = e && e.constructor;
      return e === (('function' == typeof a && a.prototype) || _e);
    }

    function Ee(e) {
      return null != e && 'object' == a(e);
    }

    function Ae(e) {
      return Ee(e) && '[object Arguments]' == D(e);
    }
    var Ce = Object.prototype,
      Le = Ce.hasOwnProperty,
      Te = Ce.propertyIsEnumerable,
      Ie = Ae(
        (function () {
          return arguments;
        })(),
      )
        ? Ae
        : function (e) {
            return Ee(e) && Le.call(e, 'callee') && !Te.call(e, 'callee');
          },
      Me = Array.isArray;

    function Oe(e) {
      return (
        'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    }

    function Re(e) {
      return null != e && Oe(e.length) && !B(e);
    }
    var $e =
        'object' == (void 0 === e ? 'undefined' : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      Pe =
        $e &&
        'object' == ('undefined' == typeof module ? 'undefined' : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      He = Pe && Pe.exports === $e ? I.Buffer : void 0,
      Ne =
        (He ? He.isBuffer : void 0) ||
        function () {
          return !1;
        },
      De = Function.prototype,
      Ge = Object.prototype,
      Be = De.toString,
      Fe = Ge.hasOwnProperty,
      We = Be.call(Object);
    var Ye = {};
    (Ye['[object Float32Array]'] =
      Ye['[object Float64Array]'] =
      Ye['[object Int8Array]'] =
      Ye['[object Int16Array]'] =
      Ye['[object Int32Array]'] =
      Ye['[object Uint8Array]'] =
      Ye['[object Uint8ClampedArray]'] =
      Ye['[object Uint16Array]'] =
      Ye['[object Uint32Array]'] =
        !0),
      (Ye['[object Arguments]'] =
        Ye['[object Array]'] =
        Ye['[object ArrayBuffer]'] =
        Ye['[object Boolean]'] =
        Ye['[object DataView]'] =
        Ye['[object Date]'] =
        Ye['[object Error]'] =
        Ye['[object Function]'] =
        Ye['[object Map]'] =
        Ye['[object Number]'] =
        Ye['[object Object]'] =
        Ye['[object RegExp]'] =
        Ye['[object Set]'] =
        Ye['[object String]'] =
        Ye['[object WeakMap]'] =
          !1);
    var Je =
        'object' == (void 0 === e ? 'undefined' : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      Ue =
        Je &&
        'object' == ('undefined' == typeof module ? 'undefined' : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      Xe = Ue && Ue.exports === Je && L.process,
      Ve = (function () {
        try {
          var e = Ue && Ue.require && Ue.require('util').types;
          return e || (Xe && Xe.binding && Xe.binding('util'));
        } catch (e) {}
      })(),
      Ke = Ve && Ve.isTypedArray,
      Qe = Ke
        ? (function (e) {
            return function (a) {
              return e(a);
            };
          })(Ke)
        : function (e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)];
          };

    function Ze(e, a) {
      if (
        ('constructor' !== a || 'function' != typeof e[a]) &&
        '__proto__' != a
      )
        return e[a];
    }
    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
      var t = e[a];
      (ea.call(e, a) && q(t, s) && (void 0 !== s || a in e)) || ce(e, a, s);
    }
    var sa = /^(?:0|[1-9]\d*)$/;

    function ta(e, s) {
      var t = a(e);
      return (
        !!(s = null == s ? 9007199254740991 : s) &&
        ('number' == t || ('symbol' != t && sa.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < s
      );
    }
    var oa = Object.prototype.hasOwnProperty;

    function na(e, a) {
      var s = Me(e),
        t = !s && Ie(e),
        o = !s && !t && Ne(e),
        n = !s && !t && !o && Qe(e),
        r = s || t || o || n,
        i = r
          ? (function (e, a) {
              for (var s = -1, t = Array(e); ++s < e; ) t[s] = a(s);
              return t;
            })(e.length, String)
          : [],
        l = i.length;
      for (var d in e)
        (!a && !oa.call(e, d)) ||
          (r &&
            ('length' == d ||
              (o && ('offset' == d || 'parent' == d)) ||
              (n &&
                ('buffer' == d || 'byteLength' == d || 'byteOffset' == d)) ||
              ta(d, l))) ||
          i.push(d);
      return i;
    }
    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
      if (!G(e))
        return (function (e) {
          var a = [];
          if (null != e) for (var s in Object(e)) a.push(s);
          return a;
        })(e);
      var a = qe(e),
        s = [];
      for (var t in e)
        ('constructor' != t || (!a && ra.call(e, t))) && s.push(t);
      return s;
    }

    function la(e) {
      return Re(e) ? na(e, !0) : ia(e);
    }

    function da(e) {
      return (function (e, a, s, t) {
        var o = !s;
        s || (s = {});
        for (var n = -1, r = a.length; ++n < r; ) {
          var i = a[n],
            l = t ? t(s[i], e[i], i, s, e) : void 0;
          void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l);
        }
        return s;
      })(e, la(e));
    }

    function ua(e, a, s, t, o, n, r) {
      var i = Ze(e, s),
        l = Ze(a, s),
        d = r.get(l);
      if (d) pe(e, s, d);
      else {
        var u,
          c = n ? n(i, l, s + '', e, a, r) : void 0,
          p = void 0 === c;
        if (p) {
          var m = Me(l),
            h = !m && Ne(l),
            y = !m && !h && Qe(l);
          (c = l),
            m || h || y
              ? Me(i)
                ? (c = i)
                : Ee((u = i)) && Re(u)
                ? (c = (function (e, a) {
                    var s = -1,
                      t = e.length;
                    for (a || (a = Array(t)); ++s < t; ) a[s] = e[s];
                    return a;
                  })(i))
                : h
                ? ((p = !1),
                  (c = (function (e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t;
                  })(l, !0)))
                : y
                ? ((p = !1), (c = ve(l, !0)))
                : (c = [])
              : (function (e) {
                  if (!Ee(e) || '[object Object]' != D(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, 'constructor') && a.constructor;
                  return (
                    'function' == typeof s && s instanceof s && Be.call(s) == We
                  );
                })(l) || Ie(l)
              ? ((c = i),
                Ie(i)
                  ? (c = da(i))
                  : (G(i) && !B(i)) ||
                    (c = (function (e) {
                      return 'function' != typeof e.constructor || qe(e)
                        ? {}
                        : xe(Se(e));
                    })(l)))
              : (p = !1);
        }
        p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c);
      }
    }

    function ca(e, a, s, t, o) {
      e !== a &&
        he(
          a,
          function (n, r) {
            if ((o || (o = new de()), G(n))) ua(e, a, r, s, ca, t, o);
            else {
              var i = t ? t(Ze(e, r), n, r + '', e, a, o) : void 0;
              void 0 === i && (i = n), pe(e, r, i);
            }
          },
          la,
        );
    }

    function pa(e) {
      return e;
    }

    function ma(e, a, s) {
      switch (s.length) {
        case 0:
          return e.call(a);
        case 1:
          return e.call(a, s[0]);
        case 2:
          return e.call(a, s[0], s[1]);
        case 3:
          return e.call(a, s[0], s[1], s[2]);
      }
      return e.apply(a, s);
    }
    var ha = Math.max;
    var ya = ue
        ? function (e, a) {
            return ue(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value:
                ((s = a),
                function () {
                  return s;
                }),
              writable: !0,
            });
            var s;
          }
        : pa,
      ga = Date.now;
    var ba = (function (e) {
      var a = 0,
        s = 0;
      return function () {
        var t = ga(),
          o = 16 - (t - s);
        if (((s = t), o > 0)) {
          if (++a >= 800) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
      };
    })(ya);

    function fa(e, a) {
      return ba(
        (function (e, a, s) {
          return (
            (a = ha(void 0 === a ? e.length - 1 : a, 0)),
            function () {
              for (
                var t = arguments,
                  o = -1,
                  n = ha(t.length - a, 0),
                  r = Array(n);
                ++o < n;

              )
                r[o] = t[a + o];
              o = -1;
              for (var i = Array(a + 1); ++o < a; ) i[o] = t[o];
              return (i[a] = s(r)), ma(e, this, i);
            }
          );
        })(e, a, pa),
        e + '',
      );
    }
    var ka,
      va =
        ((ka = function (e, a, s) {
          ca(e, a, s);
        }),
        fa(function (e, s) {
          var t = -1,
            o = s.length,
            n = o > 1 ? s[o - 1] : void 0,
            r = o > 2 ? s[2] : void 0;
          for (
            n = ka.length > 3 && 'function' == typeof n ? (o--, n) : void 0,
              r &&
                (function (e, s, t) {
                  if (!G(t)) return !1;
                  var o = a(s);
                  return (
                    !!('number' == o
                      ? Re(t) && ta(s, t.length)
                      : 'string' == o && (s in t)) && q(t[s], e)
                  );
                })(s[0], s[1], r) &&
                ((n = o < 3 ? void 0 : n), (o = 1)),
              e = Object(e);
            ++t < o;

          ) {
            var i = s[t];
            i && ka(e, i, t, n);
          }
          return e;
        })),
      wa = 'gameState',
      xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1,
      };

    function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e);
    }

    function ja(e) {
      var a = za();
      !(function (e) {
        window.localStorage.setItem(wa, JSON.stringify(e));
      })(va(a, e));
    }
    var Sa = document.createElement('template');
    Sa.innerHTML =
      '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dificultate Mare</div>\n          <div class="description">Toate literele găsite trebuie refolosite în urmatoarele încercări</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Temă închisă la culoare</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Contrast mare la culori</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:filip.popa@gmail.com?subject=Feedback Cuvantul">Email</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), 'gameApp', void 0),
          e.attachShadow({
            mode: 'open',
          }),
          e
        );
      }
      return (
        o(t, [
          {
            key: 'connectedCallback',
            value: function () {
              var e,
                a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                (this.shadowRoot.querySelector('#hash').textContent =
                  null === (e = window.wordle) || void 0 === e
                    ? void 0
                    : e.hash),
                (this.shadowRoot.querySelector('#puzzle-number').textContent =
                  '#'.concat(this.gameApp.dayOffset)),
                this.shadowRoot.addEventListener(
                  'game-switch-change',
                  function (e) {
                    e.stopPropagation();
                    var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      n = s.disabled;
                    a.dispatchEvent(
                      new CustomEvent('game-setting-change', {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                          name: t,
                          checked: o,
                          disabled: n,
                        },
                      }),
                    ),
                      a.render();
                  },
                ),
                this.render();
            },
          },
          {
            key: 'render',
            value: function () {
              var e = document.querySelector('body');
              e.classList.contains('nightmode') &&
                this.shadowRoot
                  .querySelector('#dark-theme')
                  .setAttribute('checked', ''),
                e.classList.contains('colorblind') &&
                  this.shadowRoot
                    .querySelector('#color-blind-theme')
                    .setAttribute('checked', '');
              var a = za();
              a.hardMode &&
                this.shadowRoot
                  .querySelector('#hard-mode')
                  .setAttribute('checked', ''),
                a.hardMode ||
                  'IN_PROGRESS' !== a.gameStatus ||
                  0 === a.rowIndex ||
                  (this.shadowRoot
                    .querySelector('#hard-mode')
                    .removeAttribute('checked'),
                  this.shadowRoot
                    .querySelector('#hard-mode')
                    .setAttribute('disabled', ''));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-settings', _a);
    var qa = document.createElement('template');
    qa.innerHTML =
      '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea,
      Aa = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), '_duration', void 0),
            e.attachShadow({
              mode: 'open',
            }),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector('.toast');
                (a.textContent = this.getAttribute('text')),
                  (this._duration = this.getAttribute('duration') || 1e3),
                  'Infinity' !== this._duration &&
                    setTimeout(function () {
                      a.classList.add('fade');
                    }, this._duration),
                  a.addEventListener('transitionend', function (a) {
                    e.parentNode.removeChild(e);
                  });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));

    function Ca() {
      dataLayer.push(arguments);
    }
    customElements.define('game-toast', Aa),
      (window.dataLayer = window.dataLayer || []),
      Ca('js', new Date());
    Ca('config', 'G-2SSGMHY3NP', {
      app_version:
        null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
      debug_mode: !1,
    });

    //FIXME: Entire Word list
    // prettier-ignore
    var La = ['abaca','abacă','abace','abale','abată','abate','abați','abaua','abătu','abces','abdic','abila','abilă','abile','abili','abjur','abneg','aboli','abona','abonă','abrac','abraș','abrog','abție','abții','abțin','abțiu','aburc','aburi','abuza','abuză','acaju','acana','acant','acare','acari','acasă','acață','acațe','acați','acăța','acăță','acățe','acăți','acâni','acced','acces','acciz','aceea','aceia','acela','acele','acera','aceră','acerb','acere','aceri','acest','achii','achit','achiu','acida','acidă','acide','acila','acilă','acili','acine','acira','aciră','acire','aciri','aciua','aciuă','aciui','acizi','aclam','acnee','acolo','acont','acord','acqua','acrea','acrei','acria','acrie','acrii','acrim','acriș','acrit','acriu','acrul','acruț','activ','actor','actul','acuma','acușa','acuși','acuta','acută','acute','acuți','acuza','acuză','acuze','acuzi','adaog','adaos','adapă','adape','adapi','adast','adaug','adaus','adăpa','adăpă','adăpe','adăpi','adăst','adânc','adecă','adept','adera','aderă','adere','aderi','adese','adiai','adiam','adiat','adiau','adică','adiem','adins','admir','admis','admit','adnat','adopt','adora','adoră','adore','adori','adorm','aducă','aduce','aduci','aduct','adula','adulă','adult','aduna','adună','adune','aduni','adusa','adusă','aduse','aduși','advon','aedul','aequo','aerai','aeraj','aeram','aerat','aerau','aerăm','aerez','aerob','aeros','aerul','aezii','afară','afâna','afână','afect','afgan','afida','afidă','afide','afifa','afifă','afife','afifi','afina','afină','afine','afini','afion','afipt','afirm','afișa','afișă','afișe','afixe','aflai','aflam','aflat','aflau','aflăm','aflui','aflux','afona','afonă','afone','afoni','aftei','aftor','aftos','afuma','afumă','afume','afumi','afund','afurc','agale','agapa','agapă','agape','agasa','agasă','agata','agată','agate','agață','agațe','agaua','agava','agavă','agave','agăța','agăță','agățe','agăți','agent','agera','ageră','agere','ageri','agest','aghii','agiei','agila','agilă','agile','agili','agita','agită','agite','agiți','agiul','agnat','agneț','agona','agonă','agone','agora','agoră','agore','agrar','agrăi','agrea','agreă','agriș','aguda','agudă','agude','aguzi','aheii','aheul','ahtia','ahtie','ahtul','ahuri','aicea','aidam','aidem','aiept','aiest','aieve','ailor','aiori','aista','aistă','aiste','aișor','aiști','aiura','aiură','aiure','aiuri','ajuna','ajună','ajung','ajuns','ajura','ajură','ajuta','ajută','ajute','ajuți','akâni','alace','alait','alama','alamă','alame','alana','alană','alane','alani','alaun','alămi','albea','albei','albeț','albia','albie','albii','albim','albit','albiu','albui','albul','album','albuș','albuț','alcan','alcov','aldan','aldin','aldol','aldui','alean','aleea','alega','alegă','alege','alegi','aleii','alela','alelă','alele','alena','alenă','alene','alerg','alert','alese','aleși','aleza','aleză','aleze','algei','algia','algid','algie','algii','algol','aliai','aliaj','aliam','alias','aliat','aliau','alibi','alica','alică','alice','alici','aliem','aliez','alina','alină','aline','alini','alint','alior','alipi','almar','almee','almei','aloca','alocă','aloce','aloci','aloea','aloei','aloul','alpin','altar','altei','alter','altoi','altor','altui','altul','alții','aluat','aluna','alună','alune','alung','aluni','alura','alură','aluri','amant','amara','amară','amare','amari','amăgi','amăra','amărî','amâna','amână','amâne','amâni','ambar','ambii','ambra','ambră','ambre','ament','ameți','amhar','amiaz','amiba','amibă','amibe','amica','amică','amice','amici','amida','amidă','amide','amiez','amili','amina','amină','amine','amino','amnar','amorf','amper','ampex','ampla','amplă','ample','ampli','amplu','amurg','amușă','amușe','amuși','amuța','amuță','amuțe','amuți','amuza','amuză','amuze','amuzi','amvon','anala','anală','anale','anali','anaua','ancia','ancie','ancii','andin','anexa','anexă','anexe','angli','angor','angro','anima','animă','anime','animi','anina','anină','anine','anini','anion','anost','anozi','ansei','anșoa','antal','antei','antet','antic','antum','anual','anuar','anula','anulă','anume','anunț','anura','anură','anure','aoleo','aoleu','aorta','aortă','aorte','apară','apare','apari','apasă','apași','apăra','apără','apăru','apăsa','apăsă','apela','apelă','apele','apere','aperi','apese','apeși','apida','apidă','apide','apiol','aplec','aplic','aplit','apnee','apoda','apodă','apode','apolo','aport','apoși','apozi','apret','aprig','april','aprob','aprod','aptei','apter','aptul','apții','apuca','apucă','apuce','apuci','apuie','apuli','apună','apune','apupa','apupă','apupe','apusa','apusă','apuse','apuși','araba','arabă','arabe','arabi','araci','arama','aramă','arame','arapi','arară','arare','arase','arași','arata','arată','arate','arați','arăci','arămi','arări','arăta','arătă','arăți','arând','arbie','arbiu','arbor','arbuz','arcan','arcaș','arcat','arcei','arcer','arcui','arcul','arcuș','ardea','ardei','ardem','ardic','ardil','areal','areci','areic','arena','arenă','arene','arest','areta','aretă','arete','areți','arfei','argat','argea','argon','argos','argou','argus','arhar','arhon','arian','arici','arida','aridă','aride','ariei','arile','arili','arima','arimă','arina','arină','arine','arini','aripa','aripă','aripi','arizi','armai','armam','arman','armar','armaș','armat','armau','armăm','armân','armei','armez','armia','armie','armii','armul','arneu','aroga','arogă','aroge','arogi','aroma','aromă','arome','aromi','arpei','arsei','arsen','arsul','arșic','arșii','arșin','artei','artel','artos','arțag','arțar','arunc','arzoi','arzos','arzul','asabi','asalt','asana','asană','asară','ascei','ascet','ascut','aseca','asecă','asece','aseci','asiat','asini','asist','asiza','asiză','asize','asmut','asmuț','aspic','aspir','aspra','aspră','aspre','aspri','aspru','assai','astea','astei','astma','astmă','astme','astre','astru','astup','asuda','asudă','asude','asuma','asumă','asume','asumi','asuzi','așași','așază','așeza','așeză','așeze','așezi','aștri','ataca','atacă','atace','ataci','atale','atare','atari','atașa','atașă','atașe','ataua','atârn','atâta','atâți','ateea','ateei','ateii','atela','atelă','atele','atent','atest','ateul','atica','atică','atice','atici','ating','atins','atlas','atlaz','atlet','atoli','atoma','atomă','atome','atomi','atona','atonă','atone','atoni','atrag','atras','atrii','atriu','atuul','ațâța','ațâță','ațâțe','ațâți','ațele','ațica','ațică','ațice','ațici','ațină','aține','aținu','ațipi','ațița','ațiță','ațițe','ațiți','ațoși','audia','audie','audio','audit','augur','auiai','auiam','auiau','auind','auiră','auire','auiri','auise','auiși','auiți','aulei','auleu','aulic','aulul','aurar','aurea','aurei','aurel','auria','aurie','aurii','aurim','aurit','auriu','auros','aurul','aușei','aușel','autor','autul','auzea','auzii','auzim','auzit','auzul','avaet','avama','avamă','avame','avami','avana','avană','avane','avani','avans','avara','avară','avare','avari','avați','având','avânt','aveai','aveam','aveau','avele','avena','avenă','avene','avere','averi','avers','aveți','aviar','avida','avidă','avide','avion','aviva','avivă','aviza','aviză','avize','avizi','avizo','avlia','avlie','avlii','avort','avram','avură','avuse','avuși','avuta','avută','avute','avuți','axară','axare','axase','axași','axata','axată','axate','axați','axări','axând','axele','axeze','axezi','axial','axila','axilă','axile','axion','axoni','axuri','azera','azeră','azere','azeri','azida','azidă','azide','azima','azimă','azime','azoic','aztec','azura','azură','azuri','ăleia','ălora','ăluia','ăstei','ăstor','ăstui','ăștia','ăuiai','ăuiam','ăuiau','ăuind','ăuiră','ăuire','ăuiri','ăuise','ăuiși','ăuiți','babac','baban','babau','babei','baboi','bacal','bacău','bacei','bacii','bacil','bacon','bacul','badea','badei','bafta','baftă','bafte','bagaj','bagăm','bagea','bahic','bahna','bahnă','bahne','bahți','baian','baier','baiți','baiul','balaș','balâc','balei','balet','balia','balic','balie','balii','balon','balot','balsa','balse','balta','baltă','balul','bamei','banal','banan','banat','banca','bancă','banco','banda','bandă','bande','banei','banii','banjo','banta','bantă','bantu','banul','barai','baraj','baram','barat','barau','barăm','barba','barbă','barca','barcă','barda','bardă','barei','barej','barem','barez','baria','baric','barie','barii','baril','barim','bariș','bariu','bariz','barja','barjă','barje','barni','baroc','baron','baros','barou','barul','barza','barză','barzi','basca','bască','basce','basci','baset','basic','basma','basme','basna','basnă','basne','bason','basta','basul','bașca','bașcă','bașii','bașta','baștă','baște','bașul','bataj','batal','batat','batav','batăr','batâr','batca','batcă','batce','batel','batem','batic','batir','batiu','batoc','batog','baton','bauzi','bavei','baxul','bazai','bazal','bazam','bazar','bazat','bazau','bazăm','bazei','bazez','bazic','bazin','bazon','băbar','băboi','băcan','băcit','bădia','bădic','bădie','bădii','băgai','băgam','băgat','băgau','băgăm','băiai','băiam','băiaș','băiat','băiau','băieș','băiet','băile','băind','băiră','băire','băiri','băise','băiși','băița','băiță','băițe','băiți','bălai','bălan','bălei','bălii','bălos','bălti','bălța','bălță','bălți','bălul','băluț','bănat','bănci','bănea','bănet','bănia','bănie','bănii','bănim','bănit','bănos','bănui','bănuț','bărat','băraț','bărbi','bărci','bărzi','băsma','băsni','bășic','băști','bătăi','bătea','bătui','bătut','bățos','bățul','băune','băuni','băură','băuse','băuși','băuta','băută','băute','băuți','bâcâi','bâhla','bâhlă','bâhle','bâhli','bâlci','bârâi','bârfa','bârfă','bârfe','bârfi','bârna','bârnă','bârne','bârsa','bârsă','bârse','bâtca','bâtcă','bâtci','bâtei','bâtul','bâțan','bâțâi','bâții','bâzâi','bâzei','bâzoi','bâzzz','beata','beată','beați','becar','becer','bechi','becii','becul','bedei','behăi','beica','beică','beici','beiul','bejul','belea','belgi','belii','belim','beliș','belit','belul','bemol','benei','benga','beniș','bente','benți','benzi','berar','berat','berce','berci','berea','beret','berii','beril','berma','bermă','berme','berna','bernă','berne','berta','bertă','berte','berze','bessi','beșic','betei','betel','beton','beția','beție','beții','bețiv','beuca','beucă','beuci','beuța','beuță','beuțe','bezea','bezna','beznă','bezne','biata','biată','biban','biber','bibic','bibil','bicaș','bideu','bidon','biela','bielă','biele','biete','bieți','bieul','bifai','bifam','bifat','bifau','bifăm','bifei','bifez','bifid','bifor','bigam','bigei','bigii','bigot','bigul','bihun','bijoi','biker','bilei','bilet','bilon','biman','binar','biniș','binom','binta','bintă','binte','bioți','biped','bipul','birar','birăi','birău','biriș','birja','birjă','birje','birou','birui','birul','bisai','bisam','bisat','bisau','bisăm','bisel','bisez','bisul','biter','bitul','bitum','biței','biții','biuta','biută','biute','bivol','bizam','bizar','bizeț','bizon','bizui','blaga','blagă','blama','blamă','blana','blană','blanc','blaza','blază','blaze','blăgi','blăni','blând','bleah','bleau','bleav','blege','blegi','bleot','blide','blimp','blitz','bloca','blocă','blond','bluca','blucă','bluci','blues','bluff','blugi','bluza','bluză','bluze','boaba','boabă','boabe','boacă','boala','boală','boale','board','boare','boari','boașe','boața','boață','boațe','bobea','bober','bobii','bobim','bobit','boboc','bobot','bobul','bocal','bocăn','bocea','bocet','bocii','bocim','bocit','bocnă','bocșa','bocșă','bocșe','bocși','bocul','boema','boemă','boeme','boemi','boeuf','bogat','bogza','bogză','bogze','boiai','boiam','boiau','boier','boind','boiră','boire','boiri','boise','boiși','boita','boită','boite','boiți','boiul','bojii','bojoc','bojog','boldi','boldo','bolea','bolfa','bolfă','bolfe','bolid','bolii','bolim','bolit','bolta','boltă','bolti','bolți','bolul','bolus','bomba','bombă','bombe','bonca','bonci','bonei','bonom','bonti','bonți','bonul','bonus','bonzi','borai','boram','boran','borat','borau','borax','borăi','borâi','borâm','borât','bordo','boric','borii','borna','bornă','borne','borod','borși','borta','bortă','borte','borti','borul','borza','borză','borze','bosaj','bosei','bosma','boson','bosul','boșar','boșii','boșul','botău','botca','botcă','botce','botei','botez','botos','botul','boțea','boții','boțim','boțit','boțog','boțul','bouar','bouri','bouți','bovid','bovin','boxai','boxam','boxat','boxau','boxăm','boxei','boxer','boxez','boxul','boyul','bozia','bozie','bozii','bozul','braca','bracă','braci','bradt','braga','bragă','braha','brahă','brahe','brain','brama','bramă','brame','brand','branț','brațe','brava','bravă','brave','bravi','bravo','brazi','brăgi','brâie','brâna','brână','brâne','brâul','break','breaz','brebi','breii','breji','breșa','breșă','breșe','breva','brevă','breve','breza','breză','breze','briai','briam','briat','briau','brice','brici','brida','bridă','bride','briei','briem','briez','brind','briza','briză','brize','broda','brodă','brodi','bronz','broșa','broșă','broșe','bruft','bruia','bruie','bruma','brumă','brume','bruna','brună','brune','bruni','brusc','bruși','bruta','brută','brute','bruto','bruți','bubal','bubat','bubei','buboi','bubon','bubos','bubui','bucal','bucar','bucea','buche','buchi','bucii','bucin','bucla','buclă','bucle','bucșa','bucșă','bucșe','bucși','bucul','bucur','budac','budai','budam','budat','budau','budăi','budăm','budei','budez','budui','budur','bufan','bufei','bufet','bufeu','bufii','bufna','bufnă','bufne','bufni','bufon','buful','buged','buget','bugla','buglă','bugle','buhai','buhaș','buhav','buhăi','buhei','buhna','buhnă','buhne','buhos','buhul','buhur','buiac','buiai','buiam','buiau','buici','buind','buiră','buire','buiri','buise','buiși','buiți','bujda','bujdă','bujde','bujdi','bujia','bujie','bujii','bujor','bulat','bulbi','bulca','bulcă','bulci','bulei','bulet','bulin','bulon','buluc','bulzi','bumbi','bumul','bunda','bundă','bunde','bunei','bunel','bunic','bunii','bunul','bunuț','burai','buraj','buram','burat','burau','burăm','burba','burbă','burbe','burca','burcă','burci','burei','buret','burez','buric','burie','burii','buriu','bursa','bursă','burse','burta','burtă','burți','burul','busta','bușea','bușei','bușel','bușeu','bușii','bușim','bușit','bușon','bușul','butac','butan','butar','butaș','butca','butcă','butci','butea','butia','butic','butie','butii','butil','butoi','buton','butuc','butul','butur','buții','buzat','buzăr','buzău','buzei','buzer','buzii','buzna','buzni','buzoi','bytul','byții','cabaz','cabla','cablă','cablu','cabra','cabră','cabul','cacao','cacic','cacom','cadet','cadii','cadiu','cadou','cadra','cadră','cadre','cadru','caduc','cadus','cafas','cafea','cafer','cafri','cafru','cafti','cahla','cahlă','cahle','caiac','caice','caier','caiet','caisa','caisă','caise','caiși','caizi','calai','calaj','calam','calao','calat','calau','calăm','calcă','calce','calci','calda','caldă','calde','calea','calei','calem','calez','calfa','calfă','calfe','calic','calif','calin','calit','calma','calmă','calme','calmi','calos','calpa','calpă','calpe','calpi','calul','calup','calus','calzi','camee','camei','campa','campă','canaf','canal','canar','canat','canci','canea','canei','cange','canid','canin','caniș','canoe','canon','canto','capac','capan','capăt','capei','caper','capeș','capia','capie','capii','capiu','capoc','capon','capot','capra','capră','capre','capsa','capsă','capse','capta','captă','capul','carab','caras','carat','carda','cardă','carde','carea','caret','careu','caria','carib','caric','carie','carii','carne','carou','carpa','carpă','carpe','carpi','carst','carta','cartă','carte','carub','carul','carus','casai','casam','casap','casat','casau','casăm','casca','cască','casei','casez','casii','casiu','casta','castă','caste','cașei','cașet','cașeu','cașii','caște','caști','cașul','catar','catâr','catch','catod','catul','cațăr','caței','cauce','cauei','cauni','causa','caută','caute','cauți','cauza','cauză','cauze','cavaf','caval','cavas','cavei','cavii','cavou','cavul','cazac','cazai','cazam','cazan','cazat','cazau','cazăm','cazez','cazic','cazma','cazna','caznă','cazne','cazon','cazul','cădea','cădem','cădii','cădim','cădit','căiai','căiam','căiau','căile','căina','căină','căind','căini','căiră','căire','căiri','căise','căiși','căita','căită','căite','căița','căiță','căițe','căiți','călăi','călău','călâi','călâu','călca','călcă','călci','călea','călii','călim','călin','călit','căluș','căluț','cămin','cănea','căngi','cănii','cănim','cănit','căpăi','căpău','căpia','căpie','căpos','căpui','căpuș','cărai','căram','cărat','cărau','cărăm','cărei','cărni','căror','cărți','cărui','căruț','căsca','căscă','căsoi','cășăi','căști','cășuț','cătai','cătam','cătat','cătau','cătăm','cătră','către','cătun','cătur','cățăi','cățea','căței','cățel','căția','căție','cății','cățui','căula','căulă','căule','căușe','căuta','căută','căzii','căzni','căzui','căzut','câine','câini','câlți','câmpi','câner','cânii','cânta','cântă','cânte','cânți','cârâi','cârcă','cârja','cârjă','cârje','cârji','cârma','cârmă','cârme','cârmi','cârna','cârnă','cârne','cârni','cârpa','cârpă','cârpe','cârpi','cârti','câșei','câșii','câșla','câșlă','câșle','câști','câșul','câtea','câtor','câtul','câtva','ceafa','ceafă','ceair','ceala','ceapa','ceapă','ceara','ceară','ceata','ceată','ceața','ceață','ceaun','ceauș','cecal','cecen','cecul','cecum','cedai','cedam','cedat','cedau','cedăm','cedez','cedri','cedru','cefar','cefei','cegăi','cegii','cehăi','cehei','cehii','cehul','celar','celea','celei','cella','celle','cello','celom','celor','celta','celtă','celte','celți','celui','centi','cenți','cenur','cepăi','cepci','cepei','cepse','cepțe','cepui','cepul','cerat','cerbi','cerca','cercă','cerce','cerci','cerea','cerem','cerga','cergă','cergi','cerii','cerit','ceriu','cerne','cerni','cernu','ceros','cerși','certa','certă','certe','cerți','cerui','cerul','cerut','cervu','cesiu','cesta','ceste','cești','cetaș','cetea','cetei','ceter','ceteț','cetii','cetim','cetit','ceții','cețos','ceuca','ceucă','ceuce','ceuci','cezar','cheag','cheia','cheie','cheii','chele','cheli','chema','chemă','cheme','chemi','chera','chere','cheta','chetă','chete','cheul','chiar','chiau','chibz','chica','chică','chici','chida','chidă','chide','chila','chilă','chile','chior','chiot','chips','chira','chire','chist','chita','chită','chite','chiti','chiți','chiui','chiul','chiup','chulo','cicar','cicli','ciclu','cidru','cifra','cifră','cifre','cifru','cigei','cihăi','cilen','cilii','cilul','cimei','cimen','cinai','cinam','cinaș','cinat','cinau','cinăm','cinci','cinei','cinel','cinez','cinic','cinul','ciobi','ciomp','cionc','ciont','ciori','ciort','cipca','cipcă','cipci','cipic','cipul','cirac','circa','circă','circe','circi','cireș','cirii','cirip','ciriș','cirta','cirtă','cirte','cirul','cirus','cisla','cislă','cisle','cista','cistă','ciste','citai','citam','citat','citau','cităm','citea','citeț','citez','citii','citim','citit','citro','citul','ciuci','ciuda','ciudă','ciude','ciudi','ciufi','ciuin','ciula','ciulă','ciule','ciuli','ciuma','ciumă','ciume','ciump','ciung','ciunt','ciupa','ciupă','ciupe','ciupi','ciuta','ciută','ciute','ciuți','civic','civil','civit','cizma','cizmă','cizme','claca','clacă','clada','cladă','clade','claia','claie','clama','clamă','clame','clamp','clanc','clanț','clapa','clapă','clapc','clape','clara','clară','clare','clari','clasa','clasă','clase','claun','clăci','clădi','clăia','clăii','clăim','clăit','clăti','clăzi','clean','clema','clemă','cleme','cleni','clica','clică','clici','clima','climă','clime','clina','clină','clinc','cline','cling','clini','clint','clipa','clipă','clipe','clipi','clips','clisa','clisă','clise','clișa','clișă','cliva','clivă','cloca','clocă','cloci','clomb','clona','clonă','clonc','clone','clonț','cloța','cloță','cloțe','clovn','clown','clupa','clupă','clupe','cluul','cneaz','cneji','cnezi','coacă','coace','coada','coadă','coade','coafa','coafă','coafe','coaja','coajă','coala','coală','coale','coama','coamă','coame','coana','coană','coane','coasa','coasă','coase','coate','cobai','cobăi','cobea','cobei','cobii','cobim','cobit','cobol','cobor','cobra','cobră','cobre','cobur','cobuz','cobza','cobză','cobze','cocăi','cocea','cocia','cocie','cocii','cociș','cocli','cocon','cocor','cocos','cocoș','cocoț','cocul','codai','codaj','codal','codam','codan','codaș','codat','codau','codăm','codea','codei','codex','codez','codia','codie','codii','codim','codit','codoș','codri','codru','codul','cofei','cofra','cofră','coiot','cojea','cojii','cojim','cojit','cojoc','colac','colai','colaj','colam','colan','colat','colau','colăm','colea','coleg','colei','colet','colez','colia','colic','colie','colii','colin','colir','colna','colnă','colne','colon','color','colos','colți','colul','colun','comat','combi','combo','comei','comet','comic','comis','comit','comod','comor','comun','comut','conac','conaș','conca','concă','conci','condu','coneț','conex','conga','conic','conta','contă','conte','conți','conul','copac','copai','copal','copan','copăi','copca','copcă','copce','copci','copia','copie','copii','copil','copoi','copra','copră','copre','copta','coptă','copte','copți','copul','corac','corai','coraj','coral','coran','corbi','corci','coree','corei','coreț','coreu','corfa','corfă','corfe','corii','corla','corlă','corle','corli','corni','coroi','corpi','corso','corul','corup','corzi','cosac','cosar','cosaș','cosea','cosei','cosii','cosim','cosit','cosoi','cosor','costa','costă','coste','coșar','coșea','coșii','coșim','coșit','coșul','cotai','cotam','cotar','cotat','cotau','cotăm','cotea','cotei','coteț','cotez','cotii','cotil','cotim','cotiș','cotit','cotoc','cotoi','coton','cotor','cotul','coțca','coțcă','coțce','coțci','coții','coviț','covor','covru','coxal','coxei','cozii','cozul','crabi','craca','cracă','craci','craii','crama','cramă','crame','crane','cranț','crapă','crape','crapi','crasa','crasă','crase','crași','craul','craun','craza','crază','craze','crăci','crăia','crăie','crăii','crăpa','crăpă','crăpe','crăpi','crâng','crâșc','creai','cream','creat','creau','creăm','crede','credo','creek','creez','crema','cremă','creme','creol','creps','cresc','creșa','creșă','creșe','creta','cretă','crete','crețe','creți','crezi','crezu','crida','cridă','cride','crier','crila','crilă','crile','crima','crimă','crime','crini','crița','criță','crițe','criza','criză','crize','croat','croia','croii','croim','croit','croma','cromă','cromo','cronc','crosa','crosă','crose','croșa','croșă','croșe','crown','cruce','cruci','cruda','crudă','crude','crunt','crupa','crupă','crupe','cruși','cruța','cruță','cruțe','cruți','cruzi','cuaga','cuarț','cubai','cubaj','cubam','cuban','cubat','cubau','cubăm','cubeb','cubez','cubic','cubii','cubul','cucăi','cucii','cucon','cucor','cucoș','cucui','cucul','cucuț','cufăr','cuget','cuhne','cuhni','cuiba','cuibă','cuier','cuina','cuină','cuine','cuini','cuiul','cuiuț','cuiva','cujba','cujbă','cujbe','culac','culca','culcă','culce','culci','culee','culeg','culei','cules','culic','culii','culma','culmă','culme','culmi','culot','culpa','culpă','culpe','culta','cultă','culte','culți','cuman','cumaș','cumâs','cumen','cumis','cumul','cumva','cunun','cupaj','cupar','cupea','cupei','cupeț','cupeu','cupid','cupit','cupiu','cupla','cuplă','cuple','cuplu','cupon','cupra','cupră','cupru','curai','curaj','curam','curat','curau','curăm','curăț','curba','curbă','curbe','curbi','curca','curcă','curci','curea','curei','curez','curgă','curge','curia','curie','curii','curiu','curma','curmă','curme','curmi','curry','cursa','cursă','curse','curta','curtă','curte','curți','curul','curuț','curva','curvă','curve','curvi','cusui','cusur','cusut','cușac','cușca','cușcă','cușer','cușma','cușmă','cușme','cuști','cutai','cutam','cutat','cutau','cutăm','cutea','cutei','cuter','cutez','cutia','cutie','cutii','cutra','cutră','cutre','cuțit','cuvei','cuvie','cuvin','cvarț','cvasi','dacei','dacic','dacii','dacit','dacul','dadei','dafia','dafie','dafii','dafin','daiac','daica','daică','daici','daira','dalac','dalaj','dalba','dalbă','dalbe','dalbi','dalei','dalia','dalie','dalta','daltă','damei','damii','damna','damnă','damul','dance','danci','dandi','dandy','danei','danez','danga','dania','danie','danii','dansa','dansă','danța','danță','danul','dapăr','darac','darda','dardă','darde','darea','daria','darie','darii','darmă','darme','darul','dasem','dasia','dasie','dasii','datai','datam','datat','datau','datăm','datei','datez','dativ','dator','datul','dații','dauna','daună','daune','dayac','dădea','dădui','dăgii','dăina','dăină','dălii','dălți','dănac','dănos','dănui','dăoli','dărab','dărac','dărăb','dărâm','dării','dărma','dărmă','dărme','dărmi','dărui','dății','dăula','dăulă','dăuli','dăuna','dăună','dâcii','dâlma','dâlmă','dâlme','dânsa','dârai','dâram','dârat','dârau','dârăm','dârâi','dârâm','dârât','dârei','dârez','dârje','dârji','dârza','dârză','dârze','dârzi','deasa','deasă','debil','debit','debut','debye','decad','decan','decar','decât','deces','decid','decis','decor','decul','dedai','dedal','dedam','dedat','dedau','dedăm','dedea','dedei','dedic','dedoi','deduc','dedus','defel','defer','degaj','deger','deget','deism','deist','dejei','dejoc','dejug','dejun','delas','delco','deleg','delei','delia','delie','delii','delir','deliu','deloc','delta','deltă','delte','deluț','demei','demis','demit','demiu','demna','demnă','demne','demni','demon','demos','denar','deneg','denia','denie','denii','densa','densă','dense','denși','depăn','depăr','depou','depui','depun','depus','derbi','derby','derea','dereg','deres','dereș','deriv','derma','dermă','derme','derog','desag','desec','desei','desen','deset','desfă','desiș','desul','deszi','deșca','deșcă','deșce','deșel','deșeu','deșii','deșir','dește','dești','detei','detun','deție','deții','dețin','dețiu','dever','devia','devie','devii','devin','deviu','deviz','devla','devlă','devle','devon','devot','dezic','dezis','diace','diata','diată','diate','dibla','diblă','dible','diblu','dibol','dibui','dicta','dictă','dictu','dieci','diena','dienă','diene','dieta','dietă','diete','dieza','dieză','diezi','difer','difuz','diger','digit','digul','dihai','dihoc','dihor','dijma','dijmă','dijme','dilat','dilea','dilia','dilie','dilii','dilim','dilit','diliu','dilua','diluă','dimer','dimia','dimie','dimii','dimon','dinam','dinar','dinee','dinei','dineu','dingo','dinte','dința','dință','dinți','dioda','diodă','diode','dioic','dipod','dipol','direg','dires','dirig','disco','disec','ditai','diurn','divan','divei','divid','divin','dixie','doaga','doagă','doage','doapa','doapă','doape','doară','doare','dobaș','dobei','dobor','doboș','dobru','docar','docil','docta','doctă','docte','docți','docul','dodea','dodei','dodii','dodim','dodit','dogar','dogea','dogii','dogim','dogit','dogma','dogmă','dogme','dogul','dohot','doica','doică','doici','doime','doimi','doina','doină','doine','doini','doiul','dolar','dolby','dolce','dolia','dolie','dolii','doliu','dolly','dolul','domei','domin','domni','domnu','domol','domra','domră','domre','domul','donai','donam','donat','donau','donăm','donez','donor','dopai','dopaj','dopam','dopat','dopau','dopăm','dopez','dopul','dorea','doric','dorii','dorim','dorit','dormi','dorna','dornă','dorne','dorul','doruț','dosar','dosea','dosii','dosim','dosit','dospi','dosul','dotai','dotal','dotam','dotat','dotau','dotăm','dotei','dotez','doxei','dozai','dozaj','dozam','dozat','dozau','dozăm','dozei','dozez','draci','dracu','draga','dragă','drage','dragi','drain','draiv','drama','dramă','drame','drapa','drapă','drâng','drege','dregi','drela','drelă','drele','drena','drenă','drene','drept','dresa','dresă','drese','dreși','drețe','dreve','drink','dripi','drive','drobi','droga','drogă','drops','drota','drotă','druga','drugă','drugi','druid','drupa','drupă','drupe','drusa','drusă','druse','druza','druză','druze','duale','duant','dubas','dubea','dubei','dubii','dubim','dubit','dubiu','dubla','dublă','duble','dubli','dublu','ducal','ducat','ducăi','ducea','ducem','ducii','dudău','dudei','dudui','dudul','duela','duelă','duete','duhan','duhni','duhul','duios','duium','dulap','dulăi','dulău','dulce','dulci','dulia','dulie','dulii','dumei','dumic','dunei','dunga','dungă','dungi','dunit','duoul','dupac','dupăi','dupca','dupcă','dupce','dupii','dupre','dupul','durai','duram','duran','durat','durau','durăi','durăm','durăt','durda','durdă','durde','durea','durei','durez','durig','durii','durit','durmi','duros','durui','durul','durut','durzi','dusei','dusul','dușca','dușcă','dușii','duște','duști','dușul','dutca','dutcă','dutce','duzei','duzii','dvori','dzelo','eboșa','eboșă','eboșe','ecart','echea','echei','echer','ecler','ecoul','ecran','ecvin','edeme','edict','edili','edita','edită','educa','educă','educe','educi','efebi','efect','efeți','efila','efilă','eflux','efori','efort','egala','egală','egale','egali','egida','egidă','egide','elani','eleat','elena','elenă','elene','eleni','eleva','elevă','eleve','elevi','elfii','elful','elice','elida','elidă','elina','elină','eline','elini','elita','elită','elite','eluda','eludă','email','emana','emană','emane','emani','embol','emden','emerg','emeri','emers','emiri','emisa','emisă','emise','emiși','emită','emite','emiți','emuli','emuul','enorm','enoți','enunț','eocen','eolit','eonii','eonul','epata','epată','epava','epavă','epave','epica','epică','epice','epici','epila','epilă','epiul','epoca','epocă','epoci','epoda','epodă','epode','epoha','epohă','epohe','eponj','epura','epură','epure','equus','erata','erată','erate','erați','erbiu','erect','erede','erele','erete','ereți','erezi','ergan','ergii','ergul','erhei','erija','erijă','ermit','eroda','erodă','eroic','eroii','erori','eroul','erupă','erupe','erupi','erupt','erzaț','eseul','espui','espun','espus','estaz','ester','estet','estic','estiv','eston','estre','estru','estul','eșuai','eșuam','eșuat','eșuau','eșuăm','eșuez','etaja','etajă','etaje','etala','etală','etanș','etapa','etapă','etape','etate','etăți','etena','etenă','etene','eteri','etern','ethos','etiaj','etica','etică','etice','etici','etila','etilă','etili','etira','etiră','etnia','etnic','etnie','etnii','etola','etolă','etole','etufa','etufă','etuva','etuvă','etuve','eului','eunuc','eurip','evada','evadă','evaza','evază','eving','evins','evita','evită','evite','eviți','evoca','evocă','evoce','evoci','evrei','evreu','evuri','exact','exala','exală','exale','exali','exalt','exarh','exces','excit','exert','exhib','exigă','exige','exigi','exila','exilă','exina','exină','exine','exist','expia','expie','expir','expre','expui','expun','expus','extaz','extra','exult','ezita','ezită','ezite','eziți','facem','facil','facla','faclă','facle','facto','fadei','fadul','fagii','fagot','fagul','fagur','faima','faimă','faime','faina','faină','faine','faini','faiul','falca','falcă','falce','falei','falet','falia','falie','falii','falit','falsa','falsă','false','falșa','falșă','falșe','falși','falun','falus','famat','famen','fanai','fanal','fanam','fanar','fanat','fanau','fanăm','fanda','fandă','fanez','fanii','fanon','fanta','fantă','fante','fanți','fanul','fapta','faptă','fapte','fapți','farad','farba','farbă','farbe','farda','fardă','farin','farmă','farme','farsa','farsă','farse','farul','fason','fasta','fastă','faste','faști','fatal','fatum','fault','fauna','faună','faune','fauni','fauri','favor','favus','faxul','fazan','fazei','fazii','făcău','făcea','făcui','făcut','făgaș','făget','făina','făină','făini','fălci','fălea','fălii','fălim','fălit','fălos','făraș','fărâm','fărbi','fărma','fărmă','fărme','fărmi','făsui','fășia','fășie','fășii','fătat','fătau','fătoi','fătul','fățiș','fățos','fățui','făuri','fânar','fânaț','fânul','fârta','fârtă','fârte','fâsăi','fâsâi','fâsei','fâsul','fâșăi','fâșâi','fâșia','fâșie','fâșii','fâșul','fâțâi','fâței','febra','febră','febre','fecal','feder','feele','felah','felea','felei','felia','felie','felii','felin','felon','felul','femei','femel','femur','fenec','fenic','fenil','fenix','fenol','fenta','fentă','fente','ferat','ferdu','ferea','ferec','feric','ferii','ferim','ferit','ferma','fermă','ferme','fermi','feros','ferța','ferță','ferțe','ferul','fesei','festa','festă','feste','fesul','feșei','feșii','fetal','fetea','fetei','fetia','fetid','fetie','fetii','fetim','fetiș','fetit','fetru','fetus','feței','feții','feuda','feudă','feude','fiala','fială','fiale','fiara','fiară','fiare','fibra','fibră','fibre','ficat','ficși','ficus','fidea','fidel','fider','fiece','fierb','fiere','fieri','fiert','fiesc','fiful','fiica','fiică','fiice','fiind','filai','filam','filat','filau','filăm','filee','filei','filer','filet','fileu','filez','filit','filma','filmă','filme','filon','final','finea','finei','finet','finii','finim','finiș','finit','finul','fiola','fiolă','fiole','fionc','fiong','fiord','fiori','firav','firea','firet','firez','firii','firiz','firma','firmă','firme','firos','firul','firuț','fisei','fișai','fișam','fișat','fișau','fișăm','fișca','fișcă','fișei','fișet','fișez','fișic','fișiu','fiști','fișul','fitil','fitui','fiței','fiuți','fixai','fixaj','fixam','fixat','fixau','fixăm','fixei','fixez','fixul','fizic','flama','flamă','flame','flana','flană','flanc','flane','flasc','flash','flata','flată','flaut','fleac','fleoș','fleșa','fleșă','fleșe','flețe','fleți','flint','flirt','floci','flora','floră','flore','flori','flota','flotă','flote','fluaj','fluda','fludă','flude','fluid','fluor','fluul','foaci','foaia','foaie','foale','foame','fobia','fobie','fobii','focal','focar','focii','focos','focși','focul','fodra','fodră','fodre','foehn','foene','föhne','foiai','foiam','foiau','foile','foind','foios','foiră','foire','foiri','foise','foiși','foita','foită','foite','foița','foiță','foițe','foiți','foiul','folia','folie','folii','folio','foliu','folos','fonda','fondă','fondu','fonem','fonfi','fonia','fonic','fonie','fonii','fonon','fonta','fontă','fonte','fonul','forai','foraj','foram','foraș','forat','forau','forăi','forăm','forez','forja','forjă','forje','forma','formă','forme','forte','forța','forță','forțe','forul','forum','fosei','fosil','fosta','fostă','foste','foșăi','foșni','foști','fotei','fotel','foton','fotul','foții','foxul','fraga','fragă','fragi','fraht','franc','franj','franș','frapa','frapă','frate','frați','fraza','frază','fraze','frâie','frâna','frână','frânc','frâne','frâng','frânt','frâul','freca','frecă','frece','freci','freon','freta','fretă','frete','freza','freză','freze','frica','frică','frici','frigă','frige','frigi','fript','friza','friză','frize','front','frota','frotă','fruct','frupt','frust','ftori','fucus','fudul','fufei','fugar','fugea','fugii','fugim','fugit','fugos','fugui','fuior','fular','fulat','fulau','fulee','fuleu','fulgi','fulia','fulie','fulii','fulul','fumai','fumam','fumar','fumat','fumau','fumăm','fumez','fumui','fumul','funda','fundă','funde','funga','fungă','fungi','funia','funie','funii','funți','funzi','fuoco','furai','furaj','furam','furan','furat','furau','furăm','furca','furcă','furci','furda','furia','furie','furii','furiș','furou','furul','fusar','fusei','fusta','fustă','fuste','fusul','fuște','fuști','futil','fuxul','fuzee','fuzel','fuzen','fuzit','gabia','gabie','gabii','gabja','gabjă','gabje','gabro','gacii','gaeli','gafai','gafam','gafat','gafau','gafăm','gafei','gafez','gagat','gagic','gagii','gagiu','gagul','gaiac','gaial','gaibe','gaica','gaică','gaida','gaidă','gaide','gaița','gaiță','gaițe','gaiza','gaiză','gaize','gajul','galba','galbă','galbe','galei','galeș','galet','galez','galic','galii','galiș','galiu','galon','galop','galoș','galul','gamba','gambă','gambe','gamei','gamet','ganaș','ganga','gangă','gange','garai','garaj','garam','garat','garau','garăm','garda','gardă','garez','garou','gasul','gașca','gașcă','gașei','gater','gatul','gaura','gaură','gauri','gauss','gauși','gavaj','gazai','gazam','gazat','gazau','gazăm','gazda','gazdă','gazde','gazel','gazeu','gazez','gazon','gazos','gazul','găbji','găbui','găici','găile','găina','găină','găini','găman','găoci','gării','gărzi','găsea','găsii','găsim','găsit','găști','gătai','gătam','gătat','gătau','gătăm','gătea','gătej','gătez','gătii','gătim','gătit','găuna','găună','găuni','găuri','găvan','găzar','gâcea','gâcii','gâcim','gâcit','gâdea','gâdei','gâdil','gâfâi','gâgâi','gâjâi','gâlca','gâlcă','gâlci','gâlma','gâlmă','gâlme','gândi','gânji','gârla','gârlă','gârle','gâsca','gâscă','gâște','gâtar','gâtos','gâtui','gâtul','gâței','gâzei','gâzii','geaba','geaca','geacă','geala','geală','geale','geamă','geana','geană','gebea','gecii','gecko','gelep','geliv','gelos','gelui','gelul','gemăt','gemea','gemei','gemem','gemen','gemet','gemin','gemui','gemul','gemut','genat','genei','genic','genii','geniu','genol','genom','genți','genul','geoda','geodă','geode','geoid','gepid','gerah','gerai','geram','gerar','gerat','gerau','gerăm','geret','gerez','gerid','geros','gerui','gerul','getei','getic','getul','geții','gheba','ghebă','ghebe','gheme','ghete','gheto','gheți','ghici','ghida','ghidă','ghide','ghidi','ghili','ghint','ghinț','ghiob','ghioc','ghiol','ghioș','ghips','ghiuj','ghiul','ghizd','ghizi','giaca','giacă','giace','gibon','gigăi','gigea','gigul','gimia','gimie','gimii','ginea','ginii','ginim','ginit','ginta','gintă','ginte','ginți','ginul','girai','giram','girat','girau','girăm','girez','girul','girus','gitan','glaja','glajă','gland','glanț','glasa','glasă','glăji','glenc','gliei','gliom','glisa','glisă','globi','glodi','glonț','glosa','glosă','glose','glota','glotă','glote','gluga','glugă','glugi','gluma','glumă','glume','glumi','gnais','gnomi','gnuul','goala','goală','goale','goana','goană','goane','gobăi','godac','goden','godeu','godia','godie','godii','godin','gofra','gofră','gogea','gogii','gogim','gogit','gogon','gogul','golan','golaș','golea','golii','golim','golit','golul','goluț','gomaj','gomei','gomos','gonaș','gonea','gonii','gonim','gonio','gonit','gopac','gorun','gotca','gotcă','gotce','gotic','gotul','goții','gozul','graba','grabă','grabe','grada','gradă','grade','grafe','grafi','grajd','grame','grapa','grapă','grape','grasa','grasă','grase','grași','grata','graur','grava','gravă','grave','gravi','grăbi','grăia','grăii','grăim','grăit','grăpa','grăpă','grâie','grâne','grâul','greai','gream','great','greau','greăm','grece','greci','greez','grefa','grefă','grefe','grefi','greii','grele','grena','greoi','gresa','gresă','greși','grețe','greți','greul','greva','grevă','greve','grier','grifa','grifă','grife','grija','grijă','griji','grila','grilă','grile','grill','grima','grimă','grime','grind','gripa','gripă','gripe','griul','griva','grivă','grive','grivi','griza','griză','grizu','groba','grobă','grobe','grobi','grofi','gromi','groom','gropi','groși','grota','grotă','grote','gruia','gruie','grund','grunz','grupa','grupă','grupe','guano','guard','guașa','guașă','guașe','gubav','gubei','gudur','guelf','guița','guiță','guițe','gujon','gulag','gulaș','guler','gulia','gulie','gulii','gumai','gumaj','gumam','gumat','gumau','gumăm','gumei','gumez','gunoi','gupei','gurăi','gureș','gurii','gurma','gurmă','gurme','gurna','gurnă','gurne','gurui','gurul','gurut','guseu','gusta','gustă','guste','gușat','gușii','guști','gutei','gutos','gutui','guvid','guzii','guzla','guzlă','guzle','guzul','haban','habar','hacul','Hades','hagii','hagiu','haham','haida','haide','haiku','haina','haină','haine','haini','haios','haita','haită','haite','haiti','haiul','halaj','halal','halat','halău','halba','halbă','halbe','halca','halcă','halda','haldă','halde','halea','halei','halfi','halii','halim','halit','halon','halor','halou','halta','haltă','halte','halul','halva','hamac','hamal','hamei','hamiș','hamit','hamul','hamut','hanap','hanat','hanii','hansa','hansă','hanse','hanța','hanță','hanțe','hanul','hapax','hapca','hapcă','hapci','haple','hapul','harac','harag','haram','harap','harem','hares','harfa','harfă','harfe','harpa','harpă','harpe','harșa','harta','hartă','harța','harță','harțe','harți','harul','hasca','hască','hașca','hașcă','hașeu','hașiș','hașma','hașmă','hașme','hatâr','hatia','hatie','hatii','hatul','havai','havaj','havam','havan','havat','havau','havăm','havez','havra','havră','havre','havuz','hazna','haznă','hazne','hazul','hăbuc','hăcui','hăiai','hăiam','hăiau','hăind','hăini','hăiră','hăire','hăiri','hăisa','hăise','hăiși','hăiți','hălci','hămăi','hămei','hămui','hăpăi','hărăi','hărău','hărți','hăști','hătea','hătii','hătim','hătit','hățaș','hățea','hății','hățim','hățiș','hățit','hățui','hățul','hăuia','hăuie','hăuii','hăuim','hăuit','hăuli','hăuri','hâcâi','hâdei','hâdul','hâiai','hâiam','hâiau','hâind','hâiră','hâire','hâiri','hâise','hâiși','hâita','hâită','hâite','hâiți','hâmâi','hârăi','hârău','hârâi','hârca','hârcă','hârci','hârei','hârsi','hârța','hârță','hârțe','hârți','hâșăi','hâșâi','hâtra','hâtră','hâtre','hâtri','hâtru','hâțâi','hâțân','hâzea','hâzii','hâzim','hâzit','heavy','hecht','heder','hehei','heiul','helge','helgi','helii','helio','heliu','helul','hemul','hends','henri','henry','hepar','herma','hermă','herme','hersa','hersă','herse','hertz','herul','hevea','hexan','hiada','hiadă','hiade','hibei','hicăi','hidos','hidra','hidră','hidre','hidro','hiena','hienă','hiene','hierb','hifei','hilar','hilea','hiler','hilot','hilul','himen','hindi','hioid','hiolă','hiper','hipic','hippy','hirta','hirtă','hirte','hitit','hitul','hleab','hlizi','hoața','hoață','hoațe','hoban','hobăi','hobâc','hobby','hobot','hodei','hogaș','hogea','hogei','hogii','hoher','hohot','hojma','hojmă','holba','holbă','holca','holcă','holci','holda','holdă','holde','holei','holia','holie','holii','holul','homar','honui','honul','hopai','hopăi','hopul','horai','horam','horau','horăi','horâi','horâm','horât','horda','hordă','horde','horea','horei','horeț','horii','horim','horit','horst','horul','hotar','hotei','hotel','hotul','hoțea','hoția','hoție','hoții','hoțim','hoțiș','hoțit','hoțul','house','hrana','hrană','hrane','hrăni','hrăpi','hrean','hribi','hruba','hrubă','hrube','hucii','hucul','hudei','huhur','huiau','huiet','huila','huilă','huile','huind','huiră','huire','huiri','huise','huița','huiță','huițe','huiți','huium','hulea','hulei','hulii','hulim','hulit','hulpe','hulpi','hulub','hului','humei','humic','humor','humos','humui','humus','hunii','hunul','hural','hurca','hurcă','hurci','hurez','huria','hurie','hurii','huron','hurta','hurtă','hurte','hurui','husar','husăș','husca','huscă','husei','husit','husoș','huște','huști','huțan','huțul','huțuț','huzur','iacei','iacii','iacul','iadeș','iadul','iambi','iarba','iarbă','iarna','iarnă','iartă','iarzi','iasca','iască','iasta','iastă','iaste','iatac','iaurt','iavaș','iazig','iazma','iazmă','iazul','ibiși','ibric','icnea','icnet','icnii','icnim','icnit','icose','icrei','icter','ictus','icuri','ideai','ideal','ideam','ideat','ideau','ideăm','ideea','ideez','ideii','idele','idila','idilă','idile','idiom','idiot','idoli','idoul','idrei','iedei','iedul','ieduț','iepei','ierbi','ierec','ierei','iereu','ierha','ierhă','ierhe','ierna','iernă','ierni','ierta','iertă','ierte','ierți','ierul','iesle','iesta','ieste','ieșea','ieșii','ieșim','ieșit','iești','ietac','iezea','iezer','iezii','iezim','iezit','iezme','ifose','ignam','ignar','ignat','ignee','ignei','igneu','ignor','iilor','ijele','ilaie','ilara','ilară','ilare','ilari','ilăul','ileie','ilene','ileon','ileul','ileus','iliac','ilice','ilion','ilira','iliră','ilire','iliri','iloți','imago','imala','imală','imale','imami','imani','imens','imerg','imers','imita','imită','imite','imiți','imnic','imnul','imola','imolă','imoși','impar','impas','impia','impie','impii','impiu','impui','impun','impur','impus','imput','imuna','imună','imund','imune','imuni','imuri','inapt','inari','incas','incaș','inchi','incit','incot','incub','incul','indan','index','indic','indiu','indol','induc','indus','inele','inema','inemă','ineme','inemi','inept','inerm','inert','inețe','infam','infim','infix','infra','infuz','inhib','inica','inică','inice','inici','iniei','inima','inimă','inime','inimi','inion','inița','iniță','inițe','inova','inovă','input','insei','insul','inșii','inter','intim','intra','intră','intre','intri','intru','intui','inund','inuri','invar','invit','invoc','iobag','iodat','iodic','iodul','iofca','iolei','ionic','ionii','ionit','ioniu','ionul','iosag','iotei','iotul','iovei','iovii','iovul','ipeca','ipsos','irato','irbis','ireal','iriga','irigă','irige','irigi','iriși','irita','irită','irite','iriți','iriza','iriză','irmos','irosi','irozi','iruga','irugă','irugi','irump','irumt','irupă','irupe','irupi','irupt','iruri','iscai','iscam','iscat','iscau','iscăm','islam','islaz','isnaf','isopi','ispas','ispol','istea','istei','isteț','istor','istov','istui','ișala','ișlic','iștia','iteme','itemi','ițani','ițare','ițari','ițeai','ițeam','ițeau','ițele','ițesc','ițiiu','ițind','ițiră','ițire','ițiri','ițise','ițiși','ițita','ițită','ițite','ițiți','iubea','iubeț','iubii','iubim','iubit','iudei','iudeu','iugăr','iuiai','iuiam','iuiau','iuind','iuiră','iuire','iuiri','iuise','iuiși','iuiți','iulie','iunie','iurăș','iureș','iurta','iurtă','iurte','iuruș','iusul','iușca','iușcă','iușni','iuști','iutea','iutei','iuțar','iuțea','iuții','iuțim','iuțit','iuxta','iuxtă','iuxte','ivăre','iveai','iveam','iveau','iveli','ivere','ivesc','ivind','iviră','ivire','iviri','ivise','iviși','ivita','ivită','ivite','iviți','ivrit','izbea','izbei','izbii','izbim','izbit','izbuc','izdat','izina','izină','izine','izini','izlaz','izmei','izola','izolă','izuri','izvod','izvor','îmbăt','îmbia','îmbib','îmbie','îmbii','îmbin','îmbla','îmblă','îmble','îmbli','îmblu','îmbuc','îmbun','împac','împle','împli','împlu','împui','împut','înalt','înalț','încai','încap','încât','încep','încet','încoa','încot','încui','încur','îndes','îndoi','îndop','îndur','îneca','înecă','înece','îneci','înfăș','înfăț','înfia','înfie','înfig','înfir','înfoc','înfoi','îngân','înger','înham','înhap','înhaț','înjug','înjur','înmia','înmii','înmoi','înnod','înnoi','înota','înotă','înoți','înrăi','însam','însei','însem','însor','însul','înșel','înșii','înșir','întâi','întin','întra','întră','între','întri','întru','înțep','înțes','învăț','învia','învie','învii','învoi','îraca','jabia','jabie','jabii','jabou','jabra','jabră','jabre','jabul','jacaș','jacăi','jacul','jadul','jaful','jaiul','jalba','jalbă','jalbe','jalea','jalei','jaleo','jaleș','jalet','jalon','jamba','jambă','jambe','jambu','jamei','jamna','jamnă','jamne','janta','jantă','jante','japca','japcă','japei','japii','japiu','japon','japșa','japșă','japșe','japul','jarca','jarcă','jarda','jardă','jarde','jaret','jarul','javei','javra','javră','javre','jazul','jăcaș','jăcii','jălbi','jăpși','jărci','jărea','jării','jărim','jărit','jărui','jderi','jeans','jebul','jecui','jefui','jegos','jegul','jejun','jelea','jelei','jeler','jeleu','jelii','jelim','jelit','jelui','jenai','jenam','jenat','jenau','jenăm','jenei','jenez','jepci','jepii','jepul','jerba','jerbă','jerbe','jerse','jerui','jetaj','jeteu','jeton','jetou','jetul','jețul','jiana','jiană','jibei','jibii','jibul','jicni','jidan','jidov','jiene','jieni','jigla','jiglă','jigle','jigni','jigou','jigul','jihad','jilav','jilip','jimba','jimbă','jipan','jipat','jipii','jipul','jirav','jirul','jitar','jitia','jitie','jitii','jneap','jnepi','joaca','joacă','joace','joasa','joasă','joase','joben','jobul','jocot','jocul','jocuț','jofra','jofră','jofre','joiai','joiam','joian','joiau','joile','joind','joiră','joire','joiri','joise','joiși','joita','joită','joite','joiți','jojei','joker','jonca','joncă','jonci','josul','joșii','jotei','joule','jouli','jubee','jubeu','jucai','jucam','jucat','jucau','jucăm','judec','județ','jugal','jugan','jugăr','jugul','juice','juisa','juisă','jujău','jujeu','jujub','julea','julep','julfa','julfă','julfe','julii','julim','julit','jumbo','junca','juncă','junci','junei','junel','junia','junie','junii','junta','juntă','junte','jupan','jupăi','jupân','jupea','jupei','jupii','jupim','jupit','jupoi','jupon','jupui','jurai','juram','jurat','jurau','jurăm','jurii','juriu','jurui','jurul','justa','justă','juste','juști','juvăț','juxta','juxtă','juxte','juzii','kabil','kagul','kakia','kakie','kakii','kakiu','kalam','kaliu','kamei','kamii','kaoni','kappa','karma','karme','kavei','kazah','kazoo','keaul','kediv','kenaf','kendo','kerii','kerul','ketch','ketei','kevir','khmer','kiang','kilul','kinas','kinei','kipii','kipul','kitul','koala','kobii','kobul','kodak','kogai','koine','korea','korei','kovar','kraal','kraft','krill','kubei','kudul','kulan','kumel','kurda','kurdă','kurde','kurzi','kyați','kyrie','laban','labei','label','labia','labie','labii','labil','labio','labiu','labri','labru','labul','lacăt','lacom','lacra','lacră','lacre','lacși','lacti','lacto','lacul','ladin','laful','lagăr','lagon','lagum','lahar','laica','laică','laice','laici','laiei','laița','laiță','laițe','laiul','lalea','lamai','lamam','lamat','lamau','lamăm','lamba','lambă','lambe','lamei','lamez','lampa','lampă','lance','landa','landă','lande','lanei','lansa','lansă','lanul','lapăd','lapid','lapin','lapis','lapit','lapon','lapte','lapți','larea','larga','largă','largi','largo','larii','larma','larmă','larme','larul','larva','larvă','larve','larvi','laser','lasou','lașai','lașam','lașat','lașau','lașăm','lașei','lașez','lașii','lașul','latei','later','lateș','latex','latin','latir','latră','latre','latri','latru','latul','lații','lațul','lauda','laudă','laude','lauri','lauzi','lavaj','lavei','laviu','lavra','lavră','lavre','laxei','laxul','lazul','lazzi','lăbos','lăcar','lăcaș','lăcat','lăcui','lădoi','lăfăi','lăieș','lăieț','lăile','lălăi','lălâi','lălâu','lămâi','lămpi','lănci','lăpăi','lărgi','lării','lăsai','lăsam','lăsat','lăsau','lăsăm','lătoc','lătra','lătră','lătur','lățea','lății','lățim','lățiș','lățit','lățos','lăuda','lăudă','lăură','lăuse','lăuși','lăuta','lăută','lăute','lăuți','lăuza','lăuză','lăuze','lăuzi','lăzii','lăzui','lângă','lânii','lânos','leacă','leafa','leafă','leagă','leaha','leahă','leala','leală','leale','leali','leasa','leasă','lebăr','lebes','lecii','lecit','lecui','lecuț','ledul','lefii','lefți','legai','legal','legam','legat','legau','legăm','legăn','legea','leghe','legic','legii','legul','lehăi','lehău','leica','leică','leici','leita','leită','leite','leița','leiță','leițe','leiți','lejer','lekul','lelea','lelei','leleu','lelii','lemei','lemne','lemul','lenaj','lenci','lenea','lenei','leneș','lenii','lenim','lenit','lenos','lenta','lentă','lente','lento','lenți','leone','leoni','lepăd','lepăi','lepra','lepră','lepre','lepșe','lepși','lepta','lepte','lepto','lepui','leroi','lerui','lerul','lesei','lesne','lesoi','lesta','lestă','leșei','leșia','leșie','leșii','leșin','lește','leșui','leșul','letal','letca','letcă','letci','leton','leții','leuaș','leuca','leucă','leuci','leuco','leuți','levei','levit','lexem','lexia','lexic','lexie','lexii','lezai','lezam','lezat','lezau','lezăm','lezez','liaje','liana','liană','liane','liant','liară','liase','liași','liata','liată','liate','liați','liaza','liază','liaze','libel','liber','libov','licăr','licee','liceu','licit','licur','lider','lidic','lieno','liere','lieri','lieze','liezi','lifta','liftă','lifte','ligav','ligii','ligni','ligno','ligul','ligur','lihăi','lihni','liind','liman','limax','limba','limbă','limbi','limei','limen','limes','limfa','limfă','limfe','limfo','limin','limni','limno','limon','limul','limus','linca','linei','liner','lingă','linge','lingi','linia','linie','linii','linio','links','linon','linou','linsa','linsă','linse','linșa','linșă','linși','linte','linți','linul','liota','liotă','liote','lipan','lipăi','lipcă','lipea','lipei','lipia','lipie','lipii','lipim','lipit','lipom','lipsa','lipsă','lipse','lipsi','lipul','lirat','lirei','liric','lisai','lisam','lisat','lisau','lisăm','lisei','lisez','lista','listă','liste','lisul','lișii','litia','litic','litie','litii','litiu','litou','litra','litră','litre','litri','litru','liței','liude','liuzi','livan','livid','livra','livră','livre','lizai','lizam','lizat','lizau','lizăm','lizei','lizez','lizol','loaza','loază','loaze','lobai','lobam','lobar','lobat','lobau','lobăm','lobby','lobda','lobdă','lobde','lobez','lobii','lobul','local','locaș','locei','locel','locii','locma','locui','locul','locus','lodba','lodbă','lodbe','loden','loess','lofai','lofam','lofat','lofau','lofăm','lofez','logia','logic','logie','logii','logos','lohan','lohii','lohio','loial','lojei','lojii','lombe','lomul','longi','lonja','lonjă','lonje','loran','lorar','lorii','loris','lorzi','lotca','lotcă','lotci','lotei','loton','lotri','lotru','lotul','lotus','loure','lovea','lovii','lovim','lovit','lozia','lozie','lozii','lozul','luară','luare','luase','luași','luata','luată','luate','luați','luări','luând','lucea','lucia','lucid','lucie','lucii','lucim','luciș','lucit','luciu','lucra','lucră','lucre','lucri','lucru','lucși','ludea','ludei','ludic','ludul','lueta','luetă','luete','lufar','lufei','lufta','luftă','lugol','lujer','lulea','lumea','lumen','lumeț','lumii','lunar','lunca','luncă','lunch','lunci','lunea','lunec','lunga','lungă','lungi','lunic','lunii','lupan','lupei','lupia','lupic','lupie','lupii','lupin','lupiu','lupoi','lupom','lupon','lupta','luptă','lupte','lupți','lupul','lupus','lurex','lusin','lușai','lușam','lușat','lușau','lușăm','lușei','lușez','lușii','lușul','luteo','lutos','lutra','lutră','lutre','lutru','lutui','lutul','luxai','luxam','luxat','luxau','luxăm','luxez','luxos','luxul','luzii','lycra','macac','macat','macaz','mache','machi','macho','macii','macin','macla','maclă','macle','macra','macră','macre','macri','macro','macru','macul','madam','madea','mafia','mafie','mafii','magia','magic','magie','magii','magma','magmă','magme','magna','magni','magno','magot','magul','mahăr','mahon','mahut','maial','maica','maică','maice','maici','maiei','maieu','maina','maină','maior','maiou','maișa','maișă','maișe','maiul','major','majur','makii','malac','malar','malic','malin','malul','mamar','mamba','mambo','mamei','mamon','mamoș','mamut','manaf','manca','mancă','mance','manco','manea','manei','manej','mango','mania','manie','manii','manșa','manșă','manșe','manta','mantă','mante','manul','maori','mapei','maran','maraz','marca','marcă','marda','mardi','marea','maree','marfa','marfă','marga','margă','marge','maria','marie','marii','marin','marja','marjă','marje','marna','marnă','marne','maron','marșa','marșă','marșe','marte','marți','masai','masaj','masam','masat','masau','masăm','masca','mască','masei','maser','masez','masic','masiv','masla','maslă','masle','maslu','mason','masor','masta','mastă','maste','masto','masul','mașai','mașam','mașat','mașau','mașăm','mașez','mașii','matai','matam','matat','matau','matăm','matca','matcă','matei','mater','matez','matol','mator','matri','matro','matuf','matul','matur','mații','mațul','maura','maură','maure','mauri','maxim','maxit','mayas','mayei','mazâl','mazil','mazul','mazur','mazut','măcar','măcăi','măcău','măcel','măceș','măgan','măgar','măiug','măiuț','măjar','măjer','măjii','mălai','mălin','măluț','mămos','mănat','mănau','mănos','mărar','măraz','mărci','mărea','măreț','mărfi','măria','mărie','mării','mărim','mărit','măroi','mărul','măruț','măsai','măsar','măsea','măsei','măsoi','măsor','măști','mătci','mătur','mățar','mâcăi','mâché','mâcii','mâgla','mâglă','mâgle','mâhni','mâind','mâine','mâini','mâlci','mâlea','mâlii','mâlim','mâlit','mâlos','mâlul','mânai','mânam','mânaș','mânat','mânau','mânăm','mânca','mâncă','mânce','mânci','mânea','mânec','mânem','mâner','mânia','mânie','mânii','mânji','mânui','mânza','mânză','mânze','mârâi','mârei','mârli','mâșâi','mâtca','mâtcă','mâtci','mâțan','mâței','mâții','mâțoi','mâțuc','mâțul','mâzga','mâzgă','mâzgi','meară','meato','mecăi','mecet','media','medic','medie','medii','medio','mediu','medul','mefia','mefie','megal','mehăi','meiul','mejda','mejdă','mejde','melan','melci','meleu','melia','melic','melii','meliț','melod','meloe','melon','melos','melul','menaj','menea','menii','menim','menit','meniu','menou','menta','mentă','mente','menur','merar','merei','merem','mereu','merge','mergi','merii','merit','merlu','merse','mersi','merși','merul','mesaj','mesaș','mesea','mesei','mesia','mesii','mesim','mesit','mesto','meșei','meșii','meșul','metal','metan','metec','meteo','metil','metis','metoc','metod','metoh','metol','metop','metri','metro','metru','mezat','mezel','mezii','mezin','mezon','mezzo','miala','mială','miare','miaua','miaul','miaun','miaut','miaza','miază','miaze','micea','micei','micet','micii','micim','micit','micro','micul','micuț','midia','midie','midii','mieii','mieji','miele','mielo','miere','mieri','miezi','migăi','migma','migmă','migme','migra','migră','miile','miime','miimi','mijea','mijii','mijim','mijit','milan','milei','milog','milos','milui','milul','mimai','mimam','mimat','mimau','mimăm','mimei','mimez','mimic','mimii','mimul','minai','minaj','minam','minat','minau','minăm','minei','miner','minez','minge','mingi','minia','minie','minim','miniu','minor','minta','mintă','minte','mință','minți','minus','minut','mione','mioni','miopi','miorc','miori','mioza','mioză','mioze','mirai','miraj','miram','miras','mirat','mirau','miraz','mirăm','mirei','mirel','mirez','mirha','mirhă','mirhe','miria','mirie','mirii','miros','mirți','mirui','mirul','misei','misia','misie','misii','misil','misir','misit','mișca','mișcă','mișea','mișei','mișel','miște','miști','mișto','mișui','mișun','mitei','mitel','mitic','mitoc','mitra','mitră','mitre','mitui','mitul','mițea','miței','miții','mițim','mițit','mițos','mițui','miuon','mixai','mixaj','mixam','mixat','mixau','mixăm','mixer','mixez','mixia','mixie','mixii','mixom','mixta','mixtă','mixte','mizai','mizam','mizat','mizau','mizăm','mizei','mizer','mizez','mizid','mlaca','mlacă','mlada','mladă','mlaja','mlajă','mlăci','mlăji','mlăzi','mnema','mnemă','mneme','mnemo','moaca','moacă','moace','moaie','moale','moara','moară','moare','moașa','moașă','moașe','moața','moață','moațe','moaul','moaza','moază','moaze','mobil','mocan','mocăi','mocea','mocii','mocim','mocit','mocni','mocul','modal','modei','model','modem','moder','modic','modre','modru','modul','modus','mogul','mohor','moile','moima','moimă','moime','moina','moină','moine','mojar','mojic','molai','molal','molam','molan','molar','molat','molau','molăm','molâi','molâu','molda','moldă','molde','moldo','molei','molet','molez','molia','molid','molie','molii','moloh','molon','molos','moloz','molto','molul','momâi','momea','momii','momim','momit','monac','mondo','monem','mongo','monic','monom','monta','montă','monte','mopși','mopul','moral','morar','morav','morei','morfo','morga','morgă','morgi','moria','morii','morna','mornă','morne','morni','moroi','moron','morsa','morsă','morse','morți','morua','moruă','morue','morun','morva','morvă','morve','mosor','mosso','moșan','moșea','moșia','moșic','moșie','moșii','moșim','moșit','moști','moșuc','moșul','motan','motca','motcă','motci','motel','motet','motiv','motoc','motor','motto','moțai','moțam','moțat','moțau','moțăi','moțăm','moțez','moții','moțoc','moțul','mouse','movul','moxei','mozan','mozoc','mozol','mreja','mrejă','mreje','mreji','mrene','mucar','mucea','muced','muche','muchi','mucii','mucor','mucos','mucul','mucus','mudir','mufei','mufla','muflă','mufle','mugea','muget','mugii','mugim','mugit','mugur','muhur','muiai','muiaj','muiam','muiat','muiau','muica','muică','muici','muiem','muind','mujic','mulai','mulaj','mulam','mulat','mulau','mulăm','mulei','mulez','mulgă','mulge','mulgi','mulii','mulsa','mulsă','mulse','mulși','multa','multă','multe','multi','mulți','mulul','mumei','mumia','mumie','mumii','munca','muncă','munci','munda','mundi','mungo','munte','munți','murai','mural','muram','murat','murau','murăm','murea','murei','murex','murez','murga','murgă','murgi','murid','murii','murim','murin','muriș','murit','mursa','mursă','murse','murui','murul','musai','musat','musau','musca','muscă','musci','musei','musiu','müsli','muson','musti','musul','mușca','mușcă','mușii','muște','muști','mutai','mutam','mutat','mutau','mutăm','mutei','mutic','muton','mutra','mutră','mutre','mutul','muțea','muția','muție','muții','muțim','muțit','muțiu','muzee','muzei','muzeo','muzeu','muzic','nabab','nabor','nacru','nadei','nadel','nadir','nadol','nafea','nafta','naftă','nafte','nagâț','nahur','naiba','naica','naică','naici','naiei','naira','naire','naist','naiul','naiva','naivă','naive','naivi','najna','najnă','najne','nalba','nalbă','nalbe','nalta','naltă','nalte','nalță','nalțe','nalți','namaz','nandu','nanei','nanii','nanul','napai','napam','napat','napau','napăm','napez','napii','napul','narai','naram','narat','narau','narăm','narco','narea','narez','narnă','nască','nasol','nasul','nașei','nașii','naște','naști','nașul','natal','nativ','natra','natră','natre','natul','natur','nația','nație','nații','nauto','naval','navei','navlu','nazal','nazar','nazâr','nazir','nazul','năboi','năbuc','năbuș','năcaz','nădăi','năduf','năduh','năhut','năier','năile','năimi','năjea','năjii','năjim','năjit','nălbi','nălța','nălță','nămea','nămii','nămim','nămit','nămol','nănaș','nărav','nării','nărod','nărui','născu','năsip','năsli','năsoi','năsos','năsuc','năsui','năsut','năsuț','nășea','nășei','nășel','nășia','nășic','nășie','nășii','nășim','nășit','năuca','năucă','năuce','năuci','năvod','năzar','năzii','năzui','nânaș','neaga','neagă','neamț','neant','neaoș','neaua','neauă','nează','nebun','necaz','necro','necum','nedei','neder','nefei','nefel','nefer','nefla','neflă','nefle','nefro','negai','negam','negat','negau','negăm','negei','negel','negii','negos','negoț','negre','negri','negro','negru','negui','negul','negus','neica','neică','neios','nemat','nemeș','nemet','nemic','nemți','nemuț','nenea','nenei','nenia','nenic','nenie','nenii','nenuț','nepei','neper','nepot','nepus','neras','nerod','nervi','nesaț','nesul','nește','neted','netei','netez','netot','netul','neții','nețul','neuma','neumă','neume','neuri','neuro','neveu','nevia','nevie','nevii','neviu','nevod','nevoi','nevri','nevro','nevul','nexul','nicio','nicol','nicti','nicto','nidus','niela','nielă','niele','nimba','nimbă','nimfa','nimfă','nimfe','nimfo','nimic','ningă','ninge','ninja','ninsa','ninsă','ninse','ninși','niper','niplu','nipon','nisip','nișei','niște','nitra','nitră','nitro','nitui','nitul','niței','nițel','niții','nival','nivel','nixei','nixis','nizam','noada','noadă','noade','nobil','nociv','nocti','nodal','nodos','nodul','noema','noemă','noeme','noeza','noeză','noeze','nogai','noian','noile','noima','noimă','noime','noimi','noița','noiță','noițe','nomad','nomei','nomol','nomul','nonei','nonet','noneu','nopai','nopal','nopam','nopat','nopau','nopăm','nopeu','nopez','nopți','norea','norei','norii','norit','norma','normă','norme','normo','noroc','norod','noroi','noros','norul','noruț','noști','notai','notam','notar','notat','notau','notăm','notei','notes','notez','nouar','nouăi','noura','noură','nouri','nouța','nouță','nouțe','nouți','novac','novai','novam','novat','novau','novăm','novei','novez','noxei','nubil','nubuc','nucal','nucar','nucet','nucii','nucle','nucul','nucuț','nudei','nudul','nufăr','nulei','nulii','nulul','numai','număr','numea','numen','numii','numim','numit','nunei','nunii','nunta','nuntă','nunti','nunți','nunul','nuori','nurca','nurcă','nurci','nurii','nursa','nursă','nurse','nurul','nutri','nutui','nutul','nuzii','nyaya','nyaye','oabla','oablă','oable','oacăn','oacăr','oagei','oalei','oarba','oarbă','oarbe','oarda','oardă','oarde','oarei','oarze','oaspe','oaste','oașei','oazei','obada','obadă','obaht','obăda','obădă','obări','obela','obelă','obele','oberi','obeza','obeză','obeze','obezi','obida','obidă','obide','obidi','obiul','oblat','oblea','obleț','oblic','oblig','oblii','oblim','oblit','oblon','oblul','oboli','obora','obori','oborî','obosi','obote','obraț','obraz','obroc','obron','obște','obști','obtuz','obție','obții','obțin','obțiu','obuze','ocale','ocara','ocară','ocaua','ocăia','ocăie','ocăit','ocăle','ocăra','ocări','ocărî','ocean','oceli','ochea','ochet','ocheț','ochii','ochim','ochit','ochlo','ocile','ocina','ocină','ocini','oclus','ocnaș','ocnei','ocoli','ocrul','octal','octan','octet','oculo','ocult','ocupa','ocupă','ocupe','ocupi','ocurg','ocurs','odaia','odaie','odată','odăii','odele','odeon','odgon','odina','odină','odine','odini','odino','odios','odiul','odont','odori','oesar','oferă','ofere','oferi','offul','ofili','ofise','ofism','ofiur','ofset','oftai','oftam','oftat','oftau','oftăm','oftez','oftic','oftig','oftul','ofuri','ofusc','ogari','ogeac','ogeag','ogece','ogege','ogiva','ogivă','ogive','ogoia','ogoie','ogoii','ogoim','ogoit','ogora','ogorî','ohaba','ohabă','ohabe','ohmic','ohmii','ohmul','oiaga','oiagă','oidea','oidia','oidie','oidii','oiegi','oieri','oiesc','oilor','oinei','oiște','oiști','oiței','ojele','ojina','ojină','ojine','ojini','ojogi','okapi','okume','olace','olaci','olana','olană','olane','olani','olari','olate','olcar','oleab','oleat','oleia','oleic','oleie','oleom','oleul','oleum','oligo','olița','oliță','olițe','oliva','olivă','olive','olmaz','olmii','olmul','ologi','oloia','oloii','oloim','oloit','olori','olozi','olpei','oltar','oluri','oluțe','omagi','ombro','omega','omeni','oment','omeți','omfal','omida','omidă','omisa','omisă','omise','omiși','omită','omite','omiți','omizi','omnia','omoii','omora','omori','omorî','onest','onico','oniro','onoma','onora','onoră','onori','ontic','onuri','oocit','oofit','oofor','oogon','oolit','oozom','opaca','opacă','opace','opaci','opaiț','opale','opăci','opări','opera','operă','opere','opiat','opina','opină','opise','opist','opiul','opium','oprea','opreg','oprii','oprim','oprit','opsas','opșpe','optai','optam','optar','optat','optau','optăm','optez','optic','optim','optul','opuie','opună','opune','opuri','opusa','opusă','opuse','opust','opuși','oraje','orala','orală','orale','orali','oranj','orant','oranz','orara','orară','orare','orari','orașe','orând','orbea','orbec','orbeț','orbia','orbie','orbii','orbim','orbiș','orbit','orbul','orcan','orcăi','orcic','orcul','ordia','ordie','ordii','ordin','ordon','oreav','orele','orexi','orfan','orfic','organ','orgia','orgie','orgii','orice','oriei','orier','orile','orjad','orlon','ornai','ornam','ornat','ornau','ornăm','ornez','ornic','orori','orșag','ortac','ortic','ortul','orții','orzar','orzul','osana','osari','oscar','oscei','oscii','oscil','oscul','osebi','oseta','osetă','osete','oseți','osiei','osman','osmic','osmiu','osmol','osoși','ospăț','ospeț','osram','ossia','ossii','ostaș','osteo','ostia','ostic','ostie','ostii','ostil','ostoi','ostul','osuar','osuțe','oșean','oșene','oșeni','oștea','oștii','oștim','oștit','otace','otaje','otava','otavă','otave','otăvi','otcoș','otcup','otele','otfel','otgon','otice','otinc','otita','otită','otite','otova','oturi','oțăra','oțări','oțărî','oțele','oțeli','oțera','oțeri','oțerî','oțeti','oțeți','oțios','ouară','ouare','ouase','ouata','ouată','ouate','ouați','ouăle','ouări','ouând','ouleț','oului','oușor','ouțul','ovala','ovală','ovale','ovali','ovare','ovata','ovată','ovate','ovați','ovele','ovese','oveze','ovili','ovina','ovină','ovine','ovini','ovism','ovoid','ovrei','ovreu','ovule','oxali','oxalo','oxida','oxidă','oxido','oxiur','oxizi','ozele','ozena','ozenă','ozene','ozona','ozonă','pacea','pacte','pacul','padia','padie','padii','padoc','pafta','pagăi','pagei','pager','pagii','pagul','pagur','pahar','paici','paiet','paing','paiol','paion','pairi','paiul','pajii','pajul','palan','palat','palca','palcă','palce','palee','palei','paleo','palha','palhă','palhe','palia','palid','palie','palii','paliu','palma','palmă','palme','palmi','paloș','palpa','palpă','palpe','palpi','palul','paluș','palux','pamai','pamam','pamat','pamau','pamăm','pamez','pampa','pampe','panaș','panda','panel','paner','panii','panou','pansa','pansă','panta','pantă','pante','panul','panus','papal','papei','papii','papir','papua','papuc','papul','papus','parai','param','parat','parau','parăm','parca','parcă','parce','parei','parem','parez','parfe','paria','parie','parii','parip','pariu','paroh','paroi','parol','parom','parși','parta','partă','parte','party','parți','parul','pasai','pasaj','pasam','pasat','pasau','pasăm','pasca','pască','pasei','pasez','pasiv','pasta','pastă','paste','pasul','pașca','pașcă','pașei','pașii','pașli','pașol','paște','paști','pașuș','pater','pateu','patio','patma','patmă','patme','patos','patra','patru','patul','pauca','paucă','pauce','pauza','pauză','pauze','pavai','pavaj','pavam','pavat','pavau','pavăm','pavea','pavei','pavez','pazei','pazia','pazie','pazii','păbâi','păcat','păcii','păfug','păgân','păhar','păhăi','păiai','păiam','păiau','păier','păind','păios','păiră','păire','păiri','păise','păiși','păita','păită','păite','păiți','păiuș','păiuț','pălan','pălea','pălii','pălim','păliș','pălit','păpai','păpam','păpat','păpau','păpăm','păpuc','păraș','părău','părea','părem','păros','părți','părui','părul','părut','păsai','păsam','păsat','păsau','păsăm','păscu','păsui','păsul','pășea','pășii','pășim','pășin','pășit','păști','pătai','pătam','pătat','pătau','pătăm','pătez','pătuc','pătul','pătuț','pățea','pății','pățim','pățit','păuna','păună','păune','păuni','păzea','păzii','păzim','păzit','pâcăi','pâcâi','pâcla','pâclă','pâcle','pâine','pâini','pânda','pândă','pânde','pândi','pânza','pânză','pânze','pâpor','pârai','pâram','pârau','pârăi','pârău','pârâi','pârâm','pârâș','pârât','pârâu','pârei','pârga','pârgă','pârgi','pârii','pârli','pârși','pârte','pârți','pârul','pâsla','pâslă','pâsle','pâsli','pâșii','pâșin','pâșul','peana','peană','peane','pecia','pecie','pecii','peciu','pecum','pedea','pedel','pedes','pefug','pegas','pegra','pegră','pegre','pejma','pejmă','pejme','pelaj','peleș','pelin','pelit','pelur','pembe','penai','penaj','penal','penam','penar','penat','penau','penăm','penei','penel','penet','penez','penii','penin','penis','penny','pensa','pensă','pense','pente','penți','peoni','pepit','peplu','pepsi','peree','perei','peren','pereu','peria','perie','perii','periș','perja','perjă','perje','perji','perla','perlă','perle','perna','pernă','perne','peron','persa','persă','perse','perși','peruș','pesos','pesta','pestă','peste','pesti','peșim','peșin','pește','pești','petas','petea','petec','petei','petic','petit','pețea','peții','pețim','pețit','pfund','piane','piano','piară','piața','piață','piaza','piază','picai','picaj','picam','picat','picau','picăm','picii','picni','picol','picon','picot','picou','picta','pictă','picui','picul','picup','picur','picuș','picuț','pieii','piele','pielm','piemn','piept','pierd','piere','pieri','pierz','piesa','piesă','piese','pieta','piețe','pieze','piezi','pifan','pifei','pilaf','pilar','pilda','pildă','pilde','pilea','pilei','pilii','pilim','pilit','pilon','pilor','pilos','pilot','pilug','pilul','pinen','pinii','pinot','pința','pință','pințe','pinul','pioni','pioși','piota','piotă','piote','pipai','pipam','pipat','pipau','pipăi','pipăm','pipei','piper','pipez','pipit','pirat','pireu','pirex','piroi','pirol','piron','pirop','pirui','pirul','pisai','pisam','pisar','pisat','pisau','pisăm','piser','pisez','pisic','pisoi','pista','pistă','piste','pișai','pișam','pișat','pișau','pișăm','pișca','pișcă','piște','piști','pișul','pitac','pitan','pitar','pitea','pitei','pitic','pitii','pitim','pitiș','pitit','pitoi','piton','pitul','pițan','pițig','piuai','piuam','piuar','piuat','piuau','piuăm','piuei','piuez','piuia','piuie','piuit','piure','piuuu','pivei','pivot','pixul','pizma','pizmă','pizme','pizza','pizză','pizze','placa','placă','place','placi','plaga','plagă','plaie','plaja','plajă','plaje','plana','plană','plane','plani','plano','plasa','plasă','plase','plata','plată','plate','plați','plaur','plava','plavă','plave','plavi','plăci','plăcu','plăgi','plăși','plăti','plăți','plâng','plâns','plean','plebe','pleca','plecă','plece','pleci','pleda','pledă','plene','plese','pleșe','pleși','plete','pleul','pleve','pliai','pliaj','pliam','pliat','pliau','plica','plică','plice','plici','pliem','pliez','plimb','plina','plină','pline','plini','plisa','plisă','plisc','plise','plita','plită','plite','pliul','plivi','plodi','ploii','plopi','ploua','plouă','plozi','plumb','pluri','plusa','plusă','plușa','plușă','pluta','plută','plute','pluti','pneul','poala','poală','poale','poama','poamă','poame','poara','poară','poare','poată','poate','pocal','pocăi','pocea','pocia','pocie','pocii','pocim','pocit','pocni','pocoi','podan','podar','podea','podeț','podii','podim','podiș','podit','podul','poduț','poema','poemă','poeme','poeta','poetă','poete','poeți','pofil','pofta','poftă','pofte','pofti','pogan','pogon','pogor','pohar','pohod','pohoi','pohoț','pohta','pohtă','pohte','pohti','poise','pojar','poker','polar','polca','polcă','polci','polei','polen','polii','polip','polis','poliș','polje','polog','polon','poloș','polua','poluă','polul','pomăi','pomet','pomii','pompa','pompă','pompe','pomul','ponce','ponci','ponei','ponit','poniv','ponod','ponor','ponos','ponta','pontă','ponte','ponți','popas','popaz','popâc','popea','popei','popia','popic','popie','popii','popim','popit','popol','popor','popou','popri','popul','porci','porif','porii','porni','porno','poros','porta','portă','porte','porto','porți','porul','posac','posed','posta','postă','poste','posti','poșta','poștă','poște','poșul','potăi','potca','potcă','potce','potir','potop','potou','potul','pound','povăț','povod','povoi','poxia','poxie','poxii','pozai','pozam','pozat','pozau','pozăm','pozei','pozez','pozna','poznă','pozne','prada','pradă','prade','praji','prașa','prașă','prașe','praxa','praxă','praxe','prazi','prăci','prăda','prădă','prăde','prăji','prăsi','prăși','prăzi','prânz','preda','predă','prefă','preia','preot','presa','presă','prese','preta','pretă','prezi','prian','priau','prica','prică','price','prici','prier','priit','prima','primă','prime','primi','primo','prind','prins','print','prinț','prinz','priod','prior','pripa','pripă','pripe','pripi','priva','privă','privi','priza','priză','prize','proba','probă','probe','probi','proci','produ','proin','prois','proor','prora','proră','prore','prost','proto','prour','prova','provă','prove','proza','proză','proze','pruba','prubă','prube','pruda','prudă','prude','pruei','pruha','pruhă','pruhe','pruja','prujă','pruji','pruna','prună','prunc','prund','prune','pruni','pruzi','psalm','psalt','psoas','ptoza','ptoză','ptoze','ptuși','puber','pubis','pubul','puchi','pucul','pudel','pudic','pudla','pudlă','pudli','pudra','pudră','pudre','pudul','pufăi','pufăr','pufii','pufna','pufnă','pufne','pufni','pufos','pufui','puful','puhav','puhei','puhoi','puhui','puian','puiat','puiau','puica','puică','puici','puiet','puind','puios','puiră','puire','puiri','puise','puita','puită','puite','puiți','puiuc','puiul','puiuț','pulia','pulie','pulii','pulpa','pulpă','pulpe','pulsa','pulsă','pulul','pumei','pumni','punci','punct','punea','punem','punga','pungă','pungi','punic','punii','punta','puntă','punte','punți','punul','punzi','pupai','pupam','pupat','pupau','pupăi','pupăm','pupei','pupic','pupii','pupil','pupoi','pupui','pupul','purec','purei','purga','purgă','puric','purii','purim','purja','purjă','purje','puroi','purta','purtă','purul','pusei','puseu','pusta','pustă','puste','pusul','pușca','pușcă','pușii','puște','puști','putea','putem','putui','putut','puțar','puțea','puții','puțim','puțin','puțit','puțul','puvoi','quale','quarc','quazi','quick','quipu','rabat','rabdă','rabde','rabia','rabic','rabie','rabii','rabin','rabiț','rabla','rablă','rable','rabzi','racem','racii','racla','raclă','racle','racul','radar','radei','radem','radia','radie','radio','radiu','radom','radon','radou','radul','rafia','rafie','rafii','raful','ragea','ragem','ragil','rahat','rahis','raion','raita','raită','raite','raiul','rajah','ralia','ralid','ralie','raliu','ralul','ramai','ramam','ramat','ramau','ramăm','ramca','ramcă','ramce','ramei','ramer','ramez','ramia','ramie','ramii','rampa','rampă','rampe','ramul','ranch','randa','randă','rande','ranga','rangă','rapăn','rapel','rapid','rapul','rarei','rarii','rarul','rasat','rasei','rasol','rasul','rașca','rașcă','rașel','rașii','rașpa','rașpă','rașpe','ratai','ratam','ratat','ratau','ratăm','ratei','rateș','rateu','ratez','ratoș','rațca','rațcă','rațce','raței','rația','rație','rații','ravac','razăm','razei','razia','razie','razii','razim','razna','raznă','razne','razul','răbda','răbdă','răboj','răbui','răbuș','răcan','răcar','răcea','răcii','răcim','răcit','răcni','rădan','rădea','rădic','rădiu','răfui','răgaz','răgea','răget','răgii','răgit','răgoz','rămas','rămâi','rămân','rănea','răngi','rănii','rănim','rănit','răpăi','răpea','răpii','răpim','răpit','răpui','răpun','răpus','rărea','rării','rărim','răriș','rărit','răsad','răsar','răsei','răsti','răsuc','răszi','rășci','rătez','rățoi','răvar','răvaș','răzat','răzau','răzbi','răzda','răzdă','răzeș','răzni','răzor','răzui','răzuș','râbar','râcâi','râcii','râdea','râdem','râgâi','râiei','râios','râlei','râmat','râmau','râmei','râmni','rânca','râncă','rânci','rânea','rânei','rânii','rânim','rânit','rânji','rânsa','rânsă','rânse','rânza','rânză','rânze','râpei','râpii','râpos','râsei','râset','râsul','râșii','râșni','râtan','râtul','râței','râura','râură','râuri','râvna','râvnă','râvne','râvni','râzna','râznă','râzne','readă','readu','reala','reală','reale','reali','reaua','rebab','rebat','rebec','rebel','rebus','rebut','recad','recăl','recea','recif','recii','recit','recoc','recte','recto','recul','recuz','redai','redam','redan','redat','redau','redăm','redea','redia','redie','redig','redii','rediș','rediu','redox','reduc','redus','refac','refec','refer','refug','reful','refuz','regal','regat','regea','regia','regie','regii','regim','regla','reglă','reiat','reiau','reiei','reies','rejet','rejoc','relaș','relee','releg','relei','releu','relev','relon','relua','reluă','remii','remis','remit','remul','remuu','renal','renan','renci','reneg','renet','renia','renie','renii','reniș','reniu','renta','rentă','rente','renul','repar','reped','reper','repet','repeț','repez','repui','repun','repus','resac','reșca','reșcă','reșce','reșou','retez','retor','retro','retur','retuș','rețea','reție','reții','rețin','rețiu','reuma','reumă','reume','reuni','reuși','revăd','revăz','rever','revie','revii','revin','reviu','revoc','rezec','rezem','rezil','rezol','rezon','rezum','riali','ricin','ricșa','ricșă','ricșe','ridai','ridam','ridat','ridau','ridăm','ridez','ridic','ridul','rifii','riflu','riful','rigăi','right','rigid','rigii','rigla','riglă','rigle','rijei','rilei','rilul','rimai','rimam','rimat','rimau','rimăm','rimei','rimel','rimez','rinei','ripai','ripam','ripat','ripau','ripăm','ripez','risca','riscă','rișca','rișcă','riște','riști','ritma','ritmă','ritor','ritos','ritul','rițin','rițui','rițul','rival','rizat','rizic','rizil','rizom','rizul','roaba','roabă','roabe','roada','roadă','roade','roagă','roage','roasa','roasă','roase','roast','roata','roată','roate','roază','robea','robei','robia','robie','robii','robim','robit','robot','robul','roche','rochi','rocii','rocul','rodai','rodaj','rodam','rodan','rodat','rodau','rodăm','rodea','rodeo','rodez','rodia','rodie','rodii','rodim','rodin','rodit','rodiu','rodor','rodos','rodul','rofii','rogoz','roiai','roiam','roiau','roiba','roibă','roibe','roibi','roind','roiră','roire','roiri','roise','roiși','roita','roită','roite','roiți','roiul','rolan','rolat','rolei','rolul','roman','român','romei','romeu','romii','romul','ronda','rondă','ronde','rondo','ronja','ronjă','ropăi','ropot','rosei','rosti','rosul','roșca','roșcă','roșea','roșei','roșia','roșie','roșii','roșim','roșit','roște','roșul','rotai','rotam','rotar','rotaș','rotat','rotau','rotăm','rotea','rotez','rotii','rotim','rotin','rotiș','rotit','rotor','roții','rouăi','rouei','roura','roură','rouța','rouță','rouțe','rozei','rozia','rozie','rozii','roziu','rozul','rroma','rromă','rrome','rromi','ruaje','rubai','rubia','rubin','rubla','rublă','ruble','rudar','rudea','rudei','rudii','rudim','rudit','rufei','rufet','rufos','ruful','rugai','rugam','rugat','rugau','rugăm','rugbi','rugby','rugea','ruget','rugii','rugim','rugit','rugos','rugul','ruina','ruină','ruine','ruini','rujai','rujam','rujan','rujar','rujat','rujau','rujăm','rujei','rujet','rujez','rujii','rujul','rulai','rulaj','rulam','rulat','rulau','rulăm','rulez','ruliu','rulou','rumân','rumba','rumbă','rumbe','rumeg','rumen','rummy','rumpă','rumpe','rumpi','rumpt','rumse','rumta','rumtă','rumte','rumți','rumul','runda','rundă','runde','runei','runic','rupea','rupem','rupia','rupie','rupii','rupse','rupta','ruptă','rupte','rupți','rural','rusca','ruscă','rusce','rusei','russe','rusul','rușii','ruște','rutei','rutil','rutul','sabaș','sabat','sabia','sabie','sabin','sabir','sabla','sablă','sabot','sabur','sabuș','sacâz','sacii','sacos','sacou','sacra','sacră','sacre','sacri','sacru','sacul','sadea','sadei','sadic','sadul','safeu','safic','safir','sagna','sagnă','sagne','sagum','sahan','sahel','saigi','salam','salar','salba','salbă','salbe','salca','salcă','salce','salep','saleu','salic','salin','salip','salol','salon','salsa','salse','saltă','salte','salța','salță','salțe','salți','salul','salup','salut','salva','salvă','salve','samar','samba','sambă','sambe','sambo','samca','samcă','samce','samei','sameș','samur','sanda','sania','sanie','sapei','sapia','sarai','sarda','sardă','sarde','sarea','saric','sarma','saros','sarzi','sasău','sasca','sască','sasce','sasul','sașeu','sașia','sașie','sașii','sașiu','satan','satâr','saten','satin','satir','satul','satur','sațiu','sațul','saula','saulă','saule','sauna','saună','saune','savai','savar','savor','savur','saxon','săbăi','săbău','săbia','săbie','săbii','săbui','săcoi','săcos','săcui','sădea','sădii','sădim','sădit','săgni','sălaș','sălci','sălia','sălie','sălii','sălta','săltă','sănia','sănie','sănii','săpai','săpam','săpat','săpau','săpăm','săpoi','săpun','sărac','sărad','sărai','săram','sărar','sărat','sărau','sărăm','sărea','sărez','sării','sărim','sărin','sărit','sărut','săști','sătuc','sătui','sătul','sătuț','sâcâi','sâneț','sânge','sânii','sânta','sântă','sânte','sânți','sânul','sârba','sârbă','sârbe','sârbi','sârma','sârmă','sârme','sâsâi','scadă','scade','scafa','scafă','scafe','scaii','scala','scală','scald','scale','scalp','scama','scamă','scame','scana','scană','scapă','scape','scapi','scara','scară','scarp','scaun','scază','scazi','scăpa','scăpă','scări','scăzu','scârm','scârț','scena','scenă','scene','schia','schie','schif','schip','schit','scita','scită','scite','sciți','sclai','sclav','scobi','scoci','scoli','scont','scopi','scopt','scoși','scota','scotă','scote','scoți','screm','scria','scrib','scrie','scrii','scrim','scrin','scris','scriu','scrob','scrot','scrum','scuar','scufa','scufă','scufe','scuip','scula','sculă','scule','scump','scuna','scună','scund','scune','scurg','scurm','scurs','scurt','scuti','scuți','scuza','scuză','scuze','scuzi','seaca','seacă','seama','seamă','seara','seară','sebum','secai','secam','secat','secau','secăm','secer','secii','secol','secta','sectă','secte','secui','secul','sedai','sedam','sedat','sedau','sedăm','sedez','sedii','sediu','seduc','sedus','seful','segno','seiga','seigă','seige','seima','seimă','seime','seina','seină','seine','seini','seism','seișa','seișă','seișe','seizi','sejur','selba','selbă','selbe','selva','selvă','selve','semăn','semem','semen','semeț','semic','semii','semit','semna','semnă','semne','semui','semul','senar','senat','senei','senet','senii','senil','senin','senul','separ','sepia','sepie','sepii','serai','seral','serat','serba','serbă','serei','seria','seric','serie','serii','seros','serul','serva','servă','serve','servi','servo','sesam','sesia','sesie','sesii','sesil','setai','setam','setat','setau','setăm','setca','setcă','setci','setea','setei','seter','setez','setos','setul','seuri','sevai','sevas','sevei','sever','sexta','sextă','sexte','sexul','sezon','sfada','sfadă','sfanț','sfara','sfară','sfare','sfădi','sfărm','sfânt','sfârc','sfera','sferă','sfere','sfert','sfeti','sfezi','sfiai','sfiam','sfiau','sfida','sfidă','sfieț','sfiii','sfiim','sfiit','sfinx','sfios','sfita','sfită','sfite','sfori','siaje','sibir','sicar','sicii','sidef','sieși','sifon','sigei','sigil','sigla','siglă','sigle','sigma','sigur','sihla','sihlă','sihle','silan','silca','silcă','silce','silea','silei','silen','silex','silfa','silfă','silfe','silfi','silha','silhă','silhe','silii','silim','silit','silon','siloz','silui','silul','silur','silva','silvă','silve','silvo','simei','simen','simit','simtă','simte','simță','simți','simun','sinea','sinet','sineț','sinia','sinie','sinii','sinod','sinta','sintă','sinte','sinul','sinus','sipet','sirec','sirep','siric','sirop','sisal','sista','sistă','sitar','sitav','sitei','situa','situă','situl','sivei','sivii','sivul','sixta','sixtă','sixte','skate','skeet','slaba','slabă','slabe','slabi','slana','slană','slane','slang','slash','slava','slavă','slave','slavi','slăbi','slăvi','sleia','sleii','sleim','sleit','slops','slova','slovă','slove','slovo','sluga','slugă','slugi','sluis','sluji','sluta','slută','slute','sluti','sluți','smalt','smalț','smash','smâci','smârc','smârd','smead','smeci','smede','smeri','smezi','smida','smidă','smide','smint','smoli','smomi','smuci','smuga','smugă','smugi','smulg','smuls','smult','snack','snaga','snagă','snăgi','snobi','snopi','soaie','soare','soața','soață','soațe','sobar','sobei','sobol','sobor','sobra','sobră','sobre','sobri','sobru','socii','soclu','socot','socri','socru','socul','sodar','sodei','sodic','sodiu','sodom','sofei','sofra','soiai','soiam','soiau','soiei','soind','soios','soiră','soire','soiri','soise','soiși','soita','soită','soite','soiți','soiul','solar','solba','solbă','solbe','solda','soldă','solde','solea','solei','solia','solid','solie','solii','solim','solit','solul','solvă','solve','solvi','solzi','somai','somam','somat','somau','somăm','somei','somez','somna','somnă','somni','somon','sonai','sonam','sonar','sonat','sonau','sonăm','sonda','sondă','sonde','sonet','sonez','sonic','sonii','sonor','sonul','sopon','sopor','sorbi','sorea','sorei','sorii','sorim','sorit','soroc','soros','sorta','sortă','sorti','sorți','sorul','sosea','sosia','sosie','sosii','sosim','sosit','sosma','sosul','soția','soție','soții','soțul','sound','sovon','spada','spadă','spade','spaga','spagă','spală','sparg','spart','spasm','spata','spată','spate','spăgi','spăla','spălă','spăsi','spăși','spâna','spână','spâne','spâni','spânț','spânz','spârc','spelb','spele','speli','spera','speră','spere','speri','spese','spete','speti','speța','speță','spețe','speți','speze','spice','spina','spină','spine','spini','spion','spira','spiră','spire','spirt','spița','spiță','spițe','splai','splau','splin','spoia','spoii','spoim','spoit','spori','sport','spray','spuie','spuma','spumă','spume','spună','spune','spurc','spusa','spusă','spuse','spuși','sputa','spută','spute','spuza','spuză','spuze','spuzi','staff','stana','stană','stand','stane','stani','stare','start','state','stați','staul','stava','stavă','stave','staza','stază','staze','stări','stătu','stăvi','stâlp','stâna','stână','stând','stâne','stâng','stârc','stârv','steag','stean','steie','stela','stelă','stele','steli','stema','stemă','steme','steni','stepa','stepă','stepe','steri','stern','sterp','stete','steve','stila','stilă','stilb','stile','stima','stimă','stime','sting','stins','stiva','stivă','stive','stoca','stocă','stoci','stofa','stofă','stofe','stoic','stola','stolă','stole','stopa','stopă','storc','stors','story','strai','stras','strat','strei','stres','stria','stric','strie','strig','strii','striu','stroh','stroi','strop','strug','strup','struț','stufa','stufă','stufe','stunt','stupa','stupă','stupe','stupi','sturz','style','suava','suavă','suave','suavi','suber','subit','subra','sucea','sucii','sucim','sucit','sucna','sucnă','sucne','sucul','sudac','sudai','sudaj','sudam','sudat','sudau','sudăm','sudea','sudez','sudic','sudii','sudim','sudit','sudor','sudui','sudul','sufăr','sufit','sufix','sufla','suflă','sufle','sufli','suflu','sufoc','sugar','sugea','sugei','sugel','sugem','suguș','suhat','suiai','suiam','suiau','suina','suină','suind','suine','suini','suiră','suire','suiri','suise','suiși','suita','suită','suite','suiți','sujet','sulac','sulei','sulky','sulta','sultă','sulte','sulul','sumac','sumai','sumam','suman','sumar','sumat','sumau','sumăm','sumec','sumei','sumes','sumet','sumeț','sumez','summa','sumuț','sunai','sunam','sunat','sunau','sunăm','sunet','sunna','sunne','supai','supam','supat','supau','supăm','supăr','supei','super','supeu','supez','supie','supin','supla','suplă','suple','supli','suplu','supra','supse','supta','suptă','supte','supți','supui','supun','supus','surâd','surâs','surâz','surda','surdă','surde','surea','surei','suret','suria','surie','surii','surim','surit','suriu','surla','surlă','surle','surpa','surpă','surpe','surpi','sursa','sursă','surse','surul','surzi','susai','susam','susan','susul','susur','sușei','sutar','sutaș','sutea','sutei','suvac','suvai','svada','svadă','svezi','sving','swazi','swing','șabac','șabăr','șacal','șafar','șafăr','șahii','șahul','șaiba','șaibă','șaibe','șaica','șaică','șaiul','șalăi','șalău','șaliu','șalul','șaman','șamot','șamul','șanal','șansa','șansă','șanse','șanul','șapca','șapcă','șapei','șapte','șaran','șarba','șarbă','șarga','șargă','șarge','șargi','șarja','șarjă','șarje','șarla','șarlă','șarle','șarpe','șarul','șasea','șasiu','șasla','șașia','șașie','șașii','șașiu','șaten','șatra','șatră','șatre','șădea','șădem','șăgii','șăgui','șăici','șăluț','șăuaș','șăzui','șăzut','șâșâi','școli','șeasa','șeasă','șeaua','ședea','ședem','șefei','șefia','șefie','șefii','șeful','șeiac','șeici','șeihi','șeile','șelac','șelar','șelei','șenal','șepci','șepte','șerbe','șerbi','șerif','șerpe','șerpi','șerui','șesar','șesea','șesei','șesul','șeșii','șetre','șever','șevro','șezui','șezut','șfanț','șfara','șfară','șfare','șfarț','șfeii','șferi','șfert','șfori','șiace','șiboi','șicli','șicui','șicul','șieși','șifon','șiful','șiile','șiism','șiita','șiită','șiite','șiiți','șinar','șinei','șinor','șinui','șipca','șipcă','șipci','șipii','șipot','șipul','șirag','șirei','șiret','șiroi','șirui','șirul','șiruț','șișăi','șișca','șișcă','șiște','șiști','șișul','șițar','șiței','șițui','șivoi','șlapi','șleah','șleau','șleii','șlice','șlire','șliri','șmale','șnaps','șoada','șoadă','șoade','șocai','șocam','șocat','șocau','șocăm','șocul','șodou','șodul','șofai','șofaj','șofam','șofat','șofau','șofăm','șofer','șofez','șogor','șohan','șoimi','șoldi','șolzi','șomai','șomaj','șomam','șomat','șomau','șomăm','șomâc','șomer','șomez','șonți','șopăi','șopei','șopot','șopru','șopti','șopul','șorec','șoric','șosea','șoșet','șoșii','șoșoi','șoșon','șoșul','șotia','șotie','șotii','șotul','șovan','șovar','șovăi','șovin','șozii','șpaga','șpagă','șpais','șpalt','șpani','șpăgi','șperț','șpiți','șplit','șpori','șpriț','ștabi','ștaif','ștair','ștand','ștate','șteaf','șteap','ștepi','șterg','șteri','șters','șterț','șteze','știai','știam','știau','știft','știma','știmă','știme','știmi','știob','știra','știră','știrb','știre','știri','știți','știui','știut','ștofa','ștofă','ștofe','ștraf','ștras','șturț','șubei','șuber','șucar','șucăr','șucul','șueta','șuetă','șuete','șufan','șugar','șugui','șuiai','șuiam','șuiat','șuiau','șuiei','șuiem','șuier','șuiet','șuieț','șuiez','șuind','șuița','șuiță','șuițe','șuiul','șular','șuler','șulfa','șulfă','șulfe','șumar','șumăn','șumen','șunca','șuncă','șunci','șurei','șurii','șurub','șurup','șusta','șustă','șuste','șușui','șutai','șutam','șutat','șutau','șutăm','șutea','șutei','șuter','șutez','șutii','șutim','șutit','șutor','șutul','șuții','șuțul','șuvar','șuvoi','șvaba','șvabă','șvabe','șvabi','șvarț','șveda','șvedă','șvede','șvezi','tabac','taban','tabar','tabăr','tabel','tabes','tabia','tabie','tabii','tabla','tablă','table','tabun','tacâm','tacit','tacla','tacta','tactă','tacul','tafta','taftă','tafte','tagăi','tagma','tagmă','tagme','tahân','taica','taică','taier','taiga','taina','taină','taine','taior','talaj','talan','talar','talaș','talaz','talâm','talei','taler','talia','talie','talii','talim','taliu','talon','talpa','talpă','talul','talus','taluz','taman','tamar','tamâș','tamja','tamjă','tamje','tanaj','tanat','tanăi','tanăt','tanău','tanea','tanga','tangă','tanic','tanin','tanti','taola','taolă','taole','tapai','tapaj','tapam','tapat','tapau','tapăm','tapei','tapet','tapez','tapir','tarac','taraf','tarar','taraș','tarat','tarea','tarei','targa','targă','tarif','tarii','tarla','taroc','tarod','tarot','tarta','tartă','tarte','tarul','tasai','tasam','tasat','tasau','tasăm','taseu','tasez','tasma','tason','tasta','tastă','taste','tasul','tașca','tașcă','tatăl','tatei','tatii','tatua','tatuă','tații','taula','taulă','taule','tauri','tavan','taxai','taxam','taxat','taxau','taxăm','taxei','taxez','taxid','taxim','tăcăi','tăcea','tăcem','tăcui','tăcut','tăgii','tăiai','tăiam','tăiat','tăiau','tăiem','tăier','tăind','tăios','tălpi','tămâi','tăpși','tărâm','tărca','tărcă','tărgi','tăria','tărie','tării','tăști','tătar','tătân','tătic','tătuc','tătuț','tăuia','tăuii','tăuim','tăuit','tăune','tăuni','tăuri','tăuși','tăvii','tâcâi','tâlvi','tâmpa','tâmpă','tâmpe','tâmpi','tânăr','tânga','tângă','tângi','tânji','tânta','tântă','tânte','tânți','târai','târam','târau','târâi','târâm','târâș','târât','târfa','târfă','târfe','târla','târlă','târle','târli','târna','târnă','târne','târsa','târsă','târse','târși','tâțoi','teaca','teacă','teama','teamă','teanc','teapa','teapă','teara','teară','teasc','tecii','tecul','tefal','tehno','tehui','teica','teică','teici','teier','teina','teină','teine','teios','teism','teist','teiul','telal','telex','telul','telur','temea','temei','temem','temii','tempo','temui','temut','tenda','tendă','tende','tenia','tenie','tenii','tenis','tenor','tenta','tentă','tente','tenul','tepei','teras','teraz','terci','teren','terfe','terii','terme','termo','terna','ternă','terne','terni','terța','terță','terțe','terți','tesac','tesla','teslă','tesle','testa','testă','teste','teșea','teșii','teșim','teșit','teșos','tetea','tetei','tetra','tetre','teuca','teucă','teuci','teuga','teugă','teuge','teuri','texan','texte','texul','tezei','tiara','tiară','tiare','tibet','tibia','tibii','ticăi','ticna','ticnă','ticne','ticni','ticsi','ticul','tifan','tific','tifla','tiflă','tifle','tifon','tifos','tigăi','tigra','tigră','tigre','tigri','tigru','tigva','tigvă','tigve','tihai','tihna','tihnă','tihne','tihni','tihui','tijei','tilda','tildă','tilde','timar','timfi','timia','timid','timie','timii','timin','timol','timpi','timus','tinăr','tinca','tincă','tinci','tinda','tindă','tinde','tinei','tinos','tinsa','tinsă','tinse','tinși','tinză','tinzi','tioli','tipar','tipăi','tipea','tipei','tipia','tipic','tipie','tipii','tipim','tipit','tiplu','tipos','tipul','tiraj','tiran','tirul','tisei','tisul','tișii','tiști','titan','titlu','titra','titră','titre','titru','tiuia','tiuii','tiuim','tiuit','tivai','tivea','tivga','tivgă','tivgi','tivic','tivii','tivim','tivit','tivul','tizei','tizic','tizii','tizul','tmeza','tmeză','tmeze','toaca','toacă','toace','toaia','toaie','toana','toană','toane','toast','toată','toate','tobaș','tobei','tocai','tocam','tocat','tocau','tocăm','tocea','tocii','tocim','tocit','tocma','tocmă','tocme','tocmi','tocot','tocul','tofus','togii','toiag','toiai','toiam','toiau','toile','toind','toiră','toire','toiri','toise','toiși','toiți','toiul','tolba','tolbă','tolbe','tolei','tomna','tomnă','tomul','tonaj','tonal','tondo','tonei','toner','tonic','tonii','tonos','tonou','tonți','tonul','tonus','topaz','topea','topic','topii','topim','topit','topor','topos','topul','topuz','torba','torbă','torbe','torci','torid','torit','toriu','torni','toron','torri','torși','torta','tortă','torte','torța','torță','torțe','torți','torul','tosul','total','totem','totul','toții','toval','toxic','traca','tracă','trace','traci','tract','tradu','traga','tragă','trage','tragi','trama','tramă','trame','tranc','trans','trapa','trapă','trape','trasa','trasă','trase','trass','trași','trata','trată','trate','traul','trăda','trădă','trăgi','trăia','trăii','trăim','trăit','trând','treaz','trebi','trece','treci','trecu','treia','treji','trele','trema','tremă','treme','trena','trenă','trend','trene','tresa','tresă','trese','treti','treze','trezi','triac','triai','triaj','trial','triam','triat','triau','trico','triem','trier','triez','triod','trior','trist','trișa','trișă','trona','tronă','tronc','tropa','tropi','trosc','trota','trotă','truba','trubă','trube','truca','trucă','truci','truda','trudă','trude','trudi','trufa','trufă','trufe','trufi','trupa','trupă','trupe','trusa','trusă','truse','trust','tubai','tubaj','tubam','tubat','tubau','tubăm','tubei','tubez','tubul','tucan','tufan','tufar','tufei','tufiș','tufit','tufli','tufos','tuful','tugul','tuiai','tuiam','tuiau','tuiei','tuieș','tuile','tuind','tuior','tuiră','tuire','tuiri','tuise','tuiși','tuita','tuită','tuite','tuiți','tuiul','tulai','tulea','tulei','tuleu','tulii','tulim','tulit','tuliu','tulți','tulul','tumba','tumbă','tumbe','tumul','tunai','tunam','tunar','tunat','tunau','tunăm','tundă','tunde','tunel','tuner','tunet','tunsa','tunsă','tunse','tunși','tunul','tunză','tunzi','tupeu','turan','turba','turbă','turbe','turbi','turca','turcă','turce','turci','turei','turla','turlă','turle','turma','turmă','turme','turna','turnă','turta','turtă','turte','turti','turui','turul','tusea','tusei','tuset','tusor','tușai','tușam','tușat','tușau','tușăm','tușea','tușei','tușeu','tușez','tușii','tușim','tușit','tușul','tutea','tutei','tutoi','tutor','tutti','tutuc','tutui','tutun','tuția','tuție','tuții','tweed','twist','țagla','țaglă','țagle','țaica','țaică','țaici','țalii','țalul','țapap','țapii','țapin','țapoș','țapul','țarat','țarca','țarcă','țarii','țarna','țarnă','țarul','țaței','țăcăn','țăhni','țăpoi','țăpuc','țăran','țărci','țării','țărna','țărnă','țărne','țărni','țăruș','țâfei','țâfla','țâflă','țâfle','țâfna','țâfnă','țâfne','țâfni','țâful','țâhla','țâhlă','țâhle','țâlea','țânaș','țânca','țâncă','țânce','țânci','țârău','țârâi','țârei','țârfa','țârfă','țârfe','țârii','țârul','țâșni','țâști','țâțâi','țâței','țâțos','țâțul','țeapa','țeapă','țeara','țeară','țeasă','țeava','țeavă','țeche','țechi','țelea','țelii','țelim','țelit','țelul','țepei','țepii','țepos','țepul','țerii','țesal','țesăl','țesea','țesem','țeste','țesui','țesut','țevar','țevii','țevos','țevui','țicla','țiclă','țicle','țicni','țicui','țicur','țiful','țigan','țigăi','țigâi','țigla','țiglă','țigle','țiind','țilăi','țimir','ținci','ținea','ținem','ținta','țintă','ținte','ținti','ținui','ținut','țipai','țipam','țipar','țipat','țipau','țipăi','țipăm','țipăt','țipău','țipet','țipiș','țipla','țiplă','țiple','țipoi','țișni','țiței','țiuia','țiuie','țiuii','țiuim','țiuit','țiuri','țivil','țivli','țoaba','țoabă','țoabe','țoala','țoală','țoale','țoapa','țoapă','țoape','țobâc','țocăi','țocni','țocul','țoiul','țolet','țolii','țolul','țoluț','țopăi','țopâc','țopii','țopul','țoșca','țoșcă','țoști','țucai','țucal','țucam','țucat','țucau','țucăm','țugui','țugul','țuhal','țuhăi','țuica','țuică','țuici','țuluc','țupăi','țurca','țurcă','țurci','țuruc','țușca','țușcă','țuști','țuțui','țuțul','țuțur','ubace','ucidă','ucide','ucigă','ucisa','ucisă','ucise','uciși','uciză','ucizi','uclei','ucuri','udară','udare','udase','udași','udata','udată','udate','udați','udări','udând','udeai','udeam','udeau','udele','udeli','udesc','udind','udiră','udire','udiri','udise','udiși','udiți','udmei','uduri','uedul','ugere','ughii','ugnea','ugnii','ugnim','ugnit','uguia','uguie','uguit','uhale','uhaua','uiaga','uiagă','uiați','uibul','uicăi','uicii','uideo','uiegi','uiesc','uiete','uilor','uimea','uimei','uimii','uimim','uimit','uimul','uinei','uirăm','uirea','uirii','uisem','uitai','uitam','uitat','uitau','uităm','uitit','uituc','uiuiu','ujbei','ujuia','ujuie','ujuit','ulaje','ulani','ulcea','ulcer','ulcus','ulduc','uleia','uleie','uleii','ulema','uleul','ulieș','uliii','ulița','uliță','ulițe','uliți','uliul','uliuț','ulmai','ulmam','ulmat','ulmau','ulmăm','ulmii','ulmul','ulnar','ulnei','ultim','ultra','uluba','ulubă','ulube','uluca','ulucă','uluce','uluci','uluia','uluii','uluim','uluit','umana','umană','umane','umani','umbla','umblă','umble','umbli','umblu','umbon','umbra','umbră','umbre','umbri','umeda','umedă','umede','umere','umeri','umezi','umfla','umflă','umfle','umfli','umflu','umida','umidă','umide','umidi','umido','umila','umilă','umile','umili','umizi','umori','umple','umpli','umplu','unaul','unchi','uncia','uncie','uncii','undai','undam','undat','undau','undăm','undea','undei','undez','undii','undim','undit','undoi','undos','undui','uneai','uneam','uneau','uneia','unele','unesc','ungar','ungea','ungem','unghi','ungur','ungvi','uniat','uniax','unica','unică','unice','unici','unime','unimi','unind','uniră','unire','uniri','unise','uniși','unita','unită','unite','uniti','uniți','unora','unsei','unsul','unșii','unșpe','untar','untos','untul','unuia','urale','urano','urară','urare','urase','urași','urata','urată','urate','urați','urări','urăsc','urând','urâră','urâre','urâri','urâse','urâși','urâta','urâtă','urâte','urâți','urban','urbea','urbei','urcai','urcam','urcat','urcau','urcăm','urcuș','urdar','urdea','urdei','urdii','urdim','urdin','urdit','urduc','urdul','uredo','ureea','ureei','ureic','uretr','ureus','ureze','urezi','urgia','urgie','urgii','uriaș','urica','urică','urice','urici','urile','urina','urină','urine','urini','urlai','urlam','urlat','urlau','urlăm','urlet','urloi','urlui','urlup','urmai','urmam','urmaș','urmat','urmau','urmăm','urmei','urmez','urmii','urmul','urnea','urnei','urnii','urnim','urnit','ursac','ursar','ursea','ursei','ursii','ursim','ursin','ursit','ursoi','urson','ursul','ursuz','urșii','uruia','uruie','uruii','uruim','uruit','urzar','urzea','urzic','urzii','urzim','urzit','urzoi','uscai','uscam','uscat','uscau','uscăm','uslaș','usnei','ustaș','usucă','usuce','usuci','ușari','ușchi','ușeri','ușier','ușile','ușița','ușiță','ușițe','ușori','ușuia','ușuii','ușuim','ușuit','ușura','ușură','ușure','ușuri','ușuța','ușuță','ușuțe','utere','utero','utila','utilă','utile','utili','uvala','uvală','uvale','uveal','uveea','uveei','uviol','uvraj','uvula','uvulă','uvule','uvulo','uxere','uzaje','uzară','uzare','uzase','uzași','uzata','uzată','uzate','uzați','uzări','uzând','uzbec','uzeze','uzezi','uzina','uzină','uzine','uzita','uzită','uzual','uzura','uzură','uzuri','uzurp','vacat','vacii','vacua','vacuă','vacue','vacui','vacul','vacuu','vadea','vadra','vadră','vadul','vafei','vagal','vagii','vagil','vagin','vagon','vague','vagul','vaier','vaiet','vaită','vaite','vaiți','valah','valea','valet','valeu','valex','valid','valii','valiu','valma','valmă','valon','valsa','valsă','valul','valva','valvă','valve','valvi','vamal','vameș','vampa','vampă','vampe','vanda','vande','vanei','vanii','vanul','vapel','vapor','varan','varda','varec','vareg','varga','vargă','varia','varie','varii','vario','variu','varsă','varta','varul','varus','varva','varvă','varve','varza','varză','vasal','vasca','vască','vasce','vasel','vasta','vastă','vaste','vasul','vaști','vatăm','vatei','vates','vatir','vatos','vatra','vatră','vazei','văcar','vădan','vădea','vădii','vădim','vădit','văduv','văgaș','văiag','văile','văina','văină','văita','văită','vălău','văleu','vălmi','vălug','vălul','vămii','vămui','văpăi','văpsi','vărai','văram','vărar','vărat','vărau','vărăm','vărez','vărga','vărgă','vărgi','văros','vărsa','vărsă','vărui','vărul','văsar','văsuț','vătaf','vătaj','vătaș','vătav','vătui','văzui','văzul','văzut','vâjâi','vâjea','vâjia','vâjie','vâjii','vâjim','vâjit','vâjoi','vâjul','vâlca','vâlcă','vâlci','vâlfa','vâlfă','vâlfe','vâlva','vâlvă','vâlve','vânai','vânam','vânat','vânau','vânăm','vânăt','vândă','vându','vânez','vânji','vânos','vânză','vârai','vâram','vârau','vârâi','vârâm','vârât','vârca','vârcă','vârci','vârșa','vârșă','vârșe','vârși','vâsla','vâslă','vâsle','vâsli','vâșca','vâșcă','vâște','vâști','vecea','veceu','veche','vechi','vecia','vecie','vecii','vecin','vecto','vecui','vedda','vedde','vedea','vedei','vedem','vedic','vedre','vegăi','veghe','veghi','velar','velea','velei','velic','velii','velim','velin','velit','velum','velur','venal','venea','venei','venet','venia','venie','venii','venim','venin','venit','venos','venus','verbe','verde','verei','verga','vergă','vergi','veric','verif','verii','verin','vermi','veros','verse','verso','verși','verui','verva','vervă','verve','verze','verzi','vesel','vesta','vestă','veste','vesti','veșca','veșcă','vești','vetre','vetri','vexai','vexam','vexat','vexau','vexăm','vexez','vexil','viară','viase','viași','viața','viață','viați','viază','vibra','vibră','vibro','vicar','vicia','vicie','vicii','viciu','vidai','vidaj','vidam','vidat','vidau','vidăm','videi','video','videz','vidma','vidmă','vidme','vidra','vidră','vidre','vidul','viela','vielă','viele','viere','vieri','viers','viesc','vieți','vieze','viezi','vifel','vifor','vigan','vigia','vigie','vigii','vigil','vigul','viile','viind','vilei','vilii','vilit','vilos','vilul','vinar','vinaț','vinci','vinde','vinei','vinia','vinie','vinii','vinil','viniu','vinos','vinul','vinuț','vinzi','vioda','viodă','viode','vioii','viola','violă','viole','viori','vipia','vipie','vipii','vipla','viplă','viple','vipul','virai','viraj','viral','viram','viran','virat','virau','virăm','virez','virga','virid','viril','virul','virus','visai','visam','visat','visau','visăm','visco','visez','visul','vișin','vitae','vital','vitei','vitro','vițea','viței','vițel','viții','vițiu','vițos','viuța','viuță','viuțe','viuți','vivat','vizai','vizam','vizat','vizau','vizăm','vizei','vizez','vizii','vizir','vizon','vizor','vlaga','vlagă','vlaha','vlahă','vlahe','vlahi','voala','voală','vocal','vocea','vocii','vodca','vodcă','vodci','voder','vogăi','voiai','voiaj','voiam','voiau','voile','voind','voios','voiră','voire','voiri','voise','voiși','voita','voită','voite','voiți','voiul','volan','volar','volei','volet','voleu','voloc','volog','volsc','volta','voltă','volte','volți','volum','volva','volvă','volve','vomai','vomam','vomat','vomau','vomăm','vomei','vomer','vomez','vomic','vomit','vopsi','vorba','vorbă','vorbe','vorbi','voști','votai','votam','votat','votau','votăm','votca','votcă','votci','votez','votiv','votri','votru','votul','votum','vozai','vozam','vozau','vozâi','vozâm','vozât','vrace','vraci','vraja','vrajă','vrana','vrană','vrane','vrați','vrăji','vrând','vreai','vream','vreau','vreie','vreji','vreme','vremi','vrere','vreri','vreți','vreun','vriei','vrila','vrilă','vrile','vroia','vroii','vroim','vroit','vruna','vrură','vruse','vruși','vruta','vrută','vrute','vruți','vtori','vuiau','vuiet','vuind','vuiră','vuire','vuiri','vuise','vulpe','vulpi','vulva','vulvă','vulve','vulvo','vurta','vurtă','vurte','vutca','vutcă','vutci','vutei','vuvar','vuvei','vuvui','walon','wații','weber','whigi','widia','widii','wilow','wolof','wonii','wonul','xanto','xenia','xenie','xenii','xenon','xeres','xeric','xerom','xerox','xifia','xifie','xifii','xifos','xilan','xilem','xilen','xilit','xilol','xilon','xisma','xismă','xisme','yalei','yarzi','yenii','yenul','yetii','yogin','ytrit','ytriu','yuani','yucca','yunga','yuppi','zabet','zabra','zabră','zabre','zadar','zadei','zadia','zadie','zadii','zahar','zahăr','zaica','zaică','zaici','zaifa','zaifă','zaife','zaifi','zaimf','zairi','zalei','zamac','zambo','zamca','zamcă','zapai','zapaj','zapam','zapat','zapau','zapăm','zapez','zapis','zaraf','zarea','zarei','zarif','zarpa','zarul','zarva','zarvă','zarve','zațul','zăbun','zăcaș','zăcea','zăcem','zăcui','zăcut','zădar','zăduf','zăduh','zăgan','zăgaș','zăgaz','zăhăi','zălar','zălog','zălud','zălug','zămci','zămii','zănat','zăpăi','zăpor','zăpsi','zăpuc','zărar','zărea','zării','zărim','zărit','zăsti','zăton','zăuit','zăvod','zăvoi','zăvor','zâmbi','zânei','zârna','zârnă','zârne','zâzâi','zbanț','zbată','zbate','zbați','zbătu','zbânț','zbârn','zbeng','zbice','zbici','zbier','zbilț','zbiri','zbori','zbura','zbură','zburd','zeama','zeamă','zeaua','zebra','zebră','zebre','zebul','zecea','zecer','zeche','zechi','zeele','zefir','zeghe','zeghi','zeiei','zeina','zeină','zeine','zeița','zeiță','zeițe','zelar','zelei','zelos','zelot','zelul','zemii','zemos','zemui','zenda','zendă','zende','zenit','zenul','zenzi','zeppa','zeppă','zeppe','zerar','zerea','zerit','zeros','zerul','zețaj','zețar','zețui','zgăul','zgăur','zgâia','zgâii','zgâim','zgâit','zguli','zgura','zgură','zguri','ziare','zicaș','zicea','zicem','zidar','zidea','zidii','zidim','zidit','zidui','zidul','zigot','zilaș','zilei','ziler','zilos','zimța','zimță','zimți','zinca','zincă','zisei','zisul','zișii','zitum','ziuca','ziucă','ziuci','zlace','zlaci','zlați','zloți','zmeie','zmeii','zmeoi','zmeul','zmeur','zoaia','zoaie','zoala','zoală','zoale','zoana','zoană','zoane','zoarh','zoava','zoavă','zoave','zobea','zobii','zobim','zobit','zobon','zobul','zodia','zodie','zodii','zoile','zoili','zoios','zolea','zolga','zolgă','zolge','zolgi','zolii','zolim','zolit','zombi','zonaj','zonal','zonar','zonei','zooid','zooni','zooul','zooza','zooză','zooze','zopăi','zoppa','zorea','zorei','zorel','zorii','zoril','zorim','zorit','zorul','zovon','zuavi','zuful','zulia','zulie','zulii','zuluf','zulum','zulus','zuluș','zupăi','zupui','zurăi','zurba','zurbă','zurbe','zurrr','zurui','zuzăi','zuzet','zuzui','zvânt','zvârl','zvârr','zvelt','zvoni','abaca','abace','abale','abata','abate','abati','abatu','abaua','abces','abdic','abila','abile','abili','abjur','abneg','aboli','abona','abrac','abras','abrog','abtie','abtii','abtin','abtiu','aburc','aburi','abuza','acaju','acana','acani','acant','acare','acari','acasa','acata','acate','acati','acced','acces','acciz','aceea','aceia','acela','acele','acera','acerb','acere','aceri','acest','achii','achit','achiu','acida','acide','acila','acili','acine','acira','acire','aciri','aciua','aciui','acizi','aclam','acnee','acolo','acont','acord','acqua','acrea','acrei','acria','acrie','acrii','acrim','acris','acrit','acriu','acrul','acrut','activ','actor','actul','acuma','acusa','acusi','acuta','acute','acuti','acuza','acuze','acuzi','adanc','adaog','adaos','adapa','adape','adapi','adast','adaug','adaus','adeca','adept','adera','adere','aderi','adese','adiai','adiam','adiat','adiau','adica','adiem','adins','admir','admis','admit','adnat','adopt','adora','adore','adori','adorm','aduca','aduce','aduci','aduct','adula','adult','aduna','adune','aduni','adusa','aduse','adusi','advon','aedul','aequo','aerai','aeraj','aeram','aerat','aerau','aerez','aerob','aeros','aerul','aezii','afana','afara','afect','afgan','afida','afide','afifa','afife','afifi','afina','afine','afini','afion','afipt','afirm','afisa','afise','afixe','aflai','aflam','aflat','aflau','aflui','aflux','afona','afone','afoni','aftei','aftor','aftos','afuma','afume','afumi','afund','afurc','agale','agapa','agape','agasa','agata','agate','agati','agaua','agava','agave','agent','agera','agere','ageri','agest','aghii','agiei','agila','agile','agili','agita','agite','agiti','agiul','agnat','agnet','agona','agone','agora','agore','agrai','agrar','agrea','agris','aguda','agude','aguzi','aheii','aheul','ahtia','ahtie','ahtul','ahuri','aicea','aidam','aidem','aiept','aiest','aieve','ailor','aiori','aisor','aista','aiste','aisti','aiura','aiure','aiuri','ajuna','ajung','ajuns','ajura','ajuta','ajute','ajuti','akani','alace','alait','alama','alame','alami','alana','alane','alani','alaun','albea','albei','albet','albia','albie','albii','albim','albit','albiu','albui','albul','album','albus','albut','alcan','alcov','aldan','aldin','aldol','aldui','alean','aleea','alega','alege','alegi','aleia','aleii','alela','alele','alena','alene','alerg','alert','alese','alesi','aleza','aleze','algei','algia','algid','algie','algii','algol','aliai','aliaj','aliam','alias','aliat','aliau','alibi','alica','alice','alici','aliem','aliez','alina','aline','alini','alint','alior','alipi','almar','almee','almei','aloca','aloce','aloci','aloea','aloei','alora','aloul','alpin','altar','altei','alter','altii','altoi','altor','altui','altul','aluat','aluia','aluna','alune','alung','aluni','alura','aluri','amagi','amana','amane','amani','amant','amara','amare','amari','ambar','ambii','ambra','ambre','ament','ameti','amhar','amiaz','amiba','amibe','amica','amice','amici','amida','amide','amiez','amili','amina','amine','amino','amnar','amorf','amper','ampex','ampla','ample','ampli','amplu','amurg','amusa','amuse','amusi','amuta','amute','amuti','amuza','amuze','amuzi','amvon','anala','anale','anali','anaua','ancia','ancie','ancii','andin','anexa','anexe','angli','angor','angro','anima','anime','animi','anina','anine','anini','anion','anost','anozi','ansei','ansoa','antal','antei','antet','antic','antum','anual','anuar','anula','anume','anunt','anura','anure','aoleo','aoleu','aorta','aorte','apara','apare','apari','aparu','apasa','apasi','apela','apele','apere','aperi','apese','apesi','apida','apide','apiol','aplec','aplic','aplit','apnee','apoda','apode','apolo','aport','aposi','apozi','apret','aprig','april','aprob','aprod','aptei','apter','aptii','aptul','apuca','apuce','apuci','apuie','apuli','apuna','apune','apupa','apupe','apusa','apuse','apusi','araba','arabe','arabi','araci','arama','arame','arami','arand','arapi','arara','arare','arari','arase','arasi','arata','arate','arati','arbie','arbiu','arbor','arbuz','arcan','arcas','arcat','arcei','arcer','arcui','arcul','arcus','ardea','ardei','ardem','ardic','ardil','areal','areci','areic','arena','arene','arest','areta','arete','areti','arfei','argat','argea','argon','argos','argou','argus','arhar','arhon','arian','arici','arida','aride','ariei','arile','arili','arima','arina','arine','arini','aripa','aripi','arizi','armai','armam','arman','armar','armas','armat','armau','armei','armez','armia','armie','armii','armul','arneu','aroga','aroge','arogi','aroma','arome','aromi','arpei','arsei','arsen','arsic','arsii','arsin','arsul','artag','artar','artei','artel','artos','arunc','arzoi','arzos','arzul','asabi','asalt','asana','asara','asasi','asaza','ascei','ascet','ascut','aseca','asece','aseci','aseza','aseze','asezi','asiat','asini','asist','asiza','asize','asmut','aspic','aspir','aspra','aspre','aspri','aspru','assai','astea','astei','astia','astma','astme','astor','astre','astri','astru','astui','astup','asuda','asude','asuma','asume','asumi','asuzi','ataca','atace','ataci','atale','atare','atari','atarn','atasa','atase','atata','atate','atati','ataua','ateea','ateei','ateii','atela','atele','atent','atest','ateul','atica','atice','atici','atina','atine','ating','atins','atinu','atipi','atita','atite','atiti','atlas','atlaz','atlet','atoli','atoma','atome','atomi','atona','atone','atoni','atosi','atrag','atras','atrii','atriu','atuul','audia','audie','audio','audit','augur','auiai','auiam','auiau','auind','auira','auire','auiri','auise','auisi','auiti','aulei','auleu','aulic','aulul','aurar','aurea','aurei','aurel','auria','aurie','aurii','aurim','aurit','auriu','auros','aurul','ausei','ausel','autor','autul','auzea','auzii','auzim','auzit','auzul','avaet','avama','avame','avami','avana','avand','avane','avani','avans','avant','avara','avare','avari','avati','aveai','aveam','aveau','avele','avena','avene','avere','averi','avers','aveti','aviar','avida','avide','avion','aviva','aviza','avize','avizi','avizo','avlia','avlie','avlii','avort','avram','avura','avuse','avusi','avuta','avute','avuti','axand','axara','axare','axari','axase','axasi','axata','axate','axati','axele','axeze','axezi','axial','axila','axile','axion','axoni','axuri','azera','azere','azeri','azida','azide','azima','azime','azoic','aztec','azura','azuri','babac','baban','babar','babau','babei','baboi','bacai','bacal','bacan','bacau','bacei','bacii','bacil','bacit','bacon','bacul','badea','badei','badia','badic','badie','badii','bafta','bafte','bagai','bagaj','bagam','bagat','bagau','bagea','bahic','bahla','bahle','bahli','bahna','bahne','bahti','baiai','baiam','baian','baias','baiat','baiau','baier','baies','baiet','baile','baind','baira','baire','bairi','baise','baisi','baita','baite','baiti','baiul','balac','balai','balan','balas','balci','balei','balet','balia','balic','balie','balii','balon','balos','balot','balsa','balse','balta','balti','balul','balut','bamei','banal','banan','banat','banca','banci','banco','banda','bande','banea','banei','banet','bania','banie','banii','banim','banit','banjo','banos','banta','bantu','banui','banul','banut','barai','baraj','baram','barat','barau','barba','barbi','barca','barci','barda','barei','barej','barem','barez','barfa','barfe','barfi','baria','baric','barie','barii','baril','barim','baris','bariu','bariz','barja','barje','barna','barne','barni','baroc','baron','baros','barou','barsa','barse','barul','barza','barzi','basca','basce','basci','baset','basic','basii','basma','basme','basna','basne','basni','bason','basta','baste','basti','basul','batai','bataj','batal','batan','batar','batat','batav','batca','batce','batci','batea','batei','batel','batem','batic','batii','batir','batiu','batoc','batog','baton','batos','batui','batul','batut','baune','bauni','baura','bause','bausi','bauta','baute','bauti','bauzi','bavei','baxul','bazai','bazal','bazam','bazar','bazat','bazau','bazei','bazez','bazic','bazin','bazoi','bazon','bazzz','beata','beati','becar','becer','bechi','becii','becul','bedei','behai','beica','beici','beiul','bejul','belea','belgi','belii','belim','belis','belit','belul','bemol','benei','benga','benis','bente','benti','benzi','berar','berat','berce','berci','berea','beret','berii','beril','berma','berme','berna','berne','berta','berte','berze','besic','bessi','betei','betel','betia','betie','betii','betiv','beton','beuca','beuci','beuta','beute','bezea','bezna','bezne','biata','biban','biber','bibic','bibil','bicas','bideu','bidon','biela','biele','biete','bieti','bieul','bifai','bifam','bifat','bifau','bifei','bifez','bifid','bifor','bigam','bigei','bigii','bigot','bigul','bihun','bijoi','biker','bilei','bilet','bilon','biman','binar','binis','binom','binta','binte','bioti','biped','bipul','birai','birar','birau','biris','birja','birje','birou','birui','birul','bisai','bisam','bisat','bisau','bisel','bisez','bisul','bitei','biter','bitii','bitul','bitum','biuta','biute','bivol','bizam','bizar','bizet','bizon','bizui','blaga','blagi','blama','blana','blanc','bland','blani','blaza','blaze','bleah','bleau','bleav','blege','blegi','bleot','blide','blimp','blitz','bloca','blond','bluca','bluci','blues','bluff','blugi','bluza','bluze','boaba','boabe','boaca','boala','boale','board','boare','boari','boase','boata','boate','bobea','bober','bobii','bobim','bobit','boboc','bobot','bobul','bocal','bocan','bocea','bocet','bocii','bocim','bocit','bocna','bocsa','bocse','bocsi','bocul','boema','boeme','boemi','boeuf','bogat','bogza','bogze','boiai','boiam','boiau','boier','boind','boira','boire','boiri','boise','boisi','boita','boite','boiti','boiul','bojii','bojoc','bojog','boldi','boldo','bolea','bolfa','bolfe','bolid','bolii','bolim','bolit','bolta','bolti','bolul','bolus','bomba','bombe','bonca','bonci','bonei','bonom','bonti','bonul','bonus','bonzi','borai','boram','boran','borat','borau','borax','bordo','boric','borii','borna','borne','borod','borsi','borta','borte','borti','borul','borza','borze','bosaj','bosar','bosei','bosii','bosma','boson','bosul','botau','botca','botce','botea','botei','botez','botii','botim','botit','botog','botos','botul','bouar','bouri','bouti','bovid','bovin','boxai','boxam','boxat','boxau','boxei','boxer','boxez','boxul','boyul','bozia','bozie','bozii','bozul','braca','braci','bradt','braga','bragi','braha','brahe','braie','brain','brama','brame','brana','brand','brane','brant','brate','braul','brava','brave','bravi','bravo','brazi','break','breaz','brebi','breii','breji','bresa','brese','breva','breve','breza','breze','briai','briam','briat','briau','brice','brici','brida','bride','briei','briem','briez','brind','briza','brize','broda','brodi','bronz','brosa','brose','bruft','bruia','bruie','bruma','brume','bruna','brune','bruni','brusc','brusi','bruta','brute','bruti','bruto','bubal','bubat','bubei','buboi','bubon','bubos','bubui','bucal','bucar','bucea','buche','buchi','bucii','bucin','bucla','bucle','bucsa','bucse','bucsi','bucul','bucur','budac','budai','budam','budat','budau','budei','budez','budui','budur','bufan','bufei','bufet','bufeu','bufii','bufna','bufne','bufni','bufon','buful','buged','buget','bugla','bugle','buhai','buhas','buhav','buhei','buhna','buhne','buhos','buhul','buhur','buiac','buiai','buiam','buiau','buici','buind','buira','buire','buiri','buise','buisi','buiti','bujda','bujde','bujdi','bujia','bujie','bujii','bujor','bulat','bulbi','bulca','bulci','bulei','bulet','bulin','bulon','buluc','bulzi','bumbi','bumul','bunda','bunde','bunei','bunel','bunic','bunii','bunul','bunut','burai','buraj','buram','burat','burau','burba','burbe','burca','burci','burei','buret','burez','buric','burie','burii','buriu','bursa','burse','burta','burti','burul','busea','busei','busel','buseu','busii','busim','busit','buson','busta','busul','butac','butan','butar','butas','butca','butci','butea','butia','butic','butie','butii','butil','butoi','buton','butuc','butul','butur','buzar','buzat','buzau','buzei','buzer','buzii','buzna','buzni','buzoi','bytii','bytul','cabaz','cabla','cablu','cabra','cabul','cacao','cacic','cacom','cadea','cadem','cadet','cadii','cadim','cadit','cadiu','cadou','cadra','cadre','cadru','caduc','cadus','cafas','cafea','cafer','cafri','cafru','cafti','cahla','cahle','caiac','caiai','caiam','caiau','caice','caier','caiet','caile','caina','caind','caine','caini','caira','caire','cairi','caisa','caise','caisi','caita','caite','caiti','caizi','calai','calaj','calam','calao','calat','calau','calca','calce','calci','calda','calde','calea','calei','calem','calez','calfa','calfe','calic','calif','calii','calim','calin','calit','calma','calme','calmi','calos','calpa','calpe','calpi','calti','calul','calup','calus','calut','calzi','camee','camei','camin','campa','campi','canaf','canal','canar','canat','canci','canea','canei','caner','cange','cangi','canid','canii','canim','canin','canis','canit','canoe','canon','canta','cante','canti','canto','capac','capai','capan','capat','capau','capei','caper','capes','capia','capie','capii','capiu','capoc','capon','capos','capot','capra','capre','capsa','capse','capta','capui','capul','capus','carab','carai','caram','caras','carat','carau','carca','carda','carde','carea','carei','caret','careu','caria','carib','caric','carie','carii','carja','carje','carji','carma','carme','carmi','carna','carne','carni','caror','carou','carpa','carpe','carpi','carst','carta','carte','carti','carub','carui','carul','carus','carut','casai','casam','casap','casat','casau','casca','casei','caset','caseu','casez','casii','casiu','casla','casle','casoi','casta','caste','casti','casul','casut','catai','catam','catar','catat','catau','catch','catea','catei','catel','catia','catie','catii','catod','cator','catra','catre','catui','catul','catun','catur','catva','cauce','cauei','caula','caule','cauni','causa','cause','cauta','caute','cauti','cauza','cauze','cavaf','caval','cavas','cavei','cavii','cavou','cavul','cazac','cazai','cazam','cazan','cazat','cazau','cazez','cazic','cazii','cazma','cazna','cazne','cazni','cazon','cazui','cazul','cazut','ceafa','ceair','ceala','ceapa','ceara','ceata','ceaun','ceaus','cecal','cecen','cecul','cecum','cedai','cedam','cedat','cedau','cedez','cedri','cedru','cefar','cefei','cegai','cegii','cehai','cehei','cehii','cehul','celar','celea','celei','cella','celle','cello','celom','celor','celta','celte','celti','celui','centi','cenur','cepai','cepci','cepei','cepse','cepte','cepui','cepul','cerat','cerbi','cerca','cerce','cerci','cerea','cerem','cerga','cergi','cerii','cerit','ceriu','cerne','cerni','cernu','ceros','cersi','certa','certe','certi','cerui','cerul','cerut','cervu','cesiu','cesta','ceste','cesti','cetas','cetea','cetei','ceter','cetet','cetii','cetim','cetit','cetos','ceuca','ceuce','ceuci','cezar','cheag','cheia','cheie','cheii','chele','cheli','chema','cheme','chemi','chera','chere','cheta','chete','cheul','chiar','chiau','chibz','chica','chici','chida','chide','chila','chile','chior','chiot','chips','chira','chire','chist','chita','chite','chiti','chiui','chiul','chiup','chulo','cicar','cicli','ciclu','cidru','cifra','cifre','cifru','cigei','cihai','cilen','cilii','cilul','cimei','cimen','cinai','cinam','cinas','cinat','cinau','cinci','cinei','cinel','cinez','cinic','cinul','ciobi','ciomp','cionc','ciont','ciori','ciort','cipca','cipci','cipic','cipul','cirac','circa','circe','circi','cires','cirii','cirip','ciris','cirta','cirte','cirul','cirus','cisla','cisle','cista','ciste','citai','citam','citat','citau','citea','citet','citez','citii','citim','citit','citro','citul','ciuci','ciuda','ciude','ciudi','ciufi','ciuin','ciula','ciule','ciuli','ciuma','ciume','ciump','ciung','ciunt','ciupa','ciupe','ciupi','ciuta','ciute','ciuti','civic','civil','civit','cizma','cizme','claca','claci','clada','clade','cladi','claia','claie','claii','claim','clait','clama','clame','clamp','clanc','clant','clapa','clapc','clape','clara','clare','clari','clasa','clase','clati','claun','clazi','clean','clema','cleme','cleni','clica','clici','clima','clime','clina','clinc','cline','cling','clini','clint','clipa','clipe','clipi','clips','clisa','clise','cliva','cloca','cloci','clomb','clona','clonc','clone','clont','clota','clote','clovn','clown','clupa','clupe','cluul','cneaz','cneji','cnezi','coaca','coace','coada','coade','coafa','coafe','coaja','coala','coale','coama','coame','coana','coane','coasa','coase','coate','cobai','cobea','cobei','cobii','cobim','cobit','cobol','cobor','cobra','cobre','cobur','cobuz','cobza','cobze','cocai','cocea','cocia','cocie','cocii','cocis','cocli','cocon','cocor','cocos','cocot','cocul','codai','codaj','codal','codam','codan','codas','codat','codau','codea','codei','codex','codez','codia','codie','codii','codim','codit','codos','codri','codru','codul','cofei','cofra','coiot','cojea','cojii','cojim','cojit','cojoc','colac','colai','colaj','colam','colan','colat','colau','colea','coleg','colei','colet','colez','colia','colic','colie','colii','colin','colir','colna','colne','colon','color','colos','colti','colul','colun','comat','combi','combo','comei','comet','comic','comis','comit','comod','comor','comun','comut','conac','conas','conca','conci','condu','conet','conex','conga','conic','conta','conte','conti','conul','copac','copai','copal','copan','copca','copce','copci','copia','copie','copii','copil','copoi','copra','copre','copta','copte','copti','copul','corac','corai','coraj','coral','coran','corbi','corci','coree','corei','coret','coreu','corfa','corfe','corii','corla','corle','corli','corni','coroi','corpi','corso','corul','corup','corzi','cosac','cosar','cosas','cosea','cosei','cosii','cosim','cosit','cosoi','cosor','costa','coste','cosul','cotai','cotam','cotar','cotat','cotau','cotca','cotce','cotci','cotea','cotei','cotet','cotez','cotii','cotil','cotim','cotis','cotit','cotoc','cotoi','coton','cotor','cotul','covit','covor','covru','coxal','coxei','cozii','cozul','crabi','craca','craci','craia','craie','craii','crama','crame','crane','crang','crant','crapa','crape','crapi','crasa','crasc','crase','crasi','craul','craun','craza','craze','creai','cream','creat','creau','crede','credo','creek','creez','crema','creme','creol','creps','cresa','cresc','crese','creta','crete','creti','crezi','crezu','crida','cride','crier','crila','crile','crima','crime','crini','crita','crite','criza','crize','croat','croia','croii','croim','croit','croma','cromo','cronc','crosa','crose','crown','cruce','cruci','cruda','crude','crunt','crupa','crupe','crusi','cruta','crute','cruti','cruzi','cuaga','cuart','cubai','cubaj','cubam','cuban','cubat','cubau','cubeb','cubez','cubic','cubii','cubul','cucai','cucii','cucon','cucor','cucos','cucui','cucul','cucut','cufar','cuget','cuhne','cuhni','cuiba','cuier','cuina','cuine','cuini','cuiul','cuiut','cuiva','cujba','cujbe','culac','culca','culce','culci','culee','culeg','culei','cules','culic','culii','culma','culme','culmi','culot','culpa','culpe','culta','culte','culti','cuman','cumas','cumen','cumis','cumul','cumva','cunun','cupaj','cupar','cupea','cupei','cupet','cupeu','cupid','cupit','cupiu','cupla','cuple','cuplu','cupon','cupra','cupru','curai','curaj','curam','curat','curau','curba','curbe','curbi','curca','curci','curea','curei','curez','curga','curge','curia','curie','curii','curiu','curma','curme','curmi','curry','cursa','curse','curta','curte','curti','curul','curut','curva','curve','curvi','cusac','cusca','cuser','cusma','cusme','custi','cusui','cusur','cusut','cutai','cutam','cutat','cutau','cutea','cutei','cuter','cutez','cutia','cutie','cutii','cutit','cutra','cutre','cuvei','cuvie','cuvin','cvart','cvasi','dacei','dacic','dacii','dacit','dacul','dadea','dadei','dadui','dafia','dafie','dafii','dafin','dagii','daiac','daica','daici','daina','daira','dalac','dalaj','dalba','dalbe','dalbi','dalei','dalia','dalie','dalii','dalma','dalme','dalta','dalti','damei','damii','damna','damul','danac','dance','danci','dandi','dandy','danei','danez','danga','dania','danie','danii','danos','dansa','danta','danui','danul','daoli','dapar','darab','darac','darai','daram','darat','darau','darda','darde','darea','darei','darez','daria','darie','darii','darje','darji','darma','darme','darmi','darui','darul','darza','darze','darzi','dasem','dasia','dasie','dasii','datai','datam','datat','datau','datei','datez','datii','dativ','dator','datul','daula','dauli','dauna','daune','dayac','deasa','debil','debit','debut','debye','decad','decan','decar','decat','deces','decid','decis','decor','decul','dedai','dedal','dedam','dedat','dedau','dedea','dedei','dedic','dedoi','deduc','dedus','defel','defer','degaj','deger','deget','deism','deist','dejei','dejoc','dejug','dejun','delas','delco','deleg','delei','delia','delie','delii','delir','deliu','deloc','delta','delte','delut','demei','demis','demit','demiu','demna','demne','demni','demon','demos','denar','deneg','denia','denie','denii','densa','dense','densi','depan','depar','depou','depui','depun','depus','derbi','derby','derea','dereg','deres','deriv','derma','derme','derog','desag','desca','desce','desec','desei','desel','desen','deset','deseu','desfa','desii','desir','desis','deste','desti','desul','deszi','detei','detie','detii','detin','detiu','detun','dever','devia','devie','devii','devin','deviu','deviz','devla','devle','devon','devot','dezic','dezis','diace','diata','diate','dibla','dible','diblu','dibol','dibui','dicta','dictu','dieci','diena','diene','dieta','diete','dieza','diezi','difer','difuz','diger','digit','digul','dihai','dihoc','dihor','dijma','dijme','dilat','dilea','dilia','dilie','dilii','dilim','dilit','diliu','dilua','dimer','dimia','dimie','dimii','dimon','dinam','dinar','dinee','dinei','dineu','dingo','dinta','dinte','dinti','dioda','diode','dioic','dipod','dipol','direg','dires','dirig','disco','disec','ditai','diurn','divan','divei','divid','divin','dixie','doaga','doage','doapa','doape','doara','doare','dobas','dobei','dobor','dobos','dobru','docar','docil','docta','docte','docti','docul','dodea','dodei','dodii','dodim','dodit','dogar','dogea','dogii','dogim','dogit','dogma','dogme','dogul','dohot','doica','doici','doime','doimi','doina','doine','doini','doiul','dolar','dolby','dolce','dolia','dolie','dolii','doliu','dolly','dolul','domei','domin','domni','domnu','domol','domra','domre','domul','donai','donam','donat','donau','donez','donor','dopai','dopaj','dopam','dopat','dopau','dopez','dopul','dorea','doric','dorii','dorim','dorit','dormi','dorna','dorne','dorul','dorut','dosar','dosea','dosii','dosim','dosit','dospi','dosul','dotai','dotal','dotam','dotat','dotau','dotei','dotez','doxei','dozai','dozaj','dozam','dozat','dozau','dozei','dozez','draci','dracu','draga','drage','dragi','drain','draiv','drama','drame','drang','drapa','drege','dregi','drela','drele','drena','drene','drept','dresa','drese','dresi','drete','dreve','drink','dripi','drive','drobi','droga','drops','drota','druga','drugi','druid','drupa','drupe','drusa','druse','druza','druze','duale','duant','dubas','dubea','dubei','dubii','dubim','dubit','dubiu','dubla','duble','dubli','dublu','ducai','ducal','ducat','ducea','ducem','ducii','dudau','dudei','dudui','dudul','duela','duete','duhan','duhni','duhul','duios','duium','dulai','dulap','dulau','dulce','dulci','dulia','dulie','dulii','dumei','dumic','dunei','dunga','dungi','dunit','duoul','dupac','dupai','dupca','dupce','dupii','dupre','dupul','durai','duram','duran','durat','durau','durda','durde','durea','durei','durez','durig','durii','durit','durmi','duros','durui','durul','durut','durzi','dusca','dusei','dusii','duste','dusti','dusul','dutca','dutce','duzei','duzii','dvori','dzelo','ebosa','ebose','ecart','echea','echei','echer','ecler','ecoul','ecran','ecvin','edeme','edict','edili','edita','educa','educe','educi','efebi','efect','efeti','efila','eflux','efori','efort','egala','egale','egali','egida','egide','elani','eleat','elena','elene','eleni','eleva','eleve','elevi','elfii','elful','elice','elida','elina','eline','elini','elita','elite','eluda','email','emana','emane','emani','embol','emden','emerg','emeri','emers','emiri','emisa','emise','emisi','emita','emite','emiti','emuli','emuul','enorm','enoti','enunt','eocen','eolit','eonii','eonul','epata','epava','epave','epica','epice','epici','epila','epiul','epoca','epoci','epoda','epode','epoha','epohe','eponj','epura','epure','equus','erata','erate','erati','erbiu','erect','erede','erele','erete','ereti','erezi','ergan','ergii','ergul','erhei','erija','ermit','eroda','eroic','eroii','erori','eroul','erupa','erupe','erupi','erupt','erzat','eseul','espui','espun','espus','estaz','ester','estet','estic','estiv','eston','estre','estru','estul','esuai','esuam','esuat','esuau','esuez','etaja','etaje','etala','etans','etapa','etape','etate','etati','etena','etene','eteri','etern','ethos','etiaj','etica','etice','etici','etila','etili','etira','etnia','etnic','etnie','etnii','etola','etole','etufa','etuva','etuve','eului','eunuc','eurip','evada','evaza','eving','evins','evita','evite','eviti','evoca','evoce','evoci','evrei','evreu','evuri','exact','exala','exale','exali','exalt','exarh','exces','excit','exert','exhib','exiga','exige','exigi','exila','exina','exine','exist','expia','expie','expir','expre','expui','expun','expus','extaz','extra','exult','ezita','ezite','eziti','facau','facea','facem','facil','facla','facle','facto','facui','facut','fadei','fadul','fagas','faget','fagii','fagot','fagul','fagur','faima','faime','faina','faine','faini','faiul','falca','falce','falci','falea','falei','falet','falia','falie','falii','falim','falit','falos','falsa','false','falsi','falun','falus','famat','famen','fanai','fanal','fanam','fanar','fanat','fanau','fanda','fanez','fanii','fanon','fanta','fante','fanti','fanul','fapta','fapte','fapti','farad','faram','faras','farba','farbe','farbi','farda','farin','farma','farme','farmi','farsa','farse','farta','farte','farul','fasai','fasei','fasia','fasie','fasii','fason','fasta','faste','fasti','fasui','fasul','fatai','fatal','fatat','fatau','fatei','fatis','fatoi','fatos','fatui','fatul','fatum','fault','fauna','faune','fauni','fauri','favor','favus','faxul','fazan','fazei','fazii','febra','febre','fecal','feder','feele','felah','felea','felei','felia','felie','felii','felin','felon','felul','femei','femel','femur','fenec','fenic','fenil','fenix','fenol','fenta','fente','ferat','ferdu','ferea','ferec','feric','ferii','ferim','ferit','ferma','ferme','fermi','feros','ferta','ferte','ferul','fesei','fesii','festa','feste','fesul','fetal','fetea','fetei','fetia','fetid','fetie','fetii','fetim','fetis','fetit','fetru','fetus','feuda','feude','fiala','fiale','fiara','fiare','fibra','fibre','ficat','ficsi','ficus','fidea','fidel','fider','fiece','fierb','fiere','fieri','fiert','fiesc','fiful','fiica','fiice','fiind','filai','filam','filat','filau','filee','filei','filer','filet','fileu','filez','filit','filma','filme','filon','final','finea','finei','finet','finii','finim','finis','finit','finul','fiola','fiole','fionc','fiong','fiord','fiori','firav','firea','firet','firez','firii','firiz','firma','firme','firos','firul','firut','fisai','fisam','fisat','fisau','fisca','fisei','fiset','fisez','fisic','fisiu','fisti','fisul','fitei','fitil','fitui','fiuti','fixai','fixaj','fixam','fixat','fixau','fixei','fixez','fixul','fizic','flama','flame','flana','flanc','flane','flasc','flash','flata','flaut','fleac','fleos','flesa','flese','flete','fleti','flint','flirt','floci','flora','flore','flori','flota','flote','fluaj','fluda','flude','fluid','fluor','fluul','foaci','foaia','foaie','foale','foame','fobia','fobie','fobii','focal','focar','focii','focos','focsi','focul','fodra','fodre','foehn','foene','fohne','foiai','foiam','foiau','foile','foind','foios','foira','foire','foiri','foise','foisi','foita','foite','foiti','foiul','folia','folie','folii','folio','foliu','folos','fonda','fondu','fonem','fonfi','fonia','fonic','fonie','fonii','fonon','fonta','fonte','fonul','forai','foraj','foram','foras','forat','forau','forez','forja','forje','forma','forme','forta','forte','forul','forum','fosai','fosei','fosil','fosni','fosta','foste','fosti','fotei','fotel','fotii','foton','fotul','foxul','fraga','fragi','fraht','fraie','frana','franc','frane','frang','franj','frans','frant','frapa','frate','frati','fraul','fraza','fraze','freca','frece','freci','freon','freta','frete','freza','freze','frica','frici','friga','frige','frigi','fript','friza','frize','front','frota','fruct','frupt','frust','ftori','fucus','fudul','fufei','fugar','fugea','fugii','fugim','fugit','fugos','fugui','fuior','fular','fulat','fulau','fulee','fuleu','fulgi','fulia','fulie','fulii','fulul','fumai','fumam','fumar','fumat','fumau','fumez','fumui','fumul','funda','funde','funga','fungi','funia','funie','funii','funti','funzi','fuoco','furai','furaj','furam','furan','furat','furau','furca','furci','furda','furia','furie','furii','furis','furou','furul','fusar','fusei','fusta','fuste','fusti','fusul','futil','fuxul','fuzee','fuzel','fuzen','fuzit','gabia','gabie','gabii','gabja','gabje','gabji','gabro','gabui','gacea','gacii','gacim','gacit','gadea','gadei','gadil','gaeli','gafai','gafam','gafat','gafau','gafei','gafez','gagai','gagat','gagic','gagii','gagiu','gagul','gaiac','gaial','gaibe','gaica','gaici','gaida','gaide','gaile','gaina','gaini','gaita','gaite','gaiza','gaize','gajai','gajul','galba','galbe','galca','galci','galei','gales','galet','galez','galic','galii','galis','galiu','galma','galme','galon','galop','galos','galul','gaman','gamba','gambe','gamei','gamet','ganas','gandi','ganga','gange','ganji','gaoci','garai','garaj','garam','garat','garau','garda','garez','garii','garla','garle','garou','garzi','gasca','gasea','gasei','gasii','gasim','gasit','gaste','gasti','gasul','gatai','gatam','gatar','gatat','gatau','gatea','gatei','gatej','gater','gatez','gatii','gatim','gatit','gatos','gatui','gatul','gauna','gauni','gaura','gauri','gausi','gauss','gavaj','gavan','gazai','gazam','gazar','gazat','gazau','gazda','gazde','gazei','gazel','gazeu','gazez','gazii','gazon','gazos','gazul','geaba','geaca','geala','geale','geama','geana','gebea','gecii','gecko','gelep','geliv','gelos','gelui','gelul','gemat','gemea','gemei','gemem','gemen','gemet','gemin','gemui','gemul','gemut','genat','genei','genic','genii','geniu','genol','genom','genti','genul','geoda','geode','geoid','gepid','gerah','gerai','geram','gerar','gerat','gerau','geret','gerez','gerid','geros','gerui','gerul','getei','getic','getii','getul','gheba','ghebe','gheme','ghete','gheti','gheto','ghici','ghida','ghide','ghidi','ghili','ghint','ghiob','ghioc','ghiol','ghios','ghips','ghiuj','ghiul','ghizd','ghizi','giaca','giace','gibon','gigai','gigea','gigul','gimia','gimie','gimii','ginea','ginii','ginim','ginit','ginta','ginte','ginti','ginul','girai','giram','girat','girau','girez','girul','girus','gitan','glaja','glaji','gland','glant','glasa','glenc','gliei','gliom','glisa','globi','glodi','glont','glosa','glose','glota','glote','gluga','glugi','gluma','glume','glumi','gnais','gnomi','gnuul','goala','goale','goana','goane','gobai','godac','goden','godeu','godia','godie','godii','godin','gofra','gogea','gogii','gogim','gogit','gogon','gogul','golan','golas','golea','golii','golim','golit','golul','golut','gomaj','gomei','gomos','gonas','gonea','gonii','gonim','gonio','gonit','gopac','gorun','gotca','gotce','gotic','gotii','gotul','gozul','graba','grabe','grabi','grada','grade','grafe','grafi','graia','graie','graii','graim','grait','grajd','grame','grane','grapa','grape','grasa','grase','grasi','grata','graul','graur','grava','grave','gravi','greai','gream','great','greau','grece','greci','greez','grefa','grefe','grefi','greii','grele','grena','greoi','gresa','gresi','grete','greti','greul','greva','greve','grier','grifa','grife','grija','griji','grila','grile','grill','grima','grime','grind','gripa','gripe','griul','griva','grive','grivi','griza','grizu','groba','grobe','grobi','grofi','gromi','groom','gropi','grosi','grota','grote','gruia','gruie','grund','grunz','grupa','grupe','guano','guard','guasa','guase','gubav','gubei','gudur','guelf','guita','guite','gujon','gulag','gulas','guler','gulia','gulie','gulii','gumai','gumaj','gumam','gumat','gumau','gumei','gumez','gunoi','gupei','gurai','gures','gurii','gurma','gurme','gurna','gurne','gurui','gurul','gurut','gusat','guseu','gusii','gusta','guste','gusti','gutei','gutos','gutui','guvid','guzii','guzla','guzle','guzul','haban','habar','habuc','hacai','hacui','hacul','hadei','Hades','hadul','hagii','hagiu','haham','haiai','haiam','haiau','haida','haide','haiku','haina','haind','haine','haini','haios','haira','haire','hairi','haisa','haise','haisi','haita','haite','haiti','haiul','halaj','halal','halat','halau','halba','halbe','halca','halci','halda','halde','halea','halei','halfi','halii','halim','halit','halon','halor','halou','halta','halte','halul','halva','hamac','hamai','hamal','hamei','hamis','hamit','hamui','hamul','hamut','hanap','hanat','hanii','hansa','hanse','hanta','hante','hanul','hapai','hapax','hapca','hapci','haple','hapul','harac','harag','harai','haram','harap','harau','harca','harci','harei','harem','hares','harfa','harfe','harpa','harpe','harsa','harsi','harta','harte','harti','harul','hasai','hasca','haseu','hasis','hasma','hasme','hasti','hatai','hatan','hatar','hatas','hatea','hatia','hatie','hatii','hatim','hatis','hatit','hatra','hatre','hatri','hatru','hatui','hatul','hauia','hauie','hauii','hauim','hauit','hauli','hauri','havai','havaj','havam','havan','havat','havau','havez','havra','havre','havuz','hazea','hazii','hazim','hazit','hazna','hazne','hazul','heavy','hecht','heder','hehei','heiul','helge','helgi','helii','helio','heliu','helul','hemul','hends','henri','henry','hepar','herma','herme','hersa','herse','hertz','herul','hevea','hexan','hiada','hiade','hibei','hicai','hidos','hidra','hidre','hidro','hiena','hiene','hierb','hifei','hilar','hilea','hiler','hilot','hilul','himen','hindi','hioid','hiola','hiper','hipic','hippy','hirta','hirte','hitit','hitul','hleab','hlizi','hoata','hoate','hobac','hobai','hoban','hobby','hobot','hodei','hogas','hogea','hogei','hogii','hoher','hohot','hojma','holba','holca','holci','holda','holde','holei','holia','holie','holii','holul','homar','honui','honul','hopai','hopul','horai','horam','horat','horau','horda','horde','horea','horei','horet','horii','horim','horit','horst','horul','hotar','hotea','hotei','hotel','hotia','hotie','hotii','hotim','hotis','hotit','hotul','house','hrana','hrane','hrani','hrapi','hrean','hribi','hruba','hrube','hucii','hucul','hudei','huhur','huiau','huiet','huila','huile','huind','huira','huire','huiri','huise','huita','huite','huiti','huium','hulea','hulei','hulii','hulim','hulit','hulpe','hulpi','hulub','hului','humei','humic','humor','humos','humui','humus','hunii','hunul','hural','hurca','hurci','hurez','huria','hurie','hurii','huron','hurta','hurte','hurui','husar','husas','husca','husei','husit','husos','huste','husti','hutan','hutul','hutut','huzur','iacei','iacii','iacul','iades','iadul','iambi','iarba','iarna','iarta','iarzi','iasca','iasta','iaste','iatac','iaurt','iavas','iazig','iazma','iazul','ibisi','ibric','icnea','icnet','icnii','icnim','icnit','icose','icrei','icter','ictus','icuri','ideai','ideal','ideam','ideat','ideau','ideea','ideez','ideii','idele','idila','idile','idiom','idiot','idoli','idoul','idrei','iedei','iedul','iedut','iepei','ierbi','ierec','ierei','iereu','ierha','ierhe','ierna','ierni','ierta','ierte','ierti','ierul','iesea','iesii','iesim','iesit','iesle','iesta','ieste','iesti','ietac','iezea','iezer','iezii','iezim','iezit','iezme','ifose','ignam','ignar','ignat','ignee','ignei','igneu','ignor','iilor','ijele','ilaie','ilara','ilare','ilari','ilaul','ileie','ilene','ileon','ileul','ileus','iliac','ilice','ilion','ilira','ilire','iliri','iloti','imago','imala','imale','imami','imani','imbat','imbia','imbib','imbie','imbii','imbin','imbla','imble','imbli','imblu','imbuc','imbun','imens','imerg','imers','imita','imite','imiti','imnic','imnul','imola','imosi','impac','impar','impas','impia','impie','impii','impiu','imple','impli','implu','impui','impun','impur','impus','imput','imuna','imund','imune','imuni','imuri','inalt','inapt','inari','incai','incap','incas','incat','incep','incet','inchi','incit','incoa','incot','incub','incui','incul','incur','indan','indes','index','indic','indiu','indoi','indol','indop','induc','indur','indus','ineca','inece','ineci','inele','inema','ineme','inemi','inept','inerm','inert','inete','infam','infas','infat','infia','infie','infig','infim','infir','infix','infoc','infoi','infra','infuz','ingan','inger','inham','inhap','inhat','inhib','inica','inice','inici','iniei','inima','inime','inimi','inion','inita','inite','injug','injur','inmia','inmii','inmoi','innod','innoi','inota','inoti','inova','input','inrai','insam','insei','insel','insem','insii','insir','insor','insul','intai','intep','inter','intes','intim','intin','intra','intre','intri','intru','intui','inund','inuri','invar','invat','invia','invie','invii','invit','invoc','invoi','iobag','iodat','iodic','iodul','iofca','iolei','ionic','ionii','ionit','ioniu','ionul','iosag','iotei','iotul','iovei','iovii','iovul','ipeca','ipsos','iraca','irato','irbis','ireal','iriga','irige','irigi','irisi','irita','irite','iriti','iriza','irmos','irosi','irozi','iruga','irugi','irump','irumt','irupa','irupe','irupi','irupt','iruri','isala','iscai','iscam','iscat','iscau','islam','islaz','islic','isnaf','isopi','ispas','ispol','istea','istei','istet','istia','istor','istov','istui','itani','itare','itari','iteai','iteam','iteau','itele','iteme','itemi','itesc','itiiu','itind','itira','itire','itiri','itise','itisi','itita','itite','ititi','iubea','iubet','iubii','iubim','iubit','iudei','iudeu','iugar','iuiai','iuiam','iuiau','iuind','iuira','iuire','iuiri','iuise','iuisi','iuiti','iulie','iunie','iuras','iures','iurta','iurte','iurus','iusca','iusni','iusti','iusul','iutar','iutea','iutei','iutii','iutim','iutit','iuxta','iuxte','ivare','iveai','iveam','iveau','iveli','ivere','ivesc','ivind','ivira','ivire','iviri','ivise','ivisi','ivita','ivite','iviti','ivrit','izbea','izbei','izbii','izbim','izbit','izbuc','izdat','izina','izine','izini','izlaz','izmei','izola','izuri','izvod','izvor','jabia','jabie','jabii','jabou','jabra','jabre','jabul','jacai','jacas','jacii','jacul','jadul','jaful','jaiul','jalba','jalbe','jalbi','jalea','jalei','jaleo','jales','jalet','jalon','jamba','jambe','jambu','jamei','jamna','jamne','janta','jante','japca','japei','japii','japiu','japon','japsa','japse','japsi','japul','jarca','jarci','jarda','jarde','jarea','jaret','jarii','jarim','jarit','jarui','jarul','javei','javra','javre','jazul','jderi','jeans','jebul','jecui','jefui','jegos','jegul','jejun','jelea','jelei','jeler','jeleu','jelii','jelim','jelit','jelui','jenai','jenam','jenat','jenau','jenei','jenez','jepci','jepii','jepul','jerba','jerbe','jerse','jerui','jetaj','jeteu','jeton','jetou','jetul','jiana','jibei','jibii','jibul','jicni','jidan','jidov','jiene','jieni','jigla','jigle','jigni','jigou','jigul','jihad','jilav','jilip','jimba','jipan','jipat','jipii','jipul','jirav','jirul','jitar','jitia','jitie','jitii','jneap','jnepi','joaca','joace','joasa','joase','joben','jobul','jocot','jocul','jocut','jofra','jofre','joiai','joiam','joian','joiau','joile','joind','joira','joire','joiri','joise','joisi','joita','joite','joiti','jojei','joker','jonca','jonci','josii','josul','jotei','joule','jouli','jubee','jubeu','jucai','jucam','jucat','jucau','judec','judet','jugal','jugan','jugar','jugul','juice','juisa','jujau','jujeu','jujub','julea','julep','julfa','julfe','julii','julim','julit','jumbo','junca','junci','junei','junel','junia','junie','junii','junta','junte','jupai','jupan','jupea','jupei','jupii','jupim','jupit','jupoi','jupon','jupui','jurai','juram','jurat','jurau','jurii','juriu','jurui','jurul','justa','juste','justi','juvat','juxta','juxte','juzii','kabil','kagul','kakia','kakie','kakii','kakiu','kalam','kaliu','kamei','kamii','kaoni','kappa','karma','karme','kavei','kazah','kazoo','keaul','kediv','kenaf','kendo','kerii','kerul','ketch','ketei','kevir','khmer','kiang','kilul','kinas','kinei','kipii','kipul','kitul','koala','kobii','kobul','kodak','kogai','koine','korea','korei','kovar','kraal','kraft','krill','kubei','kudul','kulan','kumel','kurda','kurde','kurzi','kyati','kyrie','laban','labei','label','labia','labie','labii','labil','labio','labiu','labos','labri','labru','labul','lacar','lacas','lacat','lacom','lacra','lacre','lacsi','lacti','lacto','lacui','lacul','ladin','ladoi','lafai','laful','lagar','lagon','lagum','lahar','laica','laice','laici','laiei','laies','laiet','laile','laita','laite','laiul','lalai','lalau','lalea','lamai','lamam','lamat','lamau','lamba','lambe','lamei','lamez','lampa','lampi','lance','lanci','landa','lande','lanei','langa','lanii','lanos','lansa','lanul','lapad','lapai','lapid','lapin','lapis','lapit','lapon','lapte','lapti','larea','larga','largi','largo','larii','larma','larme','larul','larva','larve','larvi','lasai','lasam','lasat','lasau','lasei','laser','lasez','lasii','lasou','lasul','latea','latei','later','lates','latex','latii','latim','latin','latir','latis','latit','latoc','latos','latra','latre','latri','latru','latul','latur','lauda','laude','laura','lauri','lause','lausi','lauta','laute','lauti','lauza','lauze','lauzi','lavaj','lavei','laviu','lavra','lavre','laxei','laxul','lazii','lazui','lazul','lazzi','leaca','leafa','leaga','leaha','leala','leale','leali','leasa','lebar','lebes','lecii','lecit','lecui','lecut','ledul','lefii','lefti','legai','legal','legam','legan','legat','legau','legea','leghe','legic','legii','legul','lehai','lehau','leica','leici','leita','leite','leiti','lejer','lekul','lelea','lelei','leleu','lelii','lemei','lemne','lemul','lenaj','lenci','lenea','lenei','lenes','lenii','lenim','lenit','lenos','lenta','lente','lenti','lento','leone','leoni','lepad','lepai','lepra','lepre','lepse','lepsi','lepta','lepte','lepto','lepui','leroi','lerui','lerul','lesei','lesia','lesie','lesii','lesin','lesne','lesoi','lesta','leste','lesui','lesul','letal','letca','letci','letii','leton','leuas','leuca','leuci','leuco','leuti','levei','levit','lexem','lexia','lexic','lexie','lexii','lezai','lezam','lezat','lezau','lezez','liaje','liana','liane','liant','liara','liase','liasi','liata','liate','liati','liaza','liaze','libel','liber','libov','licar','licee','liceu','licit','licur','lider','lidic','lieno','liere','lieri','lieze','liezi','lifta','lifte','ligav','ligii','ligni','ligno','ligul','ligur','lihai','lihni','liind','liman','limax','limba','limbi','limei','limen','limes','limfa','limfe','limfo','limin','limni','limno','limon','limul','limus','linca','linei','liner','linga','linge','lingi','linia','linie','linii','linio','links','linon','linou','linsa','linse','linsi','linte','linti','linul','liota','liote','lipai','lipan','lipca','lipea','lipei','lipia','lipie','lipii','lipim','lipit','lipom','lipsa','lipse','lipsi','lipul','lirat','lirei','liric','lisai','lisam','lisat','lisau','lisei','lisez','lisii','lista','liste','lisul','litei','litia','litic','litie','litii','litiu','litou','litra','litre','litri','litru','liude','liuzi','livan','livid','livra','livre','lizai','lizam','lizat','lizau','lizei','lizez','lizol','loaza','loaze','lobai','lobam','lobar','lobat','lobau','lobby','lobda','lobde','lobez','lobii','lobul','local','locas','locei','locel','locii','locma','locui','locul','locus','lodba','lodbe','loden','loess','lofai','lofam','lofat','lofau','lofez','logia','logic','logie','logii','logos','lohan','lohii','lohio','loial','lojei','lojii','lombe','lomul','longi','lonja','lonje','loran','lorar','lorii','loris','lorzi','lotca','lotci','lotei','loton','lotri','lotru','lotul','lotus','loure','lovea','lovii','lovim','lovit','lozia','lozie','lozii','lozul','luand','luara','luare','luari','luase','luasi','luata','luate','luati','lucea','lucia','lucid','lucie','lucii','lucim','lucis','lucit','luciu','lucra','lucre','lucri','lucru','lucsi','ludea','ludei','ludic','ludul','lueta','luete','lufar','lufei','lufta','lugol','lujer','lulea','lumea','lumen','lumet','lumii','lunar','lunca','lunch','lunci','lunea','lunec','lunga','lungi','lunic','lunii','lupan','lupei','lupia','lupic','lupie','lupii','lupin','lupiu','lupoi','lupom','lupon','lupta','lupte','lupti','lupul','lupus','lurex','lusai','lusam','lusat','lusau','lusei','lusez','lusii','lusin','lusul','luteo','lutos','lutra','lutre','lutru','lutui','lutul','luxai','luxam','luxat','luxau','luxez','luxos','luxul','luzii','lycra','macac','macai','macar','macat','macau','macaz','macel','maces','mache','machi','macho','macii','macin','macla','macle','macra','macre','macri','macro','macru','macul','madam','madea','mafia','mafie','mafii','magan','magar','magia','magic','magie','magii','magla','magle','magma','magme','magna','magni','magno','magot','magul','mahar','mahni','mahon','mahut','maial','maica','maice','maici','maiei','maieu','maina','maind','maine','maini','maior','maiou','maisa','maise','maiug','maiul','maiut','majar','majer','majii','major','majur','makii','malac','malai','malar','malci','malea','malic','malii','malim','malin','malit','malos','malul','malut','mamar','mamba','mambo','mamei','mamon','mamos','mamut','manaf','manai','manam','manas','manat','manau','manca','mance','manci','manco','manea','manec','manei','manej','manem','maner','mango','mania','manie','manii','manji','manos','mansa','manse','manta','mante','manui','manul','manza','manze','maori','mapei','marai','maran','marar','maraz','marca','marci','marda','mardi','marea','maree','marei','maret','marfa','marfi','marga','marge','maria','marie','marii','marim','marin','marit','marja','marje','marli','marna','marne','maroi','maron','marsa','marse','marte','marti','marul','marut','masai','masaj','masam','masar','masat','masau','masca','masea','masei','maser','masez','masic','masii','masiv','masla','masle','maslu','masoi','mason','masor','masta','maste','masti','masto','masul','matai','matam','matan','matar','matat','matau','matca','matci','matei','mater','matez','matii','matoi','matol','mator','matri','matro','matuc','matuf','matul','matur','maura','maure','mauri','maxim','maxit','mayas','mayei','mazal','mazga','mazgi','mazil','mazul','mazur','mazut','meara','meato','mecai','mecet','media','medic','medie','medii','medio','mediu','medul','mefia','mefie','megal','mehai','meiul','mejda','mejde','melan','melci','meleu','melia','melic','melii','melit','melod','meloe','melon','melos','melul','menaj','menea','menii','menim','menit','meniu','menou','menta','mente','menur','merar','merei','merem','mereu','merge','mergi','merii','merit','merlu','merse','mersi','merul','mesaj','mesas','mesea','mesei','mesia','mesii','mesim','mesit','mesto','mesul','metal','metan','metec','meteo','metil','metis','metoc','metod','metoh','metol','metop','metri','metro','metru','mezat','mezel','mezii','mezin','mezon','mezzo','miala','miare','miaua','miaul','miaun','miaut','miaza','miaze','micea','micei','micet','micii','micim','micit','micro','micul','micut','midia','midie','midii','mieii','mieji','miele','mielo','miere','mieri','miezi','migai','migma','migme','migra','miile','miime','miimi','mijea','mijii','mijim','mijit','milan','milei','milog','milos','milui','milul','mimai','mimam','mimat','mimau','mimei','mimez','mimic','mimii','mimul','minai','minaj','minam','minat','minau','minei','miner','minez','minge','mingi','minia','minie','minim','miniu','minor','minta','minte','minti','minus','minut','mione','mioni','miopi','miorc','miori','mioza','mioze','mirai','miraj','miram','miras','mirat','mirau','miraz','mirei','mirel','mirez','mirha','mirhe','miria','mirie','mirii','miros','mirti','mirui','mirul','misca','misea','misei','misel','misia','misie','misii','misil','misir','misit','miste','misti','misto','misui','misun','mitea','mitei','mitel','mitic','mitii','mitim','mitit','mitoc','mitos','mitra','mitre','mitui','mitul','miuon','mixai','mixaj','mixam','mixat','mixau','mixer','mixez','mixia','mixie','mixii','mixom','mixta','mixte','mizai','mizam','mizat','mizau','mizei','mizer','mizez','mizid','mlaca','mlaci','mlada','mlaja','mlaji','mlazi','mnema','mneme','mnemo','moaca','moace','moaie','moale','moara','moare','moasa','moase','moata','moate','moaul','moaza','moaze','mobil','mocai','mocan','mocea','mocii','mocim','mocit','mocni','mocul','modal','modei','model','modem','moder','modic','modre','modru','modul','modus','mogul','mohor','moile','moima','moime','moina','moine','mojar','mojic','molai','molal','molam','molan','molar','molat','molau','molda','molde','moldo','molei','molet','molez','molia','molid','molie','molii','moloh','molon','molos','moloz','molto','molul','momai','momea','momii','momim','momit','monac','mondo','monem','mongo','monic','monom','monta','monte','mopsi','mopul','moral','morar','morav','morei','morfo','morga','morgi','moria','morii','morna','morne','morni','moroi','moron','morsa','morse','morti','morua','morue','morun','morva','morve','mosan','mosea','mosia','mosic','mosie','mosii','mosim','mosit','mosor','mosso','mosti','mosuc','mosul','motai','motam','motan','motat','motau','motca','motci','motel','motet','motez','motii','motiv','motoc','motor','motto','motul','mouse','movul','moxei','mozan','mozoc','mozol','mreja','mreje','mreji','mrene','mucar','mucea','muced','muche','muchi','mucii','mucor','mucos','mucul','mucus','mudir','mufei','mufla','mufle','mugea','muget','mugii','mugim','mugit','mugur','muhur','muiai','muiaj','muiam','muiat','muiau','muica','muici','muiem','muind','mujic','mulai','mulaj','mulam','mulat','mulau','mulei','mulez','mulga','mulge','mulgi','mulii','mulsa','mulse','mulsi','multa','multe','multi','mulul','mumei','mumia','mumie','mumii','munca','munci','munda','mundi','mungo','munte','munti','murai','mural','muram','murat','murau','murea','murei','murex','murez','murga','murgi','murid','murii','murim','murin','muris','murit','mursa','murse','murui','murul','musai','musat','musau','musca','musci','musei','musii','musiu','musli','muson','muste','musti','musul','mutai','mutam','mutat','mutau','mutea','mutei','mutia','mutic','mutie','mutii','mutim','mutit','mutiu','muton','mutra','mutre','mutul','muzee','muzei','muzeo','muzeu','muzic','nabab','naboi','nabor','nabuc','nabus','nacaz','nacru','nadai','nadei','nadel','nadir','nadol','naduf','naduh','nafea','nafta','nafte','nagat','nahur','nahut','naiba','naica','naici','naiei','naier','naile','naimi','naira','naire','naist','naiul','naiva','naive','naivi','najea','najii','najim','najit','najna','najne','nalba','nalbe','nalbi','nalta','nalte','nalti','namaz','namea','namii','namim','namit','namol','nanas','nandu','nanei','nanii','nanul','napai','napam','napat','napau','napez','napii','napul','narai','naram','narat','narau','narav','narco','narea','narez','narii','narna','narod','narui','nasca','nascu','nasea','nasei','nasel','nasia','nasic','nasie','nasii','nasim','nasip','nasit','nasli','nasoi','nasol','nasos','naste','nasti','nasuc','nasui','nasul','nasut','natal','natia','natie','natii','nativ','natra','natre','natul','natur','nauca','nauce','nauci','nauto','naval','navei','navlu','navod','nazal','nazar','nazii','nazir','nazui','nazul','neaga','neamt','neant','neaos','neaua','neaza','nebun','necaz','necro','necum','nedei','neder','nefei','nefel','nefer','nefla','nefle','nefro','negai','negam','negat','negau','negei','negel','negii','negos','negot','negre','negri','negro','negru','negui','negul','negus','neica','neios','nemat','nemes','nemet','nemic','nemti','nemut','nenea','nenei','nenia','nenic','nenie','nenii','nenut','nepei','neper','nepot','nepus','neras','nerod','nervi','nesat','neste','nesul','neted','netei','netez','netii','netot','netul','neuma','neume','neuri','neuro','neveu','nevia','nevie','nevii','neviu','nevod','nevoi','nevri','nevro','nevul','nexul','nicio','nicol','nicti','nicto','nidus','niela','niele','nimba','nimfa','nimfe','nimfo','nimic','ninga','ninge','ninja','ninsa','ninse','ninsi','niper','niplu','nipon','nisei','nisip','niste','nitei','nitel','nitii','nitra','nitro','nitui','nitul','nival','nivel','nixei','nixis','nizam','noada','noade','nobil','nociv','nocti','nodal','nodos','nodul','noema','noeme','noeza','noeze','nogai','noian','noile','noima','noime','noimi','noita','noite','nomad','nomei','nomol','nomul','nonei','nonet','noneu','nopai','nopal','nopam','nopat','nopau','nopeu','nopez','nopti','norea','norei','norii','norit','norma','norme','normo','noroc','norod','noroi','noros','norul','norut','nosti','notai','notam','notar','notat','notau','notei','notes','notez','nouai','nouar','noura','nouri','nouta','noute','nouti','novac','novai','novam','novat','novau','novei','novez','noxei','nubil','nubuc','nucal','nucar','nucet','nucii','nucle','nucul','nucut','nudei','nudul','nufar','nulei','nulii','nulul','numai','numar','numea','numen','numii','numim','numit','nunei','nunii','nunta','nunti','nunul','nuori','nurca','nurci','nurii','nursa','nurse','nurul','nutri','nutui','nutul','nuzii','nyaya','nyaye','oabla','oable','oacan','oacar','oagei','oalei','oarba','oarbe','oarda','oarde','oarei','oarze','oasei','oaspe','oaste','oazei','obada','obaht','obari','obela','obele','oberi','obeza','obeze','obezi','obida','obide','obidi','obiul','oblat','oblea','oblet','oblic','oblig','oblii','oblim','oblit','oblon','oblul','oboli','obora','obori','obosi','obote','obrat','obraz','obroc','obron','obste','obsti','obtie','obtii','obtin','obtiu','obtuz','obuze','ocaia','ocaie','ocait','ocale','ocara','ocari','ocaua','ocean','oceli','ochea','ochet','ochii','ochim','ochit','ochlo','ocile','ocina','ocini','oclus','ocnas','ocnei','ocoli','ocrul','octal','octan','octet','oculo','ocult','ocupa','ocupe','ocupi','ocurg','ocurs','odaia','odaie','odaii','odata','odele','odeon','odgon','odina','odine','odini','odino','odios','odiul','odont','odori','oesar','ofera','ofere','oferi','offul','ofili','ofise','ofism','ofiur','ofset','oftai','oftam','oftat','oftau','oftez','oftic','oftig','oftul','ofuri','ofusc','ogari','ogeac','ogeag','ogece','ogege','ogiva','ogive','ogoia','ogoie','ogoii','ogoim','ogoit','ogora','ogori','ohaba','ohabe','ohmic','ohmii','ohmul','oiaga','oidea','oidia','oidie','oidii','oiegi','oieri','oiesc','oilor','oinei','oiste','oisti','oitei','ojele','ojina','ojine','ojini','ojogi','okapi','okume','olace','olaci','olana','olane','olani','olari','olate','olcar','oleab','oleat','oleia','oleic','oleie','oleom','oleul','oleum','oligo','olita','olite','oliva','olive','olmaz','olmii','olmul','ologi','oloia','oloii','oloim','oloit','olori','olozi','olpei','oltar','oluri','olute','omagi','ombro','omega','omeni','oment','ometi','omfal','omida','omisa','omise','omisi','omita','omite','omiti','omizi','omnia','omoii','omora','omori','onest','onico','oniro','onoma','onora','onori','ontic','onuri','oocit','oofit','oofor','oogon','oolit','oozom','opaca','opace','opaci','opait','opale','opari','opera','opere','opiat','opina','opise','opist','opiul','opium','oprea','opreg','oprii','oprim','oprit','opsas','opspe','optai','optam','optar','optat','optau','optez','optic','optim','optul','opuie','opuna','opune','opuri','opusa','opuse','opusi','opust','oraje','orala','orale','orali','orand','oranj','orant','oranz','orara','orare','orari','orase','orbea','orbec','orbet','orbia','orbie','orbii','orbim','orbis','orbit','orbul','orcai','orcan','orcic','orcul','ordia','ordie','ordii','ordin','ordon','oreav','orele','orexi','orfan','orfic','organ','orgia','orgie','orgii','orice','oriei','orier','orile','orjad','orlon','ornai','ornam','ornat','ornau','ornez','ornic','orori','orsag','ortac','ortic','ortii','ortul','orzar','orzul','osana','osari','oscar','oscei','oscii','oscil','oscul','osean','osebi','osene','oseni','oseta','osete','oseti','osiei','osman','osmic','osmiu','osmol','ososi','ospat','ospet','osram','ossia','ossii','ostas','ostea','osteo','ostia','ostic','ostie','ostii','ostil','ostim','ostit','ostoi','ostul','osuar','osute','otace','otaje','otara','otari','otava','otave','otavi','otcos','otcup','otele','oteli','otera','oteri','oteti','otfel','otgon','otice','otinc','otios','otita','otite','otova','oturi','ouale','ouand','ouara','ouare','ouari','ouase','ouata','ouate','ouati','oulet','oului','ousor','outul','ovala','ovale','ovali','ovare','ovata','ovate','ovati','ovele','ovese','oveze','ovili','ovina','ovine','ovini','ovism','ovoid','ovrei','ovreu','ovule','oxali','oxalo','oxida','oxido','oxiur','oxizi','ozele','ozena','ozene','ozona','pabai','pacai','pacat','pacea','pacii','pacla','pacle','pacte','pacul','padia','padie','padii','padoc','pafta','pafug','pagai','pagan','pagei','pager','pagii','pagul','pagur','pahai','pahar','paiai','paiam','paiau','paici','paier','paiet','paind','paine','paing','paini','paiol','paion','paios','paira','paire','pairi','paise','paisi','paita','paite','paiti','paiul','paius','paiut','pajii','pajul','palan','palat','palca','palce','palea','palee','palei','paleo','palha','palhe','palia','palid','palie','palii','palim','palis','palit','paliu','palma','palme','palmi','palos','palpa','palpe','palpi','palul','palus','palux','pamai','pamam','pamat','pamau','pamez','pampa','pampe','panas','panda','pande','pandi','panel','paner','panii','panou','pansa','panta','pante','panul','panus','panza','panze','papai','papal','papam','papat','papau','papei','papii','papir','papor','papua','papuc','papul','papus','parai','param','paras','parat','parau','parca','parce','parea','parei','parem','parez','parfe','parga','pargi','paria','parie','parii','parip','pariu','parli','paroh','paroi','parol','parom','paros','parsi','parta','parte','parti','party','parui','parul','parut','pasai','pasaj','pasam','pasat','pasau','pasca','pascu','pasea','pasei','pasez','pasii','pasim','pasin','pasit','pasiv','pasla','pasle','pasli','pasol','pasta','paste','pasti','pasui','pasul','pasus','patai','patam','patat','patau','patea','pater','pateu','patez','patii','patim','patio','patit','patma','patme','patos','patra','patru','patuc','patul','patut','pauca','pauce','pauna','paune','pauni','pauza','pauze','pavai','pavaj','pavam','pavat','pavau','pavea','pavei','pavez','pazea','pazei','pazia','pazie','pazii','pazim','pazit','peana','peane','pecia','pecie','pecii','peciu','pecum','pedea','pedel','pedes','pefug','pegas','pegra','pegre','pejma','pejme','pelaj','peles','pelin','pelit','pelur','pembe','penai','penaj','penal','penam','penar','penat','penau','penei','penel','penet','penez','penii','penin','penis','penny','pensa','pense','pente','penti','peoni','pepit','peplu','pepsi','peree','perei','peren','pereu','peria','perie','perii','peris','perja','perje','perji','perla','perle','perna','perne','peron','persa','perse','persi','perus','pesim','pesin','pesos','pesta','peste','pesti','petas','petea','petec','petei','petic','petii','petim','petit','pfund','piane','piano','piara','piata','piaza','picai','picaj','picam','picat','picau','picii','picni','picol','picon','picot','picou','picta','picui','picul','picup','picur','picus','picut','pieii','piele','pielm','piemn','piept','pierd','piere','pieri','pierz','piesa','piese','pieta','piete','pieze','piezi','pifan','pifei','pilaf','pilar','pilda','pilde','pilea','pilei','pilii','pilim','pilit','pilon','pilor','pilos','pilot','pilug','pilul','pinen','pinii','pinot','pinta','pinte','pinul','pioni','piosi','piota','piote','pipai','pipam','pipat','pipau','pipei','piper','pipez','pipit','pirat','pireu','pirex','piroi','pirol','piron','pirop','pirui','pirul','pisai','pisam','pisar','pisat','pisau','pisca','piser','pisez','pisic','pisoi','pista','piste','pisti','pisul','pitac','pitan','pitar','pitea','pitei','pitic','pitig','pitii','pitim','pitis','pitit','pitoi','piton','pitul','piuai','piuam','piuar','piuat','piuau','piuei','piuez','piuia','piuie','piuit','piure','piuuu','pivei','pivot','pixul','pizma','pizme','pizza','pizze','placa','place','placi','placu','plaga','plagi','plaie','plaja','plaje','plana','plane','plang','plani','plano','plans','plasa','plase','plasi','plata','plate','plati','plaur','plava','plave','plavi','plean','plebe','pleca','plece','pleci','pleda','plene','plese','plesi','plete','pleul','pleve','pliai','pliaj','pliam','pliat','pliau','plica','plice','plici','pliem','pliez','plimb','plina','pline','plini','plisa','plisc','plise','plita','plite','pliul','plivi','plodi','ploii','plopi','ploua','plozi','plumb','pluri','plusa','pluta','plute','pluti','pneul','poala','poale','poama','poame','poara','poare','poata','poate','pocai','pocal','pocea','pocia','pocie','pocii','pocim','pocit','pocni','pocoi','podan','podar','podea','podet','podii','podim','podis','podit','podul','podut','poema','poeme','poeta','poete','poeti','pofil','pofta','pofte','pofti','pogan','pogon','pogor','pohar','pohod','pohoi','pohot','pohta','pohte','pohti','poise','pojar','poker','polar','polca','polci','polei','polen','polii','polip','polis','polje','polog','polon','polos','polua','polul','pomai','pomet','pomii','pompa','pompe','pomul','ponce','ponci','ponei','ponit','poniv','ponod','ponor','ponos','ponta','ponte','ponti','popac','popas','popaz','popea','popei','popia','popic','popie','popii','popim','popit','popol','popor','popou','popri','popul','porci','porif','porii','porni','porno','poros','porta','porte','porti','porto','porul','posac','posed','posta','poste','posti','posul','potai','potca','potce','potir','potop','potou','potul','pound','povat','povod','povoi','poxia','poxie','poxii','pozai','pozam','pozat','pozau','pozei','pozez','pozna','pozne','praci','prada','prade','praji','pranz','prasa','prase','prasi','praxa','praxe','prazi','preda','prefa','preia','preot','presa','prese','preta','prezi','prian','priau','prica','price','prici','prier','priit','prima','prime','primi','primo','prind','prins','print','prinz','priod','prior','pripa','pripe','pripi','priva','privi','priza','prize','proba','probe','probi','proci','produ','proin','prois','proor','prora','prore','prost','proto','prour','prova','prove','proza','proze','pruba','prube','pruda','prude','pruei','pruha','pruhe','pruja','pruji','pruna','prunc','prund','prune','pruni','pruzi','psalm','psalt','psoas','ptoza','ptoze','ptusi','puber','pubis','pubul','puchi','pucul','pudel','pudic','pudla','pudli','pudra','pudre','pudul','pufai','pufar','pufii','pufna','pufne','pufni','pufos','pufui','puful','puhav','puhei','puhoi','puhui','puian','puiat','puiau','puica','puici','puiet','puind','puios','puira','puire','puiri','puise','puita','puite','puiti','puiuc','puiul','puiut','pulia','pulie','pulii','pulpa','pulpe','pulsa','pulul','pumei','pumni','punci','punct','punea','punem','punga','pungi','punic','punii','punta','punte','punti','punul','punzi','pupai','pupam','pupat','pupau','pupei','pupic','pupii','pupil','pupoi','pupui','pupul','purec','purei','purga','puric','purii','purim','purja','purje','puroi','purta','purul','pusca','pusei','puseu','pusii','pusta','puste','pusti','pusul','putar','putea','putem','putii','putim','putin','putit','putui','putul','putut','puvoi','quale','quarc','quazi','quick','quipu','rabar','rabat','rabda','rabde','rabia','rabic','rabie','rabii','rabin','rabit','rabla','rable','raboj','rabui','rabus','rabzi','racai','racan','racar','racea','racem','racii','racim','racit','racla','racle','racni','racul','radan','radar','radea','radei','radem','radia','radic','radie','radio','radiu','radom','radon','radou','radul','rafia','rafie','rafii','rafui','raful','ragai','ragaz','ragea','ragem','raget','ragii','ragil','ragit','ragoz','rahat','rahis','raiei','raion','raios','raita','raite','raiul','rajah','ralei','ralia','ralid','ralie','raliu','ralul','ramai','ramam','raman','ramas','ramat','ramau','ramca','ramce','ramei','ramer','ramez','ramia','ramie','ramii','ramni','rampa','rampe','ramul','ranca','ranch','ranci','randa','rande','ranea','ranei','ranga','rangi','ranii','ranim','ranit','ranji','ransa','ranse','ranza','ranze','rapai','rapan','rapea','rapei','rapel','rapid','rapii','rapim','rapit','rapos','rapui','rapul','rapun','rapus','rarea','rarei','rarii','rarim','raris','rarit','rarul','rasad','rasar','rasat','rasca','rasci','rasei','rasel','raset','rasii','rasni','rasol','raspa','raspe','rasti','rasuc','rasul','raszi','ratai','ratam','ratan','ratat','ratau','ratca','ratce','ratei','rates','rateu','ratez','ratia','ratie','ratii','ratoi','ratos','ratul','raura','rauri','ravac','ravar','ravas','ravna','ravne','ravni','razam','razat','razau','razbi','razda','razei','razes','razia','razie','razii','razim','razna','razne','razni','razor','razui','razul','razus','reada','readu','reala','reale','reali','reaua','rebab','rebat','rebec','rebel','rebus','rebut','recad','recal','recea','recif','recii','recit','recoc','recte','recto','recul','recuz','redai','redam','redan','redat','redau','redea','redia','redie','redig','redii','redis','rediu','redox','reduc','redus','refac','refec','refer','refug','reful','refuz','regal','regat','regea','regia','regie','regii','regim','regla','reiat','reiau','reiei','reies','rejet','rejoc','relas','relee','releg','relei','releu','relev','relon','relua','remii','remis','remit','remul','remuu','renal','renan','renci','reneg','renet','renia','renie','renii','renis','reniu','renta','rente','renul','repar','reped','reper','repet','repez','repui','repun','repus','resac','resca','resce','resou','retea','retez','retie','retii','retin','retiu','retor','retro','retur','retus','reuma','reume','reuni','reusi','revad','revaz','rever','revie','revii','revin','reviu','revoc','rezec','rezem','rezil','rezol','rezon','rezum','riali','ricin','ricsa','ricse','ridai','ridam','ridat','ridau','ridez','ridic','ridul','rifii','riflu','riful','rigai','right','rigid','rigii','rigla','rigle','rijei','rilei','rilul','rimai','rimam','rimat','rimau','rimei','rimel','rimez','rinei','ripai','ripam','ripat','ripau','ripez','risca','riste','risti','ritin','ritma','ritor','ritos','ritui','ritul','rival','rizat','rizic','rizil','rizom','rizul','roaba','roabe','roada','roade','roaga','roage','roasa','roase','roast','roata','roate','roaza','robea','robei','robia','robie','robii','robim','robit','robot','robul','roche','rochi','rocii','rocul','rodai','rodaj','rodam','rodan','rodat','rodau','rodea','rodeo','rodez','rodia','rodie','rodii','rodim','rodin','rodit','rodiu','rodor','rodos','rodul','rofii','rogoz','roiai','roiam','roiau','roiba','roibe','roibi','roind','roira','roire','roiri','roise','roisi','roita','roite','roiti','roiul','rolan','rolat','rolei','rolul','roman','romei','romeu','romii','romul','ronda','ronde','rondo','ronja','ropai','ropot','rosca','rosea','rosei','rosia','rosie','rosii','rosim','rosit','roste','rosti','rosul','rotai','rotam','rotar','rotas','rotat','rotau','rotea','rotez','rotii','rotim','rotin','rotis','rotit','rotor','rouai','rouei','roura','routa','route','rozei','rozia','rozie','rozii','roziu','rozul','rroma','rrome','rromi','ruaje','rubai','rubia','rubin','rubla','ruble','rudar','rudea','rudei','rudii','rudim','rudit','rufei','rufet','rufos','ruful','rugai','rugam','rugat','rugau','rugbi','rugby','rugea','ruget','rugii','rugim','rugit','rugos','rugul','ruina','ruine','ruini','rujai','rujam','rujan','rujar','rujat','rujau','rujei','rujet','rujez','rujii','rujul','rulai','rulaj','rulam','rulat','rulau','rulez','ruliu','rulou','ruman','rumba','rumbe','rumeg','rumen','rummy','rumpa','rumpe','rumpi','rumpt','rumse','rumta','rumte','rumti','rumul','runda','runde','runei','runic','rupea','rupem','rupia','rupie','rupii','rupse','rupta','rupte','rupti','rural','rusca','rusce','rusei','rusii','russe','ruste','rusul','rutei','rutil','rutul','sabac','sabai','sabar','sabas','sabat','sabau','sabia','sabie','sabii','sabin','sabir','sabla','sabot','sabui','sabur','sabus','sacai','sacal','sacaz','sacii','sacoi','sacos','sacou','sacra','sacre','sacri','sacru','sacui','sacul','sadea','sadei','sadem','sadic','sadii','sadim','sadit','sadul','safar','safeu','safic','safir','sagii','sagna','sagne','sagni','sagui','sagum','sahan','sahel','sahii','sahul','saiba','saibe','saica','saici','saigi','saiul','salai','salam','salar','salas','salau','salba','salbe','salca','salce','salci','salep','saleu','salia','salic','salie','salii','salin','salip','saliu','salol','salon','salsa','salse','salta','salte','salti','salul','salup','salut','salva','salve','saman','samar','samba','sambe','sambo','samca','samce','samei','sames','samot','samul','samur','sanal','sanda','sanet','sange','sania','sanie','sanii','sansa','sanse','santa','sante','santi','sanul','sapai','sapam','sapat','sapau','sapca','sapei','sapia','sapoi','sapte','sapun','sarac','sarad','sarai','saram','saran','sarar','sarat','sarau','sarba','sarbe','sarbi','sarda','sarde','sarea','sarez','sarga','sarge','sargi','saric','sarii','sarim','sarin','sarit','sarja','sarje','sarla','sarle','sarma','sarme','saros','sarpe','sarul','sarut','sarzi','sasai','sasau','sasca','sasce','sasea','saseu','sasia','sasie','sasii','sasiu','sasla','sasti','sasul','satan','satar','saten','satin','satir','satiu','satra','satre','satuc','satui','satul','satur','satut','sauas','saula','saule','sauna','saune','savai','savar','savor','savur','saxon','sazui','sazut','scada','scade','scafa','scafe','scaii','scala','scald','scale','scalp','scama','scame','scana','scapa','scape','scapi','scara','scari','scarm','scarp','scart','scaun','scaza','scazi','scazu','scena','scene','schia','schie','schif','schip','schit','scita','scite','sciti','sclai','sclav','scobi','scoci','scoli','scont','scopi','scopt','scosi','scota','scote','scoti','screm','scria','scrib','scrie','scrii','scrim','scrin','scris','scriu','scrob','scrot','scrum','scuar','scufa','scufe','scuip','scula','scule','scump','scuna','scund','scune','scurg','scurm','scurs','scurt','scuti','scuza','scuze','scuzi','seaca','seama','seara','seasa','seaua','sebum','secai','secam','secat','secau','secer','secii','secol','secta','secte','secui','secul','sedai','sedam','sedat','sedau','sedea','sedem','sedez','sedii','sediu','seduc','sedus','sefei','sefia','sefie','sefii','seful','segno','seiac','seici','seiga','seige','seihi','seile','seima','seime','seina','seine','seini','seisa','seise','seism','seizi','sejur','selac','selar','selba','selbe','selei','selva','selve','seman','semem','semen','semet','semic','semii','semit','semna','semne','semui','semul','senal','senar','senat','senei','senet','senii','senil','senin','senul','separ','sepci','sepia','sepie','sepii','septe','serai','seral','serat','serba','serbe','serbi','serei','seria','seric','serie','serif','serii','seros','serpe','serpi','serui','serul','serva','serve','servi','servo','sesam','sesar','sesea','sesei','sesia','sesie','sesii','sesil','sesul','setai','setam','setat','setau','setca','setci','setea','setei','seter','setez','setos','setre','setul','seuri','sevai','sevas','sevei','sever','sevro','sexta','sexte','sexul','sezon','sezui','sezut','sfada','sfadi','sfant','sfara','sfarc','sfare','sfarm','sfart','sfeii','sfera','sfere','sferi','sfert','sfeti','sfezi','sfiai','sfiam','sfiau','sfida','sfiet','sfiii','sfiim','sfiit','sfinx','sfios','sfita','sfite','sfori','siace','siaje','sibir','siboi','sicar','sicii','sicli','sicui','sicul','sidef','siesi','sifon','siful','sigei','sigil','sigla','sigle','sigma','sigur','sihla','sihle','siile','siism','siita','siite','siiti','silan','silca','silce','silea','silei','silen','silex','silfa','silfe','silfi','silha','silhe','silii','silim','silit','silon','siloz','silui','silul','silur','silva','silve','silvo','simei','simen','simit','simta','simte','simti','simun','sinar','sinea','sinei','sinet','sinia','sinie','sinii','sinod','sinor','sinta','sinte','sinui','sinul','sinus','sipca','sipci','sipet','sipii','sipot','sipul','sirag','sirec','sirei','sirep','siret','siric','siroi','sirop','sirui','sirul','sirut','sisai','sisal','sisca','sista','siste','sisti','sisul','sitar','sitav','sitei','situa','situi','situl','sivei','sivii','sivoi','sivul','sixta','sixte','skate','skeet','slaba','slabe','slabi','slana','slane','slang','slapi','slash','slava','slave','slavi','sleah','sleau','sleia','sleii','sleim','sleit','slice','slire','sliri','slops','slova','slove','slovo','sluga','slugi','sluis','sluji','sluta','slute','sluti','smaci','smale','smalt','smarc','smard','smash','smead','smeci','smede','smeri','smezi','smida','smide','smint','smoli','smomi','smuci','smuga','smugi','smulg','smuls','smult','snack','snaga','snagi','snaps','snobi','snopi','soada','soade','soaie','soare','soata','soate','sobar','sobei','sobol','sobor','sobra','sobre','sobri','sobru','socai','socam','socat','socau','socii','soclu','socot','socri','socru','socul','sodar','sodei','sodic','sodiu','sodom','sodou','sodul','sofai','sofaj','sofam','sofat','sofau','sofei','sofer','sofez','sofra','sogor','sohan','soiai','soiam','soiau','soiei','soimi','soind','soios','soira','soire','soiri','soise','soisi','soita','soite','soiti','soiul','solar','solba','solbe','solda','solde','soldi','solea','solei','solia','solid','solie','solii','solim','solit','solul','solva','solve','solvi','solzi','somac','somai','somaj','somam','somat','somau','somei','somer','somez','somna','somni','somon','sonai','sonam','sonar','sonat','sonau','sonda','sonde','sonet','sonez','sonic','sonii','sonor','sonti','sonul','sopai','sopei','sopon','sopor','sopot','sopru','sopti','sopul','sorbi','sorea','sorec','sorei','soric','sorii','sorim','sorit','soroc','soros','sorta','sorti','sorul','sosea','soset','sosia','sosie','sosii','sosim','sosit','sosma','sosoi','soson','sosul','sotia','sotie','sotii','sotul','sound','sovai','sovan','sovar','sovin','sovon','sozii','spada','spade','spaga','spagi','spais','spala','spalt','spana','spane','spani','spant','spanz','sparc','sparg','spart','spasi','spasm','spata','spate','spelb','spele','speli','spera','spere','speri','spert','spese','speta','spete','speti','speze','spice','spina','spine','spini','spion','spira','spire','spirt','spita','spite','spiti','splai','splau','splin','split','spoia','spoii','spoim','spoit','spori','sport','spray','sprit','spuie','spuma','spume','spuna','spune','spurc','spusa','spuse','spusi','sputa','spute','spuza','spuze','spuzi','stabi','staff','staif','stair','stalp','stana','stand','stane','stang','stani','starc','stare','stari','start','starv','state','stati','statu','staul','stava','stave','stavi','staza','staze','steaf','steag','stean','steap','steie','stela','stele','steli','stema','steme','steni','stepa','stepe','stepi','sterg','steri','stern','sterp','sters','stert','stete','steve','steze','stiai','stiam','stiau','stift','stila','stilb','stile','stima','stime','stimi','sting','stins','stiob','stira','stirb','stire','stiri','stiti','stiui','stiut','stiva','stive','stoca','stoci','stofa','stofe','stoic','stola','stole','stopa','storc','stors','story','straf','strai','stras','strat','strei','stres','stria','stric','strie','strig','strii','striu','stroh','stroi','strop','strug','strup','strut','stufa','stufe','stunt','stupa','stupe','stupi','sturt','sturz','style','suava','suave','suavi','subei','suber','subit','subra','sucar','sucea','sucii','sucim','sucit','sucna','sucne','sucul','sudac','sudai','sudaj','sudam','sudat','sudau','sudea','sudez','sudic','sudii','sudim','sudit','sudor','sudui','sudul','sueta','suete','sufan','sufar','sufit','sufix','sufla','sufle','sufli','suflu','sufoc','sugar','sugea','sugei','sugel','sugem','sugui','sugus','suhat','suiai','suiam','suiat','suiau','suiei','suiem','suier','suiet','suiez','suina','suind','suine','suini','suira','suire','suiri','suise','suisi','suita','suite','suiti','suiul','sujet','sulac','sular','sulei','suler','sulfa','sulfe','sulky','sulta','sulte','sulul','sumac','sumai','sumam','suman','sumar','sumat','sumau','sumec','sumei','sumen','sumes','sumet','sumez','summa','sumut','sunai','sunam','sunat','sunau','sunca','sunci','sunet','sunna','sunne','supai','supam','supar','supat','supau','supei','super','supeu','supez','supie','supin','supla','suple','supli','suplu','supra','supse','supta','supte','supti','supui','supun','supus','surad','suras','suraz','surda','surde','surea','surei','suret','suria','surie','surii','surim','surit','suriu','surla','surle','surpa','surpe','surpi','sursa','surse','surub','surul','surup','surzi','susai','susam','susan','susei','susta','suste','susui','susul','susur','sutai','sutam','sutar','sutas','sutat','sutau','sutea','sutei','suter','sutez','sutii','sutim','sutit','sutor','sutul','suvac','suvai','suvar','suvoi','svaba','svabe','svabi','svada','svart','sveda','svede','svezi','sving','swazi','swing','tabac','taban','tabar','tabel','tabes','tabia','tabie','tabii','tabla','table','tabun','tacai','tacam','tacan','tacea','tacem','tacit','tacla','tacta','tacui','tacul','tacut','tafei','tafla','tafle','tafna','tafne','tafni','tafta','tafte','taful','tagai','tagii','tagla','tagle','tagma','tagme','tahan','tahla','tahle','tahni','taiai','taiam','taiat','taiau','taica','taici','taiem','taier','taiga','taina','taind','taine','taior','taios','talaj','talam','talan','talar','talas','talaz','talea','talei','taler','talia','talie','talii','talim','taliu','talon','talpa','talpi','talul','talus','taluz','talvi','tamai','taman','tamar','tamas','tamja','tamje','tampa','tampe','tampi','tanai','tanaj','tanar','tanas','tanat','tanau','tanca','tance','tanci','tanea','tanga','tangi','tanic','tanin','tanji','tanta','tante','tanti','taola','taole','tapai','tapaj','tapam','tapap','tapat','tapau','tapei','tapet','tapez','tapii','tapin','tapir','tapoi','tapos','tapsi','tapuc','tapul','tarac','taraf','tarai','taram','taran','tarar','taras','tarat','tarau','tarca','tarci','tarea','tarei','tarfa','tarfe','targa','targi','taria','tarie','tarif','tarii','tarla','tarle','tarli','tarna','tarne','tarni','taroc','tarod','tarot','tarsa','tarse','tarsi','tarta','tarte','tarul','tarus','tasai','tasam','tasat','tasau','tasca','taseu','tasez','tasma','tasni','tason','tasta','taste','tasti','tasul','tatai','tatal','tatan','tatar','tatei','tatic','tatii','tatoi','tatos','tatua','tatuc','tatul','tatut','tauia','tauii','tauim','tauit','taula','taule','taune','tauni','tauri','tausi','tavan','tavii','taxai','taxam','taxat','taxau','taxei','taxez','taxid','taxim','teaca','teama','teanc','teapa','teara','teasa','teasc','teava','teche','techi','tecii','tecul','tefal','tehno','tehui','teica','teici','teier','teina','teine','teios','teism','teist','teiul','telal','telea','telex','telii','telim','telit','telul','telur','temea','temei','temem','temii','tempo','temui','temut','tenda','tende','tenia','tenie','tenii','tenis','tenor','tenta','tente','tenul','tepei','tepii','tepos','tepul','teras','teraz','terci','teren','terfe','terii','terme','termo','terna','terne','terni','terta','terte','terti','tesac','tesal','tesea','tesem','tesii','tesim','tesit','tesla','tesle','tesos','testa','teste','tesui','tesut','tetea','tetei','tetra','tetre','teuca','teuci','teuga','teuge','teuri','tevar','tevii','tevos','tevui','texan','texte','texul','tezei','tiara','tiare','tibet','tibia','tibii','ticai','ticla','ticle','ticna','ticne','ticni','ticsi','ticui','ticul','ticur','tifan','tific','tifla','tifle','tifon','tifos','tiful','tigai','tigan','tigla','tigle','tigra','tigre','tigri','tigru','tigva','tigve','tihai','tihna','tihne','tihni','tihui','tiind','tijei','tilai','tilda','tilde','timar','timfi','timia','timid','timie','timii','timin','timir','timol','timpi','timus','tinar','tinca','tinci','tinda','tinde','tinea','tinei','tinem','tinos','tinsa','tinse','tinsi','tinta','tinte','tinti','tinui','tinut','tinza','tinzi','tioli','tipai','tipam','tipar','tipat','tipau','tipea','tipei','tipet','tipia','tipic','tipie','tipii','tipim','tipis','tipit','tipla','tiple','tiplu','tipoi','tipos','tipul','tiraj','tiran','tirul','tisei','tisii','tisni','tisti','tisul','titan','titei','titlu','titra','titre','titru','tiuia','tiuie','tiuii','tiuim','tiuit','tiuri','tivai','tivea','tivga','tivgi','tivic','tivii','tivil','tivim','tivit','tivli','tivul','tizei','tizic','tizii','tizul','tmeza','tmeze','toaba','toabe','toaca','toace','toaia','toaie','toala','toale','toana','toane','toapa','toape','toast','toata','toate','tobac','tobas','tobei','tocai','tocam','tocat','tocau','tocea','tocii','tocim','tocit','tocma','tocme','tocmi','tocni','tocot','tocul','tofus','togii','toiag','toiai','toiam','toiau','toile','toind','toira','toire','toiri','toise','toisi','toiti','toiul','tolba','tolbe','tolei','tolet','tolii','tolul','tolut','tomna','tomul','tonaj','tonal','tondo','tonei','toner','tonic','tonii','tonos','tonou','tonti','tonul','tonus','topac','topai','topaz','topea','topic','topii','topim','topit','topor','topos','topul','topuz','torba','torbe','torci','torid','torit','toriu','torni','toron','torri','torsi','torta','torte','torti','torul','tosca','tosti','tosul','total','totem','totii','totul','toval','toxic','traca','trace','traci','tract','trada','tradu','traga','trage','tragi','traia','traii','traim','trait','trama','trame','tranc','trand','trans','trapa','trape','trasa','trase','trasi','trass','trata','trate','traul','treaz','trebi','trece','treci','trecu','treia','treji','trele','trema','treme','trena','trend','trene','tresa','trese','treti','treze','trezi','triac','triai','triaj','trial','triam','triat','triau','trico','triem','trier','triez','triod','trior','trisa','trist','trona','tronc','tropa','tropi','trosc','trota','truba','trube','truca','truci','truda','trude','trudi','trufa','trufe','trufi','trupa','trupe','trusa','truse','trust','tubai','tubaj','tubam','tubat','tubau','tubei','tubez','tubul','tucai','tucal','tucam','tucan','tucat','tucau','tufan','tufar','tufei','tufis','tufit','tufli','tufos','tuful','tugui','tugul','tuhai','tuhal','tuiai','tuiam','tuiau','tuica','tuici','tuiei','tuies','tuile','tuind','tuior','tuira','tuire','tuiri','tuise','tuisi','tuita','tuite','tuiti','tuiul','tulai','tulea','tulei','tuleu','tulii','tulim','tulit','tuliu','tulti','tuluc','tulul','tumba','tumbe','tumul','tunai','tunam','tunar','tunat','tunau','tunda','tunde','tunel','tuner','tunet','tunsa','tunse','tunsi','tunul','tunza','tunzi','tupai','tupeu','turan','turba','turbe','turbi','turca','turce','turci','turei','turla','turle','turma','turme','turna','turta','turte','turti','turuc','turui','turul','tusai','tusam','tusat','tusau','tusca','tusea','tusei','tuset','tuseu','tusez','tusii','tusim','tusit','tusor','tusti','tusul','tutea','tutei','tutia','tutie','tutii','tutoi','tutor','tutti','tutuc','tutui','tutul','tutun','tutur','tweed','twist','ubace','ucida','ucide','uciga','ucisa','ucise','ucisi','uciza','ucizi','uclei','ucuri','udand','udara','udare','udari','udase','udasi','udata','udate','udati','udeai','udeam','udeau','udele','udeli','udesc','udind','udira','udire','udiri','udise','udisi','uditi','udmei','uduri','uedul','ugere','ughii','ugnea','ugnii','ugnim','ugnit','uguia','uguie','uguit','uhale','uhaua','uiaga','uiati','uibul','uicai','uicii','uideo','uiegi','uiesc','uiete','uilor','uimea','uimei','uimii','uimim','uimit','uimul','uinei','uiram','uirea','uirii','uisem','uitai','uitam','uitat','uitau','uitit','uituc','uiuiu','ujbei','ujuia','ujuie','ujuit','ulaje','ulani','ulcea','ulcer','ulcus','ulduc','uleia','uleie','uleii','ulema','uleul','ulies','uliii','ulita','ulite','uliti','uliul','uliut','ulmai','ulmam','ulmat','ulmau','ulmii','ulmul','ulnar','ulnei','ultim','ultra','uluba','ulube','uluca','uluce','uluci','uluia','uluii','uluim','uluit','umana','umane','umani','umbla','umble','umbli','umblu','umbon','umbra','umbre','umbri','umeda','umede','umere','umeri','umezi','umfla','umfle','umfli','umflu','umida','umide','umidi','umido','umila','umile','umili','umizi','umori','umple','umpli','umplu','unaul','unchi','uncia','uncie','uncii','undai','undam','undat','undau','undea','undei','undez','undii','undim','undit','undoi','undos','undui','uneai','uneam','uneau','uneia','unele','unesc','ungar','ungea','ungem','unghi','ungur','ungvi','uniat','uniax','unica','unice','unici','unime','unimi','unind','unira','unire','uniri','unise','unisi','unita','unite','uniti','unora','unsei','unsii','unspe','unsul','untar','untos','untul','unuia','urale','urand','urano','urara','urare','urari','urasc','urase','urasi','urata','urate','urati','urban','urbea','urbei','urcai','urcam','urcat','urcau','urcus','urdar','urdea','urdei','urdii','urdim','urdin','urdit','urduc','urdul','uredo','ureea','ureei','ureic','uretr','ureus','ureze','urezi','urgia','urgie','urgii','urias','urica','urice','urici','urile','urina','urine','urini','urlai','urlam','urlat','urlau','urlet','urloi','urlui','urlup','urmai','urmam','urmas','urmat','urmau','urmei','urmez','urmii','urmul','urnea','urnei','urnii','urnim','urnit','ursac','ursar','ursea','ursei','ursii','ursim','ursin','ursit','ursoi','urson','ursul','ursuz','uruia','uruie','uruii','uruim','uruit','urzar','urzea','urzic','urzii','urzim','urzit','urzoi','usari','uscai','uscam','uscat','uscau','uschi','useri','usier','usile','usita','usite','uslas','usnei','usori','ustas','usuca','usuce','usuci','usuia','usuii','usuim','usuit','usura','usure','usuri','usuta','usute','utere','utero','utila','utile','utili','uvala','uvale','uveal','uveea','uveei','uviol','uvraj','uvula','uvule','uvulo','uxere','uzaje','uzand','uzara','uzare','uzari','uzase','uzasi','uzata','uzate','uzati','uzbec','uzeze','uzezi','uzina','uzine','uzita','uzual','uzura','uzuri','uzurp','vacar','vacat','vacii','vacua','vacue','vacui','vacul','vacuu','vadan','vadea','vadii','vadim','vadit','vadra','vadul','vaduv','vafei','vagal','vagas','vagii','vagil','vagin','vagon','vague','vagul','vaiag','vaier','vaiet','vaile','vaina','vaita','vaite','vaiti','vajai','vajea','vajia','vajie','vajii','vajim','vajit','vajoi','vajul','valah','valau','valca','valci','valea','valet','valeu','valex','valfa','valfe','valid','valii','valiu','valma','valmi','valon','valsa','valug','valul','valva','valve','valvi','vamal','vames','vamii','vampa','vampe','vamui','vanai','vanam','vanat','vanau','vanda','vande','vandu','vanei','vanez','vanii','vanji','vanos','vanul','vanza','vapai','vapel','vapor','vapsi','varai','varam','varan','varar','varat','varau','varca','varci','varda','varec','vareg','varez','varga','vargi','varia','varie','varii','vario','variu','varos','varsa','varse','varsi','varta','varui','varul','varus','varva','varve','varza','vasal','vasar','vasca','vasce','vasel','vasla','vasle','vasli','vasta','vaste','vasti','vasul','vasut','vataf','vataj','vatam','vatas','vatav','vatei','vates','vatir','vatos','vatra','vatui','vazei','vazui','vazul','vazut','vecea','veceu','veche','vechi','vecia','vecie','vecii','vecin','vecto','vecui','vedda','vedde','vedea','vedei','vedem','vedic','vedre','vegai','veghe','veghi','velar','velea','velei','velic','velii','velim','velin','velit','velum','velur','venal','venea','venei','venet','venia','venie','venii','venim','venin','venit','venos','venus','verbe','verde','verei','verga','vergi','veric','verif','verii','verin','vermi','veros','verse','versi','verso','verui','verva','verve','verze','verzi','vesca','vesel','vesta','veste','vesti','vetre','vetri','vexai','vexam','vexat','vexau','vexez','vexil','viara','viase','viasi','viata','viati','viaza','vibra','vibro','vicar','vicia','vicie','vicii','viciu','vidai','vidaj','vidam','vidat','vidau','videi','video','videz','vidma','vidme','vidra','vidre','vidul','viela','viele','viere','vieri','viers','viesc','vieti','vieze','viezi','vifel','vifor','vigan','vigia','vigie','vigii','vigil','vigul','viile','viind','vilei','vilii','vilit','vilos','vilul','vinar','vinat','vinci','vinde','vinei','vinia','vinie','vinii','vinil','viniu','vinos','vinul','vinut','vinzi','vioda','viode','vioii','viola','viole','viori','vipia','vipie','vipii','vipla','viple','vipul','virai','viraj','viral','viram','viran','virat','virau','virez','virga','virid','viril','virul','virus','visai','visam','visat','visau','visco','visez','visin','visul','vitae','vital','vitea','vitei','vitel','vitii','vitiu','vitos','vitro','viuta','viute','viuti','vivat','vizai','vizam','vizat','vizau','vizei','vizez','vizii','vizir','vizon','vizor','vlaga','vlaha','vlahe','vlahi','voala','vocal','vocea','vocii','vodca','vodci','voder','vogai','voiai','voiaj','voiam','voiau','voile','voind','voios','voira','voire','voiri','voise','voisi','voita','voite','voiti','voiul','volan','volar','volei','volet','voleu','voloc','volog','volsc','volta','volte','volti','volum','volva','volve','vomai','vomam','vomat','vomau','vomei','vomer','vomez','vomic','vomit','vopsi','vorba','vorbe','vorbi','vosti','votai','votam','votat','votau','votca','votci','votez','votiv','votri','votru','votul','votum','vozai','vozam','vozat','vozau','vrace','vraci','vraja','vraji','vrana','vrand','vrane','vrati','vreai','vream','vreau','vreie','vreji','vreme','vremi','vrere','vreri','vreti','vreun','vriei','vrila','vrile','vroia','vroii','vroim','vroit','vruna','vrura','vruse','vrusi','vruta','vrute','vruti','vtori','vuiau','vuiet','vuind','vuira','vuire','vuiri','vuise','vulpe','vulpi','vulva','vulve','vulvo','vurta','vurte','vutca','vutci','vutei','vuvar','vuvei','vuvui','walon','watii','weber','whigi','widia','widii','wilow','wolof','wonii','wonul','xanto','xenia','xenie','xenii','xenon','xeres','xeric','xerom','xerox','xifia','xifie','xifii','xifos','xilan','xilem','xilen','xilit','xilol','xilon','xisma','xisme','yalei','yarzi','yenii','yenul','yetii','yogin','ytrit','ytriu','yuani','yucca','yunga','yuppi','zabet','zabra','zabre','zabun','zacas','zacea','zacem','zacui','zacut','zadar','zadei','zadia','zadie','zadii','zaduf','zaduh','zagan','zagas','zagaz','zahai','zahar','zaica','zaici','zaifa','zaife','zaifi','zaimf','zairi','zalar','zalei','zalog','zalud','zalug','zamac','zambi','zambo','zamca','zamci','zamii','zanat','zanei','zapai','zapaj','zapam','zapat','zapau','zapez','zapis','zapor','zapsi','zapuc','zaraf','zarar','zarea','zarei','zarif','zarii','zarim','zarit','zarna','zarne','zarpa','zarul','zarva','zarve','zasti','zaton','zatul','zauit','zavod','zavoi','zavor','zazai','zbant','zbarn','zbata','zbate','zbati','zbatu','zbeng','zbice','zbici','zbier','zbilt','zbiri','zbori','zbura','zburd','zeama','zeaua','zebra','zebre','zebul','zecea','zecer','zeche','zechi','zeele','zefir','zeghe','zeghi','zeiei','zeina','zeine','zeita','zeite','zelar','zelei','zelos','zelot','zelul','zemii','zemos','zemui','zenda','zende','zenit','zenul','zenzi','zeppa','zeppe','zerar','zerea','zerit','zeros','zerul','zetaj','zetar','zetui','zgaia','zgaii','zgaim','zgait','zgaul','zgaur','zguli','zgura','zguri','ziare','zicas','zicea','zicem','zidar','zidea','zidii','zidim','zidit','zidui','zidul','zigot','zilas','zilei','ziler','zilos','zimta','zimti','zinca','zisei','zisii','zisul','zitum','ziuca','ziuci','zlace','zlaci','zlati','zloti','zmeie','zmeii','zmeoi','zmeul','zmeur','zoaia','zoaie','zoala','zoale','zoana','zoane','zoarh','zoava','zoave','zobea','zobii','zobim','zobit','zobon','zobul','zodia','zodie','zodii','zoile','zoili','zoios','zolea','zolga','zolge','zolgi','zolii','zolim','zolit','zombi','zonaj','zonal','zonar','zonei','zooid','zooni','zooul','zooza','zooze','zopai','zoppa','zorea','zorei','zorel','zorii','zoril','zorim','zorit','zorul','zovon','zuavi','zuful','zulia','zulie','zulii','zuluf','zulum','zulus','zupai','zupui','zurai','zurba','zurbe','zurrr','zurui','zuzai','zuzet','zuzui','zvant','zvarl','zvarr','zvelt','zvoni',],
      Ta = ['abbot'],
      Ia = 'present',
      Ma = 'correct',
      Oa = 'absent';
    var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };
    function $a(e, a) {
      var s = {};
      return (
        e.forEach(function (e, t) {
          if (a[t])
            for (var o = 0; o < e.length; o++) {
              var n = e[o],
                r = a[t][o],
                i = s[n] || 'unknown';
              Ra[r] > Ra[i] && (s[n] = r);
            }
        }),
        s
      );
    }

    function Pa(e) {
      var a = ['th', 'st', 'nd', 'rd'],
        s = e % 100;
      return e + (a[(s - 20) % 10] || a[s] || a[0]);
    }
    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

    function Na(e, a) {
      var s = new Date(e),
        t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.round(t / 864e5);
    }

    function Da(e) {
      //   var a,
      //   s = Ga(e);
      // return (a = s % La.length), La[a];
      const manualSetSolution = 'medic';
      return manualSetSolution;
    }

    function Ga(e) {
      return Na(Ha, e);
    }
    //FIXME: Valid letters
    var Ba = 'abcdefghijklmnopqrstuvwxyzăâîșț',
      Fa = [].concat(g(Ba.split('').slice(13)), g(Ba.split('').slice(0, 13)));

    function Wa(e) {
      for (var a = '', s = 0; s < e.length; s++) {
        var t = Ba.indexOf(e[s]);
        a += t >= 0 ? Fa[t] : '_';
      }
      return a;
    }
    var Ya = 'statistics',
      Ja = 'fail',
      Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n(
          {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
          },
          Ja,
          0,
        ),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0,
      };

    function Xa() {
      var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
      return JSON.parse(e);
    }

    function Va(e) {
      var a = e.isWin,
        s = e.isStreak,
        t = e.numGuesses,
        o = Xa();
      a
        ? ((o.guesses[t] += 1),
          s ? (o.currentStreak += 1) : (o.currentStreak = 1))
        : ((o.currentStreak = 0), (o.guesses.fail += 1)),
        (o.maxStreak = Math.max(o.currentStreak, o.maxStreak)),
        (o.gamesPlayed += 1),
        (o.gamesWon += a ? 1 : 0),
        (o.winPercentage = Math.round((o.gamesWon / o.gamesPlayed) * 100)),
        (o.averageGuesses = Math.round(
          Object.entries(o.guesses).reduce(function (e, a) {
            var s = y(a, 2),
              t = s[0],
              o = s[1];
            return t !== Ja ? (e += t * o) : e;
          }, 0) / o.gamesWon,
        )),
        (function (e) {
          window.localStorage.setItem(Ya, JSON.stringify(e));
        })(o);
    }
    var Ka = document.createElement('template');
    Ka.innerHTML =
      '\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: '
        .concat(1e3, ';\n  }\n  #system-toaster {\n    z-index: ')
        .concat(
          4e3,
          ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         CUVÂNTUL\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n',
        );
    var Qa = document.createElement('template');
    Qa.innerHTML =
      '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = 'IN_PROGRESS',
      es = 'WIN',
      as = 'FAIL',
      ss = [
        'Felicitări',
        'Incredibil',
        'Impresionant',
        'Fantastic',
        'Bine',
        'Aproape',
      ],
      ts = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), 'tileIndex', 0),
            n(p(e), 'rowIndex', 0),
            n(p(e), 'solution', void 0),
            n(p(e), 'boardState', void 0),
            n(p(e), 'evaluations', void 0),
            n(p(e), 'canInput', !0),
            n(p(e), 'gameStatus', Za),
            n(p(e), 'letterEvaluations', {}),
            n(p(e), '$board', void 0),
            n(p(e), '$keyboard', void 0),
            n(p(e), '$game', void 0),
            n(p(e), 'today', void 0),
            n(p(e), 'lastPlayedTs', void 0),
            n(p(e), 'lastCompletedTs', void 0),
            n(p(e), 'hardMode', void 0),
            n(p(e), 'dayOffset', void 0),
            e.attachShadow({
              mode: 'open',
            }),
            (e.today = new Date());
          var o = za();
          return (
            (e.lastPlayedTs = o.lastPlayedTs),
            !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1
              ? ((e.boardState = new Array(6).fill('')),
                (e.evaluations = new Array(6).fill(null)),
                (e.solution = Da(e.today)),
                (e.dayOffset = Ga(e.today)),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                (e.restoringFromLocalStorage = !1),
                ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus,
                }),
                Ca('event', 'level_start', {
                  level_name: Wa(e.solution),
                }))
              : ((e.boardState = o.boardState),
                (e.evaluations = o.evaluations),
                (e.rowIndex = o.rowIndex),
                (e.solution = o.solution),
                (e.dayOffset = Ga(e.today)),
                (e.letterEvaluations = $a(e.boardState, e.evaluations)),
                (e.gameStatus = o.gameStatus),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                e.gameStatus !== Za && (e.canInput = !1),
                (e.restoringFromLocalStorage = !0)),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'evaluateRow',
              value: function () {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                  var e,
                    a = this.$board.querySelectorAll('game-row')[this.rowIndex],
                    s = this.boardState[this.rowIndex];
                  //FIXME:
                  if (((e = s), !Ta.includes(e) && !La.includes(e)))
                    return (
                      a.setAttribute('invalid', ''),
                      void this.addToast('Cuvântul nu există')
                    );
                  //if (e = s, !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
                  if (this.hardMode) {
                    var t = (function (e, a, s) {
                        if (!e || !a || !s)
                          return {
                            validGuess: !0,
                          };
                        for (var t = 0; t < s.length; t++)
                          if (s[t] === Ma && e[t] !== a[t])
                            return {
                              validGuess: !1,
                              errorMessage: ''
                                .concat(Pa(t + 1), ' letter must be ')
                                .concat(a[t].toUpperCase()),
                            };
                        for (var o = {}, n = 0; n < s.length; n++)
                          [Ma, Ia].includes(s[n]) &&
                            (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                        var r = e.split('').reduce(function (e, a) {
                          return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                        }, {});
                        for (var i in o)
                          if ((r[i] || 0) < o[i])
                            return {
                              validGuess: !1,
                              errorMessage: 'Guess must contain '.concat(
                                i.toUpperCase(),
                              ),
                            };
                        return {
                          validGuess: !0,
                        };
                      })(
                        s,
                        this.boardState[this.rowIndex - 1],
                        this.evaluations[this.rowIndex - 1],
                      ),
                      o = t.validGuess,
                      n = t.errorMessage;
                    if (!o)
                      return (
                        a.setAttribute('invalid', ''),
                        void this.addToast(n || 'Not valid in hard mode')
                      );
                  }
                  var r = (function (e, a) {
                    for (
                      var s = Array(a.length).fill(Oa),
                        t = Array(a.length).fill(!0),
                        o = Array(a.length).fill(!0),
                        n = 0;
                      n < e.length;
                      n++
                    )
                      e[n] === a[n] &&
                        o[n] &&
                        ((s[n] = Ma), (t[n] = !1), (o[n] = !1));
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (t[r])
                        for (var l = 0; l < a.length; l++) {
                          var d = a[l];
                          if (o[l] && i === d) {
                            (s[r] = Ia), (o[l] = !1);
                            break;
                          }
                        }
                    }
                    return s;
                  })(s, this.solution);
                  (this.evaluations[this.rowIndex] = r),
                    (this.letterEvaluations = $a(
                      this.boardState,
                      this.evaluations,
                    )),
                    (a.evaluation = this.evaluations[this.rowIndex]),
                    (this.rowIndex += 1);
                  var i = this.rowIndex >= 6,
                    l = r.every(function (e) {
                      return 'correct' === e;
                    });
                  if (i || l)
                    Va({
                      isWin: l,
                      isStreak:
                        !!this.lastCompletedTs &&
                        1 === Na(new Date(this.lastCompletedTs), new Date()),
                      numGuesses: this.rowIndex,
                    }),
                      ja({
                        lastCompletedTs: Date.now(),
                      }),
                      (this.gameStatus = l ? es : as),
                      Ca('event', 'level_end', {
                        level_name: Wa(this.solution),
                        num_guesses: this.rowIndex,
                        success: l,
                      });
                  (this.tileIndex = 0),
                    (this.canInput = !1),
                    ja({
                      rowIndex: this.rowIndex,
                      boardState: this.boardState,
                      evaluations: this.evaluations,
                      solution: this.solution,
                      gameStatus: this.gameStatus,
                      lastPlayedTs: Date.now(),
                    });
                }
              },
            },
            {
              key: 'addLetter',
              value: function (e) {
                this.gameStatus === Za &&
                  this.canInput &&
                  (this.tileIndex >= 5 ||
                    ((this.boardState[this.rowIndex] += e),
                    this.$board
                      .querySelectorAll('game-row')
                      [this.rowIndex].setAttribute(
                        'letters',
                        this.boardState[this.rowIndex],
                      ),
                    (this.tileIndex += 1)));
              },
            },
            {
              key: 'removeLetter',
              value: function () {
                if (
                  this.gameStatus === Za &&
                  this.canInput &&
                  !(this.tileIndex <= 0)
                ) {
                  this.boardState[this.rowIndex] = this.boardState[
                    this.rowIndex
                  ].slice(0, this.boardState[this.rowIndex].length - 1);
                  var e =
                    this.$board.querySelectorAll('game-row')[this.rowIndex];
                  this.boardState[this.rowIndex]
                    ? e.setAttribute('letters', this.boardState[this.rowIndex])
                    : e.removeAttribute('letters'),
                    e.removeAttribute('invalid'),
                    (this.tileIndex -= 1);
                }
              },
            },
            {
              key: 'submitGuess',
              value: function () {
                if (this.gameStatus === Za && this.canInput) {
                  if (5 !== this.tileIndex)
                    return (
                      this.$board
                        .querySelectorAll('game-row')
                        [this.rowIndex].setAttribute('invalid', ''),
                      void this.addToast('Not enough letters')
                    );
                  this.evaluateRow();
                }
              },
            },
            {
              key: 'addToast',
              value: function (e, a) {
                var s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  t = document.createElement('game-toast');
                t.setAttribute('text', e),
                  a && t.setAttribute('duration', a),
                  s
                    ? this.shadowRoot
                        .querySelector('#system-toaster')
                        .prepend(t)
                    : this.shadowRoot.querySelector('#game-toaster').prepend(t);
              },
            },
            {
              key: 'sizeBoard',
              value: function () {
                var e = this.shadowRoot.querySelector('#board-container'),
                  a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                  s = 6 * Math.floor(a / 5);
                (this.$board.style.width = ''.concat(a, 'px')),
                  (this.$board.style.height = ''.concat(s, 'px'));
              },
            },
            {
              key: 'showStatsModal',
              value: function () {
                var e = this.$game.querySelector('game-modal'),
                  a = document.createElement('game-stats');
                this.gameStatus === es &&
                  this.rowIndex <= 6 &&
                  a.setAttribute('highlight-guess', this.rowIndex),
                  (a.gameApp = this),
                  e.appendChild(a),
                  e.setAttribute('open', '');
              },
            },
            {
              key: 'showHelpModal',
              value: function () {
                var e = this.$game.querySelector('game-modal');
                e.appendChild(document.createElement('game-help')),
                  e.setAttribute('open', '');
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                  (this.$game = this.shadowRoot.querySelector('#game')),
                  (this.$board = this.shadowRoot.querySelector('#board')),
                  (this.$keyboard =
                    this.shadowRoot.querySelector('game-keyboard')),
                  this.sizeBoard(),
                  this.lastPlayedTs ||
                    setTimeout(function () {
                      return e.showHelpModal();
                    }, 100);
                for (var a = 0; a < 6; a++) {
                  var s = document.createElement('game-row');
                  s.setAttribute('letters', this.boardState[a]),
                    s.setAttribute('length', 5),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s);
                }
                this.$game.addEventListener('game-key-press', function (a) {
                  var s = a.detail.key;
                  '←' === s || 'Backspace' === s
                    ? e.removeLetter()
                    : '↵' === s || 'Enter' === s
                    ? e.submitGuess()
                    : Ba.includes(s.toLowerCase()) &&
                      e.addLetter(s.toLowerCase());
                }),
                  this.$game.addEventListener(
                    'game-last-tile-revealed-in-row',
                    function (a) {
                      (e.$keyboard.letterEvaluations = e.letterEvaluations),
                        e.rowIndex < 6 && (e.canInput = !0);
                      var s =
                        e.$board.querySelectorAll('game-row')[e.rowIndex - 1];
                      (a.path || (a.composedPath && a.composedPath())).includes(
                        s,
                      ) &&
                        ([es, as].includes(e.gameStatus) &&
                          (e.restoringFromLocalStorage
                            ? e.showStatsModal()
                            : (e.gameStatus === es &&
                                (s.setAttribute('win', ''),
                                e.addToast(ss[e.rowIndex - 1], 2e3)),
                              e.gameStatus === as &&
                                e.addToast(e.solution.toUpperCase(), 1 / 0),
                              setTimeout(function () {
                                e.showStatsModal();
                              }, 2500))),
                        (e.restoringFromLocalStorage = !1));
                    },
                  ),
                  this.shadowRoot.addEventListener(
                    'game-setting-change',
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                      switch (t) {
                        case 'hard-mode':
                          return void (n
                            ? e.addToast(
                                'Hard mode can only be enabled at the start of a round',
                                1500,
                                !0,
                              )
                            : ((e.hardMode = o),
                              ja({
                                hardMode: o,
                              })));
                      }
                    },
                  ),
                  this.shadowRoot
                    .getElementById('settings-button')
                    .addEventListener('click', function (a) {
                      var s = e.$game.querySelector('game-page'),
                        t = document.createTextNode('Setări');
                      s.appendChild(t);
                      var o = document.createElement('game-settings');
                      o.setAttribute('slot', 'content'),
                        (o.gameApp = e),
                        s.appendChild(o),
                        s.setAttribute('open', '');
                    }),
                  this.shadowRoot
                    .getElementById('help-button')
                    .addEventListener('click', function (a) {
                      var s = e.$game.querySelector('game-page'),
                        t = document.createTextNode('How to play');
                      s.appendChild(t);
                      var o = document.createElement('game-help');
                      o.setAttribute('page', ''),
                        o.setAttribute('slot', 'content'),
                        s.appendChild(o),
                        s.setAttribute('open', '');
                    }),
                  this.shadowRoot
                    .getElementById('statistics-button')
                    .addEventListener('click', function (a) {
                      e.showStatsModal();
                    }),
                  window.addEventListener('resize', this.sizeBoard.bind(this));
              },
            },
            {
              key: 'disconnectedCallback',
              value: function () {},
            },
            {
              key: 'debugTools',
              value: function () {
                var e = this;
                this.shadowRoot
                  .getElementById('debug-tools')
                  .appendChild(Qa.content.cloneNode(!0)),
                  this.shadowRoot
                    .getElementById('toast')
                    .addEventListener('click', function (a) {
                      e.addToast('hello world');
                    }),
                  this.shadowRoot
                    .getElementById('modal')
                    .addEventListener('click', function (a) {
                      var s = e.$game.querySelector('game-modal');
                      (s.textContent = 'hello plz'), s.setAttribute('open', '');
                    }),
                  this.shadowRoot
                    .getElementById('reveal')
                    .addEventListener('click', function () {
                      e.evaluateRow();
                    }),
                  this.shadowRoot
                    .getElementById('shake')
                    .addEventListener('click', function () {
                      e.$board
                        .querySelectorAll('game-row')
                        [e.rowIndex].setAttribute('invalid', '');
                    }),
                  this.shadowRoot
                    .getElementById('bounce')
                    .addEventListener('click', function () {
                      var a =
                        e.$board.querySelectorAll('game-row')[e.rowIndex - 1];
                      '' === a.getAttribute('win')
                        ? a.removeAttribute('win')
                        : a.setAttribute('win', '');
                    });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define('game-app', ts);
    var os = document.createElement('template');
    os.innerHTML =
      '\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: '.concat(
        3e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n',
      );
    var ns = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({
            mode: 'open',
          }),
          e
        );
      }
      return (
        o(t, [
          {
            key: 'connectedCallback',
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener('click', function (a) {
                  e.shadowRoot
                    .querySelector('.content')
                    .classList.add('closing');
                }),
                this.shadowRoot.addEventListener('animationend', function (a) {
                  'SlideOut' === a.animationName &&
                    (e.shadowRoot
                      .querySelector('.content')
                      .classList.remove('closing'),
                    e.removeChild(e.firstChild),
                    e.removeAttribute('open'));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-modal', ns);
    var rs = document.createElement('template');
    rs.innerHTML =
      "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement('template');
    is.innerHTML = '\n  <button>key</button>\n';
    var ls = document.createElement('template');
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'î', 'ț'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ă', 'â', 'ș'],
        ['←', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '↵'],
      ],
      us = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), '_letterEvaluations', {}),
            e.attachShadow({
              mode: 'open',
            }),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'letterEvaluations',
              set: function (e) {
                (this._letterEvaluations = e), this._render();
              },
            },
            {
              key: 'dispatchKeyPressEvent',
              value: function (e) {
                this.dispatchEvent(
                  new CustomEvent('game-key-press', {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                      key: e,
                    },
                  }),
                );
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                  (this.$keyboard = this.shadowRoot.getElementById('keyboard')),
                  this.$keyboard.addEventListener('click', function (a) {
                    var s = a.target.closest('button');
                    s &&
                      e.$keyboard.contains(s) &&
                      e.dispatchKeyPressEvent(s.dataset.key);
                  }),
                  window.addEventListener('keydown', function (a) {
                    if (!0 !== a.repeat) {
                      var s = a.key,
                        t = a.metaKey,
                        o = a.ctrlKey;
                      t ||
                        o ||
                        ((Ba.includes(s.toLowerCase()) ||
                          'Backspace' === s ||
                          'Enter' === s) &&
                          e.dispatchKeyPressEvent(s));
                    }
                  }),
                  this.$keyboard.addEventListener(
                    'transitionend',
                    function (a) {
                      var s = a.target.closest('button');
                      s &&
                        e.$keyboard.contains(s) &&
                        s.classList.remove('fade');
                    },
                  ),
                  //  diacritice "ă", "â", "î", "ș", "ț"
                  ds.forEach(function (a) {
                    var s = document.createElement('div');
                    s.classList.add('row'),
                      a.forEach(function (e) {
                        var a;
                        if (
                          (e >= 'a' && e <= 'z') ||
                          e == 'ă' ||
                          e == 'â' ||
                          e == 'î' ||
                          e == 'ș' ||
                          e == 'ț' ||
                          '←' === e ||
                          '↵' === e
                        ) {
                          if (
                            (((a = is.content.cloneNode(
                              !0,
                            ).firstElementChild).dataset.key = e),
                            (a.textContent = e),
                            '←' === e)
                          ) {
                            var t = document.createElement('game-icon');
                            t.setAttribute('icon', 'backspace'),
                              (a.textContent = ''),
                              a.appendChild(t),
                              a.classList.add('one-and-a-half');
                          }
                          '↵' == e &&
                            ((a.textContent = 'enter'),
                            a.classList.add('one-and-a-half'));
                        } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? 'half' : 'one');
                        s.appendChild(a);
                      }),
                      e.$keyboard.appendChild(s);
                  }),
                  this._render();
              },
            },
            {
              key: '_render',
              value: function () {
                for (var e in this._letterEvaluations) {
                  var a = this.$keyboard.querySelector(
                    '[data-key="'.concat(e, '"]'),
                  );
                  (a.dataset.state = this._letterEvaluations[e]),
                    a.classList.add('fade');
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function cs(e, a, s, t) {
      return new (s || (s = Promise))(function (o, n) {
        function r(e) {
          try {
            l(t.next(e));
          } catch (e) {
            n(e);
          }
        }

        function i(e) {
          try {
            l(t.throw(e));
          } catch (e) {
            n(e);
          }
        }

        function l(e) {
          var a;
          e.done
            ? o(e.value)
            : ((a = e.value),
              a instanceof s
                ? a
                : new s(function (e) {
                    e(a);
                  })).then(r, i);
        }
        l((t = t.apply(e, a || [])).next());
      });
    }

    function ps(e, a) {
      var s,
        t,
        o,
        n,
        r = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (n = {
          next: i(0),
          throw: i(1),
          return: i(2),
        }),
        'function' == typeof Symbol &&
          (n[Symbol.iterator] = function () {
            return this;
          }),
        n
      );

      function i(n) {
        return function (i) {
          return (function (n) {
            if (s) throw new TypeError('Generator is already executing.');
            for (; r; )
              try {
                if (
                  ((s = 1),
                  t &&
                    (o =
                      2 & n[0]
                        ? t.return
                        : n[0]
                        ? t.throw || ((o = t.return) && o.call(t), 0)
                        : t.next) &&
                    !(o = o.call(t, n[1])).done)
                )
                  return o;
                switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                  case 0:
                  case 1:
                    o = n;
                    break;
                  case 4:
                    return (
                      r.label++,
                      {
                        value: n[1],
                        done: !1,
                      }
                    );
                  case 5:
                    r.label++, (t = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = r.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== n[0] && 2 !== n[0])
                      )
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === n[0] && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                      r.label = n[1];
                      break;
                    }
                    if (6 === n[0] && r.label < o[1]) {
                      (r.label = o[1]), (o = n);
                      break;
                    }
                    if (o && r.label < o[2]) {
                      (r.label = o[2]), r.ops.push(n);
                      break;
                    }
                    o[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                n = a.call(e, r);
              } catch (e) {
                (n = [6, e]), (t = 0);
              } finally {
                s = o = 0;
              }
            if (5 & n[0]) throw n[1];
            return {
              value: n[0] ? n[1] : void 0,
              done: !0,
            };
          })([n, i]);
        };
      }
    }
    customElements.define('game-keyboard', us),
      function () {
        (console.warn || console.log).apply(console, arguments);
      }.bind('[clipboard-polyfill]');
    var ms,
      hs,
      ys,
      gs,
      bs = 'undefined' == typeof navigator ? void 0 : navigator,
      fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) ||
      void 0 === ms ||
      ms.bind(fs),
      null === (hs = null == fs ? void 0 : fs.readText) ||
        void 0 === hs ||
        hs.bind(fs);
    var ks =
        (null === (ys = null == fs ? void 0 : fs.write) ||
          void 0 === ys ||
          ys.bind(fs),
        null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs
          ? void 0
          : gs.bind(fs)),
      vs = 'undefined' == typeof window ? void 0 : window,
      ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () {
      this.success = !1;
    };

    function zs(e, a, s) {
      for (var t in ((e.success = !0), a)) {
        var o = a[t],
          n = s.clipboardData;
        n.setData(t, o),
          'text/plain' === t && n.getData(t) !== o && (e.success = !1);
      }
      s.preventDefault();
    }

    function js(e) {
      var a = new xs(),
        s = zs.bind(this, a, e);
      document.addEventListener('copy', s);
      try {
        document.execCommand('copy');
      } finally {
        document.removeEventListener('copy', s);
      }
      return a.success;
    }

    function Ss(e, a) {
      _s(e);
      var s = js(a);
      return qs(), s;
    }

    function _s(e) {
      var a = document.getSelection();
      if (a) {
        var s = document.createRange();
        s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s);
      }
    }

    function qs() {
      var e = document.getSelection();
      e && e.removeAllRanges();
    }

    function Es(e) {
      return cs(this, void 0, void 0, function () {
        var a;
        return ps(this, function (s) {
          if (
            ((a = 'text/plain' in e),
            'undefined' == typeof ClipboardEvent &&
              void 0 !== ws.clipboardData &&
              void 0 !== ws.clipboardData.setData)
          ) {
            if (!a) throw new Error('No `text/plain` value was specified.');
            if (((t = e['text/plain']), ws.clipboardData.setData('Text', t)))
              return [2, !0];
            throw new Error(
              'Copying failed, possibly because the user rejected it.',
            );
          }
          var t;
          return js(e) ||
            navigator.userAgent.indexOf('Edge') > -1 ||
            Ss(document.body, e) ||
            (function (e) {
              var a = document.createElement('div');
              a.setAttribute('style', '-webkit-user-select: text !important'),
                (a.textContent = 'temporary element'),
                document.body.appendChild(a);
              var s = Ss(a, e);
              return document.body.removeChild(a), s;
            })(e) ||
            (function (e) {
              var a = document.createElement('div');
              a.setAttribute('style', '-webkit-user-select: text !important');
              var s = a;
              a.attachShadow &&
                (s = a.attachShadow({
                  mode: 'open',
                }));
              var t = document.createElement('span');
              (t.innerText = e),
                s.appendChild(t),
                document.body.appendChild(a),
                _s(t);
              var o = document.execCommand('copy');
              return qs(), document.body.removeChild(a), o;
            })(e['text/plain'])
            ? [2, !0]
            : [2, !1];
        });
      });
    }

    function As(e, a, s) {
      try {
        (t = navigator.userAgent || navigator.vendor || window.opera),
          (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t,
          ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4),
            )) ||
          navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ||
          void 0 === navigator.share ||
          !navigator.canShare ||
          !navigator.canShare(e)
            ? (function (e) {
                return cs(this, void 0, void 0, function () {
                  return ps(this, function (a) {
                    if (ks) return [2, ks(e)];
                    if (
                      !Es(
                        (function (e) {
                          var a = {};
                          return (a['text/plain'] = e), a;
                        })(e),
                      )
                    )
                      throw new Error('writeText() failed');
                    return [2];
                  });
                });
              })(e.text).then(a, s)
            : navigator.share(e);
      } catch (e) {
        s();
      }
      var t;
    }
    var Cs = document.createElement('template');
    Cs.innerHTML =
      '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistici</h1>\n    <div id="statistics"></div>\n    <h1>Distribuția încercărilor</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement('template');
    Ls.innerHTML =
      '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement('template');
    Ts.innerHTML =
      '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement('template');
    Is.innerHTML =
      '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: 'Câștigate la rând',
        maxStreak: 'Maxim câștigate la rând',
        winPercentage: 'Câștigate %',
        gamesPlayed: 'Jucate',
        gamesWon: 'Câștigate',
        averageGuesses: 'Nr. mediu încercări',
      },
      Os = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), 'stats', {}),
            n(p(e), 'gameApp', void 0),
            e.attachShadow({
              mode: 'open',
            }),
            (e.stats = Xa()),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById('statistics'),
                  s = this.shadowRoot.getElementById('guess-distribution'),
                  t = Math.max.apply(
                    Math,
                    g(Object.values(this.stats.guesses)),
                  );
                if (
                  Object.values(this.stats.guesses).every(function (e) {
                    return 0 === e;
                  })
                ) {
                  var o = document.createElement('div');
                  o.classList.add('no-data'),
                    (o.innerText = 'Insuficiente jocuri jucate'),
                    s.appendChild(o);
                } else
                  for (
                    var n = 1;
                    n < Object.keys(this.stats.guesses).length;
                    n++
                  ) {
                    var r = n,
                      i = this.stats.guesses[n],
                      l = Ts.content.cloneNode(!0),
                      d = Math.max(7, Math.round((i / t) * 100));
                    l.querySelector('.guess').textContent = r;
                    var u = l.querySelector('.graph-bar');
                    if (
                      ((u.style.width = ''.concat(d, '%')),
                      'number' == typeof i)
                    ) {
                      (l.querySelector('.num-guesses').textContent = i),
                        i > 0 && u.classList.add('align-right');
                      var c = parseInt(
                        this.getAttribute('highlight-guess'),
                        10,
                      );
                      c && n === c && u.classList.add('highlight');
                    }
                    s.appendChild(l);
                  }
                if (
                  ([
                    'gamesPlayed',
                    'winPercentage',
                    'currentStreak',
                    'maxStreak',
                  ].forEach(function (s) {
                    var t = Ms[s],
                      o = e.stats[s],
                      n = Ls.content.cloneNode(!0);
                    (n.querySelector('.label').textContent = t),
                      (n.querySelector('.statistic').textContent = o),
                      a.appendChild(n);
                  }),
                  this.gameApp.gameStatus !== Za)
                ) {
                  var p = this.shadowRoot.querySelector('.footer'),
                    m = Is.content.cloneNode(!0);
                  p.appendChild(m),
                    this.shadowRoot
                      .querySelector('button#share-button')
                      .addEventListener('click', function (a) {
                        a.preventDefault(), a.stopPropagation();
                        As(
                          (function (e) {
                            var a = e.evaluations,
                              s = e.dayOffset,
                              t = e.rowIndex,
                              o = e.isHardMode,
                              n = e.isWin,
                              r = JSON.parse(window.localStorage.getItem(j)),
                              i = JSON.parse(window.localStorage.getItem(S)),
                              l = 'https://cuvantul.github.io/cuvantul '.concat(
                                s,
                              );
                            (l += ' '.concat(n ? t : 'X', '/').concat(6)),
                              o && (l += '*');
                            var d = '';
                            return (
                              a.forEach(function (e) {
                                e &&
                                  (e.forEach(function (e) {
                                    if (e) {
                                      var a = '';
                                      switch (e) {
                                        case Ma:
                                          a = (function (e) {
                                            return e ? '🟧' : '🟩';
                                          })(i);
                                          break;
                                        case Ia:
                                          a = (function (e) {
                                            return e ? '🟦' : '🟨';
                                          })(i);
                                          break;
                                        case Oa:
                                          a = (function (e) {
                                            return e ? '⬛' : '⬜';
                                          })(r);
                                      }
                                      d += a;
                                    }
                                  }),
                                  (d += '\n'));
                              }),
                              {
                                text: ''.concat(l, '\n\n').concat(d.trimEnd()),
                              }
                            );
                          })({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es,
                          }),
                          function () {
                            e.gameApp.addToast(
                              'Rezultat copiat în clipboard',
                              2e3,
                              !0,
                            );
                          },
                          function () {
                            e.gameApp.addToast('Share failed', 2e3, !0);
                          },
                        );
                      });
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define('game-stats', Os);
    var Rs = document.createElement('template');
    Rs.innerHTML =
      '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var $s = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({
            mode: 'open',
          }),
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                  this.shadowRoot
                    .querySelector('.container')
                    .addEventListener('click', function (a) {
                      a.stopPropagation(),
                        e.hasAttribute('checked')
                          ? e.removeAttribute('checked')
                          : e.setAttribute('checked', ''),
                        e.dispatchEvent(
                          new CustomEvent('game-switch-change', {
                            bubbles: !0,
                            composed: !0,
                            detail: {
                              name: e.getAttribute('name'),
                              checked: e.hasAttribute('checked'),
                              disabled: e.hasAttribute('disabled'),
                            },
                          }),
                        );
                    });
              },
            },
          ],
          [
            {
              key: 'observedAttributes',
              get: function () {
                return ['checked'];
              },
            },
          ],
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-switch', $s);
    var Ps = document.createElement('template');
    Ps.innerHTML =
      '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Ghici cuvântul <strong>PERIE</strong> din 6 încercări.</p>\n      <p>Fiecare încercare trebuie să fie un cuvânt de 5 litere. Apasă enter pentru a încerca.</p>\n      <p>După fiecare încercare, culoarea cadranelor îți va arăta cât de aproape ești de cuvântul ascuns.</p>\n      <div class="examples">\n        <p><strong>Exemplu</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>Litera <strong>P</strong> este in cuvant si este in locul potrivit.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="r" evaluation="present" reveal></game-tile>\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="ș"></game-tile>\n          </div>\n          <p>Litera <strong>R</strong> este prezenta in cuvant dar nu este in locul potrivit.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="c"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="t" evaluation="absent" reveal></game-tile>\n            <game-tile letter="ă"></game-tile>\n          </div>\n          <p>Litera <strong>T</strong> nu este in cuvant, in nici un cuvant.</p>\n        </div>\n      </div>\n      <p><strong>Un nou CUVÂNT va fi disponibil în fiecare zi!<strong></p>\n    </div>\n  </section>\n';
    var Hs = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({
            mode: 'open',
          }),
          e
        );
      }
      return (
        o(t, [
          {
            key: 'connectedCallback',
            value: function () {
              this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-help', Hs);
    var Ns = document.createElement('template');
    Ns.innerHTML =
      '\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: '.concat(
        2e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n',
      );
    var Ds = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({
            mode: 'open',
          }),
          e
        );
      }
      return (
        o(t, [
          {
            key: 'connectedCallback',
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot
                  .querySelector('game-icon')
                  .addEventListener('click', function (a) {
                    e.shadowRoot
                      .querySelector('.overlay')
                      .classList.add('closing');
                  }),
                this.shadowRoot.addEventListener('animationend', function (a) {
                  'SlideOut' === a.animationName &&
                    (e.shadowRoot
                      .querySelector('.overlay')
                      .classList.remove('closing'),
                    Array.from(e.childNodes).forEach(function (a) {
                      e.removeChild(a);
                    }),
                    e.removeAttribute('open'));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define('game-page', Ds);
    var Gs = document.createElement('template');
    Gs.innerHTML =
      '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
        settings:
          'M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z',
        backspace:
          'M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z',
        close:
          'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
        share:
          'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        statistics:
          'M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z',
      },
      Fs = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return (
            s(this, t),
            (e = a.call(this)).attachShadow({
              mode: 'open',
            }),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'connectedCallback',
              value: function () {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute('icon');
                this.shadowRoot.querySelector('path').setAttribute('d', Bs[e]),
                  'backspace' === e &&
                    this.shadowRoot
                      .querySelector('path')
                      .setAttribute('fill', 'var(--color-tone-1)'),
                  'share' === e &&
                    this.shadowRoot
                      .querySelector('path')
                      .setAttribute('fill', 'var(--white)');
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define('game-icon', Fs);
    var Ws = document.createElement('template');
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
      Js = 36e5,
      Us = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), 'targetEpochMS', void 0),
            n(p(e), 'intervalId', void 0),
            n(p(e), '$timer', void 0),
            e.attachShadow({
              mode: 'open',
            });
          var o = new Date();
          return (
            o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            (e.targetEpochMS = o.getTime()),
            e
          );
        }
        return (
          o(t, [
            {
              key: 'padDigit',
              value: function (e) {
                return e.toString().padStart(2, '0');
              },
            },
            {
              key: 'updateTimer',
              value: function () {
                var e,
                  a = new Date().getTime(),
                  s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) e = '00:00:00';
                else {
                  var t = Math.floor((s % 864e5) / Js),
                    o = Math.floor((s % Js) / Ys),
                    n = Math.floor((s % Ys) / 1e3);
                  e = ''
                    .concat(this.padDigit(t), ':')
                    .concat(this.padDigit(o), ':')
                    .concat(this.padDigit(n));
                }
                this.$timer.textContent = e;
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                  (this.$timer = this.shadowRoot.querySelector('#timer')),
                  (this.intervalId = setInterval(function () {
                    e.updateTimer();
                  }, 200));
              },
            },
            {
              key: 'disconnectedCallback',
              value: function () {
                clearInterval(this.intervalId);
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    return (
      customElements.define('countdown-timer', Us),
      (e.CountdownTimer = Us),
      (e.GameApp = ts),
      (e.GameHelp = Hs),
      (e.GameIcon = Fs),
      (e.GameKeyboard = us),
      (e.GameModal = ns),
      (e.GamePage = Ds),
      (e.GameRow = x),
      (e.GameSettings = _a),
      (e.GameStats = Os),
      (e.GameSwitch = $s),
      (e.GameThemeManager = _),
      (e.GameTile = v),
      (e.GameToast = Aa),
      Object.defineProperty(e, '__esModule', {
        value: !0,
      }),
      e
    );
  })({}));
