export default function initHourForecast() {
  const buttonsDay = document.querySelectorAll('.dropdown li button');
  const buttonDaySelected = document.querySelector('#toggleDays span');

  const selectDayHourForecast = ({ currentTarget }) => {
    const daySelected = currentTarget;
    buttonDaySelected.textContent = daySelected.dataset.day || daySelected.textContent; // Monday, Tursday, Wednesday, Thursday, Friday, Saturday ou Sunday

    buttonsDay.forEach((button) => {
      button.classList.remove('active');
    })

    daySelected.classList.add('active');
  };

  buttonsDay.forEach((button) => {
    button.addEventListener('click', selectDayHourForecast);
  });
}
