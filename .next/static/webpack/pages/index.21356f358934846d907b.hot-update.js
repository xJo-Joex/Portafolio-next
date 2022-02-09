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
  title: "Product Hunt",
  description: "Sitio web para publicar ideas de proyectos, realizado con Next y Firebase, ",
  image: "todo.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjEzNTZmMzU4OTM0ODQ2ZDkwN2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNwQjtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsRUFBQUEsVUFBVSxFQUFFO0FBQW5DLENBRG9CLEVBRXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FGb0IsRUFHcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUhvQixFQUlwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTdCLENBSm9CLEVBS3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1CQyxFQUFBQSxVQUFVLEVBQUU7QUFBL0IsQ0FMb0IsRUFNcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQU5vQixFQU9wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsV0FBVDtBQUFzQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWxDLENBUG9CLEVBUXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQVJvQixFQVNwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWhDLENBVG9CLEVBVXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FWb0IsRUFXcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE1QixDQVhvQixFQVlwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBWm9CLEVBYXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQWJvQixFQWNwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBZG9CLENBQWY7QUFpQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3pCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxtUEFISjtBQUlFQyxFQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFQyxFQUFBQSxFQUFFLEVBQUU7QUFMTixDQUR5QixDQUFwQjtBQVVBLElBQU1DLFFBQVEsR0FBRyxDQUN0QjtBQUNFSixFQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsZ0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FEc0IsRUFRdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGNBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULDZFQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxVQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBUnNCLEVBZXRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxnQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsdUZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFlBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0Fmc0IsRUFzQnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSwyREFGZjtBQUdFSSxFQUFBQSxLQUFLLEVBQUUsY0FIVDtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFKUixDQXRCc0IsRUE0QnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxzQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1Qsa0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0E1QnNCLEVBbUN0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0FuQ3NCLEVBeUN0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsaUNBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFdBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0F6Q3NCLEVBK0N0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsOENBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0EvQ3NCLENBQWpCO0FBdURBLElBQU1DLEtBQUssR0FBRyxDQUNuQjtBQUNFUCxFQUFBQSxLQUFLLEVBQUUsT0FEVDtBQUVFUSxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0FEbUIsRUFRbkI7QUFDRVQsRUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBUm1CLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHsgc2tpbGw6IFwiSmF2YXNjcmlwdFwiLCBwZXJjZW50YWdlOiAxMDAgfSxcclxuICB7IHNraWxsOiBcIkZpcmViYXNlXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJUYWlsd2luZFwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTmV4dFwiLCBwZXJjZW50YWdlOiA4MCB9LFxyXG4gIHsgc2tpbGw6IFwiR2l0aHViXCIsIHBlcmNlbnRhZ2U6IDgwIH0sXHJcbiAgeyBza2lsbDogXCJSZWFjdFwiLCBwZXJjZW50YWdlOiA5MCB9LFxyXG4gIHsgc2tpbGw6IFwiQm9vdHN0cmFwXCIsIHBlcmNlbnRhZ2U6IDUwIH0sXHJcbiAgeyBza2lsbDogXCJSVlwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTm9kZS5qc1wiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiTW9uZ29EQlwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiU1FMXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJVbml0eVwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiQyNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlJlZGVzXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnJlZWxhbmNlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhZSB0ZW1wb3JpYnVzIHZlbmlhbSBkb2xvcmVtcXVlIGluY2lkdW50IHNlZCBhcmNoaXRlY3RvIHBvcnJvIGFjY3VzYW11cyBjb3JydXB0aSwgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGlidXMgcmVwdWRpYW5kYWUgY3VtcXVlIGF0cXVlISBTZXF1aSBzdXNjaXBpdCwgbW9sZXN0aWFlIHF1aXMgYXV0IGRpY3RhIG5paGlsP1wiLFxyXG4gICAgZnJvbTogMjAxOSxcclxuICAgIHRvOiAyMDIxLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2ViU2l0ZSBUT0RPXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiBwYXJhIGFnZW5kYXIgdGFyZWFzLCByZWFsaXphZGEgY29uIEpTLCBCb29zdHJhcCwgY29uIGVuZm9xdWUgZGUgT1BQXCIsXHJcbiAgICBpbWFnZTogXCJ0b2RvLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3RvLWRvLXRhc2stanMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9kdWN0IEh1bnRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNpdGlvIHdlYiBwYXJhIHB1YmxpY2FyIGlkZWFzIGRlIHByb3llY3RvcywgcmVhbGl6YWRvIGNvbiBOZXh0IHkgRmlyZWJhc2UsIFwiLFxyXG4gICAgaW1hZ2U6IFwidG9kby5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcm9kdWN0LWh1bnQtOG9qOXBmbzhqLXhqby1qb2V4LnZlcmNlbC5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWNpcGVzIERyaW5rc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2l0aW8gd2ViIGRlIHJlY2V0YXMgcGFyYSBjb2N0ZWxlcywgcmVhbGl6YWRvIGNvbiBjcmVhdGUtcmVhY3QtYXBwLCBBUEkgVGhlQ29ja1RhaWxEQlwiLFxyXG4gICAgaW1hZ2U6IFwiZHJpbmtzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3JlY2lwZXMtZHJpbmtzLXJlYWN0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVGVjaE5ld3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2XDsW8gZGUgdW4gQmxvZyBkZSBub3RpY2FzLCByZWFsaXphZG8gY29uIEpTLCBDU1MsIEhUTUxcIixcclxuICAgIGltYWdlOiBcInRlY2huZXdzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL21vZGVzdC1ldWxlci0wNmM2YTMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb3RpemFkb3IgZGUgc2VndXJvc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gd2ViIHF1ZSBjb3RpemEgZWwgcGFnbyBkZSB1biBzZWd1cm8sIHJlYWNsaXphZGEgY29uIGNyZWF0ZS1yZWFjdC1hcHAgXCIsXHJcbiAgICBpbWFnZTogXCJjb3RpemFkb3IucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVhY3QtcXVvdGUubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQbGF0emkgRm9vZFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU2l0aW8gd2ViIGRlIGNvbWlkYSByYXBpZGEsIHJlYWxpemFkYSBjb24gVGFpbHdpbmRcIixcclxuICAgIGltYWdlOiBcImZvb2QucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZm9vZC13aXRoLXRhaWx3aW5kLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXBwIENsaW1hIFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwIGRlIGNsaW1hLCB1c2FuZG8gY29uIHJlYWN0IFwiLFxyXG4gICAgaW1hZ2U6IFwiY2xpbWEucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd2VhLXRoZXItcmVhY3QtYXBwLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU3F1aWRHYW1lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNaW5panVlZ28gcmVhbGl6YWRvIGNvbiBsYSBsaWJyZXJpYSBUaHJlZS5qc1wiLFxyXG4gICAgaW1hZ2U6IFwic3F1aWRHYW1lLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3NxdWlkZ2FtZS1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW3DplwiLFxyXG4gICAgaW1nVVJMOlxyXG4gICAgICBcImh0dHBzOi8vc2lnZGVsZXRyYXMuY29tL2ltYWdlcy9ibG9nLzIwMjAwNF9yZWFjdF9sZWFmbGV0L3JlYWN0LnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQW5ndWxhclwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW3DplwiLFxyXG4gICAgaW1nVVJMOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LmRpZ2l0YWw1NS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvUmVuZGVyaXphZG9fZW5fc2Vydmlkb3JfY29uX2FuZ3VsYXJfdW5pdmVyc2FsLnBuZz94NzIzMzBcIixcclxuICB9LFxyXG5dO1xyXG4iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJpbWFnZSIsImxpbmsiLCJwb3N0cyIsImNvbnRlbnQiLCJpbWdVUkwiXSwic291cmNlUm9vdCI6IiJ9