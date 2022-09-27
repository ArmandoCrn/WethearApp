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

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUi\": () => (/* binding */ setUi),\n/* harmony export */   \"takeCity\": () => (/* binding */ takeCity),\n/* harmony export */   \"takeObj\": () => (/* binding */ takeObj)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\n// this is the Obj when the meteo fetch data\r\nlet currentMeteo;\r\n\r\n// Prevent Default form\r\nconst form = document.querySelector(\".search-group\");\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  form.reset();\r\n});\r\n\r\n// Search Button for the meteo\r\nconst search = document.querySelector(\".search-btn\");\r\nsearch.addEventListener(\"click\", _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\nconst city = document.querySelector(\"#card .city\");\r\nconst deg = document.querySelector(\"#card .deg\");\r\nconst img = document.querySelector(\"#card img\");\r\nconst feels = document.querySelector(\"#card .feels\");\r\nconst humidity = document.querySelector(\"#card .humidity\");\r\nconst wind = document.querySelector(\"#card .wind\");\r\n\r\n// Set UI Function\r\nfunction setUi(meteo) {\r\n  city.innerText = meteo.name;\r\n  deg.innerText = `${meteo.temp} °C`;\r\n  img.src = `./img/${meteo.icon}.png`;\r\n  img.alt = `${meteo.alt}`;\r\n  feels.innerText = `Feels Like: ${meteo.feels} °C`;\r\n  humidity.innerText = `Humidity: ${meteo.humidity}%`;\r\n  wind.innerText = `Wind: ${meteo.wind} km/h`;\r\n}\r\n\r\n// Take the name of the city\r\nfunction takeCity() {\r\n  const input = document.querySelector(\"#search-input\");\r\n\r\n  if (input.value !== \"\") return input.value;\r\n\r\n  return null;\r\n}\r\n\r\n//Take the result of the meteo\r\nfunction takeObj(meteoObj) {\r\n  currentMeteo = meteoObj;\r\n}\r\n\r\n// Switch Celsius and Farhenight and UI -> C/F\r\nconst cToFarh = document.querySelector(\".switch-deg\");\r\ncToFarh.addEventListener(\"click\", () => changeDeg(currentMeteo));\r\n\r\nfunction changeDeg(data) {\r\n  const currentDeg = changeUI();\r\n  if (currentDeg === \"F\") {\r\n    deg.innerText = `${data.farhen} °F`;\r\n    feels.innerText = `Feels Like: ${data.feelsFarhen} °F`;\r\n  }\r\n\r\n  if (currentDeg === \"C\") {\r\n    deg.innerText = `${data.temp} °C`;\r\n    feels.innerText = `Feels Like: ${data.feels} °C`;\r\n  }\r\n}\r\n\r\nfunction changeUI() {\r\n  const c = document.querySelector(\".switch-deg span:nth-child(1)\");\r\n  const f = document.querySelector(\".switch-deg span:nth-child(2)\");\r\n\r\n  //Active class from C to F\r\n  if (c.className.includes(\"is-active\")) {\r\n    c.classList.remove(\"is-active\");\r\n    f.classList.add(\"is-active\");\r\n    return \"F\";\r\n  } else {\r\n  }\r\n\r\n  //Active class from F to C\r\n  if (f.className.includes(\"is-active\")) {\r\n    f.classList.remove(\"is-active\");\r\n    c.classList.add(\"is-active\");\r\n    return \"C\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://5-weather-app/./src/ui.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMeteo)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\nconst API_KEY = \"33a1bf33e27c4bdf66bc75107bc049cd\";\r\nconst endpoint = \"https://api.openweathermap.org/data/2.5/weather\";\r\n\r\nasync function getMeteo() {\r\n  const city = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.takeCity)() ?? \"london\";\r\n  const apiUrl = `${endpoint}?q=${city}&units=metric&appid=${API_KEY}`;\r\n  const data = await getData(apiUrl);\r\n\r\n  // Catch error\r\n  if (data === null) {\r\n    alert(`Error: City ${city} not found`);\r\n    return;\r\n  }\r\n\r\n  const ourMeteo = {\r\n    name: data.name,\r\n    temp: Math.round(data.main.temp),\r\n    alt: data.weather[0].description,\r\n    icon: data.weather[0].icon,\r\n    farhen: toFahren(data.main.temp),\r\n    feels: Math.round(data.main.feels_like),\r\n    feelsFarhen: toFahren(data.main.feels_like),\r\n    humidity: data.main.humidity,\r\n    wind: Math.round(data.wind.speed),\r\n  };\r\n\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.setUi)(ourMeteo);\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.takeObj)(ourMeteo);\r\n}\r\n\r\nfunction toFahren(celsius) {\r\n  return Math.round((celsius * 9) / 5 + 32);\r\n}\r\n\r\nasync function getData(url) {\r\n  const response = await fetch(url, { mode: \"cors\" });\r\n\r\n  if (response.status === 200) return response.json();\r\n\r\n  return null;\r\n}\r\n\n\n//# sourceURL=webpack://5-weather-app/./src/weather.js?");

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