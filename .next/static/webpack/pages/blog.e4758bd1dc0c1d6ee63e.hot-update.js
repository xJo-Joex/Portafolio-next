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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5lNDc1OGJkMWRjMGMxZDZlZTYzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxZQUFUO0FBQXVCQyxFQUFBQSxVQUFVLEVBQUU7QUFBbkMsQ0FEb0IsRUFFcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsRUFBQUEsVUFBVSxFQUFFO0FBQTNCLENBRm9CLEVBR3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxFQUFBQSxVQUFVLEVBQUU7QUFBakMsQ0FIb0IsRUFJcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLEVBQUFBLFVBQVUsRUFBRTtBQUFqQyxDQUpvQixFQUtwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTdCLENBTG9CLEVBTXBCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUU7QUFBOUIsQ0FOb0IsRUFPcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFsQyxDQVBvQixFQVFwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxFQUFBQSxVQUFVLEVBQUU7QUFBM0IsQ0FSb0IsRUFTcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLEVBQUFBLFVBQVUsRUFBRTtBQUFoQyxDQVRvQixFQVVwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsRUFBQUEsVUFBVSxFQUFFO0FBQWhDLENBVm9CLEVBV3BCO0FBQUVELEVBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxFQUFBQSxVQUFVLEVBQUU7QUFBNUIsQ0FYb0IsRUFZcEI7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLEVBQUFBLFVBQVUsRUFBRTtBQUE5QixDQVpvQixFQWFwQjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsVUFBVSxFQUFFO0FBQTlCLENBYm9CLENBQWY7QUFnQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3pCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCxtUEFISjtBQUlFQyxFQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFQyxFQUFBQSxFQUFFLEVBQUU7QUFMTixDQUR5QixDQUFwQjtBQVVBLElBQU1DLFFBQVEsR0FBRyxDQUN0QjtBQUNFSixFQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1QsZ0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLFVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FEc0IsRUFRdEI7QUFDRU4sRUFBQUEsS0FBSyxFQUFFLGdCQURUO0FBRUVDLEVBQUFBLFdBQVcsRUFDVCx1RkFISjtBQUlFSSxFQUFBQSxLQUFLLEVBQUUsWUFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUU7QUFMUixDQVJzQixFQWV0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsVUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsMkRBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGNBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0Fmc0IsRUFxQnRCO0FBQ0VOLEVBQUFBLEtBQUssRUFBRSxzQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQ1Qsa0ZBSEo7QUFJRUksRUFBQUEsS0FBSyxFQUFFLGVBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FyQnNCLEVBNEJ0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0E1QnNCLEVBa0N0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsWUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsaUNBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLFdBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0FsQ3NCLEVBd0N0QjtBQUNFTixFQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsOENBRmY7QUFHRUksRUFBQUEsS0FBSyxFQUFFLGVBSFQ7QUFJRUMsRUFBQUEsSUFBSSxFQUFFO0FBSlIsQ0F4Q3NCLENBQWpCO0FBZ0RBLElBQU1DLEtBQUssR0FBRyxDQUNuQjtBQUNFUCxFQUFBQSxLQUFLLEVBQUUsT0FEVDtBQUVFUSxFQUFBQSxPQUFPLEVBQ0wsK2JBSEo7QUFJRUMsRUFBQUEsTUFBTSxFQUNKO0FBTEosQ0FEbUIsRUFRbkI7QUFDRVQsRUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRVEsRUFBQUEsT0FBTyxFQUNMLCtiQUhKO0FBSUVDLEVBQUFBLE1BQU0sRUFDSjtBQUxKLENBUm1CLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHsgc2tpbGw6IFwiSmF2YXNjcmlwdFwiLCBwZXJjZW50YWdlOiAxMDAgfSxcclxuICB7IHNraWxsOiBcIkMjXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJGaXJlYmFzZVwiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG4gIHsgc2tpbGw6IFwiVGFpbHdpbmRcIiwgcGVyY2VudGFnZTogNzAgfSxcclxuICB7IHNraWxsOiBcIk5leHRcIiwgcGVyY2VudGFnZTogODAgfSxcclxuICB7IHNraWxsOiBcIlJlYWN0XCIsIHBlcmNlbnRhZ2U6IDkwIH0sXHJcbiAgeyBza2lsbDogXCJCb290c3RyYXBcIiwgcGVyY2VudGFnZTogNTAgfSxcclxuICB7IHNraWxsOiBcIlJWXCIsIHBlcmNlbnRhZ2U6IDcwIH0sXHJcbiAgeyBza2lsbDogXCJOb2RlLmpzXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJNb25nb0RCXCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJTUUxcIiwgcGVyY2VudGFnZTogNjAgfSxcclxuICB7IHNraWxsOiBcIlVuaXR5XCIsIHBlcmNlbnRhZ2U6IDYwIH0sXHJcbiAgeyBza2lsbDogXCJSZWRlc1wiLCBwZXJjZW50YWdlOiA3MCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZyZWVsYW5jZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgdGVtcG9yaWJ1cyB2ZW5pYW0gZG9sb3JlbXF1ZSBpbmNpZHVudCBzZWQgYXJjaGl0ZWN0byBwb3JybyBhY2N1c2FtdXMgY29ycnVwdGksIHJlcHJlaGVuZGVyaXQgdm9sdXB0YXRpYnVzIHJlcHVkaWFuZGFlIGN1bXF1ZSBhdHF1ZSEgU2VxdWkgc3VzY2lwaXQsIG1vbGVzdGlhZSBxdWlzIGF1dCBkaWN0YSBuaWhpbD9cIixcclxuICAgIGZyb206IDIwMTksXHJcbiAgICB0bzogMjAyMSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldlYlNpdGUgVE9ET1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQXBsaWNhY2nDs24gcGFyYSBhZ2VuZGFyIHRhcmVhcywgcmVhbGl6YWRhIGNvbiBKUywgQm9vc3RyYXAsIGNvbiBlbmZvcXVlIGRlIE9QUFwiLFxyXG4gICAgaW1hZ2U6IFwidG9kby5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly90by1kby10YXNrLWpzLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmVjaXBlcyBEcmlua3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNpdGlvIHdlYiBkZSByZWNldGFzIHBhcmEgY29jdGVsZXMsIHJlYWxpemFkbyBjb24gY3JlYXRlLXJlYWN0LWFwcCwgQVBJIFRoZUNvY2tUYWlsREJcIixcclxuICAgIGltYWdlOiBcImRyaW5rcy5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWNpcGVzLWRyaW5rcy1yZWFjdC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRlY2hOZXdzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEaXNlw7FvIGRlIHVuIEJsb2cgZGUgbm90aWNhcywgcmVhbGl6YWRvIGNvbiBKUywgQ1NTLCBIVE1MXCIsXHJcbiAgICBpbWFnZTogXCJ0ZWNobmV3cy5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9tb2Rlc3QtZXVsZXItMDZjNmEzLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ290aXphZG9yIGRlIHNlZ3Vyb3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFwbGljYWNpw7NuIHdlYiBxdWUgY290aXphIGVsIHBhZ28gZGUgdW4gc2VndXJvLCByZWFjbGl6YWRhIGNvbiBjcmVhdGUtcmVhY3QtYXBwIFwiLFxyXG4gICAgaW1hZ2U6IFwiY290aXphZG9yLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3JlYWN0LXF1b3RlLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUGxhdHppIEZvb2RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNpdGlvIHdlYiBkZSBjb21pZGEgcmFwaWRhLCByZWFsaXphZGEgY29uIFRhaWx3aW5kXCIsXHJcbiAgICBpbWFnZTogXCJmb29kLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2Zvb2Qtd2l0aC10YWlsd2luZC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFwcCBDbGltYSBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcCBkZSBjbGltYSwgdXNhbmRvIGNvbiByZWFjdCBcIixcclxuICAgIGltYWdlOiBcImNsaW1hLnBuZ1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3dlYS10aGVyLXJlYWN0LWFwcC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNxdWlkR2FtZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTWluaWp1ZWdvIHJlYWxpemFkbyBjb24gbGEgbGlicmVyaWEgVGhyZWUuanNcIixcclxuICAgIGltYWdlOiBcInNxdWlkR2FtZS5wbmdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9zcXVpZGdhbWUtYXBwLm5ldGxpZnkuYXBwL1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtw6ZcIixcclxuICAgIGltZ1VSTDpcclxuICAgICAgXCJodHRwczovL3NpZ2RlbGV0cmFzLmNvbS9pbWFnZXMvYmxvZy8yMDIwMDRfcmVhY3RfbGVhZmxldC9yZWFjdC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFuZ3VsYXJcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtw6ZcIixcclxuICAgIGltZ1VSTDpcclxuICAgICAgXCJodHRwczovL3d3dy5kaWdpdGFsNTUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL1JlbmRlcml6YWRvX2VuX3NlcnZpZG9yX2Nvbl9hbmd1bGFyX3VuaXZlcnNhbC5wbmc/eDcyMzMwXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb2plY3RzIiwiaW1hZ2UiLCJsaW5rIiwicG9zdHMiLCJjb250ZW50IiwiaW1nVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==