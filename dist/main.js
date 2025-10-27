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

/***/ "./assets/js/modules/dropdowns.js":
/*!****************************************!*\
  !*** ./assets/js/modules/dropdowns.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownButtons)\n/* harmony export */ });\nfunction initDropdownButtons() {\n  const buttonToggleUnits = document.querySelector('#toggleUnits');\n  const buttonToggleDays = document.querySelector('#toggleDays');\n  const buttons = [buttonToggleUnits, buttonToggleDays].filter(Boolean);\n\n  const openDropdown = ({ currentTarget }) => {\n    const dropdown = currentTarget.nextElementSibling;\n    const isActive = dropdown?.classList.toggle('active');\n\n    // Mantém apenas um dropdown aberto por vez\n    document.querySelectorAll('.dropdown.active').forEach((element) => {\n      if (element !== dropdown) {\n        element.classList.remove('active');\n      }\n    });\n\n    // Fecha o dropdown ao clicar fora dele\n    if (isActive) {\n      const handleClickOutside = (event) => {\n        const clickedInsideButton = currentTarget.contains(event.target);\n        if (!dropdown.contains(event.target) && !clickedInsideButton) {\n          dropdown.classList.remove('active');\n          document.removeEventListener('click', handleClickOutside);\n        }\n      };\n      document.addEventListener('click', handleClickOutside);\n    }\n  };\n\n  buttons.forEach((button) => {\n    button.addEventListener('click', openDropdown);\n  });\n}\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/dropdowns.js?\n}");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdowns.js */ \"./assets/js/modules/dropdowns.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://weather-app/./assets/js/script.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;