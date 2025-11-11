import initDropdownButtons from './modules/dropdowns.js';
import initSelectUnitsMeasures from './modules/selectUnitsMeasures.js';
import initHourForecast from './modules/hoursForecast.js';
import initLocalCoords from './modules/localCoords.js';
import initLocalForecast from './modules/localForecast.js';

document.addEventListener('DOMContentLoaded', () => {
  initDropdownButtons();
  initSelectUnitsMeasures();
  initHourForecast();
  initLocalCoords();
  initLocalForecast();
});
