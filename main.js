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
    var La = ["tutti","trotă","vizez","vuira","clipe","aburi","ațiți","badea","humei","clanț","vârșa","caner","codam","tivii","perei","morav","acruț","uicii","ordie","răcim","dedus","trase","cubez","comor","tabes","onori","ocupi","atici","sambe","tirul","ramai","pitac","bibic","vruse","godac","carea","jamnă","vuiet","anină","axând","rizom","orții","repun","pliaj","auros","dixie","eflux","hatru","pripe","tivai","vazei","folos","pupei","brane","ohaba","jelim","cocie","altei","rupea","retro","carje","bănuț","ipsos","tunse","magme","duale","bocii","făgaș","alung","satin","oxizi","depou","tabel","sodei","nășim","grife","maiou","rotam","readu","adăst","pecia","vadea","beuca","isnaf","model","acuma","pliam","duant","xilon","ruini","obraz","foram","poale","fiale","șozii","disec","zăcaș","estaz","paion","aleea","struț","iedut","calul","papir","sugel","păsăm","nixei","nomul","omizi","corpi","delii","moară","velea","iușni","zarna","carte","lungi","cauze","marie","căpău","atomă","exigă","udasi","alena","gătam","cupaj","uzită","trota","grait","toiri","dubla","fluul","coafa","aride","decan","vulpi","rimel","aeraj","danul","pensa","atica","omiți","teapă","țerii","funii","maise","burse","tonul","axion","luând","iesim","șapca","cinau","udeam","cuina","dejei","zapis","sfadi","mucos","sfart","caper","tetea","cipci","setca","tifan","negos","zbici","ignam","crama","polje","căița","rodit","istor","ațiță","uzură","scota","bifau","pogon","tivea","frupt","arogi","canat","putem","iubeț","venii","fraze","rapos","lezai","liței","tesla","unora","boemi","luand","cliva","ohabe","fiare","lezez","moria","ritos","lazzi","axele","mefia","fluid","urmam","codai","tatal","sania","mosie","brama","afipt","slugi","tulii","rugii","azere","mulți","somez","alega","gotii","oidia","servo","buzni","musau","moruă","volți","șarpe","suete","delut","anală","gatul","punga","oftai","redia","vampa","odina","hulii","pozat","sfite","sobre","socul","cneaz","jepul","zapez","seise","maial","facla","bocna","triam","ibiși","cățea","amină","depun","raită","imers","pupau","gâgâi","releu","crita","maria","spasm","morne","cocos","agile","bâțâi","zefir","nimfe","mitii","audie","acide","ăuiră","cocea","adiai","varză","latea","croim","puios","pudel","șovan","nefla","zarii","nociv","zgura","bujor","kiang","lesii","naiei","cănii","pitan","curse","râcii","piuau","supez","eșuai","aerai","obroc","târne","infas","cucon","icose","aptul","spițe","julfa","tarfa","barzi","trior","jugăr","cuarț","batoc","vârai","hăuit","ceuci","cauce","timfi","suiem","muiat","acord","pazii","catre","borai","camei","suava","amplă","jabie","smuga","oidea","patru","belea","obtin","fotel","cilul","căror","bonul","vidra","flaut","izvor","lezat","otice","abneg","vărgi","elani","sirui","tafei","apune","letal","cling","cefei","aceră","toacă","babar","sinui","invar","iuiam","alama","roziu","elene","flama","amuți","rodaj","picii","uitau","ideez","colun","varul","cabul","dicta","huile","gropi","puire","tuile","câști","tacla","odori","cadre","tamai","surzi","havau","hitul","bacil","buhul","sleah","vizei","turla","snack","humus","behăi","morun","sobră","pejme","turmă","trona","cocot","strop","limno","micit","cange","zelei","tihne","goane","pagei","motci","lutra","tesim","ferța","artar","cirte","redea","uliii","reala","bâțan","manau","kabil","noema","mixat","luxul","măjar","sanal","fuzit","adult","anșoa","plaur","avion","năduh","firut","ahtul","bahli","utero","halor","găști","gutui","ronja","gerid","denia","baril","baton","suste","staul","fiong","felon","năzui","golan","obeze","crime","lehai","coșul","pluri","felon","bănie","veste","plagă","lesei","falsa","elită","vatei","șulfe","comei","cârpa","agilă","bursă","tacul","banca","urând","cerui","picăm","carat","agăță","bihun","morne","hâită","frâna","cucor","mulul","sulte","cneji","fierb","narai","cinas","ropot","îmbăt","lufta","bosaj","afect","misir","țocăi","coană","atest","aliai","biute","tunel","fraza","optai","iezit","rapul","talia","napai","tabes","gotce","tarus","pozne","drusă","barda","nubil","graba","solar","mugur","repet","undăm","taxăm","zupui","alaun","mogul","cirii","țipet","înhaț","paing","dărăb","fuleu","ovali","chist","mitim","aztec","fânul","brune","sinod","bruta","furia","ghili","oftul","afini","tucai","norei","croia","abati","admis","ațâța","amili","felii","retin","olmul","vocii","varva","roman","curmi","hidro","șocam","palha","valeu","calaj","omorî","motez","buici","firez","pranz","jelea","vlaha","popol","smult","aldan","izuri","bamei","varza","sârbe","dința","rolei","rozii","gnuul","angro","sarea","ocini","luciu","merii","ulițe","havra","ceter","porno","diode","spăgi","cobol","rapai","belim","tronc","țelim","amusa","piața","stufă","cocea","etice","masle","epava","tanaj","naive","coafă","zamca","sprit","țăpoi","băind","râzne","teier","bufnă","ficat","hoher","palid","infir","ebose","titei","cazii","brand","afoni","price","arhar","drela","sezui","hitul","ramie","ubace","deszi","lisăm","mieri","borax","clișa","livan","dalta","zeele","seros","indes","azuri","galet","fonem","verif","cobii","minim","clisa","timii","dozai","avami","visez","hâșâi","lăuzi","bulin","desir","adiam","ossii","sfiii","bolim","rezec","ogoim","chita","șirui","canin","acrit","orori","năbuc","blagi","hoața","arcuș","apare","pariu","jabra","hicăi","hulub","smede","stopa","laxul","hâtre","somni","zeiță","mitei","corii","amice","jibul","hoban","zăcut","odine","oțele","arame","vecii","tasat","iureș","dedei","leșia","mieji","tagle","optam","solul","berce","dubiu","orgie","murgi","aptei","sorti","urina","umpli","catei","craca","eonul","jujub","fluor","smârd","afona","stima","suriu","tusca","delie","mulau","asist","sopon","jalba","grind","șunca","irige","ambii","lofez","anaua","bâtci","tihne","sujet","berna","ultra","ludul","atome","pliat","lasam","mopul","aburi","ratat","lunii","cihai","rupta","lotus","setat","gustă","untos","dodea","haide","latul","datul","teren","binte","forul","lanos","sound","puvoi","ostil","scuti","getul","nasii","helgi","voiri","zolit","ricșe","basca","legea","linio","bizar","torci","pensă","ratez","sigur","zorea","adula","ovele","adorm","pitea","intre","sumau","bride","ojele","țigâi","uvulă","canci","rabla","targă","ahtul","șușui","gruia","cuvei","mezin","hibei","dalii","tuliu","torțe","sagne","jitii","relon","innoi","lepse","makii","vinci","șasiu","hazul","cosit","evite","obsti","hogaș","dobos","spaga","vosti","plină","redig","harau","durii","logic","danei","sisul","zebră","fățui","gemem","smint","lavre","ocupe","batos","prese","febra","mason","zolit","sodom","pirol","meloe","acuta","mapei","metec","wilow","dețin","ocăle","mufla","taula","ciula","inion","sasau","serui","zarve","teuri","azide","mănau","snagă","melci","inapt","voiau","rilei","sunam","cidru","vozam","mirăm","kodak","curva","rujar","reale","ronda","clapa","ferul","sonda","sudor","moțoc","bucșă","barză","senat","spuză","taica","hurca","sârme","cresa","rudei","supin","facil","mamei","bunel","uveea","carte","sudui","sacru","rumul","catai","herul","sever","fiesc","holda","vânză","pisai","diene","beții","sfare","stiut","nițel","pofta","arenă","mitic","ocnaș","cazez","bifam","lenaj","greva","liane","codal","huite","iereu","manco","padoc","crunt","sedăm","nulul","curii","suriu","pavai","amâna","vădim","obide","bruia","fâșia","solim","rutei","zetui","tanin","extra","splai","pufăi","topuz","kumel","obida","culac","ticsi","fonie","ploii","justa","fauna","velum","alana","terne","rediu","cădea","uncia","pesim","rasol","calaj","sobor","parii","odino","vidma","praxe","satur","tivim","bonul","migma","baxul","midie","jețul","rubia","uluii","umidi","uimit","aoleu","paloș","ologi","aiori","arcei","unchi","pazei","ponci","etuve","cușma","cusma","pinte","numen","oogon","reume","muiau","sorec","acela","autor","joire","talii","lujer","lutre","limon","etena","greve","rănim","ansei","cujbă","conac","racle","proza","tapei","tuies","ignat","ursim","alani","doina","scrie","preot","beret","bocii","horei","monac","clima","felah","opuri","loial","regii","ciste","teucă","cinci","scuza","jebul","sepci","popic","ouată","scald","himen","cumva","hăuri","buche","forta","tugui","biris","gurnă","dubit","crupe","lobai","zeine","beica","astea","jamba","smide","mahni","zaifa","xeric","cocor","mutra","ileul","taran","atoli","tusez","fișat","cavaf","vâlcă","datai","șodou","culce","peana","polar","agasă","havez","vomat","baron","briai","cadiu","hoțul","horul","tasat","kakia","hleab","geram","lumet","comit","șaran","revie","volei","siiti","magul","zabet","lihai","varie","secat","latre","vurte","stors","icuri","șteri","lunea","anume","bunuț","burii","talaș","cafer","mezat","helio","dopat","toiai","știți","rănit","cigei","voder","baste","guzle","necaz","macri","bulzi","civit","colam","indus","rutil","harfa","oleum","poște","plodi","ascei","mitui","hadul","ojină","palhe","sahel","gătea","incul","lașei","evoci","vacue","glonț","gromi","vrana","leafă","coiot","dalie","divan","prian","oofor","fluda","reped","tocmi","taolă","tapei","stiai","prior","labul","ulcer","stani","albii","telul","mulai","mobil","acine","burai","cules","racar","optul","acriu","ceriu","pruhe","plimb","botce","lovii","fășie","celar","birău","învie","văzul","tipar","mocăi","sabaș","oftat","colii","săbie","sutor","vadul","nubil","gland","toata","fante","zamac","bolid","ortic","fârte","hatan","lenos","șoric","alora","dalba","foios","pilde","viele","vrăji","dețiu","cumis","ludea","setci","șargă","ferii","sauas","fanti","forțe","pecii","adore","galos","puful","maica","ocini","mopsi","paisi","inice","iuxtă","umflu","vocii","octet","satir","lățit","paiet","dejug","achiu","dingo","pioni","gagii","baria","smoli","pasiv","albim","zinca","cronc","zurba","girau","ilari","nandu","gâcea","hauli","nyaya","viile","miare","vâsle","loess","polua","ăuiți","miaze","afurc","clame","plici","puita","clapc","boldo","desec","lamau","tenia","mișun","jambe","sucii","curvă","audio","săgni","assai","codai","ciula","prund","ivise","sinul","cruta","mocan","povăț","morav","orale","sucea","plisă","cetii","ordii","ștofe","jenam","dafie","litru","merar","virai","fandă","ferit","vizon","nenii","varos","țușcă","hasme","tagme","urson","bruti","citro","axate","hexan","iuiam","deneg","mălin","uinei","modre","adaog","bloca","ologi","guița","crize","naist","multa","zgait","iscam","bulon","iolei","sport","gauri","makii","toind","crete","pazea","gazez","caric","șveda","dârei","iuști","rapun","ozona","intra","topaz","ecvin","cosei","datăm","agave","cotiș","motan","embol","creăm","banat","xismă","coraj","zolea","bazez","ouară","ronda","aulic","jeleu","porno","opaci","sorim","negul","nouță","daula","cuini","zoane","fonda","aroma","speță","preot","gubei","carul","durut","teica","tehno","movul","pliul","cerii","prora","abilă","tipăi","bușon","uniat","curau","cotăm","corlă","țepei","suiți","parai","ocurg","stoca","croia","hojmă","unind","venea","uruie","batem","lunec","dorul","rozia","felul","tutun","plăși","atine","coreu","comut","drugi","fenol","zbiri","schie","pizză","cabla","așași","yenul","jabră","modru","labri","salbe","tarac","ciule","estre","donăm","ciori","prize","leste","uimim","copul","zbată","fagot","alipi","tihai","afurc","oșene","ficși","tesac","zodia","șplit","bonti","triau","podiș","apasă","fluid","edili","purga","fludă","circe","schia","donor","leiți","anura","tufos","tăios","minia","hohot","zeaua","urmul","bifez","putin","întră","gajul","fulee","iuțar","opune","coate","dalac","gabjă","halaj","adnat","zatul","magic","viasi","akani","cucii","catun","șutea","decis","rujai","morti","riful","pompe","șofam","rezil","garez","deset","roșii","botez","surit","bauti","cocor","scăzu","toiul","bădie","șperț","bente","cutea","prefa","barje","jarde","oilor","lulea","negam","tipis","drama","hogea","hatim","soise","vetre","input","scarm","vuvui","aftos","parta","reiau","hotei","avele","ojogi","azere","foaci","înoți","șefei","salul","placa","minat","drena","nomad","popia","sălii","aerat","fagul","malic","roata","iscat","ghiul","tarte","puseu","impac","incot","merse","jurii","agasa","zambo","rente","ateul","scurs","morei","suiat","turte","fixez","vâlvă","udări","hapca","navei","oțeti","mioze","salca","sclav","mereu","știui","puiuț","mitre","juriu","jejun","văram","țarul","traca","păiși","cecen","dreve","uvale","algie","tarla","dacei","boiți","nouta","grijă","apele","clipă","sonar","fetid","oblim","suber","ruble","hoțim","timie","ovate","cheia","târși","panii","acrei","fucus","espus","hașme","țicni","dacic","cedri","scapi","haios","auria","rujam","socru","latex","dogul","stors","gulia","tesac","omfal","uciși","capat","găici","gazai","itele","marli","melit","rediș","speli","iesea","moace","falci","votum","copal","pejma","amibe","bagaj","spira","chema","limni","sadul","talim","gland","zorea","boxau","zitum","focii","aurim","smeri","bozie","soros","gibon","hașmă","namol","adăpe","juste","socau","lățiș","treci","gagul","capus","metec","guzul","lonja","viază","olita","okume","cifra","moine","odeon","țeasă","starv","coana","tălpi","xifie","pozau","șarla","bogza","luftă","color","grefă","lătur","strai","tunai","decan","osram","unaul","cetei","drops","soiai","goale","pitar","machi","valon","sumai","neume","vagul","domol","paleo","oidii","poamă","arsei","volta","miile","xerom","tulți","manul","jetul","migăi","venie","fetii","loris","bintă","cloca","piete","boare","anime","pătăm","năvod","iteam","banan","ceară","mecet","orara","cazon","mamar","bugla","jimba","lusai","rouțe","tivii","rizic","ferim","colir","croma","prore","obari","ragil","șotii","beică","micim","godia","soțul","cazic","tușea","zidii","zoaia","fonul","hrăpi","aleși","lotci","reaua","boale","hărăi","hirta","lușii","ulmat","adiam","lușei","mâine","latos","palim","invit","zuful","opaca","aceia","coaja","vague","jejun","fiert","bober","cersi","mulge","dozat","uiegi","gasea","inova","baiam","molto","renet","zapai","steme","suber","lotcă","lasul","rosea","oraje","ossia","direg","mixăm","noade","vomic","seter","joian","nonei","pedea","umble","izină","atins","ceara","inchi","umana","lerul","răbuș","budam","angli","turta","volog","autor","împli","casei","zoana","denși","cruși","ghiob","cadru","pereu","ierul","blăgi","fitil","marne","scoti","ataua","vanda","kurda","pasam","karme","ouțul","țicla","săpăm","hârță","pleșe","solit","crasă","pierz","nadai","barez","aluat","siroi","oacăr","urine","rozei","kamii","busta","invit","mesaj","adese","urloi","pecie","curmă","calin","citai","genul","claca","altar","ivita","astru","forma","etaje","cuvin","arimă","stave","gaita","lambă","medic","celea","dunei","mufei","banan","irita","sipca","litră","darde","cârpă","dosii","noeza","docil","varia","bluza","criță","geram","acerb","rampe","brodi","peană","erijă","spută","xilen","zețui","vatir","agite","mirul","jujeu","cuaga","anaua","zelar","șădem","acrii","adaus","filat","smeci","motai","dihai","cuine","pințe","șpagă","probe","tufei","păpam","scază","bariz","havam","reduc","hacul","epohă","secam","pilii","anine","gaoci","deduc","urdit","pista","gabui","teara","modal","spasm","olozi","zalei","urnit","erupe","codri","bausi","tocea","ploua","morna","plina","udase","igneu","dereg","lăcui","gatim","aurii","litra","animi","rozul","cuiba","maure","sacră","izbii","imnic","acăți","batic","tivga","omisa","pasol","depun","fragi","largo","sânta","ferte","vario","cinat","sitei","volar","foile","lesin","ucide","jabia","cidru","murau","punea","luate","ursul","comor","splin","tunar","taică","taria","ohmii","fenta","palmi","sudit","mlaja","gutos","negri","jocul","nacru","oxali","zulie","rebat","foliu","acont","îndur","ogivă","leone","izina","omeți","ridăm","viesc","țagla","carpi","fidea","raszi","vomau","pupic","pâine","răpea","vaite","kipii","ragii","amice","lauti","fetea","tirul","olari","arcat","regie","bufeu","țiuia","stani","landa","arină","etice","foții","avida","truse","bechi","auzii","cernu","rusei","clean","epave","fanau","călca","ouate","silve","pauce","miori","broșă","clamp","patme","clime","dedea","gerau","trecu","fuzee","suire","mimei","picau","rebab","susam","paind","nyaya","suret","atâta","malim","orile","manam","stalp","neamț","natul","ferul","zendă","tutti","rotat","rărit","racul","căsca","deșii","ogoia","pline","jadul","sterp","veros","domei","cafas","scuna","axial","tatua","cabra","oolit","exalt","vanul","chite","calci","palcă","oagei","hapul","filer","cușmă","demit","sumen","numar","varza","cotea","sumez","radul","mimat","având","geaba","iugar","zoane","virat","aviva","irisi","redig","alină","butca","folia","finei","găbui","șiite","teuge","fălea","șocul","hepar","burci","numii","mejde","seiga","havre","jalet","oblic","cozul","wonii","feude","rugau","borăi","saliu","răcii","guelf","oblul","vulvă","abții","zmeie","sivul","vigie","aramă","ninsă","carme","albui","regim","sigle","ursea","ișala","balet","urate","zolge","voiși","taliu","lande","gambe","fraza","demei","suave","dorit","zadei","jenăm","prăsi","creți","marje","braha","unită","rufos","sumet","table","nasli","uvulo","ucide","batci","nășic","hauia","trene","jurai","ovism","dozat","limbă","topor","maori","kappa","sculă","rudii","blaze","amari","cuman","vameș","medio","solbă","saule","vârcă","galbe","boaba","curat","cusui","jeleu","zărit","tigre","hifei","ureic","haldă","șpani","jenez","bonci","milog","coste","uzași","sursa","lieno","lacas","intes","ceată","luncă","infie","ovala","orcic","forja","nazui","țărnă","țigla","ansoa","șosea","pânde","șurei","rimăm","jerse","urați","fardă","briau","molam","vinei","geaca","urdar","rapan","gajai","nebun","kediv","aliem","amida","orbie","răgit","capia","lăieț","lefii","purta","votru","nanul","mulei","idila","tipea","sedau","curge","humic","masii","olace","uvraj","pizma","valve","focsi","godeu","guvid","piaza","vacul","anina","vidat","monta","spăsi","jadul","nevri","devle","sătuc","dușcă","roaga","folia","vărez","juice","inemi","jabul","sasla","farbe","udise","gaică","crapi","afină","aține","auind","mafii","tapul","gemut","fălit","cegii","linou","urmau","sofaj","dinar","intri","odini","horeț","dinei","șișca","nurii","final","aiest","vinia","scări","verse","pliau","aflai","fonfi","torul","maxit","șofai","lăile","feude","ulite","emerg","caier","doici","urcuș","zgăul","house","vilos","bârsa","navod","povod","sasti","zalar","cauce","fătau","hilea","aicea","reșca","magme","coada","smash","hății","hobăi","geale","coșim","cocon","catch","bisai","votul","jărui","leroi","crița","curei","uimii","intru","cubaj","asmuț","cubeb","greez","făget","oclus","bocet","bolim","dasie","viode","iacul","lațul","boxam","picat","uimea","fanul","roșei","spuzi","roziu","ferțe","dimer","egida","zălar","rotaș","tarta","boxez","bisam","genol","deșca","radea","misie","dedai","limes","galbă","ragea","varul","zarva","popaz","tauri","menou","foiam","acasă","zinca","reada","xifia","codan","fasui","rujăm","misel","ostul","scurt","apnee","olana","pomet","imbib","rașpe","cazul","lente","zahăr","bâcâi","palia","claia","drupe","ivire","hanul","țicle","fenic","imuna","miram","surie","minai","tinsa","eston","foras","cobză","sumut","dogma","molos","jalbă","remii","legăn","iezer","vesel","xilit","loure","rulai","cisla","nucar","elenă","litia","febre","dogim","tinda","batoc","șarja","optic","campa","uluii","urlau","acuti","bosma","bazic","logos","aeram","brâie","undei","dobas","maces","renii","vidai","calde","afina","breșă","biban","geții","bisez","uschi","gonaș","zeghe","butoi","seria","legii","refec","egide","jonci","marai","obste","famen","bujda","lecui","aiest","cedai","jenau","gâlmă","motet","bâtul","gadei","breșa","avuți","bagat","porto","susai","codau","gasca","prade","tipul","fetie","rromi","estic","pucul","stern","fălci","steli","tucau","plese","auriu","cultă","ytrit","uluce","tubul","colia","folie","ghidi","jiana","sisal","legam","alămi","menta","ornez","ciste","feric","apele","gumaj","uiați","vozai","caizi","verii","gavaj","vruti","liază","deist","căiță","jarda","verși","lutru","țicur","arată","soiti","aloul","ardea","tânji","bocsa","fetis","voiră","educe","bilet","yarzi","sabac","oseta","fălii","zenit","ovale","ugnit","nenie","toate","aflux","rodii","undat","tisti","comic","butan","gâței","jidov","coreț","cocai","franj","catii","luxos","slavă","bisat","negau","rever","daram","jalbi","stila","gerul","ierta","citul","jirav","exigi","firea","jonci","dungi","bozie","hoția","titan","scuzi","dotăm","filit","amici","satan","boemă","rânii","tepos","craul","gimii","vitos","furăm","hrana","gătau","cațăr","hoață","rubai","scaun","zuzet","trese","zărea","menim","fulee","încât","fixei","egali","volta","dadui","tăcui","oiaga","bucla","petei","bipul","umbon","mahut","aptii","umfla","pelit","texan","media","ronjă","noimă","zvarl","dulii","porii","ieșii","cățel","rumse","alege","semem","sudac","blide","mânai","donau","ranii","dilit","subit","vifel","tușam","ateei","oteti","cerit","pălim","burăm","almee","tușeu","lălâu","rugul","cotoi","văsuț","iesti","vilei","eroul","imola","dogii","verga","colac","lucră","vamui","najii","dupcă","șfert","usute","sigil","auzea","lapon","solii","litra","plecă","terțe","daira","ieste","racii","ușuri","lisez","bubal","albea","pembe","scufa","liate","torid","sofra","epura","mulgi","ionic","ștaif","bifau","căind","cuget","toala","rodor","lesie","cavas","mărim","taxat","colin","pătuc","tângi","uzară","bemol","dihai","mulăm","pasin","dalac","capeș","etala","bazic","oarei","amplu","muind","leaca","supte","bluze","jales","părea","arili","desec","henry","eponj","spanz","fatau","blana","arfei","sintă","faste","iades","pazim","taior","șomau","malos","matul","dedai","lenes","osuar","zobea","țucai","opșpe","plaga","pufna","gaize","selar","manșă","saiul","unsei","ficsi","răbui","adune","cobea","trena","fanam","bravă","câșle","lista","ostaș","girat","rodia","împlu","papei","vipie","spine","ițani","linsa","islic","sufli","jenez","ratca","talea","tusau","taler","tolbe","corzi","oxalo","tapet","cuser","canis","robia","mimez","orele","mașam","hends","votai","uneia","redii","palpe","muție","ramau","omnia","hulub","amine","capre","mâțoi","debil","tarul","bolfă","leala","întri","ovoid","vreai","norit","druse","pulpă","avele","demni","verso","gonea","șutei","sinei","koine","nulei","lamba","cafti","dapăr","surea","evoce","pistă","amine","tabii","apode","agățe","odino","zarei","bazai","socat","celor","pusta","jucat","galoș","borze","șurii","ditai","nadol","casam","lenți","labii","gumau","prăda","tutia","imago","nasul","bască","mesim","ocara","exige","timus","hauim","oniro","lipie","garou","uneau","oblon","tubam","fonta","diblu","falus","lemul","jazul","bisul","plava","calao","ating","zaimf","gerul","irita","reșce","onest","sosim","fiara","țepos","gurăi","infra","tanat","găină","gemul","cruce","triac","burca","șirag","abneg","murat","obora","avant","cauti","lașii","cății","tusor","vagal","hârcă","pegre","jieni","bolfe","pavez","misei","calda","harșa","incub","osana","vaită","udând","boxam","boiai","fobie","ouata","bragă","kovar","furaj","nemți","inemă","nasie","drese","hâiai","email","dejug","calma","solie","finis","visco","nonet","cubai","supli","birăi","joire","macac","fluaj","balse","ghint","hulpi","colți","onest","iasca","delas","minau","lobau","citeț","țârii","arile","măcar","avute","agăța","înmii","audia","ouând","cedai","dogar","noeme","uniax","aerau","ținut","avena","țiței","căpie","deste","bozii","găman","dolia","novai","spele","trebi","ledul","ament","estul","unita","ciris","picup","persă","ierul","urdul","pasta","barca","ovrei","cutăm","rutil","teist","codez","opust","crudă","curse","țivli","medii","foire","simit","tucan","nizam","durez","lobde","ugnii","ciuma","hiada","uzina","matuf","hindi","griza","carou","lizol","plivi","godia","badea","segno","bania","sanet","tezei","banta","sting","momai","pansă","putii","busit","umizi","măgar","holii","dotei","dozei","colne","fâței","bonei","setei","scaza","tolbe","milui","semit","rebel","cinam","ceter","dadea","dorim","ciude","joiți","tulim","pruji","înotă","iveai","ciuta","danie","molal","vream","tigra","segno","maron","baite","prune","russe","humos","citat","bacau","banal","aloea","râmat","neume","letca","alice","invat","brame","bairi","mixer","rânea","adiat","gofra","îmbla","măjer","livid","pocie","roate","boțea","arzos","udara","krill","adânc","lacar","cuban","padia","picui","grobi","tauit","crăie","garou","agris","viori","taiam","iutea","sărac","valsa","tract","picau","rimei","iezim","taulă","pofte","gurii","velum","sadul","trame","cedru","erezi","târsa","turba","pelin","iubii","halat","sucim","fuxul","tinzi","vanat","crane","virau","spună","durai","espun","lamez","purei","țâfni","plopi","cocoș","gitan","acrei","fagii","densă","tizic","pacai","ponte","pirex","ecvin","arsin","butia","haind","etnie","molde","situa","păsau","ungvi","noroc","catar","magul","barbi","ligno","simte","aeram","bizeț","litie","atinu","oloit","utilă","olani","pruha","lunch","clovn","puios","tinut","arbor","ripai","bucar","logii","locii","iuiri","sinte","venia","nogai","muția","nișei","omida","clasa","supli","auzul","zooni","păbâi","ruliu","ligni","cotea","picam","udate","bolti","lenim","hidre","cofei","setea","ripau","vagul","supeu","masam","emers","drept","puiri","tutuc","frici","parta","pârau","urnim","fumat","notar","uvala","acare","balas","claim","aline","sedau","bigam","rimam","robul","numim","zeina","berat","oblet","codez","polcă","durde","aerul","oligo","masla","labie","zisei","marea","cupeu","cistă","arabă","șanul","fotii","pampe","recad","bijoi","curau","bilet","curci","oiesc","sosul","ligul","silii","schia","sapei","redea","piuei","biută","gacii","dospi","pășin","alele","mreji","gagic","mucea","abacă","avizo","sasul","săpat","mazga","polog","noroi","afifa","ignam","junte","șiful","infoi","folii","glisa","vacui","walon","faini","tâmpi","arare","bloca","pinot","recad","ocaua","optar","viezi","ofili","fonia","vopsi","foene","cotai","russe","cutez","chist","balii","iezea","umide","treme","calti","fișiu","oscei","vuiau","voite","afâna","pazie","căpui","putem","loden","fulii","grote","lutos","slugi","fâșii","tiuit","urlăm","cehai","vraja","migmă","fatul","păsai","clăzi","perla","morii","funzi","răzbi","larga","rejet","japul","mâind","bubon","grizu","ovrei","codie","bâzoi","marja","velur","cipic","aviza","splin","teanc","plumb","cheme","voiri","expir","tamje","miopi","firet","zârna","urbei","sobar","izbea","răpui","motul","kenaf","trube","iudeu","talâm","tincă","evuri","bigei","bruni","titra","burci","călci","scena","ulița","peplu","obori","metan","gatos","amani","urice","tiară","voile","crăpă","dosii","felea","iveli","zapis","gazdă","huron","turca","amvon","bagai","ordia","dasie","arini","laviu","pizme","otfel","aduct","zodii","adins","metoc","devon","mușca","gemin","pirol","staff","iuras","pozai","horat","țolul","ușura","hioid","scoci","dozam","momii","bacal","cotam","pipăi","rigăi","demon","tunam","ceata","tatoi","mioza","jabou","novat","aghii","horâi","balut","miele","vanii","șipcă","reneg","bonca","paiam","colie","psalm","duios","sfita","prăci","ripez","nopat","arară","plebe","glotă","tușau","pungi","clivă","urduc","brebi","rezem","laiul","masta","spina","unise","paște","garăm","rabui","nonei","uneam","sigla","liase","motoc","iovei","rotea","uriaș","rarii","iscat","levei","neveu","zazai","dârez","senin","soaie","glosă","noroc","posed","pupic","hulea","chibz","nitii","plâng","lelei","pacle","vibro","pazii","ososi","maica","tatei","atati","galop","clini","nemat","haide","uzare","votum","fusar","capii","ghiol","guase","casap","bugle","xisme","manea","sacii","varsi","ușeri","paiol","imund","runde","agale","navlu","leită","mâini","zarpa","taful","scadă","imani","dalbă","pirat","scena","vomai","oprim","plite","idoul","adula","ațâți","norma","razei","ascet","masez","scarp","puseu","rotit","talaj","bijoi","glont","stema","cehei","ceaun","toabe","menea","zaimf","hucii","culei","ojini","super","tâmpa","volvă","tuiti","buluc","bogat","vutci","pastă","plisc","cadra","păliș","lalea","trior","avară","speti","axezi","leșie","soios","amuza","jăpși","lăsam","argat","țipăt","pirul","istea","mirhe","lycra","plaje","isteț","alean","pinot","debit","puntă","palea","pupai","avane","vruți","jirul","botei","helgi","lotca","urias","ruște","derbi","buire","nouți","canon","urzii","atuul","gătai","poala","afgan","botău","siste","zorel","nanei","paira","cosaș","grafi","raura","trota","ponit","cifre","jiene","asuzi","gigea","vitae","grofi","apozi","guseu","girai","torte","puise","udară","taier","sutei","rărea","sinea","mardi","praxa","rolul","joind","boațe","măsor","parca","godie","suiai","băiai","cârmi","jenam","măsei","prici","minăm","mâtca","merul","vrile","coțci","cucii","acili","kazah","emden","induc","puful","herse","uluim","valva","cupit","chile","odine","admir","clupe","coiot","ghiob","egidă","hobby","plesi","moțul","cefar","whigi","drelă","exarh","rumpa","crema","orala","jilip","potce","mârli","dimon","tuiră","bunde","etuve","meară","peoni","merlu","hurie","valau","sluji","teșos","sutit","lusau","ușuia","suiam","lexic","haise","vajea","șogor","oabla","surzi","biriș","viola","limno","icose","macai","comet","caine","kazah","judec","ispol","pocal","ricin","corli","vădea","urzic","melic","kipii","namii","bobul","catui","fixau","barjă","erata","bețiv","blând","cerce","ajuți","nunii","safeu","duzii","linia","sarde","vasli","latim","darme","alana","apune","vulve","surde","zaifă","înfie","ijele","gheme","triai","tulit","coana","șleah","avere","ovali","spusa","bibil","tigre","arate","pielm","vexai","sării","văpăi","bucle","udați","print","fosti","puire","rădic","lifte","poeți","chulo","pelur","șalul","hașeu","orbit","dusul","ornau","ludei","seile","șvarț","nadel","cășuț","tolba","optat","bârsă","hasca","mulși","soata","moime","foile","cirip","hodei","hamal","farma","draga","merei","osari","budac","idiot","joiri","arfei","liant","silen","jupii","bande","rarea","braci","apăsa","cotau","amara","usure","tinea","stână","baraj","polca","zuluf","orala","incet","iuxte","viuța","firii","tuire","toiră","vacii","umblu","titru","japii","rasul","rapus","riște","armie","rotor","barne","calăm","sieși","periș","tuhai","mixau","salol","minor","darab","simun","roind","napul","umide","decul","matau","sleii","marga","braha","junie","buhos","torbe","sodar","siboi","popii","birja","fanai","panus","fretă","ulcer","silur","pleda","înmia","rromi","masic","calup","doina","nașii","afuma","pitit","baltă","pruei","recit","sfite","chici","maice","korea","cutat","vinul","gelos","gasei","surpe","grame","bumbi","agera","muncă","boltă","aurim","sfieț","țoiul","mesaș","miaze","halda","patai","aliez","epoca","ogora","ogoit","conex","mirat","bioti","foaia","cașet","hamai","ofset","storc","mrene","nefle","fodra","vecie","vareg","oscul","radei","magar","frapa","naira","hippy","ocăia","zolga","atona","zbate","iuiși","necaz","scont","scund","invii","tuiau","dasem","multe","șuiez","focos","izini","albiu","colos","plite","muton","usuri","mesas","polii","busel","hersă","actor","joker","sosoi","tocii","artos","hrani","culci","șohan","falșa","apoși","fenix","rodat","flana","plaja","ytrit","neuro","maiou","vexau","pruhă","stand","uluba","tuita","rumti","acerb","hoher","ostas","releg","spină","calat","acide","surâz","sarac","natra","multe","datam","catra","lupia","noiță","rondă","abuza","cotil","plaja","ucise","dulci","curgă","ospat","emuli","tagăi","neaoș","tabie","kraal","bobea","cărat","cobuz","raris","raspa","olari","iusul","pirat","expir","midii","xilan","runei","miaul","itari","foița","cacao","quarc","stres","secăm","sucul","cruță","aftor","canal","irugi","avare","zăpăi","recoc","vreți","ordia","filam","palee","punzi","gabia","sacal","zarim","aptei","nalte","bezea","orfic","nebun","sulky","jamei","optim","sanda","sudea","etira","zooza","băgam","fanau","plean","faxul","sagum","câșlă","trasa","dogme","niele","meato","termo","solid","luete","gliom","bantă","suini","rondo","mejde","apide","uslaș","lasou","pavau","frigi","gulie","pusti","alint","junci","untar","norod","naica","sexta","pirui","vacat","ăuiai","pecia","tiple","marte","mambo","piota","epata","zațul","lizei","mocan","detun","siism","zecer","butie","farmă","orari","caști","piuit","puici","atras","fuști","apăra","nămol","macii","dilii","vroim","halul","dibol","lieno","astea","vacar","varez","soiul","pavei","tusai","lucid","curul","aseca","revin","șlapi","inerm","smide","sfere","minta","buzat","țarca","xilit","zeele","berta","gatez","negui","câtul","pictă","expui","țâhle","foiră","mrene","jotei","veceu","axara","rabzi","zoavă","surii","pinta","purec","robot","pufai","râței","venin","sitav","sălci","sărim","optar","priza","bleot","tetei","agasa","uneai","teină","jeteu","beici","zicem","butul","jebul","cutei","puber","evita","mungo","gubav","supus","udeau","moime","zitum","nărav","gemat","rabde","vilul","floci","sănia","swing","țâfla","santi","magia","bessi","omizi","trata","polua","tăiau","leuci","piano","invoc","asist","jupan","sobei","însam","capei","jocul","jugal","șezut","popic","patos","botca","doine","blegi","razus","vraji","roata","vreji","ujuit","proză","cedat","comei","clinc","hurie","oalei","sedea","lăsat","mușcă","coafe","bigul","acila","vișin","nicol","bujii","bibil","măiug","huhur","idiom","miala","răzor","somau","atata","salve","soire","sexul","espui","mămos","dansa","iazul","astma","cubam","ogive","graia","seisa","ăuiau","wolof","herse","rezon","ciuti","lunic","munda","gemui","grape","nivel","uncie","diace","râtan","pufne","odaie","radul","muzic","alpin","lobam","ropăi","bazon","plasi","prinț","sinea","prima","vulvo","hâșăi","linși","tăind","moaze","asana","leuți","conga","hobot","moria","famat","misii","motel","jofra","pipit","taxim","vajie","bunel","libel","xilen","apari","bauzi","panas","foiri","blană","risca","unele","sarda","leuca","toile","sălaș","atonă","pavez","areci","aușei","milan","utili","merit","lobii","muște","izdat","servi","vacuă","brume","olori","hamac","hâiși","pripi","haiti","acuza","pipam","lenei","banie","inețe","hăuia","hevea","otios","nodul","latin","țuțui","pudre","cihăi","ytriu","henry","linsi","coale","codat","afisa","gropi","izbim","tizii","scuip","penai","gerai","rasei","numea","piuie","botul","rumen","kraft","piezi","godin","smult","ticnă","paire","oesar","vomei","nanii","citam","sunau","șugui","bomba","ritos","ombro","botau","pupat","cuvei","săcui","barni","crezi","fiala","oozom","flata","gabje","votăm","spoia","mixii","șeful","docte","molau","blugi","lisei","ceala","ovreu","păsul","pungi","orbec","satan","iubea","limfe","între","sinor","plagi","ivare","nafea","grafe","fitui","fotei","târnă","luasi","malii","drang","cifru","alipi","ideau","deget","ulieș","muiai","suiși","liana","dietă","tipic","cline","gogon","urâte","pudli","iutar","virai","silim","râvni","jăcaș","uisem","exale","cuman","ningă","zbati","tabla","pauna","gazeu","jipat","obezi","sputa","breji","ezite","mreje","trufi","bolid","cazon","traga","sovan","matan","teama","vrusi","avizi","uxere","imbii","birul","acine","nasos","crosă","trăgi","dopez","stupa","verga","smezi","danui","magle","papal","retez","umezi","fonda","acațe","nasea","juxtă","danez","stană","negat","pradă","vioda","elena","taxez","setau","lelii","panda","hățui","koala","ceapă","arini","cepci","oxido","astme","popol","soind","remii","bujda","pilea","baian","coală","irupi","comis","bolfa","horit","țiuri","suvac","larva","udeai","țuhăi","uicii","rănea","najnă","semne","viodă","sfârc","gamet","daiac","razne","macin","opune","forte","dayac","gacii","redan","gaeli","vălău","rebat","stava","tuile","buret","nimfă","cafru","eboșe","nedei","fosil","jabie","podar","agora","budez","masul","toană","casiu","amuze","infuz","maiut","budat","borau","sodei","moață","napii","claca","cranț","vânăm","mățar","ofere","hatui","lăuta","antei","rodin","gazat","serpi","codan","caira","rădea","natră","culee","macro","vechi","colau","ignor","cionc","amurg","motam","vedea","junte","slice","tocai","oreav","stole","fisau","grâie","sorei","bujie","ciume","pivei","vizii","ajună","jigla","smalt","vagin","urzic","dogea","iriză","drage","ponor","megal","aciua","ocnei","iilor","roibă","eteri","simta","deriv","miorc","miaza","lebăr","japca","avers","vitei","mutam","uluia","otera","ratei","baire","mirii","idile","doboș","aedul","umani","atriu","halte","novam","pruna","ralid","sfera","ninsa","fusta","patru","tauim","mioză","rabie","puiuc","budai","zupui","muica","văgaș","oment","hăiți","jaret","corai","cepci","belit","varsa","acati","talul","tocit","obida","dioic","morfo","cosac","rotau","rahis","capai","zobon","turan","ranit","antei","murid","pruni","râsul","iveam","udand","fiful","galul","flese","undit","magma","zadie","tifon","pupoi","sapau","taici","seini","cavii","laițe","claie","coame","boiul","șurup","udire","atica","codos","ursuz","pilon","oarbe","ugnii","muică","ușură","mnema","visin","zurba","dracu","imuri","mizer","roura","vrute","umida","axile","galis","arătă","pagul","rroma","patme","saric","niplu","cursa","pluta","turna","dubas","poara","dramă","lohan","gafai","modem","zavod","gurul","dârje","tasam","chile","dodei","prica","tende","roaba","lipsa","larea","cneji","cazat","fider","hiper","melci","dorna","lapon","vetri","picta","oarda","roise","treaz","blanc","jacii","școli","octal","colan","filei","tacit","curei","basti","clima","haită","muiaj","mutul","otova","bocim","suflă","avize","pefug","șvedă","triam","trupe","brosa","sleau","taxez","gotic","leita","actul","trace","casut","glaja","scrob","guzla","mimai","undea","batel","balic","pilda","rapii","sfida","remis","rarul","daiac","ciute","svezi","curaj","supai","măjii","lamai","picai","paius","ciuli","mimic","plete","maiug","dotez","izvor","strie","pudel","pirex","salon","fanai","gogit","ibric","etape","gaste","infra","calem","puiuc","julii","hrubă","cuină","topea","albut","amhar","sadea","bazar","hiada","vozam","mance","elidă","trosc","liezi","pufui","iuire","musti","șfarț","curve","doimi","clona","vipla","canat","pelaj","gaura","japcă","trape","flata","polon","mimul","demnă","iuiri","meato","zeghi","micul","ușier","potcă","băboi","cinaș","exali","șomat","răzni","sutul","bober","undau","renan","farad","trist","biman","maria","redat","salul","haida","traii","șutii","cahle","miner","puchi","fonie","praji","aviva","niței","țucăm","voile","mieji","ingan","vuire","apuci","mergi","zobim","toron","subei","podet","brate","glumă","stârv","ghete","darji","amurg","zburd","atrii","spânz","fagot","roaba","pavea","palpe","taxam","parem","acces","amărî","bisel","mirel","grăpă","izina","gumai","hulim","cunun","hersa","teraz","texan","duale","nenii","popor","ibric","argos","vatav","mâțuc","arcus","rande","ducea","nubuc","ragea","hâite","poame","poxie","răpus","gresă","fatal","dereș","lesei","nipon","picaj","zooni","avame","imola","bobim","zbori","unșii","dorne","bolfe","atlas","socai","totem","snopi","vreau","dandy","logie","breva","bujde","gaiza","tocai","finit","dălți","acele","osetă","amăgi","sălta","ascet","sumec","aleza","lucit","harci","largi","undat","sivii","briei","dihoc","robie","misui","sagna","goții","ofiur","budac","cotor","hiolă","lutre","maură","agapa","atâți","irigă","finii","năsip","mursa","model","rodau","mutau","tezei","supse","pioni","cosea","zabet","zabra","genic","înșir","vuiet","jeler","teapa","cupla","caisa","casoi","bocșe","aldan","hotim","aztec","clipa","bruia","vexez","garat","murse","digul","țugul","orari","joaca","penam","porii","bifai","briei","boram","geale","nicto","șașii","morii","aleza","satur","zanei","logii","culți","întâi","plopi","sinar","trudi","drapa","colai","grena","tihna","holei","anuar","mapei","fruct","gaiac","grasa","talpa","fraie","banci","fătul","gemei","admis","culca","suiez","fionc","xeres","pripa","cadit","echea","crapa","laice","duium","surse","veghi","zemii","colne","opace","emden","dalma","dioic","zebre","briam","mejda","fustă","oablă","pohoț","aiept","tonei","slabă","verve","gumat","pulul","fazii","dupac","runda","beuțe","înalt","celta","umile","terta","demos","uirea","onoma","autul","aliau","dedau","copil","soclu","ocina","prunc","axată","lumen","orali","femei","fluor","colie","misir","darii","hască","oofit","mafii","larea","trupă","vatos","damnă","tunar","potou","bojii","hatâr","laica","motiv","oarbă","vicar","prazi","leafa","foisi","vorbe","ometi","naire","vasut","saigi","pandi","frapă","mujic","opări","fusul","stola","lausi","urbea","tulai","telim","tanga","staif","matat","ieșea","impur","ponit","dolce","șutau","proci","caind","ozele","butie","azoic","fălos","trasa","maină","zăvoi","caiet","bujdă","faiul","bicaș","lotei","boeme","cobai","șăzui","rugby","talon","cetea","cinau","aclam","bucșe","tonul","dulai","zaton","braul","snobi","noemă","screm","riscă","luete","ruliu","metri","parce","ungea","ausei","breze","coxei","pedea","vârșe","truba","hățul","rugos","valii","dacit","hătii","vinzi","ținta","vârau","sudau","eunuc","ardei","merei","beție","ovini","mizau","știrb","raful","emisa","incot","zurbe","penez","tihni","urzea","arabe","odeon","pipai","rente","dăina","joule","molei","afifi","clișă","seara","cilii","pamai","miaul","linsă","punte","icnea","ceaus","bubei","stoci","grobe","dogme","felah","albiu","bușim","bâlci","eleat","dupul","vocal","amuza","adere","ziuca","răpim","aheii","stârc","fesii","semăn","megal","ideau","amuși","aliaj","cârji","arida","vinil","picii","manec","guite","legul","rimat","coace","laviu","julfe","hăpăi","etate","adusa","donam","aușel","paria","pâșii","penez","dozăm","lirat","rodaj","hapcă","feste","bazau","sutam","ramas","alții","bifei","utere","bechi","perji","orier","pampa","taola","miopi","sejur","acriș","capui","dator","enorm","marfa","sunca","ciulă","unesc","vidaj","șutul","alcan","sfeti","culmi","livre","scală","cumen","rotar","soiau","balic","vasti","molid","șuier","trudă","toiau","vrand","sulte","ramez","minus","alela","nevoi","abona","certă","detiu","croat","exila","taxid","scule","visez","crame","nopeu","melan","tarla","tarie","holie","sarin","hopul","lezam","ouleț","otara","dopat","scade","cicar","kodak","pirop","apuce","umila","udate","pieta","baiti","sunăm","halii","educi","peșin","stari","nagâț","lăieș","bujdi","mulam","acilă","colan","flude","locma","rării","nopez","favus","sfios","picol","miria","gusta","rițin","skate","baric","gazde","raita","cotis","robei","tahle","foaie","iilor","moază","finit","cruti","oblii","spata","invie","șăluț","lunci","bilon","sambe","farda","piemn","grupă","nulii","rugea","sigei","cojea","ierha","narai","hurui","clada","furou","saiba","jarit","imuri","locma","enoti","setei","zimti","lupoi","felei","feder","voind","vroim","lucim","laica","copta","iodat","buget","malea","cinul","atlaz","girul","neras","ralie","devla","zgâia","iscam","climă","epata","docti","dalbe","topos","culot","lirei","itiri","mediu","steag","zmeii","haini","roiți","novăm","sitar","pătez","șutez","obțin","vomic","vervă","crila","stime","muiai","doime","papus","banet","tenul","algid","unice","fruct","jihad","tarea","roiai","nămim","virid","optic","bluca","etole","gomei","sabuș","junta","tocot","zoril","foxul","gubei","subra","fișcă","panda","telex","puiet","lepre","aguda","darez","catia","hierb","jamne","nimic","uiuiu","diblă","predă","radic","frans","buboi","inovă","egida","nesul","fosta","aspir","maraz","abale","dulce","darea","tomna","tenta","iobag","irupa","țarna","supăr","oprea","ureus","culac","dolie","depus","aurie","sașie","viela","gaibe","ramce","ereti","naram","țigan","aliat","milei","tondo","vutca","păzea","delei","vrați","salță","spoia","basic","miras","cirta","felin","cofra","potou","gasit","baind","sânge","axion","tivga","opait","auiți","clips","zolge","aviar","gafei","marei","axasi","diezi","corla","etapa","vizez","iatac","boate","butil","iuțim","sicar","berna","chemi","pocit","duros","țoapa","mione","bosei","matez","farse","clapc","batce","mișea","vâșcă","setul","dibol","coree","itita","binte","nucii","pâslă","halou","zaica","iurus","aiuri","ghiuj","tuind","cușca","blimp","avere","pașol","taior","negre","beuca","puică","cauta","taune","jumbo","nemeș","poară","bălei","șiboi","ridau","azima","fetei","socul","radou","broda","gofră","aștri","reies","lalau","zilei","lunea","holcă","votez","elini","slova","pasau","slute","sopai","snaga","uscai","yuani","tific","faime","noros","spalt","cofră","afixe","lodbe","topii","umeda","meteo","flane","plouă","inema","mursa","părți","totul","exine","husca","velii","feudă","bulin","racai","rifii","jofra","magno","oliță","talaz","purec","răsar","facem","urnii","yogin","îneci","palce","musiu","copra","lenti","tabun","nunta","ceață","misun","asume","aboli","laxei","codul","topea","molon","iuiți","fetia","furda","jărci","ranea","semnă","nevod","zăcui","zăpor","negus","paras","evoce","fondă","măruț","tușai","rusce","cesta","irigi","cegăi","tabia","iruga","jupoi","pomul","fanez","sapat","dorea","spice","axele","brame","dance","fâsei","volte","viați","kudul","asezi","aerob","halei","lampa","legic","vițiu","eșuam","surie","mumie","somei","ketch","kurdă","staze","oidea","kulan","uncii","manci","matro","perle","tatai","nafta","balci","mufle","bariu","bucal","implu","scuna","pasca","ciont","gătii","cârmă","iovii","adusa","paing","apuci","linge","casai","istei","anima","cârpe","molez","digul","bivol","desag","penar","cosoi","cocia","biela","beliș","haseu","petic","dulap","pâsli","lohio","novai","calat","oarze","estru","oțări","tesut","culme","bosei","borne","locui","năsli","nopți","prubă","varvă","neuma","lipai","miraj","talas","kalam","foind","dopam","ivere","start","scapi","nexul","fider","pohte","evadă","casam","caută","taină","nyaye","iedul","șoșul","găună","manșe","longi","țipău","cruci","nixis","stern","ample","pafta","bouri","vraci","briat","alias","celle","calup","tasau","nefro","ohaba","slang","praxa","spiti","flesa","cadus","hurez","smeri","iedei","maina","vroii","dupai","usuia","rumbe","încep","toile","taine","grind","bazat","apiol","jante","cotei","nurca","jalba","trufe","animi","tătân","mugit","terme","citii","opari","legat","flote","afone","bujia","tapoi","goluț","dăuli","marti","dandy","ghiul","baiul","îndes","reșcă","lifte","vâlfe","impii","ineme","simte","anure","bunii","senin","înnod","mâlci","gobai","matoi","umilă","blimp","lenii","venie","glumi","vipul","avana","mesto","emise","durei","geana","ferta","popâc","hăuii","somni","lepto","ajuta","ileul","caite","fudul","apter","corfe","graim","farda","aliam","amușă","piuar","vigii","betie","durez","brevă","crăii","fodra","sluti","conta","zemui","latră","nenut","mopul","tauni","erori","joile","răzda","tarna","mulgă","tocim","gnuul","ațice","teava","ateul","friga","baboi","fatum","gagul","asumi","piesa","huise","țuica","orbia","puici","voiaj","coșar","gâdei","linul","iunie","valon","rotai","veghe","regat","bufan","fitil","ojogi","müsli","nudei","piper","rupie","tafle","soric","amagi","cesta","albul","tuner","copăi","wilow","stufa","cedez","lipsi","ferea","sonez","deist","umezi","urâși","durde","datai","sudic","tefal","aflam","godii","șelei","osene","natul","molan","sepie","nunul","ulnei","trapa","larvi","lacre","fraul","negot","șvezi","arcui","nopal","uciza","mente","depăn","înjur","aposi","kakii","carpi","colei","mouse","junia","butac","vazut","bufon","apnee","moști","armau","narez","zarea","parez","bușii","păgân","tmeza","tipit","vigie","tacâm","halul","palit","petec","brută","sazut","hehei","erele","korei","gecii","extaz","lenea","calzi","brida","cotei","dieta","sasiu","ampex","podan","cuhne","oprea","gream","bârâi","opuie","picul","aducă","runic","uruie","ouari","rabii","grabi","sevro","umble","halou","ester","cubii","urnii","gomaj","aprod","difer","arest","visat","sopor","luare","greai","fiful","mucar","iuxta","joiși","șansa","atomi","mesim","niște","afine","aulul","simtă","sulac","tutoi","harag","fungă","câșla","teșim","cenți","moaza","sediu","lozul","rumpi","hirte","rouța","lumii","tulul","tundă","ergul","pieta","nurca","văros","opere","lupie","taseu","îmbib","toner","sving","smida","amnar","pomii","colul","delta","șerpe","jugan","uzita","drain","pitei","greși","eonii","puțim","sapoi","paiol","liote","parul","dotam","berci","dudui","șopei","balot","rentă","lagum","bulet","balia","tonos","cojea","manas","frige","drese","minge","zapam","coasă","algei","butul","roira","vulpe","depar","luteo","micim","olate","mintă","islaz","renie","piper","dedea","iurăș","lupte","urmai","birjă","niele","sucul","ojine","aținu","netez","civic","niții","eleve","avame","roibi","kubei","jenei","berme","arare","scuar","breji","fermi","gaile","aromi","legul","barai","dutce","oitei","viers","telal","focii","belea","lenos","surle","lusam","piser","mâgle","ciupa","jibei","semul","lobde","renta","leuci","reper","cazna","seara","ocară","omisă","timid","miază","ticne","placă","aurea","sodic","salve","jipul","zolim","miști","pasaj","solba","sesil","labul","pagii","furie","lodbe","gâcii","dalei","cucon","devon","butac","separ","bâzzz","samca","migme","iteme","novei","leuas","domul","năjea","uluci","samar","salta","polei","aguda","marșa","foraș","setai","codoș","roage","găsit","bombe","uclei","maron","irumt","neder","ohmii","sâsâi","stira","auire","epici","sucii","ofusc","pișat","baias","răpit","optez","stola","pripi","laban","curie","ohmul","reale","lutru","aezii","frota","hasca","toiai","admit","ruină","duhni","duram","magmă","chiui","lipom","afife","cărăm","uneam","fusar","rodea","pozei","cuiul","mărie","haiam","căpos","hobby","motau","omite","rupti","holci","bisau","nopez","pudra","mieii","oogon","apelă","soiri","smidă","pasez","zidea","tifle","cepei","iedei","mixat","fanta","petit","medie","fibre","bușeu","mixaj","prăde","ideam","haram","astre","stiti","guvid","șaman","tufar","buhăi","verei","turba","uideo","bubon","somăm","rahis","difuz","saule","minei","miste","pieze","tocmă","pitul","zooul","heder","aroma","zerar","bifor","unsii","truda","varus","urâri","dâlme","zadia","ordin","rosei","nouar","greve","relua","ședea","astre","urgia","abrac","selba","stavă","machi","tonic","bariu","cavaf","odiul","arman","erede","axezi","gorun","coale","voiam","ilene","huita","sveda","colai","evoca","iraca","răcea","sarba","ritin","jidan","olița","relei","pembe","belis","cella","istet","lutra","biped","averi","boire","ovale","dubiu","penat","silhe","pipez","mânam","lingă","tapii","lonje","venal","finet","scuzi","vaite","dregi","colat","notau","echea","labil","rundă","ospet","cergă","jerbe","molar","carui","gâdea","boabe","lapad","pieri","uruia","pamam","chiti","tuită","logos","sigur","sleia","firiz","iuire","infat","punea","păuni","arsic","tufit","botul","aheii","undam","hulpi","ulmii","avani","unuia","ursin","lăuză","fapti","codii","capra","sudul","biman","râncă","uleul","roiam","combo","ridic","palie","amide","felie","slire","irumt","musiu","iusti","anina","tartă","mixta","salic","deloc","spoim","iurtă","blucă","umple","uzate","stabi","sufăr","prind","magni","linti","luptă","ereți","ivesc","bisez","sacri","șatre","sânți","rosei","mizei","hoțea","fugos","porte","trate","culmi","gașcă","ligii","bușea","linie","baril","ordin","marșă","tucan","crasc","olace","ulmai","idoli","palid","zooza","keaul","ridat","mânat","napez","apela","ofili","cabră","roșie","nenei","atari","basca","ramii","ruful","hăuli","levit","laiei","apidă","xenon","mucul","doini","harti","drugi","lasez","osman","durig","pătul","ahuri","lalea","munci","dineu","taule","raman","doric","smârc","litou","locul","dinte","gogul","vodci","păpau","valid","etnii","vergi","noruț","poeta","tutul","sobar","râpei","jaleș","delia","setau","mirii","pasta","tanat","măraz","pliam","vedem","sunet","lusei","casii","acusa","nufar","uzaje","negri","semii","motel","rodul","burau","otgon","lăcar","tupeu","rulau","spane","olană","macaz","jubee","pulsa","bermă","itire","poema","musul","topai","moroi","trăim","vesti","right","rijei","galiu","aflat","etern","zeamă","lezai","uniat","surlă","leacă","nitro","morve","tanic","curry","tatii","dijma","linca","țârâi","acață","lofat","zechi","obron","lapis","osete","stepă","ergii","sonet","doruț","ipeca","urini","smezi","vatei","tătic","ginta","târfe","traul","mazgi","limba","piote","șofau","rutul","rofii","iulie","aripa","vitei","freon","speti","sadea","lobar","ajură","zorul","maori","nocti","liuzi","buiau","cabul","febre","poniv","tacut","foita","băute","frati","fiola","stoic","menii","bușei","nervi","nasip","filon","relaș","sarde","elina","barca","sorea","goane","ucuri","sfânt","clona","arămi","tăuri","puira","vozau","stirb","pruda","noute","ovoid","solzi","setul","diate","gerah","drupa","duios","țapap","virga","tenii","pășit","tuita","jojei","obaht","surpi","urnea","poștă","ceara","citro","greoi","bruto","hămăi","vande","burei","gheto","foită","avizo","ocait","acriu","xifii","pagul","zolii","rosii","mlăzi","uliii","mocul","jiene","zaraf","nomei","helii","zebra","pliaj","gazei","ratez","lupei","solia","leică","buhul","fetal","dospi","șopot","smuci","țapoș","volet","tapaj","visam","pozau","otită","curăț","copți","cavas","cavou","munci","cupru","tropa","bytii","diena","știmă","horea","popas","caniș","jofră","pilos","aloca","priit","proor","spuze","smulg","vagon","surpe","arbor","făsui","cafer","jetou","draci","boare","ciuda","olpei","ușile","oagei","buton","mirul","craun","afifă","tauri","zonei","tabar","rupse","mumei","udesc","insel","pliem","sicui","șișcă","verze","foale","batir","sătui","botce","fason","etnic","stiva","zolgi","motat","oteli","clari","scosi","buiac","nurse","lipim","pompe","hălci","nazir","estul","opiat","rotit","tanea","recoc","șvaba","viața","jupei","atică","paroi","salii","bufei","rafia","creez","susur","ralie","oferi","cutii","nopăm","toții","armar","filez","plozi","reviu","șarlă","tutoi","tubei","bovid","hulii","sabui","forez","fular","sedat","sonul","lăudă","puhui","nodal","apela","boemi","boiau","lexem","liftă","bazei","rodai","rinei","pârăi","rumpe","poete","jabia","suira","table","globi","sucar","mocit","fiole","medul","cesiu","barza","josii","proin","morna","hoata","țesal","hârei","legau","cedez","pierz","truca","vizam","dafie","aurul","bitei","egide","adape","ciude","vătui","oloim","lizez","urzea","opist","turle","razie","recea","lazul","năzii","siaje","pilit","grăii","juxte","husti","țapin","vizii","tubau","mucii","inert","zimță","cănit","chida","blues","arabe","adept","suhat","soire","cazau","obori","cizma","tanău","ovreu","istei","pățea","sesea","inund","forum","edita","aroge","sonai","modal","alună","tentă","rotau","tusii","sabau","gaial","corfa","numii","admir","elice","cutat","toape","evreu","julfe","liaze","gaman","roase","butuc","semna","metri","încap","stupe","groși","viile","altor","stete","jucam","dienă","viuțe","hăuim","rauri","atașă","hairi","iugăr","sesia","lujer","carpă","rotez","ranch","heavy","duant","bubat","migma","mantă","tuieș","lause","murga","pleci","imers","rebec","baiai","scade","cista","tupeu","garai","plece","cinai","racem","samot","lexie","privi","semeț","oleab","dauli","călim","eocen","tigve","anima","nenei","teism","hares","notai","bouar","crase","linio","linei","sabla","buzat","jerbă","ardic","luată","amare","împut","dinti","taxam","bornă","siful","gheto","auiși","ranch","iezim","lupia","umedă","fășia","acnee","fanon","gusta","pumni","piosi","rolul","rupii","datei","norit","șipca","anost","gonio","varva","mosor","nitui","șicui","irmos","roiră","carmi","mărci","coajă","gazăm","spume","vicie","muced","strup","rasat","urnei","buise","sirec","ifose","lorar","clare","roiti","sabie","mutai","octan","cruzi","clase","trase","aduca","urași","braga","talie","irbis","harțe","sonic","pisic","temem","satiu","stele","nalba","habar","bunei","grote","vipii","zbanț","buhos","ulaje","vâlca","izolă","lovim","astup","flori","cruzi","damii","mumii","gafăm","uzbec","vream","craze","sudea","tobaș","oarbe","maslă","fuzen","pitul","popim","jenau","soața","cupid","vaier","șerbi","zarul","cetaș","titlu","xanto","cotil","elite","ahtia","ricșa","renan","rapea","karme","darze","sexte","ratii","etuva","nască","esuez","zgură","sabai","lupin","ignor","fumam","umflă","țiple","baros","burei","pohod","gagiu","terță","revii","ungar","venit","recif","uliti","soață","oasei","peron","gruie","urson","piară","crama","hârău","vomăm","exine","cauza","avort","soție","ginea","aluni","ocara","kraft","agent","agude","vâjoi","mamos","ochit","băgau","manie","dedau","goală","scaii","funde","iniță","erete","mijit","bucul","sinia","cupra","pubul","ciule","ictus","valci","dobaș","prună","rămân","lahar","datau","melia","roire","dasia","oleic","harca","xerox","tanăi","acira","terna","batiu","zorim","decor","partă","bubei","formă","pedes","bobit","ralul","adiau","barim","hătim","furci","firos","fobii","moșul","tutuc","renci","fenil","mocim","hâdei","boxai","nefer","huste","biela","namea","lauza","coase","bărci","boxei","matri","frapa","arbie","arici","mutit","grabe","neder","tucam","fermi","opale","copia","tăgii","afipt","pulii","setam","anuar","contă","jarui","birar","ovată","jaiul","joisi","locaș","trans","supla","nicti","dohot","ursuz","grivi","pâsla","piuar","cuiva","rodos","lusin","marda","biete","pozna","epocă","ogoie","spate","țesea","aguzi","rulat","ragem","lutul","bahne","zorei","holci","zadei","sonar","burat","efila","kamii","suisi","morue","sodar","zerul","seman","dejun","zechi","casăm","remis","paluș","penăm","cumva","urlup","nasol","zoarh","sodiu","arbie","oment","ulmau","velin","poare","cubic","sabin","etuva","muind","gușat","vitro","căuta","ramam","fiesc","nește","glisă","educa","milos","major","tubau","matez","epohe","fibra","vargi","suter","razia","kerii","basul","nemet","peane","berat","uveei","cotat","scrie","morse","zenda","polen","larga","apași","tamja","gepid","liaza","pieii","pișca","sisal","ticni","copoi","sinii","intim","kenaf","iteme","zbura","tenor","ulduc","causa","irugă","ăuiși","muiaj","unică","sfară","helul","nemuț","chiot","rabiț","parip","trait","atasa","prove","ițire","ochii","dauna","erhei","pierd","lance","adiat","najea","țopăi","votam","cetet","plăgi","dotau","odios","desfa","junia","miare","viran","suret","molda","flame","silii","acont","liner","sinie","vegăi","druid","mazâl","amare","dozez","nauce","funia","uvule","liber","diace","ovala","juriu","pante","pința","bolit","remuu","batar","piază","torri","cotam","otite","luari","gurme","oesar","iască","omite","ledul","veșcă","canon","lamat","bieul","taxau","ilară","curbe","vizat","honui","diodă","vanji","vaști","ponte","breva","huiri","pamat","sulky","diata","nenea","orcic","omida","place","hiene","imuna","delie","icuri","cubii","nubuc","holei","buhai","teuci","foton","umeda","renci","lupic","noema","ponci","vigul","fapte","lepși","spirt","tinte","astei","căpia","țeara","ioniu","greul","gelep","dință","norii","eline","porta","penei","pilaf","turbă","stivă","stric","fișez","ergan","armam","lizai","bedei","injur","rasti","denia","vârșă","barba","mâței","tucat","deget","budam","murau","darme","gazde","murea","bucal","colei","moșit","ruget","fiere","culeg","lotri","poxii","luxai","viola","pilon","venit","gomaj","tasai","nația","cărei","gumei","mulii","grava","cosoi","borax","omnia","culcă","tanca","hămui","vizai","lepto","sunna","trape","lasei","curat","liere","ghebă","lorzi","urâta","pasam","arneu","căiră","nevri","luati","salce","bonei","viraj","munți","finiș","soira","sonde","lihni","eving","gange","baftă","totul","hățit","mirel","hagii","agale","gurui","piata","omise","noite","urand","divid","rașpă","ijele","asară","buhei","jiglă","caper","seuri","supie","soroc","barul","văpsi","laita","lunch","oseta","sumes","tamjă","hucul","uzati","lirat","ulmul","metru","halva","bruna","tusor","veric","păhăi","freci","targi","ilice","dires","lizau","falos","zadii","litri","zănat","piept","văcar","sulfa","citai","genti","gogon","nidus","auros","inion","oarde","melic","valiu","ataca","macel","vergi","purul","dimer","afoni","nurul","ligav","crosa","firul","rosul","sorbi","pohtă","țâfne","luxau","pișul","scame","tenie","rozia","jalon","oștii","undau","alung","dzelo","boala","muram","tinta","cinel","asize","sunam","sivei","halor","bibic","falși","gozul","lacul","dăula","fante","tresă","piuuu","reiat","gurne","voiaj","malac","mursă","xenia","miorc","turma","busim","terți","iambi","flirt","iodic","acana","edict","vlahi","erupi","eolit","băuți","acaju","ornam","peții","patez","ăluia","gaide","orbet","atoma","efilă","otace","trese","cotce","cocul","pirop","cacic","roiul","monom","năbuș","loton","umani","etăți","gauna","algia","faina","capsa","țupăi","cilen","vamal","najit","scrot","puhoi","falit","xifos","rodau","ancii","pășea","menit","emiți","halba","sihla","widia","rasca","bucur","pizma","dieta","mișto","iacii","petei","surâd","sepii","fusei","ovina","kerii","optam","proze","scuip","tagai","aișor","lenii","orbea","vuind","acuta","kilul","demne","viciu","omora","oliva","ulmăm","răbda","ulnar","narco","ilice","simță","ploii","laice","agapa","clăia","zăcea","nucii","ujbei","armia","unime","notes","orbeț","căție","major","reală","suria","siace","fonii","șefie","dungi","dârât","kaoni","tonou","șofaj","stilb","acili","băiță","inima","traim","taroc","bumbi","berea","sotie","copca","ordon","razie","polje","genat","manze","corpi","yetii","vecui","oidii","gromi","brain","zguri","loure","culee","halei","ostii","atela","misil","haiku","morgă","tanta","pasus","supui","goană","cotez","ursim","rusul","boita","pirui","zambi","unimi","iubea","cotit","cașii","gadil","țoapă","boxer","dihoc","zelos","usuta","acere","numit","fente","barfa","bazez","zarul","funga","tipie","hotia","matol","cerți","ovare","obări","zacut","maura","mimii","birou","lupul","panul","berar","narau","notat","bleav","aurit","molez","copcă","apupa","creps","bazin","vocea","rimez","urica","tauia","turei","kogai","extaz","plisc","sirec","oftau","șașia","zenzi","dezic","verva","rudit","piuia","sagii","unite","maine","imple","pudic","ozonă","capan","zeină","hirtă","cusac","tenii","lânos","sanse","simti","scafă","grena","catam","trena","ample","umili","vasel","idele","haisa","telex","demos","sazui","ziuci","molie","supte","limfă","lieri","cușcă","sames","nasut","pilug","șuiet","poșul","rujan","lerul","cruda","șopăi","uzbec","toiag","cedam","kitul","cerea","aguzi","volve","suite","cadem","sudor","petea","mugea","dalme","izbei","palii","însem","dedus","teche","palux","mânia","iutii","tinda","jigou","miaut","jarul","bronz","colnă","aorte","avuta","învia","popea","eșuau","bizui","estet","bubui","tigai","letci","fiori","taule","sista","vampă","apara","mamba","iriți","barau","taina","mâtcă","otcup","zmeur","aurit","avuși","purtă","misit","proin","mudir","scale","paici","lovii","mirui","celta","recto","șoșon","morni","zisii","clemă","rațce","timus","ampla","nodos","uitit","oscil","putut","grapa","asuma","umori","rasel","nomol","nouti","sarla","buhas","calao","spete","yunga","hâtri","somat","ălora","gutos","tâlvi","brațe","aldol","campa","jigla","fâsâi","arogi","greez","etici","fleșă","grajd","braie","liote","musei","sters","aleză","tehui","splau","chiar","păise","finii","torba","mutăm","votat","cadou","nanei","odină","păsui","timol","banul","larmă","aciră","lueta","spuma","rozul","trăit","vatas","pânze","fuleu","canta","gatei","lupiu","azera","gâtar","paine","teuga","unica","zeppa","vârâm","alica","teuci","lexic","vesti","conul","kraal","bancă","capăt","natal","țaici","plute","palii","aurel","notai","foite","bouti","coaca","gurii","urano","malut","potul","bieul","tepul","cazma","hârăi","utile","joită","puțit","ethos","casca","niper","malul","mayas","sabia","casat","atrag","vomai","ivrit","guzii","hanțe","mălai","lapit","cride","țilăi","bănat","afixe","fonii","benis","intui","vidat","noeze","rubin","zoaie","arări","rever","oxida","vurta","inece","luați","tutor","regim","dibui","tesle","filer","tofus","strat","scuză","fiole","satir","atate","vioda","citim","diode","curul","cobei","osebi","capot","epica","puchi","iuțit","marga","bufii","buseu","croma","luata","cloci","ursoi","sosea","secul","scaun","tatan","gulia","dubit","sabir","petas","doapa","merge","sargi","inchi","șfară","terte","miori","mesul","napat","lămâi","potca","inimă","imens","dorne","uliut","tabac","halea","sfezi","inete","nadol","iavas","lizat","pozez","micii","trage","aleia","demon","jihad","hidre","bantu","grunz","cazne","zorul","votau","asana","șvabi","mixta","mâlii","uicăi","ocurs","cipca","buiră","ranze","zeaua","grăbi","setca","tatar","urasi","ohabă","joira","libov","holde","opusa","răriș","grivi","cozii","altei","marim","limus","vându","aulei","mesei","șefia","păuna","avuse","mărfi","țiuii","getei","lușăm","folie","ceafa","exact","tinca","tacem","spira","arsul","snopi","omoii","ranga","salvă","păpuc","zenda","mirei","croit","virau","oleab","șever","meiul","iriti","penai","anexe","lauri","șițui","prior","inmii","ultra","duble","stane","letca","lebes","unspe","atoni","polen","temii","altoi","latul","cutai","nevie","fuoco","căzui","simți","jerba","penal","lufar","cosas","mizai","ițita","bulat","uluci","efila","pâclă","foire","marfă","ilăul","axate","cicli","cadus","kerul","cobea","zeros","teuga","sodic","ținui","rânse","zonar","vrută","revoc","izbuc","zulus","mugim","arbiu","agrea","garda","refac","zuful","merar","frize","gogea","căite","orbim","țeava","șorec","tunda","comet","ștraf","deșcă","locei","emită","otfel","trust","togii","iasta","magie","citea","fișau","ovule","marne","holul","ursac","cosii","micro","pasit","supai","ședem","mongo","imbli","stift","nefel","garle","jitia","eving","testa","delii","burau","tuleu","veșca","binar","greul","cavei","praxe","arata","cafru","helii","stilb","vilos","gogim","vesca","uluba","scopt","iutea","tuiam","tarsa","rozie","boira","lădoi","Hades","acuze","urlai","sutim","nenia","sixta","moșea","foene","rujai","furai","gelul","floră","micei","tunul","netul","spese","mijea","facle","peste","razor","cauți","kakie","spumă","șabăr","texul","părui","texul","vadii","horau","asini","vizai","boxer","bunic","pound","fenec","borze","aveau","dubei","lăcaș","vampe","garaj","danii","murin","sudii","tarat","picon","patau","necro","lansă","bulei","noeme","besic","esuai","șaliu","aspra","păună","armar","fesei","râmau","sagum","bejul","puțul","bubos","creti","chire","ambra","spani","golas","bleav","scump","câlți","fraht","albit","rabit","stelă","ucuri","cotca","legea","sarje","tobac","bădii","suavi","tipar","vecia","înece","huria","roura","busei","ticna","tumba","sumei","pohot","voști","opiul","toana","pufos","tuira","nobil","seama","știau","săram","malar","tampa","opaca","tasma","teasc","sacre","râbar","largă","crown","vioii","ratia","mente","șirul","narat","casei","mielo","morva","monom","sacre","poete","parip","birje","amara","xanto","sunau","seime","morva","revie","sinod","joben","șamot","nefel","lomul","tații","ilaie","dunit","danță","holba","ulani","râdea","total","moaza","party","sufit","zălog","ceste","fățos","tampe","girus","virga","efeti","loaza","ieste","rouță","afund","omega","ulmam","acați","cătat","buzei","tuset","keaul","jipul","avura","stepe","avaet","pușii","cafas","agate","banut","răzdă","regia","locui","urdar","suiai","kovar","șansă","grotă","tipii","lamez","mizei","oxalo","docar","cepse","pamez","seiac","leșui","triaj","revii","resca","serbi","turme","grele","frang","umbli","șoșii","ultim","vecii","musat","soiei","jardă","penet","cecum","șiită","muiau","tipea","robit","auzii","narea","linie","agita","misia","sarpe","iusul","roșit","iurta","flotă","miraj","supei","pitac","laudă","dulci","usuce","vermi","baise","azeri","claia","fială","târsă","brahe","tăcea","vexau","fecal","peana","mioze","lătră","acana","lieri","sofei","drele","docta","luase","patra","aiura","vaina","vinia","pepit","incap","prăși","cuget","vanos","loaza","gepid","cosar","eflux","golaș","șuber","ponta","genic","cocul","lauri","abaca","criza","dulii","talpa","anozi","vinie","buglă","indic","egale","țârei","minaj","soiți","mudir","lemei","bașii","momit","pense","parez","varii","zairi","sacul","prăzi","macin","mondo","lunca","timie","pajii","vazul","grifă","urcam","emane","apupa","gauss","socri","mănat","patma","narco","spera","ponod","tioli","păzit","boaba","prazi","vexez","carpe","smuci","măsoi","geaca","buzer","skate","alaun","embol","runda","icrei","bande","țepii","pliai","mirui","șoade","geoda","ilire","minor","doliu","păite","naimi","tăuit","intre","dimii","senet","păpat","neted","țucat","imiți","impia","stăvi","usuci","sixte","voite","mânem","ciuci","căzut","reuma","plați","borsi","sursă","măști","jipan","purja","trișa","razau","videz","ierni","latit","hanii","apolo","hilar","râiei","tmeze","bahne","vâjim","țipla","atoni","zguli","desce","cocie","cruce","zonaj","armei","burba","bujdi","galci","valva","surup","boabă","mehai","activ","oable","inema","rizic","ospăț","purim","borși","duran","limfa","lupiu","albuș","irozi","revaz","foira","șăgii","fanat","bazal","adaog","aduse","salin","ogive","virat","patit","sfiai","strig","gripă","pocii","nazâr","nazii","solim","carie","cutre","etici","amuța","kudul","seige","dvori","ronja","actor","dănac","lucri","muzeo","vremi","jeteu","jenat","manem","rugai","fanți","încai","combi","vicii","jepci","umană","frâne","caric","breii","grima","minam","zobon","cimen","plans","garat","axial","rigii","berne","zamac","ulcea","inimi","emerg","plană","țâței","cătau","revăd","dungă","ațină","halcă","rumeg","rugim","bizet","îneca","aidam","cilul","juzii","necro","hidra","bufei","melii","potop","fizic","bisăm","conti","temui","buram","rudar","silit","nadei","ițind","clari","bălți","puhav","tecul","zoana","rigai","umbra","roate","căită","anură","vâsla","cheii","salas","inhib","cocis","joben","spite","rouai","plice","tiraj","venia","vagin","mitoc","medie","sapia","băiaș","tampi","bacon","moldă","murex","nopat","natur","tuise","frana","samul","nețul","grave","năjii","ketei","foșăi","scurs","ovare","canea","adusi","safeu","orbie","roada","norul","burul","saman","tragă","morni","getic","obuze","matai","moder","marte","zării","groba","rulăm","nanas","fiica","razia","vecui","tonal","torta","tărca","budau","mixez","popie","vitro","moral","ritmă","puiau","otavi","matcă","macat","sarul","jiană","radar","rupse","larul","poare","tusul","mișcă","uitai","nașul","grete","dării","refuz","caiet","marin","cujbe","spuma","tarai","zetar","frânc","limon","radom","foind","lacti","tangă","grași","ticăi","apuie","tuiau","oozom","liezi","moare","voise","erede","oborî","șomez","impie","busta","lacui","liric","modei","silex","panou","răget","lăuza","avort","cernu","razat","suplu","turti","abaca","bafte","cirul","paios","sobol","spuse","șurub","treia","cvarț","numit","gulaș","tubam","tulii","calpe","copac","halal","misti","acâni","dobor","uitat","clema","seiga","mijea","giaca","piață","buiri","pupul","lauta","lucii","șașiu","hasai","notau","fetus","axila","șuvoi","cleni","moile","stunt","pufui","trama","corul","culce","verva","seișă","tugul","netez","uliuț","varan","bulon","lușai","cirac","moșia","spada","prada","fulau","durea","recuz","brida","iastă","cavou","gnais","cadiu","vampe","sacâz","raios","hunul","minie","dăină","uvală","speli","uhaua","horim","junci","gusat","pipăm","batog","copac","mugii","pânda","moldo","scote","jojei","uleie","fugit","lușul","usuii","cetos","coamă","crese","lance","puica","pipit","ninge","barou","poama","crude","alert","nabab","teslă","casle","țevii","șovăi","șotie","maică","cepei","mizez","goana","știai","spere","țaica","sabur","șeihi","situa","rugbi","pasat","spoit","țaglă","poise","strup","bahna","săbăi","cătun","berii","pinul","năcaz","salar","naiba","emise","oinei","uruii","ciort","filme","bunei","țipăm","nepot","întru","soiam","palpi","nazul","iotei","naivi","baian","ciump","lunec","deltă","jaful","jarea","macaz","axata","halit","novei","albus","arcei","cigei","ulnar","șefii","clean","axila","ghiol","conta","etene","cotor","vorbe","holul","toaia","cauză","uzurp","uzual","tamas","sacui","urâre","vinde","corfe","sipet","agita","iotei","fâșul","ocaia","flude","apucă","auzit","banii","netii","vitel","gaiza","harpa","bușul","emuul","rigla","ginti","scria","aistă","cadet","gatit","galet","focul","auiti","gamei","pohta","pomul","vasce","porif","badei","călea","canaf","faină","joasa","gemea","șasla","schip","iudeu","cedam","undam","sleim","vlaga","cusut","amana","fiuti","corac","gagat","numen","cepai","oaspe","atriu","fenol","panul","selei","găzar","obeza","tiuit","bazam","mulga","tonaj","vozâm","artos","zarei","zvelt","doini","vexăm","havaj","armaș","porul","lenit","stila","girus","oscar","zbate","priva","sutas","silfe","mamut","lupon","toriu","ferit","dodei","later","viară","țolet","unghi","ponos","lonja","postă","păști","noură","viram","itite","paroh","udira","honul","rujar","votci","blaza","inșii","ritor","sopot","abili","scrim","falit","vulpi","haiai","dăună","darma","hâzim","țâțul","osram","tinse","inuri","uvala","pilde","zarne","borte","oașei","servo","buged","asuda","musli","gazon","rinei","domre","toise","zbice","birai","izuri","salbă","cânți","ginit","tucal","swing","pufar","saibe","picol","sarzi","votca","sonam","bigii","ceții","duble","buchi","plusa","ezita","ceapa","cazic","ierei","zecea","sfidă","docul","slash","letal","devin","coama","iubet","ațițe","fileu","pruhe","binar","budez","aerai","băiți","genul","ramăm","calfa","poale","fonic","videi","curbe","flana","multă","mahon","prade","titan","suiul","moder","mocii","foton","curvi","cuiuț","movul","radon","zorel","vâjâi","turbi","atele","aluna","jurui","nimfo","valex","pâcla","ațică","dârze","tunde","sezut","oblat","gâzei","papal","șeasă","însei","lieze","falie","ageră","plene","ideat","joita","numea","chira","aloce","năboi","akâni","sosea","belim","mitel","harpe","jupăi","spart","slăbi","teama","melii","ravar","capse","zisei","hirte","rujan","dopam","dusei","apida","dești","tocme","grâul","umbri","mauri","uiati","litiu","suise","uiete","suire","moaul","finea","cehul","polis","anula","tăier","târâi","hudei","admit","pulia","teier","certi","amina","gazai","citim","jalei","leali","soiri","craca","suind","ecler","haite","efeți","trasă","biter","seina","durit","joiai","araba","sulfe","toner","lexia","slaba","yogin","cobur","sucne","crețe","sarma","nitra","oiegi","durii","plimb","trosc","perse","hural","malit","undui","furat","liric","senar","molos","drupe","mlajă","șerbe","umede","uzurp","eviti","cazne","colii","vasal","rodia","jouli","lagum","lunca","proră","păiți","căram","pusei","batal","zalud","boboc","impar","nival","munca","cotii","jaret","neios","ogiva","araci","pilul","vastă","salut","radia","șofez","clati","amiaz","estre","indic","lavra","plane","artel","amusi","spână","avlie","lauda","etole","dioda","teuge","horăi","mejdă","leuco","botos","trate","urări","reuni","piuat","țoaba","naiul","sarez","panaș","saten","aortă","sinta","narat","prova","semic","toiri","arian","vipla","nefer","zecea","tuise","măsea","plâns","aequo","bigam","adăpi","pesti","maran","bonzi","cucai","incai","podit","peren","sferă","diete","obidi","ulcea","sirei","rașel","siaje","obște","raion","bonom","ardea","amant","bolți","zvant","hurci","celle","cetii","celui","blaza","vacua","ramul","nadir","hanat","afidă","velii","micea","venei","țâfna","sunne","faune","agnat","nyaye","uveei","clise","munte","suavă","plave","apese","priau","sihle","pânza","gigăi","meleu","fuzit","exult","gruia","aromă","saulă","razes","rabic","sinte","april","redii","jalea","lipia","vinzi","vărai","sicul","titru","apăru","silur","imbie","mucos","datat","cupid","zărar","kobul","huria","emeri","batca","norul","scite","pomai","oclus","almei","dafin","urnit","terfe","nurii","lașul","forez","folii","torni","purei","ropai","nisip","pogon","usuit","toisi","zăgaz","sobri","podim","sănii","anexă","vapel","voloc","vipia","scape","pubis","indan","falun","gazos","nutui","județ","emană","aciui","dalia","indol","bizar","carus","fanon","bitum","pătat","brave","liude","label","păhar","curte","uiagă","slovo","hamiș","mirhă","elita","cinai","juzii","tutei","pândi","caier","liate","rânza","urase","puian","ciump","lenea","falșă","grava","fiece","mijim","hanse","mesei","melon","mlada","șuvar","solvi","smale","feței","sfeti","bradt","dogim","amplu","husca","scrot","heliu","lexia","copoi","cipci","craul","fanăm","darat","gaura","ogeag","stopa","tânga","cegii","licur","negre","deset","animă","fetid","zefir","ostic","ceros","stupi","faram","linse","arene","lecut","osute","ofere","bazai","husăș","larve","moale","alami","modic","repui","orbul","evrei","epoda","ileus","spâne","fumai","tigăi","alait","rasol","labio","racan","mocea","axand","albeț","șoadă","zlați","năsos","arima","orcan","ocean","fârtă","ușari","dotat","hiper","urale","ambra","minte","mixte","mersi","xifie","amuzi","culpă","făcui","mătci","sațiu","uruim","butia","pizze","calic","musci","vârci","daune","pizmă","avida","bunut","ponos","robea","șuții","detun","ornai","zidui","grila","opist","laiul","revin","câtor","pager","dormi","crang","irupt","haltă","otova","căruț","jucăm","datam","azera","bălță","penii","ideii","riful","chera","slava","gluga","rusul","racla","gotca","locul","golea","sevei","fumam","pisoi","pagăi","paion","legii","terța","bolul","cehii","nășel","certa","imani","bozia","fapta","huium","tumba","ursac","sabur","stâna","codim","sfiit","angli","aciri","kakii","smead","pauză","molie","golit","pozne","coane","beuci","mosuc","dosim","obelă","manta","deces","boală","jălbi","rosti","penel","gaite","ancia","cumaș","fumez","bulzi","dripi","sinta","pufii","simun","susan","gafam","maura","laxul","lacom","oltar","izlaz","latre","afara","morve","recte","viute","asiat","inițe","vrere","huiri","panel","iuind","lagar","gamet","scama","abile","abtii","zămci","tasca","sutaș","poniv","pecii","golea","gurmă","unsul","gobăi","nefei","carea","calem","aluat","argou","daica","ratai","dreve","scana","brain","nămea","ramei","senul","morar","icnit","melod","femel","rujat","ițeam","story","cătai","lorii","ducii","bazar","foehn","tarta","țoșcă","jucau","tunzi","nervi","acrul","masez","rație","nagat","inime","muiam","adiau","padia","alait","dărab","giace","lingi","vargă","savar","onori","parei","cause","purga","fleos","uimim","tuiai","sumai","vămui","otava","ciupe","pavea","scăpă","infig","genat","proza","isnaf","skeet","devii","miște","gures","debye","datez","ardei","pegra","etnie","geană","nasei","persa","arzos","tasăm","sonti","natre","zidii","mreje","scuti","mlada","eleve","vidai","balse","ajung","salba","cerit","sedai","linge","darie","agrar","tavii","capsă","parii","fanal","chete","foale","cromo","lobda","lăuda","salep","hioid","vatos","ostul","sarge","demna","lobul","dubea","etnia","ouați","julep","căția","sivul","șeiac","naier","baroc","orale","pudla","gnomi","teios","acate","oștit","fusta","lasat","oblic","fătoi","cerne","padie","molon","orzar","norei","oiști","stean","aderi","șesar","solvi","cupeu","canar","pusca","incub","extra","legal","vorba","vajii","omora","lașez","pagan","ținem","horât","taxai","donai","fobia","barfi","pilei","zelos","hâise","leghe","pitii","pasei","cubeb","zloti","maclă","drege","ușori","liuzi","ridez","ravac","remit","aspri","parca","soiei","uzezi","lesoi","ravas","tigle","craii","vițea","jelui","hoțit","vărul","abtiu","tacla","cionc","retuș","lumea","bluca","conaș","păita","ulmat","oblea","fonic","furca","craza","freze","ramat","luxai","cafea","ceafă","mucor","masoi","oblea","ducea","pipei","pluta","mirie","liceu","jalea","oturi","mărul","rugit","praji","franj","nogai","livre","calzi","nurcă","jambă","joule","snobi","plută","livan","porci","samar","naira","scuți","bosar","cracă","țoală","muscă","racul","toaie","udele","opere","mânce","mator","fanta","juvat","lista","hopăi","intra","vamii","roiam","fraga","stare","sonde","redai","alter","jerbe","ițiră","vamal","pârul","dozaj","zapor","muțea","ponei","țoluț","ratau","fuxul","aerăm","pozam","vozai","redie","ouata","jaleo","acrim","debil","vanam","carst","suler","feele","achit","mixam","puroi","jubeu","bujor","cutra","secui","iobag","ruble","acuza","boata","gange","taios","plute","odele","țugui","caisa","dăgii","peria","mirti","susam","banjo","danga","jigle","urâți","hămei","trier","ausel","uscai","eroic","lesta","centi","labei","cupaj","gerat","umizi","eroda","nanul","grija","amână","grefi","etajă","ciuda","otita","anale","matat","trele","bazzz","minut","atomi","arina","afana","renii","apusă","lobby","ceste","cămin","pizze","târlă","mrejă","șpriț","roții","scala","aleii","ionii","blege","etenă","înșii","clica","gabja","anura","ierha","slavi","masto","gatej","brune","zelot","avură","modic","fapte","xenie","pefug","scald","ostoi","seară","zamii","tipie","sunne","rugos","breve","lisau","vifor","moile","imens","tortă","lentă","mâțan","tigri","bosii","rumpi","raiul","gebea","tolei","matol","ninge","scufă","frâng","demiu","dopau","modei","tuseu","salti","lunci","impui","rarit","mohor","sleit","rulaj","mâțul","fâșie","rouei","fișul","liară","mirai","muche","vomau","rămas","rodit","linga","gulie","pelit","pazie","vinei","ziler","pejme","curbă","dinei","repus","dieci","iriza","exult","amper","haiul","tiran","vapsi","tafna","coala","peplu","hățaș","codit","ogege","lușau","hauri","dalbi","bubos","cești","sarea","fasai","asude","taluz","havai","gopac","viela","custi","recea","balan","durea","aflau","plisa","carut","poeti","avivă","jitie","măcăi","lepta","cefar","ambre","ouăle","densa","labio","curba","papat","aflam","japii","auisi","sasai","țeapa","tofus","pruni","meșei","almar","tamar","urile","taraș","hățea","ignee","vâjul","ladin","crusi","trame","papus","dibui","argus","nalba","orant","picul","soita","sumac","lasii","pifei","tarar","foaia","mezii","urlam","chidă","menii","vecea","sfert","farba","seism","păraș","prois","cabaz","rânci","paner","agațe","muiem","multi","marșe","retus","educe","nicol","pruzi","ulema","ceriu","rasul","zodii","emiși","vâslă","veric","impie","urine","cablu","neaga","irită","ritma","notam","dârai","tocme","zende","morse","pogan","borza","octet","getul","feșii","ataci","harfe","vifor","spala","vacua","șiști","epode","sagne","ursit","dilat","azida","maini","păită","omagi","camee","hiade","suine","mereu","pruei","dublu","uzata","secol","acris","maice","joiam","uiaga","hurtă","rebus","teica","suplă","unisi","truda","batem","jantă","pătau","vecie","deloc","bulca","mentă","sinii","echer","zapat","avari","pinen","apuli","rodie","smugi","conas","rusii","sudat","buhne","jeans","funie","eurip","auleu","oblit","vajim","ofise","dornă","tihui","rășci","sobra","lapid","copca","tesui","butar","telur","râcâi","bavei","inept","curba","sparg","repez","pieii","aurar","lorzi","cadim","salva","rondo","masaj","triac","putul","hacui","sorit","punta","albit","zgăur","câtea","tapai","exilă","inrai","vârâi","gatau","tauii","filee","satut","afișe","vreri","redam","parat","sovin","gazii","bradt","volva","ciupi","oftai","cafti","gafau","uliul","mâlit","ticur","ergul","darai","sapun","secul","dupii","pilot","pilor","agone","jitii","tatos","boxat","terti","azime","uruit","gusii","carpa","pateu","svada","piure","rezum","caizi","moina","solei","zidim","jelei","pegra","reusi","sanie","valul","fufei","liman","putui","biele","danie","nasca","kogai","avană","taxai","difer","hauii","senii","acila","pafta","oteri","volan","lavei","tunet","pilos","supta","tondo","sebum","șuetă","zalog","rujat","azuri","verui","amnar","natii","munca","ilene","sadic","lapid","undai","apără","rutei","copci","urlat","sclai","barei","batav","donor","ofera","nunei","nășei","spice","șeaua","obroc","ilara","arcui","araci","agnet","taftă","hansa","păune","boiși","pipez","undoi","teanc","dolie","sărau","răgoz","duști","cesti","puind","enorm","trecu","buraj","masiv","bacon","cuhni","musei","avlii","alamă","razăm","lacti","xisma","vădii","făraș","guzla","bocal","sufit","iutim","târli","tivic","baiau","aplit","orfan","nasol","acord","zbătu","arcul","opace","sufli","huscă","îraca","mițit","mehăi","îmbun","ivită","deviu","utere","silvă","xisma","ronde","dilat","calce","cheli","atare","talul","caduc","birja","bleah","uzura","semul","finea","helge","vizau","vroii","șafar","burta","zoaia","clasă","feros","șuița","ozele","jarii","răcni","fazei","landă","nazal","argos","darmă","odaia","gutei","acrim","uzând","ceuca","sopor","basma","debye","vergă","redăm","vacui","foiul","hrană","rotam","băiri","latir","sudam","placi","tinsa","farmi","limbi","druid","traci","irite","rrome","osteo","sâneț","vărgă","alibi","fusti","apter","smuls","opaci","pilim","lipcă","franș","acrii","oftig","coroi","hotie","cojim","crida","talie","ciuli","avizi","slops","dodim","oscei","pairi","hatre","mânze","săpau","curci","ezită","ragoz","cauza","înger","arpei","găbji","boase","ulube","imnul","cârti","ciupă","limei","tropi","alane","fugim","cașeu","darau","fundă","sigil","abjur","siesi","falie","soada","havuz","furou","amper","eunuc","devot","joasă","offul","gimie","acrul","lotul","sugel","șleau","somaj","fosil","yuani","foiul","dedoi","zimți","zbânț","zgura","noroi","micul","cocon","plate","șocai","spita","gaiză","plean","cobor","fiara","ouand","coxal","mulii","vițel","sovon","curia","zobii","dormi","assai","fidea","vilii","zobim","udată","vieze","milul","trisa","măiuț","minti","modru","paliu","urata","casau","etaja","azeri","hilul","șuiță","cuplu","suină","peșim","paiti","palul","lupom","fetus","situl","zalei","metol","văzui","torbă","wonul","apret","pavăm","carie","draiv","matuc","vărăm","schie","manaf","zarve","jaiul","fugui","sumam","febră","elina","spaga","judec","aequo","dictă","acrut","sfere","gulas","jibei","ofset","pârți","vanai","bezne","cauni","numim","frați","mizam","curiu","bufon","sosii","șirei","mneme","vurtă","slove","văiag","futil","cutit","monte","opuna","afară","clama","biber","zălug","ceuca","inele","spion","combi","ștofa","săltă","ornic","mogul","borul","noile","sonet","vogăi","idiot","oltar","eline","ganga","doaga","iezii","pavat","axoni","volsc","reies","letci","linca","fumau","cerca","cerui","motto","lușat","cerul","semic","frotă","borte","hatie","vruși","sorta","rânit","erupi","zobit","pascu","smint","nazar","sabie","etene","țepul","răsti","herme","texte","ocult","cneaz","ocile","zoaie","cojit","somer","zguli","dandi","arena","iuiai","pliez","grada","dijme","gheba","zâzâi","prezi","dubii","ucisă","fotei","cecul","gujon","țiplă","hamut","cercă","togii","bravo","șpais","mocni","nativ","viuți","rodat","baura","algol","urgie","crezu","vulve","vadra","taler","grefi","urlat","urcam","ogece","basul","taica","opusă","agnat","latei","șoșoi","mesit","dixie","coțce","mnemă","uiegi","ungea","căita","tavan","hului","cheul","roire","tobei","bresa","gafai","jarim","huzur","magma","tigan","educi","briza","pipau","ridul","unimi","poduț","geamă","caise","iarbă","vidăm","chips","aheul","hurii","sicii","cutam","parsi","tăcem","sudam","olmii","acute","sutez","dvori","bombă","foram","curvi","tubez","măreț","getii","hurta","lipsă","ilira","velar","legam","bojii","dezis","basce","albei","graul","istia","acari","damii","ocaie","batav","bleah","tocul","osete","mâner","bruni","huium","lezez","lungi","nemat","bucla","mlaja","eston","uzări","ujuie","metal","ramia","algii","afide","falet","guseu","roiul","trema","fosta","sesii","baset","flore","roagă","gâcit","darda","răzau","pâsle","ocile","șiruț","basme","savor","barem","mundi","sfărm","dorea","lento","tuiai","culte","glodi","trube","leleu","tobei","dagii","scrii","mirez","țucal","tăiam","break","varta","uliul","tăuim","agone","crude","greva","claun","mujic","vinos","metil","bursa","păsat","chita","făuri","scrin","tacai","sauna","calii","aluni","repun","cupră","elină","fiord","istui","avram","stofa","aidem","iscau","vatra","sfarc","aulei","nasti","tinti","tabar","uniți","celte","anion","circi","ermit","sucna","ucisa","greii","triau","dutca","birui","usita","boran","fiolă","insir","impar","vocea","burți","mneme","râdem","blani","rabda","buhaș","hapul","berea","daina","urdim","odele","unele","masle","tanti","forja","inemi","firav","cazui","masaj","ansei","manai","știft","purii","nadir","flanc","calos","jurui","ciuin","obție","toace","scârm","ghidi","rugat","silfa","bâzâi","arman","walon","zoava","oculo","lagon","iaurt","popul","siita","asabi","twist","minaj","zeiei","badei","scene","ciume","tocăm","cenur","calda","lapți","terne","culmă","adeca","marea","pocăi","ahtie","tatua","boacă","clait","lapai","robim","lezau","nedei","sunat","ancie","colon","breze","gogul","trico","tunam","zelot","tubai","dolly","fonte","umbla","exina","puroi","doime","susei","orand","roiba","zamci","zauit","miuon","alocă","rumta","soita","titre","cuine","semem","săbui","abrog","zoale","xeric","momim","papii","vânam","eleva","zoală","sasul","bogze","folio","motci","situl","mirai","aport","celte","opună","mâché","trișă","tagii","ponta","caita","retur","unira","nimba","filai","vlaga","zahai","serve","micut","valvă","pufne","japon","slăvi","vatra","câner","muced","tapet","culic","rănii","minut","zupai","crași","pecum","mulsă","plise","vatăm","trusă","ravni","mural","palis","yenii","armai","bruna","poama","primo","pufni","nânaș","ocina","parau","probi","opise","senul","cinci","rapul","răboj","ramei","petim","rejet","pente","uleie","herma","genți","diger","zbilt","injug","great","țiclă","bordo","capoc","covru","hârsi","apret","secam","păiră","salsa","căști","natia","mocni","țurcă","baier","catur","masam","tulei","astia","indoi","color","laite","mezzo","felea","urici","randa","scotă","jofre","stria","tubaj","sârmă","holii","sulul","făini","dopai","umbră","tagma","cubul","orgie","revad","croșă","zoios","urcat","tente","bacei","pasei","budau","jelit","ierhe","tișii","gonii","salol","basta","cățăi","fazan","zulii","dosul","brind","țipai","niplu","teamă","murul","hoate","dacit","dopăm","iviți","sacru","sudit","noști","hurci","țoabe","areta","trezi","cifră","pasat","artag","miria","lepăd","șomai","capre","cauze","mișca","dalie","umfli","dudău","uimii","desca","laude","xilol","cetei","lupii","tuții","vruna","surea","rupie","serbă","mirat","plită","imami","fânaț","urare","pești","omori","afișa","pifan","humui","breza","teapa","masiv","smard","aduna","costa","penny","moșan","puise","sudim","tatăl","redau","releu","penis","lupta","emiri","grasă","lăuse","baris","samba","gătit","fason","supar","etaje","rujez","zeițe","aveti","molei","țâhla","leasa","pozăm","huhur","pohta","șocat","ducat","mânca","acant","joise","scafa","dorim","cucul","ateea","olcar","brusc","vrace","spire","cheag","țânce","izbea","nasia","lamai","amuțe","leuti","puiau","mladă","scită","falcă","lonjă","fonia","dogit","gavaj","enoți","kendo","silca","batat","gătej","luxez","jocuț","dupac","avers","raclă","zețaj","curme","oocit","ineme","ăuiam","minai","biped","muson","mații","semen","nevii","belgi","podul","capsa","vajoi","aperi","gaiță","corup","beton","țiglă","obidă","milos","toira","uzase","epiul","emana","umido","glosa","cârpi","haine","noime","băură","piemn","sonez","coree","varie","abuza","duhni","boxez","sextă","vocal","micea","vidaj","șaibă","lates","lăsăm","sărar","nandu","sufle","jugul","paune","arcas","nafte","zanat","omisi","sumec","selac","duste","vărsa","crosa","indiu","volti","grupa","prude","palat","tâmpe","pejmă","nuzii","torid","piuat","optau","diena","resou","lifta","muști","asmut","rujet","fionc","mânza","zbatu","sacou","popri","usile","betei","popei","dauna","inima","saros","visul","apere","jigul","laura","fixai","filei","medul","solia","acera","turul","tuția","margă","podar","tânta","obiul","lenaj","blegi","tibii","bufni","bufna","senal","buiac","swazi","grece","nabab","cumas","aripă","ceauș","ludul","mazul","apuca","lesta","punul","clipe","dolii","inari","acuși","ionul","gurui","supat","grase","neviu","țevos","sacul","barzi","udare","itare","geode","havat","altul","orzul","zaici","dresa","bocal","acnee","adape","najna","afumă","picta","ocale","juști","tahni","șutai","hasti","turle","leone","binis","tesem","lavaj","vataj","leala","tolba","cătur","optez","sorii","felia","soios","treia","eșuat","multa","fanar","tinos","prezi","moral","păios","turce","licar","horet","tecul","umplu","catea","năuci","țăruș","dayac","carib","merse","șarba","pupăm","seișe","fugar","repeț","abaua","imale","rogoz","bruto","carca","dictu","rufei","gamba","rulat","flete","laici","bâhlă","expun","capse","punci","estiv","turtă","armam","pateu","purgă","abțiu","orbii","tifos","povoi","silva","limul","razbi","focul","poxie","cuter","jupon","axuri","aliat","irump","bufni","iodat","orlon","mesia","rouăi","fungi","locus","linou","polul","culma","coții","ureea","osari","ratos","scale","dania","salva","răcar","sefei","peruș","tanas","bălai","botit","rupte","chiți","sixte","clota","iveai","rapid","fobia","tisei","ginți","nășit","canar","musau","conic","fuzel","varve","hipic","scarp","nucar","hățim","ignar","lepră","părău","agavă","căzii","juice","comod","manat","duște","khmer","redia","teacă","namim","popri","tătar","opaiț","vărar","giace","mezin","sugar","gheți","final","furis","tuful","mante","caldă","tivgi","jamei","maiul","mione","motor","miras","mutei","supin","cerea","nepei","guzul","motcă","ghinț","termo","delte","helge","vâjea","calam","serat","tivit","finul","oceli","juste","misie","agiei","gemen","ghete","tuici","plase","fixaj","mulgi","buzna","ulmul","zoppa","lizat","cliva","buclă","dictu","mirez","silan","perși","betel","țarat","guano","țiuim","jamne","fleșa","urina","epila","codei","fesei","codit","slavi","iuise","căină","cloță","stați","adera","hotel","poros","cerul","ratan","elena","flasc","durai","oțera","armul","chiau","necum","maree","rafii","negru","ioniu","damei","cluul","halii","viole","sterg","țiuit","grade","cobră","căiam","breve","eonul","Hades","fiice","șelar","lanci","dânsa","iezea","pubis","eroul","uzaje","nucle","rajah","ditai","boema","fileu","pruba","citii","ostim","pledă","tușit","orice","ivita","mulge","rodam","relon","barna","nazul","cubic","tapam","plice","trezi","ridul","emiri","ketei","brodi","birar","purul","clasa","parai","șinui","aleze","gudur","pompa","abili","șinor","exact","slave","trema","hatia","raboj","readă","areți","rasuc","rozei","cireș","rolan","șeici","doagă","firma","căzni","neras","hotar","junei","sinie","jacul","lupți","raita","biata","poame","locei","pafug","grill","citit","pisic","buhav","getei","nanii","obtie","batel","brute","negii","rosit","agrăi","roiși","erodă","omită","buise","limul","cirta","nauca","huiet","ideez","suita","agent","sugem","alior","uimul","repar","graii","rugea","murez","reuși","pegas","acușa","calpi","iruri","asude","dulce","echei","pășii","șiace","ivite","rupia","rulam","carti","aprig","dejoc","vadim","fuzee","funga","pofil","coroi","fiola","zulus","uzata","jneap","lutui","jonca","ridat","gerui","abtin","cadra","funie","armie","jucam","caule","ștepi","gnais","darii","cisle","ancii","monic","tipii","aftei","alina","naval","eziti","parol","fibre","scula","sigei","huila","filai","aflăm","expie","sluis","hurcă","halbe","havuz","mreji","ițele","midii","ambre","pisam","benti","bacit","udeau","penaj","pahai","roibi","treze","okume","tance","isopi","augur","bulat","codat","solbe","husas","socii","toace","aerob","țânci","japse","eroii","magot","berma","causa","maiei","arara","cutei","dobei","obaht","bizon","feder","isala","iuțea","oieri","seduc","aiuri","galop","alcov","sedem","tiind","scalp","regie","racle","inici","levei","tramă","spion","agapă","timia","mâcăi","epică","cojit","viuță","nulul","dodea","brâna","zabre","inhap","spini","velea","nouri","nacru","jupui","hotei","pușca","tipai","widia","vedei","gresi","udire","alibi","brava","visăm","oloia","randă","maxim","barii","elene","violă","bozii","ucigă","lepai","godac","clime","atest","bazin","iliac","ciudi","slang","pitic","pârai","aflui","popor","tunși","gamei","tatei","solzi","maind","bacal","cofei","orgia","falsi","culii","roche","gâlme","costa","sadim","vasle","totem","pahar","cramă","anion","iovul","rasar","javei","turcă","cazni","boaca","pesos","muzei","stepa","colic","doica","doape","tusam","capes","buisi","mumii","coran","binom","lazul","crabi","azura","molia","terii","ceteț","visau","plese","sista","bâtcă","gaiac","cănea","kinas","horde","ecoul","forau","surla","îmbin","sving","iotul","amide","cruci","sular","targa","leșin","sefii","tosul","geaba","nafta","copre","pavaj","bocul","plang","kakiu","polci","pulpa","mirie","clape","gâtul","boyul","drețe","icnii","păiri","cinat","virid","zebul","ursar","dârau","fumăm","inimi","nitro","apupe","pârgi","domin","dansă","meșii","ailor","farul","hippy","codaj","țârfă","urmas","urzar","pitar","firiz","torta","cnezi","târla","icnit","orcul","loial","glasă","ieșit","ovate","ghidă","input","blide","racim","stopă","tolii","ziler","copre","tizul","tuleu","bifez","bravi","mance","vinci","hanap","zăvor","idiom","vasce","trași","puste","apuli","cuțit","șteap","prund","metis","pitii","penis","cojim","beata","gaeli","pantă","șuste","ispas","mimic","bente","griză","balta","merlu","revoc","aceri","grila","răbdă","urmăm","sofam","gales","clamp","aidam","colet","bugle","flora","harac","danei","mirhe","retor","clara","găsii","arbuz","lupus","pruna","genii","vuiri","jderi","eludă","clant","cobra","iazmă","țiind","limfo","lezat","gafez","crile","piețe","smead","bezna","podea","seizi","galeș","cloțe","arșii","lizol","soade","viers","motto","lande","îngân","raite","tomul","noime","cojoc","slove","răgii","picui","fasul","șarga","buhur","aurar","grupe","casul","mozol","prian","mazur","urșii","hiler","zaduh","oftez","rusce","dalaj","prese","lucși","opiat","corla","zidit","useri","tiplu","jubeu","defel","algii","bumul","baraj","șiște","manej","călâu","pansa","lidic","pelur","cremă","daltă","ascut","cotar","garam","dedic","vasta","rarul","răvaș","godeu","gaici","cubat","molan","plano","astri","betel","pazia","incui","padie","otari","hăisa","summa","cosit","viind","repar","foraj","ochet","quick","oarei","vâșca","alură","buhna","kaoni","state","casez","dărma","banda","nursa","panii","index","rabat","vâlfă","auzim","astma","desel","trude","mecai","tocam","sudez","madam","imerg","iofca","colir","sasea","coțcă","orfan","jujău","răvar","rădan","aoleo","stand","rizom","epohe","cride","ossii","viele","iteai","ortul","moloh","lebar","docți","boiau","cinel","garau","cavul","balon","farin","iereu","ochlo","caiai","mulaj","tigră","rangă","porif","heiul","molai","domni","iadeș","scazi","careu","crose","efort","greti","poxia","lașai","linte","laful","baros","arida","vărga","punic","darul","domul","rablă","sobei","carii","adusă","lucii","dârză","miram","cupar","kabil","iubit","amuză","carde","menta","lagon","proor","smomi","tăcut","minte","bizam","trico","izlaz","gurut","sparg","bahna","pohti","etati","roază","ugnim","voleu","tenda","banei","linii","gafau","turci","șaica","codri","jilav","frate","ghebe","secau","hapai","cască","leton","pupui","ceair","alura","îmbie","slana","cociș","către","linte","mizat","urcai","chele","gonim","joacă","ornam","dulap","boiri","aflai","melos","trata","gemăt","adopt","uneai","gauni","vates","anini","alese","hrapi","varga","bobii","robii","patii","artel","cloța","mutră","binta","piano","bufne","podim","urăsc","etufă","tonți","scria","cofra","moara","leton","luxos","regat","marți","forai","triez","hexan","kurzi","nevul","avati","tăiai","peste","mațul","satul","diblu","drama","gambă","coxei","donat","sunai","jegos","tisul","cosor","clocă","obidi","senei","osmiu","jerui","ruina","mornă","poste","jelii","storc","futil","hăiri","lombe","soimi","majii","spini","bezne","pilaf","ovine","manșa","carib","triod","dativ","rulou","budei","culeg","zoril","hăști","zăpsi","carma","ierna","nurci","poetă","tasti","slovo","infuz","osuțe","refuz","gumei","zonal","trufă","itesc","gradă","clici","jabra","radou","prașe","irupe","șutat","tanci","topic","lusin","senar","talus","sputa","ciobi","diliu","posac","sapam","tăuni","imune","nudei","uciga","hașcă","împac","zaifi","imite","șutăm","huiti","agate","țurca","talus","degaj","cuhne","zbeng","munti","opiul","armii","psalt","cânii","mirau","cavei","tanji","aerau","etola","monem","sumet","cobre","sisai","lecii","graba","iuiai","ciupa","uzina","donez","balii","avlie","dimie","sudac","dolar","oranz","netot","bufna","lucru","ateea","rabzi","iepei","swazi","metod","latri","nitră","buiam","fosei","ocupa","auind","haiti","gurut","notat","firez","nabor","links","sumar","presa","bauni","honul","minți","cepui","huise","grimă","jiana","local","seima","razne","spusi","oberi","vălmi","șuiem","lieze","roabe","sașiu","boxau","râpii","mojic","terii","civit","pufna","zbârn","macii","pleda","graur","citau","puiti","hăiră","capia","lăzii","pline","curta","suvac","lipom","reiau","caram","delia","parli","etena","conex","cecal","șucar","avide","gacit","matar","cedru","robim","cella","scaii","onora","mosso","roiai","pohte","mulse","farme","cirtă","rujul","boson","capră","hului","valea","devlă","moloz","taxim","căulă","strig","semit","orexi","roasa","banea","falce","fixam","taras","zuzui","nenic","sucea","decad","teism","șumar","tinza","goana","lușam","ajuns","măluț","arneu","notam","urmii","bocit","drive","biber","iarzi","săcoi","halău","șuiau","bâții","buzăr","fixei","amară","spusă","dozez","story","popie","casii","fâșăi","alame","puiut","retie","loden","vulvo","grime","kamei","marje","simit","dogar","retur","râmni","ogoie","tapez","lângă","vague","iaurt","racni","albii","nadei","nocti","faști","rudit","refer","bâtei","jacas","berze","reție","lamei","altar","darmi","oprit","detei","amili","ocnas","crițe","plica","șarbă","vizam","vigul","suvai","sacra","teist","gripe","punct","curry","demni","mopși","bluză","cazat","dupce","pubul","bantu","ezite","șumen","tomna","avara","țărne","horam","haban","nuori","nălbi","conte","bâhla","nicti","emani","basne","râzna","epode","valii","pizza","visai","fonte","piaza","bosul","invoc","esuam","acută","butar","piuez","calos","câșei","crupă","sudau","moină","pocii","pocim","hogii","lucit","armân","jacaș","medii","saram","pisăm","banca","serul","horau","umpli","pupei","chila","codie","uitau","șarje","hâzit","creol","sevai","poeme","redau","legat","boise","silhe","majar","copie","șleii","arăta","muiat","rromă","aduse","macho","horda","ciute","stare","ranse","idoul","vidau","surâs","infia","scurm","iulie","tragi","socot","cerem","deții","undim","ațița","spârc","afona","gerat","micei","jalet","rugam","rotiș","farme","șanal","zăhăi","vomez","vadit","călcă","lisul","dorul","porni","pisti","boboc","tulit","antic","curai","colti","panus","verse","panou","strat","lento","zidul","daoli","setăm","ludei","eroic","spânț","odaii","ouări","provă","ughii","valid","rezum","fiind","dieci","laful","plavă","talar","auzit","suiam","duzei","rimez","tropi","nalte","antic","blitz","punci","lucra","piese","curca","șulfa","larul","otaje","înțes","scană","horea","ajuti","țalii","ujuie","jalbe","mizam","grece","iernă","uruia","coșea","acare","curii","teugă","bisul","vreji","rasii","așezi","trend","murui","orbit","opusa","volsc","jupea","sugea","furcă","hatul","oseți","nucul","etica","volei","oseti","stază","aeraj","rugau","tinși","mecet","hiade","agili","țuică","aurel","rupta","deasă","grifa","pacla","hleab","ieduț","vlahe","oftic","exali","fuior","guelf","halal","aurie","ursin","tecii","turna","bumul","tesle","blamă","zoios","reniu","tradu","fonon","suita","clips","țipăi","latex","ocupă","înota","dodit","egală","viuti","plata","praxă","miaua","șițar","croii","celui","epure","peleș","romeu","tuhal","sosit","suhat","moțăm","coșii","forum","basii","pățit","istov","tinde","evrei","luași","fișei","pișam","moaca","tizii","scapa","țocul","zerar","psalt","tepei","napam","nitul","adere","manie","mefie","undei","grane","moaie","vibră","râpos","pesin","acria","lamam","fosai","mafia","verve","pilit","fidel","inita","zguri","selbe","neică","vopsi","satul","ripam","podul","iviși","parăm","bucșa","schit","liude","ăuire","rodan","borza","asize","zmeii","zisul","vărau","gaize","sașeu","clonc","ebosa","munte","ignei","curez","tivai","facea","șoldi","batic","ruaje","zișii","sarja","aluri","codaj","gării","uzată","taraf","copan","baroc","carta","sarai","răsei","timpi","tivil","liota","bramă","eponj","lelea","forța","dinee","marul","șiret","maxit","ițare","îmblu","telur","olori","bufet","setre","sogor","becer","recif","scapă","lizăm","ireal","farbi","orzul","geana","uhaua","tunza","afina","piuăm","cutra","circa","venus","cifre","culme","gumăm","hasma","halfi","oofor","oleat","ajută","aprod","oloii","talan","curga","colos","cucut","rotas","bruie","catul","dalbe","dinam","maișe","stric","pârga","mitul","decad","rotăm","miile","vărsă","yetii","larvi","haine","sadei","domnu","huițe","cacao","angor","lovit","bucea","probe","serie","obora","sorți","mazil","metoc","crape","carai","pluti","fisam","iezii","canin","aleea","mimai","băsni","cifra","strug","picuș","căței","demne","cumul","orară","sonii","tuior","relee","gonit","șotia","lunar","griji","tipia","buson","mosan","misit","lusii","crida","ramii","ratăm","turnă","sopei","piști","urale","uimul","omfal","guano","cosim","bălța","jucai","stroh","riali","hopul","ucizi","lingi","bigot","agaua","jabii","sacou","pasim","opise","mazal","nălță","funda","cadou","peoni","lauda","branț","stele","vicii","sutea","punii","vacuu","fasta","siloz","leița","svaba","trend","crier","racem","oligo","lipia","sunna","bahic","molam","prube","scrib","tufli","uzină","colna","bunda","hienă","țârfe","sovar","sablă","abțin","lofat","cizmă","ifose","adica","zbici","berte","maina","batan","țeste","borta","nicto","lapăd","joace","betei","ulmau","depui","teasc","mayei","vedic","chica","crame","afion","zolea","zacui","eroii","ambii","bizui","anexe","bunic","sumam","șifon","hogei","hiola","tafla","fuste","manse","cârne","drept","tamje","salut","halca","druza","macra","undim","vasal","scoți","alame","apăsă","robei","grata","oftau","grile","băgai","tângă","josul","incep","curge","sepie","marja","rangi","cubau","blaze","grețe","radie","solid","punic","pocni","spert","toapa","neuro","moșuc","ițiși","rotin","peree","menou","agape","udase","rupte","reuma","legan","chide","macru","nucut","muget","vipul","desis","aurei","frâul","oluri","banco","razii","aliam","spagi","lurex","tarod","mimei","hâtru","acced","bavei","armia","pilda","roură","aloul","țeche","aseci","pabai","dupca","bessi","carub","ițiți","lucre","cocii","buhne","optăm","arbiu","bașta","aduci","voiti","deres","nunul","rânji","rujez","clapă","whigi","gătăm","sedus","hidos","drame","mesia","stras","haisi","pusei","dupre","neios","sfiim","aliez","sagui","vieze","garaj","dunei","bizon","sabat","cladi","cităm","joiră","fumul","doape","nemic","gârle","tiful","soise","parți","tuiul","torba","delir","tinsă","afect","bahla","rugit","lohii","pilea","agață","pinii","gasti","verin","cupet","tapau","cerat","stana","tipim","piuai","banim","minia","vuiră","gunoi","zemos","litii","devia","pneul","obosi","agora","ignar","toiag","miaua","bisai","oprit","povat","havre","havai","murgă","sorim","vitea","dever","plușă","secii","tenul","avani","sondă","gemut","sărez","funde","viral","elevi","baboi","sesia","izmei","supui","păros","litii","rotat","prude","ramer","bucii","culta","cresc","pepsi","scrum","guști","hotul","cânte","surpi","sacoi","adaos","modul","atacă","faime","pagur","tipei","micuț","semna","voiul","pusul","rateș","astei","colac","smâci","piere","clote","falim","linul","gaial","merul","unsul","vecia","fondu","hipic","sădit","hecht","șomam","acaju","beati","genom","uguit","varat","potir","nabor","liind","muțim","molăm","solde","anost","moațe","salța","votez","plate","deduc","privă","tufos","malci","poemă","voios","harul","cârnă","fiind","lucra","zvoni","kamei","irosi","penam","cridă","fidel","rapid","lărgi","moașa","pisat","patam","agava","equus","aista","robea","caria","ralul","fatoi","greai","echer","ridic","usori","nopam","vagon","socam","sască","burtă","sudii","ugnit","încot","iudei","zuzai","liste","polci","fraga","fagii","piuau","redat","dâram","iavaș","suraz","cerci","pocie","regal","carne","burcă","iepei","voiau","geoda","sulei","bioți","pișăm","mozol","chere","grobă","calez","vărui","gâlcă","ogoim","piuai","damul","bănos","kobul","sănie","banul","lucre","pașii","kurde","tatuc","pasai","sobre","dohot","iesii","măcel","zidar","uirii","mardi","pariu","vorbi","ducal","seamă","mnemo","noimi","steie","samei","băiam","stima","lobby","paroh","algie","prașă","șumăn","găsea","picaj","hâzea","rupem","sugui","fluda","rotar","nouăi","armez","egale","umfla","trona","buhei","lisul","ionul","uviol","gâdil","căsoi","hrube","vasca","purta","manca","rroma","cinei","sonau","ibisi","acest","donez","pâcle","redai","seigă","lenta","căută","vitae","bideu","iuiau","oferi","dermă","lufta","sclav","ofism","mansa","oalei","tușat","vasca","orlon","prins","teșit","jurai","vacue","surle","cinei","paiut","gotce","acasa","buhur","rabie","umfle","viași","sadem","lălăi","penii","geoid","asece","stean","cazan","luxăm","sabar","rașpa","tulei","sefia","pumei","vodci","maser","urmei","podut","vroit","umblu","mânec","țopul","redus","corci","murai","bosaj","crapi","auzim","sugei","gaibe","dilim","vigia","cerni","hanta","dalta","agată","nemic","soațe","tinzi","mumia","hoție","tifle","spata","gazez","genei","latis","ameti","urban","ovală","luxam","lobam","aduce","evaza","amari","rubai","creșă","șaiba","nurci","ațici","furan","tarci","stema","pisca","verbe","mimez","babau","grofi","spală","mache","paite","blăni","canii","mediu","noneu","frust","bocea","cubăm","friză","glant","zurbă","benei","axați","roiri","tacul","rolan","abdic","agili","fetie","țolii","infim","corup","kinas","fapta","ajura","tăiem","băile","icter","circe","bulca","lucid","manco","lufar","aleii","muzee","detii","smeci","lateș","fetru","sadit","agata","calfa","fatat","ursul","schif","undos","masla","beiul","vesta","pilor","echei","falia","cilii","mango","crabi","joian","ogari","cheag","pungă","jirul","epici","cotar","ruptă","volum","visam","ozenă","doine","ogege","filit","dinar","litic","junei","culpa","jigou","bigei","brumă","brice","zbeng","agite","zooze","gater","mucar","fonfi","boxul","poeme","olaci","vilii","foste","axare","tipam","aderi","ișlic","palee","campi","samur","asecă","leafa","beuta","monem","grile","temea","behai","tipet","fitei","topim","datau","înecă","biker","aparu","capii","oblig","fosei","proci","lezau","paiet","relee","caisă","rotii","javra","expus","helul","dragi","cecal","ahtie","ouare","fenic","dible","ponod","rofii","dirig","jibii","lanii","varsă","vigan","orexi","dedal","trăda","duete","agape","fotul","iurte","beril","gamba","becar","moxei","sfădi","gabro","câini","sutai","bataj","barza","avuse","teasa","afirm","beată","ferat","nauci","pliai","sonai","amino","notez","oleul","bolus","canal","alura","drobi","ulema","lașăm","lifta","tusti","poate","gerid","jupân","geacă","verde","altui","tocma","vâjia","cante","marcă","speta","adaus","imală","osmol","pavau","ducem","azime","radem","dozai","sodul","manji","rabia","vedde","luteo","vomit","gazar","vlahe","brute","agere","tagme","gauși","seima","uitat","orori","fanat","magii","talim","strei","părut","isopi","bedei","lambe","audia","ideai","dacii","vatam","curuț","șaibe","desei","vămii","coleg","dosea","lejer","susur","stunt","scuze","tropa","zeite","nășie","giacă","prour","tizul","modus","holdă","inice","rătez","iuisi","morfo","voită","sădii","roiri","bundă","poală","house","udare","deriv","fisei","ataca","niela","tuica","epilă","vidul","șuind","țucau","sadei","lăzui","evite","lăuți","imund","votul","macau","advon","oidie","susan","menur","oofit","scobi","plusă","persi","dorii","pocea","ergii","erați","bazăm","ralei","toiam","poată","țăpuc","datei","polip","summa","logie","bazoi","mixom","codea","culti","clonă","avami","ileon","boind","vizir","nalbe","adora","borod","riali","ferec","tupai","schit","mărar","fobii","hanat","clone","subit","ovini","mesea","olmii","elfii","tevar","podii","guiță","najim","argea","zooză","rolei","freză","naduf","bănea","zelul","vâlfa","acani","zaifi","zamca","fuste","tesla","lamba","oțărî","lisau","trând","slash","intri","jurau","mișui","cipul","leaga","pișai","frane","paici","tindă","febra","naica","vidră","nalbi","mânci","șuiei","ostie","deviz","acata","sofei","jegul","obăda","gatea","uiuiu","atace","ucisi","bunda","parau","quazi","obtiu","dăoli","matăm","conca","undea","imbla","xilem","nitel","sapei","cerși","puhav","sitei","ustas","padii","ineca","marci","islam","tizic","japsi","ivise","pașuș","fazii","nădăi","scoli","levit","gelul","radom","silfi","șovar","vapor","fisei","maser","agoră","bolii","sutau","honui","steaf","vicia","ursei","afume","punți","penin","rujau","taroc","boeuf","epată","delco","doici","ciung","nouța","drive","catul","creez","buboi","clase","algol","jnepi","bârne","refac","iviti","adori","păpăm","pieri","forje","iubii","tipoi","ripez","rahat","kyati","cosor","căpăi","pitan","coraj","nalbe","agati","spele","căluș","aluri","acolo","silon","roabă","ierbi","oaste","labie","toate","huiră","gluga","supla","inalt","butil","vreie","locel","mocii","kinei","osteo","liman","pulii","cuibă","treti","emeri","hidro","runic","truse","hutan","parom","izbit","orcăi","viind","mlazi","techi","osman","râios","harul","norea","pulpe","valah","darul","palmi","mazil","tivic","bason","șopul","crime","afida","fixez","vuvui","tapat","clină","fisti","burii","somnă","ritul","pusta","koine","aduna","refug","cepul","șeasa","riflu","bădic","sărat","coleg","monac","torti","drapa","boțul","aromi","umere","zulum","exală","priau","triem","hăiau","mache","rolat","jidan","pudul","lorar","xisme","sufla","filon","zovon","amuta","timin","năsui","prica","eseul","hâțâi","ivind","filau","tivgi","voiți","duhul","desag","țapul","dopau","carde","carou","canti","litie","curti","alter","ramca","cotci","mumei","acest","somat","odont","gacim","rabla","supun","vuvei","yuppi","fauri","apuși","reuni","șofăm","joase","toată","rezon","plita","joasa","cahla","țărci","udata","cutia","căile","beiul","roșcă","javră","regea","calmi","ascut","șișăi","buriu","voind","arând","arzul","rabic","șesei","clovn","buire","gătez","perlă","rarim","bănui","aiste","lalai","sânii","ovili","fadul","harai","puște","calea","lihni","usura","afumi","teraz","văzut","pișcă","iușca","dopul","satin","teina","tastă","popou","puita","acidă","epoci","cehei","amibă","foita","negru","gogit","țâful","unesc","fetim","codia","somna","dusca","dosea","mânea","tavan","aidem","virăm","gafam","deluț","copal","banei","emite","șaten","tăuși","frâie","blugi","orice","toaca","muici","cuina","supra","gudur","snack","lapis","țăcăn","chiot","faste","curez","iscai","harpă","fisat","pelaj","hâiam","criză","cazac","labru","setai","zorei","feuda","fraze","maiei","fârta","eboșa","ouara","amuze","cupar","rujau","foiti","voire","rașcă","deasa","iviri","bucii","rigla","binta","vedre","creol","mixtă","ugnim","efori","duram","urbei","șesea","incas","sâcâi","rosia","nosti","avena","slabi","fumau","măroi","vecea","polei","ștate","savur","ferme","uzari","zabun","spera","elful","nouțe","zobit","ucida","ohabe","tuful","catva","clare","taier","mânie","hotar","boric","ciupe","rabus","sumăm","tevui","cobuz","naivi","tolei","cepte","jieni","opina","zodie","bujde","guașă","tufli","cisla","lenci","droga","curea","sonăm","setos","apozi","cosii","grăpa","jupai","tresa","romei","izvod","regla","oftig","orbii","facla","gliom","mosso","fleoș","vârca","stofe","morga","chiar","verui","drena","buged","ignat","sașii","grobi","xenon","urzii","poloș","știob","buiai","virul","undai","roada","oftăm","gazeu","tusat","iarna","redox","acida","suman","urdii","sopru","ideea","foști","gerau","mărea","lipul","dotal","tumbe","potca","copce","brusi","golim","vroia","livid","sulta","bălul","tușei","marut","fasti","latur","matul","apară","leuco","tafta","moțai","radiu","comic","sadic","carpa","lesul","joiri","șesul","cerca","flota","dipod","vinuț","taula","rifii","seric","soros","sârma","boari","gigul","start","borti","tosul","nevie","briez","tafte","majer","jăcii","zombi","gaida","sovon","alani","olpei","patio","alană","hojma","cimei","pacte","otaje","runde","vuiau","macra","bucle","snagi","rolat","urcai","palie","golut","sabin","benzi","venet","icnim","glasa","renal","oferă","băgăm","truci","aseze","zuavi","decar","abata","olive","asudă","lehau","hiena","pășim","bahle","șuțul","ierei","băise","labil","băieș","jurul","pfund","flori","fulul","clară","padoc","imago","otita","zădar","țucam","toiam","calce","sosii","mongo","banos","poșta","roșul","uniră","basme","rigid","surim","dolia","sesar","sidef","salcă","achiu","hanța","ruful","gimii","cazac","lambe","scump","maure","hemul","magii","naive","tunăm","rubia","gaură","dodim","andin","garez","taxid","tarif","holie","văina","muica","pedel","xenie","incit","neuma","boema","dacic","arine","orcai","rumtă","ornat","pfund","tubat","novat","hitit","culpe","tamar","unaul","ruaje","mason","mreja","mugit","zolgă","dodii","efori","meniu","terme","senet","folio","pozei","botos","uitam","zapau","ptoza","mucii","dubas","jante","fulie","șașie","gaica","sutea","udiși","cecen","rumpt","punte","volve","hindi","ripau","dolul","pofte","bucsa","vegai","știre","udeli","mazur","baban","șafăr","aerez","ușure","breza","brâne","uiaga","barni","hasis","omega","socru","lepșe","clăci","țicui","racit","țelea","scenă","iurte","regla","gluma","hilar","ogoii","zenit","lasau","vânos","mixte","stair","vigil","ghida","crane","bacii","somac","aezii","apuna","onico","tapap","ripam","vesta","tifla","dimia","scufa","iarna","ramca","magna","sudez","surul","zairi","proba","băută","glota","lăuși","iadul","lepui","vânau","pruba","gabja","ceros","scrib","barau","insul","moașe","tosti","testa","văină","țevui","umede","plajă","pozna","lisam","putar","surad","harte","liasi","vinar","taole","glasa","pripa","clame","umfle","rilul","celei","tarat","grifa","smomi","aerat","carji","zurbe","bitul","zvoni","tesit","murăm","lenei","divin","gafez","poznă","conte","taxei","badic","privi","feșei","horst","suvoi","lăură","uslas","secte","ucidă","butea","uluit","rumen","tarsi","mosul","sasce","uzezi","pivot","fumai","recul","plăcu","lupan","sabot","chilă","mulam","alerg","altii","cabra","zgaia","șugar","romei","gigai","rilei","demiu","băiat","tefal","pagii","iolei","halim","alegă","serve","masat","zerea","cupit","vândă","manei","patuc","pisar","larii","armul","inova","stimă","hogas","adoră","hevea","gotic","antet","undui","boxat","naică","unime","auiai","creau","hagiu","codea","uneia","placu","bocit","tocmi","durul","misil","jetul","ideal","săbia","relas","seasa","expia","turbe","epodă","solve","minge","buiai","drenă","pernă","somon","uvale","stâlp","hacai","apode","steve","gripa","seină","vajai","aheul","piele","piote","pățim","pacat","codei","ficus","barja","foxul","serai","chete","curma","molet","avlii","stavi","macla","stert","vărat","mutia","adori","avlia","târle","clăii","ciută","nursa","emane","litre","cutea","cobit","avari","oului","lunii","cusur","boții","lenta","rogoz","aciri","cobim","cartă","ciuci","gater","gomei","aridă","apari","dublă","horim","silei","votai","vârși","rugbi","cipul","sodou","preta","abătu","gagiu","combo","diurn","sferi","puită","boiam","cârna","hulei","comod","nopau","doage","morgi","sunet","toxic","drene","korea","sațul","rația","ombro","muchi","savai","bolul","puber","gauss","halte","ossia","inele","clint","viase","nabuc","zvânt","celom","gomos","japei","banit","opreg","kyați","simei","stâng","cablă","actul","depăr","dusei","posta","spoit","dupca","cehăi","bafte","papuc","educa","flasc","tesal","aliau","dihor","saten","cătră","dogii","olcar","șucul","vafei","densi","kediv","donat","palux","fadei","trăia","saxon","narii","lapit","codal","umila","iezit","rasci","hrean","buzei","pretă","janta","gâzii","alace","mazut","ivere","fungi","vapai","xenii","grobe","pufăr","barfe","hertz","șomer","tehno","avamă","selbe","difuz","delir","gulii","sauna","chida","palan","pălan","derea","regia","udele","alean","frece","linei","harap","fieri","lasou","clupa","cheli","umane","fonon","manei","ivăre","aduni","ușuim","umbon","altor","friza","nixis","ramul","mixaj","arapi","derby","silfă","umplu","bălti","jamna","sigle","manca","bocsi","ungem","farsa","poliș","hogea","povoi","menur","buzar","agest","teras","arome","surla","impia","laban","bujie","tocit","beuța","varau","onuri","seime","copră","horit","monic","favus","canei","funia","prică","metan","hulit","voira","voloc","taind","silcă","papul","sisca","iartă","hamit","număr","geală","vremi","grive","fulgi","înalț","slovă","macul","trace","marca","maior","zgâii","suine","oveze","agona","aiept","valma","forau","fatis","gaița","pepsi","lătoc","otavă","hanii","durau","sleim","snăgi","raspe","volte","mutat","butoi","linii","apolo","licee","cădit","adapi","ostil","creek","cronc","quazi","metod","umeri","grive","fulat","vâram","sound","guașa","pozez","ușuțe","relei","aspre","liceu","tapir","huiță","capoc","ouare","crase","zonar","fătat","mâșâi","coama","oazei","seric","pinii","elful","asece","oboli","picon","mlaca","zarpa","burba","tehui","dadei","picur","atela","halim","cozul","tasul","umple","ispas","latru","pecum","badie","filăm","fișăm","ațipi","casla","tiști","paliu","valul","urnim","moara","razna","misca","razul","oleie","rumta","ratoș","voleu","uncia","unuia","râșni","drupa","cinic","boldi","bluff","lobez","fazei","jurau","listă","fiere","asiza","comit","nații","cupra","burie","danez","noița","urâră","organ","văleu","etans","caria","emana","somez","craie","zicea","flote","cimen","straf","vibra","digit","japșa","leuaș","ramie","lovea","duzii","molâi","bisel","găile","astup","oluri","atrag","oable","crede","macre","ripăm","focși","taxat","copai","falei","țăhni","slană","jeler","matur","coaja","julim","acces","hatis","dineu","sumat","cutră","suiri","manii","neveu","chemă","putim","dâcii","muget","hățiș","ludea","falca","revăz","gemui","sicii","bârnă","sosul","erupt","fermă","pârât","călău","tapai","mucul","sturz","pârâm","teaca","sexta","tiara","săpam","oxiur","oaste","zoave","bolus","octan","odată","ivisi","țipiș","ticai","sofai","jigni","ochlo","ambar","toval","soiau","limen","coreu","vinos","blond","trass","scară","cazăm","erupa","idele","slave","temut","tihui","samba","emani","mouse","nauto","lutră","dania","gâlma","maișă","flash","ginii","etern","galii","vinii","valfa","auiră","hruba","cuiut","urlet","drela","bride","fulii","horul","mască","butur","usuci","mulat","bason","canit","supat","țurci","arile","votat","papir","sfita","ousor","mirei","pâcâi","broșa","rumba","colam","jelui","catel","aghii","aripi","păind","drops","amane","lerui","sanie","aport","bragi","lipul","năimi","zoili","selve","venii","staff","croit","mulsi","dativ","acăța","tomul","lucru","umana","kendo","primă","țuțur","board","brăgi","zaică","flată","votiv","bunul","tarau","vidra","spuie","sterp","naval","birui","voltă","cotim","molul","plusa","lepra","tinui","macro","infix","norod","agaua","sânul","clema","fuște","intră","dotam","omori","felul","jetaj","plana","saran","rădiu","aicea","gușii","venei","suple","cobur","cânta","lezăm","poala","uncii","fleac","șiroi","cerat","tason","tanic","screm","zidar","pasti","ariei","reaua","sigma","pavei","tăune","doare","ciclu","poros","droga","sumuț","dilie","bursa","naire","impus","rumbe","quale","așeze","hural","dupii","sfadă","vielă","vrură","tărie","rujii","copte","lacat","expre","dâlmă","susai","venos","daica","aluna","soclu","rizul","pleul","sesil","lizau","suplu","urnea","odini","stocă","ghint","harei","tonaj","lauze","pande","atase","puica","parea","bouar","jigle","apoda","flint","alela","marna","intim","auiri","iubim","gâlci","ginit","erezi","navei","luxau","culta","haini","vareg","ozena","staza","râznă","furii","yalei","pliat","nucal","pâcăi","wonii","zarva","apuie","rasat","gafat","sesie","slane","arian","năsut","acuze","durui","berar","șlice","filmă","parui","bădia","alias","iacei","rulam","azidă","bonom","buira","aplec","titlu","speța","fugos","ciont","fraht","deres","masăm","bășic","țuțul","votam","baște","atuul","căise","arete","negam","ptoze","spate","cleni","pupii","șfanț","gemet","apună","bleau","cepțe","șădea","doiul","obraț","secai","unice","pudul","rampă","uniax","mixai","captă","ocnei","stile","vodcă","ducat","prins","fular","ferme","pajul","freza","axuri","ovata","culot","clapa","tufan","sulta","vibro","nimfe","pajul","erate","moron","caute","perje","stins","octal","țâțâi","cirus","șezui","quipu","aiure","velic","știră","fișam","vrajă","uluim","sosie","hucul","pudră","cosei","rumte","nucet","pașli","canid","fiert","jepul","fript","rujei","circă","silha","zenul","răszi","iscau","arșin","oleum","dumei","bacău","căina","beșic","ginta","vazui","daune","pasul","vario","tolbă","rugby","spade","azida","țesem","vital","gresa","urara","terna","sufix","tunsi","grima","julim","sedez","dozau","aciua","șiita","tașca","tașcă","reper","cuplu","lacul","arete","uredo","gofra","obezi","crâșc","mlăci","colez","sfida","verbe","nazal","zemui","asană","morgi","uscam","docta","leahă","borau","vexil","nășii","opacă","șueta","album","fizic","ricin","loran","lojii","iesle","turlă","derby","japșă","cârme","copia","buzii","neaza","salți","certa","bosul","zvârl","matau","sixta","fierb","vedre","ghizi","ranim","dimon","dulie","pitea","leaha","ogiva","vătav","havră","prasi","uzați","labia","pamat","urlai","pleci","vomit","zapsi","punem","proba","zobul","aduci","ursei","grunz","galba","fault","pacte","faptă","lobau","zapăm","sedam","dârăm","jnepi","circa","dudul","fulul","sântă","vizon","ureei","reșou","seful","mișel","oarde","alici","civil","țipau","varga","bruma","visat","imbia","calif","apesi","crede","sorti","sahel","krill","targa","sixtă","freca","tutui","solul","mutic","rubin","separ","birau","vatră","varta","tarot","glota","sonat","almee","oiegi","onoră","țipar","zmeur","leite","guste","credo","fetru","părem","nenie","tausi","cobor","reumă","cărni","secer","tenor","cepui","gogim","safar","calic","tahan","joind","razii","axeze","migra","joase","sufar","grizu","spese","bonus","aluia","radio","etnia","demei","finim","mosea","orjad","asara","oxido","cumâs","muris","mingi","masor","dodii","heavy","ligni","slova","pârli","cocăi","pomet","datul","lotru","rujam","dotal","vruse","huire","jucat","dafii","routa","negro","olmaz","tacam","gintă","laude","jarul","tiare","oiște","debut","sfiam","crema","batai","croii","narui","gurma","nahur","onoma","terni","sacos","adiem","pilei","otave","rejoc","oșean","guzle","pitim","cuiva","maisa","lepad","dubli","lucea","varec","largi","ofusc","stela","dingo","aldol","lapte","evază","vedea","copra","ponți","zilaș","seimă","imita","julfă","tipei","uimea","țârău","noeză","târna","rânei","gurna","hrăni","acire","sacii","rufet","crupe","rugim","achit","pupoi","setci","corbi","perus","iusca","uzuri","oleom","toast","mejda","teara","grota","uisem","flirt","sleia","fatal","longi","okapi","păcat","zecer","hobâc","vieri","șutor","nepus","tacta","ojina","dușul","sedat","criza","zelar","ermit","sosma","lații","sarme","gemin","rânca","julfa","atent","dupce","dafia","penau","voise","farin","spute","triat","ultim","zadii","garam","banco","pâini","iubit","sesie","situi","chetă","patat","erate","tibet","japiu","băcan","rodăm","foiși","cutez","țipat","atici","erbiu","izvod","iliră","tunul","palat","oiste","frână","velit","boale","cotit","făina","dolby","serii","vâște","ursea","sosim","cluul","lumii","sihlă","șnaps","maslu","rapui","amuse","huzur","tweed","apare","salia","lehău","urlet","urica","emuul","calmă","aliaj","ohmic","velim","bahți","algei","dasii","cream","rezol","binom","creai","camee","gonit","exist","viață","supam","roita","heder","liner","maraz","zămii","saltă","târâm","orant","uzara","jupit","tunză","juxta","taiga","vatui","treze","bland","grave","abras","otite","morsa","dicta","conga","ciung","ninga","tivea","natre","barie","dedei","ravac","devin","gelos","capiu","fugii","mimam","apida","coasa","gaida","lucim","abdic","basma","steni","ptusi","ternă","ricsa","gabje","apuca","jipii","snaps","limax","evaza","mizau","drâng","borna","unita","lacto","speze","kaliu","tigra","tisni","prase","mnemo","netot","devie","lugol","ivite","manii","junel","agile","teică","fiica","pustă","pedel","lumeț","lipan","ofuri","rocii","erata","decor","taxei","inite","ăștia","maroi","ataci","recul","ecran","brodă","kurda","cuhni","herul","tiuim","arcul","așază","atona","coada","tivit","aista","momea","popii","cahle","opust","firul","ornau","calin","haină","clomb","lenit","ițită","ileie","zeghe","budăi","barii","învăț","oxizi","gazda","leasă","fadul","roiau","trans","rubla","tracă","potăi","radem","hopai","dușii","halci","cadre","molet","brici","toiul","haiku","chide","țopâc","racla","posta","armau","jecui","alune","infix","cipic","hăbuc","korei","uclei","ganji","dosit","mitea","hatri","emers","preda","ciobi","cojii","pupil","fanda","javei","bașca","tivli","prasa","glajă","ilion","triod","huind","băraț","julii","amica","sobri","fantă","muiem","impas","pagur","berne","acera","epava","selve","buric","volan","amiez","obrat","acria","sumes","udind","beați","migai","aulul","ietac","pager","creșa","ăstei","ornic","durzi","pătai","avare","poxii","plave","bilon","ostii","chior","balta","calei","bluci","masai","julep","velei","vazei","derme","iudei","cizme","parie","rocul","mafia","toane","ponti","linșă","curmi","oscii","dârâm","tabăr","carne","lesne","jacăi","hăiam","expia","nerod","ciupi","izine","abați","luzii","ursii","oseni","cârjă","cuvin","molat","ovină","cedat","cupeț","mosti","razim","griza","spuie","liaje","mătur","scart","hiena","zavoi","catâr","donai","novam","barie","oblul","alenă","suiră","franc","rații","chiul","asumă","ciumă","molai","liați","sedai","rodii","gumaj","tapam","lisat","tuție","vuvar","iriza","neaos","nahut","spuza","comis","crupa","zgâit","reali","racea","lekul","serie","lamau","fleac","drobi","mahăr","surul","bagaj","tolet","suple","umori","stras","araba","porti","yucca","griva","șieși","etapă","speră","drege","poste","aburc","nutul","vipie","agrea","exina","tapau","parol","ureze","arcaș","pamam","pețit","otace","zbori","seral","ouate","colic","divid","varam","ampla","crete","aeros","cator","fiala","ațica","pohar","rumbă","șomâc","barda","furaj","rosie","plisa","mâlul","larva","șoșet","opspe","ionit","mânăm","molii","tapsi","fulat","iscăm","dădui","undez","malar","rapăn","riști","sarzi","biții","arina","brind","belii","crasa","sacos","bandă","anali","călăi","zuzet","slute","leucă","fuzel","vexat","zupăi","băsma","rețiu","socot","udisi","seaua","dijma","setos","desfă","vadan","radiu","lepui","spete","nitei","gambe","trene","arsei","buhav","șalău","argon","jabii","sobru","napez","kobii","papei","păiai","zaici","vanii","târâș","hartă","țopii","moasa","târai","hauie","griji","obela","moase","gâtos","gazau","tămâi","acrea","marnă","imună","zamcă","talei","mlaca","rișca","oberi","viciu","ptoze","jarca","lucie","lișii","siric","invoi","stând","cârma","jurat","harta","tuite","nesul","madea","turte","hârța","șferi","curai","trufa","burat","audio","cabaz","tunsă","tușul","arici","țaței","lupta","atent","innod","fugui","perje","dopai","erhei","cocli","salup","ploua","areic","sipet","pocoi","zidit","plaie","cvasi","zisul","nudul","clăit","pisam","cepăi","zicaș","berma","becar","cadii","crimă","pamez","vozât","sortă","nalți","comut","miimi","talii","suina","puste","croșe","alene","nevoi","scana","baxul","justă","baira","molul","caduc","zbice","foite","silfe","pasca","plita","moima","faună","vicie","anala","agila","copii","ăleia","ligul","ungem","anali","aspră","itemi","ocupi","sepia","halbe","hăiai","mașii","ogori","sfara","hares","hapax","zbata","sfori","imala","zuluf","domre","teici","farsă","căini","oblig","mâlos","valfe","girul","etica","azimă","ratei","jambu","jidov","bufan","radio","zbier","pilug","pogan","girai","mesit","calfă","abatu","caret","ticle","estic","ornat","regea","steag","șăuaș","daira","tacea","norme","picus","țarnă","saune","prube","uvula","rapit","lycra","orbul","sonul","rafie","stiri","hanul","batăr","samei","cenur","dutca","aflat","zmeoi","șâșâi","plușa","găuni","amâni","durat","lampa","pudlă","sarau","olive","lelii","zebre","arari","șacal","geliv","oblon","apasa","vutei","canoe","nitra","caror","șuncă","exiga","bracă","craci","ferță","ecler","globi","labei","macat","sport","iusni","lansa","izbuc","roșia","boxei","pudre","muzeo","ceapa","nalti","crăpe","ușița","tolut","sașia","mașai","șahul","turui","budei","turta","jacai","pulie","zopai","zulum","xifia","fixaj","îmbli","obeză","nalta","scrim","areic","aiști","hâire","epoha","ogorî","rimau","ergan","jneap","rugii","dutce","smalț","lenci","uitai","lefti","impui","utili","sorta","urmau","leiti","roast","fetiș","hordă","mimau","ceaun","doare","bocse","dracu","tetei","gheme","trădă","renul","serva","lisii","tiare","foame","salar","nulii","xifos","nuzii","zerea","canoe","iuxte","veros","borză","băbar","ptoza","tuisi","caula","lipea","roind","baune","amhar","buful","beton","sirop","tempo","lipii","apide","alica","silul","zăuit","doxei","gausi","ilaie","sărăm","girau","plasa","nărod","noros","moloh","serul","geniu","pliez","sucna","palma","piane","asumi","vuise","țalul","culca","hârci","jobul","bombe","drene","bauzi","smede","mamei","hurez","valeu","rosca","utero","repus","tunse","băști","penaj","danga","moacă","orcul","preia","hâiri","mieri","vieri","șuler","rudea","danul","codex","rațca","fălim","havat","lohio","citez","banda","palia","coneț","furul","satui","gutei","cleme","faini","lemne","papuc","armai","alane","azoic","undoi","mezon","cusut","harfa","ahtia","lelea","bruți","truba","leleu","cutam","lepte","moroi","neauă","brave","mocea","nefro","soiră","jacul","rujii","sasca","molii","silit","neaga","tivgă","balei","clade","voiai","sarim","peris","sciti","mimăm","dalia","caras","bălii","sarat","saleu","ducai","minez","steni","ursit","caste","havra","tuior","bocăn","anini","fâsul","deșir","argus","cheta","latoc","chiui","înfig","iliri","palhe","druza","bunde","hazne","șocăm","mulsa","zadie","molto","islaz","domni","seihi","stupe","sotul","recit","telii","ohmic","sambo","pagai","sonam","venal","huiet","tamâș","reful","ritui","auiam","tihai","educă","plina","tunzi","prune","sitav","vinar","apasi","voiam","marit","crima","pocni","geros","cehii","hașiș","clade","adapi","acuma","roată","bifid","haple","idoli","scrob","jocut","melon","lește","rudar","schif","pixul","pioși","lumen","midie","sedus","ticui","asaza","tibii","ițari","torri","iarzi","porta","pruji","morsă","nenic","strie","haite","sudai","rașii","bozul","flash","havăm","laița","nomul","haram","dolii","juvăț","corzi","motii","ierna","fodre","gatii","auzul","turme","javre","svabi","aplec","etiaj","ținti","lufei","sluji","luară","ramai","oțerî","polon","dolby","halta","barim","tific","țuici","rebut","aciuă","insor","nutui","palpa","sibir","rețea","limfa","neaua","vandu","mezel","zovon","zuzăi","barsa","fesul","atins","pompa","moașă","potai","gresa","fagur","docil","mutre","silhă","zăduh","danos","atale","duoul","iveau","detin","vibra","yalei","crupa","julea","dobor","curut","udati","grund","coace","gazam","copti","strii","golul","priva","tiraj","ochea","dereg","țelit","zetaj","bezea","quick","crasa","titră","tăști","lapti","nenea","holca","macac","lupic","condu","iarba","acciz","agrar","steme","zarvă","pașca","armez","lamat","buiri","fosni","oleom","luciu","romii","încet","bălan","fulau","desii","arcan","hudei","liber","culii","codii","mufla","irigi","alice","uzand","iofca","popas","afifa","goden","tabel","lapin","adaug","burez","ginim","logia","vătaj","clăim","coate","răcit","ratoi","afini","fixam","ouase","porni","viplă","calut","șfeii","copul","talaj","calfe","litia","mixai","clonc","lefii","varus","uniti","varci","tibia","vitiu","faima","ierec","tesii","magot","acizi","suiau","jegul","darei","viole","rimam","livra","bonti","abona","obadă","craii","felia","misia","udeam","stiau","vroit","lente","rotin","amiba","imnic","sarga","matai","nitui","acăță","ierți","depus","conci","golii","sitar","inger","uimei","șevro","aldui","crilă","frica","felei","istui","simei","ochea","matca","roibe","caseu","cubau","lupom","mirți","fugar","carni","crăia","acire","trudi","nemet","steri","timar","unise","sobra","sanul","icnea","mosor","nemes","deszi","cursă","ranji","olani","param","obela","bocea","derma","ostea","videi","dănos","răzat","plete","saula","lodbă","ziucă","arași","suiei","cojoc","vrila","ciufi","urloi","borat","rusei","bucin","gheba","pazit","frota","foise","briză","anine","ferdu","svadă","cuier","șunci","gonim","colet","xerom","drapă","gasul","papor","șapei","șotul","rosti","basci","anual","janta","pisar","sudaj","țânaș","trupa","tonii","șatra","perjă","cerbi","bufne","borul","șipot","câtva","mater","pamăm","aduni","tabie","țelul","grefa","litei","joiau","șufan","bâzei","justi","jupim","scene","serba","limax","treaz","mașat","mixom","sicar","farbă","bacul","tasni","pocim","sfori","vomer","murit","jegos","furii","furam","anozi","murat","kiang","aliai","bojog","gânji","emisa","lohan","bolfa","mioni","asalt","craia","urară","celar","cirte","oacan","folos","saici","dusii","marii","urati","zarif","manaf","popit","lupie","mufle","depou","viniu","aftei","leici","boșar","ghide","hurte","țâfle","cahlă","iesit","pegas","iosag","adese","spant","rezil","canim","sumat","ochii","hătit","salca","toiți","vrati","mreja","tresa","oraje","motca","logia","doric","briai","larma","lotci","salau","valmi","rigii","naști","pasla","axoni","abjur","rafie","jecui","savai","hunul","telul","bogat","eolit","brahe","viori","rodam","eurip","zăgan","razul","rapel","vigia","cârja","amuță","balsa","ipsos","prașa","ghips","palan","dilit","stepe","malin","tesos","umere","perie","cauni","molau","dedat","scama","gogea","silea","șubei","aseza","cuple","ucise","sanii","strei","casau","mulaj","cucul","falea","murex","zidea","colea","geoid","lozul","papul","cucui","sinia","deșel","popit","huțul","dărmă","bomba","pește","cusui","ilire","parti","vande","dires","epoda","surdă","gâscă","hribi","landa","stela","panta","mijim","beica","vafei","musca","samce","râura","turci","bobot","tusei","etaja","șulfă","acrie","ridam","toron","caței","pețim","comun","print","vataf","tuiși","manea","mieii","lenim","vieti","omoii","alerg","diluă","texte","sarda","hehei","judet","căula","rival","iodic","lezam","calai","pipat","scrii","saula","sfită","scamă","arasi","fotel","ratul","silei","blama","monta","hurta","deism","redam","calci","azide","cotim","zlace","virus","sufan","taiem","zarar","încoa","degaj","ughii","iriga","baita","demna","muții","dogea","molia","labru","chici","murim","mitre","udiră","spălă","lexie","notei","rugăm","radia","atale","kulan","aretă","basni","emisi","haita","cotez","purje","fișca","glenc","basce","prore","seter","timir","cocoț","fasie","geret","insii","arili","porto","țării","purja","abace","antal","vaier","rampe","chite","atone","boram","fisul","trufi","otava","lulea","ideăm","hapca","marda","sofer","hazii","psalm","randa","cuaga","ștras","vreme","narod","buluc","axare","ortic","gemul","azura","placa","hazna","pitei","mlaci","păiam","tocau","junca","golit","lanul","moața","ninse","boson","atoli","fufei","varai","nabus","sapte","renet","torbe","bagam","funii","trăii","ortii","strai","arase","vaile","joite","bidon","fatos","odaia","maieu","loaze","nepus","nimbă","gutui","idrei","vesel","uneau","istor","sumez","trele","lodba","scara","lucsi","mante","moare","uiesc","infim","găuna","axari","favor","sfiim","libov","narea","supei","tuliu","hăini","ivind","vipia","fugea","viran","laiță","satra","ticul","ostie","spada","arata","hașca","sesul","drete","vestă","jupii","aorte","înnoi","taban","cacic","birul","sudai","tasma","pitim","oprii","ransa","săpun","cubaj","tarif","puric","barul","sfinx","mazul","oftul","ignee","dacii","invia","țuruc","butci","alegi","napai","turbi","toiti","brama","zulie","lepsi","tomnă","mucus","tenda","lofai","spurc","soisi","aspir","chere","sucim","ogece","zapez","wonul","samcă","canaf","tarei","spune","jujau","feste","stofe","psoas","sărit","roita","gâtui","dedam","harem","jaleo","canid","acant","gagat","culic","trier","dublu","șipul","rumse","pleși","sfezi","rumpă","briem","costă","gajul","fugit","zulia","caznă","iruga","mosim","luxam","noura","hâiți","sefie","ispol","borna","catie","creat","oblit","balaș","popaz","antum","migra","baute","benzi","gnomi","rebut","saigi","culpa","râură","adaos","incit","truca","milan","vomei","fiică","pilii","hutut","iazig","treme","narna","namaz","clinc","rezec","știmi","învii","mijii","bufet","cerne","pruja","mucor","casca","olite","jupoi","ciuți","castă","noneu","țuști","urmei","hobot","țoala","leșul","silfa","xerox","verii","dedic","carna","velit","farte","cerni","piane","ștand","vacuu","letcă","zulii","muțiu","bolea","urlup","piroi","arați","subra","zârne","dârat","etică","fragi","guzii","mișei","plana","tubei","desul","puiri","afonă","mărit","sfert","festa","rumân","trapă","briau","betiv","spine","obtuz","țeapă","delas","ghici","grosi","mitos","dârzi","toire","patos","fodre","ketch","pulie","baric","hazna","bogze","obleț","efort","hatii","mugea","topit","anexa","îmblă","terci","aorta","citet","spire","popea","sluga","nevul","caile","kagul","mundi","hagii","erele","șuter","razim","sardă","vivat","jeton","tatul","curaj","bazau","trand","jupei","gonii","intin","șodul","păzim","latin","menim","borâi","blitz","hulpe","lungă","ilara","morei","sevai","bocși","etiaj","butca","tusea","cobii","lucis","porci","pohod","mutic","opăci","derme","diate","tutur","asmut","optau","dărui","ojini","dalba","sepia","sluis","vorbi","scula","uviol","filet","plodi","cobim","fugea","tarul","ridam","ujuit","guita","capon","ridau","fixat","stoci","oxali","toxic","obtii","plată","mancă","sărad","creps","remit","funda","ptoză","aedul","derog","furau","humui","visul","labia","prove","micii","pomii","bause","piara","ivira","aprob","zăvod","lofăm","horei","prima","muzee","odgon","limni","casta","salup","lozii","caice","cupei","disco","milui","ungvi","dotai","roman","stemă","jefui","zilos","mosic","blaga","lofau","capta","risca","roște","zurui","nucet","stroh","tufei","zicas","tatut","datii","param","ileie","râșii","laici","frece","mezat","kazoo","trial","soate","arabi","bieti","fanii","orând","japsa","vacat","cazam","jurăm","riste","micit","punta","erati","vătaf","crăpi","codim","gorun","limfo","roite","jupon","stave","amino","ahuri","decid","piuam","sudăm","bytul","snaga","colun","jobul","beute","piroi","boire","amiez","finul","yarzi","ariei","ruine","purii","clina","carul","frete","focar","haple","scris","padii","caiti","spița","tetra","natie","delta","monte","bideu","stimi","melan","bonți","leițe","doara","scună","cinam","mâzgi","lisam","albia","epure","pisoi","izdat","negoț","bronz","fumar","vrere","capiu","setam","oțeri","uveal","urgie","vuvar","poara","murii","ponce","negau","clint","plise","sleii","evoca","ocupa","antet","zurui","fusei","curăm","duhul","făcea","păfug","mayei","reiei","uveal","ilion","aceea","sfada","devla","sufla","cinez","visai","enunt","tulai","pista","bifam","fiord","dadei","tunat","tactă","astmă","tifla","budai","plavi","tenis","beici","ciuin","văsar","pulsă","spori","cojii","velic","arene","daria","fiței","bazon","corle","sexte","rigle","viere","druze","frant","ferim","noima","mingi","zoava","talvi","runei","udiri","ducem","javre","oxidă","bocșa","lufei","tibet","desen","spoii","palca","șvabe","șuete","ruina","obiul","urlau","ginim","bacei","cisle","pupam","ureic","olane","lunga","plici","zarif","pater","ocoli","japul","bravo","șuiai","vreti","dunga","salțe","galca","rocii","darza","hăire","ciunt","aoleo","miezi","înfăș","țesăl","radei","sfada","zicea","vicar","ramer","zoarh","untar","omiși","proto","butii","răpăi","butaș","gecii","mizai","oarda","zulia","virus","erupt","stătu","diurn","aflux","surde","rajah","lipei","liind","pazia","perna","odiul","paros","vasar","cutii","timin","canci","tangi","tărâm","pizza","păiuț","priză","moxei","secte","secta","botei","cuter","chera","zahar","foiță","soare","uniti","adins","urdei","prefă","lupus","caini","casap","tente","țivil","dipod","striu","azură","cețos","ficat","celei","temea","șivoi","bârfe","negel","vidam","lutul","ageri","săbii","teine","astor","erija","joile","licăr","toise","mâlea","teaca","itira","făcut","zapaj","ninși","stane","inhat","silva","masea","arțar","prime","dedal","tufis","perei","septe","bleau","merem","savar","țoale","paucă","diger","safir","avânt","orier","pupui","agită","solde","etală","cello","omiti","noita","prour","ocupe","fățiș","feele","salse","hohot","șiism","silfi","pârei","sevas","ginii","pereu","probi","coptă","jipan","rizil","farad","fanez","dresa","fonta","braci","alini","varii","fetal","damna","beata","molda","paise","pneul","furau","aveți","clupe","faras","plasa","haham","sărai","tiplu","șenal","muson","miuon","mixia","nutri","goala","migme","masai","aviar","talpi","pense","yenii","ugnea","solii","umbra","viezi","lofam","versi","rabii","pohoi","sumeț","talan","uiesc","speri","ierti","șvabă","jujeu","tivul","tutun","palmă","cucui","hatea","piesa","capau","impas","batal","masto","gemet","reful","cusme","galiș","aldin","bahic","duete","doaga","tizei","lânii","jucai","silce","oprim","tarii","jarda","altul","vrilă","doica","sânte","uguit","târse","ogeac","mâncă","fapți","buzii","adora","olane","testă","kilul","legau","sorii","sarii","hapci","orcan","jarde","salip","alesi","clazi","arsen","afund","șopti","pamai","tasau","zolga","pasli","jalei","sigla","ligav","leroi","lesui","gatam","temut","salte","incul","neuri","ogeac","pampa","hribi","adera","melod","irump","spune","galul","mixam","epură","ocari","silex","rumte","agava","secai","sirag","liata","claun","molâu","deție","rilul","gazel","apuse","vruta","faune","sufix","țimir","dalti","aprob","trada","paner","mizez","hârca","grâne","malin","basnă","băuși","litre","ranga","hermă","matuf","gotul","iezme","maret","tutui","tifos","purjă","semet","caiau","cline","devot","redan","avide","kakie","șuiam","graur","picur","tisul","rudii","macle","casez","veche","înmoi","speri","rrome","juntă","cărai","șters","calus","defel","denar","repez","gerar","etnii","matam","cotul","alega","negui","orara","silce","caiac","izbii","agore","ampli","erbiu","style","creat","usite","hâtra","pocea","silve","facto","livră","spori","evocă","buzoi","atosi","nodul","temei","scris","năjit","ouase","fulia","bovin","aripi","bifid","becul","ragaz","acrit","ripai","divei","cauei","pauni","dieza","savur","lotru","putui","mefia","estru","imbuc","curca","elfii","cafea","etufa","iutei","asiat","zbură","musai","mimat","piton","ficus","goden","juxte","utila","tâcâi","fixul","frete","loază","sebum","cicar","rebus","lofam","orjad","sirop","flaut","scalp","damei","cosul","cimei","știme","lașam","ranza","șuiul","primo","corli","volog","negei","iodul","osmol","leiță","ulubă","biter","latra","udind","oriei","buriu","inter","flore","curva","bejul","taxau","pliul","boiul","pății","estaz","scote","tipat","agiti","pavam","sibir","infoc","birje","nuori","indol","zidui","milei","decul","lobda","zidim","plece","recuz","vreau","negai","murai","imoși","sucne","resac","negel","ferma","starc","puite","ratai","căluț","ușuța","roșca","alici","hiler","aftor","presă","zmeoi","cerut","drame","răsuc","impli","bigot","varda","basna","micet","caval","filam","salam","vagas","mania","conci","albui","minau","razda","acățe","franc","itani","sopul","vuise","căițe","muzic","vedic","ofuri","ungar","momea","borta","liata","reții","retiu","lider","pasui","vanul","urzit","trude","hauit","muchi","oiței","aspri","induc","bugla","hatie","vaiet","plava","dible","godin","cătăm","șterg","najna","înșel","kerul","pupii","dedăm","lizam","parga","zânei","nipon","etili","ziuci","uzeze","sasce","palhă","egala","sacai","ujbei","iuind","malul","citul","posti","pontă","șutim","arama","plica","vanez","mobil","oarze","bicas","tiuie","iscai","ardic","uleia","rărim","hăiși","exist","uituc","tosca","sfiam","rasei","uedul","obosi","picuț","tiuri","celți","valah","grund","ducii","aceri","denie","maner","caise","bagea","epiul","mixia","guard","nării","timia","borti","ursoi","gelui","equus","farbe","infam","covor","sinet","tihna","lacra","rânză","nutri","netei","darac","iarba","gumam","galbe","bardă","apere","ratie","rabdă","muzei","alert","iaste","opale","bluci","boier","pucul","tahân","ceala","orele","gliei","momâi","hogei","ațâțe","salce","pusii","gazon","erect","vaste","conul","urzar","supăm","cecum","drogă","ulmai","mixer","croat","vilit","oturi","văduv","resac","lelei","rigle","tinem","etala","topim","jenei","birou","zobul","turul","uscat","muhur","lacom","irbis","ninja","guard","hecht","butan","sarbi","piser","napii","lebes","nisei","corfa","aptul","fetei","porul","lehăi","năuce","lestă","zooze","holbă","impus","saună","epavă","marge","marca","irozi","năduf","jenai","picou","demis","dogit","sfiet","lobat","pipam","tabla","scafe","vilit","robot","mizid","grasa","tabun","sugus","coviț","nexul","mergi","sexul","buret","umane","mefie","lății","dafii","iesle","graie","vidma","linți","tweed","minez","geode","rupea","supau","tarii","vinil","oacar","licee","bleot","foiai","teste","orșag","seism","decat","soldi","coteț","selvă","darje","lupii","lonje","verde","najne","golii","tipos","conți","fudul","basna","șicli","tecii","cloca","pitoi","bihun","garau","zeghi","ampli","baiat","mânaș","plaga","ileus","luase","tigva","xilon","foste","baset","dumic","purje","romul","malac","tuiul","bufii","novac","tulea","secat","smida","impii","dozei","capon","corbi","efect","inica","maxim","breșe","virez","tranc","covru","votau","mauri","hutul","oabla","dilia","hunii","tării","dosit","lobăm","bujii","areal","gibon","toale","lăcat","xifii","mulez","sovai","puști","doapa","prost","elani","musti","cheie","talia","jerui","cupon","oardă","murgi","avene","ladoi","barej","ițiiu","clisă","câșii","alese","melul","palme","soiul","tunde","ierhă","lotus","viral","piște","gecko","rural","afida","miței","juxta","pipat","tăria","ritor","căiși","spăși","ladin","frici","sasii","cedăm","negat","mizăm","decât","habar","redus","urzim","pârâi","nesaț","puiet","stiva","sedii","durut","lupei","oiaga","gomos","amușe","agrai","iovei","narnă","tutea","cheta","clape","diezi","auiau","bifei","dalei","naște","vidau","ițite","boiam","căiau","reume","curbi","leica","gotca","espun","aieve","etate","alcov","calam","cetea","glodi","tunel","opuie","jitar","vaste","boața","uiram","țevar","maici","calit","copta","copte","uguia","poluă","litou","depan","ateii","modre","silvo","fixai","rimat","iaste","tonii","bitum","neaua","bârfa","abuză","piure","rigid","adast","tiuia","gerez","aprig","senei","rival","stupă","chiau","cretă","fiare","reluă","eonii","armăm","sfant","crier","țârul","gerai","lăute","pulia","chila","nașei","variu","galei","mosia","batui","scăpa","mocim","galiu","tetra","tâțoi","palos","abrog","alegi","terni","tubai","blagă","scune","kumel","surda","ranci","greăm","jurat","citat","săbău","opera","lacră","vulpe","rumpt","colon","salai","neant","mijii","lotca","afână","limei","haios","carub","voita","aiura","trass","buiam","harfe","lodba","catch","hamis","huiau","opusi","botca","ireal","calau","husei","negro","mucus","jărea","seama","wații","irige","lobai","sirul","zagan","mizer","refer","zaica","mănos","tipit","avans","arunc","zigot","sfiii","preia","sonic","iușcă","aripa","sapia","murid","basta","lepăi","treti","susta","papai","nomei","ovata","agave","palha","reali","spuse","caiac","foiau","jabre","varda","buind","uruii","normo","nacaz","gasim","tasta","raget","zmeie","dotai","emita","facut","ăstor","tătuc","colin","șasea","adulă","vomat","muche","exigi","fetea","sudim","avenă","robie","uscam","mungo","labri","ojele","cislă","caval","lăpăi","ramam","plozi","ferii","bielă","mesii","petec","obeza","otcoș","lipea","oftez","canto","olaci","hazit","agona","uimit","femel","foaie","oleic","fiice","oaspe","foiți","șiile","pojar","bobul","glaji","navlu","soite","rateu","altoi","rochi","arsen","bucsi","grefe","arăci","moldo","lejer","suava","vagii","dinta","jambu","iotul","silui","vinii","râvna","delei","peree","expun","pufni","brici","turei","prudă","gândi","casta","uleia","mitel","frust","sușei","romul","uleul","eziți","ardil","jepci","reniș","roasă","votiv","urlui","ghioc","oxiur","eleni","algid","docte","rumți","priod","cutau","măceș","obide","grafi","valma","rețin","mufei","șarle","putea","luxat","curcă","humos","nunti","lozie","țechi","sinul","lucia","moloz","corei","gazam","cnezi","luări","chită","natra","gumau","udiți","sopon","altui","pamau","boxai","lobul","usucă","pozam","iubim","norme","misii","geodă","augur","jabou","masei","trupe","unici","pedes","muhur","arsii","jărim","bucin","hifei","verso","fanii","kipul","arhon","meiul","rodeo","drain","ocăie","piuia","turce","jefui","naiul","băiau","sivei","efebi","opium","porte","atice","fărmi","reglă","cangi","rugat","fagur","selbă","gâște","samca","pașei","zapat","timar","liase","polos","palca","vigan","osean","nutul","nasuc","spiță","boier","apupă","aseca","ierte","flora","vreme","calus","metro","sfara","puiul","groom","nuntă","bacai","stile","vâlve","seral","daici","erupe","luxul","lovit","gărzi","reiei","solei","roiau","mâhni","insul","preda","siret","senii","puian","murit","undez","dresă","bauta","polul","zonei","svada","smaci","colăm","leuca","vreun","vrând","video","clica","eteri","furda","soare","bulbi","teste","sofra","babac","nesat","sufoc","uităm","udesc","creme","surei","calei","cedau","badii","codăm","lacto","cream","crăci","plasă","oleia","tuiți","punzi","proze","ustaș","doage","dilua","baștă","tocot","oblii","sicli","obada","wolof","burti","tiara","triaj","ietac","brebi","nidus","rugai","feuda","tipul","umbre","mafie","zolim","ivrit","rodai","pohar","cupea","toane","geniu","colea","obraz","râtul","dzelo","rural","sotia","citea","mutai","turti","agila","țipam","etola","hâtră","mitul","infam","armat","moșii","gumez","nămit","getic","festă","smulg","cobai","legic","ițiri","iliac","oțios","jupan","sediu","fagas","sabot","readu","ateei","botcă","babei","dărac","gandi","rizul","tigva","doapă","naboi","hatra","tunai","taram","incaș","silul","citau","tilde","ciort","albim","acuți","picot","oreav","piuuu","axași","iviri","zăbun","langa","uideo","widii","resce","acced","dibla","rașca","penet","botii","iezer","votri","urdii","terfe","calpe","antum","ursar","husar","scazu","uilor","barai","horde","scafa","hatii","câine","agude","quarc","cucuț","lupoi","uluca","parom","ligur","hotii","floci","palme","ruman","afume","sunai","picat","pudic","piesă","bulbi","saseu","piept","viase","imami","ovese","cobra","masat","strut","palpi","vroia","retez","zidul","uxere","kurde","mirha","tivul","cupon","somai","trece","cizma","vagal","durzi","riflu","șepte","agere","rumeg","tinos","saxon","tifan","unora","puiul","adanc","agreă","pacea","dopul","moale","bărat","piezi","ligii","licit","micro","tonti","cecul","kakia","rugul","aspre","molar","druze","ovina","route","serbe","pocal","notez","polar","erete","cetas","afifi","venea","dutcă","mârâi","toiși","lupul","unghi","abaua","podis","otăvi","amina","tușez","urdea","tocul","filez","ripat","aldin","fuoco","julit","butic","taliu","oieri","cosar","galii","mixii","dalbi","banjo","cromo","hârâi","capta","sucit","zăduf","aveai","păiau","liota","narau","micet","grapa","areci","răpun","juisa","ecran","volva","logic","unind","volar","cezar","chulo","dafia","culpe","socii","suras","hoațe","iriga","buche","otice","taste","croșa","fumui","jupea","coadă","friza","vedem","opuse","ripat","șofer","baban","somei","edeme","soset","votri","omita","soroc","fecal","ogoii","ostia","aerul","fumar","mașau","forme","slabi","vreun","hertz","gravi","șerpi","ideal","talon","evada","hulim","obuze","tigri","valsa","flama","boxul","rodan","devia","mială","pazei","rates","istov","zerul","vadra","labii","tumbă","satâr","primi","bățul","boari","locus","dilea","patut","silim","cerbi","macră","oțăra","tusit","drusa","vaita","mamut","rudea","garzi","licur","urile","sezon","bilei","oarba","samce","adapă","grivă","fărme","defer","staza","nunti","galme","vicia","pilot","dilim","zelei","iazig","zbier","podii","bănim","evins","maiul","serei","forma","menea","kurzi","pușcă","lucri","palpa","urdin","domin","vâști","videz","ecoul","lumea","lobez","danța","pasau","ortul","bârse","ierec","baram","simen","salte","imale","nevia","raite","samur","druză","bâhli","acere","pumni","topos","haznă","suave","grefa","renis","sădea","leșii","ușuță","stofă","picup","izini","sivoi","beția","vrane","fohne","hibei","pauza","fiori","disco","vipii","baiți","darda","salin","țaică","inham","catar","lecit","cufar","tiuia","lepte","dolar","romii","agore","total","șfori","rummy","aloei","plaur","nație","apuce","suman","lipim","astme","clipa","staul","creai","hâiau","efect","fluul","buhnă","gazau","epica","talar","tepii","föhne","adast","ulduc","smarc","pompă","inmia","sofat","lecui","câmpi","bieți","arami","jugan","tunau","spais","hurii","mânau","calpa","ospeț","dulau","dubei","falus","salci","cobit","dumic","clăti","nășia","scuar","oinei","colaj","icnet","nenia","scurg","mioni","cazma","amuzi","parul","fauri","iuiră","tufit","irupă","bocan","uniri","aisor","popul","lafai","veghe","dapar","turui","cucos","vampa","boind","fonul","glumi","fulgi","udmei","uluce","plano","uciză","foehn","rufet","cosea","anume","atone","soaie","gumat","ierta","borâm","halat","tinde","zadar","cazai","fâșâi","ticne","hâita","famat","atașa","oolit","cașul","julea","buzer","colia","rupem","seini","murul","moine","tipic","ungur","fazan","curți","sugem","dârza","denii","indus","xilol","doină","știam","tapăm","cutie","sudui","joita","papau","bănii","miime","solda","redis","silvo","decis","anime","îmble","abtie","plini","sfeii","lapte","macle","ruscă","susul","clică","deism","steli","bănia","farba","itemi","dever","zgaul","evreu","șoimi","umili","temui","jitie","zoană","auleu","ținci","incat","sahan","roșea","nalțe","chior","mașez","șutam","grefe","forat","zeppe","balie","stări","spuna","oștim","goala","mulau","sorul","sulul","biker","radan","dotat","jerse","noimi","foșni","teici","șăici","usari","faimă","buiți","furie","știut","huști","zuavi","falii","imuni","lizam","acusi","eșuăm","boașe","mutie","abile","renta","zobea","împui","ocină","desen","uzine","emiti","grăit","serba","aperi","tmeză","sluta","ciudă","vasel","uluia","khmer","tumul","coral","faget","firma","dubim","plaje","buram","sapca","tabac","solbe","marge","indiu","vulva","belul","opină","trebi","iuira","izola","ucisa","hansa","șlire","drota","adopt","ligur","acrea","afișă","rizil","oveze","crute","triem","herme","merem","forje","pagei","hârți","albie","bruși","vrura","taiat","braca","pejma","natur","ambar","ocurs","narav","metru","cerce","covit","pavam","neuri","otele","setcă","front","olmul","conet","cujbe","harsa","briem","lozii","vatir","clama","trece","huilă","pupai","boite","seduc","ițeai","urgii","idile","bytul","sonor","adecă","regal","urini","șăzut","vedde","tinse","osmic","uirea","călin","putut","mulez","redox","udeli","sagni","boite","nopam","viata","hilot","hârțe","masta","abces","tafne","sotii","tenia","văită","taman","bucul","fluaj","fleșe","udiri","imite","imerg","perse","perja","pesti","bluff","ovism","dilea","efebi","proto","pliau","uruim","decar","civil","tarli","grele","zapuc","ghioc","gârla","aplic","notei","matei","humor","lipie","tipia","mielo","oloim","oloit","picou","nunți","epura","lanei","biată","sarut","donau","scite","ailor","abonă","rizat","burai","bucar","nulei","grafe","mutre","auiam","mamon","scopi","tasez","pocoi","haita","lozia","iazma","laies","ujuia","niela","urâse","orase","zooul","berce","rimei","aduși","rupia","calul","ureea","hamal","mozoc","știma","freca","seizi","țarcă","gauri","zeche","pârte","matur","elini","ragai","rarii","citam","cazut","inter","țocni","cotoc","gemea","vască","oacăn","racii","jeans","alune","mimii","rațcă","anulă","somam","etilă","local","balon","islam","morar","leite","huțuț","pocit","lihăi","plane","linia","corfă","dimie","ateii","sisti","calif","omeni","tunsa","calcă","molat","dopaj","domnu","urmai","năuca","daică","paita","pâpor","mamon","pipei","montă","tuner","direg","spana","burie","jipii","blază","joace","elida","audit","armei","tonou","viati","viții","talei","oblat","burta","latru","cupiu","ricșă","beznă","cocii","expie","jibul","irato","țigle","greci","larve","sălie","eroda","vieți","cușer","vlaha","chiup","andin","suier","vizau","motiv","vânat","șabac","briez","juram","fanal","biban","zeppă","toriu","xilan","desiș","potul","rodin","svart","codul","pălea","ugere","salbe","irupt","lesia","narăm","price","havau","osiei","poise","evuri","spirt","nopti","uimei","rosul","tioli","aburc","daună","buful","hitit","coacă","etiră","kaliu","oleul","râuri","poker","făină","mohor","citit","razei","iveam","buții","glăji","ricse","arșic","fibra","drage","roisi","heliu","vâsli","disec","ghici","ușuit","cheia","ovati","huțan","tihnă","murei","dinte","mazut","mitic","podea","cepul","junii","lusul","falei","șuieț","șfara","lampi","umbli","uzare","ocean","ozene","gaidă","suptă","rodiu","minei","culma","burbă","boșii","bănci","șucăr","azeră","uliți","piuam","țintă","vuire","umidă","apeși","pașcă","piota","ampex","solve","plase","diata","baile","umbla","parși","vălug","sifon","corii","merși","ramez","mafie","roabe","șamul","putit","fisiu","aspra","tarse","aduct","barci","pălii","havaj","hamul","jării","ubace","uscat","ferea","urcat","aclam","tutea","blues","otinc","sutat","tonus","cufăr","roșim","seine","orgii","sunci","arcer","gream","bisam","urare","somam","holia","torța","babau","capie","dâlma","cules","picni","bizam","svede","furai","năhut","hicai","spuze","vtori","armii","sabir","lutos","surim","foliu","plivi","pleve","afine","vidul","donam","lerui","decid","șteaf","tugul","strii","serei","dații","cănim","iunie","ozene","ralia","zbați","notes","email","varan","nasel","amibe","clanc","mutra","horâm","relev","ochet","caras","grupe","cehul","ganas","harem","derog","susul","șipci","șliri","uilor","greau","nizam","lățim","great","hazim","aldui","crite","zerit","jocot","muzeu","buind","vasul","demit","dorut","luciș","scada","olute","plani","piuit","vreri","julit","ititi","moina","defer","fanar","derma","oloia","piron","vivat","sudic","zgaii","avama","faxul","razui","musat","iacii","obele","ocăra","fobie","lagăr","vexam","mucea","supți","urcus","drota","zbura","malic","hersa","vâlci","vaiți","sosma","căiți","teios","ungur","noada","umile","fasii","napau","iosag","tocii","ratce","albuț","curbi","cheie","evoci","nevod","denii","nemti","tonei","zabre","ravna","hotis","ftori","insam","avion","piere","cumul","zelul","japșe","murin","râset","spray","neper","adore","estet","lipse","fucus","cilen","ferec","exhib","borât","exige","zalug","tăuia","jărit","giaca","mecăi","yenul","mugur","guasa","boață","puiat","uicai","erupă","abace","axati","atlet","urgii","marfi","gagii","zoala","întin","sonii","totii","slabe","vecin","cirii","vizăm","șișul","iuxta","calma","scazi","avane","uzasi","apupe","espui","zapaj","picni","mânji","ilira","civic","calde","ftori","halit","chips","aloea","acqua","vogai","tunsa","votru","butcă","pinul","ilari","pință","raiei","husar","nefle","înțep","firme","clacă","kubei","sameș","meniu","pielm","ratam","halva","sursa","vanza","joiai","cotai","botog","briam","lașau","grota","deseu","uhale","siglă","surse","tisei","tafni","zodia","suini","tende","tagmă","calpa","tanar","oftat","lefți","aveai","intru","bătut","arsul","sineț","viraj","vruta","abate","gurme","casat","piuie","dacul","edili","uleii","domră","focal","dogul","voiul","țagle","arabi","culci","sirut","pifei","mango","lazui","super","holba","albie","horai","balei","cuvie","raset","dogmă","asuzi","vriei","galma","oțeți","raznă","fumul","nucul","grife","turuc","urdul","astui","rable","cirip","bobea","scont","dăulă","sonau","livra","marie","docul","urbea","taine","pudli","miții","ierte","păsam","urice","rabar","oleie","leală","oțeli","vizor","iasca","zeros","scota","tubăm","avaet","pacul","lipit","suită","fetii","valet","valvi","buhai","soții","uveea","cântă","oleat","aulic","fetit","gimia","venin","cresc","amuti","cosac","epoca","dește","paier","jimba","pauza","lipăi","uzual","zincă","pupam","șeșii","cacom","alpin","pluti","apiol","evada","maial","inița","domei","cobza","lemei","hatit","stofa","neant","gabji","giram","zacas","aiste","săpoi","pauze","ligno","clown","suvar","vajia","zaife","freta","șusta","hacul","hurui","ovați","imput","perne","dinți","chira","țarii","hulei","sunat","faclă","etuvă","safic","năile","burul","bușel","batii","ninse","bârfi","tuire","basci","bacan","zemos","corac","dogma","rasni","șăgui","zloți","prova","laică","stete","șinar","larme","borat","ramcă","crezu","șerif","faiul","later","băiră","tocma","rodim","dezic","pierd","caște","nărui","ițise","abces","quale","stoic","palce","molde","iesta","sansa","boric","tepei","gheti","dreși","silea","știra","viram","votca","obști","betii","muflă","puric","seuri","auire","spâni","rabin","crant","mițea","uniri","cobei","foios","morți","crază","leasa","taiau","naiei","leneș","zgaur","forăi","atare","ocoli","curiu","astru","cetit","niste","exila","seine","certe","gliei","noura","bruft","spâna","rușii","femei","ierni","noxei","mâcii","dandi","perna","picai","aiori","ezita","rouei","cușac","salse","emite","hojma","cotul","găini","surii","jicni","vinut","poata","abila","musul","umbre","veghi","metop","nafea","prind","sistă","calau","stana","teșea","traca","bifai","haina","bipul","măgan","purim","puiră","curma","bilei","aerez","tarea","tapaj","cupei","gonas","toast","liana","modem","desti","sârba","josul","iarta","benga","nativ","garai","debit","uibul","cista","asuda","vizir","deliu","codaș","abila","bogză","bogza","jicni","chiup","hidos","tăpși","seici","obron","parcă","grăim","roage","horst","bivol","stres","perne","flană","mumia","nasui","zodie","pesos","letii","cuban","facem","scurg","tocau","salsa","craci","rocul","inerm","digit","alina","tarte","dulăi","scobi","lipei","juisă","afuma","mulsa","noian","doară","carab","pasai","clanc","scara","hobac","avusi","tipim","cărui","codas","nunii","kalam","darac","uscau","tăuii","negai","pireu","ontic","dilii","truci","țâncă","polog","rufos","solvă","liaje","clici","eviți","scari","itind","venos","lecii","frânt","zurrr","zapau","midia","sârbi","jurii","etili","forat","imput","secer","rodos","bruma","coade","reped","calai","moace","finet","normo","penti","balsa","becer","pildă","batea","cerii","roase","imosi","huiți","seișa","capie","fișai","locel","penel","uniși","excit","genei","masca","găuri","joncă","netei","orașe","brize","pizme","madea","insei","pasez","calfe","magna","abție","vrane","afide","lăbos","pipai","orsag","iutei","adnat","berta","belit","meloe","târau","holia","uedul","vates","diene","fugii","erată","elida","unici","pocia","slută","oidie","nopal","silan","nivel","perle","tonal","amida","ratau","scund","gâcim","urano","aviza","vomer","salba","puind","jimbă","watii","vizat","otcup","ticul","dance","obote","anala","tanea","hâzii","sutii","calez","ojine","naiva","eleni","buzău","tântă","delte","inund","vedei","chiti","cosim","traga","uirăm","afife","ecart","pusul","cerga","hends","galba","oisti","halca","bazei","tumbe","vital","arcat","susui","opuse","bâtca","becul","jeton","lobar","visco","vânji","sujet","gazul","miime","hatas","urmii","pupil","ionit","pleca","razam","fărâm","culei","retor","fasia","huila","multi","retii","miros","sluți","bulci","uretr","tronă","evită","polis","minam","egali","jarcă","rodie","băgat","laiet","palus","yuppi","estiv","amorf","mașăm","sirep","crima","javra","soldă","gigea","jirav","vătaș","unire","tinci","viniu","oleia","tante","neviu","aloce","tamja","numai","tărcă","arcan","tuluc","zeița","ciomp","rulou","dilua","ciuta","barou","coțca","rumul","forte","zagas","prora","husei","cazai","buzna","teuca","dubli","namit","sagnă","vasta","punga","crini","pasăm","timfi","mnema","berme","suiau","uretr","clomb","varia","țânca","ostit","metop","vidme","fentă","golan","bucur","atele","lăuze","moțat","stire","tigvă","pogor","matii","supau","ameți","metol","ucizi","melul","cavii","viple","ocurg","izbei","ticna","icrei","mițim","ceair","sanda","zapam","seige","zeiei","vrană","ulani","curte","gatar","roaza","lekul","fauni","durăt","polip","mizat","codex","picut","furiș","sosie","puții","nicio","rimai","țăran","ovese","urcau","naltă","rezem","soită","druga","pasle","topii","sumac","ăstui","ziuca","rudim","xilem","boiri","danac","limbi","sutar","blaga","pilar","facil","piuez","mosii","sucit","durăm","eluda","ilaul","tulim","sesei","tigru","rotis","silui","capot","almar","șatră","cașei","biniș","sacri","inime","oștea","slugă","fumat","cuart","misto","vozâi","exină","ceata","amvon","iarnă","bacul","firuț","sfanț","bolta","venus","cuști","fetim","pândă","ruini","tuset","dolul","metoh","meșul","omise","freze","papua","pansa","sodom","frică","ițeau","macla","păscu","văita","hrana","fasta","jelit","haham","gelui","vutci","pârău","belii","rabat","sedam","halda","ceața","slana","cutai","halea","avuti","zorii","sonat","cotet","zooid","farsa","durau","spată","amăra","vrila","novau","jugar","crâng","ginul","sultă","viode","negul","agonă","rodor","câșul","focos","hătea","pohoi","galic","iniei","verzi","penal","ierhe","rijei","aurul","fondu","ușchi","operă","ipeca","denar","okapi","teșii","optat","mondo","halon","lisat","zvelt","secau","exarh","radar","japon","hepar","devii","bifăm","olivă","curam","cladă","moaca","pufii","hăuie","pogor","țeavă","ocăit","perii","firea","haban","nadel","linsa","apese","copil","bolti","jocot","ajura","biuta","girez","filma","draci","gașca","vodca","pipau","sluti","lașat","apusi","jarca","intep","morga","urâtă","albia","nufăr","zeama","iacei","ostia","split","negii","zobii","rulez","paiau","nevro","triai","brose","mitra","ușuii","nunta","buchi","titra","satre","sofau","țelii","cafri","piotă","iadul","batcă","chibz","cervu","boită","pătam","apusa","boeuf","pente","filme","dudei","dasii","halde","gafei","junca","situă","paiul","codru","raliu","areal","cello","artei","pârâș","noada","beret","bezna","scopt","flanc","hrean","șolzi","lojii","dardă","țesut","cupru","ropot","harpa","spute","lapin","ațoși","odios","inmoi","tacit","regii","vidme","botea","lunga","zaduf","stime","ginul","linse","sectă","tanga","zărim","popac","siloz","stupi","căngi","mastă","kakiu","tapos","crini","imuni","etapa","turan","țuhal","masau","întra","drusa","avuta","liași","gagic","esuat","zoave","matam","gangă","halba","sabas","creșe","iruri","zahar","atârn","târfă","ohmul","boțog","coton","manej","hașma","fault","zilei","laxei","intai","lazzi","deger","ramau","căpuș","facui","virul","liara","zețar","călii","gimia","acuză","osana","vidre","vreai","cinez","presa","pasea","fontă","tăcăi","drugă","moaze","baisi","links","fleti","așeză","spina","treji","spasi","rimel","ochim","norea","abraș","tapuc","safir","tarni","matei","biele","zoili","nucle","pahar","neica","pupau","goale","adorm","jupit","codam","tinză","sleit","plani","sasău","fiece","oidia","tizei","detei","abrac","henri","tendă","brese","tacui","norma","svezi","ciuma","galic","glugi","căire","koala","trusa","solie","țoabă","tanau","lahar","limfe","lăută","păire","duran","robii","imbun","jelim","axilă","otave","draiv","averi","optai","refug","tinsi","tatuă","bordo","ocale","coasa","negos","secui","umblă","brâul","radie","sinus","griul","trucă","oxida","front","nasit","ulies","deșce","cupiu","focar","limen","batce","notar","nasul","bagăm","arest","pască","duros","ionic","banii","vajit","stufe","priod","punii","naiva","luzii","midia","barja","cezar","fărmă","bărzi","lisei","psoas","napam","blama","naile","maior","ogeag","sambo","horam","teren","ontic","valca","gagai","fisic","solba","brant","scurm","văile","stiam","vanau","opium","teiul","ajute","servi","drupă","ozona","tapin","pulpa","șonți","miner","falia","ștofă","viril","galez","ordie","nodal","alene","latri","mitit","hotit","rediu","aloci","legai","cetim","gecko","buraj","amiaz","kevir","barez","valve","cruța","uibul","dedoi","spade","famen","gaide","incoa","taluz","șomaj","agiți","joise","groba","epave","mimau","ament","inică","ouale","piton","vaiag","indur","sipot","catau","sinus","băițe","moțez","lofez","amant","crape","torsi","lovim","mania","pitit","darea","medic","carta","ocaua","banta","udași","nopeu","celor","clise","circi","lizez","meteo","holde","orile","caina","optul","prădă","fiale","dafin","alini","avută","băuni","orali","macul","fășii","portă","romeu","saros","ortac","halbă","buhna","latei","doimi","umfli","urină","auriu","incur","mâții","ridai","corso","barbă","lipii","garla","frază","mutii","ataua","filee","hemul","fiset","nascu","vexil","voala","păzii","macar","suria","armat","lălâi","măsai","țiuie","mimam","lipsa","fuior","gâfâi","solea","crile","spuza","vozat","cetit","etufa","iuiti","vajul","mugim","mâzga","freza","uitit","dopez","zăton","cădii","obeze","sfios","vădan","delco","sezon","apusa","golul","elita","puvoi","exala","tatii","naist","certe","nodos","scriu","basic","neted","relev","salep","marse","aurii","topit","naduh","gerez","haina","vinat","sfiai","olana","pasul","nează","tilda","murez","neumă","dărme","gatul","zabra","vtori","guașe","flint","zăsti","blege","baies","cucoș","atașe","reala","stupa","vuiri","rișcă","piste","tărgi","temem","nălța","tușii","hatar","rabia","urmaș","gimie","vanda","junii","atome","farse","cerci","deșeu","hrane","plăci","sevei","axară","seros","eleat","sobol","țușca","hurte","lavra","incas","celti","voita","brusc","oniro","oprii","mutiu","pisul","uzase","tinei","tanaj","tocea","arhar","piuei","scita","smalt","porți","flota","solea","suflu","denie","cucor","umidi","havez","batiu","durui","vacii","semui","podit","pauze","iutit","icter","furca","udise","scune","ralid","pasaj","humic","sarar","palei","șopru","larvă","spețe","capul","coral","adept","girez","panze","puhui","mutei","ținea","jujub","falca","rodeo","nunei","arine","ierbi","jugul","tremă","irato","ugnea","penți","amică","insem","edict","cizme","sohan","scopi","griul","cadră","hante","răfui","garda","jamba","glosa","cobol","bocim","mulul","arizi","gruie","alama","roste","gadea","geros","foiri","clara","kitul","novau","ludic","traul","marfa","pleve","parut","șuițe","pairi","blond","pavaj","lupin","baron","cafri","paroi","tafta","botim","rumba","ester","penau","pieze","fanda","majur","grier","ciufi","aveau","odina","rotii","aurea","ethos","muici","recăl","vasla","divin","tuiri","lexii","pauca","nobil","lacre","rujet","artei","pliem","oceli","agest","lacsi","uitam","scoși","tuiei","credo","blanc","durăi","sparc","uinei","șinei","babac","motan","treji","zbant","voire","mițui","cujba","băire","caset","hatul","șipii","ăuind","otele","prost","iezme","itisi","luare","sudaj","laiei","nazar","narez","chema","mahon","godie","brava","mitră","uvule","surda","dasia","ouati","bovid","balti","moaul","urata","sorea","cotat","perii","hurca","agăți","scuze","rafui","zonal","ochit","citez","găoci","mocai","meleu","usnei","exces","anale","tilde","ajuna","zende","dulie","vasul","gogii","uruit","mutam","comat","hoțiș","zlaci","druga","roche","oblim","țoșca","dubla","pesta","magni","virez","jitia","berci","metis","furul","pițig","caire","țesui","deleg","abate","steie","leale","curve","inert","grade","grăia","orbis","stroi","etape","sedez","hulpe","bisat","sahul","spray","dozaj","norii","fatei","napăm","glaja","sârbă","asini","alege","aliem","zvârr","draga","roibe","hamul","șahii","roadă","pitic","luara","zapai","nurul","sigma","comat","ramce","cupea","metil","rânim","posul","urdea","mahut","iliri","balai","grill","saica","joiti","gătat","bazat","batir","coane","iambi","miros","pavat","fulie","vechi","gumez","rutul","fragă","felie","erect","glisa","sania","balos","nasim","cedau","faine","huița","rufei","țuluc","produ","supez","gupei","exces","dărâm","linșa","cipcă","urezi","sarit","cunun","zurăi","agiul","senat","hobai","sifon","negăm","duhan","ginea","strop","jipat","sarle","aceea","bubui","boita","puite","furam","cuple","ictus","aspic","placi","tranc","rugam","rable","dubea","bucși","balet","urduc","epice","pisau","cutau","curea","carus","negus","godii","timii","cairi","băcit","boțit","stins","musci","juncă","vexam","dusul","popim","jumbo","urdim","tăiat","geala","poeta","badia","mânză","spuși","huile","cotau","ovele","retro","orbea","espus","satar","sagna","povod","pacii","musai","bănet","ruget","fetia","înrăi","dudau","orzar","danci","zadar","topac","iștia","taiga","vaduv","tuiri","craun","vigil","seacă","litic","clipi","sasia","afirm","silha","cărau","tunau","sucnă","ancia","urban","zambo","auiai","filat","trubă","zicem","tarei","urmez","cheii","deleg","rotor","linon","selva","apuse","axări","vorba","pofta","găina","patmă","orbim","pițan","ceuci","nimfa","rițul","frize","caute","telal","murga","lecuț","turla","lupte","halau","papam","ăuise","odăii","hotel","capos","etira","grasi","vaiet","hansă","fumez","leici","halta","karma","tetea","loess","spagă","pireu","nefla","achii","etanș","prier","atlet","batei","înham","stria","vanei","ajuna","bifor","alace","moșim","dorii","lăfăi","surpa","suguș","dolce","rarei","tusim","vozau","stepi","dregi","ușițe","nopai","expui","acela","alică","zooid","ghida","adică","ionii","lățos","urmat","suind","cazul","nănaș","lozia","vomam","inuri","ghili","suiet","paiai","setea","târam","torță","normă","vioii","prânz","tarfe","marjă","lasai","moții","crasi","cubez","mlăji","trusa","calpi","alelă","idrei","boțim","media","bluze","ganga","opuri","jelea","șepci","iedul","lotri","pruha","parie","pumei","gemen","berii","slops","pufnă","igneu","simen","manza","dozam","loaze","gacea","hogii","optim","gripe","gulii","urdin","argou","jotei","nomol","maișa","lipit","mușii","tufiș","masor","osmic","edeme","daria","pruda","timol","băiet","audie","obote","hamut","gunoi","kinei","ușiță","murei","yunga","urzit","meliț","durei","colat","plăți","lecit","copii","copce","dotau","liată","urlui","fiară","grevă","rodiu","tijei","imnul","bubal","jabul","merge","golim","pixul","zacea","farul","nevia","aline","bățos","dinee","beniș","pulsa","torul","primi","furia","tiuii","serii","măria","batat","lizei","bitii","hodei","borii","puiat","cubam","turma","pesta","lusat","vârât","anure","miaut","durul","minie","carda","vânai","griva","uvulo","liant","activ","înfoi","undii","sabus","șalăi","unchi","veste","valiu","ocult","cirul","dănui","fixat","asiza","iertă","edită","viere","relua","vinie","smugă","fibră","părul","hatia","etila","urmat","hazul","depui","ceucă","umeri","duelă","rebel","rusca","ieșim","rulez","bănit","zoile","țipoi","raion","masca","sfera","gătim","burca","adună","aleze","ruine","divei","matro","tumul","claii","pufos","iodul","sturz","zonaj","somna","banui","aviză","lisai","sever","ramni","pocai","bojoc","belgi","guzlă","capan","bosma","teina","luxat","nurse","năjim","gurma","finim","geama","dopaj","balac","stâne","jerba","bariș","merit","velur","hlizi","lamam","glote","irupe","mânui","deliu","capac","jepii","pofil","laser","dimia","mezon","liaze","liane","lavei","usier","docar","arima","solva","jenai","acciz","bărbi","tigru","solar","mambo","ignei","smugi","camei","pound","vanei","sfiau","mator","calit","cvart","remul","vizei","cuplă","avlia","rampa","buton","cergi","pasii","adăpă","dipol","firos","condu","hunii","boldo","sepii","camin","lotei","pețea","omidă","grajd","spăla","tragi","coafe","zenzi","intui","teuri","bacii","gurne","fasei","cleme","budui","huira","tinăr","alior","polii","noile","beuci","hâdul","reviu","anula","pozat","udmei","triat","vutca","roast","noade","hoții","cetim","sulac","târfa","urase","hărți","stiui","ardem","vetri","rujei","minta","miere","havan","curie","dacei","tarac","vedda","gabro","zenul","girat","refec","stava","derea","pitoi","uituc","ideii","trama","supus","rapei","zbilț","pupul","petii","raliu","vinaț","răzui","careu","zoile","asuma","pârii","cahla","glenc","urnei","bucse","kobii","diată","gopac","șicul","motca","hâcâi","bocet","cobre","cruda","făcău","dubim","rămâi","punti","inari","risti","brana","moaie","uguia","radon","tasez","mojar","celea","cocos","zerit","epoha","hopai","unica","calme","lățea","oloii","tufar","vifel","pitiș","uhale","kavei","pisez","sudat","fărma","țâlea","funți","atace","taiai","pisat","ancie","gafat","vraja","hotea","liană","areti","gurna","deneg","unire","jibii","busii","gâjâi","ogoit","imune","falșe","iviră","plati","țărni","posed","coșit","macho","madam","braga","năier","mlaji","pilul","ragem","oilor","aride","gabii","smash","plene","bruft","kagul","morua","rotim","oulet","sfiit","cobăi","ajute","afumi","sarad","funti","greci","boldi","zorit","holca","fiuți","liste","munda","hruba","cazan","pârși","iteau","feții","tuind","butuc","adune","tutor","murii","olate","ostic","noeza","halde","bitul","libel","felin","soite","pisez","raiul","piron","venet","gonea","jabre","cerem","geala","parfe","scala","vurta","tonic","ferdu","vecin","impur","bernă","răgaz","șustă","șuiat","izmei","obțiu","șpalt","clonț","lavre","ugere","patio","pruja","frate","îmbuc","morue","grabă","fetit","sofez","chiul","lobdă","parat","irite","frigi","bozia","atina","zbiri","zeina","arate","ghioș","plebe","corci","gupei","dudui","notăm","supun","zoale","zmeul","nasoi","sulei","damna","aflau","acuzi","nenuț","silca","huște","bafta","dusti","jazul","lovea","desei","uzate","glugi","cazam","toaba","iuții","bluza","edita","inapt","aiură","butci","steap","vedda","satuc","soiai","melia","pofti","aloci","bahti","râvnă","ascei","viței","vâjit","scoci","somai","modus","balia","leoni","venim","răgea","jupui","nevro","lazii","steze","vexai","rummy","retea","dudei","șofat","freta","conac","dense","hanap","vlahă","teuca","colaj","vadea","widii","suina","gaini","tihni","lătra","nursă","vălul","tiran","lugol","țâșni","paste","macre","blocă","acida","noian","vâlva","parte","asalt","ajung","cabla","sonda","nauto","mutat","novez","lombe","zeama","arcer","fesul","priza","lamei","staze","șocau","sarma","darui","mozoc","ulmii","dieza","murui","emisă","vitii","legai","copci","sipci","topul","robia","arzoi","peciu","gelep","exale","naici","laser","indop","ramat","pleca","roasa","dubii","baiul","galon","ghebe","impiu","alena","casiu","lansa","hucii","sliri","laute","flamă","șelac","humor","pestă","dunit","albet","betia","somon","ziare","arpei","nopau","șturț","beril","votcă","exert","gatat","tânte","axeze","vițos","trust","nitul","forul","năsuț","greoi","hilot","treci","santa","mlacă","lorii","șteze","cuiba","mutul","scoli","aloca","parce","râgâi","împle","lipsi","crapă","obădă","vreie","sutei","ocrul","chică","fișet","larma","bușit","gârlă","boran","seaca","sturt","pater","brahă","nahur","țeară","gabia","lueta","vilul","gotul","horii","creta","huiau","genom","supra","mesto","misea","junie","țoști","uditi","variu","eleva","spelb","dijme","speți","fonem","rafii","băița","baton","cadet","bobit","magie","argea","rasad","balot","spart","tetre","balul","colul","patim","stilă","clada","iuruș","nicio","jderi","cădim","cepse","xenii","somau","carst","uduri","argon","rudei","licit","taole","norut","zeita","becii","talpă","horda","indan","dragi","opera","zoala","adăpa","crunt","magic","selva","băune","perji","curia","novac","mumie","demis","carat","toaie","xenia","moata","breii","tabii","tahla","probă","scame","marna","lampă","eboșă","oiesc","stive","urezi","gripa","saune","remuu","glume","urmez","urmam","miala","excit","brână","cutia","șiței","bobot","novez","chemi","pulpe","însul","state","trage","calim","imble","peciu","scrum","codru","obada","semne","dobei","mitei","gerar","glose","elevi","jalon","bemol","japiu","vinde","venim","cârje","sălia","râsei","ulube","mulat","arase","crose","țărna","jepii","fugim","fauni","zilos","taina","cuini","magia","mării","inoti","ecart","sihla","aduce","dosim","tiuim","omeni","rebec","șarge","cablu","cefei","ocări","miaun","locii","raful","festa","mimul","fumui","dorit","imblu","gumai","gusti","nucuț","gitan","râmei","tagla","fuzen","valvi","colna","uncie","omagi","oriei","pruzi","pasiv","valet","iazma","numai","pocia","borne","foiau","atlas","mocul","milog","zaraf","bruta","leica","ardil","suflu","iuise","cubul","fatui","cicli","trenă","tronc","focal","trufe","barat","vriei","homar","tagma","renul","horii","groom","style","sfarm","hapci","păcii","velar","dragă","ninja","foaci","molid","furan","vadul","exala","buzau","umbri","torni","plata","undos","cloci","suavi","ticsi","lucia","icnii","ceuce","cadea","soind","petea","zavor","leții","devie","gabii","mersi","aroga","vâjie","prici","țârfa","ștabi","locas","oluțe","culte","tesea","hanse","busul","izola","tract","sidef","rotim","balul","petic","crăpa","zmeul","ulmam","avara","șeile","păpai","volum","scafe","brună","izine","albul","aciui","roade","bouri","butea","armas","șarul","muram","bortă","grabe","zolgi","renia","urasc","osebi","tildă","ratam","scape","vlahi","gurai","cocia","eocen","razna","barej","benei","sipii","polca","freon","boiră","paste","tanti","almei","claci","canto","urzoi","datat","evins","aspru","grime","rotai","sonor","rarei","tarca","labiu","moima","alint","advon","țiful","halfi","surpă","tăvii","oscil","cange","juisa","banat","bocul","peren","vomez","becii","marsa","calpă","avidă","lozie","bozul","utile","barje","butur","litru","preta","board","ațele","pilim","ranei","menaj","loris","viaza","tipau","lamăm","ocrul","ujuia","mâtci","barăm","lidic","piele","paiul","haiau","dator","sorbi","țobâc","butas","sihle","invar","vădit","fleți","hiene","miere","fatum","muiam","hulea","înfia","lobii","încui","punct","frige","nonet","lării","țâflă","cedri","șpiți","icnet","selba","bunul","imită","bahnă","iatac","sevas","roită","odata","aceia","gurul","rejoc","molal","pifan","moimă","antal","bafta","nouar","schip","tenta","liere","usuce","pomăi","voisi","zuluș","napat","neagă","voder","ambră","gluma","setez","coret","catod","țâhlă","elice","masei","minat","tenis","rateu","ordon","maslu","pisau","creau","zburd","udari","nouri","impun","carja","spusa","tocat","ordii","densa","penat","jetaj","gulag","buric","cipca","idilă","celom","ninsi","lotul","caiși","releg","cinăm","avama","rimai","craza","guler","redie","voala","noeze","lunar","sumar","elevă","ciriș","bolea","aftos","paini","tasai","lofai","mânii","sabia","vorbă","agneț","lacra","gubav","audit","natal","vidam","dasem","facle","topic","tinca","himen","cervu","atipi","moșie","vagii","uredo","japei","catod","cârni","bigii","șutit","boeme","rățoi","vraci","tifon","punem","borai","cusca","bifat","humei","renal","copan","dansa","topuz","manui","lucie","rosim","cuiul","supam","usnei","rodez","ragit","buiși","tocat","rânze","limin","haida","calea","șmale","băuse","nalbă","mesea","anual","epila","apoda","timpi","patma","buzoi","oranj","mater","imolă","tuite","pampe","îmbia","avram","jilip","sahii","țâfnă","cirus","palma","senil","ozena","mâglă","surpa","traia","îmbii","rițui","splai","eluda","pensa","zigot","semii","buzni","boisi","panza","atelă","mozan","taola","cușme","dulia","dunga","cruți","glote","patul","barei","șargi","triez","clont","gemem","oocit","vutei","horai","budur","undit","offul","druse","jelii","usuca","opsas","manta","coase","dilie","iești","topor","aboli","siite","datez","imiti","uzeze","jucau","solit","moțam","peane","false","rafia","varar","bătăi","ghips","bujia","amute","surei","penar","arama","buget","poker","broșe","frupt","aisti","harța","repet","găsim","rujul","rampa","furci","adaug","ninsa","gonio","uscăm","podan","mijit","șomăm","sătuț","mârei","vodca","sosit","jouli","corni","neamt","taseu","beucă","trufa","achii","bolta","zlaci","babei","falsă","ptuși","atita","ageri","freci","năsuc","umflu","mezzo","dedam","toaca","labos","sivii","clădi","scita","tulea","hâiră","loton","tacta","haira","ruste","trapa","frica","jamna","jenat","aloei","oftic","acira","chica","moțau","ideam","busea","miaun","tradu","ștair","umida","batca","duoul","teiul","bălos","fatai","april","teară","nimfa","corle","roiba","iveau","calca","butic","tunat","piese","nielă","bridă","leoni","tinei","tuiam","băluț","sobor","gebea","săpai","doxei","lăsau","ineci","recto","brand","splau","pacul","foiai","reniu","agera","țâțos","facto","girăm","funzi","savor","gulag","zăgaș","tobas","sufoc","eseul","sabii","larme","cacom","pozai","sufle","esuau","aoleu","pripe","craze","rezol","recte","danci","pacea","bacil","fânar","adapa","jigul","setat","sărut","carei","soiși","cotoc","panel","rapim","gozul","hoban","uliță","budui","burez","vrana","necum","firme","pivot","codau","ciori","calme","pauce","ceuce","pojar","sutar","mamoș","sante","curta","căule","tilai","lupan","odaie","metro","paleo","dosar","cârâi","cerut","lesne","deviz","elite","fixăm","idila","galei","kyrie","cadii","leita","clamă","bojog","burbe","byții","dibla","spume","pălit","păiuș","avans","litri","ureze","steri","vagil","dății","sacra","duium","rubla","angro","atiti","statu","coran","cumen","cuvie","gabie","burbe","mitra","lanei","iloți","flame","pupat","ținte","vinul","boiti","falii","tiflă","riglă","paști","șaiul","verin","uguie","mojic","fulia","dioda","codia","forăm","daici","verei","agiei","metoh","zâmbi","mâzgă","socri","tutei","tigve","durat","ornăm","scurt","poate","magno","miaza","vecto","arunc","pâșul","mahar","aorta","răzuș","barba","danta","onuri","șapcă","deces","mioza","masar","ziare","scuza","neflă","acqua","șoada","place","sătul","doiul","ducăi","popou","uleii","lacși","bârfă","patul","uvula","bravi","crown","ofiur","deger","axile","napul","avize","veche","cășăi","grata","legăm","acari","lauzi","haire","atari","spoim","învoi","carau","noadă","usuim","naram","semui","tipos","rapel","tânăr","șetre","puhei","ramia","serat","divan","setez","hamei","urzoi","secta","torit","kevir","acute","sugar","marii","aurei","campă","lizai","bonzi","manul","vacul","enunț","vuvei","vapel","dumei","zorim","istea","hilul","barat","marin","minim","puțea","nouai","capra","diliu","iacul","milul","mixie","exert","gazul","cauei","persa","dosar","nevii","puhoi","autul","taman","jelei","darde","boabe","conic","limes","ritul","ațâță","leaha","forță","foise","colez","lutui","egala","spelb","prime","zeppe","vidmă","sosia","muzeu","șterț","bulei","ivesc","safic","lepra","maste","bolit","dotez","neica","arogă","slabe","itiiu","bojoc","gravă","temei","dedat","barcă","torte","faina","vetre","havam","glume","bonus","junel","sahan","pisai","lexem","albea","mulei","derbi","irosi","eului","murea","junta","budur","fisez","spuzi","jitar","fixul","ganaș","exalt","cling","creme","sopti","belul","muton","cerga","bazam","potir","feric","anunț","harță","joker","grase","tocam","dosul","reduc","opsas","borod","prada","urcăm","pudla","lanul","avute","atice","brazi","născu","tutie","tacan","încur","juram","măsar","hierb","matci","netul","miraz","tilda","mirau","dălii","bataj","muțit","jonca","aveam","atarn","vânez","vaiti","fente","urmul","galez","ogoia","recii","olmaz","largo","zlace","voală","tijei","ponor","magan","ating","varve","litiu","gazda","hazne","bașcă","sesii","bătea","uzine","picam","brazi","tibia","duhan","penin","dense","mirha","cazna","dolly","toind","vești","luate","agata","apodă","bocșă","osmiu","tusei","neste","cheme","halon","tubat","zârnă","grame","video","uzura","rulaj","falet","tigla","zeppa","creek","arame","femur","domra","jalbe","pelin","zadia","țișni","iurta","onico","heiul","foițe","briza","filma","carda","jubee","expus","șaică","ovule","untul","iesta","tanai","mință","zaifa","mutim","rânsă","album","nazir","peron","morua","vames","jetou","neper","fisai","bunii","husit","moțăi","mixez","toiau","zopăi","ghizi","salam","motet","patra","uguie","herma","smuga","poftă","înfoc","velim","sting","ileon","urici","break","cazau","durmi","piste","boiai","sange","rotez","săcos","bâhle","hidră","merii","zombi","doică","țâști","dobru","erzat","salip","hilea","pinen","sorul","tafte","outul","valmă","fadei","arome","etolă","husos","oranz","gaica","soiam","zvarr","covor","nemut","stufe","loran","rozie","cucăi","petas","tmeza","oftam","pripă","trial","braca","sasca","coame","deviu","lușez","ojina","lojei","cârcă","danii","podeț","secii","salie","pârâu","cergi","fotul","odgon","corni","devle","priit","rulai","firet","crezi","musca","celtă","târât","breaz","coafa","muriș","hrube","acrie","weber","capei","udata","lisez","lipse","aroga","ilare","ideai","hamit","parem","vânăt","lavră","crize","dărmi","sozii","orare","mayas","concă","bifat","miniu","anexa","plaie","najne","algia","femur","căușe","oftam","vagil","organ","luata","boyul","huire","visau","banal","miezi","țâfei","jambe","serif","miniu","drele","larii","misei","băuta","ghios","doctă","biuta","aplic","tetre","blana","șvede","tusea","arzoi","putea","produ","vilei","irupi","amici","ovine","biute","gerah","năucă","nopai","ridez","cinic","luxez","boxăm","amâne","papii","voios","areta","ferma","right","tâmpă","jaful","durit","vermi","leghe","dacul","dimii","nerod","apții","dipol","vomam","utila","opina","orare","hidra","zuzui","telea","cumis","fenec","prois","șanse","dozau","palpă","durda","cădem","pleul","leali","pecie","kipul","nalta","soția","posti","insei","sesam","zgaim","ideea","silen","petit","biata","dejun","șpăgi","damul","mosit","sciți","iriși","leagă","hamac","mojar","siric","oscar","știri","praci","stoca","acele","nășea","itise","rotea","medio","toire","anunt","oului","deasa","lupti","migră","renie","miele","vuind","balâc","uduri","cutre","recii","oculo","coala","ciomp","helio","kappa","skeet","centi","naftă","basne","izbit","puiți","tinar","scufe","vruna","murim","galon","plavi","acizi","tulul","auise","slane","tmeze","zăpuc","forai","lipan","peria","suise","secol","darie","zoppa","morun","harap","tason","ghiuj","băiși","velei","magla","sambă","robul","ridai","tisii","viesc","topul","mozan","zaife","talam","cubai","vulva","pitis","poema","pișau","sumei","suiri","gureș","darzi","grapă","arati","ludic","jarci","scrin","ăuiri","ponce","musii","taban","garii","chele","gatui","masic","ravne","ratat","nepot","sărea","semen","ranca","gujon","găvan","însor","foiam","auise","căiri","varca","husit","melos","canea","urdit","macru","jigni","mițos","manos","farta","urgia","tatic","țapii","corul","duzei","tubez","zlati","lisai","otinc","lusez","muste","zimța","inici","ajuns","foraj","spiră","tasta","lirei","nefei","serva","suiti","papua","bulcă","seina","țoape","axase","canei","batut","fostă","cusur","iures","zălud","drink","șular","toana","pudra","zimta","bocnă","tenie","scule","ițesc","cuier","tătuț","stepa","iovul","auria","gogii","arțag","frecă","supta","lemul","cinul","vrace","ceafa","aieve","diete","emuli","masul","clone","lipca","hazea","masau","tapez","sejur","oscii","telit","tarne","sugei","roise","lucea","aderă","stufa","ostoi","penny","sirep","urică","moate","roite","rânsa","unsei","taraf","oliva","guste","orgii","nasic","sasie","tapat","puhei","twist","bagea","gabie","remul","giram","titre","carii","uluca","ghide","obții","urdei","sipul","duela","afion","butii","harta","joșii","aseci","înfir","biete","năzar","adult","buiau","iuiau","uzuri","ulcus","mixau","pirul","nisip","salon","răngi","lesoi","roade","mitoc","fauna","ulnei","potop","bobim","pauca","fanul","baram","opuși","impun","fisca","agudă","croim","broda","paria","vutcă","dejoc","toaia","poxia","vigii","puțar","amidă","afgan","auiri","fâțâi","bovin","ponei","razni","nixei","spere","toval","zarea","fodră","olozi","icnim","amica","tapir","latii","reiat","pulul","soson","hatai","cheul","pârgă","pitig","torți","sorit","firii","rudim","fenil","buici","bulet","casti","perja","noițe","namaz","român","momii","dinam","tarot","tevos","sumau","negei","durdă","hăise","corei","breză","ferat","fieri","torși","tasul","tubul","maieu","urlam","rodez","salic","zgâim","șapte","carpe","haiul","maran","budat","asiză","undii","onora","păier","ralia","clini","plăti","sluga","talaz","zagaz","robit","bubat","afone","ocărî","abată","auira","prunc","sacaz","ilare","flețe","harți","majur","posac","rande","filau","guițe","mocit","slava","palul","prinz","zurai","faine","seria","felii","macri","uluit","hotul","căscă","zurrr","adiem","copai","erori","liati","frigă","mixie","călâi","îndoi","lojei","rizat","firmă","fitui","niper","vlagă","timid","inica","axase","rublă","ovili","liaza","tușim","corai","zorit","sarai","cujba","fript","genol","harsi","mâgla","gâlca","osuar","aroge","cătam","sluta","cegai","aveam","pilar","rodim","rochi","atite","ginte","buiti","rumpe","tabia","tufan","gazat","furat","ogari","abale","finei","lămpi","zebra","obele","sclai","punul","valsă","gerăm","vrute","călit","plumb","mural","lomul","cocli","lunic","urzim","dejei","urari","valug","nucal","jugal","doliu","lupon","morsa","imita","jofre","expre","varec","grier","sabla","vâjii","crila","ciunt","tuiei","aflui","pamau","tiuii","verif","zeine","senil","caice","fixau","vecto","perla","atras","dorna","hanță","asabi","coton","iovii","coxal","orgia","glanț","orbiș","aiure","lider","leale","strug","dușca","veceu","bobii","nival","sfinx","durig","clupă","arizi","cubat","mitui","steve","unite","viple","gazos","stole","gatai","cvasi","balie","stati","batog","limin","orbia","clipi","aeros","dăuna","șerui","dobru","geliv","perie","varse","ogora","popia","stroi","menit","colau","azima","parte","homar","pargi","supse","ticla","lurex","aplit","murse","laile","oscul","uirii","vrile","ajuta","surub","moșic","ginte","hâmâi","cires","înjug","gemei","răpii","calmi","gardă","iloti","imala","zabră","hamei","dirig","grilă","cozii","maree","sedii","grupa","tunet","fusul","label","masti","ulita","kavei","bulci","gigul","reneg","nalță","mesaj","teine","serpe","fagul","casai","palei","rodea","bariz","trasi","argat","hadei","hapax","rabde","sosia","zeche","havan","copie","japca","odori","bigul","caret","urată","pegră","acuzi","jilav","brize","nimba","rahat","weber","joaca","râlei","rusca","bufeu","creta","arand","bouți","lavaj","otgon","caste","briat","gaina","pavai","asume","dupre","boșul","hrane","sfiau","mulai","ulucă","picot","nafte","dupăi","dârâi","scufe","irmos","limba","cromă","striu","tânți","cutie","pâșin","ritma","agriș","dieză","lemne","pupăi","hulit","sesam","sădim","sapai","ticni","xeres","bazal","harpe","harfă","orbec","erzaț","sorei","catat","false","curme","evita","tutii","guler","pivei","rupți","gotcă","vapor","feros","amiba","trist","debut","sugea","patea","vurte","mugii","tarar","biței","năsoi","obtuz","săști","tanăt","ytriu","etnic","berze","caiam","sobru","osoși","auiau","motoc","volet","meara","supie","ghizd","rozii","traci","umido","terci","impiu","zarit","bertă","grape","ulaje","hărău","raței","clina","iveli","joiau","husoș","imbin","epice","bisau","tarod","corso","cotii","untul","ofism","dârji","ghizd","vidre","zemii","nămii","viuta","clisa","curtă","trupa","domol","sărin","suite","ciudi","răcan","matri","nepei","greii","mutea","inota","șfare","bătui","seful","breaz","firav","șovin","urcau","mutau","panta","party","turca","malai","țigăi","stiob","detie","labiu","trată","exhib","axata","latir","voiai","cavul","chire","ideat","forjă","tanin","ocheț","prujă","index","cobza","șpori","dezis","mesii","măcău","boala","iazul","orfic","tempo","dilia","etila","tocni","ornez","cesiu","miimi","zebul","jurul","liotă","solda","stang","bașul","domra","temii","scârț","hăind","conca","zilas","minus","hamui","ortac","fâsăi","fărbi","greți","osiei","siile","afise","desul","varui","naici","tarle","fenix","stive","dodit","arapi","durmi","epoci","saric","valex","orală","maste","tivim","izbim","borii","pânză","lauzi","nimic","mâlim","lexii","cardă","falce","șpaga","nomad","ofise","foame","arhon","metal","dresi","avand","facau","gravi","iniei","joite","asasi","tocim","ursii","brice","sfare","lohii","velin","falun","joiam","mizid","cadru","uzita","aspic","sarbe","benga","cruțe","dihor","genii","zăcem","suvai","spoii","carab","mezii","capac","fenta","fișic","cobze","budăm","opreg","burse","pătuț","cotoi","ornai","bruie","zasti","drink","forme","rimau","uvraj","drotă","turbe","sudul","dupul","tolul","zorii","ureus","oiagă","spadă","mamba","sadii","limus","omisa","fastă","bidon","saleu","prize","grija","claie","momim","tinci","holda","dripi","hlizi","stolă","agiul","bagau","lofau","penei","zolii","ciclu","huind","serai","dădea","uscau","oarba","bonca","plică","sodiu","cățui","marar","coade","harac","torci","beuță","gaițe","slapi","coste","naivă","mamar","kazoo","cifru","ducal","oșeni","curam","udeai","tipla","cupla","naste","avați","viara","comun","așeza","lobat","gâsca","dotei","noima","mulse","menaj","ochim","iasta","mezel","leșei","repui","justa","brume","înhap","fiong","sinet","avana","dulia","untos","zbarn","harag","humus","urate","otcos","clown","bolii","baiet","înfăț","kyrie","baier","amorf","pepit","dulău","legal","barse","ragil","surit","vexat","greau","supti","vadră","șiiți","dijmă","benți","grada","cazez","atrii","karma","verze","parei","erija","răzeș","smuls","favor","pluri","recal","oazei","hiadă","motor","cobze","napau","svabe","eșuez","miraz","pegre","eului","albei","peles","nimfo","potce","neții","inhib","pajii","modul","gasii","matca","aspru","botez","plini","momit","bonci","durda","fanam","ulcus","hagiu","căiai","oranj","irugi","rupii","sabat","renia","rebab","ureei","boise","avene","odont","faima","ivire","clupa","tulti","hăcui","flane","cursa","hâțân","bucea","speze","maici","lănci","acolo","bârna","valea","gașei","puțin","îndop","șarjă","alele","baria","sueta","lepta","prier","rulau","adiai","habuc","hirta","gumam","batul","răsad","arbuz","tablă","prinz","rodul","duela","jupim","vizor","bamei","pâram","auzea","rabin","filet","arzul","atoma","glugă","prăji","yucca","servă","atlaz","moron","taste","barem","verzi","pante","arăți","teras","angor","parfe","tușăm","henri","lepre","smoli","lacăt","tonus","nociv","imbat","ronde","tubaj","batâr","spurc","gavan","fiști","naiba","tonos","hâind","uiete","pohti","lăsai","falsa","gazel","alcan","glose","morvă","ardem","cărți","geret","capul","gerui","noxei","inept","votci","seaca","huron","silon","slaba","halaj","viril","zacem","tasam","tevii","dalaj","torit","olițe","nudul","supeu","oboli","oușor","linon","berte","topaz","cirac","popei","pofti","luetă","râvne","dudul","caisi","scriu","unșpe","gasul","quipu","arena"]

    var  Ta = ['abbot'],
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
      var a,
        s = Ga(e);
      return (a = s % La.length), La[a];
      // const manualSetSolution = 'soare';
      // return manualSetSolution;
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
