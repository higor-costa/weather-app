import initForecast from "./forecast.js";
export const unitsMetrics = {
  windSpeed: 'kmh',
  temperature: 'celsius',
  precipitation: 'mm',
};

export default function initSelectUnitsMeasures() {
  const metricButtons = document.querySelectorAll('fieldset input');
  const iconCheckmarks = document.createElement('img');
  iconCheckmarks.src = './assets/images/icon-checkmark.svg';
  const btnSwitchMetrics = document.querySelector('.units-container__button');

  const unitsMap = {
    metric: {
      kmh: { windSpeed: 'kmh' },
      celsius: { temperature: 'celsius' },
      mm: { precipitation: 'mm' },
    },
    imperial: {
      mph: { windSpeed: 'mph' },
      fahrenheit: { temperature: 'fahrenheit' },
      inches: { precipitation: 'inch' },
    }
  }

  const selectUnitMeasure = ({ currentTarget }) => {
    const unitsType = currentTarget.dataset.unit; 
    const metricSelected = currentTarget.value;
    const btnMeasure = currentTarget.parentNode;
    const cloneIconCheckmarks = iconCheckmarks.cloneNode(true);

    const mapping = unitsMap[unitsType][metricSelected]
    Object.assign(unitsMetrics, mapping);

    metricButtons.forEach((metric) => {
      const containerMetric = metric.parentNode;
      if (metric.name === currentTarget.name && metric !== metricSelected) {
        containerMetric.querySelector('img')?.remove();
        containerMetric.classList.remove('options__unit-active');
      }
    });

    btnMeasure.appendChild(cloneIconCheckmarks);
    btnMeasure.classList.add('options__unit-active');
    initForecast(unitsMetrics);
  };

  const toggleAllUnitsMeasures = () => {
    const isImperial = btnSwitchMetrics.dataset.mode === 'imperial';

    btnSwitchMetrics.dataset.mode = isImperial ? 'metric' : 'imperial';
    btnSwitchMetrics.textContent = isImperial ? 'Switch to Imperial' : 'Switch to Metric';

    metricButtons.forEach((button) => {
      const unit = button.dataset.unit; // metric | imperial

      if (unit === btnSwitchMetrics.dataset.mode) {
        button.checked = true;
        selectUnitMeasure({ currentTarget: button});
      }
    })
  };

  for (const button of metricButtons) {
    button.addEventListener('change', selectUnitMeasure);
  }

  btnSwitchMetrics.addEventListener('click', toggleAllUnitsMeasures);
}
