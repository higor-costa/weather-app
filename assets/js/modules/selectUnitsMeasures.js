export default function initSelectUnitsMeasures() {
  const metricButtons = document.querySelectorAll('fieldset input');
  const iconCheckmarks = document.createElement('img');
  iconCheckmarks.src = './assets/images/icon-checkmark.svg';
  const btnSwitchMetrics = document.querySelector('.units-container__button');

  const selectUnitMeasure = ({ currentTarget }) => {
    const metricSelected = currentTarget.value;
    const btnMeasure = currentTarget.parentNode;
    const cloneIconCheckmarks = iconCheckmarks.cloneNode(true);

    metricButtons.forEach((metric) => {
      const containerMetric = metric.parentNode;
      if (metric.name === currentTarget.name && metric !== metricSelected) {
        containerMetric.querySelector('img')?.remove();
        containerMetric.classList.remove('options__unit-active');
      }
    });

    btnMeasure.appendChild(cloneIconCheckmarks);
    btnMeasure.classList.add('options__unit-active');
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
