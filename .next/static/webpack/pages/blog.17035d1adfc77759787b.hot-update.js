"use strict";
self["webpackHotUpdate_N_E"]("pages/blog",{

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
  percentage: 70
}, {
  skill: "Github",
  percentage: 80
}, {
  skill: "React",
  percentage: 80
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
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae temporibus veniam doloremque incidunt sed architecto porro accusamus corrupti, reprehenderit voluptatibus repudiandae cumque atque! Sequi suscipit, molestiae quis aut dicta nihil? ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4xNzAzNWQxYWRmYzc3NzU5Nzg3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxZQUFUO0FBQXVCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbkMsQ0FEb0IsRUFFcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUZvQixFQUdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWpDLENBSG9CLEVBSXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxFQUFBQSxVQUFVLEVBQUU7QUFBN0IsQ0FKb0IsRUFLcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEVBQUFBLFVBQVUsRUFBRTtBQUEvQixDQUxvQixFQU1wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBTm9CLEVBT3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxXQUFUO0FBQXNCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbEMsQ0FQb0IsRUFRcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBUm9CLEVBU3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FUb0IsRUFVcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFoQyxDQVZvQixFQVdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTVCLENBWG9CLEVBWXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0Fab0IsRUFhcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQWJvQixDQUFmO0FBZ0JBLElBQU1DLFdBQVcsR0FBRyxDQUN6QjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1Qsb1BBSEo7QUFJRUMsRUFBQUEsSUFBSSxFQUFFLElBSlI7QUFLRUMsRUFBQUEsRUFBRSxFQUFFO0FBTE4sQ0FEeUIsQ0FBcEI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRUosRUFBQUEsS0FBSyxFQUFFLGNBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULGdGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxVQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBRHNCLEVBUXRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxjQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCw2RUFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsaUJBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FSc0IsRUFldEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGdCQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCx1RkFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsWUFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQWZzQixFQXNCdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFVBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDJEQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxjQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBdEJzQixFQTRCdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLHNCQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxrRkFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsZUFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQTVCc0IsRUFtQ3RCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxhQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxvREFGZjtBQUdFSSxFQUFBQSxLQUFLLEVBQUUsVUFIVDtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFKUixDQW5Dc0IsRUF5Q3RCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxpQ0FGZjtBQUdFSSxFQUFBQSxLQUFLLEVBQUUsV0FIVDtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFKUixDQXpDc0IsRUErQ3RCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSw4Q0FGZjtBQUdFSSxFQUFBQSxLQUFLLEVBQUUsZUFIVDtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFKUixDQS9Dc0IsQ0FBakI7QUF1REEsSUFBTUMsS0FBSyxHQUFHLENBQ25CO0FBQ0VQLEVBQUFBLEtBQUssRUFBRSxPQURUO0FBRUVRLEVBQUFBLE9BQU8sRUFDTCwrYkFISjtBQUlFQyxFQUFBQSxNQUFNLEVBQ0o7QUFMSixDQURtQixFQVFuQjtBQUNFVCxFQUFBQSxLQUFLLEVBQUUsU0FEVDtBQUVFUSxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0FSbUIsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgeyBza2lsbDogXCJKYXZhc2NyaXB0XCIsIHBlcmNlbnRhZ2U6IDEwMCB9LFxyXG4gIHsgc2tpbGw6IFwiRmlyZWJhc2VcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIlRhaWx3aW5kXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJOZXh0XCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJHaXRodWJcIiwgcGVyY2VudGFnZTogODAgfSxcclxuICB7IHNraWxsOiBcIlJlYWN0XCIsIHBlcmNlbnRhZ2U6IDgwIH0sXHJcbiAgeyBza2lsbDogXCJCb290c3RyYXBcIiwgcGVyY2VudGFnZTogNTAgfSxcclxuICB7IHNraWxsOiBcIlJWXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJOb2RlLmpzXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJNb25nb0RCXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJTUUxcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlVuaXR5XCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJSZWRlc1wiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZyZWVsYW5jZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgdGVtcG9yaWJ1cyB2ZW5pYW0gZG9sb3JlbXF1ZSBpbmNpZHVudCBzZWQgYXJjaGl0ZWN0byBwb3JybyBhY2N1c2FtdXMgY29ycnVwdGksIHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRpYnVzIHJlcHVkaWFuZGFlIGN1bXF1ZSBhdHF1ZSEgU2VxdWkgc3VzY2lwaXQsIG1vbGVzdGlhZSBxdWlzIGF1dCBkaWN0YSBuaWhpbD8gXCIsXHJcbiAgICBmcm9tOiAyMDE5LFxyXG4gICAgdG86IDIwMjEsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJXZWJTaXRlIFRPRE9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFwbGljYWNpw7NuIHBhcmEgYWdlbmRhciB0YXJlYXMsIHJlYWxpemFkYSBjb24gSlMsIEJvb3N0cmFwLCBjb24gZW5mb3F1ZSBkZSBPUFBcIixcclxuICAgIGltYWdlOiBcInRvZG8ucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vdG8tZG8tdGFzay1qcy5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlByb2R1Y3QgSHVudFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2l0aW8gd2ViIHBhcmEgcHVibGljYXIgaWRlYXMgZGUgcHJveWVjdG9zLCByZWFsaXphZG8gY29uIE5leHQgeSBGaXJlYmFzZSwgXCIsXHJcbiAgICBpbWFnZTogXCJwcm9kdWN0SHVudC5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcm9kdWN0LWh1bnQtOG9qOXBmbzhqLXhqby1qb2V4LnZlcmNlbC5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWNpcGVzIERyaW5rc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU2l0aW8gd2ViIGRlIHJlY2V0YXMgcGFyYSBjb2N0ZWxlcywgcmVhbGl6YWRvIGNvbiBjcmVhdGUtcmVhY3QtYXBwLCBBUEkgVGhlQ29ja1RhaWxEQlwiLFxyXG4gICAgaW1hZ2U6IFwiZHJpbmtzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3JlY2lwZXMtZHJpbmtzLXJlYWN0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVGVjaE5ld3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2XDsW8gZGUgdW4gQmxvZyBkZSBub3RpY2FzLCByZWFsaXphZG8gY29uIEpTLCBDU1MsIEhUTUxcIixcclxuICAgIGltYWdlOiBcInRlY2huZXdzLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL21vZGVzdC1ldWxlci0wNmM2YTMubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb3RpemFkb3IgZGUgc2VndXJvc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gd2ViIHF1ZSBjb3RpemEgZWwgcGFnbyBkZSB1biBzZWd1cm8sIHJlYWNsaXphZGEgY29uIGNyZWF0ZS1yZWFjdC1hcHAgXCIsXHJcbiAgICBpbWFnZTogXCJjb3RpemFkb3IucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVhY3QtcXVvdGUubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQbGF0emkgRm9vZFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU2l0aW8gd2ViIGRlIGNvbWlkYSByYXBpZGEsIHJlYWxpemFkYSBjb24gVGFpbHdpbmRcIixcclxuICAgIGltYWdlOiBcImZvb2QucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZm9vZC13aXRoLXRhaWx3aW5kLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXBwIENsaW1hIFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwIGRlIGNsaW1hLCB1c2FuZG8gY29uIHJlYWN0IFwiLFxyXG4gICAgaW1hZ2U6IFwiY2xpbWEucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd2VhLXRoZXItcmVhY3QtYXBwLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU3F1aWRHYW1lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNaW5panVlZ28gcmVhbGl6YWRvIGNvbiBsYSBsaWJyZXJpYSBUaHJlZS5qc1wiLFxyXG4gICAgaW1hZ2U6IFwic3F1aWRHYW1lLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3NxdWlkZ2FtZS1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW3DplwiLFxyXG4gICAgaW1nVVJMOlxyXG4gICAgICBcImh0dHBzOi8vc2lnZGVsZXRyYXMuY29tL2ltYWdlcy9ibG9nLzIwMjAwNF9yZWFjdF9sZWFmbGV0L3JlYWN0LnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQW5ndWxhclwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW3DplwiLFxyXG4gICAgaW1nVVJMOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LmRpZ2l0YWw1NS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvUmVuZGVyaXphZG9fZW5fc2Vydmlkb3JfY29uX2FuZ3VsYXJfdW5pdmVyc2FsLnBuZz94NzIzMzBcIixcclxuICB9LFxyXG5dO1xyXG4iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJpbWFnZSIsImxpbmsiLCJwb3N0cyIsImNvbnRlbnQiLCJpbWdVUkwiXSwic291cmNlUm9vdCI6IiJ9