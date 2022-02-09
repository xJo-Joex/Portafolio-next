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
/* harmony export */   "posts": function() { return /* binding */ posts; }
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
}, {
  title: "Platzi Food",
  description: "Sitio web de comida rapida, realizada con Tailwind",
  image: "food.png",
  link: "https://food-with-tailwind.netlify.app/"
}, {
  title: "App Clima ",
  description: "App de clima, usando con react ",
  image: "clima.png",
  link: "https://wea-ther-react-app.netlify.app/"
}, {
  title: "SquidGame",
  description: "Minijuego realizado con la libreria Three.js",
  image: "squidGame.png",
  link: "https://squidgame-app.netlify.app/"
}];
var posts = [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ3NThiZDFkYzBjMWQ2ZWU2M2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNwQjtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsRUFBQUEsVUFBVSxFQUFFO0FBQW5DLENBRG9CLEVBRXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQUZvQixFQUdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWpDLENBSG9CLEVBSXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FKb0IsRUFLcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLEVBQUFBLFVBQVUsRUFBRTtBQUE3QixDQUxvQixFQU1wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBTm9CLEVBT3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxXQUFUO0FBQXNCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbEMsQ0FQb0IsRUFRcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBUm9CLEVBU3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FUb0IsRUFVcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFoQyxDQVZvQixFQVdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTVCLENBWG9CLEVBWXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0Fab0IsRUFhcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQWJvQixDQUFmO0FBZ0JBLElBQU1DLFdBQVcsR0FBRyxDQUN6QjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsbVBBSEo7QUFJRUMsRUFBQUEsSUFBSSxFQUFFLElBSlI7QUFLRUMsRUFBQUEsRUFBRSxFQUFFO0FBTE4sQ0FEeUIsQ0FBcEI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRUosRUFBQUEsS0FBSyxFQUFFLGNBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULGdGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxVQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBRHNCLEVBUXRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxnQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsdUZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFlBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FSc0IsRUFldEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFVBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDJEQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxjQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBZnNCLEVBcUJ0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsc0JBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULGtGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxlQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBckJzQixFQTRCdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGFBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLG9EQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxVQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBNUJzQixFQWtDdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFlBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLGlDQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxXQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBbENzQixFQXdDdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFdBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDhDQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxlQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBeENzQixDQUFqQjtBQWdEQSxJQUFNQyxLQUFLLEdBQUcsQ0FDbkI7QUFDRVAsRUFBQUEsS0FBSyxFQUFFLE9BRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBRG1CLEVBUW5CO0FBQ0VULEVBQUFBLEtBQUssRUFBRSxTQURUO0FBRUVRLEVBQUFBLE9BQU8sRUFDTCwrYkFISjtBQUlFQyxFQUFBQSxNQUFNLEVBQ0o7QUFMSixDQVJtQixDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICB7IHNraWxsOiBcIkphdmFzY3JpcHRcIiwgcGVyY2VudGFnZTogMTAwIH0sXHJcbiAgeyBza2lsbDogXCJDI1wiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiRmlyZWJhc2VcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIlRhaWx3aW5kXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJOZXh0XCIsIHBlcmNlbnRhZ2U6IDgwIH0sXHJcbiAgeyBza2lsbDogXCJSZWFjdFwiLCBwZXJjZW50YWdlOiA5MCB9LFxyXG4gIHsgc2tpbGw6IFwiQm9vdHN0cmFwXCIsIHBlcmNlbnRhZ2U6IDUwIH0sXHJcbiAgeyBza2lsbDogXCJSVlwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTm9kZS5qc1wiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiTW9uZ29EQlwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiU1FMXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJVbml0eVwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiUmVkZXNcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJGcmVlbGFuY2VyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFlIHRlbXBvcmlidXMgdmVuaWFtIGRvbG9yZW1xdWUgaW5jaWR1bnQgc2VkIGFyY2hpdGVjdG8gcG9ycm8gYWNjdXNhbXVzIGNvcnJ1cHRpLCByZXByZWhlbmRlcml0IHZvbHVwdGF0aWJ1cyByZXB1ZGlhbmRhZSBjdW1xdWUgYXRxdWUhIFNlcXVpIHN1c2NpcGl0LCBtb2xlc3RpYWUgcXVpcyBhdXQgZGljdGEgbmloaWw/XCIsXHJcbiAgICBmcm9tOiAyMDE5LFxyXG4gICAgdG86IDIwMjEsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJXZWJTaXRlIFRPRE9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFwbGljYWNpw7NuIHBhcmEgYWdlbmRhciB0YXJlYXMsIHJlYWxpemFkYSBjb24gSlMsIEJvb3N0cmFwLCBjb24gZW5mb3F1ZSBkZSBPUFBcIixcclxuICAgIGltYWdlOiBcInRvZG8ucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vdG8tZG8tdGFzay1qcy5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlY2lwZXMgRHJpbmtzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTaXRpbyB3ZWIgZGUgcmVjZXRhcyBwYXJhIGNvY3RlbGVzLCByZWFsaXphZG8gY29uIGNyZWF0ZS1yZWFjdC1hcHAsIEFQSSBUaGVDb2NrVGFpbERCXCIsXHJcbiAgICBpbWFnZTogXCJkcmlua3MucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVjaXBlcy1kcmlua3MtcmVhY3QubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUZWNoTmV3c1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGlzZcOxbyBkZSB1biBCbG9nIGRlIG5vdGljYXMsIHJlYWxpemFkbyBjb24gSlMsIENTUywgSFRNTFwiLFxyXG4gICAgaW1hZ2U6IFwidGVjaG5ld3MucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vbW9kZXN0LWV1bGVyLTA2YzZhMy5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvdGl6YWRvciBkZSBzZWd1cm9zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiB3ZWIgcXVlIGNvdGl6YSBlbCBwYWdvIGRlIHVuIHNlZ3VybywgcmVhY2xpemFkYSBjb24gY3JlYXRlLXJlYWN0LWFwcCBcIixcclxuICAgIGltYWdlOiBcImNvdGl6YWRvci5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWFjdC1xdW90ZS5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBsYXR6aSBGb29kXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTaXRpbyB3ZWIgZGUgY29taWRhIHJhcGlkYSwgcmVhbGl6YWRhIGNvbiBUYWlsd2luZFwiLFxyXG4gICAgaW1hZ2U6IFwiZm9vZC5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9mb29kLXdpdGgtdGFpbHdpbmQubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcHAgQ2xpbWEgXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBcHAgZGUgY2xpbWEsIHVzYW5kbyBjb24gcmVhY3QgXCIsXHJcbiAgICBpbWFnZTogXCJjbGltYS5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93ZWEtdGhlci1yZWFjdC1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTcXVpZEdhbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1pbmlqdWVnbyByZWFsaXphZG8gY29uIGxhIGxpYnJlcmlhIFRocmVlLmpzXCIsXHJcbiAgICBpbWFnZTogXCJzcXVpZEdhbWUucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vc3F1aWRnYW1lLWFwcC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly9zaWdkZWxldHJhcy5jb20vaW1hZ2VzL2Jsb2cvMjAyMDA0X3JlYWN0X2xlYWZsZXQvcmVhY3QucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbmd1bGFyXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZGlnaXRhbDU1LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9SZW5kZXJpemFkb19lbl9zZXJ2aWRvcl9jb25fYW5ndWxhcl91bml2ZXJzYWwucG5nP3g3MjMzMFwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsImltYWdlIiwibGluayIsInBvc3RzIiwiY29udGVudCIsImltZ1VSTCJdLCJzb3VyY2VSb290IjoiIn0=