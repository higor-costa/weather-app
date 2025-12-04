import initForecast from './forecast.js';
import { unitsMetrics } from './selectUnitsMeasures.js';

export default function initSearchCityForecast() {
  const boxSearch = document.querySelector('.form__field-text');
  const searchButton = document.querySelector('.form__button');
  const conteinerOptions = document.querySelector('.form__options');

  const clearList = () => {
    conteinerOptions.innerHTML = '';
  };

  const search = ({ target }) => {
    const { latitude, longitude } = target.dataset;
    boxSearch.value = target.textContent;
    conteinerOptions.style.display = 'none';

    initForecast(unitsMetrics, Number(latitude), Number(longitude));
  };

  const createList = (cities = []) => {
    clearList();

    if (!cities.length) {
      conteinerOptions.style.display = 'none';
      return;
    }

    const fragment = document.createDocumentFragment();

    cities.forEach((city) => {
      const li = document.createElement('li');
      li.classList.add('form__options-city');
      li.textContent = `${city.name}, ${city.admin1} - ${city.country}`;
      li.dataset.latitude = city.latitude;
      li.dataset.longitude = city.longitude;
      li.dataset.nameCity = city.name;

      li.addEventListener('click', search);

      fragment.appendChild(li);
    });

    conteinerOptions.appendChild(fragment);
    conteinerOptions.style.display = 'block';
  };

  const fetchSearch = async (cityName) => {
    if (!cityName) throw new Error('City name is required');

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=4&language=en&format=json`;

    const response = await fetch(url);
    const data = await response.json();

    createList(data.results);
  };

  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetchSearch(boxSearch.value);
  });

  boxSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      fetchSearch(boxSearch.value);
    }
  });
}
