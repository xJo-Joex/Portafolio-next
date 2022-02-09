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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy45OTQ0MTgzNDg1NGQ5YTg4MTRmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxZQUFUO0FBQXVCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbkMsQ0FEb0IsRUFFcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUZvQixFQUdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWpDLENBSG9CLEVBSXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxFQUFBQSxVQUFVLEVBQUU7QUFBN0IsQ0FKb0IsRUFLcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEVBQUFBLFVBQVUsRUFBRTtBQUEvQixDQUxvQixFQU1wQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBTm9CLEVBT3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxXQUFUO0FBQXNCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbEMsQ0FQb0IsRUFRcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBUm9CLEVBU3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxFQUFBQSxVQUFVLEVBQUU7QUFBaEMsQ0FUb0IsRUFVcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFoQyxDQVZvQixFQVdwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTVCLENBWG9CLEVBWXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0Fab0IsRUFhcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBYm9CLEVBY3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0Fkb0IsQ0FBZjtBQWlCQSxJQUFNQyxXQUFXLEdBQUcsQ0FDekI7QUFDRUMsRUFBQUEsS0FBSyxFQUFFLFlBRFQ7QUFFRUMsRUFBQUEsV0FBVyxFQUNULG9QQUhKO0FBSUVDLEVBQUFBLElBQUksRUFBRSxJQUpSO0FBS0VDLEVBQUFBLEVBQUUsRUFBRTtBQUxOLENBRHlCLENBQXBCO0FBVUEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VKLEVBQUFBLEtBQUssRUFBRSxjQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxnRkFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsVUFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQURzQixFQVF0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsNkVBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGlCQUpUO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBUnNCLEVBZXRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxnQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsdUZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFlBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0Fmc0IsRUFzQnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSwyREFGZjtBQUdFSSxFQUFBQSxLQUFLLEVBQUUsY0FIVDtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFKUixDQXRCc0IsRUE0QnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxzQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1Qsa0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0E1QnNCLEVBbUN0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0FuQ3NCLEVBeUN0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsaUNBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFdBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0F6Q3NCLEVBK0N0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsOENBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0EvQ3NCLENBQWpCO0FBdURBLElBQU1DLEtBQUssR0FBRyxDQUNuQjtBQUNFUCxFQUFBQSxLQUFLLEVBQUUsT0FEVDtBQUVFUSxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0FEbUIsRUFRbkI7QUFDRVQsRUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBUm1CLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHsgc2tpbGw6IFwiSmF2YXNjcmlwdFwiLCBwZXJjZW50YWdlOiAxMDAgfSxcclxuICB7IHNraWxsOiBcIkZpcmViYXNlXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJUYWlsd2luZFwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTmV4dFwiLCBwZXJjZW50YWdlOiA4MCB9LFxyXG4gIHsgc2tpbGw6IFwiR2l0aHViXCIsIHBlcmNlbnRhZ2U6IDgwIH0sXHJcbiAgeyBza2lsbDogXCJSZWFjdFwiLCBwZXJjZW50YWdlOiA5MCB9LFxyXG4gIHsgc2tpbGw6IFwiQm9vdHN0cmFwXCIsIHBlcmNlbnRhZ2U6IDUwIH0sXHJcbiAgeyBza2lsbDogXCJSVlwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiTm9kZS5qc1wiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiTW9uZ29EQlwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiU1FMXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJVbml0eVwiLCBwZXJjZW50YWdlOiA2MCB9LFxyXG4gIHsgc2tpbGw6IFwiQyNcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlJlZGVzXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnJlZWxhbmNlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhZSB0ZW1wb3JpYnVzIHZlbmlhbSBkb2xvcmVtcXVlIGluY2lkdW50IHNlZCBhcmNoaXRlY3RvIHBvcnJvIGFjY3VzYW11cyBjb3JydXB0aSwgcmVwcmVoZW5kZXJpdCB2b2x1cHRhdGlidXMgcmVwdWRpYW5kYWUgY3VtcXVlIGF0cXVlISBTZXF1aSBzdXNjaXBpdCwgbW9sZXN0aWFlIHF1aXMgYXV0IGRpY3RhIG5paGlsPyBcIixcclxuICAgIGZyb206IDIwMTksXHJcbiAgICB0bzogMjAyMSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldlYlNpdGUgVE9ET1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gcGFyYSBhZ2VuZGFyIHRhcmVhcywgcmVhbGl6YWRhIGNvbiBKUywgQm9vc3RyYXAsIGNvbiBlbmZvcXVlIGRlIE9QUFwiLFxyXG4gICAgaW1hZ2U6IFwidG9kby5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly90by1kby10YXNrLWpzLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBIdW50XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTaXRpbyB3ZWIgcGFyYSBwdWJsaWNhciBpZGVhcyBkZSBwcm95ZWN0b3MsIHJlYWxpemFkbyBjb24gTmV4dCB5IEZpcmViYXNlLCBcIixcclxuICAgIGltYWdlOiBcInByb2R1Y3RIdW50LnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3Byb2R1Y3QtaHVudC04b2o5cGZvOGoteGpvLWpvZXgudmVyY2VsLmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlY2lwZXMgRHJpbmtzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTaXRpbyB3ZWIgZGUgcmVjZXRhcyBwYXJhIGNvY3RlbGVzLCByZWFsaXphZG8gY29uIGNyZWF0ZS1yZWFjdC1hcHAsIEFQSSBUaGVDb2NrVGFpbERCXCIsXHJcbiAgICBpbWFnZTogXCJkcmlua3MucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVjaXBlcy1kcmlua3MtcmVhY3QubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUZWNoTmV3c1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGlzZcOxbyBkZSB1biBCbG9nIGRlIG5vdGljYXMsIHJlYWxpemFkbyBjb24gSlMsIENTUywgSFRNTFwiLFxyXG4gICAgaW1hZ2U6IFwidGVjaG5ld3MucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vbW9kZXN0LWV1bGVyLTA2YzZhMy5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvdGl6YWRvciBkZSBzZWd1cm9zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcGxpY2FjacOzbiB3ZWIgcXVlIGNvdGl6YSBlbCBwYWdvIGRlIHVuIHNlZ3VybywgcmVhY2xpemFkYSBjb24gY3JlYXRlLXJlYWN0LWFwcCBcIixcclxuICAgIGltYWdlOiBcImNvdGl6YWRvci5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWFjdC1xdW90ZS5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBsYXR6aSBGb29kXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTaXRpbyB3ZWIgZGUgY29taWRhIHJhcGlkYSwgcmVhbGl6YWRhIGNvbiBUYWlsd2luZFwiLFxyXG4gICAgaW1hZ2U6IFwiZm9vZC5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9mb29kLXdpdGgtdGFpbHdpbmQubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcHAgQ2xpbWEgXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBcHAgZGUgY2xpbWEsIHVzYW5kbyBjb24gcmVhY3QgXCIsXHJcbiAgICBpbWFnZTogXCJjbGltYS5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93ZWEtdGhlci1yZWFjdC1hcHAubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTcXVpZEdhbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1pbmlqdWVnbyByZWFsaXphZG8gY29uIGxhIGxpYnJlcmlhIFRocmVlLmpzXCIsXHJcbiAgICBpbWFnZTogXCJzcXVpZEdhbWUucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vc3F1aWRnYW1lLWFwcC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly9zaWdkZWxldHJhcy5jb20vaW1hZ2VzL2Jsb2cvMjAyMDA0X3JlYWN0X2xlYWZsZXQvcmVhY3QucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbmd1bGFyXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bcOmXCIsXHJcbiAgICBpbWdVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZGlnaXRhbDU1LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9SZW5kZXJpemFkb19lbl9zZXJ2aWRvcl9jb25fYW5ndWxhcl91bml2ZXJzYWwucG5nP3g3MjMzMFwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsImltYWdlIiwibGluayIsInBvc3RzIiwiY29udGVudCIsImltZ1VSTCJdLCJzb3VyY2VSb290IjoiIn0=