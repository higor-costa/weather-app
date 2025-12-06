import initForecast from './forecast.js';
import initLocalStorage from './localStorage.js';
import { unitsMetrics } from './selectUnitsMeasures.js';

export let latitudeGlobal;
export let longitudeGlobal;

export default function initLocalCoords() {
  const storage = initLocalStorage();
  const coords = storage.get();

  const checkLocationPermission = async () => {
    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      return result.state; // granted | denied | prompt
    } catch (error) {
      return null;
    }
  };

  checkLocationPermission().then((state) => {
    if (coords && state === 'denied') {
      [latitudeGlobal, longitudeGlobal] = coords;
      initForecast(unitsMetrics);
      return;
    }
    if (state === 'granted') {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitudeGlobal = position.coords.latitude;
          longitudeGlobal = position.coords.longitude;

          storage.set([latitudeGlobal, longitudeGlobal]);
          initForecast(unitsMetrics);
        },
        (error) => {
          console.log('Erro ao obter a localização: ', error.message);

          latitudeGlobal = -15.793889;
          longitudeGlobal = -47.882778;

          initForecast(unitsMetrics);
        }
      );
      return;
    }

    latitudeGlobal = -15.793889;
    longitudeGlobal = -47.882778;
    initForecast(unitsMetrics);
  });
}
