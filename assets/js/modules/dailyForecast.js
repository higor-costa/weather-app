export const iconsCode = new Map([
  [0, 'sunny'],

  [1, 'partly-cloudy'],
  [2, 'partly-cloudy'],
  [3, 'partly-cloudy'],

  [45, 'fog'],
  [48, 'fog'],

  [51, 'drizzle'],
  [53, 'drizzle'],
  [55, 'drizzle'],
  [56, 'drizzle'],
  [57, 'drizzle'],

  [61, 'rain'],
  [63, 'rain'],
  [65, 'rain'],
  [66, 'rain'],
  [67, 'rain'],

  [71, 'snow'],
  [73, 'snow'],
  [75, 'snow'],
  [77, 'snow'],

  [80, 'rain'],
  [81, 'rain'],
  [82, 'rain'],
  [85, 'rain'],
  [86, 'rain'],

  [95, 'storm'],
  [96, 'storm'],
  [99, 'storm'],
]);

export default function initDailyForecast({ daily }) {
  const forecastIcons = document.querySelectorAll('.forecast__icon');
  const temperaturesMax = document.querySelectorAll(
    '.forecast__temperature-max'
  );
  const temperaturesMin = document.querySelectorAll(
    '.forecast__temperature-min'
  );
  const { temperature_2m_max: dataTempMax, temperature_2m_min: dataTempMin } =
    daily;

  const iconsCodeApi = daily.weather_code;
  const arrayIcons = iconsCodeApi.map((code) => {
    return iconsCode.get(code) ?? 'unknown';
  });

  temperaturesMax.forEach((temperature, index) => {
    temperature.textContent = `${Math.round(dataTempMax[index])}º`;
  });

  temperaturesMin.forEach((temperature, index) => {
    temperature.textContent = `${Math.round(dataTempMin[index])}º`;
  });

  forecastIcons.forEach((icon, index) => {
    icon.src = `./assets/images/icon-${arrayIcons[index]}.webp`;
  });
}
