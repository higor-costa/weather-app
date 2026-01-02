import initDropdownButtons from './modules/dropdowns.js';
import initSelectUnitsMeasures from './modules/selectUnitsMeasures.js';
import initLocalCoords from './modules/localCoords.js';
import initSearchCityForecast from './modules/searchCityForecast.js';
import initLocalStorage from './modules/localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
  initDropdownButtons();
  initSelectUnitsMeasures();
  initLocalCoords();
  initSearchCityForecast();
  initLocalStorage();
});
