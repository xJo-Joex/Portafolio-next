"use strict";
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\joeve\\Documents\\portafolio\\pages\\blog.js",
    _this = undefined;





var Blog = function Blog() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    footer: false,
    dark: true,
    title: "My Blog"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 20
  }, _this);
};

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

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


/***/ }),

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "experiences": function() { return /* binding */ experiences; },
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "post": function() { return /* binding */ post; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skills = [{
  skill: "Javascript",
  percentage: 100
}, {
  skill: "C#",
  percentage: 60
}, {
  skill: "Firebase",
  percentage: 70
}, {
  skill: "Tailwind",
  percentage: 70
}, {
  skill: "Next",
  percentage: 80
}, {
  skill: "React",
  percentage: 90
}, {
  skill: "Bootstrap",
  percentage: 50
}, {
  skill: "RV",
  percentage: 70
}, {
  skill: "Node.js",
  percentage: 60
}, {
  skill: "MongoDB",
  percentage: 60
}, {
  skill: "SQL",
  percentage: 60
}, {
  skill: "Unity",
  percentage: 60
}, {
  skill: "Redes",
  percentage: 70
}];
var experiences = [{
  title: "Freelancer",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae temporibus veniam doloremque incidunt sed architecto porro accusamus corrupti, reprehenderit voluptatibus repudiandae cumque atque! Sequi suscipit, molestiae quis aut dicta nihil?",
  from: 2019,
  to: 2021
}];
var projects = [{
  title: "WebSite TODO",
  description: "Aplicación para agendar tareas, realizada con JS, Boostrap, con enfoque de OPP",
  image: "todo.png",
  link: "https://to-do-task-js.netlify.app/"
}, {
  title: "Recipes Drinks",
  description: "Sitio web de recetas para cocteles, realizado con create-react-app, API TheCockTailDB",
  image: "drinks.png",
  link: "https://recipes-drinks-react.netlify.app/"
}, {
  title: "TechNews",
  description: "Diseño de un Blog de noticas, realizado con JS, CSS, HTML",
  image: "technews.png",
  link: "https://modest-euler-06c6a3.netlify.app/"
}, {
  title: "Cotizador de seguros",
  description: "Aplicación web que cotiza el pago de un seguro, reaclizada con create-react-app ",
  image: "cotizador.png",
  link: "https://react-quote.netlify.app/"
}];
var post = [{
  title: "React",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumæ",
  imgURL: "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
}, {
  title: "Angular",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumæ",
  imgURL: "https://www.digital55.com/wp-content/uploads/2019/10/Renderizado_en_servidor_con_angular_universal.png?x72330"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4yMmIyNzZjYzQ4NTU0NWQzMjUxNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0JBQU0sOERBQUMsdURBQUQ7QUFBUSxVQUFNLEVBQUUsS0FBaEI7QUFBdUIsUUFBSSxNQUEzQjtBQUE0QixTQUFLLEVBQUU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQUEsQ0FBYjs7S0FBTUE7QUFDTiwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk8sSUFBTUMsTUFBTSxHQUFHLENBQ3BCO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxZQUFUO0FBQXVCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbkMsQ0FEb0IsRUFFcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBRm9CLEVBR3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FIb0IsRUFJcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUpvQixFQUtwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTdCLENBTG9CLEVBTXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0FOb0IsRUFPcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFsQyxDQVBvQixFQVFwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxFQUFBQSxVQUFVLEVBQUU7QUFBM0IsQ0FSb0IsRUFTcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFoQyxDQVRvQixFQVVwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWhDLENBVm9CLEVBV3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxFQUFBQSxVQUFVLEVBQUU7QUFBNUIsQ0FYb0IsRUFZcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQVpvQixFQWFwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBYm9CLENBQWY7QUFnQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3pCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxtUEFISjtBQUlFQyxFQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFQyxFQUFBQSxFQUFFLEVBQUU7QUFMTixDQUR5QixDQUFwQjtBQVVBLElBQU1DLFFBQVEsR0FBRyxDQUN0QjtBQUNFSixFQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsZ0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FEc0IsRUFRdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGdCQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCx1RkFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsWUFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQVJzQixFQWV0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsVUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsMkRBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGNBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0Fmc0IsRUFxQnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxzQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1Qsa0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FyQnNCLENBQWpCO0FBOEJBLElBQU1aLElBQUksR0FBRyxDQUNsQjtBQUNFTSxFQUFBQSxLQUFLLEVBQUUsT0FEVDtBQUVFTyxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0FEa0IsRUFRbEI7QUFDRVIsRUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRU8sRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBUmtCLENBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IGRhcmsgdGl0bGU9e1wiTXkgQmxvZ1wifT48L0xheW91dD47XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiIsImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgeyBza2lsbDogXCJKYXZhc2NyaXB0XCIsIHBlcmNlbnRhZ2U6IDEwMCB9LFxyXG4gIHsgc2tpbGw6IFwiQyNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIkZpcmViYXNlXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJUYWlsd2luZFwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTmV4dFwiLCBwZXJjZW50YWdlOiA4MCB9LFxyXG4gIHsgc2tpbGw6IFwiUmVhY3RcIiwgcGVyY2VudGFnZTogOTAgfSxcclxuICB7IHNraWxsOiBcIkJvb3RzdHJhcFwiLCBwZXJjZW50YWdlOiA1MCB9LFxyXG4gIHsgc2tpbGw6IFwiUlZcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIk5vZGUuanNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIk1vbmdvREJcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlNRTFwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiVW5pdHlcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlJlZGVzXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnJlZWxhbmNlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhZSB0ZW1wb3JpYnVzIHZlbmlhbSBkb2xvcmVtcXVlIGluY2lkdW50IHNlZCBhcmNoaXRlY3RvIHBvcnJvIGFjY3VzYW11cyBjb3JydXB0aSwgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGlidXMgcmVwdWRpYW5kYWUgY3VtcXVlIGF0cXVlISBTZXF1aSBzdXNjaXBpdCwgbW9sZXN0aWFlIHF1aXMgYXV0IGRpY3RhIG5paGlsP1wiLFxyXG4gICAgZnJvbTogMjAxOSxcclxuICAgIHRvOiAyMDIxLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2ViU2l0ZSBUT0RPXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiBwYXJhIGFnZW5kYXIgdGFyZWFzLCByZWFsaXphZGEgY29uIEpTLCBCb29zdHJhcCwgY29uIGVuZm9xdWUgZGUgT1BQXCIsXHJcbiAgICBpbWFnZTogXCJ0b2RvLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3RvLWRvLXRhc2stanMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWNpcGVzIERyaW5rc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2l0aW8gd2ViIGRlIHJlY2V0YXMgcGFyYSBjb2N0ZWxlcywgcmVhbGl6YWRvIGNvbiBjcmVhdGUtcmVhY3QtYXBwLCBBUEkgVGhlQ29ja1RhaWxEQlwiLFxyXG4gICAgaW1hZ2U6IFwiZHJpbmtzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3JlY2lwZXMtZHJpbmtzLXJlYWN0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVGVjaE5ld3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2XDsW8gZGUgdW4gQmxvZyBkZSBub3RpY2FzLCByZWFsaXphZG8gY29uIEpTLCBDU1MsIEhUTUxcIixcclxuICAgIGltYWdlOiBcInRlY2huZXdzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL21vZGVzdC1ldWxlci0wNmM2YTMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb3RpemFkb3IgZGUgc2VndXJvc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gd2ViIHF1ZSBjb3RpemEgZWwgcGFnbyBkZSB1biBzZWd1cm8sIHJlYWNsaXphZGEgY29uIGNyZWF0ZS1yZWFjdC1hcHAgXCIsXHJcbiAgICBpbWFnZTogXCJjb3RpemFkb3IucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVhY3QtcXVvdGUubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly9zaWdkZWxldHJhcy5jb20vaW1hZ2VzL2Jsb2cvMjAyMDA0X3JlYWN0X2xlYWZsZXQvcmVhY3QucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbmd1bGFyXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZGlnaXRhbDU1LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9SZW5kZXJpemFkb19lbl9zZXJ2aWRvcl9jb25fYW5ndWxhcl91bml2ZXJzYWwucG5nP3g3MjMzMFwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwb3N0IiwiQmxvZyIsInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb2plY3RzIiwiaW1hZ2UiLCJsaW5rIiwiY29udGVudCIsImltZ1VSTCJdLCJzb3VyY2VSb290IjoiIn0=