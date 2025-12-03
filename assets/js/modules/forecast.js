import initCurrentForecast from "./currentForecast.js";
import initDailyForecast from "./dailyForecast.js";
import initHourlyForecast from "./hourlyForecast.js";
import { latitudeGlobal, longitudeGlobal } from './localCoords.js';

export default async function initForecast(unitsMetrics) {
  try {
    const params = {
      latitude: latitudeGlobal,
      longitude: longitudeGlobal,
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
      wind_speed_unit: unitsMetrics.windSpeed,
      temperature_unit: unitsMetrics.temperature,
      precipitation_unit: unitsMetrics.precipitation,
    };

    if (!params.latitude || !params.longitude) throw new Error('Coordinates invalid');

    const urlParams = new URLSearchParams({
      latitude: params.latitude,
      longitude: params.longitude,
      daily: params.daily.join(','),
      hourly: params.hourly.join(','),
      current: params.current.join(','),
      wind_speed_unit: params.wind_speed_unit,
      temperature_unit: params.temperature_unit,
      precipitation_unit: params.precipitation_unit,
    });
    const url = `https://api.open-meteo.com/v1/forecast?${urlParams}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch forecast data');

    const forecastData = await response.json();
    initCurrentForecast(forecastData, params);
    initDailyForecast(forecastData);
    initHourlyForecast(forecastData);

  } catch (error) {
    console.log(error);
  }
}
