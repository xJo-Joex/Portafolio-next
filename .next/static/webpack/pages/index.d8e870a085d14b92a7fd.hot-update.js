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
  skill: "Firebase",
  percentage: 70
}, {
  skill: "Tailwind",
  percentage: 70
}, {
  skill: "Next",
  percentage: 80
}, {
  skill: "Github",
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
  skill: "C#",
  percentage: 60
}, {
  skill: "Redes",
  percentage: 70
}];
var experiences = [{
  title: "Freelancer",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae temporibus veniam doloremque incidunt sed architecto porro accusamus corrupti, reprehenderit voluptatibus repudiandae cumque atque! Sequi suscipit, molestiae quis aut dicta nihil? ",
  from: 2019,
  to: 2021
}, {
  title: "Contacto",
  description: "https://www.linkedin.com/in/joe-vega-296b37185/",
  from: 2019,
  to: 2021
}];
var projects = [{
  title: "WebSite TODO",
  description: "Aplicación para agendar tareas, realizada con JS, Boostrap, con enfoque de OPP",
  image: "todo.png",
  link: "https://to-do-task-js.netlify.app/"
}, {
  title: "Product Hunt",
  description: "Sitio web para publicar ideas de proyectos, realizado con Next y Firebase, ",
  image: "productHunt.png",
  link: "https://product-hunt-8oj9pfo8j-xjo-joex.vercel.app/"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDhlODcwYTA4NWQxNGI5MmE3ZmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNwQjtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsRUFBQUEsVUFBVSxFQUFFO0FBQW5DLENBRG9CLEVBRXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FGb0IsRUFHcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUhvQixFQUlwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTdCLENBSm9CLEVBS3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1CQyxFQUFBQSxVQUFVLEVBQUU7QUFBL0IsQ0FMb0IsRUFNcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQU5vQixFQU9wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsV0FBVDtBQUFzQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWxDLENBUG9CLEVBUXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQVJvQixFQVNwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWhDLENBVG9CLEVBVXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FWb0IsRUFXcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE1QixDQVhvQixFQVlwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBWm9CLEVBYXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQWJvQixFQWNwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBZG9CLENBQWY7QUFpQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3pCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxvUEFISjtBQUlFQyxFQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFQyxFQUFBQSxFQUFFLEVBQUU7QUFMTixDQUR5QixFQVF6QjtBQUNFSCxFQUFBQSxLQUFLLEVBQUUsVUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsaURBSEo7QUFJRUMsRUFBQUEsSUFBSSxFQUFFLElBSlI7QUFLRUMsRUFBQUEsRUFBRSxFQUFFO0FBTE4sQ0FSeUIsQ0FBcEI7QUFpQkEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VKLEVBQUFBLEtBQUssRUFBRSxjQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxnRkFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsVUFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQURzQixFQVF0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsNkVBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGlCQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBUnNCLEVBZXRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxnQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsdUZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFlBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0Fmc0IsRUFzQnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSwyREFGZjtBQUdFSSxFQUFBQSxLQUFLLEVBQUUsY0FIVDtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFKUixDQXRCc0IsRUE0QnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxzQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1Qsa0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0E1QnNCLEVBbUN0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0FuQ3NCLEVBeUN0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsaUNBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFdBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0F6Q3NCLEVBK0N0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsOENBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0EvQ3NCLENBQWpCO0FBdURBLElBQU1DLEtBQUssR0FBRyxDQUNuQjtBQUNFUCxFQUFBQSxLQUFLLEVBQUUsT0FEVDtBQUVFUSxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0FEbUIsRUFRbkI7QUFDRVQsRUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBUm1CLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHsgc2tpbGw6IFwiSmF2YXNjcmlwdFwiLCBwZXJjZW50YWdlOiAxMDAgfSxcclxuICB7IHNraWxsOiBcIkZpcmViYXNlXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJUYWlsd2luZFwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTmV4dFwiLCBwZXJjZW50YWdlOiA4MCB9LFxyXG4gIHsgc2tpbGw6IFwiR2l0aHViXCIsIHBlcmNlbnRhZ2U6IDgwIH0sXHJcbiAgeyBza2lsbDogXCJSZWFjdFwiLCBwZXJjZW50YWdlOiA5MCB9LFxyXG4gIHsgc2tpbGw6IFwiQm9vdHN0cmFwXCIsIHBlcmNlbnRhZ2U6IDUwIH0sXHJcbiAgeyBza2lsbDogXCJSVlwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTm9kZS5qc1wiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiTW9uZ29EQlwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiU1FMXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJVbml0eVwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiQyNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlJlZGVzXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnJlZWxhbmNlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhZSB0ZW1wb3JpYnVzIHZlbmlhbSBkb2xvcmVtcXVlIGluY2lkdW50IHNlZCBhcmNoaXRlY3RvIHBvcnJvIGFjY3VzYW11cyBjb3JydXB0aSwgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGlidXMgcmVwdWRpYW5kYWUgY3VtcXVlIGF0cXVlISBTZXF1aSBzdXNjaXBpdCwgbW9sZXN0aWFlIHF1aXMgYXV0IGRpY3RhIG5paGlsPyBcIixcclxuICAgIGZyb206IDIwMTksXHJcbiAgICB0bzogMjAyMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvbnRhY3RvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9lLXZlZ2EtMjk2YjM3MTg1L1wiLFxyXG4gICAgZnJvbTogMjAxOSxcclxuICAgIHRvOiAyMDIxLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2ViU2l0ZSBUT0RPXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiBwYXJhIGFnZW5kYXIgdGFyZWFzLCByZWFsaXphZGEgY29uIEpTLCBCb29zdHJhcCwgY29uIGVuZm9xdWUgZGUgT1BQXCIsXHJcbiAgICBpbWFnZTogXCJ0b2RvLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3RvLWRvLXRhc2stanMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9kdWN0IEh1bnRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNpdGlvIHdlYiBwYXJhIHB1YmxpY2FyIGlkZWFzIGRlIHByb3llY3RvcywgcmVhbGl6YWRvIGNvbiBOZXh0IHkgRmlyZWJhc2UsIFwiLFxyXG4gICAgaW1hZ2U6IFwicHJvZHVjdEh1bnQucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJvZHVjdC1odW50LThvajlwZm84ai14am8tam9leC52ZXJjZWwuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmVjaXBlcyBEcmlua3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNpdGlvIHdlYiBkZSByZWNldGFzIHBhcmEgY29jdGVsZXMsIHJlYWxpemFkbyBjb24gY3JlYXRlLXJlYWN0LWFwcCwgQVBJIFRoZUNvY2tUYWlsREJcIixcclxuICAgIGltYWdlOiBcImRyaW5rcy5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWNpcGVzLWRyaW5rcy1yZWFjdC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRlY2hOZXdzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEaXNlw7FvIGRlIHVuIEJsb2cgZGUgbm90aWNhcywgcmVhbGl6YWRvIGNvbiBKUywgQ1NTLCBIVE1MXCIsXHJcbiAgICBpbWFnZTogXCJ0ZWNobmV3cy5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9tb2Rlc3QtZXVsZXItMDZjNmEzLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ290aXphZG9yIGRlIHNlZ3Vyb3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFwbGljYWNpw7NuIHdlYiBxdWUgY290aXphIGVsIHBhZ28gZGUgdW4gc2VndXJvLCByZWFjbGl6YWRhIGNvbiBjcmVhdGUtcmVhY3QtYXBwIFwiLFxyXG4gICAgaW1hZ2U6IFwiY290aXphZG9yLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3JlYWN0LXF1b3RlLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUGxhdHppIEZvb2RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNpdGlvIHdlYiBkZSBjb21pZGEgcmFwaWRhLCByZWFsaXphZGEgY29uIFRhaWx3aW5kXCIsXHJcbiAgICBpbWFnZTogXCJmb29kLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2Zvb2Qtd2l0aC10YWlsd2luZC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFwcCBDbGltYSBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcCBkZSBjbGltYSwgdXNhbmRvIGNvbiByZWFjdCBcIixcclxuICAgIGltYWdlOiBcImNsaW1hLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3dlYS10aGVyLXJlYWN0LWFwcC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNxdWlkR2FtZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTWluaWp1ZWdvIHJlYWxpemFkbyBjb24gbGEgbGlicmVyaWEgVGhyZWUuanNcIixcclxuICAgIGltYWdlOiBcInNxdWlkR2FtZS5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9zcXVpZGdhbWUtYXBwLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtw6ZcIixcclxuICAgIGltZ1VSTDpcclxuICAgICAgXCJodHRwczovL3NpZ2RlbGV0cmFzLmNvbS9pbWFnZXMvYmxvZy8yMDIwMDRfcmVhY3RfbGVhZmxldC9yZWFjdC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFuZ3VsYXJcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtw6ZcIixcclxuICAgIGltZ1VSTDpcclxuICAgICAgXCJodHRwczovL3d3dy5kaWdpdGFsNTUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL1JlbmRlcml6YWRvX2VuX3NlcnZpZG9yX2Nvbl9hbmd1bGFyX3VuaXZlcnNhbC5wbmc/eDcyMzMwXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb2plY3RzIiwiaW1hZ2UiLCJsaW5rIiwicG9zdHMiLCJjb250ZW50IiwiaW1nVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==