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

/***/ "./assets/js/modules/currentForecast.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/currentForecast.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCurrentForecast)\n/* harmony export */ });\nasync function initCurrentForecast(current, currentUnits, latitude, longitude) {\n  const temperature = document.querySelector('#temperature');\n  const apparentTemperature = document.querySelector('#apparent_temperature');\n  const relative_humidity = document.querySelector('#relative_humidity');\n  const windSpeed = document.querySelector('#wind_speed');\n  const precipitation = document.querySelector('#precipitation');\n  const date = document.querySelector('#date');\n  const locality = document.querySelector('#locality');\n\n  const {\n    temperature_2m,\n    apparent_temperature,\n    relative_humidity_2m,\n    wind_speed_10m,\n    precipitation: precip,\n  } = current;\n\n  const {\n    relative_humidity_2m: rhUnits,\n    wind_speed_10m: windUnit,\n    precipitation: precipUnit,\n  } = currentUnits;\n\n  temperature.textContent = `${Math.round(temperature_2m)}º`;\n  apparentTemperature.textContent = `${Math.round(apparent_temperature)}º`;\n  relative_humidity.textContent = `${relative_humidity_2m}${rhUnits}`;\n  windSpeed.textContent = `${Math.round(wind_speed_10m)} ${windUnit}`;\n  precipitation.textContent = `${Math.round(precip)} ${precipUnit}`;\n\n  const formattedDate = new Intl.DateTimeFormat('en', {\n    weekday: 'short',\n    day: 'numeric',\n    month: 'short',\n    year: 'numeric',\n  }).format(new Date());\n\n  date.textContent = formattedDate;\n\n  try {\n    const url = `https://api-bdc.io/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;\n    const response = await fetch(url);\n    const data = await response.json();\n\n    const city = data.locality || data.city || 'Unknown location';\n    const country = data.countryName;\n\n    locality.textContent = `${city}, ${country}`;\n  } catch (error) {\n    console.error('Unknown location: ', error);\n    locality.textContent = 'Unknown location';\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/currentForecast.js?\n}");

/***/ }),

/***/ "./assets/js/modules/dropdowns.js":
/*!****************************************!*\
  !*** ./assets/js/modules/dropdowns.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownButtons)\n/* harmony export */ });\nfunction initDropdownButtons() {\r\n  const buttonToggleUnits = document.querySelector('#toggleUnits');\r\n  const buttonToggleDays = document.querySelector('#toggleDays');\r\n  const buttons = [buttonToggleUnits, buttonToggleDays].filter(Boolean);\r\n\r\n  const openDropdown = ({ currentTarget }) => {\r\n    const dropdown = currentTarget.nextElementSibling;\r\n    const isActive = dropdown?.classList.toggle('active');\r\n\r\n    // Mantém apenas um dropdown aberto por vez\r\n    document.querySelectorAll('.dropdown.active').forEach((element) => {\r\n      if (element !== dropdown) {\r\n        element.classList.remove('active');\r\n      }\r\n    });\r\n\r\n    // Fecha o dropdown ao clicar fora dele\r\n    if (isActive) {\r\n      const handleClickOutside = (event) => {\r\n        const clickedInsideButton = currentTarget.contains(event.target);\r\n        if (!dropdown.contains(event.target) && !clickedInsideButton) {\r\n          dropdown.classList.remove('active');\r\n          document.removeEventListener('click', handleClickOutside);\r\n        }\r\n      };\r\n      document.addEventListener('click', handleClickOutside);\r\n    }\r\n  };\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener('click', openDropdown);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/dropdowns.js?\n}");

/***/ }),

/***/ "./assets/js/modules/forecast.js":
/*!***************************************!*\
  !*** ./assets/js/modules/forecast.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initForecast)\n/* harmony export */ });\n/* harmony import */ var _currentForecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentForecast.js */ \"./assets/js/modules/currentForecast.js\");\n\n\nasync function initForecast(latitude, longitude) {\n  try {\n    const params = {\n      latitude,\n      longitude,\n      daily: ['temperature_2m_max', 'temperature_2m_min'],\n      hourly: 'temperature_2m',\n      current: [\n        'temperature_2m',\n        'is_day',\n        'apparent_temperature',\n        'precipitation',\n        'relative_humidity_2m',\n        'wind_speed_10m',\n      ],\n      wind_speed_unit: 'kmh',\n      temperature_unit: 'celsius',\n      precipitation_unit: 'mm',\n    };\n    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${\n      longitude\n    }&daily=${params.daily.join(',')}&hourly=${\n      params.hourly\n    }&current=${params.current}`\n    \n    const response = await fetch(url);\n    const forecastData = await response.json();\n    const {current, current_units} = forecastData;\n    (0,_currentForecast_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(current, current_units, latitude, longitude);\n\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/forecast.js?\n}");

/***/ }),

/***/ "./assets/js/modules/hoursForecast.js":
/*!********************************************!*\
  !*** ./assets/js/modules/hoursForecast.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHourForecast)\n/* harmony export */ });\nfunction initHourForecast() {\r\n  const buttonsDay = document.querySelectorAll('.dropdown li button');\r\n  const buttonDaySelected = document.querySelector('#toggleDays span');\r\n\r\n  const selectDayHourForecast = ({ currentTarget }) => {\r\n    const daySelected = currentTarget;\r\n    buttonDaySelected.textContent = daySelected.dataset.day || daySelected.textContent; // Monday, Tursday, Wednesday, Thursday, Friday, Saturday ou Sunday\r\n\r\n    buttonsDay.forEach((button) => {\r\n      button.classList.remove('active');\r\n    })\r\n\r\n    daySelected.classList.add('active');\r\n  };\r\n\r\n  buttonsDay.forEach((button) => {\r\n    button.addEventListener('click', selectDayHourForecast);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/hoursForecast.js?\n}");

/***/ }),

/***/ "./assets/js/modules/localCoords.js":
/*!******************************************!*\
  !*** ./assets/js/modules/localCoords.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initLocalCoords)\n/* harmony export */ });\nfunction initLocalCoords() {\n  return new Promise((resolve, reject) => {\n    if (!('geolocation' in navigator)) {\n      reject('Geolocalização não é suportada neste navegador.');\n    }\n    navigator.geolocation.getCurrentPosition(\n      (position) => {\n        resolve({\n          latitude: position.coords.latitude,\n          longitude: position.coords.longitude,\n        });\n      },\n      (error) => reject('Erro ao obter a localização: ', error.message)\n    );\n  });\n}\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/localCoords.js?\n}");

/***/ }),

/***/ "./assets/js/modules/localForecast.js":
/*!********************************************!*\
  !*** ./assets/js/modules/localForecast.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initLocalForecast)\n/* harmony export */ });\n/* harmony import */ var _localCoords_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localCoords.js */ \"./assets/js/modules/localCoords.js\");\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast.js */ \"./assets/js/modules/forecast.js\");\n\n\n\nasync function initLocalForecast() {\n  try {\n    const { latitude, longitude } = await (0,_localCoords_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_forecast_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(latitude, longitude);\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/localForecast.js?\n}");

/***/ }),

/***/ "./assets/js/modules/selectUnitsMeasures.js":
/*!**************************************************!*\
  !*** ./assets/js/modules/selectUnitsMeasures.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSelectUnitsMeasures)\n/* harmony export */ });\nfunction initSelectUnitsMeasures() {\r\n  const metricButtons = document.querySelectorAll('fieldset input');\r\n  const iconCheckmarks = document.createElement('img');\r\n  iconCheckmarks.src = './assets/images/icon-checkmark.svg';\r\n  const btnSwitchMetrics = document.querySelector('.units-container__button');\r\n\r\n  const selectUnitMeasure = ({ currentTarget }) => {\r\n    const metricSelected = currentTarget.value;\r\n    const btnMeasure = currentTarget.parentNode;\r\n    const cloneIconCheckmarks = iconCheckmarks.cloneNode(true);\r\n\r\n    metricButtons.forEach((metric) => {\r\n      const containerMetric = metric.parentNode;\r\n      if (metric.name === currentTarget.name && metric !== metricSelected) {\r\n        containerMetric.querySelector('img')?.remove();\r\n        containerMetric.classList.remove('options__unit-active');\r\n      }\r\n    });\r\n\r\n    btnMeasure.appendChild(cloneIconCheckmarks);\r\n    btnMeasure.classList.add('options__unit-active');\r\n  };\r\n\r\n  const toggleAllUnitsMeasures = () => {\r\n    const isImperial = btnSwitchMetrics.dataset.mode === 'imperial';\r\n\r\n    btnSwitchMetrics.dataset.mode = isImperial ? 'metric' : 'imperial';\r\n    btnSwitchMetrics.textContent = isImperial ? 'Switch to Imperial' : 'Switch to Metric';\r\n\r\n    metricButtons.forEach((button) => {\r\n      const unit = button.dataset.unit; // metric | imperial\r\n\r\n      if (unit === btnSwitchMetrics.dataset.mode) {\r\n        button.checked = true;\r\n        selectUnitMeasure({ currentTarget: button});\r\n      }\r\n    })\r\n  };\r\n\r\n  for (const button of metricButtons) {\r\n    button.addEventListener('change', selectUnitMeasure);\r\n  }\r\n\r\n  btnSwitchMetrics.addEventListener('click', toggleAllUnitsMeasures);\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./assets/js/modules/selectUnitsMeasures.js?\n}");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdowns.js */ \"./assets/js/modules/dropdowns.js\");\n/* harmony import */ var _modules_selectUnitsMeasures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/selectUnitsMeasures.js */ \"./assets/js/modules/selectUnitsMeasures.js\");\n/* harmony import */ var _modules_hoursForecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hoursForecast.js */ \"./assets/js/modules/hoursForecast.js\");\n/* harmony import */ var _modules_localCoords_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localCoords.js */ \"./assets/js/modules/localCoords.js\");\n/* harmony import */ var _modules_localForecast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/localForecast.js */ \"./assets/js/modules/localForecast.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_selectUnitsMeasures_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_hoursForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_localCoords_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_modules_localForecast_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./assets/js/script.js?\n}");

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