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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE5MTRlY2JjNzg5MmYxNzBkOGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNwQjtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsRUFBQUEsVUFBVSxFQUFFO0FBQW5DLENBRG9CLEVBRXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FGb0IsRUFHcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUhvQixFQUlwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTdCLENBSm9CLEVBS3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1CQyxFQUFBQSxVQUFVLEVBQUU7QUFBL0IsQ0FMb0IsRUFNcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQU5vQixFQU9wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsV0FBVDtBQUFzQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWxDLENBUG9CLEVBUXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQVJvQixFQVNwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWhDLENBVG9CLEVBVXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FWb0IsRUFXcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE1QixDQVhvQixFQVlwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBWm9CLEVBYXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRTtBQUEzQixDQWJvQixFQWNwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBZG9CLENBQWY7QUFpQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3pCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxtUEFISjtBQUlFQyxFQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFQyxFQUFBQSxFQUFFLEVBQUU7QUFMTixDQUR5QixDQUFwQjtBQVVBLElBQU1DLFFBQVEsR0FBRyxDQUN0QjtBQUNFSixFQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsZ0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FEc0IsRUFRdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGNBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULDZFQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxpQkFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQVJzQixFQWV0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULHVGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxZQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBZnNCLEVBc0J0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsVUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsMkRBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGNBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0F0QnNCLEVBNEJ0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsc0JBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULGtGQUhKO0FBSUVJLEVBQUFBLEtBQUssRUFBRSxlQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBNUJzQixFQW1DdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGFBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLG9EQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxVQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBbkNzQixFQXlDdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFlBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLGlDQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxXQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBekNzQixFQStDdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLFdBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDhDQUZmO0FBR0VJLEVBQUFBLEtBQUssRUFBRSxlQUhUO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUpSLENBL0NzQixDQUFqQjtBQXVEQSxJQUFNQyxLQUFLLEdBQUcsQ0FDbkI7QUFDRVAsRUFBQUEsS0FBSyxFQUFFLE9BRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBRG1CLEVBUW5CO0FBQ0VULEVBQUFBLEtBQUssRUFBRSxTQURUO0FBRUVRLEVBQUFBLE9BQU8sRUFDTCwrYkFISjtBQUlFQyxFQUFBQSxNQUFNLEVBQ0o7QUFMSixDQVJtQixDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICB7IHNraWxsOiBcIkphdmFzY3JpcHRcIiwgcGVyY2VudGFnZTogMTAwIH0sXHJcbiAgeyBza2lsbDogXCJGaXJlYmFzZVwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiVGFpbHdpbmRcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIk5leHRcIiwgcGVyY2VudGFnZTogODAgfSxcclxuICB7IHNraWxsOiBcIkdpdGh1YlwiLCBwZXJjZW50YWdlOiA4MCB9LFxyXG4gIHsgc2tpbGw6IFwiUmVhY3RcIiwgcGVyY2VudGFnZTogOTAgfSxcclxuICB7IHNraWxsOiBcIkJvb3RzdHJhcFwiLCBwZXJjZW50YWdlOiA1MCB9LFxyXG4gIHsgc2tpbGw6IFwiUlZcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIk5vZGUuanNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIk1vbmdvREJcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlNRTFwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiVW5pdHlcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIkMjXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJSZWRlc1wiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZyZWVsYW5jZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgdGVtcG9yaWJ1cyB2ZW5pYW0gZG9sb3JlbXF1ZSBpbmNpZHVudCBzZWQgYXJjaGl0ZWN0byBwb3JybyBhY2N1c2FtdXMgY29ycnVwdGksIHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRpYnVzIHJlcHVkaWFuZGFlIGN1bXF1ZSBhdHF1ZSEgU2VxdWkgc3VzY2lwaXQsIG1vbGVzdGlhZSBxdWlzIGF1dCBkaWN0YSBuaWhpbD9cIixcclxuICAgIGZyb206IDIwMTksXHJcbiAgICB0bzogMjAyMSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldlYlNpdGUgVE9ET1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gcGFyYSBhZ2VuZGFyIHRhcmVhcywgcmVhbGl6YWRhIGNvbiBKUywgQm9vc3RyYXAsIGNvbiBlbmZvcXVlIGRlIE9QUFwiLFxyXG4gICAgaW1hZ2U6IFwidG9kby5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly90by1kby10YXNrLWpzLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBIdW50XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTaXRpbyB3ZWIgcGFyYSBwdWJsaWNhciBpZGVhcyBkZSBwcm95ZWN0b3MsIHJlYWxpemFkbyBjb24gTmV4dCB5IEZpcmViYXNlLCBcIixcclxuICAgIGltYWdlOiBcInByb2R1Y3RIdW50LnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3Byb2R1Y3QtaHVudC04b2o5cGZvOGoteGpvLWpvZXgudmVyY2VsLmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlY2lwZXMgRHJpbmtzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTaXRpbyB3ZWIgZGUgcmVjZXRhcyBwYXJhIGNvY3RlbGVzLCByZWFsaXphZG8gY29uIGNyZWF0ZS1yZWFjdC1hcHAsIEFQSSBUaGVDb2NrVGFpbERCXCIsXHJcbiAgICBpbWFnZTogXCJkcmlua3MucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVjaXBlcy1kcmlua3MtcmVhY3QubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUZWNoTmV3c1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGlzZcOxbyBkZSB1biBCbG9nIGRlIG5vdGljYXMsIHJlYWxpemFkbyBjb24gSlMsIENTUywgSFRNTFwiLFxyXG4gICAgaW1hZ2U6IFwidGVjaG5ld3MucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vbW9kZXN0LWV1bGVyLTA2YzZhMy5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvdGl6YWRvciBkZSBzZWd1cm9zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiB3ZWIgcXVlIGNvdGl6YSBlbCBwYWdvIGRlIHVuIHNlZ3VybywgcmVhY2xpemFkYSBjb24gY3JlYXRlLXJlYWN0LWFwcCBcIixcclxuICAgIGltYWdlOiBcImNvdGl6YWRvci5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWFjdC1xdW90ZS5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBsYXR6aSBGb29kXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTaXRpbyB3ZWIgZGUgY29taWRhIHJhcGlkYSwgcmVhbGl6YWRhIGNvbiBUYWlsd2luZFwiLFxyXG4gICAgaW1hZ2U6IFwiZm9vZC5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9mb29kLXdpdGgtdGFpbHdpbmQubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcHAgQ2xpbWEgXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBcHAgZGUgY2xpbWEsIHVzYW5kbyBjb24gcmVhY3QgXCIsXHJcbiAgICBpbWFnZTogXCJjbGltYS5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93ZWEtdGhlci1yZWFjdC1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTcXVpZEdhbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1pbmlqdWVnbyByZWFsaXphZG8gY29uIGxhIGxpYnJlcmlhIFRocmVlLmpzXCIsXHJcbiAgICBpbWFnZTogXCJzcXVpZEdhbWUucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vc3F1aWRnYW1lLWFwcC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly9zaWdkZWxldHJhcy5jb20vaW1hZ2VzL2Jsb2cvMjAyMDA0X3JlYWN0X2xlYWZsZXQvcmVhY3QucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbmd1bGFyXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZGlnaXRhbDU1LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9SZW5kZXJpemFkb19lbl9zZXJ2aWRvcl9jb25fYW5ndWxhcl91bml2ZXJzYWwucG5nP3g3MjMzMFwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsImltYWdlIiwibGluayIsInBvc3RzIiwiY29udGVudCIsImltZ1VSTCJdLCJzb3VyY2VSb290IjoiIn0=