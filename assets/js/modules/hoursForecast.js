import { iconsCode } from './dailyForecast.js';

export default function initHourlyDropdown(forecastData) {
  const buttons = document.querySelectorAll(
    '.hourly-forecast__dropdown-option'
  );
  const cards = document.querySelectorAll('.hours-content');
  const btnDropdown = document.querySelector('#toggleDays span');

  // Extrair listas da API
  const times = forecastData.hourly.time;
  const temperatures = forecastData.hourly.temperature_2m;
  const codes = forecastData.hourly.weather_code;

  // Função auxiliar: filtra um dia pela data YYYY-MM-DD
  function getHoursForDay(date) {
    return times
      .map((time, index) => ({ time, index }))
      .filter((obj) => obj.time.startsWith(date)); // retorna obj com data e as 24h correspondentes a data recebida como parâmetro
  }

  // Atualiza os cards na tela
  function updateUI(hoursList) {
    // Filtra somente entre os índices 15 e 22
    const filtered = hoursList.slice(15, 23);
    filtered.forEach((obj, i) => {
      const card = cards[i];
      if (!card) return;

      const [, time] = obj.time?.split('T') ?? [];
      const hour24 = Number(time?.split(':')[0]);

      const hour12 = hour24 % 12 || 12; // conversão
      const temp = temperatures[obj.index];
      const code = codes[obj.index];

      // Segurança
      if (isNaN(hour24) || temp == null || code == null) return;

      card.querySelector('img').src = `./assets/images/icon-${iconsCode.get(
        code
      )}.webp`;

      card.querySelector('.hours-content__hour').textContent = `${hour12} PM`;

      card.querySelector(
        '.hours-content__temperature'
      ).textContent = `${Math.round(temp)}º`;
    });
  }

  // Cada botão do dropdown usa o nome do dia para achar a data correspondente
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const weekday = btn.dataset.day; // Monday, Tuesday...

      const today = new Date();

      // Encontrar a data mais próxima >= hoje e com o weekday correto
      const target = times
        .map((t) => new Date(t))
        .filter((d) => {
          const name = d.toLocaleDateString('en-US', { weekday: 'long' });
          return name === weekday && d >= today; // <-- ESSENCIAL
        })
        .sort((a, b) => a - b)[0]; // Pega a mais próxima
      if (!target) return;
      const date = target.toISOString().split('T')[0];
      const hoursList = getHoursForDay(date);

      updateUI(hoursList);
    });
  });

  // Controla o estado visual do dropdown: define o botão ativo
  // e atualiza o texto exibido com a opção selecionada
  const btnSelected = ({ target }) => {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });
    target.classList.add('active');
    btnDropdown.textContent = target.textContent;
  };

  // Atualizar automaticamente no carregamento → usa o dia do primeiro botão
  const today = new Date().getDay() - 1;
  buttons[today].click();
  buttons.forEach((btn) =>
    btn.addEventListener('click', () => btnSelected({ target: btn }))
  );
}
