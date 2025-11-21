import initForecast from "./forecast.js";
import { unitsMetrics } from "./selectUnitsMeasures.js";

export let latitudeGlobal;
export let longitudeGlobal;

export default function initLocalCoords() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject('Geolocalização não é suportada neste navegador.');
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitudeGlobal = position.coords.latitude;
        longitudeGlobal = position.coords.longitude
        resolve({
          latitude: latitudeGlobal,
          longitude: longitudeGlobal,
        });
        initForecast(unitsMetrics);
      },
      (error) => reject('Erro ao obter a localização: ', error.message)
    );
  });
}
