/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\n(0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://5-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMeteo)\n/* harmony export */ });\nasync function getMeteo() {\r\n  const API_KEY = \"33a1bf33e27c4bdf66bc75107bc049cd\";\r\n  const endpoint = \"https://api.openweathermap.org/data/2.5/weather\";\r\n\r\n  // FIXME: In teoria questo deve poi essere preso dinamicamente da quello che scriviamo noi\r\n  const city = \"london\";\r\n\r\n  const apiUrl = `${endpoint}?q=${city}&units=metric&appid=${API_KEY}`;\r\n\r\n  const data = await fetch(apiUrl, { mode: \"cors\" }).then((res) => res.json());\r\n\r\n  const ourMeteo = {\r\n    name: data.name,\r\n    desc: data.weather[0].main,\r\n    alt: data.weather[0].description,\r\n    icon: data.weather[0].icon,\r\n    temp: Math.round(data.main.temp),\r\n    farhen: toFahren(data.main.temp),\r\n    feels: Math.round(data.main.feels_like),\r\n    feelsFarhen: toFahren(data.main.feels_like),\r\n    humidity: data.main.humidity,\r\n    wind: Math.round(data.wind.speed),\r\n    min: Math.round(data.main.temp_min),\r\n    max: Math.round(data.main.temp_max),\r\n  };\r\n\r\n  console.log(data);\r\n  for (let data in ourMeteo) {\r\n    console.log(ourMeteo[data]);\r\n  }\r\n\r\n  function toFahren(celsius) {\r\n    return Math.round((celsius * 9) / 5 + 32);\r\n  }\r\n}\r\n\r\n/*\r\nIn futuro, per cambiare l'icona, il nome e tutto quello che accade a schermo\r\nbasta chiamare la funzione che creo in un altro modulo qui\r\ne passargli di conseguenza i dati che ottengo dall'api sotto forma di obj\r\n\r\nErgo, la funzione nel modulo avrà principalmente parameters di riferimento\r\nper far accadere cose\r\n\r\n*/\r\n\n\n//# sourceURL=webpack://5-weather-app/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;