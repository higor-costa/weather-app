import { iconsCode } from './dailyForecast.js';
export default function initHourlyForecast({ hourly }) {
  const hours = document.querySelectorAll('.hours-content__temperature');
  const iconsCodeHours = document.querySelectorAll('.hours-content__icon');
  const arrayTemperature = hourly.temperature_2m.slice(3, 11);
  const arrayIconsCode = hourly.weather_code.slice(3, 11);

  hours.forEach((hour, index) => {
    const temperature = Math.round(arrayTemperature[index]);
    hour.textContent =
      temperature !== undefined ? `${temperature}º` : 'Unknown';
  });

  const iconsDescription = arrayIconsCode.map(
    (code) => iconsCode.get(code) || 'Unknown'
  );
  iconsCodeHours.forEach((icon, index) => {
    const name = iconsDescription[index] || 'Unknown';
    icon.src = `./assets/images/icon-${name}.webp`;
  });
}
