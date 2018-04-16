"use strict";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// @priority 1000000000
!function (a) {
  "use strict";

  function b(I, J, K, L) {
    var M = J && J.prototype instanceof d ? J : d,
        N = Object.create(M.prototype),
        O = new n(L || []);
    return N._invoke = j(I, K, O), N;
  }

  function c(I, J, K) {
    try {
      return {
        type: "normal",
        arg: I.call(J, K)
      };
    } catch (L) {
      return {
        type: "throw",
        arg: L
      };
    }
  }

  function d() {}

  function e() {}

  function f() {}

  function g(I) {
    ["next", "throw", "return"].forEach(function (J) {
      I[J] = function (K) {
        return this._invoke(J, K);
      };
    });
  }

  function h(I) {
    function J(M, N, O, P) {
      var Q = c(I[M], I, N);
      if ("throw" === Q.type) P(Q.arg);else {
        var R = Q.arg,
            S = R.value;
        return S && "object" == typeof S && r.call(S, "__await") ? Promise.resolve(S.__await).then(function (T) {
          J("next", T, O, P);
        }, function (T) {
          J("throw", T, O, P);
        }) : Promise.resolve(S).then(function (T) {
          R.value = T, O(R);
        }, P);
      }
    }

    var L;

    this._invoke = function (M, N) {
      function O() {
        return new Promise(function (P, Q) {
          J(M, N, P, Q);
        });
      }

      return L = L ? L.then(O, O) : O();
    };
  }

  function j(I, J, K) {
    var L = z;
    return function (N, O) {
      if (L === B) throw new Error("Generator is already running");

      if (L === C) {
        if ("throw" === N) throw O;
        return p();
      }

      for (K.method = N, K.arg = O;;) {
        var P = K.delegate;

        if (P) {
          var Q = k(P, K);

          if (Q) {
            if (Q === D) continue;
            return Q;
          }
        }

        if ("next" === K.method) K.sent = K._sent = K.arg;else if ("throw" === K.method) {
          if (L === z) throw L = C, K.arg;
          K.dispatchException(K.arg);
        } else "return" === K.method && K.abrupt("return", K.arg);
        L = B;
        var R = c(I, J, K);

        if ("normal" === R.type) {
          if (L = K.done ? C : "suspendedYield", R.arg === D) continue;
          return {
            value: R.arg,
            done: K.done
          };
        }

        "throw" === R.type && (L = C, K.method = "throw", K.arg = R.arg);
      }
    };
  }

  function k(I, J) {
    var K = I.iterator[J.method];

    if (K === s) {
      if (J.delegate = null, "throw" === J.method) {
        if (I.iterator.return && (J.method = "return", J.arg = s, k(I, J), "throw" === J.method)) return D;
        J.method = "throw", J.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return D;
    }

    var L = c(K, I.iterator, J.arg);
    if ("throw" === L.type) return J.method = "throw", J.arg = L.arg, J.delegate = null, D;
    var M = L.arg;
    if (!M) return J.method = "throw", J.arg = new TypeError("iterator result is not an object"), J.delegate = null, D;
    if (M.done) J[I.resultName] = M.value, J.next = I.nextLoc, "return" !== J.method && (J.method = "next", J.arg = s);else return M;
    return J.delegate = null, D;
  }

  function l(I) {
    var J = {
      tryLoc: I[0]
    };
    1 in I && (J.catchLoc = I[1]), 2 in I && (J.finallyLoc = I[2], J.afterLoc = I[3]), this.tryEntries.push(J);
  }

  function m(I) {
    var J = I.completion || {};
    J.type = "normal", delete J.arg, I.completion = J;
  }

  function n(I) {
    this.tryEntries = [{
      tryLoc: "root"
    }], I.forEach(l, this), this.reset(!0);
  }

  function o(I) {
    if (I) {
      var J = I[u];
      if (J) return J.call(I);
      if ("function" == typeof I.next) return I;

      if (!isNaN(I.length)) {
        var K = -1,
            L = function M() {
          for (; ++K < I.length;) {
            if (r.call(I, K)) return M.value = I[K], M.done = !1, M;
          }

          return M.value = s, M.done = !0, M;
        };

        return L.next = L;
      }
    }

    return {
      next: p
    };
  }

  function p() {
    return {
      value: s,
      done: !0
    };
  }

  var q = Object.prototype,
      r = q.hasOwnProperty,
      s,
      t = "function" == typeof Symbol ? Symbol : {},
      u = t.iterator || "@@iterator",
      v = t.asyncIterator || "@@asyncIterator",
      w = t.toStringTag || "@@toStringTag",
      x = "object" == typeof module,
      y = a.regeneratorRuntime;
  if (y) return void (x && (module.exports = y));
  y = a.regeneratorRuntime = x ? module.exports : {}, y.wrap = b;
  var z = "suspendedStart",
      B = "executing",
      C = "completed",
      D = {},
      E = {};

  E[u] = function () {
    return this;
  };

  var F = Object.getPrototypeOf,
      G = F && F(F(o([])));
  G && G !== q && r.call(G, u) && (E = G);
  var H = f.prototype = d.prototype = Object.create(E);
  e.prototype = H.constructor = f, f.constructor = e, f[w] = e.displayName = "GeneratorFunction", y.isGeneratorFunction = function (I) {
    var J = "function" == typeof I && I.constructor;
    return !!J && (J === e || "GeneratorFunction" === (J.displayName || J.name));
  }, y.mark = function (I) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(I, f) : (I.__proto__ = f, !(w in I) && (I[w] = "GeneratorFunction")), I.prototype = Object.create(H), I;
  }, y.awrap = function (I) {
    return {
      __await: I
    };
  }, g(h.prototype), h.prototype[v] = function () {
    return this;
  }, y.AsyncIterator = h, y.async = function (I, J, K, L) {
    var M = new h(b(I, J, K, L));
    return y.isGeneratorFunction(J) ? M : M.next().then(function (N) {
      return N.done ? N.value : M.next();
    });
  }, g(H), H[w] = "Generator", H[u] = function () {
    return this;
  }, H.toString = function () {
    return "[object Generator]";
  }, y.keys = function (I) {
    var J = [];

    for (var K in I) {
      J.push(K);
    }

    return J.reverse(), function L() {
      for (; J.length;) {
        var M = J.pop();
        if (M in I) return L.value = M, L.done = !1, L;
      }

      return L.done = !0, L;
    };
  }, y.values = o, n.prototype = {
    constructor: n,
    reset: function reset(I) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(m), !I) for (var J in this) {
        "t" === J.charAt(0) && r.call(this, J) && !isNaN(+J.slice(1)) && (this[J] = s);
      }
    },
    stop: function stop() {
      this.done = !0;
      var I = this.tryEntries[0],
          J = I.completion;
      if ("throw" === J.type) throw J.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(I) {
      function J(Q, R) {
        return N.type = "throw", N.arg = I, K.next = Q, R && (K.method = "next", K.arg = s), !!R;
      }

      if (this.done) throw I;

      for (var K = this, L = this.tryEntries.length - 1; 0 <= L; --L) {
        var M = this.tryEntries[L],
            N = M.completion;
        if ("root" === M.tryLoc) return J("end");

        if (M.tryLoc <= this.prev) {
          var O = r.call(M, "catchLoc"),
              P = r.call(M, "finallyLoc");

          if (O && P) {
            if (this.prev < M.catchLoc) return J(M.catchLoc, !0);
            if (this.prev < M.finallyLoc) return J(M.finallyLoc);
          } else if (O) {
            if (this.prev < M.catchLoc) return J(M.catchLoc, !0);
          } else if (!P) throw new Error("try statement without catch or finally");else if (this.prev < M.finallyLoc) return J(M.finallyLoc);
        }
      }
    },
    abrupt: function abrupt(I, J) {
      for (var L, K = this.tryEntries.length - 1; 0 <= K; --K) {
        if (L = this.tryEntries[K], L.tryLoc <= this.prev && r.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var M = L;
          break;
        }
      }

      M && ("break" === I || "continue" === I) && M.tryLoc <= J && J <= M.finallyLoc && (M = null);
      var N = M ? M.completion : {};
      return N.type = I, N.arg = J, M ? (this.method = "next", this.next = M.finallyLoc, D) : this.complete(N);
    },
    complete: function complete(I, J) {
      if ("throw" === I.type) throw I.arg;
      return "break" === I.type || "continue" === I.type ? this.next = I.arg : "return" === I.type ? (this.rval = this.arg = I.arg, this.method = "return", this.next = "end") : "normal" === I.type && J && (this.next = J), D;
    },
    finish: function finish(I) {
      for (var K, J = this.tryEntries.length - 1; 0 <= J; --J) {
        if (K = this.tryEntries[J], K.finallyLoc === I) return this.complete(K.completion, K.afterLoc), m(K), D;
      }
    },
    "catch": function _catch(I) {
      for (var K, J = this.tryEntries.length - 1; 0 <= J; --J) {
        if (K = this.tryEntries[J], K.tryLoc === I) {
          var L = K.completion;

          if ("throw" === L.type) {
            var M = L.arg;
            m(K);
          }

          return M;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(I, J, K) {
      return this.delegate = {
        iterator: o(I),
        resultName: J,
        nextLoc: K
      }, "next" === this.method && (this.arg = s), D;
    }
  };
}(function () {
  return this;
}() || Function("return this")()); // @priority 1000000000

'use strict'; // @optional ./vendor/jquery.js


(function () {
  /* JQUERY */
  window.$ = window.jQuery || window.$;
})(); // @require ../init.js


(function ($) {
  /* VARIABLES */
  var NODE_INDEX = '_diff_index',
      ELEMENT_TYPE = window.Node.ELEMENT_NODE,
      DOCUMENT_TYPE = window.Node.DOCUMENT_NODE;
  /* DEFAULTS */

  var defaults = {
    attributes: {
      key: 'data-key',
      ignore: 'data-ignore',
      checksum: 'data-checksum'
    }
  };
  /* DIFF */

  $.diff = function (prev, next, skipAttributes) {
    if (skipAttributes === void 0) {
      skipAttributes = false;
    }

    if (_.isString(next)) next = $.parseHTML(next)[0];
    if (prev.nodeType === DOCUMENT_TYPE) prev = prev.documentElement;
    $.diff.node(prev, next, skipAttributes);
  };

  $.diff.node = function (prev, next, skipAttributes) {
    if (skipAttributes === void 0) {
      skipAttributes = false;
    }

    if (prev.nodeType === next.nodeType) {
      if (prev.nodeType === ELEMENT_TYPE) {
        if ($.diff.utilities.getChecksum(prev) === $.diff.utilities.getChecksum(next)) return;
        if ($.diff.utilities.isIgnored(prev) && $.diff.utilities.isIgnored(next)) return;
        var prevChildren = prev.childNodes,
            nextChildren = next.childNodes;

        if (prevChildren.length !== 0 || nextChildren.length !== 0) {
          $.diff.children(prev, prevChildren, nextChildren, skipAttributes);
        }

        if (prev.nodeName === next.nodeName) {
          if (!skipAttributes) {
            $.diff.attributes(prev, prev.attributes, next.attributes);
          }
        } else {
          var replacement = next.cloneNode();

          while (prev.firstChild) {
            replacement.appendChild(prev.firstChild);
          }

          prev.parentNode.replaceChild(replacement, prev);
        }
      } else {
        if (prev.nodeValue !== next.nodeValue) {
          prev.nodeValue = next.nodeValue;
        }
      }
    } else {
      prev.parentNode.replaceChild(next, prev);
    }
  };

  $.diff.attributes = function (parent, prev, next) {
    /* NEW */
    for (var i = next.length; i--;) {
      var nextAttr = next[i],
          name = nextAttr.name,
          prevAttr = prev.getNamedItem(name);

      if (!prevAttr) {
        // Create
        next.removeNamedItem(name);
        prev.setNamedItem(nextAttr);
      } else if (prevAttr.value !== nextAttr.value) {
        // Update
        prevAttr.value = nextAttr.value;
      }
    }
    /* OLD */


    if (prev.length !== next.length) {
      for (var _i = prev.length; _i--;) {
        var _name = prev[_i].name;
        if (!next.getNamedItem(_name)) prev.removeNamedItem(_name);
      }
    }
  };

  $.diff.children = function (parent, prevChildNodes, nextChildNodes, skipAttributes) {
    if (skipAttributes === void 0) {
      skipAttributes = false;
    }

    var prev = $.diff.utilities.keyNodes(prevChildNodes),
        next = $.diff.utilities.keyNodes(nextChildNodes);
    /* OLD */

    for (var key in prev) {
      if (next[key]) continue;
      parent.removeChild(prev[key]);
    }
    /* NEW */


    for (var _key in next) {
      var a = prev[_key],
          b = next[_key],
          newPosition = b[NODE_INDEX];

      if (a) {
        // Update
        $.diff.node(a, b, skipAttributes);
        if (a[NODE_INDEX] === newPosition) continue;
        var nextEl = prevChildNodes[newPosition] || null; // TODO: figure out if || null is needed.

        if (nextEl === a) continue;
        parent.insertBefore(a, nextEl);
      } else {
        // Insert
        var _nextEl = prevChildNodes[newPosition] || null;

        parent.insertBefore(b, _nextEl);
      }
    }
  };

  $.diff.utilities = {
    keyNodes: function keyNodes(eles) {
      var result = {};

      for (var i = 0, l = eles.length; i < l; i++) {
        var ele = eles[i];
        ele[NODE_INDEX] = i;
        result[$.diff.utilities.getKey(ele) || i] = ele;
      }

      return result;
    },
    getKey: function getKey(ele) {
      if (ele.nodeType !== ELEMENT_TYPE) return;
      return ele.getAttribute($.diff.defaults.attributes.key) || ele.id || undefined;
    },
    getChecksum: function getChecksum(ele) {
      return ele.getAttribute($.diff.defaults.attributes.checksum) || NaN;
    },
    isIgnored: function isIgnored(ele) {
      return ele.getAttribute($.diff.defaults.attributes.ignore) !== null;
    }
  };
  /* BINDING */

  $.diff.defaults = defaults;
  /* PLUGIN */

  $.fn.diff = function (next, skipAttributes) {
    if (skipAttributes === void 0) {
      skipAttributes = false;
    }

    for (var i = 0, l = this.length; i < l; i++) {
      $.diff(this[i], next, skipAttributes);
    }

    return this;
  };
})(window.$); // @require ../init.js


(function ($) {
  /* ELEMENTS */
  $.$empty = $();
  $.$window = $(window);
  $.window = window;
  $.$document = $(document);
  $.document = document;
  $.$html = $(document.documentElement);
  $.html = document.documentElement;
  $.$head = $(document.head);
  $.head = document.head;
  Object.defineProperty($, 'body', {
    // Body not avaiable yet inside `head`
    enumerable: true,
    get: function get() {
      return document.body;
    }
  });
  var $body;
  Object.defineProperty($, '$body', {
    // Body not avaiable yet inside `head`
    enumerable: true,
    get: function get() {
      if ($body) return $body;
      var body = $.body;
      if (body) return $body = $(body);
      return $.$empty;
    }
  });
})(window.$); // @require ../init.js


(function ($) {
  /* EVENT NAMESPACER */
  var eventsSeparatorRe = /[,\s]+/g;

  $.eventNamespacer = function (events, namespace) {
    return events.split(eventsSeparatorRe).map(function (event) {
      return "" + event + namespace;
    }).join(' ');
  };
})(window.$); // @require ../init.js


(function ($) {
  /* EVENT XY */
  $.eventXY = function (event, X, Y) {
    if (X === void 0) {
      X = 'pageX';
    }

    if (Y === void 0) {
      Y = 'pageY';
    }

    if ('originalEvent' in event) {
      return $.eventXY(event.originalEvent, X, Y);
    } else if ('changedTouches' in event && event.changedTouches.length) {
      return {
        x: event.changedTouches[0][X],
        y: event.changedTouches[0][Y]
      };
    } else if ('touches' in event && event.touches.length) {
      return {
        x: event.touches[0][X],
        y: event.touches[0][Y]
      };
    } else if (X in event) {
      return {
        x: event[X],
        y: event[Y]
      };
    }
  };
})(window.$); // @require ../init.js


(function ($) {
  /* FIND ALL */
  // Like find, but can also include the root elements
  $.fn.findAll = function (selector) {
    var $self = this.filter(selector),
        $nested = this.find(selector);
    return $self.length ? $nested.length ? $nested.add($self) : $self : $nested;
  };
})(window.$); // @require ../init.js


(function ($) {
  /* RECT */
  $.getRect = function (node) {
    return node === window ? $.getWindowRect() : node.getBoundingClientRect();
  };

  $.fn.getRect = function () {
    return this.length ? $.getRect(this[0]) : undefined;
  };
  /* WINDOW RECT */


  $.getWindowRect = function () {
    var rect = {};
    rect.left = 0;
    rect.top = 0;
    rect.width = window.innerWidth;
    rect.height = window.innerHeight;
    rect.right = rect.width;
    rect.bottom = rect.height;
    return rect;
  };
})(window.$); // @require ../init.js


(function ($) {
  /* HAS ATTRIBUTE */
  $.fn.hasAttribute = function (attr) {
    return !!this[0] && this[0].hasAttribute(attr);
  };
})(window.$); // @require ../init.js
// It only currently works for setting


(function ($) {
  /* HSL */
  $.fn.hsl = function (h, s, l) {
    this[0].style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%)";
    return this;
  };
})(window.$); // @require ../init.js
// @require ./elements.js


(function ($) {
  /* IS ATTACHED */
  $.isAttached = function (ele) {
    return !!ele && (ele === $.html || $.html.contains(ele));
  };

  $.fn.isAttached = function () {
    return $.isAttached(this[0]);
  };
})(window.$); // @require ../init.js


(function ($) {
  /* IS EVENT */
  // Checks if a variable is an event
  $.isEvent = function (x) {
    return typeof x === 'object' && (window.Event && x instanceof window.Event || window.CustomEvent && x instanceof window.CustomEvent || $.Event && x instanceof $.Event);
  };
})(window.$); // @require ../init.js


(function ($) {
  /* IS FOCUSED */
  $.isFocused = function (ele) {
    return ele === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(ele.type || ele.href || ~ele.tabIndex);
  };

  $.fn.isFocused = function () {
    return $.isFocused(this[0]);
  };
})(window.$); // @require ./is_focused.js


(function ($) {
  /* IS EDITABLE */
  $.isEditable = function (ele) {
    return $(ele).is('input, textarea, [contenteditable]');
  };

  $.fn.isEditable = function () {
    return $.isEditable(this[0]);
  };
})(window.$); // @require ../init.js


(function ($) {
  /* IS VISIBLE */
  $.isVisible = function (ele) {
    return !!ele && !!(ele.offsetWidth || ele.offsetHeight || ele.getClientRects().length);
  };

  $.fn.isVisible = function () {
    return $.isVisible(this[0]);
  };
})(window.$); // @require ../init.js
// Triggering a `remove` event, so that we can properly destroy widgets instances when their relative elements are removed


(function ($) {
  /* REMOVE */
  var _remove = $.fn.remove;

  $.fn.remove = function () {
    this.trigger('remove');
    return _remove.call(this);
  };
})(window.$); // @optional ./vendor/lodash.js


(function () {
  /* LODASH */
  window._ = window.lodash || window._;
})(); // @require ../init.js
// @require core/jquery/init.js


(function (_, $) {
  /* CLONE DEEP */
  // Much smaller than lodash's implementation
  _.cloneDeep = function (obj) {
    if (obj === null || typeof obj !== 'object' || _.isElement(obj) || _.isRegExp(obj) || obj instanceof $ || '__is_cloning__' in obj) return obj;
    var dupe = obj instanceof Date ? new obj.constructor() : obj.constructor();

    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      obj['__is_cloning__'] = true;
      dupe[key] = _.cloneDeep(obj[key]);
      delete obj['__is_cloning__'];
    }

    return dupe;
  };
})(window._, window.$); // @require ../init.js


(function (_) {
  /* CONSTANTS */
  _.true = _.constant(true);
  _.false = _.constant(false);
  _.undefined = _.constant();
  _.null = _.constant(null);
})(window._); // @require ../init.js


(function (_) {
  /* CSS 2 DOM */
  // Simpler alternative to `camelCase`
  _.CSS2DOM = function (name) {
    return name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  };
})(window._); // @require ../init.js


(function (_) {
  /* DIFFERENCE */
  // Much smaller than lodash's implementation
  _.difference = function (array) {
    for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      others[_key2 - 1] = arguments[_key2];
    }

    return array.filter(function (val) {
      return !others.some(function (other) {
        return other.includes(val);
      });
    });
  };
})(window._); // @require ../init.js


(function (_) {
  /* EXTEND */
  // Much smaller than lodash's implementation
  _.extend = _.assignIn = Object.assign;
})(window._); // @require ../init.js


(function (_) {
  /* FIND MATCHES */
  _.findMatches = function (str, regex) {
    var matches = [],
        match;

    while (match = regex.exec(str)) {
      matches.push(match);
    }

    return matches;
  };
})(window._); // @require ../init.js


(function (_) {
  /* FLATTEN */
  // Much smaller than lodash's implementation
  _.flatten = _.flattenDepth = function (arr, depth) {
    if (depth === void 0) {
      depth = 1;
    }

    return arr.reduce(function (a, v) {
      return a.concat(depth > 1 && _.isArray(v) ? _.flatten(v, depth - 1) : v);
    }, []);
  };
})(window._); // @require ../init.js


(function (_) {
  /* FORMAT */
  _.format = function (msg) {
    for (var i = 1, l = arguments.length <= 1 ? 0 : arguments.length - 1; i <= l; i++) {
      msg = msg.replace("$" + i, i - 1 + 1 < 1 || arguments.length <= i - 1 + 1 ? undefined : arguments[i - 1 + 1]);
    }

    return msg;
  };
})(window._); // @require ../init.js


(function (_) {
  /* IS EQUAL JSON */
  // Tiny, not very robust (comparing objects depends on the order of their keys), alternative to `isEqual`
  _.isEqualJSON = function (a, b) {
    return a === b || JSON.stringify(a) === JSON.stringify(b);
  };
})(window._); // @require ../init.js


(function (_) {
  /* MERGE */
  // Much smaller than lodash's implementation (it's only ment to work with plain objects)
  _.merge = function () {
    for (var _len2 = arguments.length, objs = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      objs[_key3] = arguments[_key3];
    }

    return objs.reduce(function (acc, obj) {
      if (_.isPlainObject(obj)) {
        for (var key in obj) {
          if (!obj.hasOwnProperty(key)) continue;

          if (_.isPlainObject(obj[key])) {
            if (!acc[key]) acc[key] = {};

            _.merge(acc[key], obj[key]);
          } else {
            acc[key] = obj[key];
          }
        }
      }

      return acc;
    });
  };
})(window._); // @require ../init.js


(function (_) {
  /* MOVE */
  _.move = function (arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
  };
})(window._); // @require ../init.js


(function (_) {
  /* NAT SORT */
  _.natSort = _.natSortBy = function (arr, iteratee) {
    if (iteratee === void 0) {
      iteratee = _.identity;
    }

    return arr.sort(function (a, b) {
      return iteratee(a) - iteratee(b);
    });
  };
})(window._); // @require ../init.js


(function (_) {
  /* NOW SECS */
  _.nowSecs = function () {
    return Math.floor(_.now() / 1000);
  };
})(window._); // @require ../init.js


(function (_) {
  /* OMIT */
  // Much smaller than lodash's implementation
  _.omit = function (obj, keys) {
    return Object.keys(obj).filter(function (key) {
      return !keys.includes(key);
    }).reduce(function (acc, key) {
      return acc[key] = obj[key], acc;
    }, {});
  };
})(window._); // @require ../init.js


(function (_) {
  /* PICK */
  // Much smaller than lodash's implementation
  _.pick = function (obj, keys) {
    return keys.reduce(function (acc, curr) {
      return curr in obj && (acc[curr] = obj[curr]), acc;
    }, {});
  };
})(window._); // @require ../init.js


(function (_) {
  /* PROP */
  // Tiny, limited (doesn't support arrays), not very fast, alternative to `get` and `set`
  _.prop = _.get = _.set = function (obj, selector, value) {
    if (!selector) return;
    var get = arguments.length === 2;
    var result = selector.split('.').filter(_.identity).reduce(function (obj, key, keyIndex, keys) {
      if (get) {
        return obj && obj[key];
      } else {
        if (obj) {
          if (keyIndex === keys.length - 1) {
            return obj[key] = value;
          } else {
            return obj[key] || (obj[key] = {});
          }
        }
      }
    }, obj);
    return get ? result : obj;
  };
})(window._); // @require ../init.js


(function (_) {
  /* REPLACE ALL */
  _.replaceAll = function (string, pattern, replacement) {
    var escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return string.replace(new RegExp(escaped, 'g'), replacement);
  };
})(window._); // @require ../init.js


(function (_) {
  /* ROUND CLOSER */
  _.roundCloser = function (number, step) {
    if (step === void 0) {
      step = 1;
    }

    var left = number % step,
        halfStep = step / 2;
    return number - left + (left >= halfStep ? step : 0);
  };
})(window._); // @require ../init.js


(function (_) {
  /* TEMPLATE MINIFY */
  // Simple minification, useful for discarding useless text nodes
  _.templateMinify = function (template) {
    return template.trim().replace(/>\n\s*</gm, '><');
  };
})(window._); // @require ../init.js
// @require ./template_minify.js


(function (_) {
  /* TEMPLATE */
  var _template = _.template;

  _.template = function (str, options) {
    return _template.call(_, _.templateMinify(str), options);
  };
})(window._); // @require ../init.js


(function (_) {
  /* TEMPLATE SETTINGS */
  // Default settings
  _.templateSettings.variable = 'o';
})(window._); // @require ../init.js
// @require ./now_secs.js


(function (_) {
  /* TIME AGO */
  _.timeAgo = function (timestamp) {
    // Timestamp is required in seconds
    var elapsed = _.nowSecs() - timestamp,
        justNow = 5;
    var names = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'],
        times = [31536000, 2592000, 604800, 86400, 3600, 60, 1];

    if (elapsed < justNow) {
      return {
        str: 'Just now',
        next: justNow - elapsed
      };
    } else {
      for (var i = 0, l = times.length; i < l; i++) {
        var name = names[i],
            secs = times[i],
            number = Math.floor(elapsed / secs);

        if (number >= 1) {
          return {
            str: number + ' ' + name + (number > 1 ? 's' : '') + ' ago',
            next: secs - (elapsed - number * secs)
          };
        }
      }
    }
  };
})(window._); // @require ../init.js


(function (_) {
  /* UNIQ */
  // Much smaller than lodash's implementation
  _.uniq = _.uniqBy = function (arr, iteratee) {
    if (iteratee === void 0) {
      iteratee = _.identity;
    }

    var values = arr.map(iteratee);
    return arr.filter(function (entry, i) {
      return values.indexOf(values[i]) === i;
    });
  };
})(window._); // @require ../init.js


(function (_) {
  /* UPPER FIRST */
  // Much smaller than lodash's implementation
  _.upperFirst = function (str) {
    return str ? "" + str[0].toUpperCase() + str.substring(1) : str;
  };
})(window._); // @require ../init.js


(function (_) {
  /* WAIT */
  _.wait = function (ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };
})(window._); // @require ../init.js


(function (_) {
  /* XOR */
  // Much smaller than lodash's implementation
  _.xor = function () {
    for (var _len3 = arguments.length, arrays = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      arrays[_key4] = arguments[_key4];
    }

    return arrays.reduce(function (acc, arr) {
      return _.difference(acc, arr).concat(_.difference(arr, acc));
    }, []);
  };
})(window._);
/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/


;

(function (window, document, undefined) {
  var classes = [];
  var tests = [];
  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',
    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': false,
      'usePrefixes': true
    },
    // Queue of tests
    _q: [],
    // Stub these for people who are listening
    on: function on(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function () {
        cb(self[test]);
      }, 0);
    },
    addTest: function addTest(name, fn, options) {
      tests.push({
        name: name,
        fn: fn,
        options: options
      });
    },
    addAsyncTest: function addAsyncTest(fn) {
      tests.push({
        name: null,
        fn: fn
      });
    }
  }; // Fake some of Object.create so we can force non test results to be non "own" properties.

  var Modernizr = function Modernizr() {};

  Modernizr.prototype = ModernizrProto; // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D

  Modernizr = new Modernizr();
  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */
  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work

  var prefixes = ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', '']; // expose these for the plugin API. Look in the source for how to join() them against your input

  ModernizrProto._prefixes = prefixes;
  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }

  ;
  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx]; // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.

        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        } // Run the test, or use the raw value if it's not a function


        result = is(feature.fn, 'function') ? feature.fn() : feature.fn; // Set each of the names on the Modernizr object

        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx]; // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words

          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already

            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }

  ;
  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */
  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]

  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    } // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too


    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }
  }

  ;
  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius
    * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/
    * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';
  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : [];
  ModernizrProto._domPrefixes = domPrefixes;
  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */
  // hasOwnProperty shim by kangax needed for Safari 2.0 support

  var hasOwnProp;

  (function () {
    var _hasOwnProperty = {}.hasOwnProperty;
    /* istanbul ignore else */

    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */

    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function hasOwnProp(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    } else {
      hasOwnProp = function hasOwnProp(object, property) {
        /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return property in object && is(object.constructor.prototype[property], 'undefined');
      };
    }
  })(); // _l tracks listeners for async tests, as well as tests that execute after the initial run


  ModernizrProto._l = {};
  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberof Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */

  ModernizrProto.on = function (feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    } // Push this test on to the listener list


    this._l[feature].push(cb); // If it's already been resolved, trigger it on next tick


    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function () {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };
  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberof Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   */


  ModernizrProto._trigger = function (feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature]; // Force async

    setTimeout(function () {
      var i, cb;

      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0); // Don't trigger these again

    delete this._l[feature];
  };
  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)). Just like the offical detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberof Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasJquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */


  function addTest(feature, test) {
    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[key]);
        }
      }
    } else {
      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]]; // Again, we don't check for parent test existence. Get that right, though.

      if (featureNameSplit.length == 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last != 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test; // Set the value (this is the magic, right here).

      if (featureNameSplit.length == 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already

        /* jshint -W053 */
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      } // Set a single class (either `feature` or `no-feature`)

      /* jshint -W041 */


      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);
      /* jshint +W041 */
      // Trigger the event

      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  } // After all the tests are run, add self to the Modernizr prototype


  Modernizr._q.push(function () {
    ModernizrProto.addTest = addTest;
  });

  var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : [];
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  /**
   * atRule returns a given CSS property at-rule (eg @keyframes), possibly in
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @memberof Modernizr
   * @name Modernizr.atRule
   * @optionName Modernizr.atRule()
   * @optionProp atRule
   * @access public
   * @function atRule
   * @param {string} prop - String name of the @-rule to test for
   * @returns {string|boolean} The string representing the (possibly prefixed)
   * valid version of the @-rule, or `false` when it is unsupported.
   * @example
   * ```js
   *  var keyframes = Modernizr.atRule('@keyframes');
   *
   *  if (keyframes) {
   *    // keyframes are supported
   *    // could be `@-webkit-keyframes` or `@keyframes`
   *  } else {
   *    // keyframes === `false`
   *  }
   * ```
   *
   */

  var atRule = function atRule(prop) {
    var length = prefixes.length;
    var cssrule = window.CSSRule;
    var rule;

    if (typeof cssrule === 'undefined') {
      return undefined;
    }

    if (!prop) {
      return false;
    } // remove literal @ from beginning of provided property


    prop = prop.replace(/^@/, ''); // CSSRules use underscores instead of dashes

    rule = prop.replace(/-/g, '_').toUpperCase() + '_RULE';

    if (rule in cssrule) {
      return '@' + prop;
    }

    for (var i = 0; i < length; i++) {
      // prefixes gives us something like -o-, and we want O_
      var prefix = prefixes[i];
      var thisRule = prefix.toUpperCase() + '_' + rule;

      if (thisRule in cssrule) {
        return '@-' + prefix.toLowerCase() + '-' + prop;
      }
    }

    return false;
  };

  ModernizrProto.atRule = atRule;
  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
  /**
   * Modernizr.hasEvent() detects support for a given event
   *
   * @memberof Modernizr
   * @name Modernizr.hasEvent
   * @optionName Modernizr.hasEvent()
   * @optionProp hasEvent
   * @access public
   * @function hasEvent
   * @param  {string|*} eventName - the name of an event to test for (e.g. "resize")
   * @param  {Element|string} [element=HTMLDivElement] - is the element|document|window|tagName to test on
   * @returns {boolean}
   * @example
   *  `Modernizr.hasEvent` lets you determine if the browser supports a supplied event.
   *  By default, it does this detection on a div element
   *
   * ```js
   *  hasEvent('blur') // true;
   * ```
   *
   * However, you are able to give an object as a second argument to hasEvent to
   * detect an event on something other than a div.
   *
   * ```js
   *  hasEvent('devicelight', window) // true;
   * ```
   *
   */

  var hasEvent = function () {
    // Detect whether event support can be detected via `in`. Test on a DOM element
    // using the "blur" event b/c it should always exist. bit.ly/event-detection
    var needsFallback = !('onblur' in document.documentElement);

    function inner(eventName, element) {
      var isSupported;

      if (!eventName) {
        return false;
      }

      if (!element || typeof element === 'string') {
        element = createElement(element || 'div');
      } // Testing via the `in` operator is sufficient for modern browsers and IE.
      // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and
      // "resize", whereas `in` "catches" those.


      eventName = 'on' + eventName;
      isSupported = eventName in element; // Fallback technique for old Firefox - bit.ly/event-detection

      if (!isSupported && needsFallback) {
        if (!element.setAttribute) {
          // Switch to generic element if it lacks `setAttribute`.
          // It could be the `document`, `window`, or something else.
          element = createElement('div');
        }

        element.setAttribute(eventName, '');
        isSupported = typeof element[eventName] === 'function';

        if (element[eventName] !== undefined) {
          // If property was created, "remove it" by setting value to `undefined`.
          element[eventName] = undefined;
        }

        element.removeAttribute(eventName);
      }

      return isSupported;
    }

    return inner;
  }();

  ModernizrProto.hasEvent = hasEvent;
  /**
   * prefixedCSSValue is a way test for prefixed css properties (e.g. display: -webkit-flex)
   *
   * @memberof Modernizr
   * @name Modernizr.prefixedCSSValue
   * @optionName Modernizr.prefixedCSSValue()
   * @optionProp prefixedCSSValue
   * @access public
   * @function prefixedCSSValue
   * @param {string} prop - String name of the property to test for
   * @param {string} value - String value of the non prefixed version of the value you want to test for
   * @returns {string|false} The string representing the (possibly prefixed)
   * valid version of the property, or `false` when it is unsupported.
   * @example
   *
   * `Modernizr.prefixedCSSValue` is a way test for prefixed css properties (e.g. display: -webkit-flex)
   *
   * ```js
   * Modernizr.prefixedCSSValue('background', 'linear-gradient(left, red, red)')
   * ```
   *
   */

  var prefixedCSSValue = function prefixedCSSValue(prop, value) {
    var result = false;
    var elem = createElement('div');
    var style = elem.style;

    if (prop in style) {
      var i = domPrefixes.length;
      style[prop] = value;
      result = style[prop];

      while (i-- && !result) {
        style[prop] = '-' + domPrefixes[i] + '-' + value;
        result = style[prop];
      }
    }

    if (result === '') {
      result = false;
    }

    return result;
  };

  ModernizrProto.prefixedCSSValue = prefixedCSSValue;
  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }

  ;
  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function (str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }

  ;
  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;
  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod; // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270

    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }

    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule); // If this is done after page load we don't want to remove the body so check if body exists

    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+

      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;
  }

  ;
  /**
   * Modernizr.mq tests a given media query, live against the current state of the window
   * adapted from matchMedia polyfill by Scott Jehl and Paul Irish
   * gist.github.com/786768
   *
   * @memberof Modernizr
   * @name Modernizr.mq
   * @optionName Modernizr.mq()
   * @optionProp mq
   * @access public
   * @function mq
   * @param {string} mq - String of the media query we want to test
   * @returns {boolean}
   * @example
   * Modernizr.mq allows for you to programmatically check if the current browser
   * window state matches a media query.
   *
   * ```js
   *  var query = Modernizr.mq('(min-width: 900px)');
   *
   *  if (query) {
   *    // the browser window is larger than 900px
   *  }
   * ```
   *
   * Only valid media queries are supported, therefore you must always include values
   * with your media query
   *
   * ```js
   * // good
   *  Modernizr.mq('(min-width: 900px)');
   *
   * // bad
   *  Modernizr.mq('min-width');
   * ```
   *
   * If you would just like to test that media queries are supported in general, use
   *
   * ```js
   *  Modernizr.mq('only all'); // true if MQ are supported, false if not
   * ```
   *
   *
   * Note that if the browser does not support media queries (e.g. old IE) mq will
   * always return false.
   */

  var mq = function () {
    var matchMedia = window.matchMedia || window.msMatchMedia;

    if (matchMedia) {
      return function (mq) {
        var mql = matchMedia(mq);
        return mql && mql.matches || false;
      };
    }

    return function (mq) {
      var bool = false;
      injectElementWithStyles('@media ' + mq + ' { #modernizr { position: absolute; } }', function (node) {
        bool = (window.getComputedStyle ? window.getComputedStyle(node, null) : node.currentStyle).position == 'absolute';
      });
      return bool;
    };
  }();

  ModernizrProto.mq = mq;
  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;
  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */
  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available

  function nativeTestProps(props, value) {
    var i = props.length; // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface

    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }

      return false;
    } // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
        // Build a condition string for every prefixed variant
        var conditionText = [];

        while (i--) {
          conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
        }

        conditionText = conditionText.join(' or ');
        return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function (node) {
          return getComputedStyle(node, null).position == 'absolute';
        });
      }

    return undefined;
  }

  ;
  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function () {
      return fn.apply(that, arguments);
    };
  }

  ;
  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */

  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {
        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]]; // let's bind a function

        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        } // return the unbound function or obj or value


        return item;
      }
    }

    return false;
  }

  ;
  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  }; // Clean up this element

  Modernizr._q.push(function () {
    delete modElem.elem;
  });

  var mStyle = {
    style: modElem.elem.style
  }; // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.

  Modernizr._q.unshift(function () {
    delete mStyle.style;
  }); // testProps is a generic CSS / DOM property test.
  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.
  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.
  // Property names can be provided in either camelCase or kebab-case.


  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest; // Try native detect first

    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);

      if (!is(result, 'undefined')) {
        return result;
      }
    } // Otherwise do it properly


    var afterInit, i, propsLength, prop, before; // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use
    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.

    var elems = ['modernizr', 'tspan'];

    while (!mStyle.style) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    } // Delete the objects if we created them.


    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;

    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {
        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {
          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {} // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()


          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        } // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
      }
    }

    cleanElems();
    return false;
  }

  ;
  /**
   * testProp() investigates whether a given style property is recognized
   * Property names can be provided in either camelCase or kebab-case.
   *
   * @memberof Modernizr
   * @name Modernizr.testProp
   * @access public
   * @optionName Modernizr.testProp()
   * @optionProp testProp
   * @function testProp
   * @param {string} prop - Name of the CSS property to check
   * @param {string} [value] - Name of the CSS value to check
   * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
   * @returns {boolean}
   * @example
   *
   * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
   * version of the string.
   *
   * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
   *
   * ```js
   * Modernizr.testProp('pointerEvents')  // true
   * ```
   *
   * You can also provide a value as an optional second argument to check if a
   * specific value is supported
   *
   * ```js
   * Modernizr.testProp('pointerEvents', 'none') // true
   * Modernizr.testProp('pointerEvents', 'penguin') // false
   * ```
   */

  var testProp = ModernizrProto.testProp = function (prop, value, useValue) {
    return testProps([prop], undefined, value, useValue);
  };
  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   */


  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
        props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' '); // did they call .prefixed('boxSizing') or are we just testing a prop?

    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest); // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  } // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')


  ModernizrProto.testAllProps = testPropsAll;
  /**
   * prefixed returns the prefixed or nonprefixed property name variant of your input
   *
   * @memberof Modernizr
   * @name Modernizr.prefixed
   * @optionName Modernizr.prefixed()
   * @optionProp prefixed
   * @access public
   * @function prefixed
   * @param {string} prop - String name of the property to test for
   * @param {object} [obj] - An object to test for the prefixed properties on
   * @param {HTMLElement} [elem] - An element used to test specific properties against
   * @returns {string|false} The string representing the (possibly prefixed) valid
   * version of the property, or `false` when it is unsupported.
   * @example
   *
   * Modernizr.prefixed takes a string css value in the DOM style camelCase (as
   * opposed to the css style kebab-case) form and returns the (possibly prefixed)
   * version of that property that the browser actually supports.
   *
   * For example, in older Firefox...
   * ```js
   * prefixed('boxSizing')
   * ```
   * returns 'MozBoxSizing'
   *
   * In newer Firefox, as well as any other browser that support the unprefixed
   * version would simply return `boxSizing`. Any browser that does not support
   * the property at all, it will return `false`.
   *
   * By default, prefixed is checked against a DOM element. If you want to check
   * for a property on another object, just pass it as a second argument
   *
   * ```js
   * var rAF = prefixed('requestAnimationFrame', window);
   *
   * raf(function() {
   *  renderFunction();
   * })
   * ```
   *
   * Note that this will return _the actual function_ - not the name of the function.
   * If you need the actual name of the property, pass in `false` as a third argument
   *
   * ```js
   * var rAFProp = prefixed('requestAnimationFrame', window, false);
   *
   * rafProp === 'WebkitRequestAnimationFrame' // in older webkit
   * ```
   *
   * One common use case for prefixed is if you're trying to determine which transition
   * end event to bind to, you might do something like...
   * ```js
   * var transEndEventNames = {
   *     'WebkitTransition' : 'webkitTransitionEnd', * Saf 6, Android Browser
   *     'MozTransition'    : 'transitionend',       * only for FF < 15
   *     'transition'       : 'transitionend'        * IE10, Opera, Chrome, FF 15+, Saf 7+
   * };
   *
   * var transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
   * ```
   *
   * If you want a similar lookup, but in kebab-case, you can use [prefixedCSS](#modernizr-prefixedcss).
   */

  var prefixed = ModernizrProto.prefixed = function (prop, obj, elem) {
    if (prop.indexOf('@') === 0) {
      return atRule(prop);
    }

    if (prop.indexOf('-') != -1) {
      // Convert kebab-case to camelCase
      prop = cssToDOM(prop);
    }

    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  };
  /**
   * prefixedCSS is just like [prefixed](#modernizr-prefixed), but the returned values are in
   * kebab-case (e.g. `box-sizing`) rather than camelCase (boxSizing).
   *
   * @memberof Modernizr
   * @name Modernizr.prefixedCSS
   * @optionName Modernizr.prefixedCSS()
   * @optionProp prefixedCSS
   * @access public
   * @function prefixedCSS
   * @param {string} prop - String name of the property to test for
   * @returns {string|false} The string representing the (possibly prefixed)
   * valid version of the property, or `false` when it is unsupported.
   * @example
   *
   * `Modernizr.prefixedCSS` is like `Modernizr.prefixed`, but returns the result
   * in hyphenated form
   *
   * ```js
   * Modernizr.prefixedCSS('transition') // '-moz-transition' in old Firefox
   * ```
   *
   * Since it is only useful for CSS style properties, it can only be tested against
   * an HTMLElement.
   *
   * Properties can be passed as both the DOM style camelCase or CSS style kebab-case.
   */


  var prefixedCSS = ModernizrProto.prefixedCSS = function (prop) {
    var prefixedProp = prefixed(prop);
    return prefixedProp && domToCSS(prefixedProp);
  };
  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */


  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }

  ModernizrProto.testAllProps = testAllProps; // Run each test

  testRunner(); // Remove the "no-js" class if it exists

  setClasses(classes);
  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest; // Run the things that are supposed to run after the tests

  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  } // Leak Modernizr namespace


  window.Modernizr = Modernizr;
  ;
})(window, document); // @optional ./vendor/modernizr.js


(function () {
  //FIXME: Pretty useless

  /* MODERNIZR */
  window.Modernizr = window.Modernizr;
})(); // @require ../init.js


(function (Modernizr) {
  /* CLIP PATH POLYGON */
  Modernizr.addTest('clip-path-polygon', Modernizr.testAllProps('clip-path', 'polygon( 0 0 )'));
})(window.Modernizr); // @require ../init.js


(function (Modernizr) {
  /* FLEXBOX */
  Modernizr.addTest('flexbox', Modernizr.testAllProps('flexBasis', '1px'));
})(window.Modernizr); // @require ../init.js


(function (Modernizr) {
  /* FLEXBOX LEGACY */
  Modernizr.addTest('flexbox-legacy', Modernizr.testAllProps('boxDirection', 'reverse'));
})(window.Modernizr); // @require ../init.js


(function (Modernizr) {
  /* FLEXBOX TWEENER */
  Modernizr.addTest('flexbox-tweener', Modernizr.testAllProps('flexAlign', 'end'));
})(window.Modernizr); // @require ../init.js


(function (Modernizr) {
  /* LOCAL STORAGE */
  function supportsLocalStorage() {
    var test = 'modernizr';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  Modernizr.addTest('localstorage', supportsLocalStorage);
})(window.Modernizr); // @require ../init.js


(function (Modernizr) {
  /* POSITION STICKY */
  Modernizr.addTest('position-sticky', Modernizr.testAllProps('position', 'sticky'));
})(window.Modernizr); // @require ../init.js


(function (Modernizr) {
  /* SCROLLBAR */
  var size;
  Modernizr.testStyles('#modernizr {width:100px;height:100px;overflow:scroll;position:absolute;z-index:-1}', function (ele) {
    return size = ele.offsetWidth - ele.clientWidth;
  }); // The absolute position ensures that the height is setted correctly (FF and IE bug)

  Modernizr.addTest('overlay-scrollbars', !size);
  Modernizr.addTest('scrollbar-size-' + size, true);
})(window.Modernizr);

(function () {
  /* REQUEST ANIMATION FRAME */
  if (window.requestAnimationFrame) return;

  window.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 16);
  };

  window.cancelAnimationFrame = function (handle) {
    return clearTimeout(handle);
  };
})(); // @require ../init.js
// @require core/shims/shims/requestAnimationFrame.js


(function (_) {
  /* FRAMES */
  _.frames = function (fn) {
    var wait, args;

    function proxy() {
      wait = false;
      fn.apply(undefined, args);
    }

    function framed() {
      if (wait) return;
      wait = true;
      args = arguments;
      requestAnimationFrame(proxy);
    }

    return framed;
  };
})(window._); // @optional ./clone_deep.js
// @optional ./constants.js
// @optional ./css2dom.js
// @optional ./difference.js
// @optional ./extend.js
// @optional ./find_matches.js
// @optional ./flatten.js
// @optional ./format.js
// @optional ./frames.js
// @optional ./is_equal_json.js
// @optional ./merge.js
// @optional ./move.js
// @optional ./nat_sort.js
// @optional ./now_secs.js
// @optional ./omit.js
// @optional ./pick.js
// @optional ./prop.js
// @optional ./replace_all.js
// @optional ./round_closer.js
// @optional ./template.js
// @optional ./template_minify.js
// @optional ./template_settings.js
// @optional ./time_ago.js
// @optional ./uniq.js
// @optional ./upper_first.js
// @optional ./wait.js
// @optional ./xor.js
// @require ./init.js
// @require ./helpers/helpers.js
// @require ../init.js
// @require core/lodash/lodash.js
// @require core/shims/shims/requestAnimationFrame.js
// Pretty simple, lightweight, alternative of $.fn.animate implementing a subset of its functionalities
//FIXME: Doesn't work this css properties that don't accept pixel values


(function ($, _) {
  /* DEFAULTS */
  var defaults = {
    easing: 'easeOutQuad',
    duration: 350,
    internals: {
      getProp: function getProp(ele, prop) {
        return parseFloat(getComputedStyle(ele)[prop]);
      },
      //TODO: Precompute getComputedStyle maybe
      setProp: function setProp(ele, prop, value) {
        return ele.style[prop] = value + "px";
      }
    },
    callbacks: {
      start: _.noop,
      tick: _.noop,
      end: _.noop
    }
  };
  /* ANIMATE */

  function animate(eles, props, options) {
    eles = _.castArray(eles);
    options = _.merge({}, $.animate.defaults, options);
    var easing = $.animate.easings[options.easing],
        propsKeys = Object.keys(props),
        startTime = Date.now(),
        isStart = true,
        endedNr = 0;
    eles.forEach(function (ele) {
      var startProps = {},
          deltaProps = {};
      propsKeys.forEach(function (prop) {
        startProps[prop] = options.internals.getProp(ele, prop);
        deltaProps[prop] = props[prop] - startProps[prop];
      });

      function tick() {
        /* START */
        if (isStart) {
          options.callbacks.start();
          isStart = false;
        }
        /* TICK */


        var currTime = Date.now(),
            currDuration = Math.min(options.duration, currTime - startTime);
        propsKeys.forEach(function (prop) {
          var value = easing(null, currDuration, startProps[prop], deltaProps[prop], options.duration);
          options.internals.setProp(ele, prop, value);
        });
        options.callbacks.tick();
        /* END */

        var isEnd = currDuration >= options.duration;

        if (isEnd) {
          endedNr += 1;

          if (endedNr === eles.length) {
            options.callbacks.end();
          }
        } else {
          requestAnimationFrame(tick);
        }
      }

      tick();
    });
  }
  /* EASINGS */


  var easings = {
    // Any of the easings provided by http://gsgd.co.uk/sandbox/jquery/easing can be used
    easeInQuad: function easeInQuad(x, t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function easeOutQuad(x, t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  };
  /* EXPORT */

  $.animate = animate;
  $.animate.defaults = defaults;
  $.animate.easings = easings;
})(window.$, window._); // @require ./animate.js
// Alternative flavor of $.animate that by default animates props instead of css props


(function ($, _) {
  /* DEFAULTS */
  var defaults = {
    internals: {
      getProp: function getProp(ele, prop) {
        return parseFloat(ele[prop]);
      },
      setProp: function setProp(ele, prop, value) {
        return ele[prop] = value;
      }
    }
  };
  /* ANIMATE PROP */

  function animateProp(eles, props, options) {
    options = _.merge({}, $.animateProp.defaults, options);
    return $.animate(eles, props, options);
  }
  /* EXPORT */


  $.animateProp = animateProp;
  $.animateProp.defaults = defaults;
})(window.$, window._); // @require ../init.js
// @require core/lodash/lodash.js


(function ($, _) {
  /* IS WIDGET */
  // Checks if a variable is probably a widget //FIXME: Not very robust
  $.isWidget = function (x) {
    return _.isFunction(x) && _.isObject(x.config) && _.isString(x.config.name);
  };
})(window.$, window._); // @require ../init.js
// @require core/lodash/lodash.js


(function ($, _) {
  /* UTILTIES */
  function parseEventName(fullName) {
    var parts = fullName.split('.');
    return [parts[0], parts.slice(1).join('.')]; // [name, namespaces]
  }
  /* MAKE EVENT */
  // Creates an event by name


  $.makeEvent = function (fullName, originalEvent) {
    var _parseEventName = parseEventName(fullName),
        name = _parseEventName[0],
        namespaces = _parseEventName[1],
        event;

    if ($.Event) {
      event = new $.Event(originalEvent || name);
      event.type = name;
    } else {
      event = document.createEvent('HTMLEvents');
      event.initEvent(name, true, false);
      event.originalEvent = originalEvent;
    }

    event.namespace = namespaces;
    return event;
  };
})(window.$, window._); // @require ../init.js
// @require ./animate_prop.js
// @require ./elements.js


(function ($) {
  /* SCROLL */
  //TODO: Not working but probably needed, like for scrolling down a chat
  // $.fn.scrollBottom = function ( value ) {
  //
  //   if ( !this.length ) return null;
  //
  //   let height = this.innerHeight (),
  //       scrollHeight = this[0].scrollHeight || height;
  //
  //   return _.isUndefined ( value ) ? scrollHeight - height - this[0].scrollTop : this[0].scrollTop = scrollHeight - height - value;
  //
  // };
  //
  // $.fn.scrollRight = function ( value ) {
  //
  //   if ( !this.length ) return null;
  //
  //   let width = this.innerWidth (),
  //       scrollWidth = this[0].scrollWidth || width;
  //
  //   return _.isUndefined ( value ) ? scrollWidth - width - this[0].scrollLeft : this[0].scrollLeft = scrollWidth - width - value;
  //
  // };
  $.scrollTo = function (target) {
    var scrollTop = $(target).offset().top,
        eles = [$.html, $.body];

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    $.animateProp.apply($, [eles, {
      scrollTop: scrollTop
    }].concat(args));
  };

  $.fn.scrollParent = function (includeHidden) {
    // Take from jQuery UI, optimized for performance
    var position = this.css('position');
    if (position === 'fixed') return $.$document;
    var excludeStaticParent = position === 'absolute',
        overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        $parents = this.parents();

    for (var i = 0, l = $parents.length; i < l; i++) {
      var $parent = $($parents[i]);
      if (excludeStaticParent && $parent.css('position') === 'static') continue;

      if (overflowRegex.test($parent.css('overflow') + $parent.css('overflow-y') + $parent.css('overflow-x'))) {
        return $parent;
      }
    }

    return $.$document;
  };

  $.hasScrollbars = function (node, both) {
    if (both === void 0) {
      both = false;
    }

    return both ? $.hasScrollbarY(node) && $.hasScrollbarX(node) : $.hasScrollbarY(node) || $.hasScrollbarX(node);
  };

  $.fn.hasScrollbars = function () {
    return $.hasScrollbars(this[0]);
  };

  $.hasScrollbarX = function (node) {
    //FIXME: Doesn't work on body
    if (!node) return false;
    var style = getComputedStyle(node);
    if (style.overflowX === 'scroll') return true;
    var isScrollable = node.scrollWidth > node.clientWidth;
    return isScrollable && style.overflowX === 'auto';
  };

  $.fn.hasScrollbarX = function () {
    return $.hasScrollbarX(this[0]);
  };

  $.hasScrollbarY = function (node) {
    if (!node) return false;
    var style = getComputedStyle(node);
    if (style.overflowY === 'scroll') return true;
    var isScrollable = node.scrollHeight > node.clientHeight;
    return isScrollable && style.overflowY === 'auto';
  };

  $.fn.hasScrollbarY = function () {
    return $.hasScrollbarY(this[0]);
  };

  $.fn.toggleScroll = function (force, keepScrollbars) {
    if (force === void 0) {
      force = this.hasClass('overflow-hidden');
    }

    return force ? this.enableScroll() : this.disableScroll(keepScrollbars);
  };

  $.fn.disableScroll = function (keepScrollbars) {
    if (keepScrollbars === void 0) {
      keepScrollbars = true;
    }

    //TODO: Implement keepScrollbars, we should prevent default scroll events behaviour
    return this.addClass('overflow-hidden');
  };

  $.fn.enableScroll = function () {
    return this.removeClass('overflow-hidden');
  };
})(window.$); // @optional ./animate.js
// @optional ./animate_prop.js
// @optional ./diff.js
// @optional ./elements.js
// @optional ./event_namespacer.js
// @optional ./event_xy.js
// @optional ./find_all.js
// @optional ./get_rect.js
// @optional ./has_attribute.js
// @optional ./hsl.js
// @optional ./is_attached.js
// @optional ./is_editable.js
// @optional ./is_event.js
// @optional ./is_focused.js
// @optional ./is_visible.js
// @optional ./is_widget.js
// @optional ./make_event.js
// @optional ./remove.js
// @optional ./scroll.js
// @require ./init.js
// @require ./helpers/helpers.js
// @require ../init.js
// @require core/jquery/jquery.js


(function (Modernizr, $) {
  /* CLIP PATH URL */
  $(function () {
    /* SVG */
    var ns = 'http://www.w3.org/2000/svg',
        svg = document.createElementNS(ns, 'svg'),
        clip = document.createElementNS(ns, 'clipPath'),
        rect = document.createElementNS(ns, 'rect');
    clip.setAttribute('id', 'ModernizrClipPath');
    rect.setAttribute('width', '0');
    clip.appendChild(rect);
    svg.appendChild(clip);
    /* ELEMENT */

    var ele = document.createElement('div');
    ele.style.cssText = 'width:2px;height:2px;position:fixed;top:0;left:0;z-index:1000000000;opacity:0;';
    ele.style[Modernizr.prefixed('clip-path')] = 'url(#ModernizrClipPath)';
    /* APPENDING */

    document.body.appendChild(svg);
    document.body.appendChild(ele);
    /* CHECKING */

    var offset = ele.getBoundingClientRect(),
        supported = document.elementFromPoint(offset.left + 1, offset.top + 1) !== ele;
    /* CLEANING */

    document.body.removeChild(ele);
    document.body.removeChild(svg);
    /* EXPORTING */

    Modernizr.addTest('clip-path-url', supported);
  });
})(window.Modernizr, window.$); // @optional ./clip_path_polygon.js
// @optional ./clip_path_url.js
// @optional ./flexbox.js
// @optional ./flexbox_legacy.js
// @optional ./flexbox_tweener.js
// @optional ./local_storage.js
// @optional ./position_sticky.js
// @optional ./scrollbar.js
// @require ./init.js
// @require ./tests/tests.js
// @require core/lodash/lodash.js
// @require core/modernizr/modernizr.js


(function (_, Modernizr) {
  /* LOCAL STORAGE */
  if (Modernizr.localstorage) return;
  window.localStorage = {
    key: _.null,
    removeItem: _.undefined,
    clear: _.undefined,
    getItem: _.null,
    setItem: _.undefined
  };
})(window._, window.Modernizr); // @optional ./localStorage.js
// @optional ./requestAnimationFrame.js
// @require ./shims/shims.js
// @optional core/polyfills/polyfills.js
// @optional core/shims/shims.js
// @require core/lodash/lodash.js
// @require core/jquery/jquery.js
// @require core/modernizr/modernizr.js


(function () {
  /* SVELTO */
  var Svelto = {
    VERSION: '1.0.0',
    ENVIRONMENT: 'production',
    DEVELOPMENT: 'production' === 'development',

    /* DEPENDENCIES */
    _: window._,
    $: window.$,
    Modernizr: window.Modernizr,

    /* NAMESPACES */
    Instances: {},
    Templates: {},
    Widgets: {}
  };
  /* EXPORT */

  window.Svelto = Svelto;
})(); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* VARIABLES */
  var userAgent = navigator.userAgent ? navigator.userAgent.toLowerCase() : '',
      vendor = navigator.vendor ? navigator.vendor.toLowerCase() : '',
      // Fixes an IE10 bug, `navigator.vendor` it's `undefined` there
  appVersion = navigator.appVersion ? navigator.appVersion.toLowerCase() : '';
  /* CHECKS */

  var isOpera = /^Opera\//i.test(userAgent) || /\x20OPR\//i.test(userAgent),

  /* Opera <= 12 || Opera >= 15 */
  isIpod = /ipod/i.test(userAgent),
      isIphone = !isIpod && /iphone/i.test(userAgent),
      isIpad = /ipad/i.test(userAgent),
      isAndroid = /android/i.test(userAgent),
      isAndroidPhone = isAndroid && /mobile/i.test(userAgent),
      isAndroidTablet = isAndroid && !isAndroidPhone,
      isBlackberry = /blackberry/i.test(userAgent) || /BB10/i.test(userAgent),
      isWindows = /win/i.test(appVersion),
      isWindowsPhone = isWindows && /phone/i.test(userAgent),
      isWindowsTablet = isWindows && !isWindowsPhone && /touch/i.test(userAgent),
      isMobile = isIphone || isIpod || isAndroidPhone || isBlackberry || isWindowsPhone,
      isTablet = isIpad || isAndroidTablet || isWindowsTablet;
  /* BROWSER */

  var Browser = {
    support: {
      browsers: ['chrome', 'firefox', 'edge', 'ie', 'opera', 'safari', 'uc'],
      devices: ['desktop', 'mobile', 'tablet'],
      oss: ['ios', 'android', 'blackberry', 'linux', 'mac', 'windows']
    },
    is: {
      chrome: !isOpera && /chrome|chromium/i.test(userAgent) && /google inc/.test(vendor),
      firefox: /firefox/i.test(userAgent),
      edge: /(edge)\/((\d+)?[\w\.]+)/i.test(userAgent),
      ie: /msie/i.test(userAgent) || 'ActiveXObject' in window,

      /* IE || EDGE */
      opera: isOpera,
      safari: /safari/i.test(userAgent) && /apple computer/i.test(vendor),
      uc: /ucbrowser/i.test(userAgent),
      iphone: isIphone,
      ipad: isIpad,
      ipod: isIpod,
      ios: isIphone || isIpad || isIpod,
      android: isAndroid,
      androidPhone: isAndroidPhone,
      androidTablet: isAndroidTablet,
      blackberry: isBlackberry,
      linux: /linux/i.test(appVersion),
      mac: !(isIphone || isIpad || isIpod) && /mac/i.test(appVersion),
      windows: isWindows,
      windowsPhone: isWindowsPhone,
      windowsTablet: isWindowsTablet,
      mobile: isMobile,
      tablet: isTablet,
      desktop: !isMobile && !isTablet,
      online: function online() {
        return navigator.onLine;
      },
      offline: function offline() {
        return !navigator.onLine;
      },
      touchDevice: 'ontouchstart' in window || 'DocumentTouch' in window && document instanceof window.DocumentTouch
    }
  };
  /* EXPORT */

  Svelto.Browser = Browser;
})(Svelto.$, Svelto._, Svelto); // @require ../browser.js


(function (Modernizr, Browser) {
  /* BROWSERS */
  Browser.support.browsers.forEach(function (browser) {
    Modernizr.addTest(browser, Browser.is[browser]);
  });
})(Svelto.Modernizr, Svelto.Browser); // @require ../browser.js


(function (Modernizr, Browser) {
  /* DEVICES */
  Browser.support.devices.forEach(function (device) {
    Modernizr.addTest(device, Browser.is[device]);
  });
})(Svelto.Modernizr, Svelto.Browser); // @require ../browser.js


(function (Modernizr, Browser) {
  /* OSS */
  Browser.support.oss.forEach(function (os) {
    Modernizr.addTest(os, Browser.is[os]);
  });
})(Svelto.Modernizr, Svelto.Browser); // @priority 900
// @optional ./browsers.js
// @optional ./devices.js
// @optional ./oss.js
// @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* BREAKPOINTS */
  var Breakpoints = {
    xsmall: 'xs',
    small: 'sm',
    medium: 'md',
    large: 'lg',
    xlarge: 'xl',
    widths: {
      xsmall: 0,
      small: 512,
      medium: 768,
      large: 1024,
      xlarge: 1216
    }
  };
  /* EXPORT */

  Svelto.Breakpoints = Breakpoints;
})(Svelto.$, Svelto._, Svelto); // @require core/browser/browser.js
// @require core/svelto/svelto.js


(function ($, _, Svelto, Browser) {
  /* KEYBOARD */
  var Keyboard = {
    keys: {
      BACKSPACE: 8,
      COMMA: 188,
      DEL: 46,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESC: 27,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      SPACEBAR: 32,
      TAB: 9,
      UP: 38
    },
    keystroke: {
      match: function match(event, keystroke) {
        // `ctmd` is treated as `cmd` on Mac, and as `ctrl` elsewhere
        var specialKeys = ['ctrl', 'cmd', 'ctmd', 'alt', 'shift'],
            keys = keystroke.split('+').map(function (key) {
          return key.trim().toLowerCase();
        });

        if (keys.includes('ctmd')) {
          if (!Keyboard.keystroke.hasCtrlOrCmd(event)) return false;
        } else {
          if (keys.includes('ctrl') !== event.ctrlKey) return false;
          if (keys.includes('cmd') !== event.metaKey) return false;
        }

        if (keys.includes('alt') !== event.altKey) return false;
        if (keys.includes('shift') !== event.shiftKey) return false;

        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];

          if (!specialKeys.includes(key)) {
            if (!(event.keyCode === Keyboard.keys[key.toUpperCase()] || String.fromCharCode(event.keyCode).toLowerCase() === key)) return false;
          }
        }

        return true;
      },
      hasCtrlOrCmd: function hasCtrlOrCmd(event) {
        return !Browser.is.mac && event.ctrlKey || Browser.is.mac && event.metaKey;
      }
    }
  };
  /* EXPORT */

  Svelto.Keyboard = Keyboard;
})(Svelto.$, Svelto._, Svelto, Svelto.Browser); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* MOUSE */
  var Mouse = {
    buttons: {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2
    },
    hasButton: function hasButton(event, button, orNone) {
      if (orNone === void 0) {
        orNone = false;
      }

      if ('originalEvent' in event) {
        return Mouse.hasButton(event.originalEvent, button, orNone);
      }

      return orNone && !('button' in event) || event.button === button;
    }
  };
  /* EXPORT */

  Svelto.Mouse = Mouse;
})(Svelto.$, Svelto._, Svelto); // @require core/browser/browser.js
// @require core/mouse/mouse.js
// @require core/svelto/svelto.js
// Basically it exists other than to provide the convinient `Pointer` global also for removing the 300ms delay on click by providing the `tap` event


(function ($, _, Svelto, Browser, Mouse) {
  /* VARIABLES */
  var prefix = 'spointer';
  /* POINTER */

  var Pointer = {
    /* OPTIONS */
    options: {
      events: {
        prefix: prefix,
        emulated: {
          tune: true,
          // Whether to fine-tune the timeout or not
          tuned: false,
          // Whether the timeout has been tuned or not
          timeout: 2500,
          // Milliseconds to wait for an emulated event
          min: 500,
          // Minimum fine-tuned timeout
          multiplier: 2.5 // The detected timeout will be multiplied by this

        }
      },
      tap: {
        threshold: 6 // Over this distance threshold the touch event won't be considered a tap

      },
      dbltap: {
        interval: 300 // 2 taps within this interval will trigger a dbltap event

      }
    },

    /* EVENTS */
    tap: prefix + "tap",
    dbltap: prefix + "dbltap",
    click: 'click',
    dblclick: 'dblclick',
    down: Browser.is.touchDevice ? 'touchstart mousedown' : 'mousedown',
    move: Browser.is.touchDevice ? 'touchmove mousemove' : 'mousemove',
    up: Browser.is.touchDevice ? 'touchend mouseup' : 'mouseup',
    cancel: Browser.is.touchDevice ? 'touchcancel mouseleave' : 'mouseleave',
    over: 'mouseover',
    enter: 'mouseenter',
    out: 'mouseout',
    leave: 'mouseleave',

    /* METHODS */
    isDeviceEvent: function isDeviceEvent(event, device) {
      return event.type.startsWith(device.toLowerCase());
    },
    isPointerEvent: function isPointerEvent(event) {
      return Pointer.isDeviceEvent(event, Pointer.options.events.prefix);
    },
    isMouseEvent: function isMouseEvent(event) {
      return Pointer.isDeviceEvent(event, 'mouse');
    },
    isTouchEvent: function isTouchEvent(event) {
      return Pointer.isDeviceEvent(event, 'touch');
    }
  };
  /* EVENTS METHODS */

  ['tap', 'dbltap'].forEach(function (name) {
    $.fn[name] = function (data, fn) {
      return arguments.length ? this.on(Pointer[name], null, data, fn) : this.triggger(name);
    };
  });
  /* ----- POINTER LOGIC ----- */

  /* VARIABLES */

  var canTouch = Browser.is.touchDevice,
      isTouch,
      delta = 0,
      skipping,
      scrolled,
      timeoutId,
      downEvent,
      emulatedTimeoutTimestamp,
      prevTapTimestamp = 0,
      dbltapTriggerable = true;
  /* HANDLERS */

  function downHandler(event) {
    if (canTouch) {
      isTouch = Pointer.isTouchEvent(event);

      if (isTouch) {
        if (!emulatedTimeoutTimestamp && Pointer.options.events.emulated.tune) emulatedTimeoutTimestamp = Date.now();
        scrolled = false;
        window.onscroll = scrollHandler;
        delta++;
      } else if (delta > 0) {
        if (emulatedTimeoutTimestamp && !Pointer.options.events.emulated.tuned && Pointer.options.events.emulated.tune) {
          Pointer.options.events.emulated.timeout = Math.ceil(Math.max(Pointer.options.events.emulated.min, (Date.now() - emulatedTimeoutTimestamp) * Pointer.options.events.emulated.multiplier));
          Pointer.options.events.emulated.tuned = true;
        }

        skipping = true;
        delta--;
        return;
      }

      skipping = false;
    }

    downEvent = event;
  }

  function upHandler(event) {
    if (skipping) return;
    if (!downEvent) return;
    reset();
    if (isTouch && scrolled) return;
    if (!isTouch && !Mouse.hasButton(event, Mouse.buttons.LEFT, true)) return;
    if (downEvent.target !== event.target) return;

    if (isTouch) {
      var downXY = $.eventXY(downEvent),
          upXY = $.eventXY(event),
          threshold = Pointer.options.tap.threshold;
      if (Math.abs(downXY.x - upXY.x) > threshold || Math.abs(downXY.y - upXY.y) > threshold) return;
    }

    var tapTimestamp = event.timeStamp || Date.now(),
        tapEvent = $.makeEvent(Pointer.tap, event),
        $target = $(downEvent.target);
    $target.trigger(tapEvent);

    if (tapTimestamp - prevTapTimestamp <= Pointer.options.dbltap.interval) {
      if (dbltapTriggerable) {
        var dbltapEvent = $.makeEvent(Pointer.dbltap, event);
        $target.trigger(dbltapEvent);
        dbltapTriggerable = false;
      }
    } else {
      dbltapTriggerable = true;
    }

    prevTapTimestamp = tapTimestamp;
  }

  function scrollHandler() {
    scrolled = true;
    window.onscroll = null;
  }
  /* RESET */


  function reset() {
    setTimeout(resetEvents, 0);

    if (isTouch) {
      if (!scrolled) window.onscroll = null;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(resetDelta, Pointer.options.events.emulated.timeout);
    }
  }

  function resetEvents() {
    downEvent = undefined;
  }

  function resetDelta() {
    delta = 0;
    timeoutId = false;
  }
  /* INIT */


  $.$document.on(Pointer.down, downHandler);
  $.$document.on(Pointer.up, upHandler);
  $.$document.on(Pointer.cancel, reset);
  /* EXPORT */

  Svelto.Pointer = Pointer;
})(Svelto.$, Svelto._, Svelto, Svelto.Browser, Svelto.Mouse); // @require core/svelto/svelto.js
//TODO: Maybe rename it, `Readify` doesn't sound right
//FIXME: We actually `require` Widget, but requiring it creates a circular dependency...


(function ($, _, Svelto, Widgets) {
  /* READIFY */
  var Readify =
  /*#__PURE__*/
  function () {
    function Readify() {
      this.queue = [];
      this._isReady = !!window.__svelto_readify_ready;
    }
    /* METHODS */


    var _proto = Readify.prototype;

    _proto.get = function get() {
      return this.queue;
    };

    _proto.add = function add(fn, ready) {
      if (ready === void 0) {
        ready = false;
      }

      if (ready || this._isReady) {
        this.worker(fn);
      } else {
        this.queue.push(fn);
      }
    };

    _proto.remove = function remove(fn) {
      _.pull(this.queue, fn);
    };

    _proto.isReady = function isReady() {
      return this._isReady;
    };

    _proto.ready = function ready() {
      if (this._isReady) return;
      this._isReady = true;
      this.queue.forEach(this.worker.bind(this));
      this.queue = [];
    };

    _proto.worker = function worker(fn) {
      if ($.isWidget(fn)) {
        var Widget = fn,
            ready = Widget.ready || Widget.__proto__.ready || Widgets.Widget.ready,
            //IE10 support -- static property
        setReady = Widget._setReady || Widget.__proto__._setReady || Widgets.Widget._setReady; //IE10 support -- static property

        ready.call(Widget, setReady.bind(Widget));
      } else {
        fn();
      }
    };

    return Readify;
  }();
  /* EXPORT */


  Svelto.Readify = new Readify();
  /* READY */

  if (!Svelto.Readify.isReady()) {
    $(Svelto.Readify.ready.bind(Svelto.Readify));
  }
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets); // @require core/breakpoints/breakpoints.js
// @require core/readify/readify.js


(function ($, _, Svelto, Breakpoints, Readify) {
  /* BREAKPOINT */
  var Breakpoint = {
    /* VARIABLES */
    previous: undefined,
    // Previous breakpoint
    current: undefined,
    // Current breakpoint

    /* RESIZE */
    __resize: function __resize() {
      var current = this.get();
      if (current === this.current) return;
      this.previous = this.current;
      this.current = current;
      $.$window.trigger('breakpoint:change');
    },

    /* API */
    init: function init() {
      Breakpoint.current = Breakpoint.get();
      $.$window.on('resize', _.frames(Breakpoint.__resize.bind(Breakpoint)));
    },
    get: function get() {
      this._widths = this._widths || _.natSort(Object.values(Breakpoints.widths));
      this._width2breakpoint = this._width2breakpoint || _.invert(Breakpoints.widths);
      var width = $.window.innerWidth;

      for (var i = 0, l = this._widths.length; i < l; i++) {
        if (width >= this._widths[i] && (i === l - 1 || width < this._widths[i + 1])) {
          return this._width2breakpoint[this._widths[i]];
        }
      }
    }
  };
  /* INIT */

  Breakpoint.init();
  /* EXPORT */

  Svelto.Breakpoint = Breakpoint;
})(Svelto.$, Svelto._, Svelto, Svelto.Breakpoints, Svelto.Readify); // @require core/readify/readify.js
// @require core/svelto/svelto.js
// `body` is used as a fallback


(function ($, _, Svelto, Readify) {
  /* LAYOUT */
  Readify.add(function () {
    $.$layout = $('.layout, body').first();
  });

  $.getLayoutOf = function (ele) {
    if (ele) {
      var $ele = $(ele),
          $layout = $ele[0] === $.body ? $.$body : $ele.parent().closest('.layout, body');
      if ($layout.length) return $layout;
    }

    return $.$layout;
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Readify); // @require core/readify/readify.js
// Monkey patching `history.pushState` so that it will trigger an event that we can then use to properly trigger a `route` event


(function ($, _, Svelto, Readify, history) {
  /* PUSH STATE */
  Readify.add(function () {
    var pushState = history.pushState;

    history.pushState = function (state) {
      if (_.isFunction(history.onpushstate)) {
        history.onpushstate({
          state: state
        });
      }

      $.$window.trigger('pushstate');
      return pushState.apply(history, arguments);
    };
  });
})(Svelto.$, Svelto._, Svelto, Svelto.Readify, window.history); // @require core/push_state/push_state.js
// @require core/readify/readify.js

/* ROUTE */


(function ($, _, Svelto, Readify) {
  Readify.add(function () {
    var previous = window.location.href.split('#')[0];
    $.$window.on('popstate pushstate', function () {
      setTimeout(function () {
        // We need the `window.location.href` to get updated before
        var current = window.location.href.split('#')[0];

        if (current !== previous) {
          previous = current;
          $.$window.trigger('route');
        }
      });
    });
  });
})(Svelto.$, Svelto._, Svelto, Svelto.Readify); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* WIDGET */
  var widget = {
    new: function _new(Widget, element, options) {
      return new Widget(options, element);
    },
    is: function is(element, Widget, loose) {
      if (loose === void 0) {
        loose = false;
      }

      // `loose` controls whether we strictly require an instance of it or just a selector match
      if (loose && Widget.config.selector && $(element).is(Widget.config.selector)) return true;
      return !!widget.get(element, Widget, undefined, false);
    },
    get: function get(element, Widget, options, instanciate) {
      if (instanciate === void 0) {
        instanciate = true;
      }

      return element["_" + Widget.config.name] || instanciate && widget.new(Widget, element, options);
    },
    set: function set(element, instance) {
      element["_" + instance.name] = instance;
    },
    remove: function remove(element, instance) {
      // Both widgets and instances can be passed
      var name = $.isWidget(instance) ? instance.config.name : instance.name;
      delete element["_" + name];
    }
  };
  /* EXPORT */

  $.widget = widget;
})(Svelto.$, Svelto._, Svelto); // @require core/widget/helpers.js


(function ($, _, Svelto) {
  /* PLUGIN */
  var Plugin = {
    call: function call(Widget, $ele, args) {
      var options = args[0],
          isMethodCall = _.isString(options) && options.charAt(0) !== '_'; // Methods starting with '_' are private

      for (var i = 0, l = $ele.length; i < l; i++) {
        var instance = $.widget.get($ele[i], Widget, options);

        if (isMethodCall && _.isFunction(instance[options])) {
          var returnValue = args.length > 1 ? instance[options].apply(instance, Array.prototype.slice.call(args, 1)) : instance[options]();
          if (!_.isNil(returnValue)) return returnValue;
        }
      }

      return $ele;
    },
    make: function make(Widget) {
      if (!Widget.config.plugin) return;

      $.fn[Widget.config.name] = function () {
        return Plugin.call(Widget, this, arguments);
      };
    },
    unmake: function unmake(Widget) {
      if (!Widget.config.plugin) return;
      delete $.fn[Widget.config.name];
    }
  };
  /* EXPORT */

  Svelto.Plugin = Plugin;
})(Svelto.$, Svelto._, Svelto); // @require core/readify/readify.js
//FIXME: We actually `require` Widget, but requiring it creates a circular dependency...


(function ($, _, Svelto, Widgets, Readify) {
  /* WIDGETIZE */
  var Widgetize =
  /*#__PURE__*/
  function () {
    function Widgetize() {
      this.widgetizers = {};
    }
    /* METHODS */


    var _proto2 = Widgetize.prototype;

    _proto2.get = function get() {
      return this.widgetizers;
    };

    _proto2.add = function add(selector, widgetizer, data, ready) {
      if (ready === void 0) {
        ready = false;
      }

      if (_.isObject(selector)) {
        var Widget = selector;
        if (!Widget.config.plugin || !_.isString(Widget.config.selector)) return;
        var widgetize = Widget.widgetize || Widget.__proto__.widgetize || Widgets.Widget.widgetize; //IE10 support -- static property

        return this.add(Widget.config.selector, widgetize, Widget, widgetizer);
      }

      if (!(selector in this.widgetizers)) {
        this.widgetizers[selector] = [];
      }

      this.widgetizers[selector].push([widgetizer, data]);

      if (ready || Readify.isReady()) {
        var $widgets = $.$html.findAll(selector);
        this.worker([[widgetizer, data]], $widgets);
      }
    };

    _proto2.remove = function remove(selector, widgetizer) {
      if (_.isObject(selector)) {
        var Widget = selector;
        if (!Widget.config.plugin || !_.isString(Widget.config.selector)) return;
        var widgetize = Widget.widgetize || Widget.__proto__.widgetize || Widgets.Widget.widgetize; //IE10 support -- static property

        return this.remove(Widget.config.selector, widgetize);
      }

      if (selector in this.widgetizers) {
        if (widgetizer) {
          for (var i = 0, l = this.widgetizers[selector].length; i < l; i++) {
            if (this.widgetizers[selector][i][0] === widgetizer) {
              this.widgetizers[selector].splice(i, 1);
            }
          }
        }

        if (!widgetizer || !this.widgetizers[selector].length) {
          delete this.widgetizers[selector];
        }
      }
    };

    _proto2.ready = function ready() {
      this.on($.$body);
    };

    _proto2.on = function on($root) {
      for (var selector in this.widgetizers) {
        if (!this.widgetizers.hasOwnProperty(selector)) continue;
        var widgetizers = this.widgetizers[selector],
            $widgets = $root.findAll(selector);
        this.worker(widgetizers, $widgets);
      }
    };

    _proto2.worker = function worker(widgetizers, $widgets) {
      for (var ei = 0, el = $widgets.length; ei < el; ei++) {
        var widget = $widgets[ei];

        for (var wi = 0, wl = widgetizers.length; wi < wl; wi++) {
          widgetizers[wi][0](widget, widgetizers[wi][1]);
        }
      }
    };

    return Widgetize;
  }();
  /* EXPORT */


  Svelto.Widgetize = new Widgetize();
  /* PLUGIN */

  $.fn.widgetize = function () {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i].nodeType !== 1) continue; // It doesn't make sense to widgetize other type of nodes

      Svelto.Widgetize.on($(this[i]));
    }

    return this;
  };
  /* READY */


  if (!Readify.isReady()) {
    Readify.add(Svelto.Widgetize.ready.bind(Svelto.Widgetize));
  }
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Readify); // @require core/plugin/plugin.js
// @require core/readify/readify.js
// @require core/widgetize/widgetize.js


(function ($, _, Svelto, Instances, Widgets, Plugin, Readify, Widgetize) {
  /* FACTORY */
  var Factory = {
    /* API */
    make: function make(Widget, config, namespace, instances) {
      if (namespace === void 0) {
        namespace = Widgets;
      }

      if (instances === void 0) {
        instances = Instances;
      }

      for (var i = 0, l = this.makers.order.length; i < l; i++) {
        this.makers[this.makers.order[i]](Widget, config, namespace, instances);
      }
    },
    unmake: function unmake(Widget, namespace, instances) {
      if (namespace === void 0) {
        namespace = Widgets;
      }

      if (instances === void 0) {
        instances = Instances;
      }

      for (var i = 0, l = this.unmakers.order.length; i < l; i++) {
        this.unmakers[this.unmakers.order[i]](Widget, namespace, instances);
      }
    },
    ready: function ready(Widget, namespace, instances) {
      if (namespace === void 0) {
        namespace = Widgets;
      }

      if (instances === void 0) {
        instances = Instances;
      }

      for (var i = 0, l = this.readifiers.order.length; i < l; i++) {
        this.readifiers[this.readifiers.order[i]](Widget, namespace, instances);
      }
    },

    /* MAKERS */
    makers: {
      order: ['configure', 'namespace', 'instances', 'plugin', 'ready', 'widgetize'],
      // The order in which the makers will be called
      configure: function configure(Widget, config) {
        if (config === void 0) {
          config = {};
        }

        config.Name = _.upperFirst(config.name);
        Widget.config = config;
      },
      namespace: function namespace(Widget, config, _namespace) {
        if (!_.isObject(_namespace)) return;
        _namespace[Widget.config.Name] = Widget;
      },
      instances: function instances(Widget, config, namespace, _instances) {
        if (!_.isObject(_instances)) return;
        _instances[Widget.config.Name] = [];
      },
      plugin: function plugin(Widget) {
        Plugin.make(Widget);
      },
      ready: function ready(Widget, config) {
        var initReady = Widget._initReady || Widget.__proto__._initReady || Widgets.Widget._initReady; //IE10 support -- static property

        initReady.call(Widget);
        Readify.add(Widget, config.ready);
      },
      widgetize: function widgetize(Widget, config) {
        Widgetize.add(Widget, config.ready);
      }
    },

    /* UNMAKERS */
    unmakers: {
      order: ['widgetize', 'ready', 'plugin', 'instances', 'namespace', 'configure'],
      // The order in which the unmakers will be called
      configure: function configure(Widget) {
        delete Widget.config.Name;
        delete Widget.config;
      },
      namespace: function namespace(Widget, _namespace2) {
        if (!_.isObject(_namespace2)) return;
        delete _namespace2[Widget.config.Name];
      },
      instances: function instances(Widget, namespace, _instances2) {
        if (!_.isObject(_instances2)) return;

        _instances2[Widget.config.Name].forEach(function (instance) {
          return instance.destroy();
        });

        delete _instances2[Widget.config.Name];
      },
      plugin: function plugin(Widget) {
        Plugin.unmake(Widget);
      },
      ready: function ready(Widget) {
        Readify.remove(Widget);
      },
      widgetize: function widgetize(Widget) {
        Widgetize.remove(Widget);
      }
    },

    /* READIFIERS */
    readifiers: {
      order: ['ready', 'widgetize'],
      // The order in which the readifiers will be called
      ready: function ready(Widget) {
        Factory.unmakers.ready(Widget);
      },
      widgetize: function widgetize(Widget) {
        //TODO: Code duplication, look at `Widgetize.add`
        var widgetize = Widget.widgetize || Widget.__proto__.widgetize || Widgets.Widget.widgetize,
            //IE10 support -- static property
        $widgets = $.$html.findAll(Widget.config.selector);
        Widgetize.worker([[widgetize, Widget]], $widgets);
      }
    }
  };
  /* EXPORT */

  Svelto.Factory = Factory;
})(Svelto.$, Svelto._, Svelto, Svelto.Instances, Svelto.Widgets, Svelto.Plugin, Svelto.Readify, Svelto.Widgetize); // @require ./helpers.js
// @require core/breakpoint/breakpoint.js
// @require core/breakpoints/breakpoints.js
// @require core/factory/factory.js
// @require core/keyboard/keyboard.js
// @require core/layout/helpers.js
// @require core/pointer/pointer.js
// @require core/route/route.js
// @require core/svelto/svelto.js


(function ($, _, Svelto, Instances, Templates, Widgets, Factory, Pointer, Keyboard, Breakpoints, Breakpoint) {
  /* CONFIG */
  var config = {
    name: 'widget',
    // The name of widget, it will be used for the the jQuery pluing `$.fn[name]` and for triggering widget events `name + ':' + event`
    plugin: false,
    // A boolean that defines wheter the Widget is also a jQuery plugin or not
    selector: false,
    // The selector used to select the website in the DOM, used for `Svelto.Widgetize`
    ready: false,
    // If ready `Widgetize` will be triggered right away, without waiting for `Readify.isReady ()`
    templates: {
      // Object containing lodash template strings
      base: false // It will be used as the constructor if no element is provided

    },
    options: {
      characters: {},
      // Used to store some characters needed by the widget
      regexes: {},
      // Contains the used regexes
      messages: {
        // Messages that the widget somewhere outputs, maybe with a `$.toast`, maybe just logs it
        error: 'An error occurred, please try again later'
      },
      attributes: {},
      // Attributes used by the widget
      datas: {},
      // CSS data-* names
      classes: {
        // CSS classes to attach inside the widget
        disabled: 'disabled',
        // Attached to disabled widgets
        hidden: 'hidden',
        // Used to hide an element
        priorityZIndex: 'priority-z-index',
        // Used for giving a priority z-index to an element
        layout: {
          priorityZIndex: 'layout-priority-z-index' // Used when there's an element with priority z-index

        }
      },
      selectors: {},
      // Selectors to use inside the widget
      animations: {},
      // Object storing all the milliseconds required for each animation to occur
      breakpoints: {
        // Actions to be executed at specifc breakpoints, every key/val pair should be in the form of `breakpoint-name`: `action`, where `breakpoint-name` is a key of `Breakpoints` and `action` in a defined method (e.g. `xsmall`: `close`). In addition to this every pair must be specified under one of the following keys: `up`, `down`, `only`, mimicking the respective SCSS mixins
        up: false,
        down: false,
        only: false
      },
      keyboard: true,
      // Enable or disable the use of the keyboard, basically disables keystrokes and other keyboard-based interaction
      keystrokes: {},
      // Easy way to automatically bind keystrokes to specific methods calls. For example: `{ 'ctrl + o': 'open', Keyaboard.keys.UP: 'up' }`. You can also pass variables to the method. For example: `{ 'ctrl + o': ['open', true], Keyaboard.keys.UP: ['open', array ( 1, 2 )] }`
      callbacks: {} // Callbacks to trigger on specific events

    }
  };
  /* WIDGET */

  var Widget =
  /*#__PURE__*/
  function () {
    /* WIDGETIZE */
    Widget.widgetize = function widgetize(ele, Widget) {
      // Called for widgetizing an element
      $.widget.get(ele, Widget);
    };
    /* READY */


    Widget.ready = function ready(done) {
      // Called when the DOM is `ready`
      done();
    };

    Widget.isReady = function isReady() {
      return !!this._ready;
    };

    Widget.whenReady = function whenReady(callback) {
      var isReady = this.isReady || this.__proto__.isReady || Widget.isReady; //IE10 support -- static property

      if (isReady.bind(this)()) {
        return callback();
      } else {
        this._readyQueue.push(callback);
      }
    };

    Widget._initReady = function _initReady() {
      this._ready = !!this.config.ready;
      this._readyQueue = [];
    };

    Widget._setReady = function _setReady() {
      this._ready = true;

      this._readyQueue.forEach(function (callback) {
        return callback();
      });

      this._readyQueue = [];
    };
    /* CONSTRUCTION */


    function Widget(options, element) {
      /* ATTACH CONFIG */
      options = _.isObject(options) ? options : undefined;

      _.extend(this, this._getConfig(options, element));
      /* INSTANCES */


      Instances[this.Name].push(this);
      /* CACHE TEMPLATES */

      if (!(this.Name in Templates)) {
        Templates[this.Name] = {};
        var _options = {
          //TODO: Maybe export them
          imports: {
            Svelto: Svelto,
            Templates: Templates,
            self: Templates[this.Name]
          }
        };

        for (var template in this.templates) {
          var source = this.templates[template];
          if (!this.templates.hasOwnProperty(template) || !source) continue;
          Templates[this.Name][template] = _.isFunction(source) ? source : _.template(source, _options);
        }
      }
      /* ELEMENT */


      this.$element = $(element || (this.templates.base ? this._template('base', this.options) : undefined));
      this.element = this.$element[0];
      /* LAYOUT */

      this.$layout = $.getLayoutOf(this.$element);
      this.layout = this.$layout[0];
      /* BINDINGS */

      this.$bindings = $.$empty;
      /* ATTACH INSTANCE */

      if (this.element) {
        $.widget.set(this.element, this);
      }
      /* SET GUID / GUC */


      this.guid = $.guid++;
      this.guc = this.name + '-' + this.guid;
      /* EVENT NAMESPACE */

      this.eventNamespace = ".swns-" + this.guid;
      /* LOCKS */

      this._locks = {};
      this._lockQueues = {};
      /* CALLBACKS */

      if (this._make() === false) return this.destroy();
      if (this._variables() === false) return this.destroy();
      if (this._init() === false) return this.destroy();
      if (this._events() === false) return this.destroy();
      /* BREAKPOINT */

      var _options$breakpoints = this.options.breakpoints,
          up = _options$breakpoints.up,
          down = _options$breakpoints.down,
          only = _options$breakpoints.only;

      if (up || down || only) {
        this.___breakpoint(); // It must be inited before calling `__breakpoint`, since that when `__breakpoint` gets called it may want to reset it (not inited yet) and init it again (with a result of double binding)


        this.__breakpoint();
      }
      /* REMOVE */


      this.___remove();
    }

    var _proto3 = Widget.prototype;

    _proto3._getConfig = function _getConfig(options, element) {
      /* VARIABLES */
      var config = this._getConfigInherited(),
          configs = [config];
      /* DATA OPTIONS */


      if (element) {
        var dataOptions = element.getAttribute('data-options');

        if (dataOptions) {
          configs.push({
            options: JSON.parse(dataOptions)
          });
        }

        var dataNameOptions = element.getAttribute("data-" + config.name + "-options");

        if (dataNameOptions) {
          configs.push({
            options: JSON.parse(dataNameOptions)
          });
        }
      }
      /* OPTIONS */


      if (options) {
        configs.push({
          options: options
        });
      }
      /* CREATE OPTIONS */


      var createOptions = this._createOptions();

      if (createOptions) {
        configs.push({
          options: createOptions
        });
      }
      /* RETURN */


      return configs.length > 1 ? _.merge.apply(_, [{}].concat(configs)) : _.cloneDeep(config);
    };

    _proto3._getConfigInherited = function _getConfigInherited() {
      /* BASE */
      var prototype = Object.getPrototypeOf(this),
          constructor = prototype.constructor,
          config = constructor.config;
      if (config._inherited) return config;
      /* CONFIGS */

      var configs = [config];
      /* INHERITANCE CHAIN CHAIN */

      prototype = Object.getPrototypeOf(prototype);

      while (prototype) {
        if (!prototype.constructor.config) break;
        configs.push(prototype.constructor.config);
        prototype = Object.getPrototypeOf(prototype);
      }

      configs.push({}); // So that we merge them into a new object

      configs.reverse();
      /* RETURN */

      config = _.merge.apply(_, configs);
      config._inherited = true;
      constructor.config = config;
      return config;
    };

    _proto3._createOptions = function _createOptions() {}; // Used to pass extra options

    /* DESTROY */


    _proto3.destroy = function destroy() {
      this._reset();

      this._destroy();

      _.pull(Instances[this.Name], this);

      if (this.element) {
        $.widget.remove(this.element, this);
      }
    };

    _proto3._destroy = function _destroy() {}; // Clean the stuff, remove possible memory leaks

    /* SPECIAL */


    _proto3._make = function _make() {}; // Creates the widget, if necessary


    _proto3._variables = function _variables() {}; // Init your variables inside this function


    _proto3._init = function _init() {}; // Perform the init stuff inside this function


    _proto3._events = function _events() {}; // Bind the event handlers inside this function


    _proto3._reset = function _reset() {
      //TODO: Maybe remove or rename it, I don't like it but I currently need its functionality
      this.$bindings.off(this.eventNamespace);
    };
    /* WIDGET */


    _proto3.widget = function widget() {
      return this.$element;
    };
    /* INSTANCE */


    _proto3.instance = function instance() {
      return this;
    };
    /* OPTIONS */
    // We cannot have a `options` alias to `option`, since `options` is already defined in the config


    _proto3.option = function option(selector, value) {
      if (!selector) {
        return _.cloneDeep(this.options);
      } else if (_.isString(selector)) {
        if (_.isUndefined(value)) {
          return _.cloneDeep(_.get(this.options, selector));
        } else {
          this._setOption(selector, value);
        }
      } else if (_.isPlainObject(selector)) {
        for (var prop in selector) {
          if (!selector.hasOwnProperty(prop)) continue;

          this._setOption(selector, value);
        }
      }
    };

    _proto3._setOption = function _setOption(selector, value) {
      _.set(this.options, selector, value);
    };
    /* ENABLED */


    _proto3.enable = function enable() {
      this.$element.removeClass(this.options.classes.disabled);
    };

    _proto3.isEnabled = function isEnabled() {
      return !this.isDisabled();
    };
    /* DISABLED */


    _proto3.disable = function disable() {
      this.$element.addClass(this.options.classes.disabled);
    };

    _proto3.isDisabled = function isDisabled() {
      return this.$element.hasClass(this.options.classes.disabled);
    };
    /* LOCKING */


    _proto3.lock = function lock(namespace) {
      this._locks[namespace] = true;
    };

    _proto3.unlock = function unlock(namespace) {
      delete this._locks[namespace];

      if (this._lockQueues[namespace]) {
        this._lockQueues[namespace].forEach(function (callback) {
          return callback();
        });

        delete this._lockQueues[namespace];
      }
    };

    _proto3.isLocked = function isLocked(namespace) {
      return !!this._locks[namespace];
    };

    _proto3.whenUnlocked = function whenUnlocked(namespace, callback) {
      if (!callback) {
        callback = namespace;
        namespace = undefined;
      }

      if (!this.isLocked(namespace)) {
        callback();
      } else {
        if (!this._lockQueues[namespace]) this._lockQueues[namespace] = [];

        this._lockQueues[namespace].push(callback);
      }
    };
    /* EVENTS */
    //TODO: Add support for custom data


    _proto3._on = function _on(suppressDisabledCheck, $element, events, selector, handler, _onlyOne) {
      var _this = this;

      /* NORMALIZATION */
      if (!_.isBoolean(suppressDisabledCheck)) {
        _onlyOne = handler;
        handler = selector;
        selector = events;
        events = $element;
        $element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      if (!($element instanceof $)) {
        _onlyOne = handler;
        handler = selector;
        selector = events;
        events = $element;
        $element = this.$element;
      }

      if (!_.isString(selector)) {
        _onlyOne = handler;
        handler = selector;
        selector = false;
      }
      /* BINDINGS */


      this.$bindings = this.$bindings.add($element);
      /* PROXY */

      var proxyCallback = function proxyCallback(event, data) {
        if (!suppressDisabledCheck && _this.$element.hasClass(_this.options.classes.disabled)) return;
        return handler.call(_this, event, data || event.data);
      };
      /* PROXY GUID */


      proxyCallback.guid = handler.guid = handler.guid || $.guid++;
      /* EVENTS NAMESPACING */

      events = $.eventNamespacer(events, this.eventNamespace);
      /* TRIGGERING */

      $element[_onlyOne ? 'one' : 'on'](events, selector, proxyCallback);
    };

    _proto3._one = function _one() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return this._on.apply(this, args.concat([true]));
    };

    _proto3._onHover = function _onHover($element, args) {
      var _this2 = this;

      /* NORMALIZATION */
      if (!args) {
        args = $element;
        $element = this.$element;
      }
      /* BINDING */


      this._on($element, Pointer.enter, function () {
        return _this2._on.apply(_this2, args);
      });

      this._on($element, Pointer.leave, function () {
        return _this2._off.apply(_this2, args);
      });
    }; //TODO: Maybe add a _offHover, is it needed?


    _proto3._off = function _off($element, events, handler) {
      /* NORMALIZATION */
      if (!handler && !($element instanceof $)) {
        handler = events;
        events = $element;
        $element = this.$element;
      }
      /* EVENTS NAMESPACING */


      events = $.eventNamespacer(events, this.eventNamespace);
      /* REMOVING HANDLER */

      $element.off(events, handler);
    };

    _proto3._trigger = function _trigger(type, event, data) {
      /* NORMALIZATION */
      if (!data) {
        if ($.isEvent(event)) {
          data = event.data || {};
        } else {
          data = event || {};
          event = undefined;
        }
      }
      /* EVENT */


      var name = (this.name + ':' + type).toLowerCase();
      event = $.makeEvent(name, event);
      /* TRIGGERING */

      this.$element.trigger(event, data);
      return !(this.options.callbacks[type].apply(this.element, [event].concat(data)) === false || event.isDefaultPrevented());
    };
    /* ROUTE */


    _proto3.___route = function ___route() {
      this._on(true, $.$window, 'route', this.__route);
    };
    /* BREAKPOINT */


    _proto3.___breakpoint = function ___breakpoint() {
      this._on(true, $.$window, 'breakpoint:change', this.__breakpoint);
    };

    _proto3.__breakpoint = function __breakpoint() {
      var width = Breakpoints.widths[Breakpoint.current];
      /* UP */

      if (this.options.breakpoints.up) {
        for (var breakpoint in this.options.breakpoints.up) {
          if (!this.options.breakpoints.up.hasOwnProperty(breakpoint)) continue;

          if (width >= Breakpoints.widths[breakpoint]) {
            this[this.options.breakpoints.up[breakpoint]]();
          }
        }
      }
      /* DOWN */


      if (this.options.breakpoints.down) {
        for (var _breakpoint in this.options.breakpoints.down) {
          if (!this.options.breakpoints.down.hasOwnProperty(_breakpoint)) continue;

          if (width <= Breakpoints.widths[_breakpoint]) {
            this[this.options.breakpoints.down[_breakpoint]]();
          }
        }
      }
      /* ONLY */


      if (this.options.breakpoints.only) {
        for (var _breakpoint2 in this.options.breakpoints.only) {
          if (!this.options.breakpoints.only.hasOwnProperty(_breakpoint2)) continue;

          if (width === Breakpoints.widths[_breakpoint2]) {
            this[this.options.breakpoints.only[_breakpoint2]]();
          }
        }
      }
    };
    /* KEYDOWN */


    _proto3.___keydown = function ___keydown() {
      this._on($.$document, 'keydown', this.__keydown);
    };

    _proto3.__keydown = function __keydown(event) {
      if (!this.options.keyboard) return;
      if ($.isEditable(document.activeElement) && !this.element.contains(document.activeElement)) return;

      for (var keystrokes in this.options.keystrokes) {
        if (!this.options.keystrokes.hasOwnProperty(keystrokes)) continue;
        var keystrokesParts = keystrokes.split(',');

        for (var i = 0, l = keystrokesParts.length; i < l; i++) {
          var keystroke = keystrokesParts[i];
          if (!Keyboard.keystroke.match(event, keystroke)) continue;
          var toCall = this.options.keystrokes[keystrokes],
              method = _.isArray(toCall) ? toCall[0] : toCall,
              args = _.isArray(toCall) ? _.castArray(toCall[1]) : [];

          if (this[method].apply(this, args) !== null) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }

          return;
        }
      }
    };
    /* REMOVE */


    _proto3.___remove = function ___remove() {
      if (this.element) {
        this._one(true, 'remove', this.__remove);
      }
    };

    _proto3.__remove = function __remove(event) {
      if (!event || event.target === this.element) {
        this.destroy();
      }
    };
    /* DELAYING */


    _proto3._delay = function _delay(fn, delay) {
      var _this3 = this;

      return setTimeout(function () {
        return fn.apply(_this3);
      }, delay || 0);
    };
    /* DEFER */


    _proto3._defer = function _defer(fn) {
      return this._delay(fn);
    };
    /* FRAME */


    _proto3._frame = function _frame(fn) {
      return requestAnimationFrame(fn.bind(this));
    };
    /* FRAMES */


    _proto3._frames = function _frames(fn) {
      var framed = _.frames(fn);

      framed.guid = fn.guid = fn.guid || $.guid++;
      return framed;
    };
    /* THROW */


    _proto3._throw = function _throw(msg) {
      throw new Error(msg);
    };
    /* THROTTLING */


    _proto3._throttle = function _throttle(fn, wait, options) {
      var throttled = _.throttle(fn, wait, options);

      throttled.guid = fn.guid = fn.guid || $.guid++;
      return throttled;
    };
    /* DEBOUNCING */


    _proto3._debounce = function _debounce(fn, wait, options) {
      var debounced = _.debounce(fn, wait, options);

      debounced.guid = fn.guid = fn.guid || $.guid++;
      return debounced;
    };
    /* TEMPLATE */


    _proto3._template = function _template(name, options) {
      if (options === void 0) {
        options = {};
      }

      return Templates[this.Name][name](options);
    };
    /* INSERTION */


    _proto3.before = function before() {
      var _$element;

      (_$element = this.$element).before.apply(_$element, arguments);
    };

    _proto3.insertBefore = function insertBefore(target) {
      this.$element.insertBefore(target);
    };

    _proto3.after = function after() {
      var _$element2;

      (_$element2 = this.$element).after.apply(_$element2, arguments);
    };

    _proto3.insertAfter = function insertAfter(target) {
      this.$element.insertAfter(target);
    };

    _proto3.prependTo = function prependTo(target) {
      this.$element.prependTo(target);
    };

    _proto3.appendTo = function appendTo(target) {
      this.$element.appendTo(target);
    };

    return Widget;
  }();
  /* FACTORY */


  Factory.make(Widget, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Instances, Svelto.Templates, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Keyboard, Svelto.Breakpoints, Svelto.Breakpoint); // @priority 800
// @require core/widget/widget.js
//TODO: Maybe rename it


(function ($, _, Svelto, Widgets, Factory, Breakpoints, Breakpoint) {
  /* CONFIG */
  var config = {
    name: 'classSwitch',
    plugin: true,
    selector: '.class-switch',
    options: {
      switch: {
        // Classes to attach at specifc breakpoints, every key/val pair should be in the form of `breakpoint-name`: `class`, where `breakpoint-name` is a key of `Breakpoints` and `class` can be any class string. In addition to this every pair must be specified under one of the following keys: `up`, `down`, `only`, mimicking the respective SCSS mixins
        up: {},
        down: {},
        only: {}
      }
    }
  };
  /* CLASS SWITCH */

  var ClassSwitch =
  /*#__PURE__*/
  function (_Widgets$Widget) {
    _inheritsLoose(ClassSwitch, _Widgets$Widget);

    function ClassSwitch() {
      return _Widgets$Widget.apply(this, arguments) || this;
    }

    var _proto4 = ClassSwitch.prototype;

    /* SPECIAL */
    _proto4._init = function _init() {
      this.status = {
        up: {},
        down: {},
        only: {}
      };

      this._populate();

      this.__classSwitch();
    };

    _proto4._events = function _events() {
      this.___classSwitch();
    };
    /* POPULATE */


    _proto4._populateBreakpoint = function _populateBreakpoint(breakpoint) {
      var name = Breakpoints[breakpoint];
      /* UP */

      var up = this.$element.data(name + "-up");

      if (_.isString(up)) {
        this.options.switch.up[breakpoint] = up;
      }
      /* DOWN */


      var down = this.$element.data(name + "-down");

      if (_.isString(down)) {
        this.options.switch.down[breakpoint] = down;
      }
      /* ONLY */


      var specific = this.$element.data(name + "-only"),
          general = this.$element.data(name),
          only = _.isString(specific) ? specific : _.isString(general) ? general : undefined;

      if (_.isString(only)) {
        this.options.switch.only[breakpoint] = only;
      }
    };

    _proto4._populate = function _populate() {
      for (var key in Breakpoints) {
        if (!Breakpoints.hasOwnProperty(key)) continue;
        if (!_.isString(Breakpoints[key])) continue;

        this._populateBreakpoint(key);
      }
    };
    /* STATUS */


    _proto4._getStatus = function _getStatus() {
      var status = {
        up: {},
        down: {},
        only: {}
      },
          width = Breakpoints.widths[Breakpoint.current];
      /* UP */

      for (var breakpoint in this.options.switch.up) {
        if (!this.options.switch.up.hasOwnProperty(breakpoint)) continue;
        var active = width >= Breakpoints.widths[breakpoint];
        status.up[breakpoint] = active;
      }
      /* DOWN */


      for (var _breakpoint3 in this.options.switch.down) {
        if (!this.options.switch.down.hasOwnProperty(_breakpoint3)) continue;

        var _active = width <= Breakpoints.widths[_breakpoint3];

        status.down[_breakpoint3] = _active;
      }
      /* ONLY */


      for (var _breakpoint4 in this.options.switch.only) {
        if (!this.options.switch.only.hasOwnProperty(_breakpoint4)) continue;

        var _active2 = width === Breakpoints.widths[_breakpoint4];

        status.only[_breakpoint4] = _active2;
      }

      return status;
    };

    _proto4._getDeltaStatus = function _getDeltaStatus(previous, current) {
      var delta = {
        up: {},
        down: {},
        only: {}
      };

      for (var type in current) {
        if (!current.hasOwnProperty(type)) continue;

        for (var breakpoint in current[type]) {
          if (!current[type].hasOwnProperty(breakpoint)) continue;

          if (!!previous[type][breakpoint] !== !!current[type][breakpoint]) {
            delta[type][breakpoint] = !!current[type][breakpoint];
          }
        }
      }

      return delta;
    };
    /* CLASS SWITCH */


    _proto4.___classSwitch = function ___classSwitch() {
      this._on(true, $.$window, 'breakpoint:change', this.__classSwitch);
    };

    _proto4.__classSwitch = function __classSwitch() {
      var status = this._getStatus(),
          delta = this._getDeltaStatus(this.status, status);

      for (var type in delta) {
        if (!delta.hasOwnProperty(type)) continue;

        for (var breakpoint in delta[type]) {
          if (!delta[type].hasOwnProperty(breakpoint)) continue;
          this.$element.toggleClass(this.options.switch[type][breakpoint], delta[type][breakpoint]);
        }
      }

      this.status = status;
    };

    return ClassSwitch;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(ClassSwitch, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Breakpoints, Svelto.Breakpoint); // @require core/svelto/svelto.js
//TODO: limit ultra portrait images height


(function ($, _, Svelto) {
  /* DEFAULTS */
  var defaults = {
    container: {
      width: 1048,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    rows: {
      max: Infinity // Maximum number of rows to calculate dimensions for

    },
    row: {
      height: 250,
      // Target row's height
      margin: 5,
      // Vertical margin between rows
      boxes: {
        min: 1,
        // Minimum number of boxes in the row
        max: Infinity // Maximum number of boxes in the row

      },
      tolerance: {
        min: .85,
        // Tunes the minimum ratio
        max: 1.85 // Tunes the maximum ratio

      },
      widows: {
        // Row not completelly filled with boxes
        show: true,
        // Compute boxes for widows
        average: true,
        // Set the height to the average of the previous heights
        justify: false,
        // Set the height so that no space is left unfilled
        previous: false // Set the height to that of the previous row

      }
    },
    box: {
      rearrange: {
        enabled: true,
        // Boxes can be rearranged in order to achieve the best grid possible
        deltaThreshold: 0.5 // Minimum difference in ratio that will trigger a rearrangement

      },
      margin: 5,
      // Horizontal margin between boxes
      ratio: undefined // Fixed ratio for all boxes

    }
  };
  /* CALCULATOR */

  function calculator(ratios, options, _needsMerge) {
    if (_needsMerge === void 0) {
      _needsMerge = true;
    }

    if (!options || _needsMerge) {
      options = options ? _.merge({}, calculator.defaults, options) : calculator.defaults;
    }

    ratios = options.box.ratio ? Array(ratios.length).fill(options.box.ratio) : ratios;
    var boxes = _.isNumber(ratios[0]) ? ratios.map(function (ratio) {
      return {
        ratio: ratio
      };
    }) : ratios;
    return makeLayout(options, boxes);
  }
  /* ROW */


  var row = {
    //FIXME: It's global-ish, which it's bad, but it's fast
    init: function init(options, layout, boxes) {
      this.options = options;
      this.layout = layout;
      this.boxes = boxes;
      this.reset();
    },
    reset: function reset() {
      if (this.prevState) {
        // Restoring state
        this._setState(this.prevState);

        this.prevState = undefined;
      } else {
        // New state
        this._resetState();
      }
    },
    _resetState: function _resetState() {
      this.width = this.options.container.width - this.options.container.padding.left - this.options.container.padding.right;
      this.height = 0;
      this.ratio = 0;
      this.left = this.options.container.padding.left;
      this.top = this.layout.height - this.options.container.padding.bottom;
      this.minRatio = this.width / this.options.row.height * this.options.row.tolerance.min;
      this.maxRatio = this.width / this.options.row.height * this.options.row.tolerance.max;
      this.boxesStartIndex = this.layout.boxesIndex;
      this.boxesSkipIndexes = undefined;
      this.boxesNr = 0;
      this._complete = false;
    },
    _getStateKeys: ['width', 'height', 'ratio', 'left', 'top', 'minRatio', 'maxRatio', 'boxesStartIndex', 'boxesSkipIndexes', 'boxesNr', '_complete'],
    _getState: function _getState() {
      return _.pick(this, this._getStateKeys);
    },
    _setState: function _setState(state) {
      _.extend(this, state);
    },
    forEachBox: function forEachBox(callback) {
      var index = 0;

      for (var i = this.boxesStartIndex, l = this.layout.boxesIndex; i < l; i++) {
        if (this.boxesSkipIndexes && this.boxesSkipIndexes.indexOf(i) !== -1) continue;
        callback(this.layout.boxes[i], index++);
      }
    },
    _add: function _add(box) {
      // Actually add the box
      this.layout.boxes[this.layout.boxesIndex++] = box;
      this.boxesNr++;
      this.ratio += box.ratio;
    },
    add: function add(box) {
      if (this.layout.heightsIndex === this.options.rows.max) {
        // Maximum number of rows reached
        this._add(box);

        return true;
      }

      var newRatio = this.ratio + box.ratio,
          widthWithoutMargin = this.width - this.boxesNr * this.options.row.margin;

      if (newRatio < this.minRatio || this.boxesNr < this.options.row.boxes.min) {
        // There's enough space for this and probably another box
        this._add(box);

        if (this.boxesNr >= this.options.row.boxes.max || this.boxesNr > this.options.row.boxes.min && newRatio >= this.maxRatio) {
          this.complete(widthWithoutMargin / newRatio);
        }

        return true;
      } else if (newRatio > this.maxRatio) {
        // Maybe there's space for this
        if (!this.boxesNr) {
          // It's the only box, so it's added
          this._add(box);

          this.complete(widthWithoutMargin / newRatio);
          return true;
        }

        var prevWidthWithoutMargin = this.width - (this.boxesNr - 1) * this.options.row.margin,
            prevTargetRatio = prevWidthWithoutMargin / this.options.row.height,
            newTargetRatio = widthWithoutMargin / this.options.row.height;

        if (Math.abs(newRatio - newTargetRatio) > Math.abs(this.ratio - prevTargetRatio)) {
          // The ratio is closer to the ranges without it
          if (this.options.box.rearrange.enabled) {
            // Put this box before the current row (in order to fix the "normal before very wide" situation)
            var deltaRatio = box.ratio - this.ratio;

            if (this.boxesNr === 1 && deltaRatio > this.options.box.rearrange.deltaThreshold || this.boxesNr > 1 && deltaRatio >= this.options.box.rearrange.deltaThreshold) {
              var insertIndex = this.boxesStartIndex + (this.boxesSkipIndexes ? this.boxesSkipIndexes.length : 0);
              this.prevState = this._getState();
              if (!this.prevState.boxesSkipIndexes) this.prevState.boxesSkipIndexes = [];
              this.prevState.boxesSkipIndexes.push(this.layout.boxesIndex);
              this.layout.boxesRearrangements.push([this.layout.boxesIndex, insertIndex]);

              this._resetState();

              this._add(box);

              this.complete(this.width / this.ratio);
              this.prevState.top += this.height + this.options.row.margin;
              return true;
            }
          } // Just complete the row without it


          this.complete(prevWidthWithoutMargin / this.ratio);
          return false;
        } else {
          // The ratio is closer to the ranges with it
          this._add(box);

          this.complete(widthWithoutMargin / newRatio);
          return true;
        }
      } else {
        // Fills perfectly the space
        this._add(box);

        this.complete(widthWithoutMargin / newRatio);
        return true;
      }
    },
    isComplete: function isComplete() {
      return this._complete;
    },
    complete: function complete(height, isWidows) {
      var _this4 = this;

      if (height === void 0) {
        height = this.options.row.height;
      }

      if (isWidows === void 0) {
        isWidows = false;
      }

      // Set metadata on boxes
      this.height = height;

      if (isWidows && !this.options.row.widows.justify) {
        // Checking for sane height values
        var maxHeight;

        if (this.options.container.width !== Infinity) {
          var widthWithoutMargin = this.width - (this.boxesNr - 1) * this.options.row.margin;
          maxHeight = widthWithoutMargin / this.ratio;
        } else {
          maxHeight = this.options.row.height;
        }

        this.height = _.isNaN(this.height) ? maxHeight : Math.min(maxHeight, this.height);
      }

      var boxLeft = this.left;
      this.forEachBox(function (box) {
        box.width = box.ratio * _this4.height;
        box.height = _this4.height;
        box.top = _this4.top;
        box.left = boxLeft;
        boxLeft += box.width + _this4.options.box.margin;
      });
      boxLeft -= this.options.box.margin + this.left;

      if (isWidows && this.options.row.widows.justify) {
        var errorWidthPerItem = (this.width - boxLeft) / this.boxesNr;

        if (errorWidthPerItem) {
          this.forEachBox(function (box, i) {
            var currentWidth = (i + 1) * errorWidthPerItem,
                previousWidth = i ? currentWidth - errorWidthPerItem : 0,
                deltaWidth = currentWidth - previousWidth,
                deltaHeight = deltaWidth / box.ratio;
            box.left += previousWidth;
            box.width += deltaWidth;
            box.height += deltaHeight;

            if (!i) {
              _this4.height += deltaHeight;
            }
          });
        }
      }

      this._complete = true;
    }
  };
  /* HELPERS */

  function addRow(options, layout) {
    layout.heights[layout.heightsIndex++] = row.height;
    layout.height += row.height + options.row.margin;
  }

  function addRowWidows(options, layout) {
    layout.widows = row.boxesNr;

    if (row.isComplete() || options.row.widows.show) {
      if (!row.isComplete()) {
        var height = options.row.widows.justify ? undefined : !layout.heightsIndex ? options.row.height : options.row.widows.average ? layout.height / layout.heightsIndex : options.row.widows.previous ? layout.heights[layout.heightsIndex - 1] : undefined;
        row.complete(height, true);
      }

      addRow(options, layout);
    } else {
      layout.boxesIndex = row.boxesStartIndex;
    }
  }

  function addBox(options, layout, box) {
    var added = row.add(box);

    if (row.isComplete()) {
      addRow(options, layout);
      row.reset();
      if (!added) addBox(options, layout, box);
    }
  }

  function makeLayout(options, boxes) {
    var layout = {
      width: options.container.width,
      height: options.container.padding.top + options.container.padding.bottom,
      heights: Array(boxes.length),
      heightsIndex: 0,
      boxes: Array(boxes.length),
      boxesIndex: 0,
      boxesRearrangements: [],
      widows: 0
    };
    row.init(options, layout, boxes);
    boxes.forEach(function (box) {
      return addBox(options, layout, box);
    });

    if (row.boxesNr) {
      addRowWidows(options, layout);
    }

    var entraHeightsNr = layout.heights.length - layout.heightsIndex;

    if (entraHeightsNr) {
      layout.heights.splice(layout.heightsIndex, entraHeightsNr);
    }

    var extraBoxesNr = layout.boxes.length - layout.boxesIndex;

    if (extraBoxesNr) {
      layout.boxes.splice(layout.boxesIndex, extraBoxesNr);
    }

    if (layout.heightsIndex) {
      layout.height -= options.row.margin;
    }

    if (layout.boxesRearrangements.length > 1) {
      layout.boxesRearrangements = getOptimalRearrangements(layout.boxesRearrangements);
    }

    return layout;
  }

  function getOptimalRearrangements(rearrangements) {
    //TODO: Maybe this algorithm does not generate optimal rearrangements
    var rearrangement, previous;
    var optimal = [];

    for (var i = 0, l = rearrangements.length; i < l; i++) {
      var current = rearrangements[i];

      if (current[0] === current[1] + 1) {
        // Is potentially collapsible
        if (previous) {
          if (current[1] === previous[0]) {
            // They are contiguous
            if (rearrangement) {
              rearrangement[1] = current[0];
            } else {
              rearrangement = [previous[1], current[0]];
            }
          } else {
            optimal.push(rearrangement || previous);
            rearrangement = undefined;
          }
        }

        previous = current;
      } else {
        optimal.push(current);
      }
    }

    if (rearrangement || previous) {
      optimal.push(rearrangement || previous);
    }

    return optimal;
  }
  /* BINDINGS */


  calculator.defaults = defaults;
  /* EXPORT */

  Svelto.justifiedLayoutCalculator = calculator;
})(Svelto.$, Svelto._, Svelto); // @priority 750
// @require ./calculator.js
// @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Widgetize, Factory, calculator) {
  /* CONFIG */
  var config = {
    name: 'justifiedLayout',
    plugin: true,
    selector: '.justified-layout',
    options: {
      calculatorOptions: {},
      // Custom options to pass to `justifiedLayoutCalculator`
      oneRow: {
        enabled: false,
        // Switch to `One Row` logic
        heights: [110, calculator.defaults.row.height],
        // Min and Max height, adjusted according to the viewport size
        belowWidth: 500 // Force 1 box per row below this width, set to -1 to disable it

      },
      sizes: {
        set: true,
        // Set the `sizes` attribute of the found images
        threshold: Infinity // It will be re-set if the previous differs by at least this amount of pixels // Effectively disabled by default

      },
      datas: {
        calculatorOptions: 'calculator-options',
        onerowBelowWidth: 'onerow-below-width'
      },
      classes: {
        onerow: 'onerow',
        rendered: 'rendered'
      },
      selectors: {// boxes: ':scope > *' //TODO: Limited browser support for `:scope`
      },
      callbacks: {
        firstrender: _.noop,
        render: _.noop
      }
    }
  };
  /* JUSTIFIED LAYOUT */

  var JustifiedLayout =
  /*#__PURE__*/
  function (_Widgets$Widget2) {
    _inheritsLoose(JustifiedLayout, _Widgets$Widget2);

    function JustifiedLayout() {
      return _Widgets$Widget2.apply(this, arguments) || this;
    }

    var _proto5 = JustifiedLayout.prototype;

    /* SPECIAL */
    _proto5._variables = function _variables() {
      this.justified = this.element;
      this.$justified = this.$element;
      this.$widows = $.$empty;
      this.$boxes = this.$justified.children();
      this.options.oneRow.enabled = this.$justified.hasClass(this.options.classes.onerow) || this.options.oneRow.enabled;
      this.options.oneRow.belowWidth = this.$justified.data(this.options.datas.onerowBelowWidth) || this.options.oneRow.belowWidth;
      var calculatorOptions = this.$justified.data(this.options.datas.calculatorOptions);

      if (calculatorOptions) {
        this.options.calculatorOptions = _.merge(this.options.calculatorOptions, calculatorOptions);
      }
    };

    _proto5._init =
    /*#__PURE__*/
    function () {
      var _init2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._images = this._getImages(this.$boxes);
                _context.next = 3;
                return this._getRatios(this.$boxes);

              case 3:
                this._ratios = _context.sent;
                this.render();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _init() {
        return _init2.apply(this, arguments);
      };
    }();

    _proto5._events = function _events() {
      this.___remoteLoaderTarget();

      this.___resize();
    };
    /* REMOTE LOADER TARGET */


    _proto5.___remoteLoaderTarget = function ___remoteLoaderTarget() {
      this._on(true, 'remoteloader:target', this.__remoteLoaderTarget);
    };

    _proto5.__remoteLoaderTarget =
    /*#__PURE__*/
    function () {
      var _remoteLoaderTarget = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event, _ref) {
        var $elements;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $elements = _ref.$elements;
                //TODO: Make it faster, leverage the fact that the previous boxes minus widows are already well positionated
                this.$boxes = this.$boxes.add($elements);
                this._images = this._images.concat(this._getImages($elements));
                _context2.t0 = this._ratios;
                _context2.next = 6;
                return this._getRatios($elements);

              case 6:
                _context2.t1 = _context2.sent;
                this._ratios = _context2.t0.concat.call(_context2.t0, _context2.t1);
                this.render();
                $elements.removeClass(this.options.classes.hidden);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function __remoteLoaderTarget(_x, _x2) {
        return _remoteLoaderTarget.apply(this, arguments);
      };
    }();
    /* RESIZE */


    _proto5.___resize = function ___resize() {
      this._on(true, $.$window, 'resize', this._frames(this.render.bind(this)));
    };
    /* PRIVATE */


    _proto5._getImages = function _getImages($boxes) {
      return $boxes.get().map(function (box) {
        return $(box).findAll('img')[0];
      });
    };

    _proto5._box2ratio =
    /*#__PURE__*/
    function () {
      var _box2ratio2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(box) {
        var ratio, img, imgRatio;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ratio = box.getAttribute('data-ratio');

                if (!ratio) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", Number(ratio));

              case 3:
                img = $(box).find('img')[0];

                if (img) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                imgRatio = img.getAttribute('width') / img.getAttribute('height');

                if (!imgRatio) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", imgRatio);

              case 9:
                return _context3.abrupt("return", new Promise(function (resolve) {
                  //FIXME: Won't work that good if the image takes forever to load, or doesn't load at all
                  img.onload = function (_ref2) {
                    var srcElement = _ref2.srcElement;
                    return resolve(srcElement.width / srcElement.height);
                  };
                }));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _box2ratio(_x3) {
        return _box2ratio2.apply(this, arguments);
      };
    }();

    _proto5._getRatios =
    /*#__PURE__*/
    function () {
      var _getRatios2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4($boxes) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Promise.all($boxes.get().map(this._box2ratio));

              case 2:
                _context4.t0 = function (ratio) {
                  return {
                    ratio: ratio
                  };
                };

                return _context4.abrupt("return", _context4.sent.map(_context4.t0));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _getRatios(_x4) {
        return _getRatios2.apply(this, arguments);
      };
    }();

    _proto5._getOptions = function _getOptions() {
      if (!this._options) this._options = _.merge({}, calculator.defaults, this.options.calculatorOptions);

      if (this.options.oneRow.enabled) {
        this._options.container.width = Infinity;
        this._options.row.boxes.min = Infinity;

        if (this.options.oneRow.heights) {
          this._options.row.height = _.clamp(1 / 11 * this.justified.offsetWidth + 90, this.options.oneRow.heights[0], this.options.oneRow.heights[1]);
        }
      } else {
        this._options.container.width = this.justified.offsetWidth;
        this._options.row.boxes.max = this._options.container.width <= this.options.oneRow.belowWidth ? 1 : calculator.defaults.row.maxBoxesNr;
      }

      return this._options;
    };
    /* API */


    _proto5.isRendered = function isRendered() {
      return !!this._rendered;
    };

    _proto5.render = function render() {
      var _this5 = this;

      var options = this._getOptions(),
          layout = calculator(this._ratios, options, false);

      this.$justified.height(layout.height);
      layout.boxesRearrangements.forEach(function (_ref3) {
        var from = _ref3[0],
            to = _ref3[1];
        $(_this5.$boxes[from]).after(_this5.$boxes[to]);

        _.move(_this5.$boxes, from, to);

        _.move(_this5._images, from, to);

        _.move(_this5._ratios, from, to);

        _.move(layout.boxes, from, to);
      });
      layout.boxes.forEach(function (layout, i) {
        var box = _this5.$boxes[i];
        box.style.width = layout.width + "px";
        box.style.height = layout.height + "px";

        if (!_this5.options.oneRow.enabled) {
          box.style.top = layout.top + "px";
          box.style.left = layout.left + "px";
        }

        var image = _this5._images[i];

        if (_this5.options.sizes.set && image && (!_this5.options.sizes.threshold || !image.__justified_layout_sizes || Math.abs(image.__justified_layout_sizes - layout.width) >= _this5.options.sizes.threshold)) {
          image.setAttribute('sizes', layout.width + "px");
          image.__justified_layout_sizes = layout.width;
        }
      });

      if (!options.row.widows.show && layout.widows !== this.$widows.length) {
        var $nextWidows = $(_.takeRight(this.$boxes.get(), layout.widows)),
            $changed = $(_.xor(this.$widows.get(), $nextWidows.get()));
        $changed.toggleClass(this.options.classes.hidden);
        this.$widows = $nextWidows;
      }

      if (!this._rendered) {
        this.$justified.addClass(this.options.classes.rendered);
        this._rendered = true;

        this._trigger('firstrender');
      }

      this._trigger('render');
    };

    return JustifiedLayout;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(JustifiedLayout, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Widgetize, Svelto.Factory, Svelto.justifiedLayoutCalculator); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* CONFIG */
  var defaults = {
    thresholds: {
      x: 150,
      y: 450
    },
    multipliers: {
      dynamic: {
        enabled: true,
        factor: {
          x: 1,
          y: 1
        },
        multiplier: {
          x: 1,
          y: 1.35
        }
      },
      default: {
        x: 1,
        y: 1
      },
      scroll: {
        x: 1.25,
        y: 1.5
      },
      firstScroll: {
        x: 1.5,
        y: 2
      }
    }
  };
  /* LAZY WORKER */

  var LazyWorker =
  /*#__PURE__*/
  function () {
    /* SPECIAL */
    function LazyWorker() {
      this.options = defaults;
      this.groups = {};
      this.__scroll = _.frames(this.__scroll.bind(this));
      this.__resize = _.frames(this.__resize.bind(this));
    }
    /* EVENTS */


    var _proto6 = LazyWorker.prototype;

    _proto6.___events = function ___events() {
      if (this._eventsOn) return;
      this._eventsOn = true;
      $.$document.on('scroll', this.__scroll);
      $.$window.on('resize', this.__resize);
    };

    _proto6.___events_off = function ___events_off() {
      if (!this._eventsOn) return;
      this._eventsOn = false;
      $.$document.off('scroll', this.__scroll);
      $.$window.off('resize', this.__resize);
    };
    /* SCROLL */


    _proto6.__scroll = function __scroll(event) {
      this.process(this._scrolled ? this.options.multipliers.scroll : this.options.multipliers.firstScroll);
      this._scrolled = true;
    };
    /* RESIZE */


    _proto6.__resize = function __resize() {
      this.process();
    };
    /* UTILITIES */


    _proto6._shouldLoad = function _shouldLoad($element, multipliers, _windowWidth, _windowHeight) {
      var windowWidth = _windowWidth || $.window.innerWidth,
          windowHeight = _windowHeight || $.window.innerHeight,
          eRect = $element.getRect(),
          deltaX = this.options.thresholds.x * multipliers.x * this.options.multipliers.dynamic.factor.x,
          deltaY = this.options.thresholds.y * multipliers.y * this.options.multipliers.dynamic.factor.y;
      return eRect.top - windowHeight <= deltaY && eRect.left - windowWidth <= deltaX && $element.isVisible();
    };
    /* API */


    _proto6.add = function add(widget, $element, group) {
      var _this6 = this;

      //TODO: Process only new elements
      if (!this.groups[group]) this.groups[group] = [];
      this.groups[group].push([widget, $element]);
      if (this._addId) clearTimeout(this._addId);
      this._addId = setTimeout(function () {
        _this6._addId = false;

        _this6.process();
      }, 10);
    };

    _proto6.process = function process(multipliers, onlyGroup) {
      if (multipliers === void 0) {
        multipliers = this.options.multipliers.default;
      }

      var hadElements = false,
          hasLeftovers = false,
          hasLoaded = false,
          isOnlyGroup = !_.isUndefined(onlyGroup),
          windowWidth = $.window.innerWidth,
          windowHeight = $.window.innerHeight;
      onlyGroup = String(onlyGroup);

      for (var group in this.groups) {
        if (!this.groups.hasOwnProperty(group)) continue;
        if (isOnlyGroup && group !== onlyGroup) continue;
        hadElements = true;
        var queue = this.groups[group],
            isGroup = group !== 'undefined',
            leftovers = isGroup ? undefined : [],
            leftoversIndex = -1;

        for (var i = 0, l = queue.length; i < l; i++) {
          var item = queue[i],
              widget = item[0],
              $element = item[1];

          if (this._shouldLoad($element, multipliers, windowWidth, windowHeight)) {
            hasLoaded = true;
            widget.load();
          } else {
            if (isGroup) {
              leftoversIndex = i;
              break;
            } else {
              leftovers.push(item);
            }
          }
        }

        if (isGroup && leftoversIndex >= 0) leftovers = queue.slice(leftoversIndex);

        if (leftovers && leftovers.length) {
          hasLeftovers = true;
          this.groups[group] = leftovers;
        } else {
          delete this.groups[group];
        }
      }

      if (!hadElements) return;

      if (hasLoaded && this.options.multipliers.dynamic.enabled) {
        this.options.multipliers.dynamic.factor.x *= this.options.multipliers.dynamic.multiplier.x;
        this.options.multipliers.dynamic.factor.y *= this.options.multipliers.dynamic.multiplier.y;
      }

      if (!isOnlyGroup) {
        this[hasLeftovers ? '___events' : '___events_off']();
      }

      return !hasLeftovers; // Completed?
    };

    return LazyWorker;
  }();
  /* EXPORT */


  Svelto.LazyWorker = new LazyWorker();
  Svelto.LazyWorker.defaults = defaults;
})(Svelto.$, Svelto._, Svelto); // @require core/widget/widget.js
// @require ./worker.js


(function ($, _, Svelto, Widgets, Factory, LazyWorker) {
  /* CONFIG */
  var config = {
    name: 'lazy',
    options: {
      datas: {
        group: 'group'
      },
      callbacks: {
        load: _.noop
      }
    }
  };
  /* LAZY */

  var Lazy =
  /*#__PURE__*/
  function (_Widgets$Widget3) {
    _inheritsLoose(Lazy, _Widgets$Widget3);

    function Lazy() {
      return _Widgets$Widget3.apply(this, arguments) || this;
    }

    var _proto7 = Lazy.prototype;

    /* SPECIAL */
    _proto7._variables = function _variables() {
      this.group = this.$element.data(this.options.datas.group);
    };

    _proto7._init = function _init() {
      LazyWorker.add(this, this.$element, this.group);
    };
    /* API */


    _proto7.load = function load() {
      this._trigger('load');

      this.destroy();
    };

    return Lazy;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Lazy, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.LazyWorker); // @priority 700
// @require ../lazy.js
//TODO: Add <picture/> support


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'lazyImage',
    plugin: true,
    selector: 'img.lazy',
    options: {
      datas: {
        src: 'src',
        srcset: 'srcset',
        sizes: 'sizes'
      },
      attrsFetchers: {
        // Get values for attributes attributes
        src: _.noop,
        srcset: _.noop,
        sizes: function sizes() {
          return this.element.offsetWidth + "px";
        }
      }
    }
  };
  /* LAZY IMAGE */

  var LazyImage =
  /*#__PURE__*/
  function (_Widgets$Lazy) {
    _inheritsLoose(LazyImage, _Widgets$Lazy);

    function LazyImage() {
      return _Widgets$Lazy.apply(this, arguments) || this;
    }

    var _proto8 = LazyImage.prototype;

    /* PRIVATE */
    _proto8._getAttrValue = function _getAttrValue(attr) {
      var attrValue = this.element.getAttribute(attr),
          dataAttr = "data-" + this.options.datas[attr],
          dataValue = this.element.getAttribute(dataAttr),
          hasDataValue = !_.isNull(dataValue);
      if (!hasDataValue && !_.isNull(attrValue)) return; //TODO: Is this actually the right thing to do? Ignoring fetchers?

      return hasDataValue ? dataValue : this.options.attrsFetchers[attr].call(this);
    };
    /* API */


    _proto8.load = function load() {
      var _this7 = this;

      var attrs = ['sizes', 'srcset', 'src'];
      attrs.forEach(function (attr) {
        var value = _this7._getAttrValue(attr);

        if (_.isUndefined(value)) return;

        _this7.element.setAttribute(attr, value);
      });

      _Widgets$Lazy.prototype.load.call(this);
    };

    return LazyImage;
  }(Widgets.Lazy);
  /* FACTORY */


  Factory.make(LazyImage, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @priority 650
// @require core/widget/widget.js
// @require ../worker.js


(function ($, _, Svelto, Widgets, Factory, LazyWorker) {
  /* CONFIG */
  var config = {
    name: 'lazyGroup',
    plugin: true,
    selector: '.lazy-group',
    options: {
      datas: {
        group: 'group'
      }
    }
  };
  /* LAZY GROUP */

  var Lazy =
  /*#__PURE__*/
  function (_Widgets$Widget4) {
    _inheritsLoose(Lazy, _Widgets$Widget4);

    function Lazy() {
      return _Widgets$Widget4.apply(this, arguments) || this;
    }

    var _proto9 = Lazy.prototype;

    /* SPECIAL */
    _proto9._variables = function _variables() {
      this.group = this.$element.data(this.options.datas.group);
      this.__scroll = _.frames(this.process.bind(this));
    };

    _proto9._events = function _events() {
      this._on(true, 'scroll', this.__scroll);
    };
    /* API */


    _proto9.process = function process() {
      if (!LazyWorker.process(undefined, this.group)) return;

      this._reset();
    };

    return Lazy;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Lazy, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.LazyWorker); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* ANIMATIONS */
  var Animations = {
    xslow: 900,
    slow: 500,
    normal: 350,
    fast: 150,
    xfast: 75
  };
  /* EXPORT */

  Svelto.Animations = Animations;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* COLORS */
  var Colors = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    quaternary: 'quaternary',
    black: 'black',
    blue: 'blue',
    brown: 'brown',
    gray: 'gray',
    green: 'green',
    olive: 'olive',
    orange: 'orange',
    pink: 'pink',
    purple: 'purple',
    red: 'red',
    teal: 'teal',
    violet: 'violet',
    white: 'white',
    yellow: 'yellow',
    error: 'error',
    success: 'success',
    warning: 'warning',
    base: 'base',
    inherit: 'inherit',
    transparent: 'transparent'
  };
  /* EXPORT */

  Svelto.Colors = Colors;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* SIZES */
  var Sizes = {
    xxxxsmall: 'xxxxsmall',
    xxxsmall: 'xxxsmall',
    xxsmall: 'xxsmall',
    xsmall: 'xsmall',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
    xxlarge: 'xxlarge',
    xxxlarge: 'xxxlarge',
    xxxxlarge: 'xxxxlarge'
  };
  /* EXPORT */

  Svelto.Sizes = Sizes;
})(Svelto.$, Svelto._, Svelto); // @require core/browser/browser.js
// @require core/readify/readify.js


(function ($, _, Svelto, Browser, Readify) {
  /* AUTOFOCUS */
  var Autofocus = {
    /* VARIABLES */
    enabled: Browser.is.desktop,
    // On touch devices the keyboard will pop up
    history: [],
    // List of autofocused elements
    historySize: 3,
    // How many elements to keep in the history
    restore: false,
    // Switch focus to the previously focused element

    /* INIT */
    init: function init() {
      Autofocus.focus($.$html);
    },

    /* API */
    set: function set(ele) {
      if (!Autofocus.enabled) return;
      Autofocus.history.unshift(ele);
      Autofocus.history = _.uniq(Autofocus.history).slice(0, Autofocus.historySize);
      ele.focus();
      /* CARET TO THE END */

      if (ele.setSelectionRange) {
        var length = ele.value.length * 2; // Double the length because Opera is inconsistent about whether a carriage return is one character or two

        if (!length) return;
        setTimeout(function () {
          return ele.setSelectionRange(length, length);
        }, 1); // Timeout seems to be required for Blink

        ele.scrollTop = 1000000; // In case it's a tall textarea
      }
    },
    find: function find($parent, focused) {
      if ($parent === void 0) {
        $parent = $.$html;
      }

      var $focusable = $parent.find('[autofocus], .autofocus').filter(function (i, ele) {
        return $.isVisible(ele);
      });

      if (_.isBoolean(focused)) {
        $focusable = $focusable.filter(function (index, ele) {
          return $.isFocused(ele) === focused;
        });
      }

      return $focusable.length ? $focusable[0] : null;
    },
    focus: function focus($parent) {
      if (!Autofocus.enabled) return;
      var focusable = Autofocus.find($parent);
      if (!focusable || $.isFocused(focusable)) return;
      Autofocus.set(focusable);
    },
    blur: function blur($parent, restore) {
      if (restore === void 0) {
        restore = Autofocus.restore;
      }

      if (!Autofocus.enabled || !Autofocus.history[0] || !$parent[0].contains(Autofocus.history[0])) return;

      if (restore) {
        var previous = Autofocus.history.find($.isVisible) || Autofocus.find($.$html);

        if (previous && !$.isFocused(previous) && $.isVisible(previous)) {
          Autofocus.set(previous);
          return;
        }
      }

      Autofocus.history[0].blur();
    }
  };
  /* EXPORT */

  Svelto.Autofocus = Autofocus;
  /* READY */

  Readify.add(Autofocus.init.bind(Autofocus));
})(Svelto.$, Svelto._, Svelto, Svelto.Browser, Svelto.Readify); // @require ./autofocus.js


(function ($, _, Svelto, Autofocus) {
  /* AUTOFOCUS */
  $.fn.autofocus = function () {
    Autofocus.focus(this);
    return this;
  };
  /* BLUR */


  $.fn.autoblur = function () {
    Autofocus.blur(this);
    return this;
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Autofocus); // @require core/svelto/svelto.js
//URL: https://github.com/developit/unfetch
//TODO: Add a demo for it


(function ($, _, Svelto) {
  /* DEFAULTS */
  var defaults = {
    // url: 'https://example.com',
    method: 'get',
    methodCacheableRe: /^(get|head)$/i,
    methodBodyableRe: /^(?!get|head)$/i,
    // body: {},
    cache: true,
    credentials: 'include',
    // Include cookies
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    timeout: 0,
    notOKisError: true,
    request: function request() {
      return new XMLHttpRequest();
    },
    beforesend: _.noop,
    error: _.noop,
    success: _.noop,
    complete: _.noop
  };
  /* FETCH */

  function fetch(url, options) {
    if (!options && _.isPlainObject(url)) {
      options = url;
      url = options.url;
    }

    options = _.merge({}, fetch.defaults, options);
    var isMethodBodyable = options.methodBodyableRe.test(options.method);

    if (options.body && !isMethodBodyable) {
      options.method = 'post';
    }

    var isMethodCacheable = options.methodCacheableRe.test(options.method);

    if (options.cache && isMethodCacheable && fetch.cache[url]) {
      var _response = fetch.cache[url];

      _response.then(function (res) {
        return callbacksOnBeforeSend(options, res.request);
      });

      _response.then(function (res) {
        return callbacksOnLoad(options, res);
      });

      return _response;
    }

    if (options.batchUrl) return fetch.batch(url, options.batchUrl, options);
    var response = new Promise(function (resolve, reject) {
      var request = options.request();

      if (!options.cache && isMethodCacheable) {
        url += (url.includes('?') ? '&' : '?') + ("anticache=" + new Date().getTime());
      }

      request.open(options.method, url, true);
      request.timeout = options.timeout;
      request.withCredentials = options.credentials === 'include';

      if (_.isPlainObject(options.body)) {
        _.extend(options.headers, {
          'Content-Type': 'application/json'
        });

        options.body = JSON.stringify(options.body);
      }

      for (var key in options.headers) {
        if (!options.headers.hasOwnProperty(key)) continue;
        request.setRequestHeader(key, options.headers[key]);
      }

      request.onload = function () {
        var response = fetch.request2response(request);
        callbacksOnLoad(options, response);
        resolve(response);
      };

      request.onerror = function () {
        var response = fetch.request2response(request);
        callbacksOnError(options, response);
        reject(response);
      };

      callbacksOnBeforeSend(options, request);
      request.send(options.body);
    });
    if (options.cache && isMethodCacheable) fetch.cache[url] = response;
    return response;
  }
  /* BATCH */


  function batch(_x5, _x6, _x7) {
    return _batch.apply(this, arguments);
  }
  /* REQUEST 2 RESPONSE */


  function _batch() {
    _batch = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(url, batchUrl, options) {
      var responses, _url, response, responseText, request;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              options = _.omit(options, ['url', 'batchUrl']);
              _context5.next = 3;
              return fetch(batchUrl, options);

            case 3:
              _context5.next = 5;
              return _context5.sent.json();

            case 5:
              responses = _context5.sent;
              _context5.t0 = regeneratorRuntime.keys(responses);

            case 7:
              if ((_context5.t1 = _context5.t0()).done) {
                _context5.next = 16;
                break;
              }

              _url = _context5.t1.value;

              if (responses.hasOwnProperty(_url)) {
                _context5.next = 11;
                break;
              }

              return _context5.abrupt("continue", 7);

            case 11:
              response = responses[_url], responseText = _.isString(response) ? response : JSON.stringify(response);
              request = {
                __fake: true,
                getAllResponseHeaders: function getAllResponseHeaders() {
                  return '';
                },
                status: 200,
                statusText: 'OK',
                responseURL: _url,
                response: responseText,
                responseText: responseText
              };
              fetch.cache[_url] = Promise.resolve(fetch.request2response(request));
              _context5.next = 7;
              break;

            case 16:
              return _context5.abrupt("return", fetch.cache[url] || fetch(url, options));

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    return _batch.apply(this, arguments);
  }

  function request2response(request) {
    var headers = {},
        headersKeys = [],
        headersEntries = [];
    request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (match, key, value) {
      key = key.toLowerCase();
      headersKeys.push(key);
      headersEntries.push([key, value]);
      var prevValue = headers[key];
      headers[key] = prevValue ? prevValue + "," + value : value;
    });
    return {
      request: request,
      ok: (request.status / 200 | 0) === 1,
      // 200-299
      status: request.status,
      statusText: request.statusText,
      url: request.responseURL,
      clone: function clone() {
        return fetch.request2response(request);
      },
      text: function text() {
        return Promise.resolve(request.responseText);
      },
      json: function json() {
        return Promise.resolve(JSON.parse(request.responseText));
      },
      blob: function blob() {
        return Promise.resolve(new Blob([request.response]));
      },
      headers: {
        keys: function keys() {
          return headersKeys;
        },
        entries: function entries() {
          return headersEntries;
        },
        get: function get(key) {
          return headers[key.toLowerCase()];
        },
        has: function has(key) {
          return key.toLowerCase() in headers;
        }
      }
    };
  }
  /* CALLBACKS */


  function callbacksOnLoad(options, res) {
    if (options.notOKisError && !res.ok) {
      options.error(res);
    } else {
      options.success(res);
    }

    options.complete(res);
  }

  function callbacksOnError(options, res) {
    options.error(res);
    options.complete(res);
  }

  function callbacksOnBeforeSend(options, req) {
    options.beforesend(req);
  }
  /* BINDING */


  fetch.batch = batch;
  fetch.defaults = defaults;
  fetch.cache = {};
  fetch.request2response = request2response;
  /* EXPORT */

  Svelto.fetch = fetch;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js
// TTL is expressed in seconds


(function ($, _, Svelto) {
  /* STORAGE */
  var Storage = {
    key: function key(nr) {
      return localStorage.key(nr);
    },
    remove: function remove(key) {
      return localStorage.removeItem(key);
    },
    clear: function clear() {
      return localStorage.clear();
    },
    get: function get(key) {
      var val = localStorage.getItem(key),
          obj = _.attempt(JSON.parse, val);

      if (_.isPlainObject(obj)) {
        if ('exp' in obj && obj.exp < _.nowSecs()) {
          Storage.remove(key);
          return null;
        }

        return 'val' in obj ? obj.val : obj;
      }

      return val;
    },
    set: function set(key, val, ttl) {
      var obj = {
        val: val
      };
      if (ttl) obj.exp = _.nowSecs() + ttl;

      try {
        localStorage.setItem(key, JSON.stringify(obj));
      } catch (e) {}
    }
  };
  /* EXPORT */

  Svelto.Storage = Storage;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* TIMER */
  var Timer =
  /*#__PURE__*/
  function () {
    function Timer() {
      this.set.apply(this, arguments);
    }

    var _proto10 = Timer.prototype;

    _proto10.set = function set(callback, time, autostart) {
      this.init = true;
      this.action = callback;

      if (!isNaN(time)) {
        this.intervalTime = time;
      }

      if (autostart && !this.isActive) {
        this.isActive = true;
        this.setTimer();
      }

      return this;
    };

    _proto10.once = function once(time) {
      var _this8 = this;

      if (isNaN(time)) {
        time = 0;
      }

      setTimeout(function () {
        return _this8.action();
      }, time);
      return this;
    };

    _proto10.play = function play(reset) {
      if (!this.isActive) {
        if (reset) {
          this.setTimer();
        } else {
          this.setTimer(this.remainingTime);
        }

        this.isActive = true;
      }

      return this;
    };

    _proto10.pause = function pause() {
      if (this.isActive) {
        this.isActive = false;
        this.remainingTime -= Date.now() - this.last;
        this.clearTimer();
      }

      return this;
    };

    _proto10.stop = function stop() {
      this.isActive = false;
      this.remainingTime = this.intervalTime;
      this.clearTimer();
      return this;
    };

    _proto10.toggle = function toggle(reset) {
      if (this.isActive) {
        this.pause();
      } else if (reset) {
        this.play(true);
      } else {
        this.play();
      }

      return this;
    };

    _proto10.reset = function reset() {
      this.isActive = false;
      this.play(true);
      return this;
    };

    _proto10.clearTimer = function clearTimer() {
      clearTimeout(this.timeoutObject);
    };

    _proto10.setTimer = function setTimer(time) {
      var _this9 = this;

      if (isNaN(time)) {
        time = this.intervalTime;
      }

      this.remainingTime = time;
      this.last = Date.now();
      this.clearTimer();
      this.timeoutObject = setTimeout(function () {
        return _this9.go();
      }, time);
    };

    _proto10.go = function go() {
      if (this.isActive) {
        this.action();
        this.setTimer();
      }
    };

    _proto10.remaining = function remaining(value) {
      if (_.isUndefined(value)) {
        return this.remainingTime;
      }

      this.remainingTime = value;
      return this;
    };

    return Timer;
  }();
  /* EXPORT */


  Svelto.Timer = Timer;
})(Svelto.$, Svelto._, Svelto); // @priority 400
// @require core/widget/widget.js
// @require lib/autofocus/autofocus.js


(function ($, _, Svelto, Widgets, Factory, Autofocus) {
  /* CONFIG */
  var config = {
    name: 'autofocusable'
  };
  /* AUTOFOCUSABLE */

  var Autofocusable =
  /*#__PURE__*/
  function (_Widgets$Widget5) {
    _inheritsLoose(Autofocusable, _Widgets$Widget5);

    function Autofocusable() {
      return _Widgets$Widget5.apply(this, arguments) || this;
    }

    var _proto11 = Autofocusable.prototype;

    /* API */
    _proto11.autofocus = function autofocus() {
      Autofocus.focus(this.$element);
    };

    _proto11.autoblur = function autoblur() {
      Autofocus.blur(this.$element);
    };

    return Autofocusable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Autofocusable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Autofocus); // @require core/widget/widget.js
// @require lib/storage/storage.js


(function ($, _, Svelto, Widgets, Factory, Storage) {
  /* CONFIG */
  var config = {
    name: 'storable',
    selector: '.storable'
  };
  /* STORABLE */

  var Storable =
  /*#__PURE__*/
  function (_Widgets$Widget6) {
    _inheritsLoose(Storable, _Widgets$Widget6);

    function Storable() {
      return _Widgets$Widget6.apply(this, arguments) || this;
    }

    var _proto12 = Storable.prototype;

    /* SPECIAL */
    _proto12._variables = function _variables() {
      this.storageNamespace = "swns." + this.name;
    };
    /* STORAGE */


    _proto12._storageGet = function _storageGet(key) {
      return Storage.get(this.storageNamespace + "." + key);
    };

    _proto12._storageSet = function _storageSet(key, value, ttl) {
      Storage.set(this.storageNamespace + "." + key, value, ttl);
    };

    _proto12._storageRemove = function _storageRemove(key) {
      Storage.remove(this.storageNamespace + "." + key);
    };

    return Storable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Storable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Storage); // @require lib/fetch/fetch.js
// @require widgets/storable/storable.js
//TODO: Add locking capabilities


(function ($, _, Svelto, Widgets, Factory, fetch) {
  /* CONFIG */
  var config = {
    name: 'remote',
    options: {
      requests: {
        multiple: {
          parallel: false,
          sequential: true
        }
      },
      ajax: {
        // Options to pass to `fetch`
        cache: false,
        method: 'get',
        timeout: 31000 // 1 second more than the default value of PHP's `max_execution_time` setting

      },
      storage: {
        enabled: false
      },
      callbacks: {
        beforesend: _.noop,
        complete: _.noop,
        error: _.noop,
        success: _.noop,
        abort: _.noop
      }
    }
  };
  /* REMOTE */

  var Remote =
  /*#__PURE__*/
  function (_Widgets$Storable) {
    _inheritsLoose(Remote, _Widgets$Storable);

    function Remote() {
      return _Widgets$Storable.apply(this, arguments) || this;
    }

    var _proto13 = Remote.prototype;

    /* SPECIAL */
    _proto13._variables = function _variables() {
      _Widgets$Storable.prototype._variables.call(this);

      this._requestsNr = 0;
    };

    _proto13._reset = function _reset() {
      this.abort();

      _Widgets$Storable.prototype._reset.call(this);
    };
    /* PRIVATE */


    _proto13._getAjax = function _getAjax(options) {
      return _.extend({}, this.options.ajax, options, {
        beforesend: this.__beforesend.bind(this),
        complete: this.__complete.bind(this),
        error: this.__error.bind(this),
        success: this.__success.bind(this)
      });
    };
    /* REQUEST HANDLERS */


    _proto13.__beforesend = function __beforesend(req) {
      if (this.isAborted()) return;

      this._trigger('beforesend', req);
    };

    _proto13.__error = function __error(res) {
      if (this.isAborted()) return;

      this._trigger('error', res);
    };

    _proto13.__success =
    /*#__PURE__*/
    function () {
      var _success = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(res) {
        var resj;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.isAborted()) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.next = 4;
                return fetch.getValue(res);

              case 4:
                resj = _context6.sent;

                if (!(resj && resj.error)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", this.__error(res));

              case 7:
                this._trigger('success', res);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function __success(_x8) {
        return _success.apply(this, arguments);
      };
    }();

    _proto13.__complete = function __complete(res) {
      if (this.isAborted()) return;

      this._trigger('complete', res);
    };

    _proto13.__abort = function __abort() {
      this._trigger('abort');
    };
    /* API */


    _proto13.isRequesting = function isRequesting() {
      return !!this.req && ![0, 4].includes(this.req.readyState); // 0: UNSENT, 4: DONE
    };

    _proto13.getRequestsNr = function getRequestsNr() {
      return this._requestsNr;
    };

    _proto13.canRequest = function canRequest() {
      if (!this.options.requests.multiple.parallel && this.isRequesting()) return false;
      if (!this.options.requests.multiple.sequential && this._requestsNr) return false;
      return true;
    };

    _proto13.request = function request(options) {
      var _this10 = this;

      if (!this.canRequest()) return null;
      this._requestsNr++;
      this._isAborted = false;
      this.ajax = this._getAjax(options);

      this.ajax.request = function () {
        // Saving the request object
        _this10.req = fetch.defaults.request();
        return _this10.req;
      };

      fetch(this.ajax);
    };

    _proto13.isAborted = function isAborted() {
      return !!this._isAborted;
    };

    _proto13.abort = function abort() {
      if (!this.req || !this.isRequesting()) return null;
      this._isAborted = true;
      this.req.abort();

      this.__abort();
    };

    return Remote;
  }(Widgets.Storable);
  /* FACTORY */


  Factory.make(Remote, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.fetch); // @require core/svelto/svelto.js


(function ($, _, Svelto, Widgets) {
  /* TOASTS */
  var Toasts =
  /*#__PURE__*/
  function () {
    function Toasts() {
      this.reset();

      this.___visibility();
    }
    /* GENERAL */


    var _proto14 = Toasts.prototype;

    _proto14.get = function get() {
      return this.toasts;
    };

    _proto14.set = function set(toasts) {
      this.toasts = toasts;
    };

    _proto14.reset = function reset() {
      this.set([]);
    };

    _proto14.add = function add(toast) {
      if (this.toasts.includes(toast)) return;
      this.toasts.push(toast);
    };

    _proto14.remove = function remove(toast) {
      _.pull(this.toasts, toast);
    };
    /* HOVERING */


    _proto14.isHovering = function isHovering() {
      return !!this.hovering;
    };

    _proto14.setHovering = function setHovering(hovering) {
      this.hovering = hovering;
    };
    /* VISIBILITY */


    _proto14.___visibility = function ___visibility() {
      $.$document.on('visibilitychange', this.__visibility.bind(this));
    };

    _proto14.__visibility = function __visibility() {
      if (!this.toasts.length || this.isHovering()) return;

      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    };
    /* API MAPPING */


    _proto14._callMethod = function _callMethod(method) {
      for (var i = this.toasts.length - 1; i >= 0; i--) {
        // The array might get mutated in the process
        this.toasts[i][method]();
      }
    };

    _proto14.open = function open() {
      this._callMethod('open');
    };

    _proto14.close = function close() {
      this._callMethod('close');
    };

    _proto14.pause = function pause() {
      this._callMethod('pause');
    };

    _proto14.resume = function resume() {
      this._callMethod('resume');
    };

    return Toasts;
  }();

  ;
  /* EXPORT */

  Widgets.Toasts = new Toasts();
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets); // @require core/animations/animations.js
// @require core/colors/colors.js
// @require core/sizes/sizes.js
// @require lib/timer/timer.js
// @require widgets/autofocusable/autofocusable.js
// @require widgets/toasts/toasts.js
//TODO: Add support for dismissing a toast that contains only one button
//TODO: Add better support for swipe to dismiss


(function ($, _, Svelto, Toasts, Widgets, Factory, Pointer, Timer, Animations, Colors, Sizes) {
  /* CONFIG */
  var config = {
    name: 'toast',
    plugin: true,
    selector: '.toast',
    templates: {
      queues: function (o) {
        var __t,
            __p = '';

        __p += '<div class="toast-queues top"><div class="toast-queue expanded"></div><div class="toast-queues-row"><div class="toast-queue left"></div><div class="toast-queue center"></div><div class="toast-queue right"></div></div></div><div class="toast-queues bottom"><div class="toast-queues-row"><div class="toast-queue left"></div><div class="toast-queue center"></div><div class="toast-queue right"></div></div><div class="toast-queue expanded"></div></div>';
        return __p;
      },
      base: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="toast ' + ((__t = o.type) == null ? '' : __t) + ' ' + ((__t = o.color) == null ? '' : __t) + ' ' + ((__t = o.type !== 'action' ? 'actionable' : '') == null ? '' : __t) + ' ' + ((__t = o.css) == null ? '' : __t) + '"><div class="infobar ' + ((__t = Svelto.Colors.transparent) == null ? '' : __t) + '">';

        if (o.img) {
          ;
          __p += '<img src="' + ((__t = o.img) == null ? '' : __t) + '" class="toast-img infobar-left">';
        }

        ;

        if (o.icon) {
          ;
          __p += '<i class="icon ' + ((__t = o.title && o.body ? 'xlarge' : '') == null ? '' : __t) + ' infobar-left">' + ((__t = o.icon) == null ? '' : __t) + '</i>';
        }

        ;

        if (o.title || o.body) {
          ;
          __p += '<div class="infobar-center">';

          if (o.title) {
            ;
            __p += '<p class="infobar-title">' + ((__t = o.title) == null ? '' : __t) + '</p>';
          }

          ;

          if (o.body) {
            ;
            __p += (__t = o.body) == null ? '' : __t;
          }

          ;
          __p += '</div>';
        }

        ;

        if (o.buttons.length === 1) {
          ;
          __p += '<div class="infobar-right">';
          print(Svelto.Templates.Toast.button(o.buttons[0]));
          __p += '</div>';
        }

        ;
        __p += '</div>';

        if (o.buttons.length > 1) {
          ;
          __p += '<div class="toast-buttons multiple center-x">';

          for (var i = 0; i < o.buttons.length; i++) {
            ;
            print(Svelto.Templates.Toast.button(o.buttons[i]));
          }

          ;
          __p += '</div>';
        }

        ;
        __p += '</div>';
        return __p;
      },
      button: function (o) {
        var __t,
            __p = '';

        __p += '<div class="button ' + ((__t = o.color || Svelto.Colors.white) == null ? '' : __t) + ' ' + ((__t = o.size || Svelto.Sizes.small) == null ? '' : __t) + ' ' + ((__t = o.css || '') == null ? '' : __t) + '">' + ((__t = o.text || '') == null ? '' : __t) + '</div>';
        return __p;
      }
    },
    options: {
      anchor: {
        // Used for selecting the proper queue where this Toast should be attached
        x: 'left',
        y: 'bottom'
      },
      title: false,
      body: false,
      img: false,
      icon: false,
      buttons: [],

      /*
             : [{
                color: Colors.white,
                size: Sizes.small,
                css: '',
                text: '',
                onClick: _.noop // If it returns `false` the Toast won't be closed
             }],
      */
      type: 'alert',
      color: Colors.black,
      css: '',
      persistent: false,
      // Whether it should survive a change of page or not. Needed when used in frameworks like Meteor
      autoplay: true,
      ttl: 3500,
      ttlMinimumRemaining: 1000,
      // Auto-closing will be stopped on hover and started again on leave, with a remaining time of `Math.min ( what the remaining time was, this option )`;
      classes: {
        open: 'open'
      },
      selectors: {
        queues: '.toast-queues',
        queue: '.toast-queue',
        button: '.toast-buttons .button, .infobar-right .button'
      },
      animations: {
        open: Animations.normal,
        close: Animations.normal
      },
      keystrokes: {
        'esc': 'close'
      },
      callbacks: {
        open: _.noop,
        close: _.noop
      }
    }
  };
  /* TOAST */

  var Toast =
  /*#__PURE__*/
  function (_Widgets$Autofocusabl) {
    _inheritsLoose(Toast, _Widgets$Autofocusabl);

    function Toast() {
      return _Widgets$Autofocusabl.apply(this, arguments) || this;
    }

    /* READY */
    Toast.ready = function ready(done) {
      setTimeout(function () {
        // In order to better support client size rendering //TODO: Maybe do this lazily
        var queues = Toast.config.templates.queues();
        $.$layout.append(queues);
        done();
      });
    };
    /* SPECIAL */


    var _proto15 = Toast.prototype;

    _proto15._variables = function _variables() {
      this.$toast = this.$element;
      this.$buttons = this.$toast.find(this.options.selectors.button);
      this.timer = false;
      this._openUrl = false;
      this._isOpen = this.$toast.hasClass(this.options.classes.open);
    };

    _proto15._init = function _init() {
      this.$toast.widgetize();

      if (this._isOpen) {
        this.___timer();

        this.___tap();

        this.___flick();

        this.___buttonTap();

        this.___enter();

        this.___leave();

        this.___persistent();

        this.___keydown();

        this.___breakpoint();
      } else if (this.options.autoplay) {
        var whenReady = Toast.whenReady || Toast.__proto__.whenReady || Widgets.Widget.whenReady; //IE10 support -- static property

        whenReady.bind(Toast)(this.open.bind(this));
      }
    };
    /* PRIVATE */


    _proto15._getUrl = function _getUrl() {
      return window.location.href.split('#')[0];
    };
    /* TIMER */


    _proto15.___timer = function ___timer() {
      if (this.options.type !== 'action' && _.isNumber(this.options.ttl) && !_.isNaN(this.options.ttl) && this.options.ttl !== Infinity) {
        if (!this.timer) {
          this.timer = new Timer(this.close.bind(this), this.options.ttl, !document.hidden);
        } else {
          this.timer.reset();
        }

        Toasts.add(this);
      }
    };
    /* TAP */


    _proto15.___tap = function ___tap() {
      if (this.options.type !== 'action') {
        this._on(Pointer.tap, this.__tap);
      }
    };

    _proto15.__tap = function __tap(event) {
      event.preventDefault(); // Otherwise the click goes through the toast in Chrome for iOS

      this.close();
    };
    /* BUTTON TAP */


    _proto15.___buttonTap = function ___buttonTap() {
      this._on(this.$buttons, Pointer.tap, this.__buttonTap);
    };

    _proto15.__buttonTap = function __buttonTap(event, data) {
      var $button = $(event.target),
          index = this.$buttons.index($button),
          buttonObj = this.options.buttons[index];

      if (buttonObj.onClick) {
        if (buttonObj.onClick.apply($button[0], [event, data]) === false) return;
      }

      this.close();
    };
    /* ENTER */


    _proto15.___enter = function ___enter() {
      this._on(true, Pointer.enter, this.__enter);
    };

    _proto15.__enter = function __enter() {
      Toasts.setHovering(true);
      Toasts.pause();
    };
    /* LEAVE */


    _proto15.___leave = function ___leave() {
      this._on(true, Pointer.leave, this.__leave);
    };

    _proto15.__leave = function __leave() {
      Toasts.setHovering(false);

      if (!document.hidden) {
        Toasts.resume();
      }
    };
    /* FLICK */


    _proto15.___flick = function ___flick() {
      if (this.options.type !== 'action') {
        this.$toast.flickable({
          callbacks: {
            flick: this.__flick.bind(this)
          }
        });
      }
    };

    _proto15.__flick = function __flick(event, data) {
      if (data.orientation === 'horizontal') {
        this.close();
      }
    };
    /* PERSISTENT */


    _proto15.___persistent = function ___persistent() {
      if (!this.options.persistent) {
        this.___route();
      }
    };

    _proto15.__route = function __route() {
      var currentUrl = this._getUrl();

      if (this._openUrl && this._openUrl !== currentUrl) {
        this.close();
      }
    };
    /* RESET */


    _proto15._reset = function _reset() {
      /* TOASTS */
      Toasts.remove(this);
      /* FLICK */

      this.$toast.flickable('destroy');
      /* SUPER */

      _Widgets$Autofocusabl.prototype._reset.call(this);
    };
    /* API */


    _proto15.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto15.open = function open() {
      if (this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.open.bind(this));
      this.lock();
      this._isOpen = true;

      this._frame(function () {
        $(this.options.selectors.queues + '.' + this.options.anchor.y + ' ' + this.options.selectors.queue + '.' + this.options.anchor.x).append(this.$toast);

        this._frame(function () {
          this.$toast.addClass(this.options.classes.open);
          this.autofocus();
          this.unlock();

          this._trigger('open');
        });
      });

      this.___timer();

      this.___tap();

      this.___flick();

      this.___buttonTap();

      this.___enter();

      this.___leave();

      this.___persistent();

      this.___keydown();

      this.___breakpoint();

      this._defer(function () {
        this._openUrl = this._getUrl();
      });
    };

    _proto15.close = function close() {
      if (!this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.close.bind(this));
      this.lock();
      this._isOpen = false;
      this._openUrl = false;

      this._frame(function () {
        this.$toast.removeClass(this.options.classes.open);
        this.autoblur();

        this._delay(function () {
          this.$toast.remove();
          this.unlock();

          this._trigger('close');
        }, this.options.animations.close);
      });

      this._reset();
    };

    _proto15.pause = function pause() {
      this.timer.pause();
    };

    _proto15.resume = function resume() {
      this.timer.remaining(Math.max(this.options.ttlMinimumRemaining, this.timer.remaining())).play();
    };

    return Toast;
  }(Widgets.Autofocusable);
  /* FACTORY */


  Factory.make(Toast, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.Toasts, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Timer, Svelto.Animations, Svelto.Colors, Svelto.Sizes); // @priority 600
// @require ../remote.js
// @require lib/autofocus/helpers.js
// @require widgets/toast/toast.js
// Remote loaded content should always be properly wrapped html elements


(function ($, _, Svelto, Widgets, Factory, fetch) {
  /* CONFIG */
  var config = {
    name: 'remoteLoader',
    plugin: true,
    selector: '.remote-loader',
    options: {
      externalUpdateEvents: 'justifiedlayout:firstrender',
      // When one of these events happen, check again if the remote loader can load //FIXME: Ugly
      cache: false,
      // Selector pointing to the element that cointains the content
      target: false,
      // Selector pointing to the element to which the content (always unwrapped) will be appended
      targetFilter: '*',
      // Selector for appending only the matching children to the target
      wrap: true,
      // Wrap the content into a `.remote-loaded` element
      autorequest: {
        threshold: 400
      },
      preloading: {
        enabled: false,
        // Preload the content
        wait: true // Wait for an explicit request or autorequesting before doing the actual work

      },
      requests: {
        multiple: {
          parallel: false,
          sequential: false
        }
      },
      attributes: {
        href: 'href' // In order to better support `a` elements (the data value has higher priority)

      },
      classes: {
        preload: 'preload',
        nowrap: 'no-wrap'
      },
      datas: {
        url: 'url',
        body: 'body',
        method: 'method',
        cache: 'cache',
        target: 'target',
        targetFilter: 'target-filter'
      },
      callbacks: {
        loaded: _.noop
      }
    }
  };
  /* REMOTE LOADER */

  var RemoteLoader =
  /*#__PURE__*/
  function (_Widgets$Remote) {
    _inheritsLoose(RemoteLoader, _Widgets$Remote);

    function RemoteLoader() {
      return _Widgets$Remote.apply(this, arguments) || this;
    }

    var _proto16 = RemoteLoader.prototype;

    /* SPECIAL */
    _proto16._variables = function _variables() {
      _Widgets$Remote.prototype._variables.call(this);

      this.$loader = this.$element;
    };

    _proto16._init = function _init() {
      var _this11 = this;

      this.options.preloading.enabled = this.$loader.hasClass(this.options.classes.preload) || this.options.preloading.enabled;
      this.options.ajax.url = this.$loader.data(this.options.datas.url) || this.$loader.attr(this.options.attributes.href) || this.options.ajax.url;
      this.options.ajax.body = this.$loader.data(this.options.datas.body) || this.options.ajax.body;
      this.options.ajax.method = this.$loader.data(this.options.datas.method) || this.options.ajax.method;
      this.options.cache = this.$loader.data(this.options.datas.cache) || this.options.cache;
      this.options.target = this.$loader.data(this.options.datas.target) || this.options.target;
      this.options.targetFilter = this.$loader.data(this.options.datas.targetFilter) || this.options.targetFilter;
      this.options.wrap = this.$loader.hasClass(this.options.classes.nowrap) ? false : this.options.wrap;

      if (this.options.cache) {
        this.$cache = $(this.options.cache);
        this.$cache = this.$cache.length ? this.$cache : false;
      }

      if (this.options.target) {
        this.$target = $(this.options.target);
        this.$target = this.$target.length ? this.$target : false;
      }

      if (this.options.preloading.enabled) this.preload();

      this._defer(function () {
        return !_this11.isRequesting() && _this11.disable();
      }); //TODO: Maybe define as an external function //TODO: Maybe add an option for this

    };

    _proto16._events = function _events() {
      this.___request();

      this.___externalUpdate();
    };
    /* UTILITIES */


    _proto16._replace =
    /*#__PURE__*/
    function () {
      var _replace2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(res, resj, isJSON) {
        var content, $elements, $targetElements, $otherElements, $otherWrapper;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = _;

                if (!isJSON) {
                  _context7.next = 5;
                  break;
                }

                _context7.t1 = resj.html;
                _context7.next = 13;
                break;

              case 5:
                if (!_.isString(res)) {
                  _context7.next = 9;
                  break;
                }

                _context7.t2 = res;
                _context7.next = 12;
                break;

              case 9:
                _context7.next = 11;
                return res.text();

              case 11:
                _context7.t2 = _context7.sent;

              case 12:
                _context7.t1 = _context7.t2;

              case 13:
                _context7.t3 = _context7.t1;
                content = _context7.t0.templateMinify.call(_context7.t0, _context7.t3);
                $elements = $(content).filter(function (i, ele) {
                  return ele.nodeType === 1;
                });
                // Text nodes will create some problem

                /* TARGET */
                $targetElements = this.$target ? this.options.targetFilter ? $elements.filter(this.options.targetFilter) : $elements : $.$empty;

                if ($targetElements.length) {
                  this.$target.append($targetElements);
                  $targetElements.widgetize();
                  this.$target.trigger('remoteloader:target', {
                    //FIXME: Kind of ugly, we should use `_trigger` instead
                    $elements: $targetElements
                  });

                  this._trigger('loaded', {
                    $container: this.$target,
                    $elements: $targetElements
                  });
                }
                /* OTHERS */


                $otherElements = $targetElements.length ? $elements.not($targetElements) : $elements, $otherWrapper = this.options.wrap ? $("<div id=\"remote-loaded-" + $.guid++ + "\"></div>") : this.$loader.parent();

                if (this.options.wrap) {
                  $otherWrapper.append($otherElements);
                  this.$loader.replaceWith($otherWrapper);
                  $otherWrapper.widgetize().autofocus();
                } else {
                  this.$loader.replaceWith($otherElements);
                  $otherElements.widgetize().autofocus();
                }

                this._trigger('loaded', {
                  $container: $otherWrapper,
                  $elements: $otherElements
                });

                this._replaced = true;

              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function _replace(_x9, _x10, _x11) {
        return _replace2.apply(this, arguments);
      };
    }();
    /* EXTERNAL UPDATE */


    _proto16.___externalUpdate = function ___externalUpdate() {
      this._on(true, $.$document, this.options.externalUpdateEvents, this.__request);
    };
    /* REQUEST */


    _proto16.___request = function ___request() {
      this.__request();

      var $scrollable = $.$window.add(this.$loader.parents()),
          handler = this._frames(this.__request.bind(this));

      this._on(true, $.$window, 'resize', handler);

      this._on(true, $scrollable, 'scroll', handler);
    };

    _proto16.__request = function __request() {
      if (!this.$loader.isVisible() || this.$loader.getRect().top - $.window.innerHeight > this.options.autorequest.threshold) return;
      this.request();
    };
    /* REQUEST HANDLERS */


    _proto16.__error =
    /*#__PURE__*/
    function () {
      var _error = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(res) {
        var message;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!this.isAborted()) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return");

              case 2:
                _context8.next = 4;
                return fetch.getValue(res, 'message');

              case 4:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 7;
                  break;
                }

                _context8.t0 = this.options.messages.error;

              case 7:
                message = _context8.t0;
                $.toast(message);

                _Widgets$Remote.prototype.__error.call(this, res);

                this.$loader.remove();

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function __error(_x12) {
        return _error.apply(this, arguments);
      };
    }();

    _proto16.__success =
    /*#__PURE__*/
    function () {
      var _success2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(res) {
        var resj, isJSON;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!this.isAborted()) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return");

              case 2:
                _context9.next = 4;
                return fetch.getValue(res);

              case 4:
                resj = _context9.sent;
                isJSON = !!resj;

                if (!(isJSON && (resj.error || !('html' in resj)))) {
                  _context9.next = 8;
                  break;
                }

                return _context9.abrupt("return", this.__error(res));

              case 8:
                _Widgets$Remote.prototype.__success.call(this, res);

                if (!(this._preloading && this.options.preloading.wait && !this._requested)) {
                  _context9.next = 16;
                  break;
                }

                this.disable();
                this._res = res;
                this._resj = resj;
                this._isJSON = isJSON;
                _context9.next = 18;
                break;

              case 16:
                _context9.next = 18;
                return this._replace(res, resj, isJSON);

              case 18:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function __success(_x13) {
        return _success2.apply(this, arguments);
      };
    }();

    _proto16.__complete = function __complete(res) {
      this._preloading = false;

      _Widgets$Remote.prototype.__complete.call(this, res);
    };
    /* API OVERRIDES */


    _proto16.request = function request(preloading) {
      if (this._replaced) return;
      if (this.$cache) return this._replace(this.$cache.html(), null, false);
      if (this._res) return this._replace(this._res, this._resj, this._isJSON);
      if (!preloading) this._requested = true;
      if (!this.canRequest()) return;
      this.enable();
      return _Widgets$Remote.prototype.request.call(this);
    };
    /* API */


    _proto16.preload = function preload() {
      if (this.$cache) return;
      this._preloading = true;
      this.request(true);
    };

    return RemoteLoader;
  }(Widgets.Remote);
  /* FACTORY */


  Factory.make(RemoteLoader, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.fetch); // @priority 500
// @require core/animations/animations.js
// @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Pointer, Animations) {
  /* CONFIG */
  var config = {
    name: 'ripple',
    plugin: true,
    selector: '.ripple',
    templates: {
      circle: function (o) {
        var __t,
            __p = '';

        __p += '<div class="ripple-circle"></div>';
        return __p;
      }
    },
    options: {
      classes: {
        center: 'ripple-center'
      },
      animations: {
        show: Animations.slow
      },
      callbacks: {
        show: _.noop,
        hide: _.noop
      }
    }
  };
  /* RIPPLE */

  var Ripple =
  /*#__PURE__*/
  function (_Widgets$Widget7) {
    _inheritsLoose(Ripple, _Widgets$Widget7);

    function Ripple() {
      return _Widgets$Widget7.apply(this, arguments) || this;
    }

    var _proto17 = Ripple.prototype;

    /* SPECIAL */
    _proto17._variables = function _variables() {
      this.$ripple = this.$element;
    };

    _proto17._events = function _events() {
      this.___up();
    };
    /* UP */


    _proto17.___up = function ___up() {
      this._on("" + Pointer.up, this.__up);
    };

    _proto17.__up = function __up(event) {
      if (this.$ripple.hasClass(this.options.classes.center)) {
        var offset = this.$ripple.offset();

        this._show({
          x: offset.left + this.$ripple.outerWidth() / 2,
          y: offset.top + this.$ripple.outerHeight() / 2
        });
      } else {
        this._show($.eventXY(event));
      }
    };
    /* SHOW */


    _proto17._show = function _show(XY) {
      var _this12 = this;

      var $circle = $(this._template('circle'));
      /* SIZE */

      var offset = this.$ripple.offset(),
          insetX = XY.x - offset.left,
          insetY = XY.y - offset.top,
          sideX = Math.max(insetX, this.$ripple.outerWidth() - insetX),
          sideY = Math.max(insetY, this.$ripple.outerHeight() - insetY),
          radius = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2)),
          // Basically the max the distances from the point to the corners
      diameter = radius * 2;
      /* SHOW */

      $circle.css({
        width: diameter,
        height: diameter,
        top: insetY,
        left: insetX
      }).prependTo(this.$ripple);

      this._trigger('show');
      /* HIDE */


      $circle.one('animationend', function () {
        $circle.remove();

        _this12._trigger('hide');
      }, this.options.animations.show);
    };

    return Ripple;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Ripple, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Animations); // @optional ./raw/raw.js
// @require core/svelto/svelto.js
// @require lib/fetch/fetch.js


(function ($, _, Svelto, EmojiDataRaw, fetch) {
  /* EMOJI DATA */
  var EmojiData = {
    /* VARIABLES */
    _raw: EmojiDataRaw,
    _rawUrl: "/static/json/emoji.json?v=" + Svelto.VERSION,
    _data: undefined,

    /* UTILITIES */
    _parse: function _parse(data) {
      // data = JSON.parse ( JSON.stringify ( data ) );
      data.alts = {}; // data.chars = [];

      data.emojis = {};
      data.emoticons = {};
      data.categories.forEach(function (category) {
        category.emojis.forEach(function (emoji) {
          if (emoji.alts) {
            emoji.alts.forEach(function (alt) {
              return data.alts[alt] = emoji;
            });
          } // data.chars.push ([ emoji.char, emoji.id ]);


          data.emojis[emoji.id] = emoji;

          if (emoji.emoticons) {
            emoji.emoticons.forEach(function (emoticon) {
              var prev = data.emoticons[emoticon];

              if (_.isUndefined(prev)) {
                data.emoticons[emoticon] = emoji;
              } else if (_.isArray(prev)) {
                data.emoticons[emoticon].push(emoji);
              } else {
                data.emoticons[emoticon] = [prev, emoji];
              }
            });
          }
        });
      }); // data.chars = data.chars.sort ( ( a, b ) => b[0].length - a[0].length );

      return data;
    },

    /* METHODS */
    getRemoteRaw: function () {
      var _getRemoteRaw = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return fetch(EmojiData._rawUrl);

              case 2:
                return _context10.abrupt("return", _context10.sent.json());

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function getRemoteRaw() {
        return _getRemoteRaw.apply(this, arguments);
      };
    }(),
    getRaw: function () {
      var _getRaw = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!EmojiData._raw) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return", EmojiData._raw);

              case 2:
                _context11.next = 4;
                return EmojiData.getRemoteRaw();

              case 4:
                return _context11.abrupt("return", EmojiData._raw = _context11.sent);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function getRaw() {
        return _getRaw.apply(this, arguments);
      };
    }(),
    get: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12() {
        var raw;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!EmojiData._data) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return", EmojiData._data);

              case 2:
                _context12.next = 4;
                return EmojiData.getRaw();

              case 4:
                raw = _context12.sent;

                if (!EmojiData._data) {
                  _context12.next = 7;
                  break;
                }

                return _context12.abrupt("return", EmojiData._data);

              case 7:
                return _context12.abrupt("return", EmojiData._data = EmojiData._parse(raw));

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function get() {
        return _get.apply(this, arguments);
      };
    }()
  };
  /* EXPORT */

  Svelto.EmojiData = EmojiData;
})(Svelto.$, Svelto._, Svelto, Svelto.EmojiDataRaw, Svelto.fetch); // @require core/modernizr/modernizr.js


(function (Modernizr) {
  /* EMOJI */
  function supportsEmoji() {
    var canvas = document.createElement('canvas');
    if (!canvas.getContext) return false;
    var ctx = canvas.getContext('2d');
    if (!ctx || typeof ctx.fillText !== 'function') return false;
    ctx.textBaseline = 'top';
    ctx.font = '32px Arial';
    ctx.fillText("\uD83D\uDE03", 0, 0);
    return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
  }

  Modernizr.addTest('emoji', supportsEmoji());
})(window.Modernizr); // @require ./data/data.js
// @require ./test.js
// @require core/svelto/svelto.js


(function ($, _, Modernizr, Svelto, EmojiData) {
  /* EMOJI */
  var Emoji = {
    /* OPTIONS */
    options: {
      tone: 1,
      // Default tone
      regexes: {
        encoded: /:([a-zA-Z0-9+_-]+):(:tone-([1-6]):)?/g,
        emoticon: /(:o\))|(=-?\))|(;-?[bpP)])|(:-?[bdDoOpP>|()\\\/*])|(8-?\))|([cCD()]:)|(<\/?3)|(>:-?\()|(:'\()/g
      },
      make: {
        css: '',
        // Additional wrapper classes
        sprite: false // Whether we should a sprite instead of single images

      },
      native: {
        enabled: Modernizr.emoji,
        // If enabled the unicode character will be used
        wrap: true // If enabled the emoji will be wrapped by a `i.emoji` element

      },
      image: {
        path: '//cdn.jsdelivr.net/emojione/assets/png/$1.png'
      },
      sprite: {
        columns: 41 // Number of columns in the sprite

      }
    },

    /* METHODS */
    getByName: function () {
      var _getByName = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(name) {
        var data;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return EmojiData.get();

              case 2:
                data = _context13.sent;
                return _context13.abrupt("return", data.emojis[name] || data.alts[name]);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function getByName(_x14) {
        return _getByName.apply(this, arguments);
      };
    }(),
    getByEmoticon: function () {
      var _getByEmoticon = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(emoticon, single) {
        var data, found;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (single === void 0) {
                  single = false;
                }

                _context14.next = 3;
                return EmojiData.get();

              case 3:
                data = _context14.sent;
                found = data.emoticons[emoticon];
                return _context14.abrupt("return", single && _.isArray(found) ? found[0] : found);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function getByEmoticon(_x15, _x16) {
        return _getByEmoticon.apply(this, arguments);
      };
    }(),
    getByUnicode: function () {
      var _getByUnicode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(unicode) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function getByUnicode(_x17) {
        return _getByUnicode.apply(this, arguments);
      };
    }(),
    //TODO
    getTone: function () {
      var _getTone = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16(nr) {
        var data;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return EmojiData.get();

              case 2:
                data = _context16.sent;
                return _context16.abrupt("return", data.tones[nr]);

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function getTone(_x18) {
        return _getTone.apply(this, arguments);
      };
    }(),
    emoji2hex: function () {
      var _emoji2hex = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(emoji, tone) {
        var codes;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (tone === void 0) {
                  tone = Emoji.options.tone;
                }

                codes = _.range(emoji.char.length).map(function (nr) {
                  return emoji.char.codePointAt(nr);
                }).filter(function (c) {
                  return c !== 0x200d && c !== 0xfe0f && (c < 0xd800 || c > 0xdfff);
                });

                if (!(tone > 1)) {
                  _context17.next = 7;
                  break;
                }

                _context17.next = 5;
                return Emoji.getTone(tone);

              case 5:
                tone = _context17.sent;
                codes.push(tone.char.codePointAt(0));

              case 7:
                return _context17.abrupt("return", codes.map(function (c) {
                  return c.toString(16).padStart(4, '0');
                }).join('-'));

              case 8:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function emoji2hex(_x19, _x20) {
        return _emoji2hex.apply(this, arguments);
      };
    }(),
    hex2emoji: function () {
      var _hex2emoji = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18() {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function hex2emoji() {
        return _hex2emoji.apply(this, arguments);
      };
    }(),
    //TODO
    emoji2unicode: function () {
      var _emoji2unicode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee19(emoji, tone) {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (tone === void 0) {
                  tone = Emoji.options.tone;
                }

                if (!_.isString(emoji)) {
                  _context19.next = 7;
                  break;
                }

                _context19.next = 4;
                return Emoji.getByName(emoji);

              case 4:
                _context19.t0 = _context19.sent;
                _context19.next = 8;
                break;

              case 7:
                _context19.t0 = emoji;

              case 8:
                emoji = _context19.t0;

                if (emoji) {
                  _context19.next = 11;
                  break;
                }

                return _context19.abrupt("return", '');

              case 11:
                if (!(!emoji.tones || tone < 2)) {
                  _context19.next = 13;
                  break;
                }

                return _context19.abrupt("return", emoji.char);

              case 13:
                _context19.next = 15;
                return Emoji.getTone(tone);

              case 15:
                tone = _context19.sent;
                return _context19.abrupt("return", "" + emoji.char + tone.char);

              case 17:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function emoji2unicode(_x21, _x22) {
        return _emoji2unicode.apply(this, arguments);
      };
    }(),
    unicode2emoji: function () {
      var _unicode2emoji = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee20(unicode) {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function unicode2emoji(_x23) {
        return _unicode2emoji.apply(this, arguments);
      };
    }(),
    //TODO
    getImageUrl: function () {
      var _getImageUrl = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee21(emoji, tone) {
        var hex;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (tone === void 0) {
                  tone = Emoji.options.tone;
                }

                _context21.next = 3;
                return Emoji.emoji2hex(emoji, tone);

              case 3:
                hex = _context21.sent;
                return _context21.abrupt("return", _.format(Emoji.options.image.path, hex));

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function getImageUrl(_x24, _x25) {
        return _getImageUrl.apply(this, arguments);
      };
    }(),
    getSpriteXY: function getSpriteXY(emoji, tone) {
      if (tone === void 0) {
        tone = Emoji.options.tone;
      }

      var position = emoji.x + tone - 1,
          x = Math.floor(position / Emoji.options.sprite.columns),
          y = position % Emoji.options.sprite.columns;
      return {
        x: x,
        y: y
      };
    },
    encode: function encode(emoji, tone) {
      if (tone === void 0) {
        tone = Emoji.options.tone;
      }

      var name = _.isObject(emoji) ? emoji.id : emoji;
      return tone > 1 ? ":" + name + "::tone-" + tone + ":" : ":" + name + ":";
    },
    make: function () {
      var _make2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee22(emoji, tone, options) {
        var unicode, _Emoji$getSpriteXY, x, y, scale, posX, posY, url;

        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (tone === void 0) {
                  tone = Emoji.options.tone;
                }

                if (options === void 0) {
                  options = Emoji.options.make;
                }

                if (!_.isString(emoji)) {
                  _context22.next = 8;
                  break;
                }

                _context22.next = 5;
                return Emoji.getByName(emoji);

              case 5:
                _context22.t0 = _context22.sent;
                _context22.next = 9;
                break;

              case 8:
                _context22.t0 = emoji;

              case 9:
                emoji = _context22.t0;

                if (emoji) {
                  _context22.next = 12;
                  break;
                }

                return _context22.abrupt("return", '');

              case 12:
                tone = emoji.tones ? tone : 1;

                if (!Emoji.options.native.enabled) {
                  _context22.next = 24;
                  break;
                }

                _context22.next = 16;
                return Emoji.emoji2unicode(emoji, tone);

              case 16:
                unicode = _context22.sent;

                if (!Emoji.options.native.wrap) {
                  _context22.next = 21;
                  break;
                }

                return _context22.abrupt("return", "<i class=\"emoji " + options.css + "\" data-id=\"" + emoji.id + "\" data-tone=\"" + tone + "\" data-tonable=\"" + !!emoji.tones + "\" title=\"" + emoji.name + "\">" + unicode + "</i>");

              case 21:
                return _context22.abrupt("return", unicode);

              case 22:
                _context22.next = 33;
                break;

              case 24:
                if (!options.sprite) {
                  _context22.next = 29;
                  break;
                }

                _Emoji$getSpriteXY = Emoji.getSpriteXY(emoji, tone), x = _Emoji$getSpriteXY.x, y = _Emoji$getSpriteXY.y, scale = 100 / (Emoji.options.sprite.columns - 1), posX = x * scale, posY = y * scale;
                return _context22.abrupt("return", "<i class=\"emoji " + options.css + "\" data-id=\"" + emoji.id + "\" data-tone=\"" + tone + "\" data-tonable=\"" + !!emoji.tones + "\" title=\"" + emoji.name + "\" style=\"background-position:" + posX + "% " + posY + "%\"></i>");

              case 29:
                _context22.next = 31;
                return Emoji.getImageUrl(emoji, tone);

              case 31:
                url = _context22.sent;
                return _context22.abrupt("return", "<i class=\"emoji " + options.css + "\" data-id=\"" + emoji.id + "\" data-tone=\"" + tone + "\" data-tonable=\"" + !!emoji.tones + "\" title=\"" + emoji.name + "\" style=\"background-image:url(" + url + ")\"></i>");

              case 33:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function make(_x26, _x27, _x28) {
        return _make2.apply(this, arguments);
      };
    }()
  };
  /* EXPORT */

  Svelto.Emoji = Emoji;
})(Svelto.$, Svelto._, Svelto.Modernizr, Svelto, Svelto.EmojiData); // @priority 300
// @require core/widgetize/widgetize.js
// @require lib/emoji/emoji.js


(function ($, _, Svelto, Widgetize, EmojiData, Emoji) {
  /* EMOJIFY */
  var Emojify = {
    /* OPTIONS */
    options: {
      parse: {
        emoticon: true,
        encoded: true,
        unicode: false //FIXME: Doesn't work properly, and it's very slow

      }
    },

    /* UTILITIES */
    getEmoticons: function getEmoticons(str) {
      var matches = _.findMatches(str, Emoji.options.regexes.emoticon),
          sorted = matches.sort(function (a, b) {
        return b.index - a.index;
      });

      return sorted.map(function (match) {
        return {
          emoticon: match[0],
          index: match.index
        };
      });
    },
    getEncoded: function getEncoded(str) {
      var matches = _.findMatches(str, Emoji.options.regexes.encoded),
          uniq = _.uniqBy(matches, _.first),
          sorted = uniq.sort(function (a, b) {
        return b[0].length - a[0].length;
      });

      return sorted.map(function (match) {
        return {
          encoded: match[0],
          name: match[1],
          tone: match[3] || Emoji.options.tone
        };
      });
    },

    /* PARSE */
    parseEmoticon: function () {
      var _parseEmoticon = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee23(str, options) {
        var matches, i, l, _matches$i, emoticon, index, emoji, parsed;

        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (Emojify.options.parse.emoticon) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt("return", str);

              case 2:
                matches = Emojify.getEmoticons(str);
                i = 0, l = matches.length;

              case 4:
                if (!(i < l)) {
                  _context23.next = 20;
                  break;
                }

                _matches$i = matches[i], emoticon = _matches$i.emoticon, index = _matches$i.index;

                if (!(index > 0 && !str[index - 1].match(/\s/) || index + emoticon.length < str.length && !str[index + emoticon.length].match(/\s/))) {
                  _context23.next = 8;
                  break;
                }

                return _context23.abrupt("continue", 17);

              case 8:
                _context23.next = 10;
                return Emoji.getByEmoticon(emoticon, true);

              case 10:
                emoji = _context23.sent;

                if (emoji) {
                  _context23.next = 13;
                  break;
                }

                return _context23.abrupt("return");

              case 13:
                _context23.next = 15;
                return Emoji.make(emoji.id, Emoji.options.tone, options);

              case 15:
                parsed = _context23.sent;
                str = str.substring(0, index) + parsed + str.substring(index + emoticon.length);

              case 17:
                i++;
                _context23.next = 4;
                break;

              case 20:
                return _context23.abrupt("return", str);

              case 21:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function parseEmoticon(_x29, _x30) {
        return _parseEmoticon.apply(this, arguments);
      };
    }(),
    parseEncoded: function () {
      var _parseEncoded = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee24(str, options) {
        var matches, i, l, _matches$i2, encoded, name, tone, emoji, parsed;

        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (Emojify.options.parse.encoded) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt("return", str);

              case 2:
                matches = Emojify.getEncoded(str);
                i = 0, l = matches.length;

              case 4:
                if (!(i < l)) {
                  _context24.next = 21;
                  break;
                }

                _matches$i2 = matches[i];
                encoded = _matches$i2.encoded;
                name = _matches$i2.name;
                tone = _matches$i2.tone;
                _context24.next = 11;
                return Emoji.getByName(name);

              case 11:
                emoji = _context24.sent;

                if (emoji) {
                  _context24.next = 14;
                  break;
                }

                return _context24.abrupt("continue", 18);

              case 14:
                _context24.next = 16;
                return Emoji.make(emoji.id, tone, options);

              case 16:
                parsed = _context24.sent;
                str = _.replaceAll(str, encoded, parsed);

              case 18:
                i++;
                _context24.next = 4;
                break;

              case 21:
                return _context24.abrupt("return", str);

              case 22:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function parseEncoded(_x31, _x32) {
        return _parseEncoded.apply(this, arguments);
      };
    }(),
    parseUnicode: function () {
      var _parseUnicode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee25(str, options) {
        var data, i, l, _data$chars$i, char, name, emoji, tones, ti, tl, unicode;

        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (Emojify.options.parse.unicode) {
                  _context25.next = 2;
                  break;
                }

                return _context25.abrupt("return", str);

              case 2:
                _context25.next = 4;
                return EmojiData.get();

              case 4:
                data = _context25.sent;
                i = 0, l = data.chars.length;

              case 6:
                if (!(i < l)) {
                  _context25.next = 34;
                  break;
                }

                _data$chars$i = data.chars[i];
                char = _data$chars$i[0];
                name = _data$chars$i[1];
                _context25.next = 12;
                return Emoji.getByName(name);

              case 12:
                emoji = _context25.sent;
                tones = emoji.tones ? 6 : 1;
                ti = 6, tl = 1;

              case 15:
                if (!(ti >= tl)) {
                  _context25.next = 31;
                  break;
                }

                _context25.next = 18;
                return Emoji.emoji2unicode(emoji, ti);

              case 18:
                unicode = _context25.sent;

                if (!(str.indexOf(unicode) === -1)) {
                  _context25.next = 21;
                  break;
                }

                return _context25.abrupt("continue", 28);

              case 21:
                _context25.t0 = _;
                _context25.t1 = str;
                _context25.t2 = unicode;
                _context25.next = 26;
                return Emoji.make(name, ti, options);

              case 26:
                _context25.t3 = _context25.sent;
                str = _context25.t0.replaceAll.call(_context25.t0, _context25.t1, _context25.t2, _context25.t3);

              case 28:
                ti--;
                _context25.next = 15;
                break;

              case 31:
                i++;
                _context25.next = 6;
                break;

              case 34:
                return _context25.abrupt("return", str);

              case 35:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      return function parseUnicode(_x33, _x34) {
        return _parseUnicode.apply(this, arguments);
      };
    }(),

    /* API */
    emojify: function () {
      var _emojify = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee26(target, options) {
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(target instanceof $)) {
                  _context26.next = 4;
                  break;
                }

                return _context26.abrupt("return", Promise.all(target.get().map(function (node) {
                  return Emojify.node(node, options);
                })));

              case 4:
                if (!_.isElement(target)) {
                  _context26.next = 8;
                  break;
                }

                return _context26.abrupt("return", Emojify.node(target, options));

              case 8:
                if (!_.isString(target)) {
                  _context26.next = 10;
                  break;
                }

                return _context26.abrupt("return", Emojify.string(target, options));

              case 10:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      return function emojify(_x35, _x36) {
        return _emojify.apply(this, arguments);
      };
    }(),
    string: function () {
      var _string = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee27(str, options) {
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", Emojify.parseUnicode(str, options).then(function (str) {
                  return Emojify.parseEncoded(str, options);
                }).then(function (str) {
                  return Emojify.parseEmoticon(str, options);
                }));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      return function string(_x37, _x38) {
        return _string.apply(this, arguments);
      };
    }(),
    node: function () {
      var _node2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee28(_node, options) {
        var type, value, parsed, parent, replacement;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                type = _node.nodeType;

                if (!(type === 3)) {
                  _context28.next = 17;
                  break;
                }

                value = _node.nodeValue;
                _context28.next = 5;
                return Emojify.string(value, options);

              case 5:
                parsed = _context28.sent;

                if (!(value !== parsed)) {
                  _context28.next = 15;
                  break;
                }

                if (!(Emoji.options.native.enabled && !Emoji.options.native.wrap)) {
                  _context28.next = 11;
                  break;
                }

                _node.nodeValue = parsed;
                _context28.next = 15;
                break;

              case 11:
                parent = _node.parentNode;

                if (parent) {
                  _context28.next = 14;
                  break;
                }

                return _context28.abrupt("return");

              case 14:
                // Maybe `node` is a remotely loaded element, not attached to the DOM
                if (parent.childNodes.length === 1) {
                  parent.innerHTML = parsed;
                } else {
                  replacement = $.parseHTML("<span>" + parsed + "</span>")[0];

                  _node.parentNode.replaceChild(replacement, _node);
                }

              case 15:
                _context28.next = 19;
                break;

              case 17:
                if (!(type === 1)) {
                  _context28.next = 19;
                  break;
                }

                return _context28.abrupt("return", Promise.all(Array.prototype.map.call(_node.childNodes, function (node) {
                  return Emojify.node(node, options);
                })));

              case 19:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      return function node(_x39, _x40) {
        return _node2.apply(this, arguments);
      };
    }()
  };
  /* PLUGIN */

  $.fn.emojify = function (options) {
    return Emojify.emojify(this, options);
  };
  /* WIDGETIZE */


  Widgetize.add('.emojify', Emojify.emojify);
  /* EXPORT */

  Svelto.Emojify = Emojify;
})(Svelto.$, Svelto._, Svelto, Svelto.Widgetize, Svelto.EmojiData, Svelto.Emoji); // @require ../remote.js
// @require widgets/toast/toast.js


(function ($, _, Svelto, Widgets, Factory, Pointer, fetch) {
  /* CONFIG */
  var config = {
    name: 'remoteReaction',
    options: {
      state: undefined,
      // The state of the reaction
      stateDefault: null,
      // The default state
      stateUrl: false,
      // If provided, fetch the state from here
      stateBatchUrl: false,
      // If provided, fetch the state from here
      url: false,
      // Submit the reaction to this url
      ajax: {
        cache: false,
        method: 'post'
      },
      datas: {
        state: 'state',
        stateUrl: 'state-url',
        stateBatchUrl: 'state-batch-url',
        url: 'url'
      },
      classes: {
        noRemoteState: 'no-remote-state'
      }
    }
  };
  /* REMOTE REACTION */

  var RemoteReaction =
  /*#__PURE__*/
  function (_Widgets$Remote2) {
    _inheritsLoose(RemoteReaction, _Widgets$Remote2);

    function RemoteReaction() {
      return _Widgets$Remote2.apply(this, arguments) || this;
    }

    var _proto18 = RemoteReaction.prototype;

    /* SPECIAL */
    _proto18._variables = function _variables() {
      this.$reaction = this.$element;
    };

    _proto18._init = function _init() {
      this.options.state = this.$reaction.hasAttribute("data-" + this.options.datas.state) ? this.$reaction.data(this.options.datas.state) : this.options.state || this.options.stateDefault;
      this.options.stateUrl = this.$reaction.data(this.options.datas.stateUrl) || this.options.stateUrl;
      this.options.stateBatchUrl = this.$reaction.data(this.options.datas.stateBatchUrl) || this.options.stateBatchUrl;
      this.options.url = this.$reaction.data(this.options.datas.url) || this.options.url;

      this._update();

      if (!this.$reaction.hasClass(this.options.classes.noRemoteState)) {
        this.___remoteState();
      }
    };
    /* REMOTE STATE */


    _proto18.___remoteState =
    /*#__PURE__*/
    function () {
      var _remoteState2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee29() {
        var res;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (this.options.stateUrl) {
                  _context29.next = 2;
                  break;
                }

                return _context29.abrupt("return");

              case 2:
                _context29.next = 4;
                return fetch({
                  url: this.options.stateUrl,
                  batchUrl: this.options.stateBatchUrl
                });

              case 4:
                res = _context29.sent;

                this.__remoteState(res);

              case 6:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      return function ___remoteState() {
        return _remoteState2.apply(this, arguments);
      };
    }();

    _proto18.__remoteState =
    /*#__PURE__*/
    function () {
      var _remoteState3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee30(res) {
        var state;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.next = 2;
                return fetch.getValue(res, 'state');

              case 2:
                state = _context30.sent;

                if (!_.isNull(state)) {
                  _context30.next = 5;
                  break;
                }

                return _context30.abrupt("return");

              case 5:
                this._remoteState(state);

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      return function __remoteState(_x41) {
        return _remoteState3.apply(this, arguments);
      };
    }();

    _proto18._remoteState = function _remoteState(state) {
      if (state === this.options.state) return;
      this.options.state = state;

      this._update();
    };
    /* UPDATE */


    _proto18._update = function _update() {
      this.$reaction.attr("data-" + this.options.datas.state, String(this.options.state));
    };
    /* REQUEST HANDLERS */


    _proto18.__beforesend = function __beforesend(req) {
      this.disable();
      return _Widgets$Remote2.prototype.__beforesend.call(this, req);
    };

    _proto18.__error =
    /*#__PURE__*/
    function () {
      var _error2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee31(res) {
        var message;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (!this.isAborted()) {
                  _context31.next = 2;
                  break;
                }

                return _context31.abrupt("return");

              case 2:
                _context31.next = 4;
                return fetch.getValue(res, 'message');

              case 4:
                _context31.t0 = _context31.sent;

                if (_context31.t0) {
                  _context31.next = 7;
                  break;
                }

                _context31.t0 = this.options.messages.error;

              case 7:
                message = _context31.t0;
                $.toast(message);
                return _context31.abrupt("return", _Widgets$Remote2.prototype.__error.call(this, res));

              case 10:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      return function __error(_x42) {
        return _error2.apply(this, arguments);
      };
    }();

    _proto18.__success =
    /*#__PURE__*/
    function () {
      var _success3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee32(res) {
        var resj;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                if (!this.isAborted()) {
                  _context32.next = 2;
                  break;
                }

                return _context32.abrupt("return");

              case 2:
                _context32.next = 4;
                return fetch.getValue(res);

              case 4:
                resj = _context32.sent;

                if (!(!resj || resj.error)) {
                  _context32.next = 7;
                  break;
                }

                return _context32.abrupt("return", this.__error(res));

              case 7:
                this._success(resj);

                if (resj.message && !resj.noop) $.toast(resj.message);
                return _context32.abrupt("return", _Widgets$Remote2.prototype.__success.call(this));

              case 10:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      return function __success(_x43) {
        return _success3.apply(this, arguments);
      };
    }();

    _proto18.__complete = function __complete(res) {
      this.enable();
      return _Widgets$Remote2.prototype.__complete.call(this, res);
    };
    /* REQUEST CALLBACKS */


    _proto18._success = function _success(resj) {
      if (!resj.hasOwnProperty('state')) return;
      this.options.state = resj.state;

      this._update();
    };
    /* API */


    _proto18.get = function get() {
      return this.options.state;
    };

    _proto18.set = function set(state) {
      if (state === this.options.state) return;
      var current = this.get(),
          ajax = {
        url: this.options.url || this.options.ajax.url,
        body: {
          current: current,
          state: state
        }
      };
      return this.request(ajax);
    };

    _proto18.reset = function reset() {
      return this.set(this.options.stateDefault);
    };

    return RemoteReaction;
  }(Widgets.Remote);
  /* FACTORY */


  Factory.make(RemoteReaction, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.fetch); // @priority 200
// @require widgets/remote/reaction/reaction.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'liker',
    plugin: true,
    selector: '.liker',
    options: {
      likes: 0,
      dislikes: 0,
      datas: {
        likes: 'likes',
        dislikes: 'dislikes'
      },
      selectors: {
        like: '.like',
        dislike: '.dislike'
      }
    }
  };
  /* LIKER */

  var Liker =
  /*#__PURE__*/
  function (_Widgets$RemoteReacti) {
    _inheritsLoose(Liker, _Widgets$RemoteReacti);

    function Liker() {
      return _Widgets$RemoteReacti.apply(this, arguments) || this;
    }

    var _proto19 = Liker.prototype;

    /* SPECIAL */
    _proto19._variables = function _variables() {
      _Widgets$RemoteReacti.prototype._variables.call(this);

      this.$like = this.$reaction.find(this.options.selectors.like);
      this.$dislike = this.$reaction.find(this.options.selectors.dislike);
    };

    _proto19._init = function _init() {
      this.options.likes = Number(this.$like.data(this.options.datas.likes)) || this.options.likes;
      this.options.dislikes = Number(this.$dislike.data(this.options.datas.dislikes)) || this.options.dislikes;

      _Widgets$RemoteReacti.prototype._init.call(this);
    };

    _proto19._events = function _events() {
      this.___like();

      this.___dislike();
    };
    /* UPDATE */


    _proto19._update = function _update() {
      _Widgets$RemoteReacti.prototype._update.call(this);

      this.$like.attr("data-" + this.options.datas.likes, this.options.likes);
      this.$dislike.attr("data-" + this.options.datas.dislikes, this.options.dislikes);
    };
    /* LIKE */


    _proto19.___like = function ___like() {
      this._on(this.$like, Pointer.tap, this.__like);
    };

    _proto19.__like = function __like() {
      var action = this.options.state ? 'reset' : 'like';
      this[action]();
    };
    /* DISLIKE */


    _proto19.___dislike = function ___dislike() {
      this._on(this.$dislike, Pointer.tap, this.__dislike);
    };

    _proto19.__dislike = function __dislike() {
      var action = this.options.state === false ? 'reset' : 'dislike';
      this[action]();
    };
    /* REQUEST CALLBACKS */


    _proto19._success = function _success(resj) {
      this.options.likes = resj.likes;
      this.options.dislikes = resj.dislikes;

      _Widgets$RemoteReacti.prototype._success.call(this, resj);
    };
    /* API */


    _proto19.get = function get() {
      return _.pick(this.options, ['likes', 'dislikes', 'state']);
    };

    _proto19.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this.options.state;
      }

      if (!!force !== this.options.state) {
        this.set(!!force);
      }
    };

    _proto19.like = function like() {
      return this.set(true);
    };

    _proto19.dislike = function dislike() {
      return this.set(false);
    };

    return Liker;
  }(Widgets.RemoteReaction);
  /* FACTORY */


  Factory.make(Liker, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @priority 100
// @require widgets/remote/reaction/reaction.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'subscriber',
    plugin: true,
    selector: '.subscriber',
    options: {
      counter: 0,
      datas: {
        counter: 'counter'
      },
      selectors: {
        toggle: '.toggle',
        counter: '.counter'
      }
    }
  };
  /* SUBSCRIBER */

  var Subscriber =
  /*#__PURE__*/
  function (_Widgets$RemoteReacti2) {
    _inheritsLoose(Subscriber, _Widgets$RemoteReacti2);

    function Subscriber() {
      return _Widgets$RemoteReacti2.apply(this, arguments) || this;
    }

    var _proto20 = Subscriber.prototype;

    /* SPECIAL */
    _proto20._variables = function _variables() {
      _Widgets$RemoteReacti2.prototype._variables.call(this);

      this.$toggle = this.$reaction.find(this.options.selectors.toggle);
      this.$counter = this.$reaction.find(this.options.selectors.counter);
    };

    _proto20._init = function _init() {
      this.options.counter = Number(this.$counter.data(this.options.datas.counter)) || this.options.counter;

      _Widgets$RemoteReacti2.prototype._init.call(this);
    };

    _proto20._events = function _events() {
      this.___toggle();
    };
    /* UPDATE */


    _proto20._update = function _update() {
      _Widgets$RemoteReacti2.prototype._update.call(this);

      this.$counter.attr("data-" + this.options.datas.counter, this.options.counter);
    };
    /* TOGGLE */


    _proto20.___toggle = function ___toggle() {
      this._on(this.$toggle, Pointer.tap, this.__toggle);
    };

    _proto20.__toggle = function __toggle() {
      this.toggle();
    };
    /* REQUEST CALLBACKS */


    _proto20._success = function _success(resj) {
      this.options.counter = resj.counter;

      _Widgets$RemoteReacti2.prototype._success.call(this, resj);
    };
    /* API */


    _proto20.get = function get() {
      return _.pick(this.options, ['counter', 'state']);
    };

    _proto20.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this.options.state;
      }

      if (!!force !== this.options.state) {
        this.set(!!force);
      }
    };

    _proto20.subscribe = function subscribe() {
      return this.set(true);
    };

    _proto20.unsubscribe = function unsubscribe() {
      return this.set(false);
    };

    return Subscriber;
  }(Widgets.RemoteReaction);
  /* FACTORY */


  Factory.make(Subscriber, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require core/svelto/svelto.js

/* COOKIE */


(function ($, _, Svelto) {
  /* COOKIE */
  var Cookie = {
    /* VARIABLES */
    encoder: encodeURIComponent,
    decoder: decodeURIComponent,

    /* API */
    get: function get(key) {
      if (!key) return null;
      return this.decoder(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + this.encoder(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    },
    set: function set(key, value, end, path, domain, secure) {
      if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) return false;
      var expires = '';

      if (end) {
        switch (end.constructor) {
          case Number:
            expires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : "; max-age=" + end;
            break;

          case String:
            expires = "; expires=" + end;
            break;

          case Date:
            expires = '; expires=' + end.toUTCString();
            break;
        }
      }

      document.cookie = this.encoder(key) + '=' + this.encoder(value) + expires + (domain ? "; domain=" + domain : '') + (path ? "; path=" + path : '') + (secure ? '; secure' : '');
      return true;
    },
    remove: function remove(key, path, domain) {
      if (!this.has(key)) return false;
      document.cookie = this.encoder(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (domain ? "; domain=" + domain : '') + (path ? "; path=" + path : '');
      return true;
    },
    has: function has(key) {
      if (!key) return false;
      return new RegExp('(?:^|;\\s*)' + this.encoder(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(document.cookie);
    },
    keys: function keys() {
      var keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
      return keys.map(this.decoder);
    }
  };
  /* EXPORT */

  Svelto.Cookie = Cookie;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* Z-DEPTHS */
  var ZDepths = {};

  for (var i = 0, l = 24; i <= l; i++) {
    ZDepths[i] = "z-depth-" + i;
  }
  /* EXPORT */


  Svelto.ZDepths = ZDepths;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* BLURRED */
  $.fn.blurred = function (force) {
    return this.toggleClass('blurred', force);
  };
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* OBSCURED */
  $.fn.obscured = function (force) {
    return this.toggleClass('obscured', force);
  };
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js
//TODO: Add support for the alpha channel
//TODO: Maybe add better support for hex color provided as string, basically Color.hex2hsl should also accept an hex color in string format


(function ($, _, Svelto) {
  /* COLOR */
  var Color =
  /*#__PURE__*/
  function () {
    function Color(color, colorspace) {
      this.set(color, colorspace);
    }
    /* SET */


    var _proto21 = Color.prototype;

    _proto21.set = function set(color, colorspace) {
      if (colorspace) {
        switch (colorspace.toLowerCase()) {
          case 'hex':
            return this.setHex(color);

          case 'rgb':
            return this.setRgb(color);

          case 'hsv':
            return this.setHsv(color);

          case 'hsl':
            return this.setHsl(color);
        }
      }

      if (_.isPlainObject(color)) {
        if ('r' in color && 'g' in color && 'b' in color) {
          if (Number(color.r) > 99 || Number(color.g) > 99 || Number(color.b) > 99) {
            return this.setRgb(color);
          } else {
            return this.setHex(color);
          }
        } else if ('h' in color && 's' in color) {
          if ('l' in color) {
            return this.setHsl(color);
          } else if ('v' in color) {
            return this.setHsv(color);
          }
        }
      } else if (_.isString(color)) {
        color = _.trim(color, '#');

        if (/^[0-9a-f]{6}$/i.test(color)) {
          // Full 6-chars hex color notation
          return this.setHex({
            r: color[0] + color[1],
            g: color[2] + color[3],
            b: color[4] + color[5]
          });
        } else if (/^[0-9a-f]{3}$/i.test(color)) {
          // Shorthand 3-chars hex color notation
          return this.setHex({
            r: color[0].repeat(2),
            g: color[1].repeat(2),
            b: color[2].repeat(2)
          });
        }
      }

      throw new Error('Invalid color');
    };

    _proto21.setHex = function setHex(color) {
      this.hex = _.cloneDeep(color);
    };

    _proto21.setRgb = function setRgb(color) {
      this.hex = Color.rgb2hex(color);
    };

    _proto21.setHsv = function setHsv(color) {
      this.hex = Color.hsv2hex(color);
    };

    _proto21.setHsl = function setHsl(color) {
      this.hex = Color.hsl2hex(color);
    };
    /* GET */


    _proto21.getHex = function getHex() {
      return this.hex;
    };

    _proto21.getRgb = function getRgb() {
      return Color.hex2rgb(this.hex);
    };

    _proto21.getHsv = function getHsv() {
      return Color.hex2hsv(this.hex);
    };

    _proto21.getHsl = function getHsl() {
      return Color.hex2hsl(this.hex);
    };
    /* ----- STATICS ----- */

    /* HEX */


    Color.hex2rgb = function hex2rgb(hex) {
      return {
        r: Color.hex2dec(hex.r),
        g: Color.hex2dec(hex.g),
        b: Color.hex2dec(hex.b)
      };
    };

    Color.hex2hsv = function hex2hsv(hex) {
      return Color.rgb2hsv(Color.hex2rgb(hex));
    };

    Color.hex2hsl = function hex2hsl(hex) {
      return Color.hsv2hsl(Color.hex2hsv(hex));
    };
    /* RGB */


    Color.rgb2hex = function rgb2hex(rgb) {
      return {
        r: Color.dec2hex(rgb.r),
        g: Color.dec2hex(rgb.g),
        b: Color.dec2hex(rgb.b)
      };
    };

    Color.rgb2hsv = function rgb2hsv(rgb) {
      var r = rgb.r / 255,
          g = rgb.g / 255,
          b = rgb.b / 255,
          h,
          s,
          v = Math.max(r, g, b),
          diff = v - Math.min(r, g, b),
          diffc = function diffc(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };

      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        var rr = diffc(r),
            gg = diffc(g),
            bb = diffc(b);

        if (r === v) {
          h = bb - gg;
        } else if (g === v) {
          h = 1 / 3 + rr - bb;
        } else if (b === v) {
          h = 2 / 3 + gg - rr;
        }

        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }

      return {
        h: h * 360,
        s: s * 100,
        v: v * 100
      };
    };

    Color.rgb2hsl = function rgb2hsl(rgb) {
      return Color.hsv2hsl(Color.rgb2hsv(rgb));
    };
    /* HSV */


    Color.hsv2hex = function hsv2hex(hsv) {
      return Color.rgb2hex(Color.hsv2rgb(hsv));
    };

    Color.hsv2rgb = function hsv2rgb(hsv) {
      var r,
          g,
          b,
          h = hsv.h,
          s = hsv.s,
          v = hsv.v;
      s /= 100;
      v /= 100;

      if (s === 0) {
        r = g = b = v;
      } else {
        var i, f, p, q, t;
        h /= 60;
        i = Math.floor(h);
        f = h - i;
        p = v * (1 - s);
        q = v * (1 - s * f);
        t = v * (1 - s * (1 - f));

        switch (i) {
          case 0:
            r = v;
            g = t;
            b = p;
            break;

          case 1:
            r = q;
            g = v;
            b = p;
            break;

          case 2:
            r = p;
            g = v;
            b = t;
            break;

          case 3:
            r = p;
            g = q;
            b = v;
            break;

          case 4:
            r = t;
            g = p;
            b = v;
            break;

          default:
            r = v;
            g = p;
            b = q;
        }
      }

      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      };
    };

    Color.hsv2hsl = function hsv2hsl(hsv) {
      var s = hsv.s / 100,
          v = hsv.v / 100,
          tempL = (2 - s) * v,
          tempS = s * v;
      return {
        h: hsv.h,
        s: tempS !== 0 ? tempS / (tempL <= 1 ? tempL : 2 - tempL) * 100 : 0,
        l: tempL / 2 * 100
      };
    };
    /* HSL */


    Color.hsl2hex = function hsl2hex(hsl) {
      return Color.hsv2hex(Color.hsl2hsv(hsl));
    };

    Color.hsl2rgb = function hsl2rgb(hsl) {
      return Color.hsv2rgb(Color.hsl2hsv(hsl));
    };

    Color.hsl2hsv = function hsl2hsv(hsl) {
      var l = hsl.l / 100 * 2,
          s = hsl.s / 100 * (l <= 1 ? l : 2 - l);
      return {
        h: hsl.h,
        s: l + s !== 0 ? 2 * s / (l + s) * 100 : 0,
        v: (l + s) / 2 * 100
      };
    };
    /* DECIMAL / HEX */


    Color.dec2hex = function dec2hex(dec) {
      return parseInt(dec, 10).toString(16).padStart(2, '0');
    };

    Color.hex2dec = function hex2dec(hex) {
      return parseInt(hex, 16);
    };

    return Color;
  }();
  /* EXPORT */


  Svelto.Color = Color;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* DIRECTIONS */
  var Directions = {
    get: function get() {
      return ['top', 'bottom', 'left', 'right'];
    },
    getOpposite: function getOpposite(direction) {
      return {
        'top': 'bottom',
        'bottom': 'top',
        'left': 'right',
        'right': 'left'
      }[direction];
    }
  };
  /* EXPORT */

  Svelto.Directions = Directions;
})(Svelto.$, Svelto._, Svelto); // @require core/readify/readify.js

/* EMBEDDED CSS */
//TODO: Lazily instanciate this


(function ($, _, Svelto, Readify) {
  /* EMBEDDED CSS */
  var EmbeddedCSS =
  /*#__PURE__*/
  function () {
    function EmbeddedCSS() {
      this.$stylesheet = $("<style class=\"svelto-embedded svelto-embedded-" + $.guid++ + "\">");
      this.tree = {};
    }
    /* PRIVATE */


    var _proto22 = EmbeddedCSS.prototype;

    _proto22._cssfy = function _cssfy() {
      var css = '';

      for (var selector in this.tree) {
        if (!this.tree.hasOwnProperty(selector)) continue;
        css += selector + '{';

        if (_.isPlainObject(this.tree[selector])) {
          for (var property in this.tree[selector]) {
            if (!this.tree[selector].hasOwnProperty(property)) continue;
            css += property + ':' + this.tree[selector][property] + ';';
          }
        } else if (_.isString(this.tree[selector])) {
          css += this.tree[selector] + ';';
        }

        css += '}';
      }

      return css;
    };

    _proto22._refresh = function _refresh() {
      this.$stylesheet.text(this._cssfy());
    };
    /* API */


    _proto22.get = function get(selector) {
      return this.tree[selector];
    };

    _proto22.set = function set(selector, property, value) {
      if (property === false) {
        return this.remove(selector);
      }

      if (_.isPlainObject(property)) {
        this.tree[selector] = _.extend(_.isPlainObject(this.tree[selector]) ? this.tree[selector] : {}, property);
      } else if (_.isString(property)) {
        if (!value) {
          this.tree[selector] = property;
        } else {
          var _set;

          return this.set(selector, (_set = {}, _set[property] = value, _set));
        }
      }

      this._refresh();
    };

    _proto22.remove = function remove(selector) {
      if (selector in this.tree) {
        delete this.tree[selector];

        this._refresh();
      }
    };

    _proto22.clear = function clear() {
      if (Object.keys(this.tree).length) {
        this.tree = {};

        this._refresh();
      }
    };

    _proto22.attach = function attach() {
      this.$stylesheet.appendTo($.$head);
    };

    _proto22.detach = function detach() {
      this.$stylesheet.remove();
    };

    return EmbeddedCSS;
  }();
  /* EXPORT */


  Svelto.EmbeddedCSS = new EmbeddedCSS();
  /* READY */

  Readify.add(Svelto.EmbeddedCSS.attach.bind(Svelto.EmbeddedCSS));
})(Svelto.$, Svelto._, Svelto, Svelto.Readify); // @require ./fetch.js


(function ($, _, Svelto, fetch) {
  /* HELPERS */
  fetch.getValue =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee33(res, key) {
      var json;
      return regeneratorRuntime.wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              if (res) {
                _context33.next = 2;
                break;
              }

              return _context33.abrupt("return");

            case 2:
              _context33.prev = 2;
              _context33.next = 5;
              return res.json();

            case 5:
              json = _context33.sent;
              return _context33.abrupt("return", key ? json[key] : json);

            case 9:
              _context33.prev = 9;
              _context33.t0 = _context33["catch"](2);

            case 11:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33, this, [[2, 9]]);
    }));

    return function (_x44, _x45) {
      return _ref4.apply(this, arguments);
    };
  }();
})(Svelto.$, Svelto._, Svelto, Svelto.fetch); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* VARIABLES */
  var html = document.documentElement,
      keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element,
      apis = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']],
      api = apis.find(function (methods) {
    return methods[1] in document;
  }),
      raw = {};
  if (api) api.forEach(function (method, index) {
    return raw[apis[0][index]] = method;
  });
  /* FULLSCREEN */

  var Fullscreen = {
    request: function request(ele) {
      if (ele === void 0) {
        ele = html;
      }

      if (!raw.requestFullscreen) return;
      ele[raw.requestFullscreen](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
    },
    exit: function exit() {
      if (!raw.exitFullscreen) return;
      document[raw.exitFullscreen]();
    },
    toggle: function toggle(ele) {
      Fullscreen.isFullscreen ? Fullscreen.exit() : Fullscreen.request(ele);
    },

    get isFullscreen() {
      return !!Fullscreen.element;
    },

    get element() {
      return document[raw.fullscreenElement];
    },

    get enabled() {
      return !!document[raw.fullscreenEnabled];
    },

    raw: raw
  };
  /* EXPORT */

  Svelto.Fullscreen = Fullscreen;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* FUZZY */
  var Fuzzy = {
    match: function match(str, search, isCaseSensitive) {
      if (isCaseSensitive === void 0) {
        isCaseSensitive = true;
      }

      if (!isCaseSensitive) {
        str = str.toLowerCase();
        search = search.toLowerCase();
      }

      var currentIndex = -1,
          str_i,
          str_l = str.length;

      for (var search_i = 0, search_l = search.length; search_i < search_l; search_i++) {
        for (str_i = currentIndex + 1; str_i < str_l; str_i++) {
          if (str[str_i] === search[search_i]) {
            currentIndex = str_i;
            str_i = str_l + 1;
          }
        }

        if (str_i === str_l) {
          return false;
        }
      }

      return true;
    }
  };
  /* EXPORT */

  Svelto.Fuzzy = Fuzzy;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* GET SCRIPT */
  function getScript(url) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script'),
          anchor = document.getElementsByTagName('script')[0];
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      script.src = url;
      anchor.parentNode.insertBefore(script, anchor);
    });
  }
  /* EXPORT */


  Svelto.getScript = getScript;
})(Svelto.$, Svelto._, Svelto); // @require lib/get_script/get_script.js


(function ($, _, Svelto, getScript) {
  /* MARKDOWN */
  var Markdown = {
    markedUrl: "/static/vendor/marked.js?v=" + Svelto.VERSION,
    parse: function () {
      var _parse2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee34(str) {
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (!window.marked) {
                  _context34.next = 2;
                  break;
                }

                return _context34.abrupt("return", marked(str));

              case 2:
                _context34.prev = 2;
                _context34.next = 5;
                return getScript(Markdown.markedUrl);

              case 5:
                return _context34.abrupt("return", marked(str));

              case 8:
                _context34.prev = 8;
                _context34.t0 = _context34["catch"](2);
                return _context34.abrupt("return", str);

              case 11:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this, [[2, 8]]);
      }));

      return function parse(_x46) {
        return _parse2.apply(this, arguments);
      };
    }()
  };
  /* EXPORT */

  Svelto.Markdown = Markdown;
})(Svelto.$, Svelto._, Svelto, Svelto.getScript); // @require core/cookie/cookie.js
// @require core/svelto/svelto.js


(function ($, _, Svelto, Cookie, NTA) {
  /* UTILITIES */
  var getExpiry = function getExpiry(expiry) {
    if (expiry) {
      switch (expiry.constructor) {
        case Number:
          return expiry === Infinity ? false : _.nowSecs() + expiry;

        case String:
          return getExpiry(new Date(expiry));

        case Date:
          var timestamp = expiry.getTime();
          return _.isNaN(timestamp) ? false : Math.floor(timestamp / 1000);
      }
    }

    return false;
  };
  /* CONFIG */


  var config = {
    encoder: JSON.stringify,
    decoder: JSON.parse
  };
  /* GROUP */

  var Group =
  /*#__PURE__*/
  function () {
    function Group(options) {
      this.name = options.name;
      this.cookie = options.cookie;
      this.actions = NTA.Group.config.decoder(Cookie.get(this.name) || '{}');
    }

    var _proto23 = Group.prototype;

    _proto23.get = function get(action) {
      var actionj = this.actions[action];

      if (actionj) {
        if (actionj.x && actionj.x < _.nowSecs()) {
          this.remove(action);
        } else {
          return actionj.t;
        }
      }

      return 0;
    };

    _proto23.set = function set(action, times, expiry) {
      times = Number(times);
      if (_.isNaN(times)) return;

      if (action in this.actions) {
        if (times === 0 && !this.actions[action].x) {
          return this.remove(action);
        } else {
          this.actions[action].t = times;
        }
      } else {
        this.actions[action] = {
          t: times
        };
        expiry = getExpiry(expiry);

        if (expiry) {
          this.actions[action].x = expiry;
        }
      }

      this.update();
    };

    _proto23.update = function update() {
      Cookie.set(this.name, NTA.Group.config.encoder(this.actions), this.cookie.end, this.cookie.path, this.cookie.domain, this.cookie.secure);
    };

    _proto23.remove = function remove(action) {
      if (action) {
        if (Object.keys(this.actions).length > 1) {
          delete this.actions[action];
          this.update();
        } else {
          this.remove();
        }
      } else {
        this.actions = {};
        Cookie.remove(this.name, this.cookie.path, this.cookie.domain);
      }
    };

    return Group;
  }();
  /* BINDING */


  NTA.Group = Group;
  NTA.Group.config = config;
})(Svelto.$, Svelto._, Svelto, Svelto.Cookie, Svelto.NTA = {}); // @require ./NTA.Group.js
// @require core/svelto/svelto.js


(function ($, _, Svelto, NTA) {
  /* ACTION */
  var Action =
  /*#__PURE__*/
  function () {
    function Action(options) {
      this.group = new NTA.Group({
        name: options.group,
        cookie: options.cookie
      });
      this.name = options.name;
      this.expiry = options.expiry;
    }

    var _proto24 = Action.prototype;

    _proto24.get = function get() {
      return this.group.get(this.name);
    };

    _proto24.set = function set(times, expiry) {
      this.group.set(this.name, times, expiry || this.expiry);
    };

    _proto24.remove = function remove() {
      this.group.remove(this.name);
    };

    return Action;
  }();
  /* BINDING */


  NTA.Action = Action;
})(Svelto.$, Svelto._, Svelto, Svelto.NTA); // @require ./NTA.Action.js
// @require ./NTA.Group.js
// @require core/svelto/svelto.js


(function ($, _, Svelto, NTA) {
  /* DEFAULTS */
  var defaults = {
    group: 'nta',
    // The cookie name that holds the actions, a namespace for related actions basically
    action: false,
    // The action name
    times: Infinity,
    // The times an action can be executed
    expiry: false,
    // When a single action will expire and will then get removed from its group
    fn: false,
    // The function to execute
    cookie: {
      // Values that will get passed to `Cookie` when appropriate
      end: Infinity,
      path: '/',
      domain: undefined,
      secure: undefined
    }
  };
  /* N TIMES ACTION */

  $.nTimesAction = function (options) {
    /* OPTIONS */
    options = _.merge({}, $.nTimesAction.defaults, options);
    /* N TIMES ACTION */

    if (options.action) {
      var action = new NTA.Action({
        group: options.group,
        name: options.action,
        expiry: options.expiry,
        cookie: options.cookie
      }),
          actionTimes = action.get();
      /* EXECUTE */

      if (options.fn && actionTimes < options.times) {
        var returnValue = options.fn(options.group, options.action, actionTimes + 1);
        /* INCREMENT */

        if (returnValue !== false) {
          action.set(actionTimes + 1);
        }
      }

      return action;
    } else if (options.group) {
      return new NTA.Group({
        name: options.group,
        cookie: options.cookie
      });
    }
  };
  /* BINDING */


  $.nTimesAction.defaults = defaults;
})(Svelto.$, Svelto._, Svelto, Svelto.NTA); // @require core/svelto/svelto.js
// @require widgets/toast/toast.js
// If the page isn't visible and we can use the native notifications than we'll send a native notification, otherwise we will fallback to a toast


(function ($, _, Svelto, Toast) {
  /* DEFAULTS */
  var defaults = {
    title: '',
    body: '',
    img: '',
    ttl: Toast.config.options.ttl
  };
  /* NOTIFICATION */

  $.notification = function (options) {
    /* OPTIONS */
    options = _.isPlainObject(options) ? _.extend({}, $.notification.defaults, options) : String(options);
    /* NOTIFICATIONS */

    if (window.Notification && Notification.permission !== 'denied' && (document.hasFocus ? !document.hasFocus() : document.hidden)) {
      Notification.requestPermission(function (status) {
        if (status === 'granted') {
          var notification = _.isString(options) ? new Notification(options) : new Notification(options.title, {
            body: options.body,
            icon: options.img
          });

          if (_.isNumber(options.ttl) && !_.isNaN(options.ttl) && options.ttl !== Infinity) {
            setTimeout(notification.close.bind(notification), options.ttl);
          }
        } else {
          $.toast(options);
        }
      });
    } else {
      $.toast(options);
    }
  };
  /* BINDING */


  $.notification.defaults = defaults;
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.Toast); // @require core/svelto/svelto.js
// @require lib/n_times_action/n_times_action.js


(function ($, _, Svelto) {
  /* ONE TIME ACTION */
  $.oneTimeAction = function (options) {
    return $.nTimesAction(_.extend({
      group: 'ota'
    }, options, {
      times: 1
    }));
  };
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* REGEXES */
  var Regexes = {
    /* TYPE */
    alpha: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    hexadecimal: /^[a-fA-F0-9]+$/,
    integer: /^(?:-?(?:[0-9]*))$/,
    float: /^-?(?:(?:\d+)(?:\.\d*)?|(?:\.\d+)+)$/,

    /* THINGS */
    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
    ssn: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
    ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
    url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i
  };
  /* EXPORT */

  Svelto.Regexes = Regexes;
})(Svelto.$, Svelto._, Svelto); // @require core/animations/animations.js
// @require lib/embedded_css/embedded_css.js
// CSS-based alternative methods for jQuery's
// It assumes the height/width will be `auto`, otherwise pure-CSS can be used for this


(function ($, _, Svelto, Animations, EmbeddedCSS) {
  /* DEFAULTS */
  var defaults = {
    duration: Animations.fast,
    axis: 'y',
    classes: {
      init: 'slide',
      noAnimations: 'no-animations',
      x: {
        beforeoff: 'slide-before-left',
        off: 'slide-left',
        beforeon: 'slide-before-right',
        on: 'slide-right'
      },
      y: {
        beforeoff: 'slide-before-up',
        off: 'slide-up',
        beforeon: 'slide-before-down',
        on: 'slide-down'
      }
    },
    callbacks: {
      start: _.noop,
      end: _.noop
    }
  };
  /* UTILITIES */

  function getDurationClass(duration) {
    var cls = "slide-" + duration,
        selector = "." + cls;

    if (!EmbeddedCSS.get(selector)) {
      var seconds = duration / 1000;
      EmbeddedCSS.set(selector, 'transition', "height " + seconds + "s, width " + seconds + "s, padding " + seconds + "s, border-width " + seconds + "s !important");
    }

    return cls;
  }
  /* DIRECTIONS */


  $.fn.slideDown = function (options) {
    return this.slideToggle(options, true, 'y');
  };

  $.fn.slideUp = function (options) {
    return this.slideToggle(options, false, 'y');
  };

  $.fn.slideRight = function (options) {
    return this.slideToggle(options, true, 'x');
  };

  $.fn.slideLeft = function (options) {
    return this.slideToggle(options, false, 'x');
  };
  /* TOGGLE */


  $.fn.slideToggle = function (options, force, axis) {
    var _this13 = this;

    var ele = this[0];
    if (!ele || ele._sliding) return;
    options = _.merge({}, $.fn.slideToggle.defaults, options);

    _.extend(options.classes, options.classes[axis || options.axis]);

    var dimension = (axis || options.axis) === 'x' ? 'width' : 'height';

    if (_.isUndefined(force)) {
      force = !this[dimension]();
    } else {
      if (force !== !this[dimension]()) return;
    }

    var status = force ? 'on' : 'off',
        oppositeStatus = force ? 'off' : 'on';
    if (this.hasClass(options.classes[status])) return;
    ele._sliding = true;
    var durationCls = options.duration !== $.fn.slideToggle.defaults.duration ? getDurationClass(options.duration) : '';
    options.callbacks.start();
    if (force) this.addClass(options.classes.noAnimations).removeClass(options.classes.off).addClass(options.classes.on);
    this[dimension](this[dimension]()); // Fixing the dimension, can't animate from `auto`

    if (force) this.addClass(options.classes.off).removeClass(options.classes.on);
    requestAnimationFrame(function () {
      _this13.addClass(options.classes.init).addClass(durationCls);

      if (force) _this13.removeClass(options.classes.noAnimations);
      requestAnimationFrame(function () {
        _this13.addClass(options.classes["before" + status]).removeClass(options.classes[oppositeStatus]);

        _this13.one('transitionend', function () {
          _this13.addClass(options.classes[status]).removeClass(options.classes["before" + status]).removeClass(options.classes.init).removeClass(durationCls);

          _this13.css(dimension, '');

          delete ele._sliding;
          options.callbacks.end();
        });
      });
    });
  };

  $.fn.slideToggle.defaults = defaults;
})(Svelto.$, Svelto._, Svelto, Svelto.Animations, Svelto.EmbeddedCSS); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* UTILITIES */
  var getOverlappingArea = function getOverlappingArea(rect1, rect2) {
    var overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left)),
        overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
    return overlapX * overlapY;
  };
  /* DEFAULTS */


  var defaults = {
    point: false,
    // Used for the punctual search
    $comparer: false,
    // Used for the overlapping search
    $not: false,
    onlyBest: false
  };
  /* TOUCHING */

  $.fn.touching = function (options) {
    /* OPTIONS */
    options = _.extend({}, $.fn.touching.defaults, options);
    /* SEARCHABLE */

    var $searchable = options.$not ? this.not(options.$not) : this;
    /* COMPARER */

    if (options.$comparer) {
      var rect1 = options.$comparer.getRect(),
          nodes = [],
          areas = [];

      for (var i = 0, l = $searchable.length; i < l; i++) {
        var searchable = $searchable[i],
            rect2 = $.getRect(searchable),
            area = getOverlappingArea(rect1, rect2);

        if (area > 0) {
          nodes.push(searchable);
          areas.push(area);
        }
      }

      return nodes.length ? options.onlyBest ? $(nodes[areas.indexOf(Math.max.apply(Math, areas))]) : $(nodes) : false;
    }
    /* PUNCTUAL */


    if (options.point) {
      for (var _i2 = 0, _l = $searchable.length; _i2 < _l; _i2++) {
        var _searchable = $searchable[_i2],
            rect = $.getRect(_searchable);

        if (options.point.y >= rect.top && options.point.y <= rect.bottom && options.point.x >= rect.left && options.point.x <= rect.right) {
          return $(_searchable);
        }
      }
    }
    /* DEFAULT */


    return false;
  };
  /* BINDING */


  $.fn.touching.defaults = defaults;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js

/* TRANSFORM UTILITIES */


(function ($, _, Modernizr, Svelto) {
  /* MATRIX */
  var property = _.CSS2DOM(Modernizr.prefixedCSS('transform')),
      precision = 3; // Or sometimes we may get weird values like `2.4492935982947064e-16` on Safari


  $.fn.matrix = function (values) {
    //TODO: Add not jquery-wrapped version fo this maybe
    if (values) {
      values = values.map(function (val) {
        return parseFloat(parseFloat(val).toFixed(precision));
      }).join(',');
      this[0].style[property] = "matrix(" + values + ")";
      return this;
    } else {
      var transformStr = getComputedStyle(this[0], null)[property];
      return transformStr && transformStr !== 'none' ? transformStr.match(/[0-9., e-]+/)[0].split(', ').map(function (value) {
        return parseFloat(parseFloat(value).toFixed(precision));
      }) : [1, 0, 0, 1, 0, 0];
    }
  };
  /* TRANSFORMATIONS */


  var transformations = ['scaleX', 'skewY', 'skewX', 'scaleY', 'translateX', 'translateY']; // Their index is also the corresponsing index when applying `transform: matrix()`

  for (var i = 0, l = transformations.length; i < l; i++) {
    $.fn[transformations[i]] = function (index) {
      //TODO: Add not jquery-wrapped version fo this maybe
      return function (value) {
        //TODO: Maybe add an optional `_matrix` argument, so that we can batch reads and writes
        var matrix = this.matrix();

        if (!_.isUndefined(value)) {
          matrix[index] = value;
          return this.matrix(matrix);
        } else {
          return matrix[index];
        }
      };
    }(i);
  }
  /* 2D TRANSFORMATIONS */


  var transformations2D = ['scale', 'skew', 'translate'],
      indexes2D = [[0, 3], [2, 1], [4, 5]];

  for (var _i3 = 0, _l2 = transformations2D.length; _i3 < _l2; _i3++) {
    $.fn[transformations2D[_i3]] = function (index) {
      //TODO: Add not jquery-wrapped version fo this maybe
      return function (X, Y) {
        if (Y === void 0) {
          Y = X;
        }

        //TODO: Maybe add an optional `_matrix` argument, so that we can batch reads and writes
        var matrix = this.matrix(),
            indexes = indexes2D[index];

        if (!_.isUndefined(X) && !_.isUndefined(Y)) {
          matrix[indexes[0]] = X;
          matrix[indexes[1]] = Y;
          return this.matrix(matrix);
        } else {
          return {
            x: matrix[indexes[0]],
            y: matrix[indexes[1]]
          };
        }
      };
    }(_i3);
  }
})(Svelto.$, Svelto._, Svelto.Modernizr, Svelto); // @require core/svelto/svelto.js
// @require lib/directions/directions.js
// @require lib/embedded_css/embedded_css.js
// @require lib/transform/transform.js
//FIXME: If the positionable element is less than half of the anchor, and it must be pointed, than the pointer may be not well positionated (expecially if we are not aligning to the center)


(function ($, _, Svelto, Directions, EmbeddedCSS) {
  /* DEFAULTS */
  var defaults = {
    axis: false,
    // Set a preferred axis
    strict: false,
    // If enabled only use the setted axis/direction, even if it won't be the optimial choice
    $anchor: false,
    // Positionate next to an $anchor element
    point: false,
    // Positionate at coordinates, ex: { x: number, y: number }
    pointer: false,
    // The element pointing to the anchor, can be: false -> no pointer, 'auto' -> pointer using the `pointing` decorator, $element -> element used as pointer
    spacing: 0,
    // Extra space to leave around the positionable element
    constrainer: {
      // Constrain the $positionable inside the $element
      $element: false,
      // If we want to keep the $positionable inside this $element
      center: false,
      // Set the constrain type, it will constrain the whole shape, or the center
      tolerance: {
        // The amount of pixel flexibility that a constrainer has
        x: 0,
        y: 0
      }
    },
    directions: {
      // How the directions should be prioritized when selecting the `x` axis, the `y` axis, or all of them
      x: ['right', 'left'],
      y: ['bottom', 'top'],
      all: ['bottom', 'right', 'left', 'top']
    },
    alignment: {
      // Set the alignment of the positionable relative to the anchor
      x: 'center',
      // `left`, center`, `right`
      y: 'center' // `top`, center`, `bottom`

    },
    callbacks: {
      change: _.noop
    }
  };
  /* POSITIONATE */

  $.fn.positionate = function (options) {
    /* NO ELEMENTS */
    if (!this.length) return this;
    /* OPTIONS */

    options = _.merge({}, $.fn.positionate.defaults, options);
    /* VARIABLES */

    var positionable = this[0],
        $positionable = $(positionable),
        positionableRect = $positionable.getRect(),
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        directions = _.uniq([].concat(options.direction ? [options.direction] : [], options.axis ? options.directions[options.axis] : [], !options.strict || !options.direction && !options.axis ? options.directions.all : [])),
        anchorRect = options.$anchor ? options.$anchor.getRect() : {
      top: options.point.y - window.scrollY,
      bottom: options.point.y - window.scrollY,
      left: options.point.x - window.scrollX,
      right: options.point.x - window.scrollX,
      width: 0,
      height: 0
    };
    /* ID */


    positionable._positionateGuid = positionable._positionateGuid || $.guid++;
    positionable._positionateGuc = "positionate-" + positionable._positionateGuid;
    $positionable.addClass(positionable._positionateGuc);
    /* SPACES */

    var spaces = directions.map(function (direction) {
      switch (direction) {
        case 'top':
          return anchorRect.top;

        case 'bottom':
          return windowHeight - anchorRect.bottom;

        case 'left':
          return anchorRect.left;

        case 'right':
          return windowWidth - anchorRect.right;
      }
    });
    /* SPACES PRIORITIZATION */

    spaces.forEach(function (space, index) {
      if (space < 0) {
        var opposite = Directions.getOpposite(directions[index]),
            oppositeIndex = directions.indexOf(opposite);

        if (oppositeIndex !== -1) {
          _.move(directions, oppositeIndex, 0);

          _.move(spaces, oppositeIndex, 0);
        }
      }
    });
    /* AREAS */

    var areas = directions.map(function (direction, index) {
      switch (direction) {
        case 'top':
        case 'bottom':
          return Math.min(positionableRect.height, spaces[index]) * Math.min(windowWidth, positionableRect.width);

        case 'left':
        case 'right':
          return Math.min(positionableRect.width, spaces[index]) * Math.min(windowHeight, positionableRect.height);
      }
    });
    /* BEST DIRECTION */

    var bestIndex = areas.indexOf(Math.max.apply(Math, areas)),
        bestDirection = directions[bestIndex],
        coordinates = {};
    /* TOP / LEFT */

    switch (bestDirection) {
      case 'top':
        coordinates.top = anchorRect.top - positionableRect.height - options.spacing;
        break;

      case 'bottom':
        coordinates.top = anchorRect.bottom + options.spacing;
        break;

      case 'left':
        coordinates.left = anchorRect.left - positionableRect.width - options.spacing;
        break;

      case 'right':
        coordinates.left = anchorRect.right + options.spacing;
        break;
    }

    switch (bestDirection) {
      case 'top':
      case 'bottom':
        switch (options.alignment.x) {
          case 'left':
            coordinates.left = anchorRect.left;
            break;

          case 'center':
            coordinates.left = anchorRect.left + anchorRect.width / 2 - positionableRect.width / 2;
            break;

          case 'right':
            coordinates.left = anchorRect.right - positionableRect.width;
            break;
        }

        break;

      case 'left':
      case 'right':
        switch (options.alignment.y) {
          case 'top':
            coordinates.top = anchorRect.top;
            break;

          case 'center':
            coordinates.top = anchorRect.top + anchorRect.height / 2 - positionableRect.height / 2;
            break;

          case 'bottom':
            coordinates.top = anchorRect.bottom - positionableRect.height;
            break;
        }

        break;
    }
    /* CONSTRAIN */


    if (options.$anchor) {
      var oppositeSpace = spaces[bestIndex],
          isExtendedX = anchorRect.top + anchorRect.height >= 0 && anchorRect.top <= windowHeight,
          isExtendedY = anchorRect.left + anchorRect.width >= 0 && anchorRect.left <= windowWidth;
      if (isExtendedX) coordinates.top = _.clamp(coordinates.top, options.spacing, windowHeight - positionableRect.height - options.spacing);
      if (isExtendedY) coordinates.left = _.clamp(coordinates.left, options.spacing, windowWidth - positionableRect.width - options.spacing);
    } else if (options.constrainer.$element) {
      var constrainerRect = options.constrainer.$element.getRect(),
          halfWidth = options.constrainer.center ? positionableRect.width / 2 : 0,
          halfHeight = options.constrainer.center ? positionableRect.height / 2 : 0;
      /* COORDINATES */

      coordinates.top = _.clamp(coordinates.top, constrainerRect.top - halfHeight - options.constrainer.tolerance.y + options.spacing, constrainerRect.bottom - positionableRect.height + halfHeight + options.constrainer.tolerance.y - options.spacing);
      coordinates.left = _.clamp(coordinates.left, constrainerRect.left - halfWidth - options.constrainer.tolerance.x + options.spacing, constrainerRect.right - positionableRect.width + halfWidth + options.constrainer.tolerance.x - options.spacing);
    }
    /* DATAS */


    var data = {
      positionable: positionable,
      coordinates: coordinates,
      direction: bestDirection
    };
    /* TRANSLATE */

    $positionable.translate(coordinates.left, coordinates.top);
    /* CSS CLASS */

    var prevDirection = positionable._positionatePrevDirection;
    positionable._positionatePrevDirection = bestDirection;

    if (prevDirection !== bestDirection) {
      $positionable.removeClass("position-" + prevDirection).addClass("position-" + bestDirection);
    }
    /* POINTER */


    var prevPointer = positionable._positionatePrevPointer;
    positionable._positionatePrevPointer = options.pointer;

    if (prevPointer === 'auto' && (options.pointer !== 'auto' || bestDirection !== prevDirection)) {
      var oppositeDirection = Directions.getOpposite(prevDirection);
      $positionable.removeClass("pointing-" + oppositeDirection);
    }

    if (options.pointer) {
      if (options.pointer === 'auto') {
        var _oppositeDirection = Directions.getOpposite(bestDirection);

        $positionable.addClass("pointing-" + _oppositeDirection);
      }
      /* MOVING */


      switch (bestDirection) {
        case 'top':
        case 'bottom':
          var deltaX = _.clamp(anchorRect.left - coordinates.left + anchorRect.width / 2, 0, positionableRect.width);

          if (options.pointer instanceof $) {
            options.pointer.translate(deltaX, 0);
          } else if (options.pointer === 'auto') {
            EmbeddedCSS.set("." + positionable._positionateGuc + ":after", "left:" + deltaX + "px !important;"); //TODO: Maybe use `transform` instead, since it lead to improved performances
          }

          break;

        case 'left':
        case 'right':
          var deltaY = _.clamp(positionableRect.height, anchorRect.top - coordinates.top + anchorRect.height / 2, 0, positionableRect.height);

          if (options.pointer instanceof $) {
            options.pointer.translate(0, deltaY);
          } else if (options.pointer === 'auto') {
            EmbeddedCSS.set("." + positionable._positionateGuc + ":after", "top:" + deltaY + "px !important;"); //TODO: Maybe use `transform` instead, since it lead to improved performances
          }

          break;
      }
    }
    /* CALLBACK */


    options.callbacks.change(data);
    /* RETURN */

    return this;
  };
  /* BINDING */


  $.fn.positionate.defaults = defaults;
})(Svelto.$, Svelto._, Svelto, Svelto.Directions, Svelto.EmbeddedCSS); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* URL */
  var URL = {
    targetRe: /#(.*)$/,
    isEqual: function isEqual(url1, url2, stripTarget) {
      if (stripTarget === void 0) {
        stripTarget = false;
      }

      if (!_.isString(url1) || !_.isString(url2)) return url1 === url2;
      url1 = stripTarget ? url1.replace(URL.targetRe, '') : url1;
      url2 = stripTarget ? url2.replace(URL.targetRe, '') : url2;
      return _.trimEnd(url1, '/') === _.trimEnd(url2, '/');
    },
    makeAbsolute: function makeAbsolute(url) {
      if (url.startsWith('/') || url.includes('://')) return url;
      return "/" + url;
    }
  };
  /* EXPORT */

  Svelto.URL = URL;
})(Svelto.$, Svelto._, Svelto); // @require core/svelto/svelto.js
// @require lib/regexes/regexes.js
//TODO: Most of them will return false for empty strings, is this the wanted behaviour?
// `value` is supposed to be a string
// Strings will be trimmed inside some validators


(function ($, _, Svelto, Regexes) {
  /* VALIDATOR */
  var Validator = {
    /* TYPE */
    alpha: function alpha(value) {
      return !!value.match(Regexes.alpha);
    },
    alphanumeric: function alphanumeric(value) {
      return !!value.match(Regexes.alphanumeric);
    },
    hexadecimal: function hexadecimal(value) {
      return !!value.match(Regexes.hexadecimal);
    },
    number: function number(value) {
      return !!value.match(Regexes.integer) || !!value.match(Regexes.float);
    },
    integer: function integer(value) {
      return !!value.match(Regexes.integer);
    },
    float: function float(value) {
      return !!value.match(Regexes.float);
    },

    /* NUMBER */
    min: function min(value, _min) {
      return Number(value) >= Number(_min);
    },
    max: function max(value, _max) {
      return Number(value) <= Number(_max);
    },
    range: function range(value, min, max) {
      value = Number(value);
      return value >= Number(min) && value <= Number(max);
    },

    /* LENGTH */
    minLength: function minLength(value, _minLength) {
      return value.trim().length >= Number(_minLength);
    },
    maxLength: function maxLength(value, _maxLength) {
      return value.trim().length <= Number(_maxLength);
    },
    rangeLength: function rangeLength(value, minLength, maxLength) {
      value = value.trim();
      return value.length >= Number(minLength) && value.length <= Number(maxLength);
    },
    exactLength: function exactLength(value, length) {
      return value.trim().length === Number(length);
    },

    /* THINGS */
    email: function email(value) {
      return !!value.match(Regexes.email);
    },
    creditCard: function creditCard(value) {
      return !!value.match(Regexes.creditCard);
    },
    ssn: function ssn(value) {
      return !!value.match(Regexes.ssn);
    },
    ipv4: function ipv4(value) {
      return !!value.match(Regexes.ipv4);
    },
    url: function url(value) {
      return !!value.match(Regexes.url);
    },

    /* OTHERS */
    empty: function empty(value) {
      return !value.trim().length;
    },
    included: function included(value, values) {
      value = value.toLowerCase();
      values = values.map(function (value) {
        return value.toLowerCase();
      });
      return values.includes(value);
    }
  };
  /* EXPORT */

  Svelto.Validator = Validator;
})(Svelto.$, Svelto._, Svelto, Svelto.Regexes); // @require core/animations/animations.js
// @require core/widget/widget.js
// @require lib/timer/timer.js
//TODO: Add slides drag support


(function ($, _, Svelto, Widgets, Factory, Pointer, Timer, Animations) {
  /* CONFIG */
  var config = {
    name: 'carousel',
    plugin: true,
    selector: '.carousel',
    options: {
      startIndex: 0,
      wrap: true,
      // Whether we should connect the start with the end, so that when calling `previous` from the start we reach the end and vice versa
      cycle: false,
      // If the carousel should auto-cycle or not
      interval: 5000,
      // Interval between auto-cycling slides
      intervalMinimumRemaining: 1000,
      // Auto-cycling will be stopped on hover and started again on leave, with a remaining time of `Math.min ( what the remaining time was, this option )`;
      classes: {
        previous: 'previous',
        current: 'current'
      },
      selectors: {
        previous: '.carousel-previous',
        next: '.carousel-next',
        indicator: '.carousel-indicator',
        itemsWrp: '.carousel-items',
        item: '.carousel-items > *'
      },
      animations: {
        cycle: Animations.normal
      },
      keystrokes: {
        'left, up': 'previous',
        'right, down, space': 'next'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* CAROUSEL */

  var Carousel =
  /*#__PURE__*/
  function (_Widgets$Widget8) {
    _inheritsLoose(Carousel, _Widgets$Widget8);

    function Carousel() {
      return _Widgets$Widget8.apply(this, arguments) || this;
    }

    var _proto25 = Carousel.prototype;

    /* SPECIAL */
    _proto25._variables = function _variables() {
      this.$carousel = this.$element;
      this.$previous = this.$carousel.find(this.options.selectors.previous);
      this.$next = this.$carousel.find(this.options.selectors.next);
      this.$indicators = this.$carousel.find(this.options.selectors.indicator);
      this.$itemsWrp = this.$carousel.find(this.options.selectors.itemsWrp);
      this.$items = this.$carousel.find(this.options.selectors.item);
      this.maxIndex = this.$items.length - 1;
      this._previous = false;
      this._current = false;
      this.timer = new Timer(this.next.bind(this), this.options.interval, false);
    };

    _proto25._init = function _init() {
      var $current = this.$items.filter('.' + this.options.classes.current).first();

      if ($current.length) {
        this._current = this._getItemObj(this.$items.index($current));
      } else {
        this.set(this.options.startIndex);
      }
    };

    _proto25._events = function _events() {
      this.___previousTap();

      this.___nextTap();

      this.___indicatorTap();

      this.___keydown();

      this.___cycle();
    };

    _proto25._destroy = function _destroy() {
      this.timer.stop();
    };
    /* PRIVATE */


    _proto25._sanitizeIndex = function _sanitizeIndex(index) {
      index = Number(index);
      return _.isNaN(index) ? NaN : _.clamp(index, 0, this.maxIndex);
    };
    /* PREVIOUS TAP */


    _proto25.___previousTap = function ___previousTap() {
      this._on(this.$previous, Pointer.tap, this.previous);
    };
    /* NEXT TAP */


    _proto25.___nextTap = function ___nextTap() {
      this._on(this.$next, Pointer.tap, this.next);
    };
    /* INDICATOR TAP */


    _proto25.___indicatorTap = function ___indicatorTap() {
      this._on(this.$indicators, Pointer.tap, this.__indicatorTap);
    };

    _proto25.__indicatorTap = function __indicatorTap(event) {
      this.set(this.$indicators.index(event.currentTarget));
    };
    /* KEYDOWN */


    _proto25.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* CYCLE */


    _proto25.___cycle = function ___cycle() {
      this._on(true, this.$itemsWrp, Pointer.enter, this.__cycleEnter);

      this._on(true, this.$itemsWrp, Pointer.leave, this.__cycleLeave);
    };

    _proto25.__cycleEnter = function __cycleEnter() {
      if (this.options.cycle) {
        this.timer.pause();
      }
    };

    _proto25.__cycleLeave = function __cycleLeave() {
      if (this.options.cycle) {
        this.timer.remaining(Math.max(this.options.intervalMinimumRemaining, this.timer.remaining()));
        this.timer.play();
      }
    };
    /* ITEM OBJ */


    _proto25._getItemObj = function _getItemObj(index) {
      return {
        index: index,
        $item: this.$items.eq(index),
        $indicator: this.$indicators.eq(index)
      };
    };
    /* INDEX */


    _proto25._getPrevIndex = function _getPrevIndex(index) {
      return index > 0 ? index - 1 : this.options.wrap ? this.maxIndex : 0;
    };

    _proto25._getNextIndex = function _getNextIndex(index) {
      return index < this.maxIndex ? index + 1 : this.options.wrap ? 0 : this.maxIndex;
    };
    /* UPDATE */


    _proto25._updatePreviousNext = function _updatePreviousNext() {
      this.$previous.toggleClass(this.options.classes.disabled, this._current.index === 0 && !this.options.wrap);
      this.$next.toggleClass(this.options.classes.disabled, this._current.index === this.maxIndex && !this.options.wrap);
    };
    /* API OVERRIDES */


    _proto25.enable = function enable() {
      _Widgets$Widget8.prototype.enable.call(this);

      if (this.options.cycle || this._wasCycling) {
        this.play();
      }
    };

    _proto25.disable = function disable() {
      _Widgets$Widget8.prototype.disable.call(this);

      this._wasCycling = this.options.cycle;

      if (this.options.cycle) {
        this.stop();
      }
    };
    /* API */


    _proto25.get = function get() {
      return this._current.index;
    };

    _proto25.set = function set(index) {
      var _this14 = this;

      index = this._sanitizeIndex(index);
      if (_.isNaN(index) || this._current && index === this._current.index) return;
      if (this.isLocked()) return this.whenUnlocked(function () {
        return _this14.set(index);
      });
      this.lock();

      if (this._current) {
        this._current.$item.removeClass(this.options.classes.current).addClass(this.options.classes.previous).autoblur();

        this._current.$indicator.removeClass(this.options.classes.current);

        this._previous = this._current;
      }

      this._current = this._getItemObj(index);

      this._current.$item.addClass(this.options.classes.current);

      this._current.$indicator.addClass(this.options.classes.current);

      this._updatePreviousNext();

      if (this.options.cycle) {
        this.timer.stop();
      }

      this._delay(function () {
        this._current.$item.autofocus();

        if (this._previous) {
          this._previous.$item.removeClass(this.options.classes.previous);
        }

        if (this.options.cycle) {
          this.timer.play();
        }

        this.unlock();

        this._trigger('change');
      }, this.options.animations.cycle);
    };

    _proto25.previous = function previous() {
      this.set(this._getPrevIndex(this._current.index));
    };

    _proto25.next = function next() {
      this.set(this._getNextIndex(this._current.index));
    };
    /* API TIMER */


    _proto25.play = function play() {
      this.options.cycle = true;
      this.timer.remaining(Math.max(this.options.intervalMinimumRemaining, this.timer.remaining()));
      this.timer.play();
    };

    _proto25.pause = function pause() {
      this.options.cycle = false;
      this.timer.pause();
    };

    _proto25.stop = function stop() {
      this.options.cycle = false;
      this.timer.stop();
    };

    _proto25.reset = function reset() {
      this.options.cycle = true;
      this.timer.reset();
    };

    return Carousel;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Carousel, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Timer, Svelto.Animations); // @optional ./vendor/Chart.js
// @require core/animations/animations.js

/* CHART */


(function ($, _, Svelto, Animations, ChartLib) {
  /* CHECK IF LOADED */
  if (!ChartLib) return;
  /* DEFAULTS */

  _.merge(ChartLib.defaults.global, {
    maintainAspectRatio: false,
    hover: {
      animationDuration: Animations.normal
    },
    defaultColor: '#ffffff',
    // White background color
    defaultFontColor: '#3f3f3f',
    // White text color
    defaultFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif",
    // Default font family
    defaultFontSize: 13.4544,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 16,
        fontSize: 16,
        padding: 10
      }
    },
    tooltips: {
      backgroundColor: '#212121',
      // Black background color
      titleFontSize: 16,
      bodyFontSize: 16,
      footerFontSize: 16
    },
    animations: {
      duration: Animations.normal
    }
  });
})(Svelto.$, Svelto._, Svelto, Svelto.Animations, window.Chart); // @require ./config.js
// @require core/widget/widget.js

/* CHART */


(function ($, _, Svelto, Widgets, Factory, ChartLib) {
  /* CHECK IF LOADED */
  if (!ChartLib) return;
  /* CONFIG */

  var config = {
    name: 'chart',
    plugin: true,
    selector: 'canvas.chart',
    options: {
      defaults: {
        type: 'line',
        colors: ['#1565c0'],
        // Primary color
        labels: ['Dataset'],
        datas: [[]]
      },
      datas: {
        type: 'type',
        colors: 'colors',
        labels: 'labels',
        datas: 'datas'
      }
    }
  };
  /* CHART */

  var Chart =
  /*#__PURE__*/
  function (_Widgets$Widget9) {
    _inheritsLoose(Chart, _Widgets$Widget9);

    function Chart() {
      return _Widgets$Widget9.apply(this, arguments) || this;
    }

    var _proto26 = Chart.prototype;

    /* SPECIAL */
    _proto26._variables = function _variables() {
      var _this15 = this;

      this.$chart = this.$element;
      this.chart = this.element;
      var properties = ['type', 'colors', 'labels', 'datas'];
      properties.forEach(function (property) {
        _this15[property] = _this15.$chart.data(_this15.options.datas[property]) || _this15.options.defaults[property];
      });
      if (!_.isArray(this.datas[0])) this.datas = [this.datas];
    };

    _proto26._init = function _init() {
      var settings = this._getSettings();

      this.instance = new ChartLib(this.chart, settings);
    };

    _proto26._destroy = function _destroy() {
      this.instance.destroy();
    };
    /* PRIVATE */


    _proto26._getSettings = function _getSettings() {
      var _this16 = this;

      return {
        type: this.type,
        data: {
          labels: this.datas[0].map(function (point, index) {
            return index + 1;
          }),
          datasets: this.labels.map(function (label, index) {
            return {
              label: label,
              data: _this16.datas[index],
              backgroundColor: _this16.colors[index]
            };
          })
        }
      };
    };

    return Chart;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Chart, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, window.Chart); // @require core/colors/colors.js
// @require core/widget/widget.js
// @require widgets/remote/loader/loader.js


(function ($, _, Svelto, Widgets, Factory, Colors) {
  /* CONFIG */
  var config = {
    name: 'chatMessageReplyable',
    plugin: true,
    selector: '.chat-message.replyable',
    templates: {
      reply: function (o) {
        var __t,
            __p = '';

        __p += '<div class="chat-message-reply no-tip ' + ((__t = o.cls) == null ? '' : __t) + '">' + ((__t = o.img ? '<div class="chat-message-img"></div>' : '') == null ? '' : __t) + '<div class="chat-message-content remote-loader no-wrap container bordered" data-url="' + ((__t = o.url) == null ? '' : __t) + '"><svg class="spinner"><circle cx="1.625em" cy="1.625em" r="1.25em"></circle></svg></div></div>';
        return __p;
      }
    },
    options: {
      url: false,
      // Url for remote-loading the actual reply widget
      datas: {
        url: 'reply-url'
      },
      selectors: {// reply: '+ .chat-message-reply' //TODO: Limited DOM libraries support
      },
      callbacks: {
        reply: _.noop,
        unreply: _.noop
      }
    }
  };
  /* CHAT MESSAGE REPLY */

  var ChatMessageReplyable =
  /*#__PURE__*/
  function (_Widgets$Widget10) {
    _inheritsLoose(ChatMessageReplyable, _Widgets$Widget10);

    function ChatMessageReplyable() {
      return _Widgets$Widget10.apply(this, arguments) || this;
    }

    var _proto27 = ChatMessageReplyable.prototype;

    /* SPECIAL */
    _proto27._variables = function _variables() {
      this.$replyable = this.$element;
      this.options.url = this.$replyable.data(this.options.datas.url) || this.options.url;
    };
    /* HELPERS */


    _proto27._getReply = function _getReply() {
      return this.$replyable.next().filter('.chat-message-reply');
    };
    /* API */


    _proto27.reply = function reply() {
      var $reply = this._getReply();

      if ($reply.length) return $reply[0].focus();
      var cls = this.$replyable.attr('class'),
          img = !!this.$replyable.children('.chat-message-img').length,
          url = this.options.url,
          options = {
        cls: cls,
        img: img,
        url: url
      };
      $reply = $(this._template('reply', options));
      this.$replyable.after($reply);
      $reply.widgetize()[0].focus();

      this._trigger('reply');
    };

    _proto27.unreply = function unreply() {
      var $reply = this._getReply();

      if (!$reply.length) return;
      $reply.trigger('chatmessagereplyablereply:unreply').remove();

      this._trigger('unreply');
    };

    return ChatMessageReplyable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(ChatMessageReplyable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Colors); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'checkbox',
    plugin: true,
    selector: '.checkbox',
    options: {
      selectors: {
        input: 'input[type="checkbox"]'
      }
    }
  };
  /* CHECKBOX */

  var Checkbox =
  /*#__PURE__*/
  function (_Widgets$Widget11) {
    _inheritsLoose(Checkbox, _Widgets$Widget11);

    function Checkbox() {
      return _Widgets$Widget11.apply(this, arguments) || this;
    }

    var _proto28 = Checkbox.prototype;

    /* SPECIAL */
    _proto28._variables = function _variables() {
      this.$checkbox = this.$element;
      this.$input = this.$checkbox.find(this.options.selectors.input);
      this.input = this.$input[0];
      this.inputId = this.$input.attr('id');
    };

    _proto28._events = function _events() {
      this.___tap();
    };
    /* TAP */


    _proto28.___tap = function ___tap() {
      this._on(true, Pointer.tap, this.__tap);
    };

    _proto28.__tap = function __tap(event) {
      if (event.target === this.input || $(event.target).is("label[for=\"" + this.inputId + "\"]")) return;
      this.$input.prop('checked', !this.$input.prop('checked')).trigger('change');
    };

    return Checkbox;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Checkbox, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require core/widget/widget.js
// When using using an incomplete-information format (those where not all the info are exported, like YYYYMMDD) the behaviour when used in combination with, for instance, `formSync` would be broken: at GTM+5 it may be the day 10, but at UTC may actually be day 9, and when syncing we won't get the right date synced between both datepickers
// Accordion to ISO-8601 the first day of the week is Monday
//FIXME: When using the arrows the prev day still remains hovered even if it's not below the cursor (chrome) //TODO: Make a SO question, maybe we can workaround it
//FIXME: `today` button doesn't work when the same month is active but the wrong day is selected


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'datepicker',
    plugin: true,
    selector: '.datepicker',
    options: {
      exporters: {
        YYYYMMDD: function YYYYMMDD(date, data) {
          return [date.getUTCFullYear().toString().padStart(4, '0'), (parseInt(date.getUTCMonth(), 10) + 1).toString().padStart(2, '0'), date.getUTCDate().toString().padStart(2, '0')].join(data.separator);
        },
        UNIXTIMESTAMP: function UNIXTIMESTAMP(date) {
          return Math.floor(date.getTime() / 1000);
        },
        ISO: function ISO(date) {
          return date.toISOString();
        },
        UTC: function UTC(date) {
          return date.toUTCString();
        }
      },
      importers: {
        YYYYMMDD: function YYYYMMDD(date, data) {
          var segments = date.split(data.separator);
          return new Date(Date.UTC(parseInt(segments[0], 10), parseInt(segments[1], 10) - 1, parseInt(segments[2], 10)));
        },
        UNIXTIMESTAMP: function UNIXTIMESTAMP(date) {
          return new Date(_.isString(date) && date.length ? date * 1000 : NaN);
        },
        ISO: function ISO(date) {
          return new Date(date);
        },
        UTC: function UTC(date) {
          return new Date(date);
        }
      },
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstDayOfWeek: 0,
      // Corresponding to the index in this array: `['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']`, setted to 0 since that to ISO-8601 the first day of the week is Monday
      date: {
        min: false,
        // Minimum selectable date
        max: false,
        // Maximum selectable date
        today: false,
        // Today date
        current: false,
        // Current date visible in the datepicker (basically the month we are viewing)
        selected: false // The selcted date

      },
      format: {
        type: 'UNIXTIMESTAMP',
        // One of the formats implemented in the exporters
        data: {
          // Passed to the called importer and exporter
          separator: '/'
        }
      },
      classes: {
        today: 'datepicker-day-today',
        selected: 'datepicker-day-selected',
        clamped: 'datepicker-day-clamped'
      },
      selectors: {
        navigation: {
          previous: '.datepicker-navigation .previous',
          next: '.datepicker-navigation .next',
          today: '.datepicker-navigation .today'
        },
        day: {
          previous: '.datepicker-days .previous',
          current: '.datepicker-days *:not(.previous):not(.next)',
          next: '.datepicker-days .next',
          today: '.datepicker-day-today',
          selected: '.datepicker-day-selected',
          clamped: '.datepicker-day-clamped'
        },
        title: '.datepicker-title',
        input: 'input'
      },
      keystrokes: {
        'up, left': 'previousMonth',
        'right, down': 'nextMonth'
      },
      callbacks: {
        change: _.noop,
        render: _.noop
      }
    }
  };
  /* DATEPICKER */

  var Datepicker =
  /*#__PURE__*/
  function (_Widgets$Widget12) {
    _inheritsLoose(Datepicker, _Widgets$Widget12);

    function Datepicker() {
      return _Widgets$Widget12.apply(this, arguments) || this;
    }

    var _proto29 = Datepicker.prototype;

    /* SPECIAL */
    _proto29._variables = function _variables() {
      this.$datepicker = this.$element;
      this.$input = this.$datepicker.find(this.options.selectors.input);
      this.$navigationPrev = this.$datepicker.find(this.options.selectors.navigation.previous);
      this.$navigationNext = this.$datepicker.find(this.options.selectors.navigation.next);
      this.$navigationToday = this.$datepicker.find(this.options.selectors.navigation.today);
      this.$navigationTitle = this.$datepicker.find(this.options.selectors.title);
      this.$daysPrev = this.$datepicker.find(this.options.selectors.day.previous);
      this.$daysCurrent = this.$datepicker.find(this.options.selectors.day.current);
      this.$daysNext = this.$datepicker.find(this.options.selectors.day.next);
      this.$daysAll = this.$daysPrev.add(this.$daysCurrent).add(this.$daysNext);
      this.$daySelected = this.$daysAll.filter(this.options.selectors.day.selected);
      this.$dayToday = this.$daysAll.filter(this.options.selectors.day.today);
    };

    _proto29._init = function _init() {
      /* RESETTING HIGHLIGHT */
      this._unhighlightSelected();

      this._unhighlightToday();
      /* TODAY */


      if (!(this.options.date.today instanceof Date)) {
        this.options.date.today = new Date();
      }
      /* INITIAL VALUE */


      this.set(this.$input.val());
      /* CURRENT */

      this.options.date.current = this._clampDate(this.options.date.current || this.options.date.selected || this.options.date.today);
      /* REFRESH */

      this._refresh();
    };

    _proto29._events = function _events() {
      this.___change();

      this.___keydown();

      this.___navigation();

      this.___dayTap();
    };
    /* PRIVATE */


    _proto29._cloneDate = function _cloneDate(date) {
      return new Date(date.getTime());
    };

    _proto29._clampDate = function _clampDate(date) {
      return new Date(_.clamp(date.getTime(), this.options.date.min ? this.options.date.min.getTime() : undefined, this.options.date.max ? this.options.date.max.getTime() : undefined));
    };
    /* CHANGE */


    _proto29.___change = function ___change() {
      this._on(true, this.$input, 'change', this.__change);
    };

    _proto29.__change = function __change(event, data) {
      if (data && data._datepickerId === this.guid) return;
      this.set(this.$input.val());
    };
    /* KEYDOWN */


    _proto29.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* NAVIGATION */


    _proto29.___navigation = function ___navigation() {
      var _this17 = this;

      this._on(this.$navigationPrev, Pointer.tap, function (event) {
        return _this17.__navigation('previousMonth', event);
      });

      this._on(this.$navigationNext, Pointer.tap, function (event) {
        return _this17.__navigation('nextMonth', event);
      });

      this._on(this.$navigationToday, Pointer.tap, function (event) {
        return _this17.__navigation('navigateToToday', event);
      });
    };

    _proto29.__navigation = function __navigation(method, event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this[method]();
    };
    /* DAY TAP */


    _proto29.___dayTap = function ___dayTap() {
      this._on(Pointer.tap, this.options.selectors.day.current, this.__dayTap);
    };

    _proto29.__dayTap = function __dayTap(event) {
      var $day = $(event.target).closest(this.$daysCurrent);
      if ($day.is(this.options.selectors.day.selected) || $day.is(this.options.selectors.day.clamped)) return;
      var day = parseInt($day.text(), 10),
          date = new Date(this.options.date.current.getFullYear(), this.options.date.current.getMonth(), day, 12);
      this.set(date);
    };
    /* BUILD */


    _proto29._buildCalendar = function _buildCalendar() {
      /* NUMBERS */
      var prevMonthDays = new Date(this.options.date.current.getFullYear(), this.options.date.current.getMonth(), 0).getDate(),
          currentMonthDays = new Date(this.options.date.current.getFullYear(), this.options.date.current.getMonth() + 1, 0).getDate(),
          initialDayOfWeek = new Date(this.options.date.current.getFullYear(), this.options.date.current.getMonth(), 1).getDay();
      initialDayOfWeek = initialDayOfWeek === 0 ? 6 : initialDayOfWeek - 1; // Normalizing to 0 -> Monday

      initialDayOfWeek -= this.options.firstDayOfWeek % 7; // Offsetting according to the provided setting

      initialDayOfWeek = initialDayOfWeek < 0 ? 7 + initialDayOfWeek : initialDayOfWeek; // Moving to the other side in case of negative offsetting

      /* PREV */

      var exceedingDays = 31 - prevMonthDays,
          neededDays = initialDayOfWeek,
          leftDays = 9 - exceedingDays - neededDays;
      this.$daysPrev.slice(0, leftDays).addClass(this.options.classes.hidden);
      this.$daysPrev.slice(leftDays, leftDays + neededDays).removeClass(this.options.classes.hidden);
      this.$daysPrev.slice(leftDays + neededDays).addClass(this.options.classes.hidden);
      /* CURRENT */

      this.$daysCurrent.slice(28, currentMonthDays).removeClass(this.options.classes.hidden);
      this.$daysCurrent.slice(currentMonthDays).addClass(this.options.classes.hidden);
      /* CURRENT CLAMPED */

      this.$daysCurrent.removeClass(this.options.classes.clamped);

      if (this.options.date.min && this.options.date.current.getFullYear() === this.options.date.min.getFullYear() && this.options.date.current.getMonth() === this.options.date.min.getMonth()) {
        this.$daysCurrent.slice(0, this.options.date.min.getDate() - 1).addClass(this.options.classes.clamped);
      }

      if (this.options.date.max && this.options.date.current.getFullYear() === this.options.date.max.getFullYear() && this.options.date.current.getMonth() === this.options.date.max.getMonth()) {
        this.$daysCurrent.slice(this.options.date.max.getDate()).addClass(this.options.classes.clamped);
      }
      /* NEXT */


      neededDays = (currentMonthDays + initialDayOfWeek) % 7;
      neededDays = neededDays === 0 ? 0 : 7 - neededDays;
      this.$daysNext.slice(0, neededDays).removeClass(this.options.classes.hidden);
      this.$daysNext.slice(neededDays).addClass(this.options.classes.hidden);
    };
    /* HIGHLIGHT */


    _proto29._highlightDay = function _highlightDay(day, cssClass) {
      if (day instanceof Date) {
        var deltaMonths = day.getFullYear() * 12 + day.getMonth() - (this.options.date.current.getFullYear() * 12 + this.options.date.current.getMonth());

        switch (deltaMonths) {
          case -1:
            return this.$daysPrev.eq(day.getDate() - 23).addClass(cssClass);

          case 0:
            return this.$daysCurrent.eq(day.getDate() - 1).addClass(cssClass);

          case 1:
            return this.$daysNext.eq(day.getDate() - 1).addClass(cssClass);
        }
      }

      return false;
    };

    _proto29._unhighlightSelected = function _unhighlightSelected() {
      if (!this.$daySelected.length) return;
      this.$daySelected.removeClass(this.options.classes.selected);
    };

    _proto29._highlightSelected = function _highlightSelected() {
      if (this.options.date.selected) {
        this.$daySelected = this._highlightDay(this.options.date.selected, this.options.classes.selected);
      }
    };

    _proto29._unhighlightToday = function _unhighlightToday() {
      if (!this.$dayToday.length) return;
      this.$dayToday.removeClass(this.options.classes.today);
    };

    _proto29._highlightToday = function _highlightToday() {
      if (this.options.date.today) {
        this.$dayToday = this._highlightDay(this.options.date.today, this.options.classes.today);
      }
    };
    /* UPDATE */


    _proto29._updateNavigation = function _updateNavigation() {
      /* PREVIOUS */
      if (this.options.date.min && this.$navigationPrev.length) {
        var lastDayPrevMonth = new Date(this.options.date.current.getFullYear(), this.options.date.current.getMonth(), 0);
        this.$navigationPrev.toggleClass(this.options.classes.disabled, lastDayPrevMonth.getTime() < this.options.date.min.getTime());
      }
      /* NEXT */


      if (this.options.date.max && this.$navigationNext.length) {
        var firstDayNextMonth = new Date(this.options.date.current.getFullYear(), this.options.date.current.getMonth() + 1, 1);
        this.$navigationNext.toggleClass(this.options.classes.disabled, firstDayNextMonth.getTime() > this.options.date.max.getTime());
      }
      /* TODAY */


      if (this.$navigationToday.length) {
        this.$navigationToday.toggleClass(this.options.classes.disabled, this.options.date.current.getFullYear() === this.options.date.today.getFullYear() && this.options.date.current.getMonth() === this.options.date.today.getMonth());
      }
    };

    _proto29._updateTitle = function _updateTitle() {
      this.$navigationTitle.text(this.options.months[this.options.date.current.getMonth()] + ' ' + this.options.date.current.getFullYear());
    };

    _proto29._updateInput = function _updateInput() {
      if (this.options.date.selected) {
        this.$input.val(this._export(this.options.date.selected)).trigger('change', {
          _datepickerId: this.guid
        });
      }
    };
    /* EXPORT */


    _proto29._export = function _export(date) {
      return this.options.exporters[this.options.format.type](date, this.options.format.data);
    };
    /* REQUIRE */


    _proto29._import = function _import(date) {
      return this.options.importers[this.options.format.type](date, this.options.format.data);
    };

    _proto29._refresh = function _refresh() {
      this._unhighlightSelected();

      this._unhighlightToday();

      this._buildCalendar();

      this._updateNavigation();

      this._highlightSelected();

      this._highlightToday();

      this._updateTitle();

      this._trigger('render');
    };
    /* API */


    _proto29.get = function get(formatted) {
      return this.options.date.selected ? formatted ? this._export(this.options.date.selected) : this._cloneDate(this.options.date.selected) : false;
    };

    _proto29.set = function set(date) {
      date = date instanceof Date ? date : this._import(date);
      if (_.isNaN(date.valueOf())) return;
      date = this._clampDate(date);
      if (this.options.date.selected && date.getTime() === this.options.date.selected.getTime()) return;

      if (this.options.date.selected) {
        this._unhighlightSelected();
      }

      this.options.date.selected = date;

      if (this.options.date.current) {
        if (this.options.date.selected.getFullYear() === this.options.date.current.getFullYear() && this.options.date.selected.getMonth() === this.options.date.current.getMonth()) {
          this._highlightSelected();
        } else {
          this.options.date.current = this._cloneDate(this.options.date.selected);

          this._refresh();
        }
      }

      this._updateInput();

      this._trigger('change');
    };

    _proto29.navigateToToday = function navigateToToday() {
      if (this.options.date.current.getFullYear() !== this.options.date.today.getFullYear() || this.options.date.current.getMonth() !== this.options.date.today.getMonth()) {
        this.options.date.current = this._clampDate(this.options.date.today);

        this._refresh();
      }
    };

    _proto29.navigateMonth = function navigateMonth(modifier) {
      if (_.isNaN(modifier)) return;
      this.options.date.current.setMonth(this.options.date.current.getMonth() + modifier);
      this.options.date.current = this._clampDate(this.options.date.current);

      this._refresh();
    };

    _proto29.previousMonth = function previousMonth() {
      this.navigateMonth(-1);
    };

    _proto29.nextMonth = function nextMonth() {
      this.navigateMonth(1);
    };

    return Datepicker;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Datepicker, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require core/widget/widget.js
//FIXME: Reposition the draggable properly when autoscrolling inside a container (not document/html)
//FIXME: On iOS, if the draggable is too close to the left edge of the screen dragging it will cause a `scroll to go back` event/animation on safari


(function ($, _, Svelto, Widgets, Factory, Animations, Browser, Pointer, Mouse) {
  /* CONFIG */
  var config = {
    name: 'draggable',
    plugin: true,
    selector: '.draggable',
    options: {
      draggable: _.true,
      // Checks if we can drag it or not
      multitouch: {
        // Multitouch-related options
        enabled: false // Whether to abort on multitouch events or not

      },
      threshold: {
        // Minimum moving threshold for triggering a drag. They can also be functions that return the threshold
        touch: function touch() {
          // Enabled on touch events
          return this.options.axis ? 0 : 5; // If an axis is specified we disable the threshold, in order to enable scrolling
        },
        mouse: 0 // Enabled on mouse events

      },
      tolerance: {
        // If an axis is set, the draggable didn't move yet, and we drag by more than tolerance in the wrong axis we won't be able to drag it anymore. They can also be functions that return the tolerance
        touch: 0,
        // Enabled on touch events, it should be 0 since we want to black any scrolling from happeing
        mouse: 5 // Enabled on mouse events

      },
      onlyHandlers: false,
      // Only an handler can drag it around
      revert: false,
      // On dragend take it back to the starting position
      axis: false,
      // Limit the movements to this axis
      $helper: false,
      // An element to drag around instead of the draggable, can be `false` (in case the draggable will be dragged), a jQuery object or a function yiedling a jQuery object
      proxy: {
        $element: false,
        // Drag the element also when we are triggering a drag from this element
        noMotion: true // If enabled even if there's no motion the proxied draggable will get positionated to the dragend point event (e.g. just a tap)

      },
      constrainer: {
        // Constrain the drag inside the $element
        $element: false,
        // If we want to keep the draggable inside this $element
        center: false,
        // Set the constrain type, it will constrain the whole shape, or the center
        tolerance: {
          // The amount of pixel flexibility that a constrainer has
          x: 0,
          y: 0
        }
      },
      modifiers: {
        // It can modify the setted X and Y translation values
        x: _.true,
        y: _.true
      },
      scroll: {
        // Autoscroll the window when near the border
        active: false,
        // Active it or not
        speed: 20,
        // The amount of autoscroll
        sensitivity: 50 // How close it should be to tbe borders

      },
      classes: {
        dragging: 'draggable-dragging',
        reverting: 'draggable-reverting'
      },
      selectors: {
        handler: '.draggable-handler'
      },
      animations: {
        revert: Animations.fast
      },
      callbacks: {
        start: _.noop,
        move: _.noop,
        end: _.noop
      }
    }
  };
  /* DRAGGABLE */

  var Draggable =
  /*#__PURE__*/
  function (_Widgets$Widget13) {
    _inheritsLoose(Draggable, _Widgets$Widget13);

    function Draggable() {
      return _Widgets$Widget13.apply(this, arguments) || this;
    }

    var _proto30 = Draggable.prototype;

    /* SPECIAL */
    _proto30._variables = function _variables() {
      this.draggable = this.element;
      this.$draggable = this.$element;
      this.$movable = this.$draggable;
      this.$handlers = this.options.onlyHandlers ? this.$draggable.find(this.options.selectors.handler) : this.$draggable;
      this.__doMove = this._frames(this.__doMove.bind(this)); // For performance reasons
    };

    _proto30._events = function _events() {
      this.___down();

      this.___proxy();
    };
    /* UTILITIES */


    _proto30._getThreshold = function _getThreshold() {
      var threshold = this.isTouch ? this.options.threshold.touch : this.options.threshold.mouse;
      return _.isFunction(threshold) ? threshold.call(this) : threshold;
    };

    _proto30._getTolerance = function _getTolerance() {
      var tolerance = this.isTouch ? this.options.tolerance.touch : this.options.tolerance.mouse;
      return _.isFunction(tolerance) ? tolerance.call(this) : tolerance;
    };
    /* DOWN */


    _proto30.___down = function ___down() {
      this._on(this.$handlers, Pointer.down, this.__down);
    };
    /* PROXY */


    _proto30.___proxy = function ___proxy() {
      if (this.options.proxy.$element) {
        this._on(this.options.proxy.$element, Pointer.down, this.__down);
      }
    };
    /* ACTIONS */


    _proto30._centerToPoint = function _centerToPoint(XY, suppressClasses) {
      var offset = this.$movable.offset(),
          rect = this.$movable.getRect(),
          deltaXY = {
        x: XY.x - (offset.left + rect.width / 2),
        y: XY.y - (offset.top + rect.height / 2)
      };
      return this._actionMove(deltaXY, suppressClasses);
    };

    _proto30._actionMove = function _actionMove(deltaXY, suppressClasses) {
      /* INITIAL */
      this.initialXY = this.initialXY || this.$movable.translate();
      /* INIT */

      if (!this.inited) {
        this.inited = true;
        /* CLAMPING VALUES */

        if (this.options.constrainer.$element) {
          var constrainerRect = this.options.constrainer.$element.getRect(),
              movableRect = this.$movable.getRect();

          if (this.options.axis !== 'y') {
            var halfWidth = this.options.constrainer.center ? movableRect.width / 2 : 0;
            this.translateX_min = constrainerRect.left - (movableRect.left - this.initialXY.x) - halfWidth;
            this.translateX_max = constrainerRect.left + constrainerRect.width - (movableRect.left - this.initialXY.x + movableRect.width) + halfWidth;
          }

          if (this.options.axis !== 'x') {
            var halfHeight = this.options.constrainer.center ? movableRect.height / 2 : 0;
            this.translateY_min = constrainerRect.top - (movableRect.top - this.initialXY.y) - halfHeight;
            this.translateY_max = constrainerRect.top + constrainerRect.height - (movableRect.top - this.initialXY.y + movableRect.height) + halfHeight;
          }
        }
        /* CLASSES */


        if (!suppressClasses) {
          this._addClasses();
        }
      }
      /* CLAMPING */


      var translateX = this.initialXY.x,
          translateY = this.initialXY.y;

      if (this.options.axis !== 'y') {
        translateX += deltaXY.x;

        if (this.options.constrainer.$element) {
          translateX = _.clamp(translateX, this.translateX_min - this.options.constrainer.tolerance.x, this.translateX_max + this.options.constrainer.tolerance.x);
        }
      }

      if (this.options.axis !== 'x') {
        translateY += deltaXY.y;

        if (this.options.constrainer.$element) {
          translateY = _.clamp(translateY, this.translateY_min - this.options.constrainer.tolerance.y, this.translateY_max + this.options.constrainer.tolerance.y);
        }
      }
      /* MODIFYING */


      var modifiedXY = {
        x: this.options.axis !== 'y' ? this.options.modifiers.x(translateX) : false,
        y: this.options.axis !== 'x' ? this.options.modifiers.y(translateY) : false
      };
      /* ABORTION */

      if (modifiedXY.x === false && modifiedXY.y === false) return this.initialXY;
      /* SETTING */

      var endXY = {
        x: _.isBoolean(modifiedXY.x) ? modifiedXY.x ? translateX : this.initialXY.x : modifiedXY.x,
        y: _.isBoolean(modifiedXY.y) ? modifiedXY.y ? translateY : this.initialXY.y : modifiedXY.y
      };
      this.$movable.translate(endXY.x, endXY.y);
      /* MOTION */

      this.motion = true;
      /* RETURNING */

      return endXY;
    };
    /* CLASSES */


    _proto30._toggleClasses = function _toggleClasses(force) {
      this.$layout.toggleClass(this.options.classes.layout.priorityZIndex, force);
      this.$movable.toggleClass(this.options.classes.dragging, force).toggleClass(this.options.classes.priorityZIndex, force);
    };

    _proto30._addClasses = function _addClasses() {
      this._toggleClasses(true);
    };

    _proto30._removeClasses = function _removeClasses() {
      this._toggleClasses(false);
    };
    /* HELPER */


    _proto30._getHelper = function _getHelper($draggable) {
      return _.isFunction(this.options.$helper) ? this.options.$helper($draggable) : this.options.$helper instanceof $ && this.options.$helper.length ? this.options.$helper : false;
    };

    _proto30._initHelper = function _initHelper() {
      this.$helper.appendTo(this.$layout);
    };

    _proto30._destroyHelper = function _destroyHelper() {
      this.$helper.remove();
    };
    /* AUTOSCROLL */


    _proto30._autoscroll = function _autoscroll(pointXY) {
      if (!this.options.scroll.active) return;

      if (!this.scrollInited) {
        this.$scrollParent = this.$movable.scrollParent();
        this.scrollParent = this.$scrollParent[0];
        this.scrollParentIsDocument = this.scrollParent === document || this.scrollParent.tagName === 'HTML';
        this.scrollInited = true;
      } // Logic taken from jQuery UI


      if (this.scrollParentIsDocument) {
        if (this.options.axis !== 'x') {
          var scrollTop = $.document.scrollTop;

          if (pointXY.y - scrollTop <= this.options.scroll.sensitivity) {
            $.document.scrollTop = scrollTop - this.options.scroll.speed;
          } else if ($.window.innerHeight - (pointXY.y - scrollTop) <= this.options.scroll.sensitivity) {
            $.document.scrollTop = scrollTop + this.options.scroll.speed;
          }
        }

        if (this.options.axis !== 'y') {
          var scrollLeft = $.document.scrollLeft;

          if (pointXY.x - scrollLeft <= this.options.scroll.sensitivity) {
            $.document.scrollLeft = scrollLeft - this.options.scroll.speed;
          } else if ($.window.innerWidth - (pointXY.x - scrollLeft) <= this.options.scroll.sensitivity) {
            $.document.scrollLeft = scrollLeft + this.options.scroll.speed;
          }
        }
      } else {
        var parentOffset = this.$scrollParent.offset();

        if (this.options.axis !== 'x') {
          if (parentOffset.top + this.scrollParent.offsetHeight - pointXY.y <= this.options.scroll.sensitivity) {
            this.scrollParent.scrollTop += this.options.scroll.speed;
          } else if (pointXY.y - parentOffset.top <= this.options.scroll.sensitivity) {
            this.scrollParent.scrollTop -= this.options.scroll.speed;
          }
        }

        if (this.options.axis !== 'y') {
          if (parentOffset.left + this.scrollParent.offsetWidth - pointXY.x <= this.options.scroll.sensitivity) {
            this.scrollParent.scrollLeft += this.options.scroll.speed;
          } else if (pointXY.x - parentOffset.left <= this.options.scroll.sensitivity) {
            this.scrollParent.scrollLeft -= this.options.scroll.speed;
          }
        }
      }
    };
    /* REVERT */


    _proto30._revert = function _revert() {
      this.lock();

      this._frame(function () {
        this.$movable.addClass(this.options.classes.reverting);

        this._frame(function () {
          this.$movable.translate(this.initialXY.x, this.initialXY.y);

          this._delay(function () {
            this.$movable.removeClass(this.options.classes.reverting);

            if (this.$helper) {
              this._destroyHelper();
            }

            this.unlock();
          }, this.options.animations.revert);
        });
      });
    };
    /* CLICK */


    _proto30.__click = function __click(event) {
      if (!this.motion) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    /* DRAG START */


    _proto30.__dragStart = function __dragStart(event) {
      // We have to catch it or dragging `img`s on Firefox won't work reliably
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    /* DRAG HANDLERS */


    _proto30.__down = function __down(event) {
      if (this.isLocked() || !this.options.draggable(this) || Mouse.hasButton(event, Mouse.buttons.RIGHT)) return;
      if (this.__isAbortable(event)) return this.__abort(event);
      event.stopImmediatePropagation();
      this.inited = false;
      this.motion = false;
      this.skippable = true;
      this.scrollInited = false;
      this.ended = false;
      this.$helper = this._getHelper(this.$draggable);
      this.helper = this.$helper ? this.$helper[0] : false;
      this.$movable = this.$helper || this.$draggable;
      this.startEvent = event;
      this.startXY = $.eventXY(event);
      this.isProxyed = this.options.proxy.$element && event.currentTarget === this.options.proxy.$element[0];
      this.initialXY = false;

      this._trigger('start', {
        draggable: this.draggable,
        helper: this.helper,
        isProxyed: this.isProxyed,
        startEvent: this.startEvent,
        startXY: this.startXY
      });

      this._on(true, $.$document, Pointer.move, this.__move);

      this._one(true, $.$document, Pointer.up, this.__up);

      this._one(true, $.$document, Pointer.cancel, this.__cancel);

      this._one(true, Pointer.click, this.__click);

      this._one(true, $.$document, 'dragstart', this.__dragStart);
    };

    _proto30.__move = function __move(event) {
      if (this.__isAbortable(event)) return this.__abort(event);
      this.moveEvent = event;
      this.moveXY = $.eventXY(event), this.deltaXY = {
        x: this.moveXY.x - this.startXY.x,
        y: this.moveXY.y - this.startXY.y
      };

      if (this.skippable) {
        this.isTouch = Pointer.isTouchEvent(event);
        var x = Math.abs(this.deltaXY.x),
            y = Math.abs(this.deltaXY.y);
        /* TOLERANCE */

        if (this.options.axis) {
          var tolerance = this._getTolerance(),
              exceeded = this.options.axis === 'x' && y > tolerance && y > x || this.options.axis === 'y' && x > tolerance && x > y;

          if (exceeded) return this._off($.$document, Pointer.move, this.__move);
        }
        /* THRESHOLD */


        var threshold = this._getThreshold();

        switch (this.options.axis) {
          case 'x':
            if (x < threshold) return;
            break;

          case 'y':
            if (y < threshold) return;
            break;

          default:
            if (x < threshold && y < threshold) return;
            break;
        }

        this.skippable = false;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      this.__doMove();
    };

    _proto30.__doMove = function __doMove() {
      if (this.ended) return;

      if (!this.inited) {
        if (this.$helper) {
          this._initHelper();
        }

        if (this.$helper || this.isProxyed) {
          this.initialXY = this._centerToPoint(this.startXY);
        }
      }

      var dragXY = this._actionMove(this.deltaXY);

      this._autoscroll(this.moveXY);

      this._trigger('move', {
        draggable: this.draggable,
        helper: this.helper,
        isProxyed: this.isProxyed,
        initialXY: this.initialXY,
        startEvent: this.startEvent,
        startXY: this.startXY,
        moveEvent: this.moveEvent,
        moveXY: this.moveXY,
        dragXY: dragXY
      });
    };

    _proto30.__up = function __up(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.ended = true;
      var endXY = $.eventXY(event),
          dragXY = this.initialXY;

      if (this.inited) {
        this._removeClasses();
      }

      if (this.motion) {
        if (this.options.revert) {
          this._revert();
        } else if (this.$helper) {
          this._destroyHelper();
        } else {
          dragXY = this.$movable.translate();
        }
      } else if (this.isProxyed && !this.$helper) {
        if ((_.isFunction(this.options.proxy.noMotion) ? this.options.proxy.noMotion() : this.options.proxy.noMotion) && Mouse.hasButton(event, Mouse.buttons.LEFT, true)) {
          dragXY = this._centerToPoint(endXY, true);
        }
      }

      this._off($.$document, Pointer.move, this.__move);

      this._off($.$document, Pointer.cancel, this.__cancel);

      this._off($.$document, 'dragstart', this.__dragStart);

      if (this.startEvent.target !== event.target) this._off(Pointer.click, this.__click);

      this._trigger('end', {
        draggable: this.draggable,
        helper: this.helper,
        isProxyed: this.isProxyed,
        initialXY: this.initialXY,
        startEvent: this.startEvent,
        startXY: this.startXY,
        endEvent: event,
        endXY: endXY,
        dragXY: dragXY,
        motion: this.motion
      });
    };

    _proto30.__cancel = function __cancel(event) {
      event.stopImmediatePropagation();
      this.ended = true;
      var endXY = $.eventXY(event),
          dragXY = this.$movable.translate();

      if (this.inited) {
        this._removeClasses();
      }

      if (this.motion) {
        if (this.options.revert) {
          this._revert();

          dragXY = this.initialXY;
        } else if (this.$helper) {
          this._destroyHelper();
        }
      }

      this._off($.$document, Pointer.move, this.__move);

      this._off($.$document, Pointer.up, this.__up);

      this._off(Pointer.click, this.__click);

      this._off($.$document, 'dragstart', this.__dragStart);

      this._trigger('end', {
        draggable: this.draggable,
        helper: this.helper,
        initialXY: this.initialXY,
        startEvent: this.startEvent,
        startXY: this.startXY,
        endEvent: event,
        endXY: endXY,
        dragXY: dragXY,
        motion: this.motion,
        cancelled: true
      });
    };

    _proto30.__isAbortable = function __isAbortable(event) {
      if (!this.options.multitouch.enabled) {
        var originalEvent = event.originalEvent || event;
        if ('touches' in originalEvent && originalEvent.touches.length > 1) return true;
      }

      return false;
    };

    _proto30.__abort = function __abort(event) {
      this._off($.$document, Pointer.cancel, this.__cancel);

      this.__cancel(event);
    };

    return Draggable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Draggable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations, Svelto.Browser, Svelto.Pointer, Svelto.Mouse); // @require core/widget/widget.js
// @require lib/color/color.js
// @require lib/transform/transform.js
// @require widgets/draggable/draggable.js
//TODO: Add support for not setting a starting color, in some cases it might be needed not to set a color by default
//TODO: Add support for alpha channel, by adding an opacity slider at the bottom of the sbWrp, it should be optional


(function ($, _, Svelto, Widgets, Factory, Color, Keyboard) {
  /* CONFIG */
  var config = {
    name: 'colorpicker',
    plugin: true,
    selector: '.colorpicker',
    options: {
      exporters: {
        hex: function hex(color) {
          var hex = color.getHex();
          return '#' + hex.r + hex.g + hex.b;
        }
      },
      startColor: '#ff0000',
      // It can be anything supported by the `Color` obj
      format: {
        type: 'hex',
        // One of the formats implemented in the exporters
        data: undefined // Passed to the called the exporter

      },
      live: false,
      // Whether it will update the input also on `Draggable.move` or just on `Draggable.end`
      selectors: {
        sb: {
          wrp: '.colorpicker-sb',
          handler: '.colorpicker-sb .colorpicker-handler'
        },
        hue: {
          wrp: '.colorpicker-hue',
          handler: '.colorpicker-hue .colorpicker-handler'
        },
        input: 'input'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* COLORPICKER */

  var Colorpicker =
  /*#__PURE__*/
  function (_Widgets$Widget14) {
    _inheritsLoose(Colorpicker, _Widgets$Widget14);

    function Colorpicker() {
      return _Widgets$Widget14.apply(this, arguments) || this;
    }

    var _proto31 = Colorpicker.prototype;

    /* SPECIAL */
    _proto31._variables = function _variables() {
      this.$colorpicker = this.$element;
      this.$sbWrp = this.$colorpicker.find(this.options.selectors.sb.wrp);
      this.$sbHandler = this.$colorpicker.find(this.options.selectors.sb.handler);
      this.$hueWrp = this.$colorpicker.find(this.options.selectors.hue.wrp);
      this.$hueHandler = this.$colorpicker.find(this.options.selectors.hue.handler);
      this.$input = this.$colorpicker.find(this.options.selectors.input);
      this.sbWrpSize = this.$sbWrp.width();
      this.hueWrpHeight = this.sbWrpSize;
      this.hsv = false;
    };

    _proto31._init = function _init() {
      this.set(this.$input.val());

      if (!this.hsv) {
        this.set(this.options.startColor);
      }
    };

    _proto31._events = function _events() {
      this.___change();

      this.___sbKeydown();

      this.___sbDrag();

      this.___hueKeydown();

      this.___hueDrag();
    };

    _proto31._destroy = function _destroy() {
      /* DRAG */
      this.$sbHandler.draggable('destroy');
      this.$hueHandler.draggable('destroy');
    };
    /* CHANGE */


    _proto31.___change = function ___change() {
      this._on(true, this.$input, 'change', this.__change);
    };

    _proto31.__change = function __change() {
      this.set(this.$input.val());
    };
    /* SB ARROWS */


    _proto31.___sbKeydown = function ___sbKeydown() {
      this._onHover(this.$sbWrp, [$.$document, 'keydown', this.__sbKeydown]);
    };

    _proto31.__sbKeydown = function __sbKeydown(event) {
      switch (event.keyCode) {
        case Keyboard.keys.UP:
          this.hsv.v = Math.min(100, this.hsv.v + 1);
          break;

        case Keyboard.keys.RIGHT:
          this.hsv.s = Math.min(100, this.hsv.s + 1);
          break;

        case Keyboard.keys.DOWN:
          this.hsv.v = Math.max(0, this.hsv.v - 1);
          break;

        case Keyboard.keys.LEFT:
          this.hsv.s = Math.max(0, this.hsv.s - 1);
          break;

        default:
          return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      this._updateSb();

      this._updateInput();
    };
    /* SB DRAG */


    _proto31.___sbDrag = function ___sbDrag() {
      this.$sbHandler.draggable({
        draggable: this.isEnabled.bind(this),
        proxy: {
          $element: this.$sbWrp
        },
        constrainer: {
          $element: this.$sbWrp,
          center: true
        },
        callbacks: {
          start: this.__sbDragStart.bind(this),
          move: this._frames(this.__sbDragMove.bind(this)),
          end: this.__sbDragEnd.bind(this)
        }
      });
    };

    _proto31._sbDragSet = function _sbDragSet(XY, update) {
      this.hsv.s = _.clamp(XY.x, 0, this.sbWrpSize) * 100 / this.sbWrpSize;
      this.hsv.v = 100 - _.clamp(XY.y, 0, this.sbWrpSize) * 100 / this.sbWrpSize;

      this._updateSb(false);

      if (update) {
        this._updateInput();
      }
    };

    _proto31.__sbDragStart = function __sbDragStart() {
      this._sbDragging = true;
    };

    _proto31.__sbDragMove = function __sbDragMove(event, data) {
      if (!this._sbDragging) return;

      this._sbDragSet(data.dragXY, this.options.live);
    };

    _proto31.__sbDragEnd = function __sbDragEnd(event, data) {
      this._sbDragging = false;

      this._sbDragSet(data.dragXY, true);
    };
    /* HUE ARROWS */


    _proto31.___hueKeydown = function ___hueKeydown() {
      this._onHover(this.$hueWrp, [$.$document, 'keydown', this.__hueKeydown]);
    };

    _proto31.__hueKeydown = function __hueKeydown(event) {
      switch (event.keyCode) {
        case Keyboard.keys.UP:
          this.hsv.h = Math.min(359, this.hsv.h + 1);
          break;

        case Keyboard.keys.DOWN:
          this.hsv.h = Math.max(0, this.hsv.h - 1);
          break;

        default:
          return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      this._updateHue();

      this._updateInput();
    };
    /* HUE DRAG */


    _proto31.___hueDrag = function ___hueDrag() {
      this.$hueHandler.draggable({
        draggable: this.isEnabled.bind(this),
        axis: 'y',
        proxy: {
          $element: this.$hueWrp
        },
        constrainer: {
          $element: this.$hueWrp
        },
        callbacks: {
          start: this.__hueDragStart.bind(this),
          move: this._frames(this.__hueDragMove.bind(this)),
          end: this.__hueDragEnd.bind(this)
        }
      });
    };

    _proto31._hueDragSet = function _hueDragSet(XY, update) {
      this.hsv.h = 359 - _.clamp(XY.y, 0, this.hueWrpHeight) * 359 / this.hueWrpHeight;

      this._updateHue(false);

      if (update) {
        this._updateInput();
      }
    };

    _proto31.__hueDragStart = function __hueDragStart() {
      this._hueDragging = true;
    };

    _proto31.__hueDragMove = function __hueDragMove(event, data) {
      if (!this._hueDragging) return;

      this._hueDragSet(data.dragXY, this.options.live);
    };

    _proto31.__hueDragEnd = function __hueDragEnd(event, data) {
      this._hueDragging = false;

      this._hueDragSet(data.dragXY, true);
    };
    /* UPDATE */


    _proto31._updateSb = function _updateSb(_translate) {
      if (_translate === void 0) {
        _translate = true;
      }

      /* HSL */
      var hsl = Color.hsv2hsl(this.hsv);
      this.$sbHandler.hsl(hsl.h, hsl.s, hsl.l);
      /* TRANSLATE */

      if (_translate) {
        var translateX = this.sbWrpSize / 100 * this.hsv.s,
            translateY = this.sbWrpSize / 100 * (100 - this.hsv.v);
        this.$sbHandler.translate(translateX, translateY);
      }
    };

    _proto31._updateHue = function _updateHue(_translate) {
      if (_translate === void 0) {
        _translate = true;
      }

      /* HSL */
      var hsl = Color.hsv2hsl(this.hsv);
      this.$hueHandler.hsl(this.hsv.h, 100, 50);
      this.$sbHandler.hsl(hsl.h, hsl.s, hsl.l);
      this.$sbWrp.hsl(this.hsv.h, 100, 50);
      /* TRANSLATE */

      if (_translate) {
        var translateY = this.hueWrpHeight / 100 * (100 - this.hsv.h / 360 * 100);
        this.$hueHandler.translateY(translateY);
      }
    };

    _proto31._updateInput = function _updateInput() {
      this.$input.val(this._export()).trigger('change');

      this._trigger('change');
    };

    _proto31._update = function _update() {
      this._updateSb();

      this._updateHue();

      this._updateInput();
    };
    /* EXPORT */


    _proto31._export = function _export() {
      return this.options.exporters[this.options.format.type](new Color(this.hsv, 'hsv'), this.options.format.data);
    };
    /* API */


    _proto31.get = function get() {
      return this._export();
    };

    _proto31.set = function set(color) {
      color = _.attempt(function () {
        return new Color(color);
      });
      if (_.isError(color)) return;
      var hsv = color.getHsv();
      if (_.isEqualJSON(this.hsv, hsv)) return;
      this.hsv = hsv;

      this._update();
    };

    return Colorpicker;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Colorpicker, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Color, Svelto.Keyboard); // @require core/widget/widget.js
// @require lib/touching/touching.js
// @require widgets/draggable/draggable.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'droppable',
    plugin: true,
    selector: '.droppable',
    options: {
      selector: '*',
      // Only Draggables matching this selector will be able to drop inside this Droppable
      classes: {
        target: undefined,
        // The class to attach to the Droppable if the Draggable can be dropped inside of it
        hover: undefined // The class to attach to the Droppable when hovered by a Draggable

      },
      callbacks: {
        enter: _.noop,
        leave: _.noop,
        drop: _.noop
      }
    }
  };
  /* DROPPABLE */

  var Droppable =
  /*#__PURE__*/
  function (_Widgets$Widget15) {
    _inheritsLoose(Droppable, _Widgets$Widget15);

    function Droppable() {
      return _Widgets$Widget15.apply(this, arguments) || this;
    }

    var _proto32 = Droppable.prototype;

    /* SPECIAL */
    _proto32._variables = function _variables() {
      this.droppable = this.element;
      this.$droppable = this.$element;
      this.__isCompatible = undefined;
      this._wasHovering = false;
    };

    _proto32._events = function _events() {
      this.___drag();
    };
    /* PRIVATE */


    _proto32._isCompatible = function _isCompatible(element) {
      if (_.isUndefined(this.__isCompatible)) {
        this.__isCompatible = $(element).is(this.options.selector);

        if (this.__isCompatible) {
          this.$droppable.addClass(this.options.classes.target);
        }
      }

      return this.__isCompatible;
    };

    _proto32._isPointHovering = function _isPointHovering(pointXY, event) {
      var point = pointXY || $.eventXY(event, 'clientX', 'clientY');
      return !!this.$droppable.touching({
        point: point
      }).length;
    };
    /* DRAG */


    _proto32.___drag = function ___drag() {
      this.___dragMove();

      this.___dragEnd();
    };
    /* DRAG MOVE */


    _proto32.___dragMove = function ___dragMove() {
      this._on(this.$layout, 'draggable:move', this._frames(this.__dragMove.bind(this)));
    };

    _proto32.__dragMove = function __dragMove(event, data) {
      if (!this._isCompatible(data.draggable)) return;

      var isHovering = this._isPointHovering(false, data.moveEvent);

      if (isHovering !== this._wasHovering) {
        this.$droppable.toggleClass(this.options.classes.hover, isHovering);

        this._trigger(isHovering ? 'enter' : 'leave', {
          draggable: data.draggable,
          helper: data.helper,
          droppable: this.droppable
        });
      }

      this._wasHovering = isHovering;
    };
    /* DRAG END */


    _proto32.___dragEnd = function ___dragEnd() {
      this._on(this.$layout, 'draggable:end', this.__dragEnd);
    };

    _proto32.__dragEnd = function __dragEnd(event, data) {
      if (this._isCompatible(data.draggable)) {
        this.$droppable.removeClass(this.options.classes.target);

        if (this._isPointHovering(false, data.endEvent)) {
          if (this._wasHovering) {
            this.$droppable.removeClass(this.options.classes.hover);
          }

          this._trigger('drop', {
            draggable: data.draggable,
            helper: data.helper,
            droppable: this.droppable
          });
        }
      }

      this.__isCompatible = undefined;
    };

    return Droppable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Droppable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/animations/animations.js
// @require lib/slide/slide.js
// @require widgets/autofocusable/autofocusable.js
//FIXME: Broken horizontal sliding animation


(function ($, _, Svelto, Widgets, Factory, Animations) {
  /* CONFIG */
  var config = {
    name: 'expander',
    plugin: true,
    selector: '.expander',
    options: {
      classes: {
        horizontal: 'horizontal',
        open: 'open',
        opening: 'opening',
        closing: 'closing'
      },
      selectors: {
        content: '.expander-content' //TODO: Maybe rename it to `.expander-block`

      },
      animations: {
        open: Animations.fast,
        close: Animations.fast
      },
      callbacks: {
        beforeopen: _.noop,
        open: _.noop,
        beforeclose: _.noop,
        close: _.noop
      }
    }
  };
  /* EXPANDER */

  var Expander =
  /*#__PURE__*/
  function (_Widgets$Autofocusabl2) {
    _inheritsLoose(Expander, _Widgets$Autofocusabl2);

    function Expander() {
      return _Widgets$Autofocusabl2.apply(this, arguments) || this;
    }

    var _proto33 = Expander.prototype;

    /* SPECIAL */
    _proto33._variables = function _variables() {
      this.$expander = this.$element;
      this.$content = this.$expander.find(this.options.selectors.content);
      this._isOpen = this.$expander.hasClass(this.options.classes.open);
      this._isHorizontal = this.$expander.hasClass(this.options.classes.horizontal);
    };
    /* API */


    _proto33.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto33.toggle = function toggle(force) {
      var _this18 = this;

      if (force === void 0) {
        force = !this._isOpen;
      }

      if (!!force === this._isOpen) return;
      if (this.isLocked()) return this.whenUnlocked(function () {
        return _this18.toggle(force);
      });
      this.lock();
      this._isOpen = !!force;

      this._trigger(this._isOpen ? 'beforeopen' : 'beforeclose');

      this.$content.slideToggle({
        duration: this._isOpen ? this.options.animations.open : this.options.animations.close,
        axis: this._isHorizontal ? 'x' : 'y',
        callbacks: {
          start: function start() {
            _this18.$expander.addClass(_this18._isOpen ? _this18.options.classes.opening : _this18.options.classes.closing);
          },
          end: function end() {
            _this18.$expander.removeClass(_this18._isOpen ? _this18.options.classes.opening : _this18.options.classes.closing).toggleClass(_this18.options.classes.open, _this18._isOpen);

            _this18._isOpen ? _this18.autofocus() : _this18.autoblur();

            _this18.unlock();

            _this18._trigger(_this18._isOpen ? 'open' : 'close');
          }
        }
      }, force);
    };

    _proto33.open = function open() {
      this.toggle(true);
    };

    _proto33.close = function close() {
      this.toggle(false);
    };

    return Expander;
  }(Widgets.Autofocusable);
  /* FACTORY */


  Factory.make(Expander, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations); // @require widgets/expander/expander.js
//TODO: Add better support for changing `options.multiple` at runtime. `multiple: true` -> opening multiple, -> `multiple: false` -> multiple still opened
//FIXME: Broken horizontal sliding animation


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'accordion',
    plugin: true,
    selector: '.accordion',
    options: {
      multiple: false,
      // Wheter to allow multiple expanders open or not
      selectors: {
        expander: Widgets.Expander.config.selector
      },
      callbacks: {
        open: _.noop,
        close: _.noop
      }
    }
  };
  /* ACCORDION */

  var Accordion =
  /*#__PURE__*/
  function (_Widgets$Widget16) {
    _inheritsLoose(Accordion, _Widgets$Widget16);

    function Accordion() {
      return _Widgets$Widget16.apply(this, arguments) || this;
    }

    var _proto34 = Accordion.prototype;

    /* SPECIAL */
    _proto34._variables = function _variables() {
      this.$accordion = this.$element;
      this.$expanders = this.$accordion.children(this.options.selectors.expander);
      this.instances = this.$expanders.get().map(function (expander) {
        return $(expander).expander('instance');
      });
    };

    _proto34._events = function _events() {
      this.___beforeopen();

      this.___open();

      this.___close();
    };
    /* EXPANDER BEFOREOPEN */


    _proto34.___beforeopen = function ___beforeopen() {
      this._on(true, this.$expanders, 'expander:beforeopen', this.__beforeopen);
    };

    _proto34.__beforeopen = function __beforeopen(event) {
      // Close others
      if (this.options.multiple) return;
      this.instances.forEach(function (instance) {
        return instance.element !== event.currentTarget ? instance.close() : false;
      });
    };
    /* EXPANDER OPEN */


    _proto34.___open = function ___open() {
      this._on(true, this.$expanders, 'expander:open', this.__open);
    };

    _proto34.__open = function __open(event) {
      this._trigger('open', {
        index: this.$expanders.index(event.currentTarget)
      });
    };
    /* EXPANDER CLOSE */


    _proto34.___close = function ___close() {
      this._on(true, this.$expanders, 'expander:close', this.__close);
    };

    _proto34.__close = function __close(event) {
      this._trigger('close', {
        index: this.$expanders.index(event.currentTarget)
      });
    };
    /* API OVERRIDES */


    _proto34.enable = function enable() {
      _Widgets$Widget16.prototype.enable.call(this);

      this.instances.forEach(function (instance) {
        return instance.enable();
      });
    };

    _proto34.disable = function disable() {
      this.instances.forEach(function (instance) {
        return instance.disable();
      });
    };
    /* API */


    _proto34.isOpen = function isOpen(index) {
      return this.instances[index].isOpen();
    };

    _proto34.toggle = function toggle(index, force) {
      this.instances[index].toggle(force);
    };

    _proto34.open = function open(index) {
      this.toggle(index, true);
    };

    _proto34.close = function close(index) {
      this.toggle(index, false);
    };

    return Accordion;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Accordion, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'flickable',
    plugin: true,
    selector: '.flickable',
    options: {
      duration: 150,
      // Maximum duration of the flick gesture
      threshold: 5,
      // Minimum moving threshold of the flick gesture
      callbacks: {
        flick: _.noop
      }
    }
  };
  /* FLICKABLE */

  var Flickable =
  /*#__PURE__*/
  function (_Widgets$Widget17) {
    _inheritsLoose(Flickable, _Widgets$Widget17);

    function Flickable() {
      return _Widgets$Widget17.apply(this, arguments) || this;
    }

    var _proto35 = Flickable.prototype;

    /* SPECIAL */
    _proto35._events = function _events() {
      this.___down();
    };
    /* DOWN */


    _proto35.___down = function ___down() {
      this._on(Pointer.down, this.__down);
    };

    _proto35.__down = function __down(event) {
      this._startXY = $.eventXY(event);
      this._startTimestamp = event.timeStamp || Date.now();
      this._motion = false;

      this.___move();

      this.___up();

      this.___cancel();
    };
    /* MOVE */


    _proto35.___move = function ___move() {
      this._one(true, $.$document, Pointer.move, this.__move);
    };

    _proto35.__move = function __move() {
      this._motion = true;
    };
    /* UP */


    _proto35.___up = function ___up() {
      this._one(true, $.$document, Pointer.up, this.__up);
    };

    _proto35.__up = function __up(event) {
      this._endTimestamp = event.timeStamp || Date.now();

      if (this._motion && this._endTimestamp - this._startTimestamp <= this.options.duration) {
        var endXY = $.eventXY(event),
            deltaXY = {
          x: endXY.x - this._startXY.x,
          y: endXY.y - this._startXY.y
        },
            absDeltaXY = {
          x: Math.abs(deltaXY.x),
          y: Math.abs(deltaXY.y)
        };

        if (absDeltaXY.x >= this.options.threshold || absDeltaXY.y >= this.options.threshold) {
          var orientation, direction;

          if (absDeltaXY.x > absDeltaXY.y) {
            orientation = 'horizontal';
            direction = deltaXY.x > 0 ? 'right' : 'left';
          } else {
            orientation = 'vertical';
            direction = deltaXY.y > 0 ? 'bottom' : 'top';
          }

          this._trigger('flick', {
            orientation: orientation,
            direction: direction,
            startEvent: this._startEvent,
            startXY: this._startXY,
            endEvent: event,
            endXY: endXY
          });
        }
      }

      if (!this._motion) {
        this._off($.$document, Pointer.move, this.__move);
      }

      this._off($.$document, Pointer.cancel, this.__cancel);
    };
    /* CANCEL */


    _proto35.___cancel = function ___cancel() {
      this._one(true, $.$document, Pointer.cancel, this.__cancel);
    };

    _proto35.__cancel = function __cancel() {
      if (!this._motion) {
        this._off($.$document, Pointer.move, this.__move);
      }

      this._off($.$document, Pointer.up, this.__up);
    };

    return Flickable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Flickable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require lib/autofocus/helpers.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'flippable',
    plugin: true,
    selector: '.flippable',
    options: {
      classes: {
        flip: 'flipped'
      },
      selectors: {
        front: '.flippable-front',
        back: '.flippable-back'
      },
      callbacks: {
        front: _.noop,
        back: _.noop
      }
    }
  };
  /* FLIPPABLE */

  var Flippable =
  /*#__PURE__*/
  function (_Widgets$Widget18) {
    _inheritsLoose(Flippable, _Widgets$Widget18);

    function Flippable() {
      return _Widgets$Widget18.apply(this, arguments) || this;
    }

    var _proto36 = Flippable.prototype;

    /* SPECIAL */
    _proto36._variables = function _variables() {
      this.$flippable = this.$element;
      this.$front = this.$flippable.find(this.options.selectors.front);
      this.$back = this.$flippable.find(this.options.selectors.back);
      this._isFlipped = this.$flippable.hasClass(this.options.classes.flip);
    };
    /* API */


    _proto36.isFlipped = function isFlipped() {
      return this._isFlipped;
    };

    _proto36.flip = function flip(force) {
      if (force === void 0) {
        force = !this._isFlipped;
      }

      if (!!force !== this._isFlipped) {
        this._isFlipped = force;
        this.$flippable.toggleClass(this.options.classes.flip, this._isFlipped);
        var $blurrable = this._isFlipped ? this.$front : this.$back;
        $blurrable.autoblur();
        var $focusable = this._isFlipped ? this.$back : this.$front;
        $focusable.autofocus();

        this._trigger(this._isFlipped ? 'back' : 'front');
      }
    };

    _proto36.front = function front() {
      this.flip(false);
    };

    _proto36.back = function back() {
      this.flip(true);
    };

    return Flippable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Flippable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/widget/widget.js
//TODO: Maybe add the ability to trigger a sync when widgetizing a new form in the group, so that if we are appending a new one it gets synced (as a base or not, if not maybe we can get a data-target or the first of othe others in the group as a base)


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'formSync',
    plugin: true,
    selector: 'form[data-sync-group]',
    options: {
      live: false,
      // Basically it triggers the syncing also when the `input` event is fired
      attributes: {
        name: 'name'
      },
      datas: {
        group: 'sync-group'
      },
      selectors: {
        form: 'form',
        elements: 'input:not([type="button"]), textarea, select',
        checkable: '[type="radio"], [type="checkbox"]',
        radio: '[type="radio"]',
        checkbox: '[type="checkbox"]',
        textfield: 'input:not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea'
      }
    }
  };
  /* FORM SYNC */

  var FormSync =
  /*#__PURE__*/
  function (_Widgets$Widget19) {
    _inheritsLoose(FormSync, _Widgets$Widget19);

    function FormSync() {
      return _Widgets$Widget19.apply(this, arguments) || this;
    }

    var _proto37 = FormSync.prototype;

    /* SPECIAL */
    _proto37._variables = function _variables() {
      this.$form = this.$element;
      this.$elements = this.$form.find(this.options.selectors.elements);
      this.group = this.$form.data(this.options.datas.group);
    };

    _proto37._events = function _events() {
      this.___change();

      this.___input();
    };
    /* CHANGE */


    _proto37.___change = function ___change() {
      this._on(true, this.$elements, 'change', this._debounce(this.__sync, 100));
    };
    /* INPUT */


    _proto37.___input = function ___input() {
      if (this.options.live) {
        var $textfields = this.$elements.filter(this.options.selectors.textfield);

        this._on(true, $textfields, 'input', this._debounce(this.__sync, 100));
      }
    };
    /* SYNC */


    _proto37.__sync = function __sync(event, data) {
      if (data && data._formSynced === this.group) return;
      var $element = $(event.target),
          name = $element.attr(this.options.attributes.name),
          $otherElements = $(this.options.selectors.form + '[data-' + this.options.datas.group + '="' + this.group + '"]').not(this.$form).find('[' + this.options.attributes.name + '="' + name + '"]').not($element);
      if (!$otherElements.length) return;
      var value = $element.val(),
          checked = !!$element.prop('checked');

      for (var i = 0, l = $otherElements.length; i < l; i++) {
        var otherElement = $otherElements[i],
            $otherElement = $(otherElement),
            otherValue = $otherElement.val(),
            otherChecked = !!$otherElement.prop('checked');
        if (value === otherValue && checked === otherChecked) continue;
        if ($element.is(this.options.selectors.radio) && (value !== otherValue || checked === otherChecked)) continue;

        if ($element.is(this.options.selectors.checkable)) {
          $otherElement.prop('checked', checked).trigger('change', {
            _formSynced: this.group
          });
        } else {
          $otherElement.val(value).trigger('change', {
            _formSynced: this.group
          });
        }
      }
    };

    return FormSync;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(FormSync, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/widget/widget.js
// @require lib/validator/validator.js
// @require widgets/toast/toast.js
//TODO: Add support for multiple checkboxes validation
//TODO: Add meta validators that accepts other validators as arguments, for example not[email], oppure not[matches[1,2,3]] oppure or[email,url] etc... maybe write it this way: or[matches(1-2-3)/matches(a-b-c)], or just use a smarter regex
//TODO: Maybe make it generic (so that it can be used in single elements) and just call it `validate`


(function ($, _, Svelto, Widgets, Factory, Validator) {
  /* CONFIG */
  var config = {
    name: 'formValidate',
    plugin: true,
    selector: 'form.validate',
    templates: {
      message: function (o) {
        var __t,
            __p = '';

        __p += '<p class="form-validate-message ' + ((__t = o.validity) == null ? '' : __t) + '">' + ((__t = o.message) == null ? '' : __t) + '</p>';
        return __p;
      },
      messages: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<ul class="form-validate-message ' + ((__t = o.validity) == null ? '' : __t) + '">';

        for (var i = 0, l = o.messages.length; i < l; i++) {
          ;
          __p += '<li>' + ((__t = o.messages[i]) == null ? '' : __t) + '</li>';
        }

        ;
        __p += '</ul>';
        return __p;
      }
    },
    options: {
      validators: {
        // If not found here it will use `Validator`'s validators
        required: function required(value) {
          return !Validator.empty(value);
        },
        values: function values(value) {
          for (var _len6 = arguments.length, _values = new Array(_len6 > 1 ? _len6 - 1 : 0), _key7 = 1; _key7 < _len6; _key7++) {
            _values[_key7 - 1] = arguments[_key7];
          }

          return Validator.included(value, _values);
        },
        field: function field(value, fieldName) {
          var fieldValue = this.elementsByName[fieldName].value;
          return value === fieldValue;
        },
        checked: function checked() {
          return this.context.$element.prop('checked');
        },
        regex: function regex(value, _regex) {
          return !!value.match(new RegExp(_regex));
        }
      },
      messages: {
        form: {
          invalid: 'The form contains some errors'
        },
        validators: {
          invalid: {
            general: 'This value is not valid',
            alpha: 'Only alphabetical characters are allowed',
            alphanumeric: 'Only alphanumeric characters are allowed',
            hexadecimal: 'Only hexadecimal characters are allowed',
            number: 'Only numbers are allowed',
            integer: 'Only integers numbers are allowed',
            float: 'Only floating point numbers are allowed',
            min: 'The number must be at least $2',
            max: 'The number must be at maximum $2',
            range: 'The number must be between $2 and $3',
            minLength: 'The length must be at least $2',
            maxLength: 'The length must be at maximum $2',
            rangeLength: 'The length must be between $2 and $3',
            exactLength: 'The length must be exactly $2',
            email: 'Enter a valid email address',
            creditCard: 'Enter a valid credit card number',
            ssn: 'Enter a valid Social Security Number',
            ipv4: 'Enter a valid IPv4 address',
            url: 'Enter a valid URL',
            required: 'This field is required',
            values: 'This value is not allowed',
            field: 'The two fields don\'t match',
            checked: 'This must be checked'
          }
        }
      },
      characters: {
        separators: {
          validations: '|',
          arguments: ','
        }
      },
      regexes: {
        validation: /^([^\[]+)(?:\[(.*)\])?$/
      },
      datas: {
        id: '_fveid',
        validations: 'validations',
        messages: {
          invalid: 'invalid',
          valid: 'valid'
        }
      },
      classes: {
        invalid: 'invalid',
        valid: 'valid'
      },
      selectors: {
        element: 'input:not([type="button"]), textarea, select',
        textfield: 'input:not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea',
        wrapper: '.checkbox, .colorpicker, .datepicker, .editor, .radio, .select, .slider, .switch',
        output: '.form-validate-output'
      }
    }
  };
  /* FORM VALIDATE */

  var FormValidate =
  /*#__PURE__*/
  function (_Widgets$Widget20) {
    _inheritsLoose(FormValidate, _Widgets$Widget20);

    function FormValidate() {
      return _Widgets$Widget20.apply(this, arguments) || this;
    }

    var _proto38 = FormValidate.prototype;

    /* SPECIAL */
    _proto38._variables = function _variables() {
      this.$form = this.$element;
      this.$output = this.$form.find(this.options.selectors.output);
      this.$elements = this.$form.find(this.options.selectors.element);
      this.$textfields = this.$elements.filter(this.options.selectors.textfield);

      this.___elements();
    };

    _proto38._events = function _events() {
      this.___change();

      this.___focus();

      this.___blur();

      this.___submit();
    };
    /* ELEMENTS */


    _proto38.___elements = function ___elements() {
      var _this19 = this;

      this.elements = {};
      this.elementsByName = {};

      var _loop = function _loop(i, l) {
        var element = _this19.$elements[i],
            $element = $(element),
            $wrappers = $element.parents(_this19.options.selectors.wrapper),
            isWrapped = !!$wrappers.length,
            $wrapper = isWrapped ? $wrappers.first() : $element,
            id = $.guid++,
            validationsStr = $element.data(_this19.options.datas.validations),
            validations = false;

        if (validationsStr) {
          var validationsArr = validationsStr.split(_this19.options.characters.separators.validations);
          validationsArr.forEach(function (validationStr) {
            var matches = validationStr.match(_this19.options.regexes.validation);
            if (!matches) return;
            var validationName = matches[1],
                validationArgs = matches[2] ? matches[2].split(_this19.options.characters.separators.arguments) : [],
                validator = _this19.options.validators[validationName] || Validator[validationName];
            if (!validator) return;
            if (!validations) validations = {};
            validations[validationName] = {
              args: validationArgs,
              validator: validator
            };
          });
        }

        element[_this19.options.datas.id] = id;
        _this19.elements[id] = {
          id: id,
          $element: $element,
          $wrapper: $wrapper,
          $message: false,
          name: element.name,
          value: $element.val(),
          validations: validations,
          isDirty: false,
          isValid: undefined,
          messages: {
            invalid: isWrapped ? $element.data(_this19.options.datas.messages.invalid) || $wrapper.data(_this19.options.datas.messages.invalid) : $element.data(_this19.options.datas.messages.invalid),
            valid: isWrapped ? $element.data(_this19.options.datas.messages.valid) || $wrapper.data(_this19.options.datas.messages.valid) : $element.data(_this19.options.datas.messages.valid)
          }
        };
        _this19.elementsByName[_this19.elements[id].name] = _this19.elements[id];
      };

      for (var i = 0, l = this.$elements.length; i < l; i++) {
        _loop(i, l);
      }
    };
    /* UPDATE */


    _proto38._updateElement = function _updateElement(elementObj) {
      /* FORM */
      this._isValid = undefined;
      /* ELEMENT */

      elementObj.isDirty = true;
      elementObj.isValid = undefined;

      this._validateWorker(elementObj);
      /* OTHERS */


      for (var id in this.elements) {
        if (!this.elements.hasOwnProperty(id)) continue;
        if (id === elementObj.id) continue;
        var otherElementObj = this.elements[id],
            isDepending = otherElementObj.validations && 'field' in otherElementObj.validations && otherElementObj.validations.field.args.indexOf(elementObj.name) !== -1,
            hasSameName = elementObj.name.length && otherElementObj.name === elementObj.name;

        if (isDepending || hasSameName) {
          otherElementObj.isValid = undefined;

          this._validateWorker(otherElementObj);
        }
      }
    };

    _proto38._updateElements = function _updateElements() {
      for (var id in this.elements) {
        if (!this.elements.hasOwnProperty(id)) continue;

        this._updateElement(this.elements[id]);
      }
    };
    /* CHANGE */


    _proto38.___change = function ___change() {
      this._on(true, this.$elements, 'change', this.__change);
    };

    _proto38.__change = function __change(event) {
      this._updateElement(this.elements[event.currentTarget[this.options.datas.id]]);
    };
    /* FOCUS */


    _proto38.___focus = function ___focus() {
      this._on(this.$textfields, 'focus', this.__focus);
    };

    _proto38.__focus = function __focus(event) {
      var elementObj = this.elements[event.currentTarget[this.options.datas.id]];
      elementObj.isValid = undefined;

      this.__indeterminate(elementObj);
    };
    /* BLUR */


    _proto38.___blur = function ___blur() {
      this._on(this.$textfields, 'blur', this.__blur);
    };

    _proto38.__blur = function __blur(event) {
      var elementObj = this.elements[event.currentTarget[this.options.datas.id]];

      this._validateWorker(elementObj);
    };
    /* SUBMIT */


    _proto38.___submit = function ___submit() {
      this._on(true, 'submit', this.__submit);
    };

    _proto38.__submit = function __submit(event) {
      this._updateElements();

      if (!this.isValid()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        $.toast(this.options.messages.form.invalid);
      }
    };
    /* VALIDATION */


    _proto38._validateWorker = function _validateWorker(elementObj) {
      if (_.isUndefined(elementObj.isValid)) {
        var result = this._validate(elementObj),
            isValid = result === true;

        elementObj.isValid = isValid;

        if (isValid) {
          this.__valid(elementObj);
        } else {
          this.__invalid(elementObj, result);
        }
      }
    };

    _proto38._validate = function _validate(elementObj) {
      var errors = [],
          validations = elementObj.validations;

      if (elementObj.isDirty) {
        elementObj.value = elementObj.$element.val();
        elementObj.isDirty = false;
      }

      if (validations) {
        for (var name in validations) {
          var _validation$validator;

          if (!validations.hasOwnProperty(name)) continue;
          this.context = elementObj;

          var validation = validations[name],
              isValid = (_validation$validator = validation.validator).call.apply(_validation$validator, [this, elementObj.value].concat(validation.args));

          if (!isValid) {
            var error = _.format.apply(_, [this.options.messages.validators.invalid[name] || this.options.messages.validators.invalid.general, elementObj.value].concat(validation.args));

            errors.push(error);
          }
        }
      }

      return !errors.length ? true : errors;
    };
    /* STATE */


    _proto38.__indeterminate = function __indeterminate(elementObj) {
      elementObj.$wrapper.removeClass(this.options.classes.invalid + ' ' + this.options.classes.valid);

      this._updateMessage(elementObj, false);
    };

    _proto38.__valid = function __valid(elementObj) {
      elementObj.$wrapper.removeClass(this.options.classes.invalid).addClass(this.options.classes.valid);

      this._updateMessage(elementObj, elementObj.messages.valid);
    };

    _proto38.__invalid = function __invalid(elementObj, errors) {
      elementObj.$wrapper.removeClass(this.options.classes.valid).addClass(this.options.classes.invalid);

      this._updateMessage(elementObj, elementObj.messages.invalid || errors);
    };
    /* ERRORS */


    _proto38._updateMessage = function _updateMessage(elementObj, message) {
      if (elementObj.$message) {
        elementObj.$message.remove();
      }

      if (message) {
        var validity = elementObj.isValid ? this.options.classes.valid : this.options.classes.invalid,
            msgHtml = _.isString(message) ? this._template('message', {
          message: message,
          validity: validity
        }) : message.length === 1 ? this._template('message', {
          message: message[0],
          validity: validity
        }) : this._template('messages', {
          messages: message,
          validity: validity
        });
        elementObj.$message = $(msgHtml);

        if (this.$output.length) {
          this.$output.append(elementObj.$message);
        } else {
          elementObj.$wrapper.after(elementObj.$message);
        }
      } else {
        elementObj.$message = false;
      }
    };
    /* API */


    _proto38.isValid = function isValid() {
      if (_.isUndefined(this._isValid)) {
        for (var id in this.elements) {
          if (!this.elements.hasOwnProperty(id)) continue;
          var elementObj = this.elements[id];

          if (_.isUndefined(elementObj.isValid)) {
            this._validateWorker(elementObj);
          }

          if (!elementObj.isValid) {
            this._isValid = false;
          }
        }

        if (_.isUndefined(this._isValid)) {
          this._isValid = true;
        }
      }

      return this._isValid;
    };

    return FormValidate;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(FormValidate, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Validator); // @require core/widget/widget.js
// @require lib/fullscreen/fullscreen.js


(function ($, _, Svelto, Widgets, Factory, Fullscreen) {
  /* CONFIG */
  var config = {
    name: 'fullscreenable',
    plugin: true,
    selector: '.fullscreenable'
  };
  /* FULLSCREENABLE */

  var Fullscreenable =
  /*#__PURE__*/
  function (_Widgets$Widget21) {
    _inheritsLoose(Fullscreenable, _Widgets$Widget21);

    function Fullscreenable() {
      return _Widgets$Widget21.apply(this, arguments) || this;
    }

    var _proto39 = Fullscreenable.prototype;

    /* API */
    _proto39.isFullscreen = function isFullscreen() {
      return Fullscreen.isFullscreen;
    };

    _proto39.toggle = function toggle(force) {
      if (force === void 0) {
        force = !Fullscreen.isFullscreen;
      }

      if (!!force !== Fullscreen.isFullscreen) {
        force ? this.request() : this.exit();
      }
    };

    _proto39.request = function request() {
      Fullscreen.request(this.element);
    };

    _proto39.exit = function exit() {
      Fullscreen.exit();
    };

    return Fullscreenable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Fullscreenable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Fullscreen); // @require core/svelto/svelto.js


(function ($, _, Svelto) {
  /* ICON */
  var Icons = {
    // Maps each icon to its ligature/html entity, required for a  custom icon font
    'car': 'directions_car',
    'chevron-left': 'chevron_left',
    'chevron-right': 'chevron_right',
    'clock': 'access_time',
    'close': 'close',
    'cutlery': 'restaurant',
    'dots-horizontal': 'more_horiz',
    'emoticon': 'insert_emoticon',
    'flag': 'flag',
    'gym': 'fitness_center',
    'heart': 'favorite',
    'objects': 'devices_other',
    'page-first': 'first_page',
    'page-last': 'last_page',
    'paw': 'pets',
    'search': 'search'
  };

  var Icon = function Icon(name) {
    return Icons[name];
  };
  /* EXPORT */


  Svelto.Icons = Icons;
  Svelto.Icon = Icon;
})(Svelto.$, Svelto._, Svelto); // @optional ./vendor/datatables.js
// @require core/svelto/svelto.js
// @require widgets/icon/icon.js

/* DATATABLES */


(function ($, _, Svelto, Icon, DataTable) {
  /* CHECK IF LOADED */
  if (!DataTable) return;
  /* DEFAULTS */

  _.extend(DataTable.defaults, {
    dom: '<"card-header bordered"' + '<"multiple center" l <"spacer hidden-xs-down"> f>' + '>' + '<"card-block bordered table-wrapper" t>' + '<"card-footer bordered"' + '<"multiple center" i <"spacer hidden-xs-down"> p>' + '>',
    autoWidth: false,
    lengthMenu: [[10, 25, 50, 100, 250], [10, 25, 50, 100, 250]],
    pageLength: 10,
    pagingType: 'simple_numbers_no_ellipses',
    renderer: 'svelto',
    drawCallback: function drawCallback() {
      $(this).widgetize();
    },
    initComplete: function initComplete() {
      $(this).closest('.datatable-wrapper').widgetize();
    }
  });

  _.extend(DataTable.defaults.oLanguage, {
    sInfo: 'Entries _START_-_END_ of _TOTAL_',
    sInfoEmpty: 'No entries to show',
    sInfoFiltered: ' (_MAX_ total)',
    sLengthMenu: '_MENU_<label>Show <strong><span class="select-value">10</span></strong> entries</label>',
    sSearch: "<div class=\"multiple joined no-separators\">_INPUT_<div class=\"label compact bordered\"><i class=\"icon\">" + Icon('search') + "</i></div></div>",
    sSearchPlaceholder: 'Search...'
  });

  _.extend(DataTable.defaults.oLanguage.oPaginate, {
    sFirst: "<i class=\"icon\">" + Icon('page-first') + "</i>",
    sPrevious: "<i class=\"icon\">" + Icon('chevron-left') + "</i>",
    sNext: "<i class=\"icon\">" + Icon('chevron-right') + "</i>",
    sLast: "<i class=\"icon\">" + Icon('page-last') + "</i>"
  });

  _.extend(DataTable.ext.classes, {
    sFilter: 'datatable-filter',
    sFilterInput: 'bordered',
    sInfo: 'datatable-info',
    sLength: 'datatable-length button bordered select',
    sLengthSelect: '',
    sPageButton: 'button bordered compact',
    sPageButtonActive: 'active highlighted',
    sPageButtonDisabled: 'disabled',
    sPaging: 'datatable-pagination pagination multiple joined ',
    // Not a type, `pagingType` will get attached after this
    sProcessing: 'datatable-processing',
    sRowEmpty: 'datatable-row-empty',
    sScrollBody: 'datatable-scroll-body',
    sScrollFoot: 'datatable-scroll-foot',
    sScrollFootInner: 'datatable-scroll-foot-inner',
    sScrollHead: 'datatable-scroll-head',
    sScrollHeadInner: 'datatable-scroll-head-inner',
    sScrollWrapper: 'datatable-scroll',
    sSortAsc: 'sortable sort-asc',
    sSortColumn: 'sort-',
    sSortDesc: 'sortable sort-desc',
    sSortable: 'sortable',
    sSortableAsc: 'sort-asc-disabled',
    sSortableDesc: 'sort-desc-disabled',
    sSortableNone: 'sort-disabled',
    sStripeEven: 'even',
    sStripeOdd: 'odd',
    sTable: 'datatable',
    sWrapper: 'datatable-wrapper card bordered limited centered'
  });
  /* PAGER */


  DataTable.ext.pager.numbers_length = 5;

  DataTable.ext.pager.simple_numbers_no_ellipses = function (page, pages) {
    var blocks = DataTable.ext.pager.numbers_length,
        halfBlocks = Math.floor(blocks / 2),
        numbers;

    if (pages <= blocks) {
      numbers = _.range(0, pages);
    } else if (page <= halfBlocks) {
      numbers = _.range(0, blocks);
    } else if (page >= pages - 1 - halfBlocks) {
      numbers = _.range(pages - blocks, pages);
    } else {
      numbers = _.range(page - halfBlocks, page + halfBlocks + 1);
    }

    numbers.DT_el = false;
    return ['previous', numbers, 'next'];
  };
  /* RENDERER */


  DataTable.ext.renderer.pageButton.svelto = function (settings, previous, idx, buttons, page, pages) {
    /* VARIABLES */
    var api = new DataTable.Api(settings),
        classes = settings.oClasses,
        lang = settings.oLanguage.oPaginate,
        aria = settings.oLanguage.oAria.paginate || {},
        counter = 0;
    /* ATTACH */

    var attach = function attach(container, buttons) {
      /* CLICK HANDLER */
      var clickHandler = function clickHandler(event) {
        event.preventDefault();
        if ($(event.currentTarget).hasClass(classes.sPageButtonDisabled) || api.page() === event.data.action) return;
        api.page(event.data.action).draw('page');
      };
      /* CONTENT */


      for (var i = 0, l = buttons.length; i < l; i++) {
        var button = buttons[i];

        if (_.isArray(button)) {
          attach(container, button);
          continue;
        }

        var btnText = '',
            btnClasses = button;

        switch (button) {
          case 'ellipsis':
            btnText = "<i class=\"icon\">" + Icon('dots-horizontal') + "</i>";
            break;

          case 'first':
            if (page === 0) continue;
            btnText = lang.sFirst;
            break;

          case 'previous':
            if (page === 0) continue;
            btnText = lang.sPrevious;
            break;

          case 'next':
            if (pages === 0 || page === pages - 1) continue;
            btnText = lang.sNext;
            break;

          case 'last':
            if (pages === 0 || page === pages - 1) continue;
            btnText = lang.sLast;
            break;

          default:
            btnText = button + 1;
            btnClasses += page === button ? ' ' + classes.sPageButtonActive : '';
            break;
        }

        var node = $('<div>', {
          'aria-controls': settings.sTableId,
          'aria-label': aria[button],
          'data-dt-idx': counter,
          'tabindex': settings.iTabIndex,
          'class': classes.sPageButton + ' ' + btnClasses,
          'id': idx === 0 && typeof button === 'string' ? settings.sTableId + '_' + button : null
        }).html(btnText).appendTo(container);

        if (button !== 'ellipsis') {
          settings.oApi._fnBindAction(node, {
            action: button
          }, clickHandler);
        }

        counter++;
      }
    };
    /* FOCUS */


    var $previous = $(previous),
        activeIDX = $previous.find(document.activeElement).data('dt-idx');
    attach($previous.empty(), buttons);

    if (activeIDX) {
      $previous.find('[data-dt-idx=' + activeIDX + ']').trigger('focus');
    }
  };
  /* EXPORT */


  Svelto.DataTable = DataTable;
})(Svelto.$, Svelto._, Svelto, Svelto.Icon, Svelto.$.fn.dataTable); // @require ./config.js
// @require core/widget/widget.js
//TODO: Add a spinnerOverlay when processing
//TODO: Proxy all `*.dt` events as `dt:*`
//TODO: Test in all browsers
//TODO: Maybe add `autofocus` capabilities
//FIXME: We actually `require` Selectable, but requiring it creates a circular dependency...

/* DATATABLES */


(function ($, _, Svelto, Widgets, Factory, DataTable) {
  /* CHECK IF LOADED */
  if (!DataTable) return;
  /* CONFIG */

  var config = {
    name: 'dt',
    plugin: true,
    selector: 'table.datatable',
    options: {
      select: false,
      // Select rows, even after a draw occurs -- basically supporting deferred loading

      /*
              {
                column: 0, // Index of the column used for finding rows to select
                value: 'value', // Selecting rows with this value in the appropriate column
                values: [] // Selecting rows with one of this values in the appropriate column
              }
      */
      datas: {
        select: 'select'
      },
      selectors: {
        wrapper: '.datatable-wrapper',
        length: '.datatable-length select'
      },
      keystrokes: {
        'ctmd + shift + left': ['page', 'first'],
        'ctmd + left': ['page', 'previous'],
        'ctmd + right': ['page', 'next'],
        'ctmd + shift + right': ['page', 'last']
      }
    }
  };
  /* DATATABLE */

  var DT =
  /*#__PURE__*/
  function (_Widgets$Widget22) {
    _inheritsLoose(DT, _Widgets$Widget22);

    function DT() {
      return _Widgets$Widget22.apply(this, arguments) || this;
    }

    /* WIDGETIZE */
    DT.widgetize = function widgetize(ele) {
      if (!$.isVisible(ele)) return;
      $(ele).dataTable().dt();
    };
    /* SPECIAL */


    var _proto40 = DT.prototype;

    _proto40._variables = function _variables() {
      this.$table = this.$element;
      this.$wrapper = this.$table.closest(this.options.selectors.wrapper);
      this.$length = this.$wrapper.find(this.options.selectors.length);
      this._api = this.$table.DataTable();
    };

    _proto40._init = function _init() {
      this.options.select = this.$table.data(this.options.datas.select) || this.options.select;
    };

    _proto40._events = function _events() {
      this.___keydown();

      this.___select();
    };

    _proto40._destroy = function _destroy() {
      this.$wrapper.remove();
    };
    /* KEYDOWN */


    _proto40.___keydown = function ___keydown() {
      this._onHover(this.$wrapper, [$.$document, 'keydown', this.__keydown]);
    };
    /* SELECT */


    _proto40.___select = function ___select() {
      if (!_.isPlainObject(this.options.select)) return;

      this._on(true, 'draw.dt', this.__select);
    };

    _proto40.__select = function __select(event, data) {
      this._defer(function () {
        // So that Selectable's listeners get triggered first //FIXME: Ugly
        if (this.$table.selectable('get').length) return;
        var column = this.options.select.column,
            values = this.options.select.values || [this.options.select.value],
            rows = data.aoData.filter(function (row) {
          return values.includes(row._aData[column]);
        });
        if (!rows.length) return;
        var trs = rows.map(function (row) {
          return row.nTr;
        });
        $(trs).addClass(Widgets.Selectable.config.options.classes.selected);
        this.$table.trigger('change'); // In order to make other widgets (Selectable etc.) adjust for this
      });
    };
    /* API */


    _proto40.api = function api(method) {
      var _api;

      for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key8 = 1; _key8 < _len7; _key8++) {
        args[_key8 - 1] = arguments[_key8];
      }

      return (_api = this._api)[method].apply(_api, args);
    };

    _proto40.page = function page(_page, row) {
      // `page` and `row` are 0-index numbers, `page` can optionally be a string supported by Datatables
      if (!_.isString(_page)) {
        _page = _.isNumber(_page) && !_.isNaN(_page) ? _page : Math.floor(row / this.$length.val());
        if (_.isNaN(_page)) return this.api('page');
        if (_page === this.api('page')) return;
      }

      this.api('page', _page);
      this.api('draw', false);
    };

    return DT;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(DT, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.DataTable); // @require lib/emojify/emojify.js
// @require widgets/icon/icon.js
// @require widgets/storable/storable.js


(function ($, _, Svelto, Widgets, Factory, Icon, Pointer, EmojiData, Emoji) {
  /* CONFIG */
  var config = {
    name: 'emojipicker',
    plugin: true,
    selector: '.emojipicker',
    templates: {
      base: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="tabs emojipicker card bordered">';
        print(Svelto.Templates.Emojipicker.triggers(o));
        print(Svelto.Templates.Emojipicker.containers(o));
        print(Svelto.Templates.Emojipicker.footer(o));
        __p += '</div>';
        return __p;
      },
      triggers: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="tabs-triggers emojipicker-triggers card-header bordered">';
        print(Svelto.Templates.Emojipicker.triggerMain(o));

        for (var i = 0, l = o.data.categories.length; i < l; i++) {
          ;
          print(Svelto.Templates.Emojipicker.trigger({
            options: o,
            category: o.data.categories[i]
          }));
        }

        ;
        __p += '</div>';
        return __p;
      },
      trigger: function (o) {
        var __t,
            __p = '';

        __p += '<div class="button" title="' + ((__t = o.category.title) == null ? '' : __t) + '"><i class="icon">' + ((__t = Svelto.Icon(o.category.icon)) == null ? '' : __t) + '</i></div>';
        return __p;
      },
      triggerMain: function (o) {
        var __t,
            __p = '';

        __p += '<div class="button" title="Search & Frequent"><i class="icon">' + ((__t = Svelto.Icon('clock')) == null ? '' : __t) + '</i></div>';
        return __p;
      },
      containers: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="tabs-containers emojipicker-containers card-block">';
        print(Svelto.Templates.Emojipicker.containerMain(o));

        for (var i = 0, l = o.data.categories.length; i < l; i++) {
          ;
          print(Svelto.Templates.Emojipicker.container({
            options: o,
            category: o.data.categories[i]
          }));
        }

        ;
        __p += '</div>';
        return __p;
      },
      container: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="container">';
        print(Svelto.Templates.Emojipicker.emojis({
          emojis: o.category.emojis,
          tone: o.options.tone
        }));
        __p += '</div>';
        return __p;
      },
      containerMain: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="container main"><input autofocus name="search" type="search" class="gray fluid" placeholder="Search emoji">';
        print(Svelto.Templates.Emojipicker.search(o));
        print(Svelto.Templates.Emojipicker.frequent(o));
        __p += '</div>';
        return __p;
      },
      search: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="search-section section">';

        if (!o.search.emojis.length) {
          ;
          __p += '<div class="search-emojis emojis empty">No emoji found</div>';
        } else {
          ;
          __p += '<div class="search-emojis emojis">';
          print(Svelto.Templates.Emojipicker.emojis({
            emojis: o.search.emojis,
            tone: o.tone
          }));
          __p += '</div>';
        }

        ;
        __p += '</div>';
        return __p;
      },
      frequent: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="frequent-section section">';

        if (!o.frequent.emojis.length) {
          ;
          __p += '<div class="frequent-emojis emojis empty">No emoji used recently</div>';
        } else {
          ;
          __p += '<div class="frequent-emojis emojis">';
          print(Svelto.Templates.Emojipicker.emojis({
            emojis: o.frequent.emojis,
            tones: o.frequent.tones
          }));
          __p += '</div>';
        }

        ;
        __p += '</div>';
        return __p;
      },
      footer: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="emojipicker-footer card-footer bordered">';
        print(Svelto.Templates.Emojipicker.preview({
          emoji: o.data.emojis[o.preview.id],
          tone: o.preview.tone
        }));
        print(Svelto.Templates.Emojipicker.tones(o));
        __p += '</div>';
        return __p;
      },
      preview: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="emojipicker-preview"><div class="multiple center-y no-wrap"><div class="enlarged">';
        print(Svelto.Emoji.encode(o.emoji.id, o.tone));
        __p += '</div><div class="multiple vertical joined texts"><div class="title" title="' + ((__t = o.emoji.name) == null ? '' : __t) + '">' + ((__t = o.emoji.name) == null ? '' : __t) + '</div><div class="short-names">' + ((__t = [o.emoji.id].concat(o.emoji.alts || []).map(Svelto.Emoji.encode).join(' ')) == null ? '' : __t) + '</div></div></div></div>';
        return __p;
      },
      tones: function (o) {
        var __t,
            __p = '';

        __p += '<div class="emojipicker-tones"><div class="multiple center-x joined"><div class="emojipicker-tone"></div><div class="emojipicker-tone"></div><div class="emojipicker-tone"></div><div class="emojipicker-tone"></div><div class="emojipicker-tone"></div><div class="emojipicker-tone"></div></div></div>';
        return __p;
      },
      emojis: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="multiple emojis">';
        print(o.emojis.map(function (emoji, index) {
          return Svelto.Emoji.encode(emoji, o.tone || o.tones[index]);
        }).join(' '));
        __p += '</div>';
        return __p;
      }
    },
    options: {
      data: undefined,
      tone: Emoji.options.tone,
      make: {
        // Options passed to Emoji.make
        css: 'actionable',
        sprite: true
      },
      preview: {
        id: 'grinning',
        tone: Emoji.options.tone
      },
      frequent: {
        limit: 126,
        emojis: [],
        tones: [],
        rank: []
      },
      search: {
        limit: 126,
        emojis: [],
        query: undefined
      },
      classes: {
        searching: 'searching',
        previewing: 'previewing',
        toneActive: 'active',
        emojified: 'emojified'
      },
      selectors: {
        emoji: 'i.emoji',
        tonables: '.container:not(.main) i.emoji[data-tonable="true"]',
        input: 'input',
        preview: '.emojipicker-preview',
        enlarged: '.enlarged',
        tones: '.emojipicker-tone',
        search: '.search-section',
        frequent: '.frequent-section',
        containers: {
          wrapper: '.emojipicker-containers',
          all: '.emojipicker-containers > *'
        }
      },
      callbacks: {
        pick: _.noop
      }
    }
  };
  /* EMOJI PICKER */

  var Emojipicker =
  /*#__PURE__*/
  function (_Widgets$Storable2) {
    _inheritsLoose(Emojipicker, _Widgets$Storable2);

    function Emojipicker() {
      return _Widgets$Storable2.apply(this, arguments) || this;
    }

    /* WIDGETIZE */
    Emojipicker.widgetize = function widgetize(ele, Widget) {
      EmojiData.get().then(function (data) {
        Widget.config.options.data = data;
        $.widget.get(ele, Widget);
      });
    };
    /* SPECIAL */


    var _proto41 = Emojipicker.prototype;

    _proto41._make = function _make() {
      if (!this.$element.is(':empty')) return;

      var picker = this._template('base', this.options);

      $(picker).replaceAll(this.$element).widgetize();
      return false;
    };

    _proto41._variables = function _variables() {
      _Widgets$Storable2.prototype._variables.call(this);

      this.$picker = this.$element;
      this.$input = this.$picker.find(this.options.selectors.input);
      this.$preview = this.$picker.find(this.options.selectors.preview);
      this.$tones = this.$picker.find(this.options.selectors.tones);
      this.$containersWrapper = this.$picker.find(this.options.selectors.containers.wrapper);
      this.$containers = this.$picker.find(this.options.selectors.containers.all);
      this.$search = this.$picker.find(this.options.selectors.search);
      this.$frequent = this.$picker.find(this.options.selectors.frequent);
      this._tabsInstance = this.$picker.tabs('instance');
      this._lazilyEmojified = {};
    };

    _proto41._init = function _init() {
      this._updateToneIndicator();

      this._frequentRestore();
    };

    _proto41._events = function _events() {
      this.___lazyEmojify();

      this.___emojiTap();

      this.___toneTap();

      this.___preview();

      this.___search();
    };
    /* LAZI EMOJIFY */


    _proto41.___lazyEmojify = function ___lazyEmojify() {
      this._on(true, 'tabs:change', this.__lazyEmojify);
    };

    _proto41.__lazyEmojify = function __lazyEmojify() {
      var _this20 = this;

      var index = this._tabsInstance.get();

      if (!index || this._lazilyEmojified[index]) return;
      var $container = this.$containers.eq(index);
      $container.emojify(this.options.make).then(function () {
        return $container.addClass(_this20.options.classes.emojified);
      });
      this._lazilyEmojified[index] = true;
    };
    /* EMOJI */


    _proto41.___emojiTap = function ___emojiTap() {
      this._on(Pointer.tap, this.options.selectors.emoji, this.__emojiTap);
    };

    _proto41.__emojiTap = function __emojiTap(event) {
      var $emoji = $(event.target).closest(this.options.selectors.emoji),
          emoji = $emoji.data('id'),
          tone = Number($emoji.data('tone')),
          data = {
        emoji: emoji,
        tone: tone
      };

      this._frequentUpdate(emoji, tone);

      this._trigger('pick', data);
    };
    /* TONE */


    _proto41.___toneTap = function ___toneTap() {
      this._on(this.$tones, Pointer.tap, this.__toneTap);
    };

    _proto41.__toneTap = function __toneTap(event) {
      var tone = this.$tones.get().indexOf(event.currentTarget) + 1;
      if (tone === this.options.tone) return;
      this._previousTone = this.options.tone;
      this.options.tone = tone;

      this._updateTone();
    };

    _proto41._updateTone = function _updateTone() {
      this._updateToneEmojis();

      this._updateToneIndicator();
    };

    _proto41._updateToneEmojis = function _updateToneEmojis() {
      var _this21 = this;

      var $tonables = this.$picker.find(this.options.selectors.tonables),
          tone = this.options.tone;
      $tonables.get().forEach(function (emoji) {
        var id = emoji.getAttribute('data-id');
        Emoji.make(id, tone, _this21.options.make).then(function (replacement) {
          return $(replacement).replaceAll(emoji);
        });
      });
    };

    _proto41._updateToneIndicator = function _updateToneIndicator() {
      if (this._previousTone) {
        this.$tones.eq(this._previousTone - 1).removeClass(this.options.classes.toneActive);
      }

      this.$tones.eq(this.options.tone - 1).addClass(this.options.classes.toneActive);
    };
    /* PREVIEW */


    _proto41.___preview = function ___preview() {
      this._on(Pointer.move, this.options.selectors.emoji, this._frames(this.__previewMove.bind(this)));

      this._on(true, this.$containersWrapper, Pointer.leave, this.__previewLeave);
    };

    _proto41.__previewMove = function __previewMove(event) {
      var $emoji = $(event.target).closest(this.options.selectors.emoji),
          id = $emoji.data('id'),
          tone = $emoji.data('tone');
      if (this.options.preview.id === id && this.options.preview.tone === tone) return;
      this.options.preview.id = id;
      this.options.preview.tone = tone;

      this._updatePreview();

      this._togglePreview(true);
    };

    _proto41.__previewLeave = function __previewLeave(event) {
      this._togglePreview(false);
    };

    _proto41._updatePreview = function _updatePreview() {
      var _this22 = this;

      var options = {
        emoji: this.options.data.emojis[this.options.preview.id],
        tone: this.options.preview.tone
      };
      var $preview = $(this._template('preview', options)),
          $enlarged = $preview.find(this.options.selectors.enlarged);
      $enlarged.emojify(this.options.make).then(function () {
        _this22.$preview = $preview.replaceAll(_this22.$preview);
      });
    };

    _proto41._togglePreview = function _togglePreview(force) {
      if (force === void 0) {
        force = !this._previewing;
      }

      if (!!force !== this._previewing) {
        this._previewing = !!force;
        this.$picker.toggleClass(this.options.classes.previewing, this._previewing);
      }
    };
    /* SEARCH */


    _proto41.___search = function ___search() {
      this._on(this.$input, 'change cut paste keyup', this.__search);
    };

    _proto41.__search = function __search() {
      var _this23 = this;

      var query = this.$input.val();
      if (query === this.options.search.query) return;
      this.options.search.query = query;
      var emojis = [];

      this._toggleSearch(!!query);

      if (query) {
        if (query[0] === '-') {
          emojis = ['-1'];
        } else if (query[0] === '+') {
          emojis = ['+1'];
        } else if (query.match(Emoji.options.regexes.emoticon)) {
          var found = this.options.data.emoticons[query];
          emojis = found ? _.castArray(found) : [];
        } else {
          var keywords = query.toLowerCase().split(/[\s,_-]+/);

          for (var id in this.options.data.emojis) {
            var emoji = this.options.data.emojis[id],
                match = true;

            for (var i = 0, l = keywords.length; i < l; i++) {
              if (emoji.tags.indexOf(keywords[i]) === -1) {
                match = false;
                break;
              }
            }

            if (match) {
              emojis.push(id);
              if (emojis.length === this.options.search.limit) break;
            }
          }
        }
      }

      this.options.search.emojis = emojis;
      var $search = $(this._template('search', this.options));
      $search.emojify(this.options.make).then(function () {
        _this23.$search = $search.replaceAll(_this23.$search);
      });
    };

    _proto41._toggleSearch = function _toggleSearch(force) {
      if (force === void 0) {
        force = !this._searching;
      }

      if (!!force !== this._searching) {
        this._searching = !!force;
        this.$picker.toggleClass(this.options.classes.searching, this._searching);
      }
    };
    /* FREQUENT */


    _proto41._frequentDefault = function _frequentDefault() {
      var emojis = ['smile', 'smiley', 'grin', 'joy', 'wink', 'smirk', 'sunglasses', 'relaxed', 'blush', 'heart_eyes', 'kissing_heart', 'thinking_face', 'sweat_smile', 'unamused', 'cry', 'pensive', 'weary', 'sob', 'rage', '+1', '-1', 'v', 'ok_hand', 'muscle', 'clap', 'pray', 'see_no_evil', '100', 'tada', 'heart'];
      return emojis.map(function (emoji) {
        return [emoji, 1, 1];
      });
    };

    _proto41._frequentRefresh = function _frequentRefresh() {
      var _this24 = this;

      this.options.frequent.emojis = this.options.frequent.rank.map(_.first);
      this.options.frequent.tones = this.options.frequent.rank.map(function (entry) {
        return entry[1];
      });
      var $frequent = $(this._template('frequent', this.options));
      $frequent.emojify(this.options.make).then(function () {
        _this24.$frequent = $frequent.replaceAll(_this24.$frequent);
      });
    };

    _proto41._frequentUpdate = function _frequentUpdate(emoji, tone) {
      if (tone === void 0) {
        tone = this.options.tone;
      }

      var rank = this.options.frequent.rank,
          entry = rank.find(function (entry) {
        return entry[0] === emoji && entry[1] === tone;
      });

      if (entry) {
        entry[2]++;
      } else {
        rank.push([emoji, tone, 1]);
      }

      rank = rank.sort(function (a, b) {
        return b[2] - a[2];
      }).slice(0, this.options.frequent.limit);
      this.options.frequent.rank = rank;

      this._storageSet('frequent', rank, 2592000); // 1 Month


      this._frequentRefresh();
    };

    _proto41._frequentRestore = function _frequentRestore() {
      var rank = this._storageGet('frequent') || this._frequentDefault();

      if (rank && !_.isEqualJSON(this.options.frequent.rank, rank)) {
        this.options.frequent.rank = rank;
      }

      this._frequentRefresh();
    };

    return Emojipicker;
  }(Widgets.Storable);
  /* FACTORY */


  Factory.make(Emojipicker, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Icon, Svelto.Pointer, Svelto.EmojiData, Svelto.Emoji); // @require ../picker.js


(function ($, _, Svelto, Widgets, Factory, EmojiData) {
  /* CONFIG */
  var config = {
    name: 'emojipickerPopover',
    options: {
      classes: {
        popover: 'popover'
      },
      callbacks: {
        beforeopen: _.noop,
        open: _.noop,
        beforeclose: _.noop,
        close: _.noop
      }
    }
  };
  /* EMOJIPICKER POPOVER */

  var EmojipickerPopover =
  /*#__PURE__*/
  function (_Widgets$Widget23) {
    _inheritsLoose(EmojipickerPopover, _Widgets$Widget23);

    function EmojipickerPopover() {
      return _Widgets$Widget23.apply(this, arguments) || this;
    }

    var _proto42 = EmojipickerPopover.prototype;

    /* SPECIAL */
    _proto42._variables = function _variables() {
      this._initiated = false;
    };
    /* CLOSE */


    _proto42.___close = function ___close() {
      this._on(true, 'popover:close', this.__close);
    };

    _proto42.__close = function __close() {
      this.$element.detach();

      this._reset();
    };
    /* API */


    _proto42.toggle = function toggle(anchor) {
      var _this25 = this;

      if (this.isLocked()) {
        if (this.element) {
          this.unlock();
        } else {
          return this.open(anchor); //FIXME: What is this for??? (it actually gets called, if an error gets thrown the first time)
        }
      } else {
        if (!this.element) {
          this.lock();
          EmojiData.get().then(function (data) {
            Widgets.Emojipicker.config.options.data = data;
            _this25.$element = $.widget.new(Widgets.Emojipicker).$element.addClass(_this25.options.classes.popover);
            _this25.element = _this25.$element[0];

            _this25.toggle(anchor);
          });
          return;
        }
      }

      if (!this.$element.isAttached()) {
        this.$layout.append(this.$element);
      }

      if (!this._initiated) {
        this.$element.popover({
          callbacks: {
            beforeopen: function beforeopen() {
              return _this25._trigger('beforeopen');
            },
            open: function open() {
              return _this25._trigger('open');
            },
            beforeclose: function beforeclose() {
              return _this25._trigger('beforeclose');
            },
            close: function close() {
              return _this25._trigger('close');
            }
          }
        });
        this._initiated = true;
      }

      this.$element.popover('toggle', undefined, anchor);

      this.___close();
    };

    return EmojipickerPopover;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(EmojipickerPopover, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.EmojiData); // @require ./popover.js


(function ($, _, Svelto, EmojipickerPopover) {
  /* VARIABLES */
  var instance;
  /* HELPER */

  $.emojipickerPopover = function (anchor) {
    if (!instance) {
      instance = new EmojipickerPopover();
    }

    instance.toggle(anchor);
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.EmojipickerPopover); // @require ./popover_helper.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'emojipickerPopoverTrigger',
    plugin: true,
    selector: '.emojipicker-popover-trigger',
    options: {
      callbacks: {
        beforetrigger: _.noop,
        trigger: _.noop
      }
    }
  };
  /* EMOJIPICKER POPOVER TRIGGER */

  var EmojipickerPopoverTrigger =
  /*#__PURE__*/
  function (_Widgets$Widget24) {
    _inheritsLoose(EmojipickerPopoverTrigger, _Widgets$Widget24);

    function EmojipickerPopoverTrigger() {
      return _Widgets$Widget24.apply(this, arguments) || this;
    }

    var _proto43 = EmojipickerPopoverTrigger.prototype;

    /* SPECIAL */
    _proto43._events = function _events() {
      this.___tap();
    };
    /* TAP */


    _proto43.___tap = function ___tap() {
      this._on(Pointer.tap, this.trigger);
    };
    /* API */


    _proto43.trigger = function trigger() {
      this._trigger('beforetrigger');

      $.emojipickerPopover(this.element);

      this._trigger('trigger');
    };

    return EmojipickerPopoverTrigger;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(EmojipickerPopoverTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'infobar',
    plugin: true,
    selector: '.infobar',
    options: {
      callbacks: {
        close: _.noop
      }
    }
  };
  /* INFOBAR */

  var Infobar =
  /*#__PURE__*/
  function (_Widgets$Widget25) {
    _inheritsLoose(Infobar, _Widgets$Widget25);

    function Infobar() {
      return _Widgets$Widget25.apply(this, arguments) || this;
    }

    var _proto44 = Infobar.prototype;

    /* SPECIAL */
    _proto44._variables = function _variables() {
      this.$infobar = this.$element;
    };
    /* API */


    _proto44.close = function close() {
      this.$infobar.detach();

      this._trigger('close');
    };

    return Infobar;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Infobar, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/browser/browser.js
// @require core/widget/widget.js
// It supports only `box-sizing: border-box` inputs


(function ($, _, Svelto, Widgets, Factory, Browser) {
  /* CONFIG */
  var config = {
    name: 'inputAutogrow',
    plugin: true,
    selector: 'input.autogrow',
    options: {
      minWidth: 1,
      // So that the cursor will get displayed even when empty
      callbacks: {
        change: _.noop
      }
    }
  };
  /* INPUT AUTOGROW */

  var InputAutogrow =
  /*#__PURE__*/
  function (_Widgets$Widget26) {
    _inheritsLoose(InputAutogrow, _Widgets$Widget26);

    function InputAutogrow() {
      return _Widgets$Widget26.apply(this, arguments) || this;
    }

    /* WIDGETIZE */
    InputAutogrow.widgetize = function widgetize(ele, Widget) {
      /* SKIP IE/EDGE */
      //FIXME: input.scrollWidth is not supported by them, find another reliable way of implementing it
      if (Browser.is.ie || Browser.is.edge) return;
      /* WIDGETIZE */

      $.widget.get(ele, Widget);
    };
    /* SPECIAL */


    var _proto45 = InputAutogrow.prototype;

    _proto45._variables = function _variables() {
      this.$input = this.$element;
      this.$tempInput = $('<input>').css({
        'position': 'fixed',
        'visibility': 'hidden',
        'padding': 0,
        'min-width': 0,
        'width': 0
      });
    };

    _proto45._init = function _init() {
      this._update();
    };

    _proto45._events = function _events() {
      this.___inputChange();
    };
    /* PRIVATE */


    _proto45._getNeededWidth = function _getNeededWidth() {
      this.$tempInput.css('font', this.$input.css('font')).val(this.$input.val()).appendTo(this.$layout);
      var width = this.$tempInput[0].scrollWidth;
      this.$tempInput.detach();
      return Math.max(this.options.minWidth, width);
    };
    /* INPUT / CHANGE */


    _proto45.___inputChange = function ___inputChange() {
      this._on(true, 'input change', this._update);
    };
    /* UPDATE */


    _proto45._update = function _update() {
      var width = this._getNeededWidth();

      if (width === this._prevWidth) return;
      this._prevWidth = width;
      this.$input.width(width);

      this._trigger('change');
    };

    return InputAutogrow;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(InputAutogrow, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Browser); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'inputFileNames',
    plugin: true,
    selector: '.input-file-names',
    options: {
      placeholder: 'Select a file...',
      callbacks: {
        change: _.noop
      }
    }
  };
  /* INPUT FILE NAMES */

  var InputFileNames =
  /*#__PURE__*/
  function (_Widgets$Widget27) {
    _inheritsLoose(InputFileNames, _Widgets$Widget27);

    function InputFileNames() {
      return _Widgets$Widget27.apply(this, arguments) || this;
    }

    var _proto46 = InputFileNames.prototype;

    /* SPECIAL */
    _proto46._variables = function _variables() {
      this.$names = this.$element;
      this.$input = this.$names.closest('label').find('input[type="file"]');
      this.input = this.$input[0];
    };

    _proto46._init = function _init() {
      this.options.placeholder = this.$names.text() || this.options.placeholder;

      this._update();
    };

    _proto46._events = function _events() {
      this.___change();
    };
    /* PRIVATE */


    _proto46._getNames = function _getNames() {
      var names = [];

      for (var i = 0, l = this.input.files.length; i < l; i++) {
        names.push(this.input.files[i].name);
      }

      return names;
    };

    _proto46._getText = function _getText() {
      var names = this._getNames();

      return names.length ? names.join(', ') : this.options.placeholder;
    };
    /* CHANGE */


    _proto46.___change = function ___change() {
      this._on(true, this.$input, 'change', this._update);
    };
    /* UPDATE */


    _proto46._update = function _update() {
      var previous = this.$names.text(),
          current = this._getText();

      if (previous === current) return;
      this.$names.text(current);

      this._trigger('change');
    };

    return InputFileNames;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(InputFileNames, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/animations/animations.js
// @require widgets/autofocusable/autofocusable.js
//FIXME: Multiple open modals (read it: multiple backdrops) are not well supported


(function ($, _, Svelto, Widgets, Factory, Pointer, Animations) {
  /* CONFIG */
  var config = {
    name: 'modal',
    plugin: true,
    selector: '.modal',
    options: {
      scroll: {
        disable: true // Disable scroll when the modal is open

      },
      classes: {
        show: 'show',
        open: 'open',
        backdrop: {
          show: 'modal-backdrop obscured-show obscured',
          open: 'obscured-open'
        }
      },
      animations: {
        open: Animations.normal,
        close: Animations.normal
      },
      keystrokes: {
        'esc': 'close'
      },
      callbacks: {
        beforeopen: _.noop,
        open: _.noop,
        beforeclose: _.noop,
        close: _.noop
      }
    }
  };
  /* MODAL */

  var Modal =
  /*#__PURE__*/
  function (_Widgets$Autofocusabl3) {
    _inheritsLoose(Modal, _Widgets$Autofocusabl3);

    function Modal() {
      return _Widgets$Autofocusabl3.apply(this, arguments) || this;
    }

    var _proto47 = Modal.prototype;

    /* SPECIAL */
    _proto47._variables = function _variables() {
      this.$modal = this.$element;
      this.modal = this.element;
      this.$backdrop = $.$html;
      this._isOpen = this.$modal.hasClass(this.options.classes.open);
    };

    _proto47._events = function _events() {
      if (this._isOpen) {
        this.___keydown();

        this.___tap();

        this.___route();
      }
    };

    _proto47._destroy = function _destroy() {
      this.close();
    };
    /* TAP */


    _proto47.___tap = function ___tap() {
      this._on(true, $.$html, Pointer.tap, this.__tap);
    };

    _proto47.__tap = function __tap(event) {
      if (this.isLocked() || event.isDefaultPrevented() || event.isPropagationStopped() || !$.isAttached(event.target) || $(event.target).closest(this.$modal).length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      this.close();
    };
    /* ROUTE */


    _proto47.__route = function __route() {
      if (this._isOpen && !$.isAttached(this.modal)) {
        this.close();
      }
    };
    /* API */


    _proto47.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto47.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this._isOpen;
      }

      return this[force ? 'open' : 'close']();
    };

    _proto47.open = function (_open) {
      function open() {
        return _open.apply(this, arguments);
      }

      open.toString = function () {
        return _open.toString();
      };

      return open;
    }(function () {
      if (this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.open.bind(open));
      this.lock();
      this._isOpen = true;

      this._trigger('beforeopen');

      if (this.options.scroll.disable) this.$layout.disableScroll();

      this._frame(function () {
        this.$modal.addClass(this.options.classes.show);
        this.$backdrop.addClass(this.options.classes.backdrop.show);

        this._frame(function () {
          this.$modal.addClass(this.options.classes.open);
          this.$backdrop.addClass(this.options.classes.backdrop.open);
          this.autofocus();
          this.unlock();

          this._trigger('open');
        });
      });

      this.___keydown();

      this.___tap();

      this.___route();
    });

    _proto47.close = function close() {
      if (!this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.close.bind(this));
      this.lock();
      this._isOpen = false;

      this._trigger('beforeclose');

      this._frame(function () {
        this.$modal.removeClass(this.options.classes.open);
        this.$backdrop.removeClass(this.options.classes.backdrop.open);

        this._delay(function () {
          this.$modal.removeClass(this.options.classes.show);
          this.$backdrop.removeClass(this.options.classes.backdrop.show);
          this.autoblur();
          if (this.options.scroll.disable) this.$layout.enableScroll();
          this.unlock();

          this._trigger('close');
        }, this.options.animations.close);
      });

      this._reset();
    };

    return Modal;
  }(Widgets.Autofocusable);
  /* FACTORY */


  Factory.make(Modal, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Animations); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'numbox',
    plugin: true,
    selector: '.numbox',
    options: {
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      // Only multiples of `step` are valid values
      datas: {
        min: 'min',
        max: 'max',
        step: 'step'
      },
      selectors: {
        decreaser: '.numbox-decreaser',
        increaser: '.numbox-increaser',
        input: 'input'
      },
      keystrokes: {
        'left, down': 'decrease',
        'right, up': 'increase'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* NUMBOX */

  var Numbox =
  /*#__PURE__*/
  function (_Widgets$Widget28) {
    _inheritsLoose(Numbox, _Widgets$Widget28);

    function Numbox() {
      return _Widgets$Widget28.apply(this, arguments) || this;
    }

    var _proto48 = Numbox.prototype;

    /* SPECIAL */
    _proto48._variables = function _variables() {
      this.$numbox = this.$element;
      this.$input = this.$numbox.find(this.options.selectors.input);
      this.$decreaser = this.$numbox.find(this.options.selectors.decreaser);
      this.$increaser = this.$numbox.find(this.options.selectors.increaser);
      this._prevValue = false;
    };

    _proto48._init = function _init() {
      /* VARIABLES */
      var value = this.$input.val();
      /* OPTIONS */

      this.options.min = Number(this.$numbox.data(this.options.datas.min) || this.options.min);
      this.options.max = Number(this.$numbox.data(this.options.datas.max) || this.options.max);
      this.options.step = Number(this.$numbox.data(this.options.datas.step) || this.options.step);
      this.options.value = this._sanitizeValue(value || this.options.value);
      /* UPDATE */

      if (Number(value) !== this.options.value) {
        this._update();
      } else {
        this._updateButtons();
      }
    };

    _proto48._events = function _events() {
      this.___inputChange();

      this.___keydown();

      this.___increaser();

      this.___decreaser();
    };
    /* PRIVATE */


    _proto48._sanitizeValue = function _sanitizeValue(value) {
      value = Number(value);
      value = _.isNaN(value) ? 0 : _.roundCloser(value, this.options.step);
      return _.clamp(value, this.options.min, this.options.max);
    };
    /* INPUT / CHANGE */


    _proto48.___inputChange = function ___inputChange() {
      this._on(true, this.$input, 'input change', this.__inputChange);
    };

    _proto48.__inputChange = function __inputChange() {
      this.set(this.$input.val());
    };
    /* KEYDOWN */


    _proto48.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* INCREASER */


    _proto48.___increaser = function ___increaser() {
      this._on(this.$decreaser, Pointer.tap, this.decrease);
    };
    /* DECREASER */


    _proto48.___decreaser = function ___decreaser() {
      this._on(this.$increaser, Pointer.tap, this.increase);
    };
    /* UPDATE */


    _proto48._updateInput = function _updateInput() {
      this.$input.val(this.options.value).trigger('change');
    };

    _proto48._updateButtons = function _updateButtons() {
      var isMin = this.options.value === this.options.min,
          isMax = this.options.value === this.options.max;
      this.$decreaser.toggleClass(this.options.classes.disabled, isMin);
      this.$increaser.toggleClass(this.options.classes.disabled, isMax);
    };

    _proto48._update = function _update() {
      this._updateInput();

      this._updateButtons();
    };
    /* API */


    _proto48.get = function get() {
      return this.options.value;
    };

    _proto48.set = function set(value) {
      value = Number(value);

      if (!_.isNaN(value)) {
        value = this._sanitizeValue(value);

        if (value !== this.options.value) {
          this._prevValue = this.options.value;
          this.options.value = value;

          this._update();

          this._trigger('change');

          return;
        }
      }
      /* RESETTING IF WE ALTERED THE INPUT VALUE */


      if (this.$input.val() !== String(this.options.value)) {
        this._updateInput();
      }
    };

    _proto48.increase = function increase() {
      this.set(this.options.value + this.options.step);
    };

    _proto48.decrease = function decrease() {
      this.set(this.options.value - this.options.step);
    };

    return Numbox;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Numbox, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require core/animations/animations.js
// @require widgets/autofocusable/autofocusable.js


(function ($, _, Svelto, Widgets, Factory, Animations) {
  /* CONFIG */
  var config = {
    name: 'overlay',
    plugin: true,
    selector: '.overlay',
    options: {
      classes: {
        show: 'show',
        open: 'open',
        parent: {
          show: 'overlay-parent-show',
          open: 'overlay-parent-open'
        }
      },
      animations: {
        open: Animations.fast,
        close: Animations.fast
      },
      keystrokes: {
        'esc': 'close'
      },
      callbacks: {
        open: _.noop,
        close: _.noop
      }
    }
  };
  /* OVERLAY */

  var Overlay =
  /*#__PURE__*/
  function (_Widgets$Autofocusabl4) {
    _inheritsLoose(Overlay, _Widgets$Autofocusabl4);

    function Overlay() {
      return _Widgets$Autofocusabl4.apply(this, arguments) || this;
    }

    var _proto49 = Overlay.prototype;

    /* SPECIAL */
    _proto49._variables = function _variables() {
      this.$overlay = this.$element;
      this._isOpen = this.$overlay.hasClass(this.options.classes.open);
    };

    _proto49._events = function _events() {
      if (this._isOpen) {
        this.___keydown();
      }
    };

    _proto49._destroy = function _destroy() {
      this.close();
    };
    /* PARENT */


    _proto49._getParent = function _getParent() {
      if (!this.$parent) {
        this.$parent = this.$overlay.parent();
      }

      return this.$parent;
    };
    /* KEYDOWN */


    _proto49.___keydown = function ___keydown() {
      this._onHover(true, [$.$document, 'keydown', this.__keydown]); //FIXME: Using _onHover in an undocumented way, the first value was supposed to be $element

    };
    /* API */


    _proto49.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto49.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this._isOpen;
      }

      return this[force ? 'open' : 'close']();
    };

    _proto49.open = function open() {
      if (this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.open.bind(this));
      this.lock();
      this._isOpen = true;

      this._frame(function () {
        this.$overlay.addClass(this.options.classes.show);

        this._getParent().addClass(this.options.classes.parent.show);

        this._frame(function () {
          this.$overlay.addClass(this.options.classes.open);

          this._getParent().addClass(this.options.classes.parent.open);

          this.autofocus();
          this.unlock();

          this._trigger('open');
        });
      });

      this.___keydown();
    };

    _proto49.close = function close() {
      if (!this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.close.bind(this));
      this.lock();
      this._isOpen = false;

      this._frame(function () {
        this.$overlay.removeClass(this.options.classes.open);

        this._getParent().removeClass(this.options.classes.parent.open);

        this._delay(function () {
          this.$overlay.removeClass(this.options.classes.show);

          this._getParent().removeClass(this.options.classes.parent.show);

          this.autoblur();
          this.unlock();

          this._trigger('close');
        }, this.options.animations.close);
      });

      this._reset();
    };

    return Overlay;
  }(Widgets.Autofocusable);
  /* FACTORY */


  Factory.make(Overlay, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations); // @require core/widget/widget.js
//FIXME: Doesn't actually check if the scroll event happened along the same direction of the key that has been pressed
// It can detect scroll only on the document


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'pager',
    plugin: true,
    selector: '.pager',
    options: {
      selectors: {
        previous: '.previous',
        next: '.next'
      },
      keystrokes: {
        'left': 'previous',
        'right': 'next'
      }
    }
  };
  /* PAGER */

  var Pager =
  /*#__PURE__*/
  function (_Widgets$Widget29) {
    _inheritsLoose(Pager, _Widgets$Widget29);

    function Pager() {
      return _Widgets$Widget29.apply(this, arguments) || this;
    }

    var _proto50 = Pager.prototype;

    /* SPECIAL */
    _proto50._variables = function _variables() {
      this.$pager = this.$element;
    };

    _proto50._events = function _events() {
      this.___keydown();
    };
    /* KEYDOWN */


    _proto50.__keydown = function __keydown(event) {
      var _this26 = this;

      if (this.isLocked() || $.isFocused(document.activeElement)) return;
      this.lock();
      this._scrolled = false;

      this.___scroll();

      this._delay(function () {
        // Waiting for the `scroll` event to fire and giving other event handlers precedence
        _this26.unlock();

        if (_this26._scrolled) return;

        _this26.___scrollReset();

        if (event.isDefaultPrevented() || event.isPropagationStopped()) return; // Probably another widget was listening for the same event, and it should take priority over this

        _Widgets$Widget29.prototype.__keydown.call(_this26, event);
      }, 50); //FIXME: Not exactly a solid implementation

    };
    /* SCROLL */


    _proto50.___scroll = function ___scroll() {
      this._one(true, $.$document, 'scroll', this.__scroll);
    };

    _proto50.___scrollReset = function ___scrollReset() {
      this._off($.$document, 'scroll', this.__scroll);
    };

    _proto50.__scroll = function __scroll() {
      this._scrolled = true;
    };
    /* API */


    _proto50.previous = function previous() {
      var $previous = this.$pager.find(this.options.selectors.previous);
      if (!$previous.length) return;
      $previous[0].click();
    };

    _proto50.next = function next() {
      var $next = this.$pager.find(this.options.selectors.next);
      if (!$next.length) return;
      $next[0].click();
    };

    return Pager;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Pager, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require widgets/pager/pager.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'pagination',
    plugin: true,
    selector: '.pagination'
  };
  /* PAGINATION */

  var Pagination =
  /*#__PURE__*/
  function (_Widgets$Pager) {
    _inheritsLoose(Pagination, _Widgets$Pager);

    function Pagination() {
      return _Widgets$Pager.apply(this, arguments) || this;
    }

    return Pagination;
  }(Widgets.Pager);
  /* FACTORY */


  Factory.make(Pagination, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/animations/animations.js
// @require lib/directions/directions.js
// @require widgets/autofocusable/autofocusable.js
//FIXME: Multiple open panels (read it: multiple backdrops) are not well supported
//TODO: Replace flickable support with a smooth moving panel, so operate on drag


(function ($, _, Svelto, Widgets, Factory, Breakpoints, Breakpoint, Pointer, Animations, Directions) {
  /* CONFIG */
  var config = {
    name: 'panel',
    plugin: true,
    selector: '.panel',
    options: {
      direction: 'left',
      type: 'default',
      // `default`, `slim`, `fullscreen` (officially supported) or any other implemented type
      pin: false,
      // If is a valid key of `Breakpoints` it will get auto pinned/unpinned when we are above or below that breakpoint
      flick: {
        open: false,
        close: true,
        threshold: 20 // Amount of pixels close to the window border where the opening flick gesture should be considered intentional

      },
      scroll: {
        disable: true // Disable scroll when the panel is open

      },
      classes: {
        show: 'show',
        open: 'open',
        pinned: 'pinned',
        flickable: 'flickable',
        // As a side effect it will gain a `Svelto.Flickable` instance, therefor it will also trigger `flickable:flick` events, that are what we want
        backdrop: {
          show: 'panel-backdrop obscured-show obscured',
          open: 'obscured-open',
          pinned: 'panel-backdrop-pinned'
        },
        layout: {
          show: 'panel-layout'
        }
      },
      datas: {
        direction: 'direction',
        type: 'type'
      },
      animations: {
        open: Animations.normal,
        close: Animations.normal
      },
      keystrokes: {
        'esc': '__esc'
      },
      callbacks: {
        beforeopen: _.noop,
        open: _.noop,
        beforeclose: _.noop,
        close: _.noop
      }
    }
  };
  /* PANEL */

  var Panel =
  /*#__PURE__*/
  function (_Widgets$Autofocusabl5) {
    _inheritsLoose(Panel, _Widgets$Autofocusabl5);

    function Panel() {
      return _Widgets$Autofocusabl5.apply(this, arguments) || this;
    }

    var _proto51 = Panel.prototype;

    /* SPECIAL */
    _proto51._variables = function _variables() {
      var _this27 = this;

      this.$panel = this.$element;
      this.panel = this.element;
      this.$backdrop = $.$html;
      this.options.direction = Directions.get().find(function (direction) {
        return _this27.$panel.hasClass(direction);
      }) || this.options.direction;
      this.options.flick.open = this.options.flick.open || this.$panel.hasClass(this.options.classes.flickable);

      if (this.options.pin) {
        var _up, _down;

        _.merge(this.options.breakpoints, {
          up: (_up = {}, _up[this.options.pin] = '_autopin', _up),
          down: (_down = {}, _down[this.options.pin] = '_autounpin', _down)
        });
      }

      this._isOpen = this.$panel.hasClass(this.options.classes.open);
      this._isPinned = this.$panel.hasClass(this.options.classes.pinned);
      this.options.type = this.$panel.data(this.options.datas.type) || this.options.type;
      this.layoutPinnedClass = Widgets.Panel.config.name + '-' + this.options.type + '-' + this.options.classes.pinned + '-' + this.options.direction;
    };

    _proto51._events = function _events() {
      if (this._isOpen) {
        this.___breakpoint();

        this.___tap();

        this.___keydown();

        this.___panelFlick();

        this.___route();
      } else {
        this.___layoutFlick();

        this.___panelFlick();
      }

      this.__breakpoint();
    };

    _proto51._destroy = function _destroy() {
      this.close();
    };
    /* TAP */


    _proto51.___tap = function ___tap() {
      this._on(true, $.$html, Pointer.tap, this.__tap);
    };

    _proto51.__tap = function __tap(event) {
      if (this.isLocked() || this._isPinned || event.isDefaultPrevented() || event.isPropagationStopped() || !$.isAttached(event.target) || $(event.target).closest(this.$panel).length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      this.close();
    };
    /* ESC */


    _proto51.___keydown = function ___keydown() {
      //TODO: Listen to `keydown` only within the layout, so maybe just if the layout is hovered or focused (right?)
      this._on(true, $.$document, 'keydown', this.__keydown);
    };

    _proto51.__esc = function __esc() {
      if (this._isPinned) return null;
      this.close();
    };
    /* LAYOUT FLICK */


    _proto51.___layoutFlick = function ___layoutFlick() {
      if (!this.options.flick.open) return;
      this.$layout.flickable();

      this._on(this.$layout, 'flickable:flick', this.__layoutFlick);
    };

    _proto51.__layoutFlick = function __layoutFlick(event, data) {
      if (this._isOpen) return;
      if (data.direction !== Directions.getOpposite(this.options.direction)) return;
      var layoutOffset = this.$layout.offset();

      switch (this.options.direction) {
        case 'left':
          if (data.startXY.x - layoutOffset.left > this.options.flick.threshold) return;
          break;

        case 'right':
          if (this.$layout.outerWidth() + layoutOffset.left - data.startXY.x > this.options.flick.threshold) return;
          break;

        case 'top':
          if (data.startXY.y - layoutOffset.top > this.options.flick.threshold) return;
          break;

        case 'bottom':
          if (this.$layout.outerHeight() + layoutOffset.top - data.startXY.y > this.options.flick.threshold) return;
          break;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      this.open();
    };
    /* PANEL FLICK */


    _proto51.___panelFlick = function ___panelFlick() {
      if (!this.options.flick.close) return;
      this.$panel.flickable();

      this._on(true, 'flickable:flick', this.__panelFlick);
    };

    _proto51.__panelFlick = function __panelFlick(event, data) {
      if (!this._isOpen) return;
      if (data.direction !== this.options.direction) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      this.close();
    };
    /* ROUTE */


    _proto51.__route = function __route() {
      if (this._isOpen && !$.isAttached(this.panel)) {
        this.close();
      }
    };
    /* AUTO PINNING */


    _proto51._autopin = function _autopin() {
      if (this._isPinned) return;
      this._wasAutoOpened = !this._isOpen;
      this.pin();
    };

    _proto51._autounpin = function _autounpin() {
      if (!this._isPinned) return;
      this[this._wasAutoOpened ? 'close' : 'unpin']();
    };
    /* API */


    _proto51.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto51.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this._isOpen;
      }

      return this[force ? 'open' : 'close']();
    };

    _proto51.open = function open() {
      if (this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.open.bind(this));
      this.lock();
      this._isOpen = true;

      this._trigger('beforeopen');

      if (!this._isPinned) {
        if (this.options.pin && Breakpoints.widths[Breakpoint.current] >= Breakpoints.widths[this.options.pin]) {
          this.pin();
        } else if (this.options.scroll.disable) {
          this.$layout.disableScroll();
        }
      }

      this._frame(function () {
        this.$panel.addClass(this.options.classes.show);
        this.$backdrop.addClass(this.options.classes.backdrop.show);
        this.$layout.addClass(this.options.classes.layout.show);

        this._frame(function () {
          this.$panel.addClass(this.options.classes.open);
          this.$backdrop.addClass(this.options.classes.backdrop.open);
          this.autofocus();
          this.unlock();

          this._trigger('open');
        });
      });

      this._reset();

      this.___breakpoint();

      this.___tap();

      this.___keydown();

      this.___panelFlick();

      this.___route();
    };

    _proto51.close = function close() {
      if (!this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.close.bind(this));
      this.unpin();
      this.lock();
      this._isOpen = false;

      this._trigger('beforeclose');

      this._frame(function () {
        this.$panel.removeClass(this.options.classes.open);
        this.$backdrop.removeClass(this.options.classes.backdrop.open);

        this._delay(function () {
          this.$panel.removeClass(this.options.classes.show);
          this.$backdrop.removeClass(this.options.classes.backdrop.show);
          this.$layout.removeClass(this.options.classes.layout.show);
          this.autoblur();
          if (this.options.scroll.disable) this.$layout.enableScroll();
          this.unlock();

          this._trigger('close');
        }, this.options.animations.close);
      });

      this._reset();

      this.___breakpoint();

      this.___layoutFlick();
    };
    /* PINNING */


    _proto51.isPinned = function isPinned() {
      return this._isPinned;
    };

    _proto51.togglePin = function togglePin(force) {
      if (force === void 0) {
        force = !this._isPinned;
      }

      if (!!force !== this._isPinned) {
        this[force ? 'pin' : 'unpin']();
      }
    };

    _proto51.pin = function pin() {
      if (this._isPinned) return null;
      if (this.isLocked()) return this.whenUnlocked(this.pin.bind(this));
      this._isPinned = true;
      this.$panel.addClass(this.options.classes.pinned);
      this.$layout.addClass(this.layoutPinnedClass);
      this.$backdrop.addClass(this.options.classes.backdrop.pinned);

      if (this._isOpen) {
        this.$layout.enableScroll();
      } else {
        this.open();
      }
    };

    _proto51.unpin = function unpin() {
      if (!this._isOpen || !this._isPinned) return null;
      if (this.isLocked()) return this.whenUnlocked(this.unpin.bind(this));
      this._isPinned = false;
      this.$layout.removeClass(this.layoutPinnedClass).disableScroll();

      this._delay(function () {
        this.$backdrop.removeClass(this.options.classes.backdrop.pinned);
        this.$panel.removeClass(this.options.classes.pinned);
      }, this.options.animations.close);
    };

    return Panel;
  }(Widgets.Autofocusable);
  /* FACTORY */


  Factory.make(Panel, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Breakpoints, Svelto.Breakpoint, Svelto.Pointer, Svelto.Animations, Svelto.Directions); // @require lib/embedded_css/embedded_css.js
// @require lib/positionate/positionate.js
// @require lib/touching/touching.js
// @require widgets/autofocusable/autofocusable.js
//FIXME: Close it if after a `route` event if the trigger element is no longer visible


(function ($, _, Svelto, Widgets, Factory, Pointer, EmbeddedCSS, Animations) {
  /* CONFIG */
  var config = {
    name: 'popover',
    plugin: true,
    selector: '.popover',
    options: {
      contentChangeEvents: 'change datepicker:change datepicker:render editor:fullscreen editor:unfullscreen editor:preview editor:unpreview inputautogrow:change tabs:change tablehelper:change tagbox:change textareaautogrow:change timeago:change',
      // When one of these events are triggered update the position because the content probably changed
      mustCloseEvents: 'modal:beforeopen modal:beforeclose panel:beforeopen panel:beforeclose',
      //FIXME: This way opening/closing a modal/panel from inside a popover while still keeping it open is not supported
      parentChangeEvents: 'popover:close modal:close panel:close editor:fullscreen editor:unfullscreen',
      // When one of these events happen, and the target is an anchestor of the anchor, we close the popover //FIXME: Ugly
      positionate: {},
      // Extending `$.positionate` options
      spacing: {
        affixed: 0,
        fullscreen: 0,
        noTip: 5,
        normal: 12
      },
      classes: {
        anchorDirection: 'popover-anchor-$1',
        noTip: 'no-tip',
        affixed: 'affixed',
        fullscreen: 'fullscreen',
        fullscreenRequest: 'fullscreen-request',
        moving: 'moving',
        show: 'show',
        open: 'open'
      },
      animations: {
        open: Animations.fast,
        close: Animations.fast
      },
      keystrokes: {
        'esc': 'close'
      },
      callbacks: {
        beforeopen: _.noop,
        open: _.noop,
        beforeclose: _.noop,
        close: _.noop
      }
    }
  };
  /* POPOVER */

  var Popover =
  /*#__PURE__*/
  function (_Widgets$Autofocusabl6) {
    _inheritsLoose(Popover, _Widgets$Autofocusabl6);

    function Popover() {
      return _Widgets$Autofocusabl6.apply(this, arguments) || this;
    }

    var _proto52 = Popover.prototype;

    /* SPECIAL */
    _proto52._variables = function _variables() {
      this.$popover = this.$element;
      this.popover = this.$popover[0];
      this.$popover.addClass(this.guc);
      this.hasTip = !this.$popover.hasClass(this.options.classes.noTip);
      this.isAffixed = this.$popover.hasClass(this.options.classes.affixed);
      this.isFullscreen = this.$popover.hasClass(this.options.classes.fullscreen);
      this._isOpen = this.$popover.hasClass(this.options.classes.open);
    };

    _proto52._events = function _events() {
      if (this._isOpen) {
        this.___contentChange();

        this.___mustClose();

        this.___parentChange();

        this.___resize();

        this.___parentsScroll();

        this.___layoutTap();

        this.___keydown();
      }
    };

    _proto52._destroy = function _destroy() {
      this.close();
    };
    /* CONTENT CHANGE */


    _proto52.___contentChange = function ___contentChange() {
      this._on(true, this.options.contentChangeEvents, this._positionate);
    };
    /* MUST CLOSE */


    _proto52.___mustClose = function ___mustClose() {
      this._on(true, this.$layout, this.options.mustCloseEvents, this.close);
    };
    /* PARENT CHANGE */


    _proto52.___parentChange = function ___parentChange() {
      this._on(true, $.$document, this.options.parentChangeEvents, this.__parentChange);
    };

    _proto52.__parentChange = function __parentChange(event) {
      if (!this.$anchor || !event.target.contains(this.$anchor[0])) return;

      if (this.$anchor.isVisible()) {
        this._positionate();
      } else {
        this.close();
      }
    };
    /* RESIZE */


    _proto52.___resize = function ___resize() {
      this._on(true, $.$window, 'resize', this._frames(this._positionate.bind(this))); //FIXME: It should handle a generic parent `resize`-like event, not just on `$.$window`

    };
    /* PARENTS SCROLL */


    _proto52.___parentsScroll = function ___parentsScroll() {
      var $parents = this.$popover.parents().add(this.$anchor ? this.$anchor.parents() : undefined).add($.$window);

      this._on(true, $parents, 'scroll', this._frames(this._positionate.bind(this)));
    };
    /* LAYOUT TAP */


    _proto52.___layoutTap = function ___layoutTap() {
      this._on(true, this.$layout, Pointer.tap, this.__layoutTap);
    };

    _proto52.__layoutTap = function __layoutTap(event) {
      if (this.isLocked()) return;
      if (event.isDefaultPrevented() || event.isPropagationStopped()) return;
      if (event === this._openEvent || this.$popover.touching({
        point: $.eventXY(event, 'clientX', 'clientY')
      }).length) return event.stopImmediatePropagation();
      this.close();
    };
    /* ESC */


    _proto52.___keydown = function ___keydown() {
      //TODO: Listen to `keydown` only within the layout, so maybe just if the layout is hovered or focused (right?)
      this._on(true, $.$document, 'keydown', this.__keydown);
    };
    /* POSITIONATE */


    _proto52._positionate = function _positionate() {
      /* VARIABLES */
      var isFullscreenRequested = this.$popover.hasClass(this.options.classes.fullscreenRequest),
          noTip = this.$anchor && this.$anchor.hasClass(this.options.classes.noTip) || !this.hasTip || this.isAffixed || this.isFullscreen || isFullscreenRequested,
          spacing = this.isAffixed ? this.options.spacing.affixed : this.isFullscreen || isFullscreenRequested ? this.options.spacing.fullscreen : noTip ? this.options.spacing.noTip : this.options.spacing.normal;
      /* POSITIONATE */

      this.$popover.positionate(_.extend({
        $anchor: this.$anchor,
        pointer: noTip ? false : 'auto',
        spacing: spacing,
        callbacks: {
          change: this.__positionChange.bind(this)
        }
      }, this.options.positionate));
    };

    _proto52._toggleAnchorDirectionClass = function _toggleAnchorDirectionClass(direction, force) {
      if (!this.$anchor) return;
      this.$anchor.toggleClass(_.format(this.options.classes.anchorDirection, direction), force);
    };

    _proto52.__positionChange = function __positionChange(data) {
      /* ANCHOR CLASS */
      if (this._prevDirection !== data.direction) {
        if (this._prevDirection) {
          this._toggleAnchorDirectionClass(this._prevDirection, false);
        }

        this._toggleAnchorDirectionClass(data.direction, true);

        this._prevDirection = data.direction;
      }
    };
    /* API */


    _proto52.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto52.toggle = function toggle(force, anchor, event) {
      if (!_.isBoolean(force)) {
        force = anchor && (!this.$anchor || this.$anchor && this.$anchor[0] !== anchor) ? true : this.$prevAnchor || this.$anchor || 'point' in this.options.positionate ? !this._isOpen : false;
      }

      return this[force ? 'open' : 'close'](anchor, event);
    };

    _proto52.open = function open(anchor, event) {
      var _this28 = this;

      /* RESTORING ANCHOR */
      if (!anchor && this.$prevAnchor && !('point' in this.options.positionate) && !('$anchor' in this.options.positionate)) {
        anchor = this.$prevAnchor[0];
      }
      /* CHECKING */


      if ((!anchor || this._isOpen && this.$anchor && anchor === this.$anchor[0]) && !('point' in this.options.positionate) && !('$anchor' in this.options.positionate)) return null;
      if (this.isLocked()) return this.whenUnlocked(function () {
        return _this28.open(anchor, event);
      });
      /* VARIABLES */

      this.lock();
      this._isOpen = true;
      this._openEvent = event;
      this._wasMoving = false;
      /* PREVIOUS ANCHOR */

      if (this.$anchor) {
        this._toggleAnchorDirectionClass(this._prevDirection, false);

        this._prevDirection = false;
        this.$prevAnchor = this.$anchor;

        if (this._isOpen) {
          this._wasMoving = true;
          this.$popover.addClass(this.options.classes.moving);
        }
      }
      /* ANCHOR */


      this.$anchor = anchor ? $(anchor) : this.options.positionate.$anchor || false;
      /* BEFORE OPENING */

      this._trigger('beforeopen');
      /* OPENING */


      this._frame(function () {
        this.$popover.addClass('show');

        this._positionate();

        this._frame(function () {
          this.$popover.addClass(this.options.classes.open);
          this.autofocus();
          this.unlock();

          this._trigger('open');
        });
      });
      /* EVENTS */


      this._reset();

      this.___layoutTap();

      this.___keydown();

      this.___contentChange();

      this.___mustClose();

      this.___parentChange();

      this.___resize();

      this.___parentsScroll();
    };

    _proto52.close = function close() {
      if (!this._isOpen) return null;
      if (this.isLocked()) return this.whenUnlocked(this.close.bind(this));
      /* VARIABLES */

      this.lock();
      this._isOpen = false;
      /* ANCHOR */

      this._toggleAnchorDirectionClass(this._prevDirection, false);

      this._prevDirection = false;
      this.$prevAnchor = this.$anchor;
      this.$anchor = false;
      /* CLOSING */

      this._trigger('beforeclose');

      this._frame(function () {
        this.$popover.removeClass(this.options.classes.open);

        if (this._wasMoving) {
          this.$popover.removeClass(this.options.classes.moving);
        }

        this._delay(function () {
          this.$popover.removeClass(this.options.classes.show);
          this.autoblur();
          this.unlock();

          this._trigger('close');
        }, this.options.animations.close);
      });
      /* RESETTING */


      this._reset();
    };

    return Popover;
  }(Widgets.Autofocusable);
  /* FACTORY */


  Factory.make(Popover, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.EmbeddedCSS, Svelto.Animations);
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */


var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */


var Prism = function () {
  // Private helper vars
  var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;

  var _ = _self.Prism = {
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === 'Array') {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      type: function type(o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function clone(o) {
        var type = _.util.type(o);

        switch (type) {
          case 'Object':
            var clone = {};

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key]);
              }
            }

            return clone;

          case 'Array':
            // Check for existence for IE8
            return o.map && o.map(function (v) {
              return _.util.clone(v);
            });
        }

        return o;
      }
    },
    languages: {
      extend: function extend(id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function insertBefore(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type) {
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === 'Object') {
              _.languages.DFS(o[i], callback);
            } else if (_.util.type(o[i]) === 'Array') {
              _.languages.DFS(o[i], callback, i);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(async, callback) {
      var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');

      for (var i = 0, element; element = elements[i++];) {
        _.highlightElement(element, async === true, callback);
      }
    },
    highlightElement: function highlightElement(element, async, callback) {
      // Find language
      var language,
          grammar,
          parent = element;

      while (parent && !lang.test(parent.className)) {
        parent = parent.parentNode;
      }

      if (parent) {
        language = (parent.className.match(lang) || [, ''])[1];
        grammar = _.languages[language];
      } // Set language on the element, if not present


      element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

      parent = element.parentNode;

      if (/pre/i.test(parent.nodeName)) {
        parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
      }

      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      if (!code || !grammar) {
        _.hooks.run('complete', env);

        return;
      }

      _.hooks.run('before-highlight', env);

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function (evt) {
          env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);

          _.hooks.run('before-insert', env);

          env.element.innerHTML = env.highlightedCode;
          callback && callback.call(env.element);

          _.hooks.run('after-highlight', env);

          _.hooks.run('complete', env);
        };

        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

        _.hooks.run('before-insert', env);

        env.element.innerHTML = env.highlightedCode;
        callback && callback.call(element);

        _.hooks.run('after-highlight', env);

        _.hooks.run('complete', env);
      }
    },
    highlight: function highlight(text, grammar, language) {
      var tokens = _.tokenize(text, grammar);

      return Token.stringify(_.util.encode(tokens), language);
    },
    tokenize: function tokenize(text, grammar, language) {
      var Token = _.Token;
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      tokenloop: for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              lookbehindLength = 0,
              alias = pattern.alias;
          pattern = pattern.pattern || pattern;

          for (var i = 0; i < strarr.length; i++) {
            // Don’t cache length as it changes during the loop
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              break tokenloop;
            }

            if (str instanceof Token) {
              continue;
            }

            pattern.lastIndex = 0;
            var match = pattern.exec(str);

            if (match) {
              if (lookbehind) {
                lookbehindLength = match[1].length;
              }

              var from = match.index - 1 + lookbehindLength,
                  match = match[0].slice(lookbehindLength),
                  len = match.length,
                  to = from + len,
                  before = str.slice(0, from + 1),
                  after = str.slice(to + 1);
              var args = [i, 1];

              if (before) {
                args.push(before);
              }

              var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias);
              args.push(wrapped);

              if (after) {
                args.push(after);
              }

              Array.prototype.splice.apply(strarr, args);
            }
          }
        }
      }

      return strarr;
    },
    hooks: {
      all: {},
      add: function add(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function run(name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    }
  };

  var Token = _.Token = function (type, content, alias) {
    this.type = type;
    this.content = content;
    this.alias = alias;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == 'string') {
      return o;
    }

    if (_.util.type(o) === 'Array') {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join('');
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (env.type == 'comment') {
      env.attributes['spellcheck'] = 'true';
    }

    if (o.alias) {
      var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    _.hooks.run('wrap', env);

    var attributes = '';

    for (var name in env.attributes) {
      attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
    }

    return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
  };

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _self.Prism;
    } // In worker


    _self.addEventListener('message', function (evt) {
      var message = JSON.parse(evt.data),
          lang = message.language,
          code = message.code,
          immediateClose = message.immediateClose;

      _self.postMessage(JSON.stringify(_.util.encode(_.tokenize(code, _.languages[lang]))));

      if (immediateClose) {
        _self.close();
      }
    }, false);

    return _self.Prism;
  } // Get current script and highlight


  var script = document.getElementsByTagName('script');
  script = script[script.length - 1];

  if (script) {
    _.filename = script.src;

    if (document.addEventListener && !script.hasAttribute('data-manual')) {
      document.addEventListener('DOMContentLoaded', _.highlightAll);
    }
  }

  return _self.Prism;
}();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Prism;
} // hack for components to work correctly in node.js


if (typeof global !== 'undefined') {
  global.Prism = Prism;
}

;
Prism.languages.markup = {
  'comment': /<!--[\w\W]*?-->/,
  'prolog': /<\?[\w\W]+?\?>/,
  'doctype': /<!DOCTYPE[\w\W]+?>/,
  'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
  'tag': {
    pattern: /<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
        inside: {
          'punctuation': /[=>"']/
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
}; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = {
  'comment': /\/\*[\w\W]*?\*\//,
  'atrule': {
    pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
  'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
  'property': /(\b|\B)[\w-]+(?=\s*:)/i,
  'important': /\B!important\b/i,
  'function': /[-a-z0-9]+(?=\()/i,
  'punctuation': /[(){};:]/
};
Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'style': {
      pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
      inside: {
        'tag': {
          pattern: /<style[\w\W]*?>|<\/style>/i,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.css
      },
      alias: 'language-css'
    }
  });
  Prism.languages.insertBefore('inside', 'attr-value', {
    'style-attr': {
      pattern: /\s*style=("|').*?\1/i,
      inside: {
        'attr-name': {
          pattern: /^\s*style/i,
          inside: Prism.languages.markup.tag.inside
        },
        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
        'attr-value': {
          pattern: /.+/i,
          inside: Prism.languages.css
        }
      },
      alias: 'language-css'
    }
  }, Prism.languages.markup.tag);
}

;
Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true
  }],
  'string': /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /(\.|\\)/
    }
  },
  'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(true|false)\b/,
  'function': /[a-z0-9_]+(?=\()/i,
  'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend('clike', {
  'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
  'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
});
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
    lookbehind: true
  }
});
Prism.languages.insertBefore('javascript', 'class-name', {
  'template-string': {
    pattern: /`(?:\\`|\\?[^`])*`/,
    inside: {
      'interpolation': {
        pattern: /\$\{[^}]+\}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'script': {
      pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
      inside: {
        'tag': {
          pattern: /<script[\w\W]*?>|<\/script>/i,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.javascript
      },
      alias: 'language-javascript'
    }
  });
}

Prism.languages.js = Prism.languages.javascript; // @require core/widget/widget.js

(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'progressbar',
    plugin: true,
    selector: '.progressbar',
    templates: {
      base: function (o) {
        var __t,
            __p = '';

        __p += '<div class="progressbar ' + ((__t = o.striped ? 'striped' : '') == null ? '' : __t) + ' ' + ((__t = o.indeterminate ? 'indeterminate' : '') == null ? '' : __t) + ' ' + ((__t = o.labeled ? 'labeled' : '') == null ? '' : __t) + ' ' + ((__t = o.colors.off) == null ? '' : __t) + ' ' + ((__t = o.size) == null ? '' : __t) + ' ' + ((__t = o.css) == null ? '' : __t) + '"><div class="progressbar-highlight ' + ((__t = o.colors.on) == null ? '' : __t) + '"></div></div>';
        return __p;
      }
    },
    options: {
      value: 0,
      // Percentage
      colors: {
        // Colors to use for the progressbar
        on: '',
        // Color of `.progressbar-highlight`
        off: '' // Color of `.progressbar`

      },
      striped: false,
      // Draw striped over it
      indeterminate: false,
      // Indeterminate state
      labeled: false,
      // Draw a label inside
      decimals: 0,
      // Amount of decimals to round the label value to
      size: '',
      // Size of the progressbar: '', 'compact', 'slim'
      css: '',
      datas: {
        value: 'value',
        decimals: 'decimals'
      },
      selectors: {
        highlight: '.progressbar-highlight'
      },
      callbacks: {
        change: _.noop,
        empty: _.noop,
        full: _.noop
      }
    }
  };
  /* PROGRESSBAR */

  var Progressbar =
  /*#__PURE__*/
  function (_Widgets$Widget30) {
    _inheritsLoose(Progressbar, _Widgets$Widget30);

    function Progressbar() {
      return _Widgets$Widget30.apply(this, arguments) || this;
    }

    var _proto53 = Progressbar.prototype;

    /* SPECIAL */
    _proto53._variables = function _variables() {
      this.$progressbar = this.$element;
      this.$highlight = this.$progressbar.find(this.options.selectors.highlight);
    };

    _proto53._init = function _init() {
      /* OPTIONS */
      this.options.value = this._sanitizeValue(this.$progressbar.data(this.options.datas.value) || this.options.value);
      this.options.decimals = Number(this.$progressbar.data(this.options.datas.decimals) || this.options.decimals);
      /* UPDATE */

      this._update();
    };
    /* VALUE */


    _proto53._sanitizeValue = function _sanitizeValue(value) {
      var nr = Number(value);
      return _.clamp(_.isNaN(nr) ? 0 : nr, 0, 100);
    };

    _proto53._roundValue = function _roundValue(value) {
      return Number(value.toFixed(this.options.decimals));
    };
    /* UPDATE */


    _proto53._updateWidth = function _updateWidth() {
      this.$highlight.css('min-width', this.options.value + '%');
    };

    _proto53._updateLabel = function _updateLabel() {
      this.$highlight.attr("data-" + this.options.datas.value, this._roundValue(this.options.value) + '%');
    };

    _proto53._update = function _update() {
      this._updateWidth();

      this._updateLabel();
    };
    /* API */


    _proto53.get = function get() {
      return this.options.value;
    };

    _proto53.set = function set(value) {
      value = this._sanitizeValue(value);
      if (value === this.options.value) return;
      this.options.value = value;

      this._update();

      this._trigger('change');

      if (this.options.value === 0) {
        this._trigger('empty');
      } else if (this.options.value === 100) {
        this._trigger('full');
      }
    };

    return Progressbar;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Progressbar, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ./progressbar.js


(function ($, _, Svelto, Progressbar) {
  /* HELPER */
  $.progressbar = function (options) {
    options = _.isNumber(options) ? {
      value: options
    } : options;
    return new Progressbar(options);
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.Progressbar); // @require widgets/checkbox/checkbox.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'radio',
    plugin: true,
    selector: '.radio',
    options: {
      selectors: {
        input: 'input[type="radio"]'
      }
    }
  };
  /* RADIO */

  var Radio =
  /*#__PURE__*/
  function (_Widgets$Checkbox) {
    _inheritsLoose(Radio, _Widgets$Checkbox);

    function Radio() {
      return _Widgets$Checkbox.apply(this, arguments) || this;
    }

    var _proto54 = Radio.prototype;

    /* TAP */
    _proto54.__tap = function __tap(event) {
      if (event.target === this.input || $(event.target).is("label[for=\"" + this.inputId + "\"]")) return;
      if (this.$input.prop('checked')) return;
      this.$input.prop('checked', true).trigger('change');
    };

    return Radio;
  }(Widgets.Checkbox);
  /* FACTORY */


  Factory.make(Radio, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/animations/animations.js
// @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Animations, Pointer) {
  /* CONFIG */
  var config = {
    name: 'rails',
    plugin: true,
    selector: '.rails',
    options: {
      navigation: {
        hidable: true // Controls whether the navigation should be hidden when all the buttons are disabled

      },
      scroll: {
        speed: 200 // The distance scrolled when calling `left` or `right`

      },
      selectors: {
        start: '.rails-start',
        left: '.rails-left',
        right: '.rails-right',
        end: '.rails-end',
        navigation: '.rails-navigation, .rails-start, .rails-left, .rails-right, .rails-end',
        content: '.rails-content',
        active: '.rails-active'
      },
      animations: {
        scroll: Animations.fast
      },
      keystrokes: {
        'home, page_up': 'start',
        'left': 'left',
        'right': 'right',
        'end, page_down': 'end'
      }
    }
  };
  /* RAILS */

  var Rails =
  /*#__PURE__*/
  function (_Widgets$Widget31) {
    _inheritsLoose(Rails, _Widgets$Widget31);

    function Rails() {
      return _Widgets$Widget31.apply(this, arguments) || this;
    }

    var _proto55 = Rails.prototype;

    /* SPECIAL */
    _proto55._variables = function _variables() {
      this.$rails = this.$element;
      this.$start = this.$rails.find(this.options.selectors.start);
      this.$left = this.$rails.find(this.options.selectors.left);
      this.$right = this.$rails.find(this.options.selectors.right);
      this.$end = this.$rails.find(this.options.selectors.end);
      this.$navigation = this.$rails.find(this.options.selectors.navigation);
      this.$content = this.$rails.find(this.options.selectors.content);
      this.$active = this.$content.find(this.options.selectors.active);
    };

    _proto55._init = function _init() {
      this._scrollToElement(this.$active, false);

      this._updateNavigation();
    };

    _proto55._events = function _events() {
      this.___keydown();

      this.___resize();

      this.___scroll();

      this.___startTap();

      this.___leftTap();

      this.___rightTap();

      this.___endTap();
    };
    /* KEYDOWN */


    _proto55.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* START TAP */


    _proto55.___startTap = function ___startTap() {
      this._on(this.$start, Pointer.tap, this.start);
    };
    /* LEFT TAP */


    _proto55.___leftTap = function ___leftTap() {
      this._on(this.$left, Pointer.tap, this.left);
    };
    /* RIGHT TAP */


    _proto55.___rightTap = function ___rightTap() {
      this._on(this.$right, Pointer.tap, this.right);
    };
    /* END TAP */


    _proto55.___endTap = function ___endTap() {
      this._on(this.$end, Pointer.tap, this.end);
    };
    /* UPDATE */


    _proto55._updateNavigation = function _updateNavigation() {
      if (!this.$navigation.length) return;
      var contentRect = this.$content.getRect(),
          scrollLeft = this.$content[0].scrollLeft,
          isStart = scrollLeft === 0,
          isEnd = this.$content[0].scrollWidth - scrollLeft - contentRect.width <= 1; // If we use `0`, as we should it won't always trigger

      if (this.$start.length || this.$left.length) {
        this.$start.add(this.$left).toggleClass(this.options.classes.disabled, isStart);
      }

      if (this.$end.length || this.$right.length) {
        this.$end.add(this.$right).toggleClass(this.options.classes.disabled, isEnd);
      }

      if (this.options.navigation.hidable) {
        var hidable = isStart && isEnd;
        this.$navigation.toggleClass(this.options.classes.hidden, hidable);
      }
    };
    /* RESIZE */


    _proto55.___resize = function ___resize() {
      this._on(true, $.$window, 'resize', this._frames(this._updateNavigation.bind(this)));
    };
    /* SCROLL */


    _proto55.___scroll = function ___scroll() {
      this._on(true, this.$content, 'scroll', this._frames(this._updateNavigation.bind(this)));
    };

    _proto55._scroll = function _scroll(left, animate) {
      if (animate === void 0) {
        animate = true;
      }

      if (animate) {
        $.animateProp(this.$content[0], {
          scrollLeft: left
        }, {
          duration: this.options.animations.scroll
        });
      } else {
        this.$content[0].scrollLeft = left;
      }
    };

    _proto55._deltaScroll = function _deltaScroll(delta) {
      this._scroll(this.$content[0].scrollLeft + delta);
    };

    _proto55._scrollToElement = function _scrollToElement($element, animate) {
      if (!$element.length) return;
      var eleRect = $element.getRect(),
          contentRect = this.$content.getRect(),
          left = eleRect.left - contentRect.left + this.$content[0].scrollLeft + eleRect.width / 2 - contentRect.width / 2;

      this._scroll(left, animate);
    };
    /* API */


    _proto55.start = function start() {
      this._scroll(0);
    };

    _proto55.left = function left() {
      this._deltaScroll(-this.options.scroll.speed);
    };

    _proto55.right = function right() {
      this._deltaScroll(this.options.scroll.speed);
    };

    _proto55.end = function end() {
      this._scroll(this.$content[0].scrollWidth);
    };

    return Rails;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Rails, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations, Svelto.Pointer); // @require lib/fetch/fetch.js
// @require widgets/toast/toast.js
//FIXME: Crappy, not working ATM, maybe should get removed
//TODO: Support the use of the rater as an input, basically don't perform any ajax operation but instead update an input field
//TODO: Rewrite as a RemoteReaction widget maybe


(function ($, _, Svelto, Widgets, Factory, Pointer, fetch) {
  /* CONFIG */
  var config = {
    name: 'rater',
    plugin: true,
    selector: '.rater',
    templates: {
      base: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="rater">';
        print(Svelto.Templates.Rater.stars(o));
        __p += '</div>';
        return __p;
      },
      stars: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        for (var i = 1; i <= o.amount; i++) {
          ;
          __p += '<div class="rater-star ' + ((__t = o.value >= i ? 'active' : o.value >= i - 0.5 ? 'half-active' : '') == null ? '' : __t) + '"></div>';
        }

        ;
        return __p;
      }
    },
    options: {
      value: 0,
      amount: 5,
      url: false,
      rated: false,
      datas: {
        value: 'value',
        amount: 'amount',
        url: 'url'
      },
      classes: {
        rated: 'rated'
      },
      selectors: {
        star: '.rater-star'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* RATER */

  var Rater =
  /*#__PURE__*/
  function (_Widgets$Widget32) {
    _inheritsLoose(Rater, _Widgets$Widget32);

    function Rater() {
      return _Widgets$Widget32.apply(this, arguments) || this;
    }

    var _proto56 = Rater.prototype;

    /* SPECIAL */
    _proto56._variables = function _variables() {
      this.$rater = this.$element;
      this.$stars = this.$rater.find(this.options.selectors.star);
      this.doingAjax = false;
    };

    _proto56._init = function _init() {
      this.options.value = Number(this.$rater.data(this.options.datas.value)) || this.options.value;
      this.options.amount = Number(this.$rater.data(this.options.datas.amount)) || this.options.amount;
      this.options.url = Number(this.$rater.data(this.options.datas.url)) || this.options.url;
      this.options.rated = this.$rater.hasClass(this.options.classes.rated);
    };

    _proto56._events = function _events() {
      this.___tap();
    };
    /* TAP */


    _proto56.___tap = function ___tap() {
      if (!this.options.rated) {
        /* TAP */
        this._on(Pointer.tap, this.options.selectors.star, this.__tap);
      }
    };

    _proto56.__tap = function __tap(event) {
      if (!this.options.rated && !this.doingAjax && this.options.url) {
        var rating = this.$stars.index($(event.target).closest(this.$stars)) + 1;
        fetch({
          url: this.options.url,
          method: 'post',
          body: {
            rating: rating
          },
          beforesend: this.__beforesend.bind(this),
          error: this.__error.bind(this),
          success: this.__success.bind(this),
          complete: this.__complete.bind(this)
        });
      }
    };
    /* REQUEST HANDLERS */


    _proto56.__beforesend = function __beforesend() {
      this.doingAjax = true;
    };

    _proto56.__error =
    /*#__PURE__*/
    function () {
      var _error3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee35(res) {
        var message;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return fetch.getValue(res, 'message');

              case 2:
                _context35.t0 = _context35.sent;

                if (_context35.t0) {
                  _context35.next = 5;
                  break;
                }

                _context35.t0 = this.options.messages.error;

              case 5:
                message = _context35.t0;
                $.toast(message);

              case 7:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      return function __error(_x47) {
        return _error3.apply(this, arguments);
      };
    }();

    _proto56.__success =
    /*#__PURE__*/
    function () {
      var _success4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee36(res) {
        var resj;
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return fetch.getValue(res);

              case 2:
                resj = _context36.sent;

                if (resj) {
                  _context36.next = 5;
                  break;
                }

                return _context36.abrupt("return");

              case 5:
                if (!resj.error) {
                  _context36.next = 7;
                  break;
                }

                return _context36.abrupt("return", this.__error(res));

              case 7:
                _.merge(this.options, resj);

                this.$rater.html(this._template('stars', this.options));
                this.options.rated = true;

                this._trigger('change');

              case 11:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      return function __success(_x48) {
        return _success4.apply(this, arguments);
      };
    }();

    _proto56.__complete = function __complete() {
      this.doingAjax = false;
    };
    /* API */


    _proto56.get = function get() {
      return {
        value: this.options.value,
        amount: this.options.amount
      };
    };

    return Rater;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Rater, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.fetch); // @require ../remote.js
// @require core/colors/colors.js
// @require core/sizes/sizes.js
// @require lib/url/url.js
// @require widgets/toast/toast.js
//TODO: Add locking capabilities (Disable the ability to trigger the same action multiple times simultaneously)
//TODO: Add support for customizable `confirmation` option //TODO: Update also `selectable actions`
//FIXME: Not well written, maybe try to extend RemoteWidget, even though it was ment for a different kind of widgets
//FIXME: Clicking an error/success toast doesn't close it


(function ($, _, Svelto, Widgets, Factory, Colors, Sizes, fetch, URL) {
  /* CONFIG */
  var config = {
    name: 'remoteAction',
    options: {
      closingDelay: Widgets.Toast.config.options.ttl / 2,
      ajax: {
        cache: false,
        method: 'post'
      },
      confirmation: {
        // Options to pass to a confirmation toast, if falsy or `buttons.length === 0` we won't ask for confirmation. If a button as `isConfirmative` it will be used for confirmation, otherwise the last one will be picked
        body: 'Execute action?',
        buttons: [{
          text: 'Cancel'
        }, {
          text: 'Execute',
          color: Colors.secondary,
          isConfirmative: true
        }]
      },
      messages: {
        success: 'Done! A page refresh may be needed',
        refreshing: 'Done! Refreshing the page...',
        redirecting: 'Done! Redirecting...'
      },
      classes: {
        spinner: {
          color: Colors.white,
          size: Sizes.small,
          css: ''
        }
      }
    }
  };
  /* REMOTE ACTION */

  var RemoteAction =
  /*#__PURE__*/
  function (_Widgets$Remote3) {
    _inheritsLoose(RemoteAction, _Widgets$Remote3);

    function RemoteAction() {
      return _Widgets$Remote3.apply(this, arguments) || this;
    }

    var _proto57 = RemoteAction.prototype;

    /* TOAST */
    _proto57.___confirmationToast = function ___confirmationToast() {
      if (this.$toast) return;
      /* VARIABLES */

      var options = _.cloneDeep(this.options.confirmation),
          index = options.buttons.findIndex(function (button) {
        return button.isConfirmative;
      }),
          button = index >= 0 ? options.buttons[index] : _.last(options.buttons);
      /* ON CLICK */


      var _prevOnClick = button.onClick,
          instance = this;

      button.onClick = function () {
        instance.request(true);

        if (_.isFunction(_prevOnClick)) {
          _prevOnClick.apply(this, arguments);
        }

        return false;
      };
      /* OPENING */


      this._replaceToast(options);
    };

    _proto57.___loadingToast = function ___loadingToast() {
      this._replaceToast("<svg class=\"spinner " + this.options.classes.spinner.color + " " + this.options.classes.spinner.size + " " + this.options.classes.spinner.css + "\"><circle cx=\"1.625em\" cy=\"1.625em\" r=\"1.25em\"></svg>");
    };

    _proto57._replaceToast = function _replaceToast(options) {
      var instance = $.toast(_.isString(options) ? {
        body: options,
        autoplay: false
      } : _.extend({}, options, {
        autoplay: false
      }));
      instance.close();
      var $toast = instance.$element;

      if (this.$toast) {
        this.$toast.html($toast.html()).widgetize();
      } else {
        this.$toast = $toast;
        this.$toast.toast('open');
      }
    };

    _proto57._destroyToast = function _destroyToast(delay) {
      if (!this.$toast) return;

      this._delay(function () {
        this.$toast.toast('close');

        this._delay(function () {
          this.$toast = false;
        }, Widgets.Toast.config.options.animations.close);
      }, delay ? this.options.closingDelay : 0);
    };
    /* REQUEST HANDLERS */


    _proto57.__beforesend = function __beforesend(req) {
      if (this.isAborted()) return;

      this.___loadingToast();

      _Widgets$Remote3.prototype.__beforesend.call(this, req);
    };

    _proto57.__error =
    /*#__PURE__*/
    function () {
      var _error4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee37(res) {
        var message;
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!this.isAborted()) {
                  _context37.next = 2;
                  break;
                }

                return _context37.abrupt("return");

              case 2:
                _context37.next = 4;
                return fetch.getValue(res, 'message');

              case 4:
                _context37.t0 = _context37.sent;

                if (_context37.t0) {
                  _context37.next = 7;
                  break;
                }

                _context37.t0 = this.options.messages.error;

              case 7:
                message = _context37.t0;

                this._replaceToast(message);

                this._destroyToast(true);

                _Widgets$Remote3.prototype.__error.call(this, res);

              case 11:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      return function __error(_x49) {
        return _error4.apply(this, arguments);
      };
    }();

    _proto57.__success =
    /*#__PURE__*/
    function () {
      var _success5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee38(res) {
        var resj, destroyDelay, needsReload;
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                if (!this.isAborted()) {
                  _context38.next = 2;
                  break;
                }

                return _context38.abrupt("return");

              case 2:
                _context38.next = 4;
                return fetch.getValue(res);

              case 4:
                resj = _context38.sent;
                destroyDelay = true;

                if (!resj) {
                  _context38.next = 14;
                  break;
                }

                if (!resj.error) {
                  _context38.next = 11;
                  break;
                }

                return _context38.abrupt("return", this.__error(res));

              case 11:
                if (resj.refresh || URL.isEqual(resj.url, window.location.href)) {
                  this._replaceToast(resj.message || this.options.messages.refreshing);

                  location.reload();
                } else if (resj.url) {
                  // In order to redirect to another domain the protocol must be provided. For instance `https://www.domain.tld` will work while `www.domain.tld` won't
                  this._replaceToast(resj.message || this.options.messages.redirecting);

                  needsReload = URL.isEqual(resj.url, window.location.href, true); // Supporting #target changes

                  location.assign(URL.makeAbsolute(resj.url));

                  if (needsReload) {
                    location.reload();
                  }
                } else if (resj.noop) {
                  destroyDelay = false;
                } else {
                  this._replaceToast(resj.message || this.options.messages.success);
                }

              case 12:
                _context38.next = 15;
                break;

              case 14:
                this._replaceToast(this.options.messages.success);

              case 15:
                this._destroyToast(destroyDelay);

                _Widgets$Remote3.prototype.__success.call(this, res);

              case 17:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      return function __success(_x50) {
        return _success5.apply(this, arguments);
      };
    }();
    /* API OVERRIDES */


    _proto57.request = function request(_confirmation) {
      if (!_confirmation && this.options.confirmation && 'buttons' in this.options.confirmation && this.options.confirmation.buttons.length) {
        this.___confirmationToast();
      } else {
        _Widgets$Remote3.prototype.request.call(this);
      }
    };

    _proto57.abort = function abort() {
      this._destroyToast();

      _Widgets$Remote3.prototype.abort.call(this);
    };

    return RemoteAction;
  }(Widgets.Remote);
  /* FACTORY */


  Factory.make(RemoteAction, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Colors, Svelto.Sizes, Svelto.fetch, Svelto.URL); // @require ./action.js


(function ($, _, Svelto, RemoteAction) {
  /* HELPER */
  $.remoteAction = function (ajax) {
    new RemoteAction({
      ajax: ajax
    }).request();
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.RemoteAction); // @require ./loader.js
//TODO: Maybe namespace ajax-related options into an `ajax` key -> easier to read, harder to use


(function ($, _, Svelto, RemoteLoader) {
  /* DEFAULTS */
  var defaults = {
    template: function (o) {
      var __t,
          __p = '';

      __p += '<div class="remote-loader" data-' + ((__t = o.datas.method) == null ? '' : __t) + '="' + ((__t = o.method) == null ? '' : __t) + '" data-' + ((__t = o.datas.data) == null ? '' : __t) + '=\'' + ((__t = JSON.stringify(o.data)) == null ? '' : __t) + '\' data-' + ((__t = o.datas.url) == null ? '' : __t) + '="' + ((__t = o.url) == null ? '' : __t) + '"><svg class="spinner"><circle cx="1.625em" cy="1.625em" r="1.25em"></circle></svg></div>';
      return __p;
    },
    url: '',
    data: {
      text: 'text'
    },
    datas: RemoteLoader.config.options.datas,
    method: ''
  };
  /* HELPER */

  $.remoteLoader = function (options, $anchor, method) {
    if (method === void 0) {
      method = 'after';
    }

    // The method could me any valid jQuery method, like `before`, `prepend`, `append` or `after`

    /* OPTIONS */
    options = _.merge({}, $.remoteLoader.defaults, options);
    /* LOADER */

    var template = _.isFunction(options.template) ? options.template : _.template(options.template),
        html = template(options),
        $loader = $(html);
    $anchor[method]($loader);
    $loader.widgetize();
  };
  /* BINDING */


  $.remoteLoader.defaults = defaults;
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.RemoteLoader); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'remoteTrigger',
    options: {
      widget: false,
      // The `Remote` widget class to call
      ajax: {
        // Using as `new widget ( ajax )`
        cache: false,
        method: 'get'
      },
      attributes: {
        href: 'href' // In order to better support `a` elements (the data value has higher priority)

      },
      datas: {
        url: 'url',
        body: 'body',
        method: 'method'
      },
      callbacks: {
        beforetrigger: _.noop,
        trigger: _.noop
      }
    }
  };
  /* REMOTE TRIGGER */

  var RemoteTrigger =
  /*#__PURE__*/
  function (_Widgets$Widget33) {
    _inheritsLoose(RemoteTrigger, _Widgets$Widget33);

    function RemoteTrigger() {
      return _Widgets$Widget33.apply(this, arguments) || this;
    }

    var _proto58 = RemoteTrigger.prototype;

    /* SPECIAL */
    _proto58._variables = function _variables() {
      this.$trigger = this.$element; // this.trigger = this.element; //FIXME: It clashes with the `trigger` method
    };

    _proto58._init = function _init() {
      this.options.ajax.url = this.$trigger.data(this.options.datas.url) || this.$trigger.attr(this.options.attributes.href) || this.options.ajax.url;
      this.options.ajax.body = this.$trigger.data(this.options.datas.body) || this.options.ajax.body;
      this.options.ajax.method = this.$trigger.data(this.options.datas.method) || this.options.ajax.method;
    };

    _proto58._events = function _events() {
      this.___tap();
    };
    /* OPTIONS */


    _proto58._getOptions = function _getOptions() {
      return {
        ajax: this.options.ajax,
        storage: {
          enabled: _.get(this.options.widget.config, 'storage.enabled') || _.get(Widgets.RemoteWidget.config, 'storage.enabled') || $.widget.is(this.element, Widgets.Storable, true) //FIXME: We should merge the configs at factory time instead, but it's quite expensive

        }
      };
    };
    /* TAP */


    _proto58.___tap = function ___tap() {
      this._on(Pointer.tap, this.trigger);
    };
    /* API */


    _proto58.trigger = function trigger() {
      this._trigger('beforetrigger');

      new this.options.widget(this._getOptions()).request();

      this._trigger('trigger');
    };

    return RemoteTrigger;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(RemoteTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require ../remote_trigger.js
// @require ./action.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'remoteActionTrigger',
    plugin: true,
    selector: '.remote-action-trigger',
    options: {
      widget: Widgets.RemoteAction
    }
  };
  /* REMOTE ACTION TRIGGER */

  var RemoteActionTrigger =
  /*#__PURE__*/
  function (_Widgets$RemoteTrigge) {
    _inheritsLoose(RemoteActionTrigger, _Widgets$RemoteTrigge);

    function RemoteActionTrigger() {
      return _Widgets$RemoteTrigge.apply(this, arguments) || this;
    }

    return RemoteActionTrigger;
  }(Widgets.RemoteTrigger);
  /* FACTORY */


  Factory.make(RemoteActionTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../remote_trigger.js
// @require ./loader.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'remoteLoaderTrigger',
    plugin: true,
    selector: '.remote-loader-trigger',
    options: {
      widget: Widgets.RemoteLoader
    }
  };
  /* REMOTE LOADER TRIGGER */

  var RemoteLoaderTrigger =
  /*#__PURE__*/
  function (_Widgets$RemoteTrigge2) {
    _inheritsLoose(RemoteLoaderTrigger, _Widgets$RemoteTrigge2);

    function RemoteLoaderTrigger() {
      return _Widgets$RemoteTrigge2.apply(this, arguments) || this;
    }

    var _proto59 = RemoteLoaderTrigger.prototype;

    /* OPTIONS */
    _proto59._getOptions = function _getOptions() {
      return _.merge(_Widgets$RemoteTrigge2.prototype._getOptions.call(this), {
        callbacks: {
          beforesend: this.disable.bind(this) //TODO: Replace with a linear "spinner" overlay

        }
      });
    };
    /* API */


    _proto59.trigger = function trigger() {
      this._trigger('beforetrigger');

      this.$trigger[this.options.widget.config.name](this._getOptions());

      this._trigger('trigger');
    };

    return RemoteLoaderTrigger;
  }(Widgets.RemoteTrigger);
  /* FACTORY */


  Factory.make(RemoteLoaderTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../remote.js
// @require lib/autofocus/helpers.js
// @require lib/fetch/fetch.js
// @require widgets/toast/toast.js
//TODO: Add locking capabilities, both at class-level and global-level (should be layout-level but seems impossible to implement)


(function ($, _, Svelto, Widgets, Factory, Animations, fetch) {
  /* CONFIG */
  var config = {
    name: 'remoteWidget',
    templates: {
      placeholder: false
    },
    options: {
      persistent: false,
      // Whether it should survive a change of page or not. Needed when used in frameworks like Meteor
      resize: true,
      // Whether performing a resize transition between the loading widget and the remove widget or not
      $wrapper: false,
      // The loading widget will be appended to it, fallback to the $layout
      widget: false,
      waitPlaceholderAnimation: true,
      // Whether to wait at least `animations.placeholder` or not //FIXME: Ugly name
      methods: {
        open: 'open',
        close: 'close'
      },
      events: {
        beforeclose: 'beforeclose',
        close: 'close'
      },
      ajax: {
        cache: false,
        method: 'get'
      },
      cache: {
        enabled: false,
        // Whether remote widgets should be cached or not
        size: 50 // Maximum amount of cached widgets to store, shouldn't change from widget to widget

      },
      storage: {
        enabled: false,
        // Whether to preserve the content across refreshes/sessions
        ttl: 86400 // 1 day

      },
      attributes: {
        id: 'data-remote-widget-id'
      },
      classes: {
        placeholder: 'remote-widget-placeholder',
        placeholderExtra: '',
        loaded: 'remote-widget-loaded',
        resizing: 'remote-widget-resizing',
        showing: 'remote-widget-showing'
      },
      animations: {
        placeholder: 0,
        resize: Animations.normal
      }
    }
  };
  /* REMOTE WIDGET */

  var RemoteWidget =
  /*#__PURE__*/
  function (_Widgets$Remote4) {
    _inheritsLoose(RemoteWidget, _Widgets$Remote4);

    function RemoteWidget() {
      return _Widgets$Remote4.apply(this, arguments) || this;
    }

    var _proto60 = RemoteWidget.prototype;

    /* SPECIAL */
    _proto60._init = function _init() {
      this.options.$wrapper = this.options.$wrapper || this.$layout;
    };
    /* PRIVATE */


    _proto60._getUrl = function _getUrl() {
      return window.location.href.split('#')[0];
    };

    _proto60._getRequestId = function _getRequestId(ajax) {
      var method = ajax.method,
          url = ajax.url,
          body = ajax.body;
      if (_.isPlainObject(body)) body = JSON.stringify(body);
      return btoa([method, url, body].join()); // Using base64 as a fast hash function (we need to strip out apices for the selectors)
    };
    /* PERSISTENT */


    _proto60.___persistent = function ___persistent() {
      if (!this.options.persistent) {
        this.___route();
      }
    };

    _proto60.__route = function __route() {
      var currentUrl = this._getUrl();

      if (this._openUrl && this._openUrl !== currentUrl) {
        this.abort();
      }
    };
    /* WIDGET */


    _proto60.___widget = function ___widget(widget) {
      if (!widget) {
        widget = $(this._template('placeholder', this.options)).attr(this.options.attributes.id, this.requestId);
      }

      this.$widget = $(widget).appendTo(this.options.$wrapper);
    };

    _proto60._widgetInit = function _widgetInit() {
      this.$widget.widgetize().autofocus();
    };

    _proto60._widgetOpen = function _widgetOpen() {
      this.$widget[this.options.widget.config.name](this.options.methods.open);
    };

    _proto60._widgetReplaceWith = function _widgetReplaceWith($replacement) {
      var instance = this.$widget[this.options.widget.config.name]('instance');
      instance[this.options.methods.close] = _.noop;
      instance.destroy();
      this.$widget.replaceWith($replacement);
      this.$widget = $replacement;

      this._widgetInit();
    };

    _proto60._widgetResizing = function _widgetResizing() {};

    _proto60._widgetResized = function _widgetResized() {
      this.$widget.css({
        width: '',
        height: ''
      });
      this.$widget.removeClass(this.options.classes.placeholder).removeClass(this.options.classes.loaded).removeClass(this.options.classes.resizing).removeClass(this.options.classes.showing);
    };

    _proto60._widgetDestroy = function _widgetDestroy() {
      var _this29 = this;

      if (!this.$widget) return;
      var instance = this.$widget[this.options.widget.config.name]('instance');
      instance.whenUnlocked(function () {
        instance[_this29.options.methods.close]();

        _this29._delay(function () {
          if (!this.$widget) return;
          this.$widget.remove();
          this.$widget = false;
        }, instance.options.animations[_this29.options.methods.close]);
      });
    };
    /* CACHE */


    _proto60._cacheGet = function _cacheGet(id) {
      return RemoteWidget.cache.find(function (obj) {
        return obj.id === id;
      });
    };

    _proto60._cacheSet = function _cacheSet(id, widget) {
      RemoteWidget.cache.unshift({
        id: id,
        widget: widget
      });

      if (RemoteWidget.cache.length > this.options.cache.size) {
        RemoteWidget.cache = RemoteWidget.cache.slice(0, this.options.cache.size);
      }
    };

    _proto60._cacheShow = function _cacheShow(obj) {
      var $widget = $(obj.widget).attr(this.options.attributes.id, obj.id);

      this.___widget($widget);

      this._widgetInit();

      this._widgetOpen();

      this.___close();
    };
    /* ABORT */


    _proto60.___abort = function ___abort() {
      this._on(true, this.$widget, (this.options.widget.config.name + ":" + this.options.events.beforeclose).toLowerCase(), this.abort);
    };
    /* CLOSE */


    _proto60.___close = function ___close() {
      this._on(true, this.$widget, (this.options.widget.config.name + ":" + this.options.events.close).toLowerCase(), this._widgetDestroy);
    };
    /* REQUEST HANDLERS */


    _proto60.__beforesend = function __beforesend(req) {
      if (this.isAborted()) return;
      this.requestId = this._getRequestId(this.ajax);
      this.requestTimestamp = Date.now();
      /* CLOSING */

      var $widget = $("[" + this.options.attributes.id + "=\"" + this.requestId + "\"]");

      if ($widget.length) {
        $widget[this.options.widget.config.name](this.options.methods.close);
        return false;
      }
      /* CACHE */


      if (this.options.cache.enabled) {
        var cached = this._cacheGet(this.requestId);

        if (cached) {
          this._cacheShow(cached);

          return false;
        }
      }
      /* STORAGE */


      if (this.options.storage.enabled) {
        var stored = this._storageGet(this.requestId);

        if (stored) {
          this._cacheShow(stored);

          return false;
        }
      }
      /* REQUEST */


      this._defer(function () {
        this._openUrl = this._getUrl();
      });

      this.___persistent();

      this.___widget();

      this.___abort();

      this._widgetInit();

      this._widgetOpen();

      _Widgets$Remote4.prototype.__beforesend.call(this, req);
    };

    _proto60.__error =
    /*#__PURE__*/
    function () {
      var _error5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee39(res) {
        var message;
        return regeneratorRuntime.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!this.isAborted()) {
                  _context39.next = 2;
                  break;
                }

                return _context39.abrupt("return");

              case 2:
                _context39.next = 4;
                return fetch.getValue(res, 'message');

              case 4:
                _context39.t0 = _context39.sent;

                if (_context39.t0) {
                  _context39.next = 7;
                  break;
                }

                _context39.t0 = this.options.messages.error;

              case 7:
                message = _context39.t0;
                $.toast(message);

                this._widgetDestroy();

                _Widgets$Remote4.prototype.__error.call(this, res);

              case 11:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      return function __error(_x51) {
        return _error5.apply(this, arguments);
      };
    }();

    _proto60.__success =
    /*#__PURE__*/
    function () {
      var _success6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee40(res) {
        var resj, wait, remoteWidget, $remoteWidget, prevRect, storable;
        return regeneratorRuntime.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (!this.isAborted()) {
                  _context40.next = 2;
                  break;
                }

                return _context40.abrupt("return");

              case 2:
                if (this.$widget) {
                  _context40.next = 4;
                  break;
                }

                return _context40.abrupt("return");

              case 4:
                _context40.next = 6;
                return fetch.getValue(res);

              case 6:
                resj = _context40.sent;

                if (!(!resj || resj.error || !(this.options.widget.config.name in resj))) {
                  _context40.next = 9;
                  break;
                }

                return _context40.abrupt("return", this.__error(res));

              case 9:
                if (!this.options.waitPlaceholderAnimation) {
                  _context40.next = 14;
                  break;
                }

                wait = this.options.animations.placeholder - (Date.now() - this.requestTimestamp);

                if (!(wait > 0)) {
                  _context40.next = 14;
                  break;
                }

                _context40.next = 14;
                return _.wait(wait);

              case 14:
                /* VARIABLES */
                remoteWidget = _.templateMinify(resj[this.options.widget.config.name]), $remoteWidget = $(remoteWidget);
                if (this.options.resize) prevRect = this.$widget.getRect();
                $remoteWidget.addClass(this.options.widget.config.options.classes.show).addClass(this.options.widget.config.options.classes[this.options.methods.open]);
                $remoteWidget.attr(this.options.attributes.id, this.requestId);
                /* CACHE */

                if (this.options.cache.enabled) {
                  this._cacheSet(this.requestId, remoteWidget);
                }
                /* STORAGE */


                if (this.options.storage.enabled) {
                  storable = {
                    id: this.requestId,
                    widget: remoteWidget
                  };

                  this._storageSet(this.requestId, storable, this.options.storage.ttl);
                }
                /* REPLACING */


                this._frame(function () {
                  this._widgetReplaceWith($remoteWidget);

                  this.___close();

                  if (this.options.resize) {
                    var newRect = this.$widget.getRect(),
                        needsResize = prevRect.width !== newRect.width || prevRect.height !== newRect.height;

                    if (needsResize) {
                      this.$widget.css({
                        width: prevRect.width,
                        height: prevRect.height
                      });
                      this.$widget.addClass(this.options.classes.placeholder).addClass(this.options.classes.resizing);

                      this._frame(function () {
                        this.$widget.addClass(this.options.classes.showing);
                        $.animate(this.$widget[0], {
                          width: newRect.width,
                          height: newRect.height
                        }, {
                          duration: this.options.animations.resize,
                          callbacks: {
                            tick: this._widgetResizing.bind(this),
                            end: this._widgetResized.bind(this)
                          }
                        });
                      });
                    }
                  }
                });

                _Widgets$Remote4.prototype.__success.call(this, res);

              case 22:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      return function __success(_x52) {
        return _success6.apply(this, arguments);
      };
    }();
    /* API OVERRIDES */


    _proto60.abort = function abort() {
      this._widgetDestroy();

      _Widgets$Remote4.prototype.abort.call(this);
    };

    return RemoteWidget;
  }(Widgets.Remote);
  /* CACHE */


  RemoteWidget.cache = []; // Storing remote widgets here

  /* FACTORY */

  Factory.make(RemoteWidget, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations, Svelto.fetch); // @require ../remote.js
// @require ../widget/widget.js
// @require widgets/modal/modal.js


(function ($, _, Svelto, Widgets, Factory, Animations) {
  /* CONFIG */
  var config = {
    name: 'remoteModal',
    templates: {
      placeholder: function (o) {
        var __t,
            __p = '';

        __p += '<div class="modal container ' + ((__t = o.classes.placeholder) == null ? '' : __t) + ' ' + ((__t = o.classes.placeholderExtra) == null ? '' : __t) + '"><svg class="spinner"><circle cx="1.625em" cy="1.625em" r="1.25em"></svg></div>';
        return __p;
      }
    },
    options: {
      widget: Widgets.Modal,
      classes: {
        placeholder: 'remote-modal-placeholder',
        loaded: 'remote-modal-loaded',
        resizing: 'remote-modal-resizing',
        showing: 'remote-modal-showing'
      },
      animations: {
        placeholder: Animations.normal,
        resize: Animations.normal
      }
    }
  };
  /* REMOTE MODAL */

  var RemoteModal =
  /*#__PURE__*/
  function (_Widgets$RemoteWidget) {
    _inheritsLoose(RemoteModal, _Widgets$RemoteWidget);

    function RemoteModal() {
      return _Widgets$RemoteWidget.apply(this, arguments) || this;
    }

    return RemoteModal;
  }(Widgets.RemoteWidget);
  /* FACTORY */


  Factory.make(RemoteModal, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations); // @require ./modal.js


(function ($, _, Svelto, RemoteModal) {
  /* HELPER */
  $.remoteModal = function (ajax) {
    new RemoteModal({
      ajax: ajax
    }).request();
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.RemoteModal); // @require ../remote_trigger.js
// @require ./modal.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'remoteModalTrigger',
    plugin: true,
    selector: '.remote-modal-trigger',
    options: {
      widget: Widgets.RemoteModal
    }
  };
  /* REMOTE MODAL TRIGGER */

  var RemoteModalTrigger =
  /*#__PURE__*/
  function (_Widgets$RemoteTrigge3) {
    _inheritsLoose(RemoteModalTrigger, _Widgets$RemoteTrigge3);

    function RemoteModalTrigger() {
      return _Widgets$RemoteTrigge3.apply(this, arguments) || this;
    }

    return RemoteModalTrigger;
  }(Widgets.RemoteTrigger);
  /* FACTORY */


  Factory.make(RemoteModalTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../remote.js
// @require ../widget/widget.js
// @require widgets/panel/panel.js
//TODO: Add support for pinned panels


(function ($, _, Svelto, Widgets, Factory, Animations) {
  /* CONFIG */
  var config = {
    name: 'remotePanel',
    templates: {
      placeholder: function (o) {
        var __t,
            __p = '';

        __p += '<div class="panel container ' + ((__t = o.direction) == null ? '' : __t) + ' ' + ((__t = o.type) == null ? '' : __t) + ' ' + ((__t = o.classes.placeholder) == null ? '' : __t) + ' ' + ((__t = o.classes.placeholderExtra) == null ? '' : __t) + '"><svg class="spinner"><circle cx="1.625em" cy="1.625em" r="1.25em"></svg></div>';
        return __p;
      }
    },
    options: {
      widget: Widgets.Panel,
      direction: Widgets.Panel.config.options.direction,
      type: Widgets.Panel.config.options.type,
      classes: {
        placeholder: 'remote-panel-placeholder',
        loaded: 'remote-panel-loaded',
        resizing: 'remote-panel-resizing',
        showing: 'remote-panel-showing'
      },
      animations: {
        placeholder: Animations.normal,
        resize: Animations.normal
      }
    }
  };
  /* REMOTE PANEL */

  var RemotePanel =
  /*#__PURE__*/
  function (_Widgets$RemoteWidget2) {
    _inheritsLoose(RemotePanel, _Widgets$RemoteWidget2);

    function RemotePanel() {
      return _Widgets$RemoteWidget2.apply(this, arguments) || this;
    }

    return RemotePanel;
  }(Widgets.RemoteWidget);
  /* FACTORY */


  Factory.make(RemotePanel, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations); // @require ./panel.js


(function ($, _, Svelto, RemotePanel) {
  /* HELPER */
  $.remotePanel = function (ajax, direction, type) {
    new RemotePanel({
      ajax: ajax,
      direction: direction,
      type: type
    }).request();
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.RemotePanel); // @require ../remote_trigger.js
// @require ./panel.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'remotePanelTrigger',
    plugin: true,
    selector: '.remote-panel-trigger',
    options: {
      widget: Widgets.RemotePanel,
      direction: undefined,
      type: undefined
    }
  };
  /* REMOTE PANEL TRIGGER */

  var RemotePanelTrigger =
  /*#__PURE__*/
  function (_Widgets$RemoteTrigge4) {
    _inheritsLoose(RemotePanelTrigger, _Widgets$RemoteTrigge4);

    function RemotePanelTrigger() {
      return _Widgets$RemoteTrigge4.apply(this, arguments) || this;
    }

    var _proto61 = RemotePanelTrigger.prototype;

    /* SPECIAL */
    _proto61._init = function _init() {
      _Widgets$RemoteTrigge4.prototype._init.call(this);

      this.options.direction = this.$trigger.data(Widgets.Panel.config.options.datas.direction) || this.options.direction;
      this.options.type = this.$trigger.data(Widgets.Panel.config.options.datas.type) || this.options.type;
    };
    /* OPTIONS */


    _proto61._getOptions = function _getOptions() {
      var _options2 = this.options,
          direction = _options2.direction,
          type = _options2.type;
      return _.merge(_Widgets$RemoteTrigge4.prototype._getOptions.call(this), {
        direction: direction,
        type: type
      });
    };

    return RemotePanelTrigger;
  }(Widgets.RemoteTrigger);
  /* FACTORY */


  Factory.make(RemotePanelTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../remote.js
// @require ../widget/widget.js
// @require widgets/popover/popover.js
//FIXME: The tip will disappear during a resize (not fixable without changing the markup of a popover just for this)


(function ($, _, Svelto, Widgets, Factory, Animations) {
  /* CONFIG */
  var config = {
    name: 'remotePopover',
    templates: {
      placeholder: function (o) {
        var __t,
            __p = '';

        __p += '<div class="popover container ' + ((__t = o.classes.placeholder) == null ? '' : __t) + ' ' + ((__t = o.classes.placeholderExtra) == null ? '' : __t) + '"><svg class="spinner"><circle cx="1.625em" cy="1.625em" r="1.25em"></svg></div>';
        return __p;
      }
    },
    options: {
      widget: Widgets.Popover,
      positionate: {},
      // Extending Widget.Popover.options.positionate
      cache: {
        enabled: true
      },
      classes: {
        placeholder: 'remote-popover-placeholder',
        loaded: 'remote-popover-loaded',
        resizing: 'remote-popover-resizing',
        showing: 'remote-popover-showing'
      },
      animations: {
        placeholder: Animations.fast,
        resize: Animations.fast
      }
    }
  };
  /* REMOTE POPOVER */

  var RemotePopover =
  /*#__PURE__*/
  function (_Widgets$RemoteWidget3) {
    _inheritsLoose(RemotePopover, _Widgets$RemoteWidget3);

    function RemotePopover() {
      return _Widgets$RemoteWidget3.apply(this, arguments) || this;
    }

    var _proto62 = RemotePopover.prototype;

    /* PRIVATE */
    _proto62._positionate = function _positionate() {
      this.$widget.popover('instance')._positionate();
    };
    /* WIDGET */


    _proto62._widgetInit = function _widgetInit() {
      this.$widget.popover('option', 'positionate', this.options.positionate);

      _Widgets$RemoteWidget3.prototype._widgetInit.call(this);
    };

    _proto62._widgetReplaceWith = function _widgetReplaceWith($replacement) {
      var _options$widget$confi = this.options.widget.config.options.classes,
          fullscreen = _options$widget$confi.fullscreen,
          fullscreenRequest = _options$widget$confi.fullscreenRequest,
          isFullscreen = $replacement.hasClass(fullscreen) || $replacement.hasClass(fullscreenRequest),
          matrix = this.$widget.matrix(),
          positionateGuid = this.$widget[0]._positionateGuid,
          _$widget$popover = this.$widget.popover('instance'),
          $anchor = _$widget$popover.$anchor;

      if (!isFullscreen) {
        var classList = this.$widget.attr('class') || '',
            classes = classList.split(' '),
            positionateClass = classes.find(function (cls) {
          return cls.startsWith('positionate-');
        }),
            pointingClass = classes.find(function (cls) {
          return cls.startsWith('pointing-');
        });
        if (positionateClass) $replacement.addClass(positionateClass);
        if (pointingClass) $replacement.addClass(pointingClass);
      }

      _Widgets$RemoteWidget3.prototype._widgetReplaceWith.call(this, $replacement);

      this.$widget.popover('instance').$anchor = $anchor;
      this.$widget.matrix(matrix);
      this.$widget[0]._positionateGuid = positionateGuid;
      if (!this.options.resize) this._positionate();
    };

    _proto62._widgetResizing = function _widgetResizing() {
      if (!this.$widget) return;

      this._positionate();
    };

    return RemotePopover;
  }(Widgets.RemoteWidget);
  /* FACTORY */


  Factory.make(RemotePopover, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Animations); // @require ./popover.js


(function ($, _, Svelto, RemotePopover) {
  /* HELPER */
  $.remotePopover = function (ajax, target) {
    var positionate = {};

    if (target instanceof $) {
      positionate.$anchor = target;
    } else if ('x' in target && 'y' in target) {
      positionate.point = target;
    }

    new RemotePopover({
      ajax: ajax,
      positionate: positionate
    }).request();
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.RemotePopover); // @require ../remote_trigger.js
// @require ./popover.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'remotePopoverTrigger',
    plugin: true,
    selector: '.remote-popover-trigger',
    options: {
      widget: Widgets.RemotePopover
    }
  };
  /* REMOTE POPOVER TRIGGER */

  var RemotePopoverTrigger =
  /*#__PURE__*/
  function (_Widgets$RemoteTrigge5) {
    _inheritsLoose(RemotePopoverTrigger, _Widgets$RemoteTrigge5);

    function RemotePopoverTrigger() {
      return _Widgets$RemoteTrigge5.apply(this, arguments) || this;
    }

    var _proto63 = RemotePopoverTrigger.prototype;

    /* OPTIONS */
    _proto63._getOptions = function _getOptions() {
      return _.merge(_Widgets$RemoteTrigge5.prototype._getOptions.call(this), {
        positionate: {
          $anchor: this.$trigger
        }
      });
    };

    return RemotePopoverTrigger;
  }(Widgets.RemoteTrigger);
  /* FACTORY */


  Factory.make(RemotePopoverTrigger, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/browser/browser.js
// @require widgets/popover/popover.js
//TODO: Add support for selecting multiple options (with checkboxes maybe)
//TODO: Add an input field for searching through the options


(function ($, _, Svelto, Widgets, Factory, Browser, Pointer, Colors) {
  /* CONFIG */
  var config = {
    name: 'select',
    plugin: true,
    selector: '.select',
    templates: {
      base: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="popover select-popover card ' + ((__t = o.size) == null ? '' : __t) + ' ' + ((__t = o.color) == null ? '' : __t) + ' ' + ((__t = o.css) == null ? '' : __t) + ' ' + ((__t = o.guc) == null ? '' : __t) + '"><div class="card-block">';

        for (var i = 0, l = o.options.length; i < l; i++) {
          ;
          print(Svelto.Templates.Select[o.options[i].value ? 'option' : 'optgroup']({
            opt: o.options[i],
            color: o.color
          }));
        }

        ;
        __p += '</div></div>';
        return __p;
      },
      optgroup: function (o) {
        var __t,
            __p = '';

        __p += '<div class="divider">' + ((__t = o.opt.prop) == null ? '' : __t) + '</div>';
        return __p;
      },
      option: function (o) {
        var __t,
            __p = '';

        __p += '<div class="button ' + ((__t = o.color) == null ? '' : __t) + '" data-value="' + ((__t = o.opt.prop) == null ? '' : __t) + '">' + ((__t = o.opt.value) == null ? '' : __t) + '</div>';
        return __p;
      }
    },
    options: {
      native: true,
      // Don't show the popover and use the native select, enabled by default
      popover: {
        size: '',
        color: Colors.white,
        css: Widgets.Popover.config.options.classes.affixed + ' bordered'
      },
      classes: {
        open: 'open active',
        selected: 'active highlighted highlight-left',
        affixed: Widgets.Popover.config.options.classes.affixed
      },
      datas: {
        value: 'value'
      },
      selectors: {
        select: 'select',
        option: 'option',
        valueholder: '.select-value',
        valueholderFallback: 'label:not(.no-value)',
        button: '.button'
      },
      callbacks: {
        change: _.noop,
        open: _.noop,
        close: _.noop
      }
    }
  };
  /* SELECT */

  var Select =
  /*#__PURE__*/
  function (_Widgets$Widget34) {
    _inheritsLoose(Select, _Widgets$Widget34);

    function Select() {
      return _Widgets$Widget34.apply(this, arguments) || this;
    }

    var _proto64 = Select.prototype;

    /* SPECIAL */
    _proto64._variables = function _variables() {
      this.$wrp = this.$element;
      this.$select = this.$wrp.find(this.options.selectors.select);
      this.$options = this.$select.find(this.options.selectors.option);
      this.$valueholder = this.$wrp.find(this.options.selectors.valueholder).first();

      if (!this.$valueholder.length) {
        this.$valueholder = this.$wrp.find(this.options.selectors.valueholderFallback).first();
      }

      this.initialValueholder = this.$valueholder.text();
      this.selectOptions = [];
      this.$popover = false;
    };

    _proto64._init = function _init() {
      this._updateValueholder();

      if (!this.options.native) {
        this.$select.addClass(this.options.classes.hidden);

        this.___selectOptions();

        this.___popover();
      }
    };

    _proto64._events = function _events() {
      this.___change();
    };
    /* CHANGE */


    _proto64.___change = function ___change() {
      this._on(true, this.$select, 'change', this.__change);
    };

    _proto64.__change = function __change() {
      this._update();

      this._trigger('change');
    };
    /* BUTTON TAP */


    _proto64.___buttonTap = function ___buttonTap() {
      if (this.options.native) return;
      /* BUTTON TAP */

      this._on(this.$popover, Pointer.tap, this.options.selectors.button, this.__buttonTap);
    };

    _proto64.__buttonTap = function __buttonTap(event) {
      event.stopImmediatePropagation();
      this.$popover.popover('close');
      this.set($(event.target).closest(this.$buttons).data(this.options.datas.value));
    };
    /* OPTIONS */


    _proto64.___selectOptions = function ___selectOptions() {
      //FIXME: Add support for arbitrary number of optgroups nesting levels
      var previousOptgroup;

      for (var i = 0, l = this.$options.length; i < l; i++) {
        var option = this.$options[i],
            $option = $(option),
            $parent = $option.parent();

        if ($parent.is('optgroup')) {
          var currentOptgroup = $parent.attr('label');

          if (currentOptgroup !== previousOptgroup) {
            previousOptgroup = currentOptgroup;
            this.selectOptions.push({
              prop: currentOptgroup
            });
          }
        }

        var value = $option.text();

        if (value) {
          this.selectOptions.push({
            value: $option.text(),
            prop: $option.attr('value')
          });
        }
      }
    };
    /* POPOVER */


    _proto64.___popover = function ___popover() {
      var html = this._template('base', _.extend({
        guc: this.guc,
        options: this.selectOptions
      }, this.options.popover));

      this.$popover = $(html).appendTo(this.$layout);
      this.$buttons = this.$popover.find(this.options.selectors.button);
      this.$popover.popover({
        positionate: {
          axis: 'y',
          strict: true
        },
        callbacks: {
          beforeopen: this.__setPopoverWidth.bind(this),
          open: this.__popoverOpen.bind(this),
          close: this.__popoverClose.bind(this)
        }
      });
      this.$wrp.attr("data-" + Widgets.Targeter.config.options.datas.target, '.' + this.guc).popoverToggler();

      this._updatePopover();
    };

    _proto64.__setPopoverWidth = function __setPopoverWidth() {
      if (this.$popover.is('.' + this.options.classes.affixed)) {
        this.$popover.css('min-width', this.$wrp.outerWidth());
      }
    };

    _proto64.__popoverOpen = function __popoverOpen() {
      this.___buttonTap();

      this.$wrp.addClass(this.options.classes.open);

      this._trigger('open');
    };

    _proto64.__popoverClose = function __popoverClose() {
      this._reset();

      this.___change();

      this.$wrp.removeClass(this.options.classes.open);

      this._trigger('close');
    };
    /* UPDATE */


    _proto64._updateValueholder = function _updateValueholder() {
      var value = this.$select.val();

      if (_.isString(value)) {
        //FIXME: Is it needed?
        if (value.length) {
          var $selectedOption = this.$options.filter("[value=\"" + value + "\"]").last();
          this.$valueholder.text($selectedOption.text());
        } else {
          this.$valueholder.text(this.initialValueholder);
        }
      }
    };

    _proto64._updatePopover = function _updatePopover() {
      this.$buttons.removeClass(this.options.classes.selected);
      this.$buttons.filter('[data-' + this.options.datas.value + '="' + this.$select.val() + '"]').last().addClass(this.options.classes.selected);
    };

    _proto64._update = function _update() {
      this._updateValueholder();

      if (!this.options.native) {
        this._updatePopover();
      }
    };
    /* API */


    _proto64.get = function get() {
      return this.$select.val();
    };

    _proto64.set = function set(value) {
      var $button = this.$buttons.filter('[data-' + this.options.datas.value + '="' + value + '"]');
      if (!$button.length) return;
      this.$select.val(value).trigger('change');
    };

    return Select;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Select, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Browser, Svelto.Pointer, Svelto.Colors); // @optional widgets/datatables/datatables.js
// @require core/browser/browser.js
// @require core/mouse/mouse.js
// @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory, Pointer, Browser, Keyboard, Mouse) {
  /* CONFIG */
  var config = {
    name: 'selectable',
    plugin: true,
    selector: 'table.selectable',
    options: {
      moveThreshold: 5,
      // Threshold after with we start to consider the `Pointer.move` events (Dragging disabled on touch device)
      single: false,
      // Enforcing `select-single` even without the need to add the class
      classes: {
        selected: 'selected',
        single: 'select-single',
        datatable: 'datatable'
      },
      selectors: {
        element: 'tbody tr:not(.table-row-empty)',
        //FIXME: Add support for datatables' empty row
        selectionToggler: undefined // Selector having `element` as context. If falsy the entire `element` will be the selection toggler //FIXME: Is this actually working?

      },
      keystrokes: {
        'ctmd + a': 'all',
        'ctmd + shift + a': 'clear',
        'ctmd + i': 'invert'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* SELECTABLE */

  var Selectable =
  /*#__PURE__*/
  function (_Widgets$Widget35) {
    _inheritsLoose(Selectable, _Widgets$Widget35);

    function Selectable() {
      return _Widgets$Widget35.apply(this, arguments) || this;
    }

    var _proto65 = Selectable.prototype;

    /* SPECIAL */
    _proto65._variables = function _variables() {
      this.$selectable = this.$element;
      this._isSingle = this.options.single || this.$selectable.hasClass(this.options.classes.single);
      this._isDataTable = this.$selectable.hasClass(this.options.classes.datatable);
      this._dtapi = this._isDataTable ? this.$selectable.DataTable() : false;
      this.$elements = this._getElements();
      this._usingSelectionToggler = !!this.options.selectors.selectionToggler;
      this.options.selectors.selectionToggler = this._usingSelectionToggler ? this.options.selectors.element + ' ' + this.options.selectors.selectionToggler : this.options.selectors.element;
      this.__move = this._frames(this.__move.bind(this)); // For performance reasons
    };

    _proto65._events = function _events() {
      this.___change();

      this.___keydown();

      this.___downTap();
    };

    _proto65._destroy = function _destroy() {
      this.clear();
    };
    /* CHANGE */


    _proto65.___change = function ___change() {
      this._on(true, 'change tablehelper:change sortable:sort processing.dt sort.dt search.dt', this.__change);
    };

    _proto65.__change = function __change() {
      this.$elements = this._getElements();

      this._resetPrev();

      this._trigger('change');
    };
    /* KEYDOWN */


    _proto65.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* DOWN / TAP */


    _proto65.___downTap = function ___downTap() {
      if (this._isSingle) {
        this.___tap();
      } else if (Browser.is.touchDevice) {
        this.___down();

        this.___tap();
      } else {
        this.___down();
      }
    };

    _proto65.___down = function ___down() {
      this._on(Pointer.down, this.options.selectors.selectionToggler, this.__down);
    };

    _proto65.___tap = function ___tap() {
      this._tappable = true;

      this._on(Pointer.tap, this.options.selectors.selectionToggler, this.__tapTouch);
    };
    /* TAP */
    // Just for touch devices or single select


    _proto65.__tapTouch = function __tapTouch(event) {
      if (!this._tappable) return;
      event.preventDefault();

      var $target = this._getEventElement(event);

      if (this._isSingle) {
        this.$elements.not($target).removeClass(this.options.classes.selected); //FIXME: Quite performance intensive, most of it could be avoided
      }

      $target.toggleClass(this.options.classes.selected);

      this._trigger('change');
    };
    /* CLICK / CTMD + CLICK / SHIFT + CLICK / CLICK -> DRAG */


    _proto65.__down = function __down(event) {
      this._tappable = Pointer.isTouchEvent(event);
      if (this._tappable) return;
      event.preventDefault();
      this.startEvent = event;
      this.$startElement = this._getEventElement(event);

      this._on(true, $.$document, Pointer.move, this.__move);

      this._one(true, $.$document, Pointer.up, this.__up);

      this._one(true, $.$document, Pointer.cancel, this.__cancel);
    };

    _proto65.__move = function __move(event) {
      event.preventDefault();
      var startXY = $.eventXY(this.startEvent),
          endXY = $.eventXY(event),
          deltaXY = {
        x: endXY.x - startXY.x,
        y: endXY.y - startXY.y
      },
          absDeltaXY = {
        x: Math.abs(deltaXY.x),
        y: Math.abs(deltaXY.y)
      };

      if (absDeltaXY.x >= this.options.moveThreshold || absDeltaXY.y >= this.options.moveThreshold) {
        this._off($.$document, Pointer.move, this.__move);

        this._off($.$document, Pointer.up, this.__up);

        this._off($.$document, Pointer.cancel, this.__cancel);

        this._resetPrev();

        if (!Keyboard.keystroke.hasCtrlOrCmd(event)) {
          this.$elements.removeClass(this.options.classes.selected);
        }

        this.$startElement.toggleClass(this.options.classes.selected);

        this._on(true, Pointer.enter, this.options.selectors.element, this.__dragEnter);

        this._one(true, $.$document, Pointer.up + ' ' + Pointer.cancel, this.__dragEnd);

        this._trigger('change');
      }
    };

    _proto65.__dragEnter = function __dragEnter(event) {
      this._toggleGroup(this.$startElement, this._getEventElement(event));

      this._trigger('change');
    };

    _proto65.__dragEnd = function __dragEnd() {
      this._off(Pointer.enter, this.__dragEnter);
    };

    _proto65.__up = function __up(event) {
      this._off($.$document, Pointer.move, this.__move);

      this._off($.$document, Pointer.cancel, this.__cancel);

      var isRightButton = Mouse.hasButton(event, Mouse.buttons.RIGHT); // When right clicking we suppose that we also want to select that element (useful when used in conjuction with SelectableActionsPopover)

      if (event.shiftKey) {
        this._toggleGroup(this.$prevElement, this.$startElement);
      } else if (Keyboard.keystroke.hasCtrlOrCmd(event)) {
        this.$startElement.toggleClass(this.options.classes.selected, isRightButton ? true : undefined);

        this._resetPrev(this.$startElement);
      } else {
        var $selected = this.get(),
            $others = $selected.not(this.$startElement);

        if ($others.length) {
          $others.removeClass(this.options.classes.selected);
          this.$startElement.addClass(this.options.classes.selected);
        } else {
          this.$startElement.toggleClass(this.options.classes.selected, isRightButton ? true : undefined);
        }

        this._resetPrev(this.$startElement);
      }

      this._trigger('change');
    };

    _proto65.__cancel = function __cancel() {
      this._off($.$document, Pointer.move, this.__move);

      this._off($.$document, Pointer.up, this.__up);
    };
    /* PRIVATE */


    _proto65._toggleGroup = function _toggleGroup($start, $end) {
      var startIndex = $start ? this.$elements.index($start) : 0,
          endIndex = this.$elements.index($end),
          minIndex = Math.min(startIndex, endIndex),
          maxIndex = Math.max(startIndex, endIndex);

      if (minIndex === startIndex) {
        // Direction: down
        minIndex += 1;
        maxIndex += 1;
      }

      var $newGroup = this.$elements.slice(minIndex, maxIndex);

      if (this.$prevGroup) {
        $newGroup.not(this.$prevGroup).toggleClass(this.options.classes.selected);
        this.$prevGroup.not($newGroup).toggleClass(this.options.classes.selected);
      } else {
        $newGroup.toggleClass(this.options.classes.selected);
      }

      this.$prevGroup = $newGroup;
    };

    _proto65._getElements = function _getElements() {
      return this._dtapi ? $(this._dtapi.rows().nodes()) : this.$selectable.find(this.options.selectors.element);
    };

    _proto65._getEventElement = function _getEventElement(event) {
      return $(event.target).closest(this.$elements);
    };

    _proto65._resetPrev = function _resetPrev($element, $group) {
      if ($element === void 0) {
        $element = false;
      }

      if ($group === void 0) {
        $group = false;
      }

      this.$prevElement = $element;
      this.$prevGroup = $group;
    };
    /* API */


    _proto65.get = function get() {
      return this.$elements.filter('.' + this.options.classes.selected);
    };

    _proto65.all = function all() {
      if (this._isSingle) return;
      this.$elements.addClass(this.options.classes.selected);

      this._resetPrev();

      this._trigger('change');
    };

    _proto65.clear = function clear() {
      this.$elements.removeClass(this.options.classes.selected);

      this._resetPrev();

      this._trigger('change');
    };

    _proto65.invert = function invert() {
      if (this._isSingle) return;
      this.$elements.toggleClass(this.options.classes.selected);

      this._resetPrev();

      this._trigger('change');
    };

    return Selectable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Selectable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Browser, Svelto.Keyboard, Svelto.Mouse); // @require lib/transform/transform.js
// @require widgets/draggable/draggable.js
//TODO: Add vertical slider


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'slider',
    plugin: true,
    selector: '.slider',
    options: {
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      // Only multiples of `step` are valid values
      decimals: 0,
      // Trunc the value to this amount of decimal numbers
      live: false,
      // Whether it will update the input also on `Draggable.move` or just on `Draggable.end`
      datas: {
        min: 'min',
        max: 'max',
        step: 'step',
        decimals: 'decimals'
      },
      selectors: {
        input: 'input',
        bar: '.slider-bar',
        highlight: '.slider-highlight',
        handler: '.slider-handler',
        label: '.slider-handler .slider-label'
      },
      keystrokes: {
        'left, down': 'decrease',
        'right, up': 'increase'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* SLIDER */

  var Slider =
  /*#__PURE__*/
  function (_Widgets$Widget36) {
    _inheritsLoose(Slider, _Widgets$Widget36);

    function Slider() {
      return _Widgets$Widget36.apply(this, arguments) || this;
    }

    var _proto66 = Slider.prototype;

    /* SPECIAL */
    _proto66._variables = function _variables() {
      this.$slider = this.$element;
      this.$input = this.$slider.find(this.options.selectors.input);
      this.$bar = this.$slider.find(this.options.selectors.bar);
      this.$highlight = this.$slider.find(this.options.selectors.highlight);
      this.$handler = this.$slider.find(this.options.selectors.handler);
      this.$label = this.$slider.find(this.options.selectors.label);
    };

    _proto66._init = function _init() {
      /* VARIABLES */
      var value = this.$input.val();
      /* OPTIONS */

      this.options.min = Number(this.$slider.data(this.options.datas.min) || this.options.min);
      this.options.max = Number(this.$slider.data(this.options.datas.max) || this.options.max);
      this.options.value = this._sanitizeValue(value || this.options.value);
      this.options.step = Number(this.$slider.data(this.options.datas.step) || this.options.step);
      this.options.decimals = Number(this.$slider.data(this.options.datas.decimals) || this.options.decimals);
      /* STEPS NR */

      this.stepsNr = (this.options.max - this.options.min) / this.options.step;
      /* UPDATE */

      if (Number(value) !== this.options.value) {
        this._update();
      } else {
        this._updatePositions();

        this._updateLabel();
      }
    };

    _proto66._events = function _events() {
      this.___change();

      this.___keydown();

      this.___drag();
    };
    /* PRIVATE */


    _proto66._sanitizeValue = function _sanitizeValue(value) {
      return _.clamp(Number(Number(value).toFixed(this.options.decimals)), this.options.min, this.options.max);
    };
    /* UPDATE */


    _proto66._updateVariables = function _updateVariables() {
      this.barWidth = this.$bar.width();
      this.stepWidth = this.barWidth / this.stepsNr;
    };

    _proto66._updatePositions = function _updatePositions(value) {
      if (value === void 0) {
        value = this.options.value;
      }

      var percentage = (value - this.options.min) / this.options.step * 100 / this.stepsNr;
      this.$handler.css('left', percentage + '%');
      this.$highlight.css('right', 100 - percentage + '%');
    };

    _proto66._updateLabel = function _updateLabel(value) {
      if (value === void 0) {
        value = this.options.value;
      }

      this.$label.text(value);
    };

    _proto66._updateInput = function _updateInput() {
      this.$input.val(this.options.value).trigger('change');
    };

    _proto66._update = function _update() {
      this._updatePositions();

      this._updateLabel();

      this._updateInput();
    };
    /* CHANGE */


    _proto66.___change = function ___change() {
      this._on(true, this.$input, 'change', this.__change);
    };

    _proto66.__change = function __change() {
      this.set(this.$input.val());
    };
    /* KEYDOWN */


    _proto66.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* DRAG */


    _proto66.___drag = function ___drag() {
      this.$handler.draggable({
        draggable: this.isEnabled.bind(this),
        axis: 'x',
        proxy: {
          $element: this.$slider,
          noMotion: this.__dragNoMotion.bind(this)
        },
        modifiers: {
          x: this.__dragModifierX.bind(this)
        },
        callbacks: {
          start: this.__dragStart.bind(this),
          move: this.__dragMove.bind(this),
          end: this.__dragEnd.bind(this)
        }
      });
    };

    _proto66.__dragNoMotion = function __dragNoMotion() {
      return !this._dragDistance;
    };

    _proto66._dragValue = function _dragValue() {
      return this._sanitizeValue(this.options.value + this._dragDistance / this.stepWidth * this.options.step);
    };

    _proto66.__dragModifierX = function __dragModifierX(distance) {
      this._dragDistance = this._dragProxyDistance + _.roundCloser(distance, this.stepWidth);

      if (this._dragIsProxyed && !this._dragProxyDistance) {
        this._dragProxyDistance = this._dragDistance;
      }

      return false;
    };

    _proto66.__dragStart = function __dragStart(event, data) {
      this._dragIsProxyed = data.isProxyed;
      this._dragProxyDistance = 0;
      this._dragDistance = 0;

      this._updateVariables();
    };

    _proto66.__dragMove = function __dragMove() {
      var value = this._dragValue();

      if (this.options.live) {
        this.set(value);
      } else {
        this._updateLabel(value);

        this._updatePositions(value);
      }
    };

    _proto66.__dragEnd = function __dragEnd() {
      this.set(this._dragValue());
    };
    /* API */


    _proto66.get = function get() {
      return this.options.value;
    };

    _proto66.set = function set(value) {
      value = this._sanitizeValue(value);
      if (_.isNaN(value) || value === this.options.value) return;
      this.options.value = value;

      this._update();

      this._trigger('change');
    };

    _proto66.increase = function increase() {
      this.set(this.options.value + this.options.step);
    };

    _proto66.decrease = function decrease() {
      this.set(this.options.value - this.options.step);
    };

    return Slider;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Slider, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/colors/colors.js
// @require core/sizes/sizes.js
// @require widgets/overlay/overlay.js
//TODO: Add a `IconSpinner` or something, basically if we are applying this to a button with an icon just replace the icon with a spinning one, and make the whole element kind of "disabled", but with animations running. Then make a `waitSpinner` or something that abstracts both `IconSpinner` and `SpinnerOverlay`


(function ($, _, Svelto, Widgets, Factory, Colors, Sizes) {
  /* CONFIG */
  var config = {
    name: 'spinnerOverlay',
    plugin: true,
    templates: {
      overlay: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<div class="overlay spinner-overlay ' + ((__t = o.size || '') == null ? '' : __t) + ' ' + ((__t = o.dimmer ? 'dimmer' : '') == null ? '' : __t) + ' ' + ((__t = o.blurrer ? 'blurrer' : '') == null ? '' : __t) + '" data-options=\'{"keyboard":false}\'>';

        if (o.labeled) {
          ;
          __p += '<div class="spinner-label ' + ((__t = o.colors.labeled) == null ? '' : __t) + '">';
        }

        ;
        __p += '<svg class="spinner ' + ((__t = o.multicolor ? 'multicolor' : o.labeled ? '' : o.unlabeled) == null ? '' : __t) + '"><circle cx="1.625em" cy="1.625em" r="1.25em"></svg>';

        if (o.labeled) {
          ;
          __p += '</div>';
        }

        ;
        __p += '</div>';
        return __p;
      }
    },
    options: {
      size: false,
      labeled: true,
      blurrer: false,
      dimmer: true,
      multicolor: false,
      smart: {
        // Adjust options dynamically
        enabled: true,
        options: [// Ordered map of dimensions to options. If the outerWidth/outerHeight of the element is <= the dimension then merge over the options
        [40, {
          size: Sizes.xxxxsmall
        }], [60, {
          size: Sizes.xxxsmall
        }], [80, {
          size: Sizes.xxsmall
        }], [100, {
          size: Sizes.xsmall
        }], [120, {
          size: Sizes.small,
          labeled: false
        }]]
      },
      colors: {
        labeled: Colors.white,
        unlabeled: Colors.secondary
      },
      callbacks: {
        open: _.noop,
        close: _.noop
      }
    }
  };
  /* SPINNER OVERLAY */

  var SpinnerOverlay =
  /*#__PURE__*/
  function (_Widgets$Widget37) {
    _inheritsLoose(SpinnerOverlay, _Widgets$Widget37);

    function SpinnerOverlay() {
      return _Widgets$Widget37.apply(this, arguments) || this;
    }

    var _proto67 = SpinnerOverlay.prototype;

    /* SPECIAL */
    _proto67._variables = function _variables() {
      this.$overlayed = this.$element;
      this.$overlay = $(this._template('overlay', this._getOverlayOptions()));
      this.instance = this.$overlay.overlay('instance');
    };
    /* PRIVATE */


    _proto67._getOverlayOptions = function _getOverlayOptions() {
      if (!this.options.smart.enabled) return this.options;
      var width = this.$overlayed.outerWidth(),
          height = this.$overlayed.outerHeight(),
          opts = this.options.smart.options.map(function (_ref5) {
        var dimension = _ref5[0],
            options = _ref5[1];
        return (width <= dimension || height <= dimension) && options;
      }).reverse();
      return _.merge.apply(_, [{}, this.options].concat(opts));
    };
    /* API */


    _proto67.isOpen = function isOpen() {
      return this.instance.isOpen();
    };

    _proto67.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this.isOpen();
      }

      return this[force ? 'open' : 'close']();
    };

    _proto67.open = function open() {
      if (this.isOpen()) return null;
      if (this.isLocked()) return this.whenUnlocked(this.open.bind(this));
      if (this.instance.isLocked()) return this.instance.whenUnlocked(this.open.bind(this));
      this.$overlay.prependTo(this.$overlayed);
      this.instance.open();

      this._trigger('open');
    };

    _proto67.close = function close() {
      if (!this.isOpen()) return null;
      if (this.isLocked()) return this.whenUnlocked(this.close.bind(this));
      if (this.instance.isLocked()) return this.instance.whenUnlocked(this.close.bind(this));
      this.lock();
      this.instance.close();

      this._delay(function () {
        this.$overlay.detach();
        this.unlock();

        this._trigger('close');
      }, Widgets.Overlay.config.options.animations.close);
    };

    return SpinnerOverlay;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(SpinnerOverlay, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Colors, Svelto.Sizes); // @optional ../validate/validate.js
// @require core/svelto/svelto.js
// @require lib/fetch/fetch.js
// @require lib/url/url.js
// @require widgets/toast/toast.js
// @require widgets/spinner/overlay/overlay.js
//TODO: The spinner overlay shouldn't be closable
//TODO: Add a way to abort it, maybe hovering the spinner a clickable X will be displayed and abort the request if tapped (or something more intuitive and easier to implement...)


(function ($, _, Svelto, Widgets, Factory, fetch, URL) {
  /* CONFIG */
  var config = {
    name: 'formAjax',
    plugin: true,
    selector: 'form.ajax',
    options: {
      spinnerOverlay: true,
      // Enable/disable the `spinnerOverlay`, if disabled one can use the triggered events in order to provide a different visual feedback to the user
      timeout: 31000,
      // 1 second more than the default value of PHP's `max_execution_time` setting
      autoclose: {
        // Close the form (or its container) on success
        enabled: true,
        selectors: ['.modal', '.panel', '.popover', '.overlay', '.expander'],
        // Possible selectors for the container that needs to be closed
        plugins: ['modal', 'panel', 'popover', 'overlay', 'expander'],
        // Maps each selector to its jQuery plugin name
        methods: 'close' // Maps each plugin with a method to call. Can also be a string if all the plugins have the same method name

      },
      messages: {
        success: 'Done! A page refresh may be needed',
        refreshing: 'Done! Refreshing the page...',
        redirecting: 'Done! Redirecting...'
      },
      callbacks: {
        beforesend: _.noop,
        error: _.noop,
        success: _.noop,
        complete: _.noop
      }
    }
  };
  /* FORM AJAX */

  var FormAjax =
  /*#__PURE__*/
  function (_Widgets$Widget38) {
    _inheritsLoose(FormAjax, _Widgets$Widget38);

    function FormAjax() {
      return _Widgets$Widget38.apply(this, arguments) || this;
    }

    var _proto68 = FormAjax.prototype;

    /* SPECIAL */
    _proto68._variables = function _variables() {
      this.form = this.element;
      this.$form = this.$element;
    };

    _proto68._events = function _events() {
      this.___submit();
    };
    /* AUTOCLOSE */


    _proto68._autoclose = function _autoclose() {
      var _this30 = this;

      var _options$autoclose = this.options.autoclose,
          selectors = _options$autoclose.selectors,
          plugins = _options$autoclose.plugins,
          methods = _options$autoclose.methods;

      var _loop3 = function _loop3(i, l) {
        var $closable = _this30.$form.closest(selectors[i]);

        if (!$closable.length) return "continue";
        var method = _.isArray(methods) ? methods[i] : methods;

        if (_this30.options.spinnerOverlay) {
          _this30._on('spinneroverlay:close', function () {
            return $closable[plugins[i]](method);
          });
        } else {
          $closable[plugins[i]](method);
        }

        return "break";
      };

      _loop2: for (var i = 0, l = selectors.length; i < l; i++) {
        var _ret = _loop3(i, l);

        switch (_ret) {
          case "continue":
            continue;

          case "break":
            break _loop2;
        }
      }
    };
    /* SUBMIT */


    _proto68.___submit = function ___submit() {
      this._on(true, 'submit', this.__submit);
    };

    _proto68.__submit = function __submit(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      fetch({
        url: this.$form.attr('action'),
        method: this.$form.attr('method') || 'post',
        body: new FormData(this.form),
        cache: false,
        timeout: this.options.timeout,
        beforesend: this.__beforesend.bind(this),
        error: this.__error.bind(this),
        success: this.__success.bind(this),
        complete: this.__complete.bind(this)
      });
    };
    /* REQUEST HANDLERS */


    _proto68.__beforesend = function __beforesend(req) {
      if (this.options.spinnerOverlay) {
        this.$form.spinnerOverlay('open');
      }

      this._trigger('beforesend', req);
    };

    _proto68.__error =
    /*#__PURE__*/
    function () {
      var _error6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee41(res) {
        var message;
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return fetch.getValue(res, 'message');

              case 2:
                _context41.t0 = _context41.sent;

                if (_context41.t0) {
                  _context41.next = 5;
                  break;
                }

                _context41.t0 = this.options.messages.error;

              case 5:
                message = _context41.t0;
                $.toast(message);

                this._trigger('error', res);

              case 8:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      return function __error(_x53) {
        return _error6.apply(this, arguments);
      };
    }();

    _proto68.__success =
    /*#__PURE__*/
    function () {
      var _success7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee42(res) {
        var resj, needsReload;
        return regeneratorRuntime.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return fetch.getValue(res);

              case 2:
                resj = _context42.sent;

                if (!resj) {
                  _context42.next = 12;
                  break;
                }

                if (!resj.error) {
                  _context42.next = 8;
                  break;
                }

                return _context42.abrupt("return", this.__error(res));

              case 8:
                if (resj.refresh || URL.isEqual(resj.url, window.location.href)) {
                  $.toast(resj.message || this.options.messages.refreshing);
                  location.reload();
                } else if (resj.url) {
                  // In order to redirect to another domain the protocol must be provided. For instance `https://www.domain.tld` will work while `www.domain.tld` won't
                  $.toast(resj.message || this.options.messages.redirecting);
                  needsReload = URL.isEqual(resj.url, window.location.href, true); // Supporting #target changes

                  location.assign(URL.makeAbsolute(resj.url));

                  if (needsReload) {
                    location.reload();
                  }
                } else if (!resj.noop) {
                  $.toast(resj.message || this.options.messages.success);
                }

              case 9:
                if (this.options.autoclose.enabled) this._autoclose();
                _context42.next = 13;
                break;

              case 12:
                $.toast(this.options.messages.success);

              case 13:
                this._trigger('success', res);

              case 14:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      return function __success(_x54) {
        return _success7.apply(this, arguments);
      };
    }();

    _proto68.__complete = function __complete(res) {
      if (this.options.spinnerOverlay) {
        this.$form.spinnerOverlay('close');
      }

      this._trigger('complete', res);
    };

    return FormAjax;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(FormAjax, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.fetch, Svelto.URL); // @optional ./vendor/marked.js
// @optional lib/emojify/emojify.js
// @optional lib/markdown/markdown.js
// @optional widgets/emoji/picker/popover/popover_trigger.js
// @optional widgets/form/ajax/ajax.js
// @require widgets/storable/storable.js
//TODO: MAYBE make a simpler editor with some stuff unimplemented, then extend it with a `EditorMarkdown` etc...
//TODO: Switch to a `contenteditable` version where the preview and editor actual are the same thing


(function ($, _, Svelto, Widgets, Factory, Pointer, Emoji, Emojify, EmojipickerPopover, EmojipickerPopoverTrigger, Markdown) {
  /* CONFIG */
  var config = {
    name: 'editor',
    plugin: true,
    selector: '.editor',
    options: {
      parentUnfullscreenEvents: 'popover:close modal:close panel:close chatmessageeditable:unedit chatmessagereplyable:unreply chatmessagereplyablereply:unreply',
      //FIXME: Ugly
      parser: Markdown.parse,
      storage: {
        enabled: false,
        // Whether to preserve the content across refreshes/sessions
        ttl: 604800 // 1 week

      },
      actions: {
        bold: function bold() {
          this._action('**', '**', 'bold');
        },
        italic: function italic() {
          this._action('_', '_', 'italic');
        },
        strikethrough: function strikethrough() {
          this._action('~~', '~~', 'removed');
        },
        list_unordered: function list_unordered() {
          this._action('\n- ', '\n', 'List element');
        },
        list_ordered: function list_ordered() {
          this._action('\n1. ', '\n', 'List element');
        },
        header_1: function header_1() {
          this._action('\n# ', '\n', 'Header');
        },
        header_2: function header_2() {
          this._action('\n## ', '\n', 'Header');
        },
        header_3: function header_3() {
          this._action('\n### ', '\n', 'Header');
        },
        link: function link() {
          this._action('[', '](https://example.com)', 'Link');
        },
        image: function image() {
          this._action('![', '](https://example.com/image.jpg)', 'Image');
        },
        code: function code() {
          this._action('`', '`', 'code');
        },
        quote: function quote() {
          this._action('\n> ', '\n', 'Quote');
        },
        divider: function divider() {
          this._action('\n-----', '\n', '', false);
        },
        undo: function undo() {
          document.execCommand('undo');
        },
        redo: function redo() {
          document.execCommand('redo');
        },
        store: function store() {
          this._storageSet(this._storageKey, this.get(), this.options.storage.ttl);
        },
        unstore: function unstore() {
          this._storageRemove(this._storageKey);
        },
        restore: function restore() {
          this.set(this._storageGet(this._storageKey));
        },
        preview: function preview() {
          this.togglePreview();
        },
        fullscreen: function fullscreen() {
          this.toggleFullscreen();
        }
      },
      datas: {
        action: 'action'
      },
      classes: {
        preview: 'preview',
        fullscreen: 'fullscreen',
        fullscreenable: {
          request: 'fullscreen-request'
        },
        trigger: {
          active: 'active text-secondary'
        }
      },
      selectors: {
        actions: '[data-action]',
        fullscreenable: '.card, .chat, .chat-message-content, .modal, .panel, .popover',
        preview: '.editor-preview',
        textarea: 'textarea',
        form: 'form',
        triggers: {
          all: '[data-action]',
          preview: '[data-action="preview"]',
          fullscreen: '[data-action="fullscreen"]'
        }
      },
      keystrokes: {
        'ctmd + b': ['action', 'bold'],
        'ctmd + i': ['action', 'italic'],
        'ctmd + s': ['action', 'strikethrough'],
        'ctmd + u': ['action', 'list_unordered'],
        'ctmd + o': ['action', 'list_ordered'],
        'ctmd + l': ['action', 'link'],
        'ctmd + g': ['action', 'image'],
        'ctmd + k': ['action', 'code'],
        'ctmd + m': ['action', 'quote'],
        'ctmd + d': ['action', 'divider'],
        'ctrl + shift + p': ['action', 'preview'],
        'ctrl + shift + f': ['action', 'fullscreen'],
        'esc': '__esc'
      },
      callbacks: {
        action: _.noop,
        preview: _.noop,
        unpreview: _.noop,
        fullscreen: _.noop,
        unfullscreen: _.noop
      }
    }
  };
  /* EDITOR */

  var Editor =
  /*#__PURE__*/
  function (_Widgets$Storable3) {
    _inheritsLoose(Editor, _Widgets$Storable3);

    function Editor() {
      return _Widgets$Storable3.apply(this, arguments) || this;
    }

    var _proto69 = Editor.prototype;

    /* SPECIAL */
    _proto69._variables = function _variables() {
      _Widgets$Storable3.prototype._variables.call(this);

      this.$editor = this.$element;
      this.editor = this.$editor[0];
      this.$textarea = this.$editor.find(this.options.selectors.textarea);
      this.textarea = this.$textarea[0];
      this.$preview = this.$editor.find(this.options.selectors.preview);
      this.$triggers = this.$editor.find(this.options.selectors.triggers.all);
      this.$triggerPreview = this.$triggers.filter(this.options.selectors.triggers.preview);
      this.$triggerFullscreen = this.$triggers.filter(this.options.selectors.triggers.fullscreen);
      this.$fullscreenable = this.$editor.parents(this.options.selectors.fullscreenable);
      this.$emojipickerPopoverTrigger = EmojipickerPopoverTrigger ? this.$editor.find(EmojipickerPopoverTrigger.config.selector) : false;
      this.$form = this.$editor.closest(this.options.selectors.form);
    };

    _proto69._init = function _init() {
      this._isPreview = this.$editor.hasClass(this.options.classes.preview);
      this._isFullscreen = this.$editor.hasClass(this.options.classes.fullscreen);
      /* STORAGE */

      this.options.storage.enabled = this.options.storage.enabled || $.widget.is(this.editor, Widgets.Storable, true);

      if (this.options.storage.enabled) {
        this._storageInit();

        if (this._storageKey) {
          var action = this.get() ? 'store' : 'restore';
          this.options.actions[action].apply(this);
        }
      }
    };

    _proto69._events = function _events() {
      this.___keydown();

      this.___triggers();

      this.___parentUnfullscreen();

      if (this.options.storage.enabled && this._storageKey) {
        this.___storage();

        if (this.$form.length) this.___submit();
      }

      if (this.$emojipickerPopoverTrigger && this.$emojipickerPopoverTrigger.length) this.___emojipicker();
    };
    /* KEYDOWN */


    _proto69.___keydown = function ___keydown($target) {
      this._onHover([$.$document, 'keydown', this.__keydown]);

      this._on(this.$textarea, 'keydown', this.__keydown);
    };
    /* ESC */


    _proto69.__esc = function __esc() {
      if (!this.isFullscreen()) return null;
      this.unfullscreen();
    };
    /* TRIGGERS */


    _proto69.___triggers = function ___triggers() {
      var _this31 = this;

      var _loop4 = function _loop4(i, l) {
        var trigger = _this31.$triggers[i],
            $trigger = $(trigger),
            action = $trigger.data(_this31.options.datas.action);

        _this31._on($trigger, Pointer.tap, function (event) {
          return _this31.action(action, event);
        });
      };

      for (var i = 0, l = this.$triggers.length; i < l; i++) {
        _loop4(i, l);
      }
    };
    /* PARENT UNFULLSCREEN */


    _proto69.___parentUnfullscreen = function ___parentUnfullscreen() {
      this._on(true, $.$document, this.options.parentUnfullscreenEvents, this.__parentUnfullscreen);
    };

    _proto69.__parentUnfullscreen = function __parentUnfullscreen(event) {
      if (!event.target.contains(this.editor)) return;
      this.unfullscreen();
    };
    /* STORAGE */


    _proto69.___storage = function ___storage() {
      this._on('change cut paste keyup', this._throttle(this.options.actions.store.bind(this), 1000));
    };

    _proto69._storageInit = function _storageInit() {
      this._storageKey = this.$editor.attr('id');
    };
    /* SUBMIT */


    _proto69.___submit = function ___submit() {
      var event = Widgets.FormAjax && $.widget.is(this.$form[0], Widgets.FormAjax) ? 'formajax:success' : 'submit';

      this._on(this.$form, event, this.__submit);
    };

    _proto69.__submit = function __submit() {
      this.options.actions.unstore.apply(this);
    };
    /* EMOJIPICKER */


    _proto69.___emojipicker = function ___emojipicker() {
      this._on(true, this.$emojipickerPopoverTrigger, 'emojipickerpopovertrigger:beforetrigger', this.___emojipickerOpen);
    };

    _proto69.___emojipickerOpen = function ___emojipickerOpen() {
      this._one(true, $.$document, 'emojipickerpopover:open', this.__emojipickerOpen);
    };

    _proto69.__emojipickerOpen = function __emojipickerOpen() {
      this._one(true, $.$document, 'emojipickerpopover:beforeclose', this.__emojipickerClose);

      this._on(true, $.$document, 'emojipicker:pick', this.__emojipickerPick);
    };

    _proto69.__emojipickerClose = function __emojipickerClose() {
      this._off($.$document, 'emojipicker:pick', this.__emojipickerPick);
    };

    _proto69.__emojipickerPick = function __emojipickerPick(event, data) {
      var encoded = Emoji.encode(data.emoji, data.tone);

      this._insertAtSelection(encoded, true);
    };
    /* SELECTION */


    _proto69._getSelection = function _getSelection() {
      var start = this.textarea.selectionStart,
          end = this.textarea.selectionEnd,
          text = this.$textarea.val().substring(start, end);
      return {
        start: start,
        end: end,
        text: text
      };
    };

    _proto69._getWordSelection = function _getWordSelection() {
      var value = this.$textarea.val(),
          selection = this._getSelection();

      if (selection.text.length || !value) return selection;
      /* FINDING */

      var start = selection.start;

      while (start >= 0 && start < value.length) {
        if (!value[start].match(/[a-zA-Z0-9-]/)) break;
        start -= 1;
      }

      start = Math.min(selection.start, start + 1);
      var end = selection.end + 1;

      while (end < value.length) {
        if (!value[end].match(/[a-zA-Z0-9-]/)) break;
        end += 1;
      }

      if (start === selection.start || end === selection.end) return selection;
      this.textarea.setSelectionRange(start, end);
      return this._getSelection();
    };

    _proto69._insertAtSelection = function _insertAtSelection(text, padding) {
      if (padding === void 0) {
        padding = false;
      }

      var value = this.$textarea.val(),
          selection = this._getSelection(),
          padLeft = padding && selection.start && value[selection.start - 1] !== ' ' ? ' ' : '',
          padRight = padding && selection.end < value.length && value[selection.end] !== ' ' ? ' ' : '',
          newValue = value.substr(0, selection.start) + padLeft + text + padRight + value.substr(selection.end, value.length),
          newRange = selection.start + padLeft.length + text.length;

      this.$textarea.val(newValue).trigger('change');
      this.textarea.setSelectionRange(newRange, newRange);
    };

    _proto69._replaceSelection = function _replaceSelection(prefix, suffix, placeholder) {
      var value = this.$textarea.val(),
          selection = this._getSelection(),
          newValue = value.substr(0, selection.start) + prefix + placeholder + suffix + value.substr(selection.end, value.length);

      this.$textarea.val(newValue).trigger('change');
      this.textarea.setSelectionRange(selection.start + prefix.length, selection.start + prefix.length + placeholder.length);
    };

    _proto69._isSelectionWrapped = function _isSelectionWrapped(prefix, suffix) {
      var value = this.$textarea.val(),
          selection = this._getSelection();

      return value.substr(selection.start - prefix.length, prefix.length) === prefix && value.substr(selection.end, suffix.length) === suffix;
    };

    _proto69._toggleWrapSelection = function _toggleWrapSelection(prefix, suffix, placeholder) {
      if (this._isSelectionWrapped(prefix, suffix)) {
        this._unwrapSelection(prefix, suffix, placeholder);
      } else {
        this._wrapSelection(prefix, suffix);
      }
    };

    _proto69._wrapSelection = function _wrapSelection(prefix, suffix) {
      var value = this.$textarea.val(),
          selection = this._getSelection(),
          newValue = value.substr(0, selection.start) + prefix + selection.text + suffix + value.substr(selection.end, value.length);

      this.$textarea.val(newValue).trigger('change');
      this.textarea.setSelectionRange(selection.start + prefix.length, selection.end + prefix.length);
    };

    _proto69._unwrapSelection = function _unwrapSelection(prefix, suffix, placeholder) {
      var value = this.$textarea.val(),
          selection = this._getSelection(),
          isPlaceholder = selection.text === placeholder,
          newValue = value.substr(0, selection.start - prefix.length) + (isPlaceholder ? '' : selection.text) + value.substr(selection.end + suffix.length, value.length);

      this.$textarea.val(newValue).trigger('change');
      this.textarea.setSelectionRange(selection.start - prefix.length, selection.end - prefix.length - (isPlaceholder ? selection.text.length : 0));
    };
    /* ACTION */


    _proto69._action = function _action(prefix, suffix, placeholder, needWord) {
      if (needWord === void 0) {
        needWord = true;
      }

      var selection = needWord ? this._getWordSelection() : this._getSelection();

      if (selection.text.length) {
        this._toggleWrapSelection(prefix, suffix, placeholder);
      } else {
        this._replaceSelection(prefix, suffix, placeholder);
      }
    };
    /* PARSE */


    _proto69._parse = function _parse(str) {
      if (str === void 0) {
        str = this.$textarea.val();
      }

      return this.options.parser(str);
    };
    /* RENDER */


    _proto69._render =
    /*#__PURE__*/
    function () {
      var _render2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee43() {
        return regeneratorRuntime.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.t0 = this.$preview;
                _context43.next = 3;
                return this._parse();

              case 3:
                _context43.t1 = _context43.sent;

                _context43.t0.html.call(_context43.t0, _context43.t1);

                if (Emojify) this.$preview.emojify();

              case 6:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      return function _render() {
        return _render2.apply(this, arguments);
      };
    }();
    /* API */


    _proto69.get = function get(parsed) {
      return parsed ? this._parse() : this.$textarea.val();
    };

    _proto69.set = function set(value) {
      if (!_.isString(value) || value === this.$textarea.val()) return;
      this.$textarea.val(value).trigger('change');
      if (this._isPreview) this._render();
    };

    _proto69.reset = function reset() {
      return this.set('');
    };

    _proto69.action = function action(_action2, event) {
      if (!_action2 || !this.options.actions.hasOwnProperty(_action2)) return;
      if (event) event.preventDefault();

      this.options.actions[_action2].apply(this);

      this.textarea.focus();

      this._trigger('action', {
        action: _action2
      });
    };
    /* PREVIEW */


    _proto69.isPreview = function isPreview() {
      return this._isPreview;
    };

    _proto69.togglePreview = function togglePreview(force) {
      if (force === void 0) {
        force = !this._isPreview;
      }

      return this[force ? 'preview' : 'unpreview']();
    };

    _proto69.preview = function preview() {
      if (this._isPreview) return null;
      this._isPreview = true;

      this._render();

      this.$preview.height(this.$textarea.height());
      this.$editor.addClass(this.options.classes.preview);
      this.$triggerPreview.addClass(this.options.classes.trigger.active);

      this._trigger('preview');
    };

    _proto69.unpreview = function unpreview() {
      if (!this._isPreview) return null;
      this._isPreview = false;
      this.$editor.removeClass(this.options.classes.preview);
      this.$triggerPreview.removeClass(this.options.classes.trigger.active);

      this._trigger('unpreview');
    };
    /* FULLSCREEN */


    _proto69.isFullscreen = function isFullscreen() {
      return this._isFullscreen;
    };

    _proto69.toggleFullscreen = function toggleFullscreen(force) {
      if (force === void 0) {
        force = !this._isFullscreen;
      }

      return this[force ? 'fullscreen' : 'unfullscreen']();
    };

    _proto69.fullscreen = function fullscreen() {
      if (this._isFullscreen) return null;
      this._isFullscreen = true;
      this.$layout.disableScroll();
      this.$fullscreenable.addClass(this.options.classes.fullscreenable.request);
      this.$editor.addClass(this.options.classes.fullscreen);
      this.$triggerFullscreen.addClass(this.options.classes.trigger.active);

      this._trigger('fullscreen');
    };

    _proto69.unfullscreen = function unfullscreen() {
      if (!this._isFullscreen) return null;
      this._isFullscreen = false;
      this.$layout.enableScroll();
      this.$fullscreenable.removeClass(this.options.classes.fullscreenable.request);
      this.$editor.removeClass(this.options.classes.fullscreen);
      this.$triggerFullscreen.removeClass(this.options.classes.trigger.active);

      this._trigger('unfullscreen');
    };

    return Editor;
  }(Widgets.Storable);
  /* FACTORY */


  Factory.make(Editor, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Emoji, Svelto.Emojify, Svelto.Widgets.EmojipickerPopover, Svelto.Widgets.EmojipickerPopoverTrigger, Svelto.Markdown); // @optional lib/emojify/emojify.js
// @optional widgets/editor/editor.js
// @require core/widget/widget.js
// @require lib/autofocus/helpers.js
// @require widgets/remote/loader/loader.js


(function ($, _, Svelto, Widgets, Factory, Emojify) {
  /* CONFIG */
  var config = {
    name: 'chatMessageEditable',
    plugin: true,
    selector: '.chat-message.editable',
    options: {
      classes: {
        editing: 'editing'
      },
      selectors: {
        message: '.chat-message-content > *:only-child, .chat-message-content > .card-header:first-child + .card-block',
        blocks: {
          hide: '.editable-hide',
          show: '.editable-show'
        }
      },
      callbacks: {
        edit: _.noop,
        unedit: _.noop
      }
    }
  };
  /* CHAT MESSAGE EDITABLE */

  var ChatMessageEditable =
  /*#__PURE__*/
  function (_Widgets$Widget39) {
    _inheritsLoose(ChatMessageEditable, _Widgets$Widget39);

    function ChatMessageEditable() {
      return _Widgets$Widget39.apply(this, arguments) || this;
    }

    var _proto70 = ChatMessageEditable.prototype;

    /* SPECIAL */
    _proto70._variables = function _variables() {
      this.$editable = this.$element;
      this.$message = this.$editable.find(this.options.selectors.message).first();
      this._isEditing = this.$editable.hasClass(this.options.classes.editing);
    };

    _proto70._events = function _events() {
      this.___submit();
    };
    /* SUBMIT */


    _proto70.___submit = function ___submit() {
      this._on(true, 'submit formajax:success', this.__submit);
    };

    _proto70.__submit =
    /*#__PURE__*/
    function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee44() {
        var content, rendered;
        return regeneratorRuntime.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                content = this.$editable.find('textarea').first().val();

                if (!Widgets.Editor) {
                  _context44.next = 7;
                  break;
                }

                _context44.next = 4;
                return Widgets.Editor.config.options.parser(content);

              case 4:
                _context44.t0 = _context44.sent;
                _context44.next = 8;
                break;

              case 7:
                _context44.t0 = content;

              case 8:
                rendered = _context44.t0;
                this.$message.html(rendered);
                if (Emojify) this.$message.emojify();
                this.unedit();

              case 12:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      return function __submit() {
        return _submit.apply(this, arguments);
      };
    }();
    /* HELPERS */


    _proto70._update = function _update() {
      var $show = this.$editable.find(this.options.selectors.blocks.show),
          $hide = this.$editable.find(this.options.selectors.blocks.hide),
          $on = this._isEditing ? $show : $hide,
          $off = this._isEditing ? $hide : $show;
      $off.autoblur();
      this.$editable.toggleClass(this.options.classes.editing, this._isEditing);
      $on.autofocus().filter(function (i, ele) {
        return $.widget.is(ele, Widgets.RemoteLoader);
      }).remoteLoader('request');
    };
    /* API */


    _proto70.isEditing = function isEditing() {
      return this._isEditing;
    };

    _proto70.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this._isEditing;
      }

      if (!!force !== this._isEditing) {
        this._isEditing = !!force;

        this._update();

        this._trigger(this._isEditing ? 'edit' : 'unedit');
      }
    };

    _proto70.edit = function edit() {
      this.toggle(true);
    };

    _proto70.unedit = function unedit() {
      this.toggle(false);
    };

    return ChatMessageEditable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(ChatMessageEditable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Emojify); // @require core/colors/colors.js
// @require lib/transform/transform.js
// @require widgets/draggable/draggable.js
//TODO: Add flick support


(function ($, _, Svelto, Widgets, Factory, Colors) {
  /* CONFIG */
  var config = {
    name: 'switch',
    plugin: true,
    selector: '.switch',
    options: {
      colors: {
        on: Colors.secondary,
        off: Colors.gray
      },
      datas: {
        colors: {
          on: 'color-on',
          off: 'color-off'
        }
      },
      classes: {
        checked: 'checked'
      },
      selectors: {
        input: 'input',
        bar: '.switch-bar',
        handler: '.switch-handler'
      },
      keystrokes: {
        'left': 'uncheck',
        'right': 'check',
        'spacebar': 'toggle'
      },
      callbacks: {
        change: _.noop,
        check: _.noop,
        uncheck: _.noop
      }
    }
  };
  /* SWITCH */

  var Switch =
  /*#__PURE__*/
  function (_Widgets$Widget40) {
    _inheritsLoose(Switch, _Widgets$Widget40);

    function Switch() {
      return _Widgets$Widget40.apply(this, arguments) || this;
    }

    var _proto71 = Switch.prototype;

    /* SPECIAL */
    _proto71._variables = function _variables() {
      this.$switch = this.$element;
      this.$input = this.$switch.find(this.options.selectors.input);
      this.$bar = this.$switch.find(this.options.selectors.bar);
      this.$handler = this.$switch.find(this.options.selectors.handler);
      this.isChecked = this.$input.prop('checked');
      this.switchWidth = this.$switch.width();
      this.handlerWidth = this.$handler.width();
    };

    _proto71._init = function _init() {
      /* OPTIONS */
      this.options.colors.on = this.$switch.data(this.options.datas.colors.on) || this.options.colors.on;
      this.options.colors.off = this.$switch.data(this.options.datas.colors.off) || this.options.colors.off;
      /* INITIAL SETTING */

      this._updateColors();

      this._updatePosition();
    };

    _proto71._events = function _events() {
      this.___change();

      this.___keydown();

      this.___drag();
    };

    _proto71._destroy = function _destroy() {
      this.$handler.draggable('destroy');
    };
    /* CHANGE */


    _proto71.___change = function ___change() {
      this._on(true, this.$input, 'change', this.__change);
    };

    _proto71.__change = function __change() {
      this.toggle(this.$input.prop('checked'));
    };
    /* KEYDOWN */


    _proto71.___keydown = function ___keydown() {
      this._onHover([$.$document, 'keydown', this.__keydown]);
    };
    /* DRAG */


    _proto71.___drag = function ___drag() {
      this.$handler.draggable({
        draggable: this.isEnabled.bind(this),
        axis: 'x',
        proxy: {
          $element: this.$switch,
          noMotion: false
        },
        constrainer: {
          $element: this.$switch
        },
        callbacks: {
          end: this.__dragEnd.bind(this)
        }
      });
    };

    _proto71.__dragEnd = function __dragEnd(event, data) {
      if (data.motion) {
        var isChecked = data.dragXY.x + this.handlerWidth / 2 >= this.switchWidth / 2;
        this.toggle(isChecked, true);
      } else {
        this.toggle();
      }
    };
    /* UPDATE */


    _proto71._updatePosition = function _updatePosition() {
      this.$handler.translateX(this.isChecked ? this.switchWidth - this.handlerWidth : 0);
    };

    _proto71._updateColors = function _updateColors() {
      this.$bar.toggleClass(this.options.colors.on, this.isChecked);
      this.$bar.toggleClass(this.options.colors.off, !this.isChecked);
      this.$handler.toggleClass(this.options.colors.on, this.isChecked);
      this.$handler.toggleClass(this.options.colors.off, !this.isChecked);
    };

    _proto71._updateInput = function _updateInput() {
      this.$input.prop('checked', this.isChecked).trigger('change');
    };

    _proto71._update = function _update() {
      this._updatePosition();

      this._updateColors();

      this._updateInput();
    };
    /* API */


    _proto71.get = function get() {
      return this.isChecked;
    };

    _proto71.toggle = function toggle(force, _reset) {
      if (!_.isBoolean(force)) {
        force = !this.isChecked;
      }

      if (force !== this.isChecked) {
        this.isChecked = force;
        this.$switch.toggleClass(this.options.classes.checked, this.isChecked);

        this._update();

        this._trigger('change');

        this._trigger(this.isChecked ? 'check' : 'uncheck');
      } else if (_reset) {
        this._updatePosition();
      }
    };

    _proto71.check = function check() {
      this.toggle(true);
    };

    _proto71.uncheck = function uncheck() {
      this.toggle(false);
    };

    return Switch;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Switch, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Colors); // @require core/widget/widget.js
//TODO: Better performance with tableHelper, just put the new addded row in the right position, performance boost


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'tableSortable',
    plugin: true,
    selector: 'table.sortable:not(.datatable)',
    options: {
      sorters: {
        int: function int(a, b) {
          return parseInt(a, 10) - parseInt(b, 10);
        },
        float: function float(a, b) {
          return parseFloat(a) - parseFloat(b);
        },
        string: function string(a, b) {
          a = a.toLocaleLowerCase();
          b = b.toLocaleLowerCase();
          return a.localeCompare(b);
        }
      },
      datas: {
        sorter: 'sort',
        value: 'sort-value'
      },
      classes: {
        sort: {
          asc: 'sort-asc',
          desc: 'sort-desc'
        }
      },
      selectors: {
        header: 'thead th',
        sortable: '[data-sort]',
        body: 'tbody',
        notEmptyRow: 'tr:not(.table-row-empty)',
        rowCell: 'td'
      },
      callbacks: {
        sort: _.noop
      }
    }
  };
  /* TABLE SORTABLE */

  var TableSortable =
  /*#__PURE__*/
  function (_Widgets$Widget41) {
    _inheritsLoose(TableSortable, _Widgets$Widget41);

    function TableSortable() {
      return _Widgets$Widget41.apply(this, arguments) || this;
    }

    var _proto72 = TableSortable.prototype;

    /* SPECIAL */
    _proto72._variables = function _variables() {
      this.$table = this.$element;
      this.$headers = this.$table.find(this.options.selectors.header);
      this.$sortables = this.$headers.filter(this.options.selectors.sortable);
      this.$tbody = this.$table.find(this.options.selectors.body);
      this.table = this.element;
      this.tbody = this.$tbody[0];
      this.sortData = {}; // Caching object for datas and references to rows

      this.isDirty = true;
      this.$currentSortable = false;
      this.currentIndex = false; // `$headers` index, not `$sortables` index

      this.currentDirection = false;
    };

    _proto72._init = function _init() {
      var $initial = this.$headers.filter("." + this.options.classes.sort.asc + ", ." + this.options.classes.sort.desc).first();

      if ($initial.length === 1) {
        this.sort(this.$headers.index($initial), $initial.hasClass(this.options.classes.sort.asc) ? 'asc' : 'desc');
      }
    };

    _proto72._events = function _events() {
      this.___change();

      this.___tap();
    };
    /* CHANGE */


    _proto72.___change = function ___change() {
      this._on(true, 'change tablehelper:change', this.__change);
    };

    _proto72.__change = function __change() {
      if (this.currentIndex !== false) {
        this.sortData = {};
        this.isDirty = true;
        this.sort(this.currentIndex, this.currentDirection);
      }
    };
    /* TAP */


    _proto72.___tap = function ___tap() {
      this._on(this.$sortables, Pointer.tap, this.__tap);
    };

    _proto72.__tap = function __tap(event) {
      var newIndex = this.$headers.index(event.currentTarget),
          newDirection = this.currentIndex === newIndex ? this.currentDirection === 'asc' ? 'desc' : 'asc' : 'asc';
      this.sort(newIndex, newDirection);
    };
    /* SORT */


    _proto72.sort = function sort(index, direction) {
      /* VALIDATE */
      var $sortable = this.$headers.eq(index);
      if (!$sortable.length) return; // Bad index

      var sorterName = $sortable.data(this.options.datas.sorter);
      if (!sorterName) return; // Unsortable column

      var sorter = this.options.sorters[sorterName];
      if (!sorter) return; // Unsupported sorter

      direction = direction && direction.toLowerCase() === 'desc' ? 'desc' : 'asc';
      /* CHECKING CACHED DATAS */

      if (_.isUndefined(this.sortData[index]) || this.isDirty) {
        /* VARIABLES */
        var $trs = this.$tbody.find(this.options.selectors.notEmptyRow);
        this.sortData[index] = new Array($trs.length);
        /* POPULATE */

        for (var i = 0, l = $trs.length; i < l; i++) {
          var $td = $trs.eq(i).find(this.options.selectors.rowCell).eq(index),
              value = $td.data(this.options.datas.value) || $td.text();
          this.sortData[index][i] = [$trs[i], value];
        }
      }
      /* SORT */


      if (index !== this.currentIndex || this.isDirty) {
        this.sortData[index].sort(function (a, b) {
          return sorter(a[1], b[1]);
        });
      }
      /* REVERSING */


      var needReversing = false;

      if (!this.isDirty && index === this.currentIndex && this.currentDirection !== false) {
        needReversing = direction !== this.currentDirection;
      } else {
        needReversing = direction === 'desc';
      }

      if (needReversing) {
        this.sortData[index].reverse();
      }
      /* REORDER */


      if (index !== this.currentIndex || direction !== this.currentDirection || this.isDirty) {
        this.table.removeChild(this.tbody); // Detach

        for (var _i4 = 0, _l3 = this.sortData[index].length; _i4 < _l3; _i4++) {
          this.tbody.appendChild(this.sortData[index][_i4][0]); // Reorder
        }

        this.table.appendChild(this.tbody); // Attach
      }
      /* STYLE */


      if (index !== this.currentIndex || direction !== this.currentDirection) {
        if (this.$currentSortable) {
          this.$currentSortable.removeClass(this.options.classes.sort[this.currentDirection]);
        }

        $sortable.addClass(this.options.classes.sort[direction]);
      }
      /* UPDATE */


      this.isDirty = false;
      this.$currentSortable = $sortable;
      this.currentIndex = index;
      this.currentDirection = direction;
      /* TRIGGER */

      this._trigger('sort', {
        index: this.currentIndex,
        direction: this.currentDirection
      });
    };

    return TableSortable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(TableSortable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'tableHelper',
    plugin: true,
    selector: 'table.table',
    templates: {
      row: function (o) {
        var __t,
            __p = '',
            __j = Array.prototype.join;

        function print() {
          __p += __j.call(arguments, '');
        }

        __p += '<tr ' + ((__t = o.id ? 'class=' + o.id : '') == null ? '' : __t) + ' >';

        for (var i = 0, l = o.datas.length; i < l; i++) {
          ;
          __p += '<td>' + ((__t = o.datas[i]) == null ? '' : __t) + '</td>';
        }

        ;

        for (var i = 0, l = o.missing; i < l; i++) {
          ;
          __p += '<td></td>';
        }

        ;
        __p += '</tr>';
        return __p;
      }
    },
    options: {
      rowIdPrefix: 'srid',
      selectors: {
        header: 'thead',
        body: 'tbody',
        headerCell: 'th',
        rowCell: 'td',
        emptyRow: 'tr.table-row-empty',
        notEmptyRow: 'tr:not(.table-row-empty)'
      },
      callbacks: {
        change: _.noop,
        add: _.noop,
        update: _.noop,
        remove: _.noop,
        clear: _.noop
      }
    }
  };
  /* TABLE HELPER */

  var TableHelper =
  /*#__PURE__*/
  function (_Widgets$Widget42) {
    _inheritsLoose(TableHelper, _Widgets$Widget42);

    function TableHelper() {
      return _Widgets$Widget42.apply(this, arguments) || this;
    }

    var _proto73 = TableHelper.prototype;

    /* SPECIAL */
    _proto73._variables = function _variables() {
      this.$table = this.$element;
      this.$header = this.$table.find(this.options.selectors.header);
      this.$body = this.$table.find(this.options.selectors.body);
      this.$headerCells = this.$header.find(this.options.selectors.headerCell);
      this.$emptyRow = this.$body.find(this.options.selectors.emptyRow);
      this.columnsNr = this.$headerCells.length;
    };
    /* PRIVATE */


    _proto73._getRowId = function _getRowId(id) {
      return this.options.rowIdPrefix + '-' + this.guid + '-' + id;
    };
    /* API */


    _proto73.add = function add(id) {
      var _this32 = this;

      var rowId = id ? this._getRowId(id) : false;

      for (var _len8 = arguments.length, datas = new Array(_len8 > 1 ? _len8 - 1 : 0), _key9 = 1; _key9 < _len8; _key9++) {
        datas[_key9 - 1] = arguments[_key9];
      }

      if (datas.length) {
        if (rowId && $('.' + rowId).length === 1) return;

        var chunks = _.chunk(datas, this.columnsNr),
            $rows = $();

        chunks.forEach(function (chunk) {
          var rowHtml = _this32._template('row', {
            id: rowId,
            datas: chunk,
            missing: _this32.columnsNr - chunk.length
          }),
              $row = $("<table>" + rowHtml + "</table>").find('tr'); // Parsing a `tr` tag without a table might not be supported by the DOM library


          $rows = $rows.add($row);
        });
        this.$body.append($rows);

        this._trigger('change');

        this._trigger('add', {
          $rows: $rows
        });
      }
    };

    _proto73.update = function update(id) {
      var $row = $('.' + this._getRowId(id));

      if ((arguments.length <= 1 ? 0 : arguments.length - 1) && $row.length === 1) {
        var $rowCells = $row.find(this.options.selectors.rowCell);

        for (var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++) {
          if (_.isString(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1])) {
            $rowCells.eq(i).html(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
          }
        }

        this._trigger('change');

        this._trigger('update', {
          $row: $row
        });
      }
    };

    _proto73.remove = function remove(id) {
      var $row = $('.' + this._getRowId(id));

      if ($row.length === 1) {
        $row.remove();

        this._trigger('change');

        this._trigger('remove', {
          $row: $row
        });
      }
    };

    _proto73.clear = function clear() {
      var $rows = this.$body.find(this.options.selectors.notEmptyRow);

      if ($rows.length) {
        $rows.remove();

        this._trigger('change');

        this._trigger('clear', {
          $rows: $rows
        });
      }
    };

    return TableHelper;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(TableHelper, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require lib/directions/directions.js
// @require lib/autofocus/helpers.js
//TODO: Add again the super cool moving indicator
//TODO: Not well written, make it better
//TODO: Doesn't handle properly a change of the direction


(function ($, _, Svelto, Widgets, Factory, Pointer, Directions) {
  /* CONFIG */
  var config = {
    name: 'tabs',
    plugin: true,
    selector: '.tabs',
    options: {
      direction: 'top',
      highlight: true,
      classes: {
        active: {
          trigger: 'active',
          container: 'active'
        }
      },
      selectors: {
        triggers: '.tabs-triggers > *',
        containers: '.tabs-containers > *'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* TABS */

  var Tabs =
  /*#__PURE__*/
  function (_Widgets$Widget43) {
    _inheritsLoose(Tabs, _Widgets$Widget43);

    function Tabs() {
      return _Widgets$Widget43.apply(this, arguments) || this;
    }

    var _proto74 = Tabs.prototype;

    /* SPECIAL */
    _proto74._variables = function _variables() {
      var _this33 = this;

      this.$tabs = this.$element;
      this.$triggers = this.$tabs.find(this.options.selectors.triggers);
      this.$containers = this.$tabs.find(this.options.selectors.containers);
      this.options.direction = Directions.get().find(function (direction) {
        return _this33.$tabs.hasClass(direction);
      }) || this.options.direction;
      this.index = false;
    };

    _proto74._init = function _init() {
      var $active = this.$triggers.filter('.' + this.options.classes.active.trigger).first(),
          index = this.$triggers.index($active);
      this.set(index);
    };

    _proto74._events = function _events() {
      this.___tap();
    };
    /* PRIVATE */


    _proto74._sanitizeIndex = function _sanitizeIndex(index) {
      return _.clamp(index, 0, this.$triggers.length);
    };
    /* TAP */


    _proto74.___tap = function ___tap() {
      this._on(this.$triggers, Pointer.tap, this.__tap);
    };

    _proto74.__tap = function __tap(event) {
      event.stopImmediatePropagation();
      var index = this.$triggers.index($(event.currentTarget));
      this.set(index);
    };
    /* SELECTION */


    _proto74._toggleSelection = function _toggleSelection(index, force) {
      var $trigger = this.$triggers.eq(index),
          $container = this.$containers.eq(index);
      $trigger.toggleClass(this.options.classes.active.trigger, force);
      $container.toggleClass(this.options.classes.active.container, force);

      if (!force) {
        $container.autoblur();
      } else {
        $container.widgetize().autofocus();
      }

      if (this.options.highlight) {
        var oppositeDirection = Directions.getOpposite(this.options.direction);
        $trigger.toggleClass("highlighted highlight-" + oppositeDirection, force);
      }
    };

    _proto74._select = function _select(index) {
      this._toggleSelection(index, true);
    };

    _proto74._unselect = function _unselect(index) {
      this._toggleSelection(index, false);
    };
    /* API */


    _proto74.get = function get() {
      return this.index;
    };

    _proto74.set = function set(index) {
      index = this._sanitizeIndex(index);
      if (index === this.index) return;
      /* PREVIOUS */

      if (_.isNumber(this.index)) {
        this._unselect(this.index);
      }
      /* NEW */


      this.index = index;

      this._select(this.index);
      /* CALLBACKS */


      this._trigger('change');
    };

    return Tabs;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Tabs, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Directions); // @require core/keyboard/keyboard.js
// @require widgets/icon/icon.js
// @require widgets/toast/toast.js
//FIXME: Auto focus on the partial input doesn't work good on mobile, the keyboard keeps opening and closing


(function ($, _, Svelto, Widgets, Factory, Colors, Icon, Sizes, Pointer, Keyboard) {
  /* CONFIG */
  var config = {
    name: 'tagbox',
    plugin: true,
    selector: '.tagbox',
    templates: {
      tag: function (o) {
        var __t,
            __p = '';

        __p += '<div class="label tagbox-tag ' + ((__t = o.color) == null ? '' : __t) + ' ' + ((__t = o.size) == null ? '' : __t) + ' ' + ((__t = o.css) == null ? '' : __t) + '" data-tag-value="' + ((__t = o.value) == null ? '' : __t) + '"><span>' + ((__t = o.value) == null ? '' : __t) + '</span><i class="icon ' + ((__t = Svelto.Sizes.xsmall) == null ? '' : __t) + ' actionable tagbox-tag-remover">' + ((__t = Svelto.Icon('close')) == null ? '' : __t) + '</i></div>';
        return __p;
      }
    },
    options: {
      init: '',
      // Initial value
      tags: [],
      tag: {
        minLength: 3,
        color: Colors.gray,
        size: '',
        css: 'circular'
      },
      characters: {
        forbid: true,
        // Forbid or not
        forbidden: ['<', '>', ';', '`'],
        separator: ',',
        // It will also become kind of a forbidden character, used for insertion
        inserters: [Keyboard.keys.ENTER, Keyboard.keys.TAB] // They are keyCodes

      },
      sort: false,
      // The tags will be outputted in alphanumeric-sort order
      escape: false,
      // Escape potential XSS characters
      deburr: false,
      // Replace non basic-latin characters
      messages: {
        tooShort: '`$1` is shorter than $2 characters',
        duplicate: '`$1` is a duplicate',
        forbidden: 'The character you entered is forbidden'
      },
      datas: {
        value: 'tag-value'
      },
      selectors: {
        input: 'input.hidden',
        partial: 'input.tagbox-partial, .tagbox-partial input',
        tags: '.tagbox-tags',
        tag: '.tagbox-tag',
        tagLabel: 'span',
        tagRemover: '.tagbox-tag-remover'
      },
      callbacks: {
        change: _.noop,
        add: _.noop,
        remove: _.noop,
        empty: _.noop
      }
    }
  };
  /* TAGBOX */

  var Tagbox =
  /*#__PURE__*/
  function (_Widgets$Widget44) {
    _inheritsLoose(Tagbox, _Widgets$Widget44);

    function Tagbox() {
      return _Widgets$Widget44.apply(this, arguments) || this;
    }

    var _proto75 = Tagbox.prototype;

    /* SPECIAL */
    _proto75._variables = function _variables() {
      this.$tagbox = this.$element;
      this.$tags = this.$tagbox.find(this.options.selectors.tags);
      this.$input = this.$tagbox.find(this.options.selectors.input);
      this.$partial = this.$tagbox.find(this.options.selectors.partial);
      this.partial = this.$partial[0];
    };

    _proto75._init = function _init(suppressTriggers) {
      /* REMOVE PREVIOUS */
      this.$tagbox.find(this.options.selectors.tag).remove();
      /* OPTIONS */

      this.options.init = this.$input.val() || this.options.init;
      /* POPULATING */

      this.add(this.options.init, suppressTriggers);
    };

    _proto75._events = function _events() {
      this.___partial();

      this.___tapOnEmpty();

      this.___tapOnTagRemover();
    };
    /* PRIVATE */


    _proto75._sanitizeTag = function _sanitizeTag(value) {
      value = value.trim();

      if (this.options.escape) {
        value = _.escape(value);
      }

      if (this.options.deburr) {
        value = _.deburr(value);
      }

      return value;
    };

    _proto75._getTagHtml = function _getTagHtml(value) {
      return this._template('tag', _.extend({
        value: value
      }, this.options.tag));
    };

    _proto75._clearPartial = function _clearPartial() {
      this.$partial.val('').trigger('change');
    };
    /* UPDATE */


    _proto75._updateInput = function _updateInput() {
      this.$input.val(this.options.tags.join(this.options.characters.separator)).trigger('change');
    };
    /* TAG */


    _proto75._add = function _add(value) {
      var valueTrimmed = value.trim();
      value = this._sanitizeTag(value);

      if (valueTrimmed.length < this.options.tag.minLength) {
        if (valueTrimmed.length) {
          // So it won't be triggered when the user presses enter and the $partial is empty
          $.toast(_.format(this.options.messages.tooShort, value, this.options.tag.minLength));
        }
      } else if (this.options.tags.includes(value)) {
        $.toast(_.format(this.options.messages.duplicate, value));
      } else {
        this.options.tags.push(value);

        if (this.options.sort) {
          this.options.tags.sort();
        }

        var tagHtml = this._getTagHtml(value);

        if (this.options.tags.length === 1) {
          this.$tags.prepend(tagHtml);
        } else if (!this.options.sort) {
          this.$tagbox.find(this.options.selectors.tag).last().after(tagHtml);
        } else {
          var index = this.options.tags.indexOf(value);

          if (index === 0) {
            this.$tagbox.find(this.options.selectors.tag).first().before(tagHtml);
          } else {
            this.$tagbox.find(this.options.selectors.tag).eq(index - 1).after(tagHtml);
          }
        }

        return true;
      }

      return false;
    };

    _proto75._remove = function _remove($tag, tag) {
      $tag.remove();

      _.pull(this.options.tags, tag);
    };
    /* PARTIAL */


    _proto75.___partial = function ___partial() {
      this._on(this.$partial, 'keypress keydown', this.__keypressKeydown); // `keypress` is for printable characters, `keydown` for the others


      this._on(this.$partial, 'paste', this.__paste);

      this._on(this.$partial, 'blur', this.___blur);
    };
    /* KEYPRESS / KEYDOWN */


    _proto75.__keypressKeydown = function __keypressKeydown(event) {
      var value = this.$partial.val();

      if (this.options.characters.inserters.includes(event.keyCode) || event.keyCode === this.options.characters.separator.charCodeAt(0)) {
        var added = this.add(value);

        if (added) {
          this._clearPartial();
        }

        event.preventDefault();
        event.stopImmediatePropagation();
      } else if (event.keyCode === Keyboard.keys.BACKSPACE) {
        if (!value.length && this.options.tags.length) {
          var $tag = this.$tagbox.find(this.options.selectors.tag).last(),
              edit = !Keyboard.keystroke.hasCtrlOrCmd(event);
          this.remove($tag, edit);
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      } else if (this.options.characters.forbid && this.options.characters.forbidden.includes(String.fromCharCode(event.keyCode))) {
        $.toast(this.options.messages.forbidden);
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    /* PASTE */


    _proto75.__paste = function __paste(event) {
      var originalEvent = event.originalEvent || event;
      this.add(originalEvent.clipboardData.getData('text'));
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    /* BLUR */


    _proto75.___blur = function ___blur(event) {
      var value = this.$partial.val();
      if (!value) return;
      var added = this.add(value);
      if (added) this._clearPartial();
    };
    /* TAP ON TAG REMOVER */


    _proto75.___tapOnTagRemover = function ___tapOnTagRemover() {
      this._on(Pointer.tap, this.options.selectors.tagRemover, this.__tapOnTagRemover);
    };

    _proto75.__tapOnTagRemover = function __tapOnTagRemover(event) {
      event.stopImmediatePropagation();
      var $tag = $(event.target).closest(this.options.selectors.tag);
      this.remove($tag);
    };
    /* TAP ON EMPTY */


    _proto75.___tapOnEmpty = function ___tapOnEmpty() {
      this._on(Pointer.tap, this.__tapOnEmpty);
    };

    _proto75.__tapOnEmpty = function __tapOnEmpty(event) {
      if (!$.isFocused(this.partial) && !$(event.target).is(this.options.selectors.partial + ',' + this.options.selectors.tagLabel)) {
        this.partial.focus();
      }
    };
    /* API */


    _proto75.get = function get() {
      return _.cloneDeep(this.options.tags);
    };

    _proto75.add = function add(tag, suppressTriggers) {
      var _this34 = this;

      // The tag can be a string containing a single tag, multiple tags separated by `this.options.characters.separator`, or it can be an array (nested or not) of those strings
      if (_.isArray(tag)) {
        tag = _.flatten(tag).join(this.options.characters.separator);
      }

      var tags = tag.split(this.options.characters.separator),
          adds = tags.map(function (tag) {
        return _this34._add(tag);
      });
      var added = !!adds.find(_.identity);

      if (added) {
        this._updateInput();

        if (!suppressTriggers) {
          this._trigger('change');

          var addedTags = tags.filter(function (tag, index) {
            return adds[index];
          });

          this._trigger('add', addedTags);
        }
      }

      return added;
    };

    _proto75.remove = function remove(tag, edit, suppressTriggers) {
      // The tag can be a string containing a single tag, multiple tags separated by `this.options.characters.separator`, or it can be an array (nested or not) of those strings. In addition it can also be the jQuery object of that tag.
      var $tags = [],
          tags = [];

      if (tag instanceof $) {
        $tags = [tag];
        tags = [tag.data(this.options.datas.value)];
      } else {
        if (_.isArray(tag)) {
          tag = _.flatten(tag).join(this.options.characters.separator);
        }

        tag = tag.split(this.options.characters.separator);

        for (var i = 0, l = tag.length; i < l; i++) {
          var value = this._sanitizeTag(tag[i]),
              $tag = this.$tagbox.find(this.options.selectors.tag + '[data-' + this.options.datas.value + '="' + value.replace(/"/g, '\\"') + '"]');

          if ($tag.length === 1) {
            $tags.push($tag);
            tags.push(value);
          }
        }
      }

      if (tags.length) {
        for (var _i5 = 0, _l4 = tags.length; _i5 < _l4; _i5++) {
          this._remove($tags[_i5], tags[_i5]);
        }

        this._updateInput();

        if (tags.length === 1 && edit === true) {
          this.$partial.val(tags[0]).trigger('change');
        }

        if (!suppressTriggers) {
          this._trigger('change');

          this._trigger('remove', tags);

          if (!this.options.tags.length) {
            this._trigger('empty');
          }
        }
      }
    };

    _proto75.clear = function clear(suppressTriggers) {
      if (this.options.tags.length) {
        var previous = this.options.tags;
        this.options.tags = [];
        this.$tagbox.find(this.options.selectors.tag).remove();

        this._clearPartial();

        this._updateInput();

        if (!suppressTriggers) {
          this._trigger('change');

          this._trigger('remove', previous);

          this._trigger('empty');
        }
      }
    };

    _proto75.reset = function reset() {
      var previous = this.options.tags;
      this.clear(true);

      this._init(true);

      if (!_.isEqualJSON(previous, this.options.tags)) {
        this._trigger('change');

        var added = _.difference(this.options.tags, previous);

        if (added.length) {
          this._trigger('add', added);
        }

        var removed = _.difference(previous, this.options.tags);

        if (removed.length) {
          this._trigger('remove', removed);
        }

        if (!this.options.tags.length) {
          this._trigger('empty');
        }
      }
    };

    return Tagbox;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Tagbox, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Colors, Svelto.Icon, Svelto.Sizes, Svelto.Pointer, Svelto.Keyboard); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'targeter',
    options: {
      widget: false,
      // The target's widget class
      target: false,
      // Selector used to select the target
      $fallback: false,
      // Fallback jQuery element
      datas: {
        target: 'target'
      }
    }
  };
  /* TARGETER */

  var Targeter =
  /*#__PURE__*/
  function (_Widgets$Widget45) {
    _inheritsLoose(Targeter, _Widgets$Widget45);

    function Targeter() {
      return _Widgets$Widget45.apply(this, arguments) || this;
    }

    var _proto76 = Targeter.prototype;

    /* SPECIAL */
    _proto76._variables = function _variables() {
      this._targetSelector = this.options.target || (this.options.widget ? this.$element.data(this.options.widget.config.name.toLowerCase() + "-" + this.options.datas.target) : false) || this.$element.data(this.options.datas.target);
      this.$target = this._targetSelector ? $(this._targetSelector) : this.options.widget ? this.$element.closest(this.options.widget.config.selector) : this.options.$fallback;
      this.$target = this.$target.length ? this.$target : this.options.$fallback;
      if (!this.$target.length) return false;
      this.target = this.$target[0];
      if (this.options.widget) this._targetInstance = this.$target[this.options.widget.config.name]('instance');
    };

    _proto76._events = function _events() {
      this.___targetRemove();
    };
    /* TARGET REMOVE */


    _proto76.___targetRemove = function ___targetRemove() {
      this._on(true, this.$target, 'remove', this.__targetRemove);
    };

    _proto76.__targetRemove = function __targetRemove(event) {
      this.__remove(event);
    };

    return Targeter;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Targeter, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @optional widgets/remote/action/action_helper.js
// @optional widgets/remote/modal/modal_helper.js
// @optional widgets/remote/panel/panel_helper.js
// @optional widgets/remote/popover/popover_helper.js
// @require widgets/targeter/targeter.js
// @require widgets/toast/toast.js
//FIXME: Shouldn't extend `Targeter`, but `SelectableActions` needs that


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'actions',
    plugin: true,
    selector: '.actions',
    options: {
      $fallback: $.$html,
      //FIXME: Ugly, but needed in order to extend from `Targeter`
      ajax: {},
      // Default values
      actions: {
        action: $.remoteAction,
        modal: $.remoteModal,
        panel: $.remotePanel,
        popover: $.remotePopover,
        page: function page(ajax) {
          window.location.href = ajax.url;
        }
      },
      defaultAction: 'page',
      actionsArgs: {
        ajax: function ajax($trigger) {
          return this._getAjax($trigger);
        },
        panel: function panel($trigger) {
          return [this._getAjax($trigger), $trigger.data(Widgets.Panel.config.options.datas.direction), $trigger.data(Widgets.Panel.config.options.datas.type)];
        },
        popover: function popover($trigger) {
          return [this._getAjax($trigger), $trigger];
        }
      },
      defaultActionArgs: 'ajax',
      characters: {
        separator: ','
      },
      attributes: {
        href: 'href' // In order to better support `a` elements (the data value has higher priority)

      },
      datas: {
        type: 'type',
        url: 'url',
        body: 'body',
        method: 'method'
      },
      selectors: {
        action: '.action'
      },
      callbacks: {
        action: _.noop
      }
    }
  };
  /* ACTIONS */

  var Actions =
  /*#__PURE__*/
  function (_Widgets$Targeter) {
    _inheritsLoose(Actions, _Widgets$Targeter);

    function Actions() {
      return _Widgets$Targeter.apply(this, arguments) || this;
    }

    var _proto77 = Actions.prototype;

    /* SPECIAL */
    _proto77._variables = function _variables() {
      _Widgets$Targeter.prototype._variables.call(this);

      this.$actions = this.$element.find(this.options.selectors.action);
    };

    _proto77._events = function _events() {
      _Widgets$Targeter.prototype._events.call(this);

      this.___action();
    };
    /* UTILITIES */


    _proto77._getAjax = function _getAjax($trigger) {
      var url = $trigger.data(this.options.datas.url) || $trigger.attr(this.options.attributes.href) || this.options.ajax.url,
          body = $trigger.data(this.options.datas.body) || this.options.ajax.body || {},
          method = $trigger.data(this.options.datas.method) || this.options.ajax.method;
      return _.extend({}, this.options.ajax, {
        url: url,
        body: body,
        method: method
      });
    };

    _proto77._getArgs = function _getArgs(type, $trigger) {
      var fn = this.options.actionsArgs[type] || this.options.actionsArgs[this.options.defaultActionArgs];
      if (!fn) return;
      var args = fn.call(this, $trigger);
      return args ? _.castArray(args) : false;
    };
    /* ACTION */


    _proto77.___action = function ___action() {
      this._on(this.$actions, Pointer.tap, this.__action);
    };

    _proto77.__action = function __action(event) {
      var $trigger = $(event.currentTarget),
          type = $trigger.data(this.options.datas.type) || this.options.defaultAction,
          action = this.options.actions[type];
      if (!action) return;

      var args = this._getArgs(type, $trigger);

      if (!args) return;
      action.apply(void 0, args);

      this._trigger('action', {
        type: type,
        args: args
      });
    };

    return Actions;
  }(Widgets.Targeter);
  /* FACTORY */


  Factory.make(Actions, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require ../datatables.js
// @require widgets/targeter/targeter.js
//FIXME: Doesn't work with custom sorting


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'datatablesPager',
    plugin: true,
    selector: '.datatables-pager',
    options: {
      widget: Widgets.Dt,
      page: NaN,
      // The page to go to (higher priority than row number)
      row: NaN,
      // The row number to go to
      datas: {
        page: 'page',
        row: 'row'
      }
    }
  };
  /* DATATABLES PAGER */

  var DatatablesPager =
  /*#__PURE__*/
  function (_Widgets$Targeter2) {
    _inheritsLoose(DatatablesPager, _Widgets$Targeter2);

    function DatatablesPager() {
      return _Widgets$Targeter2.apply(this, arguments) || this;
    }

    var _proto78 = DatatablesPager.prototype;

    /* SPECIAL */
    _proto78._init = function _init() {
      var page = this.$element.data(this.options.datas.page),
          row = this.$element.data(this.options.datas.row);
      this.options.page = _.isString(page) ? page : _.isNaN(Number(page)) ? this.options.page : Number(page);
      this.options.row = _.isNaN(Number(row)) ? this.options.row : Number(row);
    };

    _proto78._events = function _events() {
      _Widgets$Targeter2.prototype._events.call(this);

      this.___tap();
    };
    /* TAP */


    _proto78.___tap = function ___tap() {
      this._on(Pointer.tap, this.__tap);
    };

    _proto78.__tap = function __tap() {
      this.go();
    };
    /* API */


    _proto78.go = function go(page, row) {
      if (page === void 0) {
        page = this.options.page;
      }

      if (row === void 0) {
        row = this.options.row;
      }

      this._targetInstance.page(page, row);
    };

    return DatatablesPager;
  }(Widgets.Targeter);
  /* FACTORY */


  Factory.make(DatatablesPager, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require widgets/actions/actions.js
// @require ../selectable.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'selectableActions',
    plugin: true,
    selector: '.selectable-actions',
    options: {
      widget: Widgets.Selectable,
      placeholders: {
        id: '%ID%'
      },
      datas: {
        id: 'id'
      },
      selectors: {
        id: false // Selects the element containing the id (from its `tr` element), for instance it could be `> td:first-child`. If falsy, `datas.id` will be used

      }
    }
  };
  /* SELECTABLE ACTIONS */

  var SelectableActions =
  /*#__PURE__*/
  function (_Widgets$Actions) {
    _inheritsLoose(SelectableActions, _Widgets$Actions);

    function SelectableActions() {
      return _Widgets$Actions.apply(this, arguments) || this;
    }

    var _proto79 = SelectableActions.prototype;

    /* UTILITIES */
    _proto79._getIds = function _getIds() {
      var _this35 = this;

      var $rows = this._targetInstance.get(),
          ids = $rows.get().map(function (row) {
        return _this35.options.selectors.id ? $(row).find(_this35.options.selectors.id).text() : $(row).data(_this35.options.datas.id);
      }).filter(_.identity);

      return ids;
    };

    _proto79._getAjax = function _getAjax($trigger) {
      var ajax = _Widgets$Actions.prototype._getAjax.call(this, $trigger),
          ids = this._getIds();

      ajax.url = ajax.url.replace(this.options.placeholders.id, ids.join(this.options.characters.separator));
      ajax.body = _.extend(ajax.body, {
        ids: ids
      });
      return ajax;
    };

    return SelectableActions;
  }(Widgets.Actions);
  /* FACTORY */


  Factory.make(SelectableActions, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @optional widgets/datatables/datatables.js
// @require ../actions.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'selectableActionsContainer',
    plugin: true,
    selector: '.selectable-actions:not(.popover)',
    options: {
      widget: Widgets.Selectable,
      classes: {
        datatable: 'datatable',
        open: 'open'
      },
      callbacks: {
        open: _.noop,
        close: _.noop
      }
    }
  };
  /* SELECTABLE ACTIONS CONTAINER */

  var SelectableActionsContainer =
  /*#__PURE__*/
  function (_Widgets$Targeter3) {
    _inheritsLoose(SelectableActionsContainer, _Widgets$Targeter3);

    function SelectableActionsContainer() {
      return _Widgets$Targeter3.apply(this, arguments) || this;
    }

    var _proto80 = SelectableActionsContainer.prototype;

    /* SPECIAL */
    _proto80._variables = function _variables() {
      _Widgets$Targeter3.prototype._variables.call(this);

      this.$container = this.$element;
      this._isOpen = this.$container.hasClass(this.options.classes.open);
      this._isDataTable = this.$target.hasClass(this.options.classes.datatable);
    };

    _proto80._init = function _init() {
      _Widgets$Targeter3.prototype._init.call(this);

      this.___datatable();

      this.__update();
    };

    _proto80._events = function _events() {
      _Widgets$Targeter3.prototype._events.call(this);

      this.___update();
    };
    /* DATATABLE */


    _proto80.___datatable = function ___datatable() {
      if (!this._isDataTable) return;
      this.$container.removeClass('bordered limited centered');
      this.$target.closest('.card-block').before(this.$container);
    };
    /* UPDATE */


    _proto80.___update = function ___update() {
      this._on(true, this.$target, 'selectable:change', this.__update);
    };

    _proto80.__update = function __update() {
      this.toggle(!!this._targetInstance.get().length);
    };
    /* API */


    _proto80.isOpen = function isOpen() {
      return this._isOpen;
    };

    _proto80.toggle = function toggle(force) {
      if (force === void 0) {
        force = !this._isOpen;
      }

      if (!!force !== this._isOpen) {
        this._isOpen = !!force;
        this.$container.toggleClass(this.options.classes.open, this._isOpen);

        this._trigger(this._isOpen ? 'open' : 'close');
      }
    };

    _proto80.open = function open() {
      this.toggle(true);
    };

    _proto80.close = function close() {
      this.toggle(false);
    };

    return SelectableActionsContainer;
  }(Widgets.Targeter);
  /* FACTORY */


  Factory.make(SelectableActionsContainer, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../actions.js
// @require widgets/popover/popover.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'selectableActionsPopover',
    plugin: true,
    selector: '.selectable-actions.popover',
    options: {
      widget: Widgets.Selectable
    }
  };
  /* SELECTABLE ACTIONS POPOVER */

  var SelectableActionsPopover =
  /*#__PURE__*/
  function (_Widgets$Targeter4) {
    _inheritsLoose(SelectableActionsPopover, _Widgets$Targeter4);

    function SelectableActionsPopover() {
      return _Widgets$Targeter4.apply(this, arguments) || this;
    }

    var _proto81 = SelectableActionsPopover.prototype;

    /* SPECIAL */
    _proto81._variables = function _variables() {
      _Widgets$Targeter4.prototype._variables.call(this);

      this.$popover = this.$element;
      this._popoverInstance = this.$popover.popover('instance');
    };

    _proto81._init = function _init() {
      _Widgets$Targeter4.prototype._init.call(this);

      this._popoverInstance.option('positionate.alignment.x', 'left');

      this._popoverInstance.option('positionate.constrainer.$element', $.$window);
    };

    _proto81._events = function _events() {
      _Widgets$Targeter4.prototype._events.call(this);

      this.___context();

      this.___action();
    };
    /* CONTEXT */


    _proto81.___context = function ___context() {
      this._on(true, this.$target, 'contextmenu', this.__context);
    };

    _proto81.__context = function __context(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this._contextEvent = event;

      this._one(true, $.$document, Pointer.up, this._toggle); // Selectable listens on this event, also `contextmenu` gets fired before, so we wouldn't get the updated list of selected elements

    };
    /* ACTION */


    _proto81.___action = function ___action() {
      this._on(true, 'selectableactions:action', this._close);
    };
    /* PRIVATE API */


    _proto81._toggle = function _toggle() {
      this[this._targetInstance.get().length ? '_open' : '_close']();
    };

    _proto81._open = function _open() {
      var point = $.eventXY(this._contextEvent);

      this._popoverInstance.option('positionate.point', point);

      this._popoverInstance.open();
    };

    _proto81._close = function _close() {
      this._popoverInstance.close();
    };

    return SelectableActionsPopover;
  }(Widgets.Targeter);
  /* FACTORY */


  Factory.make(SelectableActionsPopover, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require ../targeter.js


(function ($, _, Svelto, Widgets, Factory, Pointer) {
  /* CONFIG */
  var config = {
    name: 'closer',
    options: {
      methods: {
        isOpen: 'isOpen',
        close: 'close'
      }
    }
  };
  /* CLOSER */

  var Closer =
  /*#__PURE__*/
  function (_Widgets$Targeter5) {
    _inheritsLoose(Closer, _Widgets$Targeter5);

    function Closer() {
      return _Widgets$Targeter5.apply(this, arguments) || this;
    }

    var _proto82 = Closer.prototype;

    /* SPECIAL */
    _proto82._events = function _events() {
      _Widgets$Targeter5.prototype._events.call(this);

      this.___tap();
    };
    /* TAP */


    _proto82.___tap = function ___tap() {
      this._on(Pointer.tap, this.__tap);
    };

    _proto82.__tap = function __tap(event) {
      this.close(event);
    };
    /* API */


    _proto82.isOpen = function isOpen() {
      return this._targetInstance[this.options.methods.isOpen]();
    };

    _proto82.close = function close(event) {
      var _this36 = this;

      this._targetInstance.whenUnlocked(function () {
        return _this36._targetInstance[_this36.options.methods.close](_this36.element, event);
      });
    };

    return Closer;
  }(Widgets.Targeter);
  /* FACTORY */


  Factory.make(Closer, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require ../replyable.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'chatMessageReplyableUnreply',
    plugin: true,
    selector: '.chat-message-replyable-unreply',
    options: {
      widget: Widgets.ChatMessageReplyable,
      methods: {
        close: 'unreply'
      }
    }
  };
  /* CHAT MESSAGE REPLYABLE UNREPLY */

  var ChatMessageReplyableUnreply =
  /*#__PURE__*/
  function (_Widgets$Closer) {
    _inheritsLoose(ChatMessageReplyableUnreply, _Widgets$Closer);

    function ChatMessageReplyableUnreply() {
      return _Widgets$Closer.apply(this, arguments) || this;
    }

    return ChatMessageReplyableUnreply;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(ChatMessageReplyableUnreply, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../expander.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'expanderCloser',
    plugin: true,
    selector: '.expander-closer',
    options: {
      widget: Widgets.Expander
    }
  };
  /* EXPANDER CLOSER */

  var ExpanderCloser =
  /*#__PURE__*/
  function (_Widgets$Closer2) {
    _inheritsLoose(ExpanderCloser, _Widgets$Closer2);

    function ExpanderCloser() {
      return _Widgets$Closer2.apply(this, arguments) || this;
    }

    return ExpanderCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(ExpanderCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../fullscreenable.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'fullscreenableExiter',
    plugin: true,
    selector: '.fullscreenable-exiter, .fullscreen-exiter',
    options: {
      widget: Widgets.Fullscreenable,
      $fallback: $.$html,
      methods: {
        isOpen: 'isFullscreen',
        close: 'exit'
      }
    }
  };
  /* FULLSCREENABLE EXITER */

  var FullscreenableExiter =
  /*#__PURE__*/
  function (_Widgets$Closer3) {
    _inheritsLoose(FullscreenableExiter, _Widgets$Closer3);

    function FullscreenableExiter() {
      return _Widgets$Closer3.apply(this, arguments) || this;
    }

    return FullscreenableExiter;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(FullscreenableExiter, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../infobar.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'infobarCloser',
    plugin: true,
    selector: '.infobar-closer',
    options: {
      widget: Widgets.Infobar
    }
  };
  /* INFOBAR CLOSER */

  var InfobarCloser =
  /*#__PURE__*/
  function (_Widgets$Closer4) {
    _inheritsLoose(InfobarCloser, _Widgets$Closer4);

    function InfobarCloser() {
      return _Widgets$Closer4.apply(this, arguments) || this;
    }

    return InfobarCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(InfobarCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../modal.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'modalCloser',
    plugin: true,
    selector: '.modal-closer',
    options: {
      widget: Widgets.Modal
    }
  };
  /* MODAL CLOSER */

  var ModalCloser =
  /*#__PURE__*/
  function (_Widgets$Closer5) {
    _inheritsLoose(ModalCloser, _Widgets$Closer5);

    function ModalCloser() {
      return _Widgets$Closer5.apply(this, arguments) || this;
    }

    return ModalCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(ModalCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../overlay.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'overlayCloser',
    plugin: true,
    selector: '.overlay-closer',
    options: {
      widget: Widgets.Overlay
    }
  };
  /* OVERLAY CLOSER */

  var OverlayCloser =
  /*#__PURE__*/
  function (_Widgets$Closer6) {
    _inheritsLoose(OverlayCloser, _Widgets$Closer6);

    function OverlayCloser() {
      return _Widgets$Closer6.apply(this, arguments) || this;
    }

    return OverlayCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(OverlayCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../panel.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'panelCloser',
    plugin: true,
    selector: '.panel-closer',
    options: {
      widget: Widgets.Panel
    }
  };
  /* PANEL CLOSER */

  var PanelCloser =
  /*#__PURE__*/
  function (_Widgets$Closer7) {
    _inheritsLoose(PanelCloser, _Widgets$Closer7);

    function PanelCloser() {
      return _Widgets$Closer7.apply(this, arguments) || this;
    }

    return PanelCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(PanelCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../popover.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'popoverCloser',
    plugin: true,
    selector: '.popover-closer',
    options: {
      widget: Widgets.Popover
    }
  };
  /* POPOVER CLOSER */

  var PopoverCloser =
  /*#__PURE__*/
  function (_Widgets$Closer8) {
    _inheritsLoose(PopoverCloser, _Widgets$Closer8);

    function PopoverCloser() {
      return _Widgets$Closer8.apply(this, arguments) || this;
    }

    return PopoverCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(PopoverCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../closer/closer.js
// @require core/browser/browser.js


(function ($, _, Svelto, Widgets, Factory, Browser, Pointer) {
  /* CONFIG */
  var config = {
    name: 'opener',
    options: {
      hover: {
        active: false,
        delays: {
          open: 750,
          close: 250
        }
      },
      methods: {
        open: 'open'
      }
    }
  };
  /* OPENER */

  var Opener =
  /*#__PURE__*/
  function (_Widgets$Closer9) {
    _inheritsLoose(Opener, _Widgets$Closer9);

    function Opener() {
      return _Widgets$Closer9.apply(this, arguments) || this;
    }

    var _proto83 = Opener.prototype;

    /* SPECIAL */
    _proto83._events = function _events() {
      _Widgets$Closer9.prototype._events.call(this);

      this.___hover();
    };
    /* TAP */


    _proto83.__tap = function __tap(event) {
      this.open(event);
    };
    /* HOVER */


    _proto83.___hover = function ___hover() {
      if (this.options.hover.active) {
        this._on(Pointer.enter, this.__hoverEnter);
      }
    };

    _proto83.__hoverEnter = function __hoverEnter() {
      if (!this.isOpen()) {
        this._isHoverOpen = false;
        this._hoverOpenTimeout = this._delay(this.__hoverOpen, this.options.hover.delays.open);

        this._one(true, Pointer.leave, this.__hoverLeave);
      } else if (this._isHoverOpen) {
        if (this._hoverCloseTimeout) {
          clearTimeout(this._hoverCloseTimeout);
          this._hoverCloseTimeout = false;
        }

        this._one(true, Pointer.leave, this.__hoverLeave);
      }
    };

    _proto83.__hoverOpen = function __hoverOpen() {
      if (!this.isOpen()) {
        this.open();
        this._isHoverOpen = true;
      }

      this._hoverOpenTimeout = false;
    };

    _proto83.__hoverLeave = function __hoverLeave() {
      if (this._hoverOpenTimeout) {
        clearTimeout(this._hoverOpenTimeout);
        this._hoverOpenTimeout = false;
      }

      if (this.isOpen() && this._isHoverOpen) {
        this._hoverCloseTimeout = this._delay(this.__hoverClose, this.options.hover.delays.close);

        this._one(true, this.$target, Pointer.enter, this.__hoverTargetEnter);
      }
    };

    _proto83.__hoverClose = function __hoverClose() {
      if (this.isOpen() && this._isHoverOpen) {
        this.close();
      }

      this._isHoverOpen = false;
      this._hoverCloseTimeout = false;

      this._off(this.$target, Pointer.enter, this.__hoverTargetEnter);
    };

    _proto83.__hoverTargetEnter = function __hoverTargetEnter() {
      if (this._hoverCloseTimeout) {
        clearTimeout(this._hoverCloseTimeout);
        this._hoverCloseTimeout = false;
      }

      if (this.isOpen() && this._isHoverOpen) {
        this._one(true, this.$target, Pointer.leave, this.__hoverTargetLeave);
      }
    };

    _proto83.__hoverTargetLeave = function __hoverTargetLeave() {
      if (this.isOpen() && this._isHoverOpen) {
        this._hoverCloseTimeout = this._delay(this.__hoverClose, this.options.hover.delays.close);

        this._one(true, this.$target, Pointer.enter, this.__hoverTargetEnter);
      }
    };
    /* API */


    _proto83.open = function open(event) {
      var _this37 = this;

      this._targetInstance.whenUnlocked(function () {
        return _this37._targetInstance[_this37.options.methods.open](_this37.element, event);
      });
    };

    return Opener;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(Opener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Browser, Svelto.Pointer); // @require ../replyable.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'chatMessageReplyableReply',
    plugin: true,
    selector: '.chat-message-replyable-reply',
    options: {
      widget: Widgets.ChatMessageReplyable,
      methods: {
        open: 'reply'
      }
    }
  };
  /* CHAT MESSAGE REPLYABLE REPLY */

  var ChatMessageReplyableReply =
  /*#__PURE__*/
  function (_Widgets$Opener) {
    _inheritsLoose(ChatMessageReplyableReply, _Widgets$Opener);

    function ChatMessageReplyableReply() {
      return _Widgets$Opener.apply(this, arguments) || this;
    }

    return ChatMessageReplyableReply;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(ChatMessageReplyableReply, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../expander.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'expanderOpener',
    plugin: true,
    selector: '.expander-opener',
    options: {
      widget: Widgets.Expander
    }
  };
  /* EXPANDER OPENER */

  var ExpanderOpener =
  /*#__PURE__*/
  function (_Widgets$Opener2) {
    _inheritsLoose(ExpanderOpener, _Widgets$Opener2);

    function ExpanderOpener() {
      return _Widgets$Opener2.apply(this, arguments) || this;
    }

    return ExpanderOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(ExpanderOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../fullscreenable.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'fullscreenableRequester',
    plugin: true,
    selector: '.fullscreenable-requester, .fullscreen-requester',
    options: {
      widget: Widgets.Fullscreenable,
      $fallback: $.$html,
      methods: {
        open: 'request'
      }
    }
  };
  /* FULLSCREENABLE REQUESTER */

  var FullscreenableRequester =
  /*#__PURE__*/
  function (_Widgets$Opener3) {
    _inheritsLoose(FullscreenableRequester, _Widgets$Opener3);

    function FullscreenableRequester() {
      return _Widgets$Opener3.apply(this, arguments) || this;
    }

    return FullscreenableRequester;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(FullscreenableRequester, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../modal.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'modalOpener',
    plugin: true,
    selector: '.modal-opener',
    options: {
      widget: Widgets.Modal
    }
  };
  /* MODAL OPENER */

  var ModalOpener =
  /*#__PURE__*/
  function (_Widgets$Opener4) {
    _inheritsLoose(ModalOpener, _Widgets$Opener4);

    function ModalOpener() {
      return _Widgets$Opener4.apply(this, arguments) || this;
    }

    return ModalOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(ModalOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../overlay.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'overlayOpener',
    plugin: true,
    selector: '.overlay-opener',
    options: {
      widget: Widgets.Overlay
    }
  };
  /* OVERLAY OPENER */

  var OverlayOpener =
  /*#__PURE__*/
  function (_Widgets$Opener5) {
    _inheritsLoose(OverlayOpener, _Widgets$Opener5);

    function OverlayOpener() {
      return _Widgets$Opener5.apply(this, arguments) || this;
    }

    return OverlayOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(OverlayOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../panel.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'panelOpener',
    plugin: true,
    selector: '.panel-opener',
    options: {
      widget: Widgets.Panel
    }
  };
  /* PANEL OPENER */

  var PanelOpener =
  /*#__PURE__*/
  function (_Widgets$Opener6) {
    _inheritsLoose(PanelOpener, _Widgets$Opener6);

    function PanelOpener() {
      return _Widgets$Opener6.apply(this, arguments) || this;
    }

    return PanelOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(PanelOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../popover.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'popoverOpener',
    plugin: true,
    selector: '.popover-opener',
    options: {
      widget: Widgets.Popover
    }
  };
  /* POPOVER OPENER */

  var PopoverOpener =
  /*#__PURE__*/
  function (_Widgets$Opener7) {
    _inheritsLoose(PopoverOpener, _Widgets$Opener7);

    function PopoverOpener() {
      return _Widgets$Opener7.apply(this, arguments) || this;
    }

    return PopoverOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(PopoverOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/animations/animations.js
// @require core/pointer/pointer.js
// @require widgets/targeter/opener/opener.js
//TODO: Test with nested layouts
//TODO: Make it work with nested scrollable elements
// It only scrolls properly when the elements are not nested inside scrollable wrappers


(function ($, _, Svelto, Widgets, Factory, Pointer, Animations) {
  /* CONFIG */
  var config = {
    name: 'scroller',
    plugin: true,
    selector: '.scroller',
    options: {
      animations: {
        scroll: Animations.fast
      },
      callbacks: {
        scroll: _.noop
      }
    }
  };
  /* SCROLLER */

  var Scroller =
  /*#__PURE__*/
  function (_Widgets$Targeter6) {
    _inheritsLoose(Scroller, _Widgets$Targeter6);

    function Scroller() {
      return _Widgets$Targeter6.apply(this, arguments) || this;
    }

    var _proto84 = Scroller.prototype;

    /* SPECIAL */
    _proto84._events = function _events() {
      _Widgets$Targeter6.prototype._events.call(this);

      this.___tap();
    };
    /* TAP */


    _proto84.___tap = function ___tap() {
      this._on(Pointer.tap, this.__tap);
    };

    _proto84.__tap = function __tap(event) {
      this.scroll();
    };
    /* API */


    _proto84.scroll = function scroll() {
      $.scrollTo(this.target, {
        duration: this.options.animations.scroll
      });

      this._trigger('scroll');
    };

    return Scroller;
  }(Widgets.Targeter);
  /* FACTORY */


  Factory.make(Scroller, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer, Svelto.Animations); // @require ../opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'toggler',
    options: {
      methods: {
        toggle: 'toggle'
      }
    }
  };
  /* TOGGLER */

  var Toggler =
  /*#__PURE__*/
  function (_Widgets$Opener8) {
    _inheritsLoose(Toggler, _Widgets$Opener8);

    function Toggler() {
      return _Widgets$Opener8.apply(this, arguments) || this;
    }

    var _proto85 = Toggler.prototype;

    /* TAP */
    _proto85.__tap = function __tap(event) {
      this.toggle(undefined, event);
    };
    /* API */


    _proto85.toggle = function toggle(force, event) {
      return this._targetInstance[this.options.methods.toggle](force, this.element, event);
    };

    return Toggler;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(Toggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../editable.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'chatMessageEditableToggler',
    plugin: true,
    selector: '.chat-message-editable-toggler',
    options: {
      widget: Widgets.ChatMessageEditable
    }
  };
  /* CHAT MESSAGE EDITABLE TOGGLER */

  var ChatMessageEditableToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler) {
    _inheritsLoose(ChatMessageEditableToggler, _Widgets$Toggler);

    function ChatMessageEditableToggler() {
      return _Widgets$Toggler.apply(this, arguments) || this;
    }

    return ChatMessageEditableToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(ChatMessageEditableToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../expander.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'expanderToggler',
    plugin: true,
    selector: '.expander-toggler',
    options: {
      widget: Widgets.Expander
    }
  };
  /* EXPANDER TOGGLER */

  var ExpanderToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler2) {
    _inheritsLoose(ExpanderToggler, _Widgets$Toggler2);

    function ExpanderToggler() {
      return _Widgets$Toggler2.apply(this, arguments) || this;
    }

    return ExpanderToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(ExpanderToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../flippable.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'flippableFlipper',
    plugin: true,
    selector: '.flippable-flipper',
    options: {
      widget: Widgets.Flippable,
      methods: {
        toggle: 'flip',
        open: 'front',
        close: 'back'
      }
    }
  };
  /* FLIPPABLE FLIPPER */

  var FlippableFlipper =
  /*#__PURE__*/
  function (_Widgets$Toggler3) {
    _inheritsLoose(FlippableFlipper, _Widgets$Toggler3);

    function FlippableFlipper() {
      return _Widgets$Toggler3.apply(this, arguments) || this;
    }

    return FlippableFlipper;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(FlippableFlipper, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../fullscreenable.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'fullscreenableToggler',
    plugin: true,
    selector: '.fullscreenable-toggler, .fullscreen-toggler',
    options: {
      widget: Widgets.Fullscreenable,
      $fallback: $.$html
    }
  };
  /* FULLSCREENABLE TOGGLER */

  var FullscreenableToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler4) {
    _inheritsLoose(FullscreenableToggler, _Widgets$Toggler4);

    function FullscreenableToggler() {
      return _Widgets$Toggler4.apply(this, arguments) || this;
    }

    return FullscreenableToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(FullscreenableToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../modal.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'modalToggler',
    plugin: true,
    selector: '.modal-toggler',
    options: {
      widget: Widgets.Modal
    }
  };
  /* MODAL TOGGLER */

  var ModalToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler5) {
    _inheritsLoose(ModalToggler, _Widgets$Toggler5);

    function ModalToggler() {
      return _Widgets$Toggler5.apply(this, arguments) || this;
    }

    return ModalToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(ModalToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../overlay.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'overlayToggler',
    plugin: true,
    selector: '.overlay-toggler',
    options: {
      widget: Widgets.Overlay
    }
  };
  /* OVERLAY TOGGLER */

  var OverlayToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler6) {
    _inheritsLoose(OverlayToggler, _Widgets$Toggler6);

    function OverlayToggler() {
      return _Widgets$Toggler6.apply(this, arguments) || this;
    }

    return OverlayToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(OverlayToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Pointer); // @require ../panel.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'panelToggler',
    plugin: true,
    selector: '.panel-toggler',
    options: {
      widget: Widgets.Panel
    }
  };
  /* PANEL TOGGLER */

  var PanelToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler7) {
    _inheritsLoose(PanelToggler, _Widgets$Toggler7);

    function PanelToggler() {
      return _Widgets$Toggler7.apply(this, arguments) || this;
    }

    return PanelToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(PanelToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../popover.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'popoverToggler',
    plugin: true,
    selector: '.popover-toggler',
    options: {
      widget: Widgets.Popover
    }
  };
  /* POPOVER TOGGLER */

  var PopoverToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler8) {
    _inheritsLoose(PopoverToggler, _Widgets$Toggler8);

    function PopoverToggler() {
      return _Widgets$Toggler8.apply(this, arguments) || this;
    }

    return PopoverToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(PopoverToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/widget/widget.js
// It supports only `box-sizing: border-box` textareas


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'textareaAutogrow',
    plugin: true,
    selector: 'textarea.autogrow',
    options: {
      callbacks: {
        change: _.noop
      }
    }
  };
  /* AUTOGROW TEXTAREA */

  var AutogrowTextarea =
  /*#__PURE__*/
  function (_Widgets$Widget46) {
    _inheritsLoose(AutogrowTextarea, _Widgets$Widget46);

    function AutogrowTextarea() {
      return _Widgets$Widget46.apply(this, arguments) || this;
    }

    var _proto86 = AutogrowTextarea.prototype;

    /* SPECIAL */
    _proto86._variables = function _variables() {
      this.$textarea = this.$element;
      this.$tempTextarea = $('<textarea>').css({
        'position': 'fixed',
        'visibility': 'hidden',
        'padding': 0,
        'min-height': 0,
        'height': 0
      });
    };

    _proto86._init = function _init() {
      this._update();
    };

    _proto86._events = function _events() {
      this.___inputChange();
    };
    /* PRIVATE */


    _proto86._getNeededHeight = function _getNeededHeight() {
      this.$tempTextarea.css('font', this.$textarea.css('font')).val(this.$textarea.val() || ' ').appendTo(this.$layout); // Ensuring that there's at least a space character inside of it fixed a bug in IE/Edge where the textarea gets shrinked

      var height = this.$tempTextarea[0].scrollHeight;
      this.$tempTextarea.detach();
      return height;
    };
    /* INPUT / CHANGE */


    _proto86.___inputChange = function ___inputChange() {
      this._on(true, 'input change', this._update);
    };
    /* UPDATE */


    _proto86._update = function _update() {
      var height = this._getNeededHeight();

      if (height === this._prevHeight) return;
      this.$textarea.height(height);
      this._prevHeight = height;

      this._trigger('change');
    };

    return AutogrowTextarea;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(AutogrowTextarea, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'textareaSender',
    plugin: true,
    selector: 'form textarea',
    options: {
      selectors: {
        form: 'form'
      },
      keystrokes: {
        'ctmd + enter': 'send'
      }
    }
  };
  /* TEXTAREA SENDER */

  var TextareaSender =
  /*#__PURE__*/
  function (_Widgets$Widget47) {
    _inheritsLoose(TextareaSender, _Widgets$Widget47);

    function TextareaSender() {
      return _Widgets$Widget47.apply(this, arguments) || this;
    }

    var _proto87 = TextareaSender.prototype;

    /* SPECIAL */
    _proto87._variables = function _variables() {
      this.$textarea = this.$element;
      this.textarea = this.element;
      this.$form = this.$textarea.closest(this.options.selectors.form);
      this.form = this.$form[0];
    };

    _proto87._events = function _events() {
      this.___keydown();
    };
    /* KEYDOWN */


    _proto87.___keydown = function ___keydown($target) {
      this._on(this.$textarea, 'keydown', this.__keydown);
    };
    /* SEND */


    _proto87.send = function send() {
      this.form.submit();
    };

    return TextareaSender;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(TextareaSender, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/widget/widget.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'timeAgo',
    plugin: true,
    selector: '.timeago, .time-ago',
    options: {
      timestamp: false,
      // UNIX timestamp
      title: false,
      // Update the title or the text?
      abort: {
        // Abort the loop if it has to wait more than `threshold`
        enabled: true,
        // Whether the abort functionality should be enabled (recommended, at least to avoid overflowing the delay https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
        threshold: 604800 // 1 week

      },
      datas: {
        timestamp: 'timestamp'
      },
      callbacks: {
        change: _.noop
      }
    }
  };
  /* TIME AGO */

  var TimeAgo =
  /*#__PURE__*/
  function (_Widgets$Widget48) {
    _inheritsLoose(TimeAgo, _Widgets$Widget48);

    function TimeAgo() {
      return _Widgets$Widget48.apply(this, arguments) || this;
    }

    var _proto88 = TimeAgo.prototype;

    /* SPECIAL */
    _proto88._variables = function _variables() {
      this.$timeAgoElement = this.$element;
    };

    _proto88._init = function _init() {
      if (!this.options.timestamp) {
        this.options.timestamp = this.$timeAgoElement.data(this.options.datas.timestamp);
      }

      if (this.isEnabled()) {
        this._loop();
      }
    };

    _proto88._destroy = function _destroy() {
      clearTimeout(this.loopId);
    };
    /* LOOP */


    _proto88._loop = function _loop(seconds) {
      if (seconds === void 0) {
        seconds = 0;
      }

      if (this.options.abort.enabled && seconds > this.options.abort.threshold) return;
      this.loopId = this._delay(function () {
        this._loop(this._update().next);
      }, seconds * 1000);
    };
    /* UPDATE */


    _proto88._update = function _update() {
      var timeAgo = _.timeAgo(this.options.timestamp);

      if (this.options.title) {
        this.$timeAgoElement.attr('title', timeAgo.str);
      } else {
        this.$timeAgoElement.text(timeAgo.str);
      }

      this._trigger('change');

      return timeAgo;
    };
    /* API OVERRIDES */


    _proto88.enable = function enable() {
      _Widgets$Widget48.prototype.enable.call(this);

      this._loop();
    };

    _proto88.disable = function disable() {
      _Widgets$Widget48.prototype.disable.call(this);

      clearTimeout(this.loopId);
    };

    return TimeAgo;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(TimeAgo, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Timer); // @require ./toast.js


(function ($, _, Svelto, Toast) {
  /* HELPER */
  $.toast = function (options) {
    if (options === void 0) {
      options = {};
    }

    /* OPTIONS */
    options = _.isPlainObject(options) ? options : {
      body: String(options)
    };
    /* TYPE */

    if (options.buttons) {
      options.type = 'action';
    }
    /* TOAST */


    return Toast.whenReady.call(Toast, function () {
      return new Toast(options);
    });
  };
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets.Toast); // @require widgets/popover/popover.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'tooltip',
    plugin: true,
    selector: '.tooltip'
  };
  /* TOOLTIP */

  var Tooltip =
  /*#__PURE__*/
  function (_Widgets$Popover) {
    _inheritsLoose(Tooltip, _Widgets$Popover);

    function Tooltip() {
      return _Widgets$Popover.apply(this, arguments) || this;
    }

    return Tooltip;
  }(Widgets.Popover);
  /* FACTORY */


  Factory.make(Tooltip, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../tooltip.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'tooltipCloser',
    plugin: true,
    selector: '.tooltip-closer',
    options: {
      widget: Widgets.Tooltip
    }
  };
  /* TOOLTIP CLOSER */

  var TooltipCloser =
  /*#__PURE__*/
  function (_Widgets$Closer10) {
    _inheritsLoose(TooltipCloser, _Widgets$Closer10);

    function TooltipCloser() {
      return _Widgets$Closer10.apply(this, arguments) || this;
    }

    return TooltipCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(TooltipCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../tooltip.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'tooltipOpener',
    plugin: true,
    selector: '.tooltip-opener',
    options: {
      widget: Widgets.Tooltip,
      hover: {
        active: true
      }
    }
  };
  /* TOOLTIP OPENER */

  var TooltipOpener =
  /*#__PURE__*/
  function (_Widgets$Opener9) {
    _inheritsLoose(TooltipOpener, _Widgets$Opener9);

    function TooltipOpener() {
      return _Widgets$Opener9.apply(this, arguments) || this;
    }

    return TooltipOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(TooltipOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../tooltip.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'tooltipToggler',
    plugin: true,
    selector: '.tooltip-toggler',
    options: {
      widget: Widgets.Tooltip,
      hover: {
        active: true
      }
    }
  };
  /* TOOLTIP TOGGLER */

  var TooltipToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler9) {
    _inheritsLoose(TooltipToggler, _Widgets$Toggler9);

    function TooltipToggler() {
      return _Widgets$Toggler9.apply(this, arguments) || this;
    }

    return TooltipToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(TooltipToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require core/animations/animations.js
// @require core/browser/browser.js
// @require core/widget/widget.js
// @require lib/fetch/fetch.js
//TODO: Generalize it for other kind of elements other than `img`


(function ($, _, Svelto, Widgets, Factory, Browser, Pointer, Keyboard, Animations, fetch) {
  /* CONFIG */
  var config = {
    name: 'zoomable',
    plugin: Browser.is.desktop,
    selector: 'img.zoomable',
    options: {
      offset: 50,
      // Size of the offset between the zoomed element and the viewport edges
      src: false,
      // Source of the image
      original: {
        src: false,
        // Original source of the image
        substitute: true,
        // Once load, permanently substitute the thumnail with it
        width: false,
        height: false
      },
      magnification: {
        enabled: false,
        // Zoom in magnified mode, where the image is enlarged
        limited: true,
        // Controls magnification over the zoomable actual dimensions
        offset: 50,
        // A spacing used in order not to trigger hot corners while reaching the edge of the zoomable
        minSide: Math.min(screen.width, screen.height) * 2,
        // Minimum length of each side
        maxSide: Math.min(screen.width, screen.height) * 3 // Maximum length of each side

      },
      preloading: {
        enabled: false,
        // Preload the original image
        wait: true // Don't zoom until the original has been preloaded

      },
      classes: {
        magnified: 'magnified',
        preload: 'preload',
        show: 'show',
        zoom: 'zoom',
        zoomed: 'zoomed',
        backdrop: {
          show: 'zoomable-backdrop obscured-show obscured',
          zoom: 'obscured-open',
          zoomed: ''
        }
      },
      attributes: {
        src: 'src'
      },
      datas: {
        original: 'original',
        width: 'width',
        height: 'height'
      },
      animations: {
        zoom: Animations.normal,
        unzoom: Animations.normal
      },
      keystrokes: {
        'esc': 'unzoom'
      },
      callbacks: {
        loading: _.noop,
        zoom: _.noop,
        unzoom: _.noop
      }
    }
  };
  /* ZOOMABLE */

  var Zoomable =
  /*#__PURE__*/
  function (_Widgets$Widget49) {
    _inheritsLoose(Zoomable, _Widgets$Widget49);

    function Zoomable() {
      return _Widgets$Widget49.apply(this, arguments) || this;
    }

    var _proto89 = Zoomable.prototype;

    /* SPECIAL */
    _proto89._variables = function _variables() {
      this.$zoomable = this.$element;
      this.zoomable = this.element;
      this.$backdrop = $.$html;
      this._isZoomed = false;
    };

    _proto89._init = function _init() {
      this.options.src = this.$zoomable.attr(this.options.attributes.src) || this.options.src;
      this.options.original.src = this.$zoomable.data(this.options.datas.original) || this.options.original.src;
      this.options.original.width = this.$zoomable.data(this.options.datas.width) || this.options.original.width;
      this.options.original.height = this.$zoomable.data(this.options.datas.height) || this.options.original.height;
      this.options.magnification.enabled = this.$zoomable.hasClass(this.options.classes.magnified) || this.options.magnification.enabled;
      this.options.preloading.enabled = this.$zoomable.hasClass(this.options.classes.preload) || this.options.preloading.enabled;

      if (this.options.original.src && (!_.isNumber(this.options.original.width) || !_.isNumber(this.options.original.height))) {
        console.error("Zoomable: wrong 'data-width' and/or 'data-height', they are required when using 'data-original'");
        return false;
      }

      if (this.options.preloading.enabled && this.options.original.src) this.preload();
      if (this.$zoomable.hasClass(this.options.classes.zoom)) this.zoom();
    };

    _proto89._events = function _events() {
      this.___tap();

      if (!this._isZoomed) return;

      this.___tapOutside();

      this.___keydown();

      this.___scroll();

      this.___resize();

      if (this.options.magnification.enabled) this.___move();
    };

    _proto89._destroy = function _destroy() {
      this.unzoom();
    };
    /* TAP */


    _proto89.___tap = function ___tap() {
      this._on(Pointer.tap, this.__tap);
    };

    _proto89.__tap = function __tap(event) {
      var originalEvent = event.originalEvent || event;
      event.preventDefault();
      event.stopImmediatePropagation();

      if (Keyboard.keystroke.match(originalEvent, 'ctmd')) {
        window.open(this.options.original.src || this.options.src, '_new');
      } else {
        this.toggle(undefined, event);
      }
    };

    _proto89.___tapOutside = function ___tapOutside() {
      this._on(true, $.$html, Pointer.tap, this.__tapOutside);
    };

    _proto89.__tapOutside = function __tapOutside(event) {
      if (this.isLocked() || event.isDefaultPrevented() || event.isPropagationStopped() || !$.isAttached(event.target) || $(event.target).closest(this.$zoomable).length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      this.unzoom();
    };
    /* ESC */


    _proto89.___keydown = function ___keydown() {
      //TODO: Listen to `keydown` only within the layout, so maybe just if the layout is hovered or focused (right?)
      this._on(true, $.$document, 'keydown', this.__keydown);
    };
    /* SCROLL */


    _proto89.___scroll = function ___scroll() {
      if (this.options.magnification.enabled) return;

      this._on(true, $.$window.add(this.$zoomable.parents()), 'scroll', this._frames(this.__scroll.bind(this)));
    };

    _proto89.__scroll = function __scroll() {
      this.unzoom();
    };
    /* RESIZE */


    _proto89.___resize = function ___resize() {
      this._on(true, $.$window, 'resize', this._frames(this.__resize.bind(this)));
    };

    _proto89.__resize = function __resize() {
      this._positionate();
    };
    /* MOVE */


    _proto89.___move = function ___move() {
      this._on(true, $.$document, Pointer.move, this._frames(this.__move.bind(this)));
    };

    _proto89.__move = function __move(event) {
      if (!this._matrix) return; // Not yet positionated

      var _$$eventXY = $.eventXY(event, 'clientX', 'clientY'),
          x = _$$eventXY.x,
          y = _$$eventXY.y,
          zOffset = this.options.offset,
          mOffset = this.options.magnification.offset,
          width = this._minWidth * this._scale,
          height = this._minHeight * this._scale,
          xClamped = _.clamp(x - mOffset, 0, this._viewportWidth - mOffset),
          yClamped = _.clamp(y - mOffset, 0, this._viewportHeight - mOffset),
          xPercentage = _.clamp(xClamped / (this._viewportWidth - mOffset * 2), 0, 1),
          yPercentage = _.clamp(yClamped / (this._viewportHeight - mOffset * 2), 0, 1),
          xExceeding = Math.max(0, width - this._viewportWidth + zOffset * 2),
          yExceeding = Math.max(0, height - this._viewportHeight + zOffset * 2);
      /* SETTING */


      this._matrix[4] = this._translateX + xExceeding / 2 - xExceeding * xPercentage;
      this._matrix[5] = this._translateY + yExceeding / 2 - yExceeding * yPercentage;
      this.$zoomable.matrix(this._matrix);
    };
    /* POSITIONING */


    _proto89._positionate = function _positionate(initial) {
      /* VARIABLES */
      if (initial) {
        this._initialMatrix = this.$zoomable.matrix();
        this._translateX = 0;
        this._translateY = 0;
        this._minWidth = this.zoomable.width || this.$zoomable.outerWidth(); //FIXME: It may change on resize

        this._minHeight = this.zoomable.height || this.$zoomable.outerHeight(); //FIXME: It may change on resize

        this._maxWidth = this.options.original.src ? this.options.original.width : this.zoomable.naturalWidth ? this.zoomable.naturalWidth : this._minWidth;
        this._maxHeight = this.options.original.src ? this.options.original.height : this.zoomable.naturalHeight ? this.zoomable.naturalHeight : this._minHeight;
        this._aspectRatio = this._maxWidth / this._maxHeight;
        this._maxScale = this._maxWidth / this._minWidth;
      }

      this._viewportRect = $.$window.getRect();
      this._viewportWidth = this._viewportRect.width;
      this._viewportHeight = this._viewportRect.height;
      this._viewportAspectRatio = this._viewportWidth / this._viewportHeight;
      var rect = this.$zoomable.getRect();
      /* SCALE */

      if (this._maxWidth <= this._viewportWidth - this.options.offset && this._maxHeight <= this._viewportHeight - this.options.offset) {
        this._scale = this._maxScale;
      } else if (this._aspectRatio < this._viewportAspectRatio) {
        this._scale = (this._viewportHeight - this.options.offset) / this._maxHeight * this._maxScale;
      } else {
        this._scale = (this._viewportWidth - this.options.offset) / this._maxWidth * this._maxScale;
      }

      if (this.options.magnification.enabled) {
        if (this._maxWidth <= this._maxHeight) {
          this._scale += this.options.magnification.minSide / (this._minWidth * this._scale);

          if (this._minHeight * this._scale > this.options.magnification.maxSide) {
            this._scale = this.options.magnification.maxSide * this._maxScale / this._maxHeight;
          }
        } else {
          this._scale += this.options.magnification.minSide / (this._minHeight * this._scale);

          if (this._minWidth * this._scale > this.options.magnification.maxSide) {
            this._scale = this.options.magnification.maxSide * this._maxScale / this._maxWidth;
          }
        }

        if (this.options.magnification.limited) {
          this._scale = Math.min(this._maxScale, this._scale);
        }
      }
      /* CENTER */


      this._translateX = this._translateX + (initial ? this._initialMatrix[4] : 0) + this._viewportWidth / 2 - (rect.left + rect.width / 2);
      this._translateY = this._translateY + (initial ? this._initialMatrix[5] : 0) + this._viewportHeight / 2 - (rect.top + rect.height / 2);
      /* SETTING */

      this._matrix = [this._scale, this._initialMatrix[1], this._initialMatrix[2], this._scale, this._translateX, this._translateY];
      this.$zoomable.matrix(this._matrix);
    };

    _proto89._unpositionate = function _unpositionate() {
      this.$zoomable.matrix(this._initialMatrix);
    };
    /* REQUEST HANDLERS */


    _proto89.__request = function __request() {
      var _this38 = this;

      var request = fetch.defaults.request();
      request.addEventListener('progress', function (event) {
        if (!event.lengthComputable) return;

        _this38._trigger('loading', {
          loaded: event.loaded,
          total: event.total,
          percentage: event.loaded / event.total * 100
        });
      }, false);
      return request;
    };

    _proto89.__error = function __error() {
      console.error("Zoomable: failed to preload \"" + this.options.original.src + "\"");
    };

    _proto89.__success = function __success(callback) {
      this._isPreloaded = true;

      if (this.options.original.substitute) {
        this.$zoomable.attr('src', this.options.original.src);
        this.$zoomable.attr('srcset', this.options.original.src);
      }

      if (callback) callback();
    };

    _proto89.__complete = function __complete() {
      this._isPreloading = false;
    };
    /* API */


    _proto89.isPreloading = function isPreloading() {
      return !!this._isPreloading;
    };

    _proto89.isPreloaded = function isPreloaded() {
      return !!this._isPreloaded;
    };

    _proto89.preload = function preload(callback) {
      var _this39 = this;

      if (this._isPreloading || this._isPreloaded) return null;
      this._isPreloading = true;
      fetch({
        url: this.options.original.src,
        request: this.__request.bind(this),
        error: this.__error.bind(this),
        success: function success() {
          return _this39.__success(callback);
        },
        complete: this.__complete.bind(this)
      });
    };

    _proto89.isZoomed = function isZoomed() {
      return this._isZoomed;
    };

    _proto89.toggle = function toggle(force, event) {
      if (force === void 0) {
        force = !this._isZoomed;
      }

      return this[force ? 'zoom' : 'unzoom'](event);
    };

    _proto89.zoom = function zoom(event) {
      var _this40 = this;

      if (this._isZoomed) return null;
      if (this.isLocked()) return this.whenUnlocked(function () {
        return _this40.zoom(event);
      });
      if (this.options.original.src && this.options.preloading.wait && !this._isPreloaded) return this.preload(function () {
        return _this40.zoom(event);
      });
      this.lock();
      this._isZoomed = true;
      if (this.options.magnification.enabled) this.$layout.disableScroll();

      this._frame(function () {
        this.$zoomable.addClass(this.options.classes.show).addClass(this.options.classes.priorityZIndex);
        this.$backdrop.addClass(this.options.classes.backdrop.show).addClass(this.options.classes.layout.priorityZIndex);

        this._frame(function () {
          this.$zoomable.addClass(this.options.classes.zoom);
          this.$backdrop.addClass(this.options.classes.backdrop.zoom);

          this._positionate(true);

          if (this.options.magnification.enabled && event) this.__move(event);

          this._delay(function () {
            this.$zoomable.addClass(this.options.classes.zoomed);
            this.$backdrop.addClass(this.options.classes.backdrop.zoomed);
            if (this.options.original.src) this.$zoomable.attr('src', this.options.original.src);
            this.unlock();

            this._trigger('zoom');
          }, this.options.animations.zoom);
        });
      });

      this._reset();

      this.___tap();

      this.___tapOutside();

      this.___keydown();

      this.___scroll();

      this.___resize();

      if (this.options.magnification.enabled) this.___move();
    };

    _proto89.unzoom = function unzoom() {
      if (!this._isZoomed) return null;
      if (this.isLocked()) return this.whenUnlocked(this.unzoom.bind(this));
      this._isZoomed = false;
      this.lock();

      this._frame(function () {
        this.$zoomable.removeClass(this.options.classes.zoomed);
        this.$backdrop.removeClass(this.options.classes.backdrop.zoomed);

        this._frame(function () {
          this._unpositionate();

          this.$zoomable.removeClass(this.options.classes.zoom);
          this.$backdrop.removeClass(this.options.classes.backdrop.zoom);

          this._delay(function () {
            if (this.options.original.src && !this.options.original.substitute) this.$zoomable.attr('src', this.options.src);
            this.$zoomable.removeClass(this.options.classes.show).removeClass(this.options.classes.priorityZIndex);
            this.$backdrop.removeClass(this.options.classes.backdrop.show).removeClass(this.options.classes.layout.priorityZIndex);
            if (this.options.magnification.enabled) this.$layout.enableScroll();
            this.unlock();

            this._trigger('unzoom');
          }, this.options.animations.unzoom);
        });
      });

      this._reset();

      this.___tap();
    };

    return Zoomable;
  }(Widgets.Widget);
  /* FACTORY */


  Factory.make(Zoomable, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory, Svelto.Browser, Svelto.Pointer, Svelto.Keyboard, Svelto.Animations, Svelto.fetch); // @require ../zoomable.js
// @require widgets/targeter/closer/closer.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'zoomableCloser',
    plugin: true,
    selector: '.zoomable-closer',
    options: {
      widget: Widgets.Zoomable
    }
  };
  /* ZOOMABLE CLOSER */

  var ZoomableCloser =
  /*#__PURE__*/
  function (_Widgets$Closer11) {
    _inheritsLoose(ZoomableCloser, _Widgets$Closer11);

    function ZoomableCloser() {
      return _Widgets$Closer11.apply(this, arguments) || this;
    }

    return ZoomableCloser;
  }(Widgets.Closer);
  /* FACTORY */


  Factory.make(ZoomableCloser, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../zoomable.js
// @require widgets/targeter/opener/opener.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'zoomableOpener',
    plugin: true,
    selector: '.zoomable-opener',
    options: {
      widget: Widgets.Zoomable
    }
  };
  /* ZOOMABLE OPENER */

  var ZoomableOpener =
  /*#__PURE__*/
  function (_Widgets$Opener10) {
    _inheritsLoose(ZoomableOpener, _Widgets$Opener10);

    function ZoomableOpener() {
      return _Widgets$Opener10.apply(this, arguments) || this;
    }

    return ZoomableOpener;
  }(Widgets.Opener);
  /* FACTORY */


  Factory.make(ZoomableOpener, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory); // @require ../zoomable.js
// @require widgets/targeter/toggler/toggler.js


(function ($, _, Svelto, Widgets, Factory) {
  /* CONFIG */
  var config = {
    name: 'zoomableToggler',
    plugin: true,
    selector: '.zoomable-toggler',
    options: {
      widget: Widgets.Zoomable
    }
  };
  /* ZOOMABLE TOGGLER */

  var ZoomableToggler =
  /*#__PURE__*/
  function (_Widgets$Toggler10) {
    _inheritsLoose(ZoomableToggler, _Widgets$Toggler10);

    function ZoomableToggler() {
      return _Widgets$Toggler10.apply(this, arguments) || this;
    }

    return ZoomableToggler;
  }(Widgets.Toggler);
  /* FACTORY */


  Factory.make(ZoomableToggler, config);
})(Svelto.$, Svelto._, Svelto, Svelto.Widgets, Svelto.Factory);