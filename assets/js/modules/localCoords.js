export default function initLocalCoords() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject('Geolocalização não é suportada neste navegador.');
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => reject('Erro ao obter a localização: ', error.message)
    );
  });
}
