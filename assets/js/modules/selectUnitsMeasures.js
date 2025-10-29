export default function initSelectUnitsMeasures() {
  const metricButtons = document.querySelectorAll('fieldset input');
  const iconCheckmarks = document.createElement('img');
  iconCheckmarks.src = './assets/images/icon-checkmark.svg';

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

  for (const button of metricButtons) {
    button.addEventListener('change', selectUnitMeasure);
  }
}
