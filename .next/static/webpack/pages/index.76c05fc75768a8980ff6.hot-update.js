"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
  imgURL: "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
}, {
  title: "React",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumæ",
  imgURL: "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzZjMDVmYzc1NzY4YTg5ODBmZjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNwQjtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsRUFBQUEsVUFBVSxFQUFFO0FBQW5DLENBRG9CLEVBRXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQUZvQixFQUdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWpDLENBSG9CLEVBSXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FKb0IsRUFLcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLEVBQUFBLFVBQVUsRUFBRTtBQUE3QixDQUxvQixFQU1wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBTm9CLEVBT3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxXQUFUO0FBQXNCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbEMsQ0FQb0IsRUFRcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBUm9CLEVBU3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FUb0IsRUFVcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFoQyxDQVZvQixFQVdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTVCLENBWG9CLEVBWXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0Fab0IsRUFhcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQWJvQixDQUFmO0FBZ0JBLElBQU1DLFdBQVcsR0FBRyxDQUN6QjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsbVBBSEo7QUFJRUMsRUFBQUEsSUFBSSxFQUFFLElBSlI7QUFLRUMsRUFBQUEsRUFBRSxFQUFFO0FBTE4sQ0FEeUIsQ0FBcEI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRUosRUFBQUEsS0FBSyxFQUFFLGNBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULGdGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxVQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBRHNCLEVBUXRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxnQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsdUZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFlBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FSc0IsRUFldEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFVBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDJEQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxjQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBZnNCLEVBcUJ0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsc0JBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULGtGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxlQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBckJzQixDQUFqQjtBQThCQSxJQUFNQyxJQUFJLEdBQUcsQ0FDbEI7QUFDRVAsRUFBQUEsS0FBSyxFQUFFLE9BRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBRGtCLEVBUWxCO0FBQ0VULEVBQUFBLEtBQUssRUFBRSxTQURUO0FBRUVRLEVBQUFBLE9BQU8sRUFDTCwrYkFISjtBQUlFQyxFQUFBQSxNQUFNLEVBQ0o7QUFMSixDQVJrQixFQWVsQjtBQUNFVCxFQUFBQSxLQUFLLEVBQUUsT0FEVDtBQUVFUSxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0Fma0IsQ0FBYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgeyBza2lsbDogXCJKYXZhc2NyaXB0XCIsIHBlcmNlbnRhZ2U6IDEwMCB9LFxyXG4gIHsgc2tpbGw6IFwiQyNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIkZpcmViYXNlXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJUYWlsd2luZFwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTmV4dFwiLCBwZXJjZW50YWdlOiA4MCB9LFxyXG4gIHsgc2tpbGw6IFwiUmVhY3RcIiwgcGVyY2VudGFnZTogOTAgfSxcclxuICB7IHNraWxsOiBcIkJvb3RzdHJhcFwiLCBwZXJjZW50YWdlOiA1MCB9LFxyXG4gIHsgc2tpbGw6IFwiUlZcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIk5vZGUuanNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIk1vbmdvREJcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlNRTFwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiVW5pdHlcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlJlZGVzXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnJlZWxhbmNlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhZSB0ZW1wb3JpYnVzIHZlbmlhbSBkb2xvcmVtcXVlIGluY2lkdW50IHNlZCBhcmNoaXRlY3RvIHBvcnJvIGFjY3VzYW11cyBjb3JydXB0aSwgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGlidXMgcmVwdWRpYW5kYWUgY3VtcXVlIGF0cXVlISBTZXF1aSBzdXNjaXBpdCwgbW9sZXN0aWFlIHF1aXMgYXV0IGRpY3RhIG5paGlsP1wiLFxyXG4gICAgZnJvbTogMjAxOSxcclxuICAgIHRvOiAyMDIxLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2ViU2l0ZSBUT0RPXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiBwYXJhIGFnZW5kYXIgdGFyZWFzLCByZWFsaXphZGEgY29uIEpTLCBCb29zdHJhcCwgY29uIGVuZm9xdWUgZGUgT1BQXCIsXHJcbiAgICBpbWFnZTogXCJ0b2RvLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3RvLWRvLXRhc2stanMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWNpcGVzIERyaW5rc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2l0aW8gd2ViIGRlIHJlY2V0YXMgcGFyYSBjb2N0ZWxlcywgcmVhbGl6YWRvIGNvbiBjcmVhdGUtcmVhY3QtYXBwLCBBUEkgVGhlQ29ja1RhaWxEQlwiLFxyXG4gICAgaW1hZ2U6IFwiZHJpbmtzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3JlY2lwZXMtZHJpbmtzLXJlYWN0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVGVjaE5ld3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2XDsW8gZGUgdW4gQmxvZyBkZSBub3RpY2FzLCByZWFsaXphZG8gY29uIEpTLCBDU1MsIEhUTUxcIixcclxuICAgIGltYWdlOiBcInRlY2huZXdzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL21vZGVzdC1ldWxlci0wNmM2YTMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb3RpemFkb3IgZGUgc2VndXJvc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gd2ViIHF1ZSBjb3RpemEgZWwgcGFnbyBkZSB1biBzZWd1cm8sIHJlYWNsaXphZGEgY29uIGNyZWF0ZS1yZWFjdC1hcHAgXCIsXHJcbiAgICBpbWFnZTogXCJjb3RpemFkb3IucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVhY3QtcXVvdGUubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly9zaWdkZWxldHJhcy5jb20vaW1hZ2VzL2Jsb2cvMjAyMDA0X3JlYWN0X2xlYWZsZXQvcmVhY3QucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbmd1bGFyXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly9zaWdkZWxldHJhcy5jb20vaW1hZ2VzL2Jsb2cvMjAyMDA0X3JlYWN0X2xlYWZsZXQvcmVhY3QucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW3DplwiLFxyXG4gICAgaW1nVVJMOlxyXG4gICAgICBcImh0dHBzOi8vc2lnZGVsZXRyYXMuY29tL2ltYWdlcy9ibG9nLzIwMjAwNF9yZWFjdF9sZWFmbGV0L3JlYWN0LnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsImltYWdlIiwibGluayIsInBvc3QiLCJjb250ZW50IiwiaW1nVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==