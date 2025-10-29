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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownButtons)\n/* harmony export */ });\nfunction initDropdownButtons() {\r\n  const buttonToggleUnits = document.querySelector('#toggleUnits');\r\n  const buttonToggleDays = document.querySelector('#toggleDays');\r\n  const buttons = [buttonToggleUnits, buttonToggleDays].filter(Boolean);\r\n\r\n  const openDropdown = ({ currentTarget }) => {\r\n    const dropdown = currentTarget.nextElementSibling;\r\n    const isActive = dropdown?.classList.toggle('active');\r\n\r\n    // Mantém apenas um dropdown aberto por vez\r\n    document.querySelectorAll('.dropdown.active').forEach((element) => {\r\n      if (element !== dropdown) {\r\n        element.classList.remove('active');\r\n      }\r\n    });\r\n\r\n    // Fecha o dropdown ao clicar fora dele\r\n    if (isActive) {\r\n      const handleClickOutside = (event) => {\r\n        const clickedInsideButton = currentTarget.contains(event.target);\r\n        if (!dropdown.contains(event.target) && !clickedInsideButton) {\r\n          dropdown.classList.remove('active');\r\n          document.removeEventListener('click', handleClickOutside);\r\n        }\r\n      };\r\n      document.addEventListener('click', handleClickOutside);\r\n    }\r\n  };\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener('click', openDropdown);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/dropdowns.js?\n}");

/***/ }),

/***/ "./assets/js/modules/selectUnitsMeasures.js":
/*!**************************************************!*\
  !*** ./assets/js/modules/selectUnitsMeasures.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSelectUnitsMeasures)\n/* harmony export */ });\nfunction initSelectUnitsMeasures() {\n  const metricButtons = document.querySelectorAll('fieldset input');\n  const iconCheckmarks = document.createElement('img');\n  iconCheckmarks.src = './assets/images/icon-checkmark.svg';\n\n  const selectUnitMeasure = ({ currentTarget }) => {\n    const metricSelected = currentTarget.value;\n    const btnMeasure = currentTarget.parentNode;\n    const cloneIconCheckmarks = iconCheckmarks.cloneNode(true);\n\n    metricButtons.forEach((metric) => {\n      const containerMetric = metric.parentNode;\n      if (metric.name === currentTarget.name && metric !== metricSelected) {\n        containerMetric.querySelector('img')?.remove();\n        containerMetric.classList.remove('options__unit-active');\n      }\n    });\n\n    btnMeasure.appendChild(cloneIconCheckmarks);\n    btnMeasure.classList.add('options__unit-active');\n  };\n\n  for (const button of metricButtons) {\n    button.addEventListener('change', selectUnitMeasure);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/selectUnitsMeasures.js?\n}");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdowns.js */ \"./assets/js/modules/dropdowns.js\");\n/* harmony import */ var _modules_selectUnitsMeasures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/selectUnitsMeasures.js */ \"./assets/js/modules/selectUnitsMeasures.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_selectUnitsMeasures_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./assets/js/script.js?\n}");

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