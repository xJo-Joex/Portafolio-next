"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\joeve\\Documents\\portafolio\\components\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();








var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? true : _ref$footer,
      dark = _ref.dark,
      title = _ref.title;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleRouterChange = function handleRouterChange(url) {
      // console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();
    };

    var handleRouterChangeComplete = function handleRouterChangeComplete(url) {
      // console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();
    };

    router.events.on("routeChangeStart", handleRouterChange);
    router.events.on("routeChangeConmplete", handleRouterChangeComplete());
    return function () {
      router.events.off("routeChangeStart", handleRouterChange); // router.events.off("routeChangeConmplete", handleRouterChangeComplete );
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      "bg-dark": dark,
      "bg-light": !dark
    }),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: "container py-4",
      children: [title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("text-center", {
          "text-light": dark
        }),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), footer && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("footer", {
      className: "bg-dark text-light text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container p-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: "\xA9 Joe Vega Portafolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["2021-", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "All rights Rerverd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmQ2YTU2ZmNmNTBkYmMxNDQwZGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThDO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQztBQUFBLHlCQUFqQ0MsTUFBaUM7QUFBQSxNQUFqQ0EsTUFBaUMsNEJBQXhCLElBQXdCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMzRCxNQUFNQyxNQUFNLEdBQUdSLGtFQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1VLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsR0FBRCxFQUFTO0FBQ2xDO0FBQ0FULE1BQUFBLHNEQUFBO0FBQ0QsS0FIRDs7QUFJQSxRQUFNVywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNGLEdBQUQsRUFBUztBQUMxQztBQUNBVCxNQUFBQSxxREFBQTtBQUNELEtBSEQ7O0FBS0FPLElBQUFBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ04sa0JBQXJDO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxFQUFkLENBQWlCLHNCQUFqQixFQUF5Q0gsMEJBQTBCLEVBQW5FO0FBQ0EsV0FBTyxZQUFNO0FBQ1hKLE1BQUFBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ1Asa0JBQXRDLEVBRFcsQ0FFWDtBQUVELEtBSkQ7QUFLRCxHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBa0JBLHNCQUNFO0FBQUssYUFBUyxFQUFFUCxpREFBVSxDQUFDO0FBQUUsaUJBQVdJLElBQWI7QUFBbUIsa0JBQVksQ0FBQ0E7QUFBaEMsS0FBRCxDQUExQjtBQUFBLDRCQUNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU0sZUFBUyxFQUFDLGdCQUFoQjtBQUFBLGlCQUNHQyxLQUFLLGlCQUNKO0FBQUksaUJBQVMsRUFBRUwsaURBQVUsQ0FBQyxhQUFELEVBQWdCO0FBQUUsd0JBQWNJO0FBQWhCLFNBQWhCLENBQXpCO0FBQUEsa0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBTUdILFFBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFVR0MsTUFBTSxpQkFDTDtBQUFRLGVBQVMsRUFBQyxnQ0FBbEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSw4QkFBUyxJQUFJWSxJQUFKLEdBQVdDLFdBQVgsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0EzQ0Q7O0dBQU1mO1VBQ1dIOzs7S0FEWEc7QUE2Q04sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXIgPSB0cnVlLCBkYXJrLCB0aXRsZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZXJDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlckNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICBOUHJvZ3Jlc3MuZG9uZSgpXHJcbiAgICB9O1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlckNoYW5nZSk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb25tcGxldGVcIiwgaGFuZGxlUm91dGVyQ2hhbmdlQ29tcGxldGUoKSApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlckNoYW5nZSk7XHJcbiAgICAgIC8vIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb25tcGxldGVcIiwgaGFuZGxlUm91dGVyQ2hhbmdlQ29tcGxldGUgKTtcclxuXHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBcImJnLWRhcmtcIjogZGFyaywgXCJiZy1saWdodFwiOiAhZGFyayB9KX0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICB7dGl0bGUgJiYgKFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInRleHQtY2VudGVyXCIsIHsgXCJ0ZXh0LWxpZ2h0XCI6IGRhcmsgfSl9PlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHtmb290ZXIgJiYgKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cclxuICAgICAgICAgICAgPGgxPiZjb3B5OyBKb2UgVmVnYSBQb3J0YWZvbGlvPC9oMT5cclxuICAgICAgICAgICAgPHA+MjAyMS17bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cclxuICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyBSZXJ2ZXJkPC9wPlxyXG4gICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJjbGFzc25hbWVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJmb290ZXIiLCJkYXJrIiwidGl0bGUiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZXJDaGFuZ2UiLCJ1cmwiLCJzdGFydCIsImhhbmRsZVJvdXRlckNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsImV2ZW50cyIsIm9uIiwib2ZmIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==