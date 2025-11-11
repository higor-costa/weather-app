import initLocalCoords from './localCoords.js';
import initForecast from './forecast.js';

export default async function initLocalForecast() {
  try {
    const { latitude, longitude } = await initLocalCoords();
    initForecast(latitude, longitude);
  } catch (error) {
    console.log(error);
  }
}
