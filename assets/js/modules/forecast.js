import initCurrentForecast from "./currentForecast.js";
import initDailyForecast from "./dailyForecast.js";
import initHourlyForecast from "./hourlyForecast.js";

export default async function initForecast(latitude, longitude) {
  try {
    const params = {
      latitude,
      longitude,
      daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min'],
      hourly: ['temperature_2m', 'weather_code'],
      current: [
        'weather_code',
        'temperature_2m',
        'is_day',
        'apparent_temperature',
        'precipitation',
        'relative_humidity_2m',
        'wind_speed_10m',
      ],
      wind_speed_unit: 'kmh',
      temperature_unit: 'celsius',
      precipitation_unit: 'mm',
    };
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${
      longitude
    }&daily=${params.daily.join(',')}&hourly=${
      params.hourly
    }&current=${params.current}`
    
    const response = await fetch(url);
    const forecastData = await response.json();
    const {current, current_units} = forecastData;
    initCurrentForecast(current, current_units, latitude, longitude);
    initDailyForecast(forecastData);
    initHourlyForecast(forecastData);

  } catch (error) {
    console.log(error);
  }
}
