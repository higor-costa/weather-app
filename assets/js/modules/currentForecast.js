export default async function initCurrentForecast(current, currentUnits, latitude, longitude) {
  const temperature = document.querySelector('#temperature');
  const apparentTemperature = document.querySelector('#apparent_temperature');
  const relative_humidity = document.querySelector('#relative_humidity');
  const windSpeed = document.querySelector('#wind_speed');
  const precipitation = document.querySelector('#precipitation');
  const date = document.querySelector('#date');
  const locality = document.querySelector('#locality');

  const {
    temperature_2m,
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation: precip,
  } = current;

  const {
    relative_humidity_2m: rhUnits,
    wind_speed_10m: windUnit,
    precipitation: precipUnit,
  } = currentUnits;

  temperature.textContent = `${Math.round(temperature_2m)}º`;
  apparentTemperature.textContent = `${Math.round(apparent_temperature)}º`;
  relative_humidity.textContent = `${relative_humidity_2m}${rhUnits}`;
  windSpeed.textContent = `${Math.round(wind_speed_10m)} ${windUnit}`;
  precipitation.textContent = `${Math.round(precip)} ${precipUnit}`;

  const formattedDate = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date());

  date.textContent = formattedDate;

  try {
    const url = `https://api-bdc.io/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    const response = await fetch(url);
    const data = await response.json();

    const city = data.locality || data.city || 'Unknown location';
    const country = data.countryName;

    locality.textContent = `${city}, ${country}`;
  } catch (error) {
    console.error('Unknown location: ', error);
    locality.textContent = 'Unknown location';
  }
}
