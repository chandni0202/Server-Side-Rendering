webpackHotUpdate_N_E("pages/robots",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\tusha\\Desktop\\Frontend Projects\\SSRVSCSR\\pages\\robots.js",
    _this = undefined;




var Robots = function Robots(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: "Robots"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: props.robots.map(function (robot, index) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: robot.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = Robots;
Robots.getInitialProps = /*#__PURE__*/Object(C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return C_Users_tusha_Desktop_Frontend_Projects_SSRVSCSR_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://jsonplaceholder.typicode.com/users");

        case 2:
          res = _context.sent;
          data = res.json();
          return _context.abrupt("return", {
            robots: data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Robots);

var _c;

$RefreshReg$(_c, "Robots");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9ib3RzLmpzIl0sIm5hbWVzIjpbIlJvYm90cyIsInByb3BzIiwicm9ib3RzIiwibWFwIiwicm9ib3QiLCJpbmRleCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsc0JBQ0k7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUEscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFLQTtBQUFBLGdCQUNLQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxLQUFELEVBQU9DLEtBQVAsRUFBZTtBQUU3QjtBQUFBO0FBQUEsb0JBQ0tELEtBQUssQ0FBQ0U7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0gsT0FMQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQWpCRDs7S0FBTU4sTTtBQW1CTkEsTUFBTSxDQUFDTyxlQUFQLDJUQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNIQyx5REFBSyxDQUFDLDRDQUFELENBREY7O0FBQUE7QUFDZkMsYUFEZTtBQUdmQyxjQUhlLEdBR1JELEdBQUcsQ0FBQ0UsSUFBSixFQUhRO0FBQUEsMkNBS2Q7QUFDSFQsa0JBQU0sRUFBR1E7QUFETixXQUxjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCO0FBU2VWLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JvYm90cy44MzM5ZDMzYWZkNTY0NjZkNWU1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuY29uc3QgUm9ib3RzID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlJvYm90czwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLnJvYm90cy5tYXAoKHJvYm90LGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICB7cm9ib3QuaWR9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUm9ib3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIilcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJvYm90cyA6IGRhdGFcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==