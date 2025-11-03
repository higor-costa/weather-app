import initDropdownButtons from './modules/dropdowns.js';
import initSelectUnitsMeasures from './modules/selectUnitsMeasures.js';
import initHourForecast from './modules/hoursForecast.js';

document.addEventListener('DOMContentLoaded', () => {
  initDropdownButtons();
  initSelectUnitsMeasures();
  initHourForecast();
});
