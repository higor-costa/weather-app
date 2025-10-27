export default function initDropdownButtons() {
  const buttonToggleUnits = document.querySelector('#toggleUnits');
  const buttonToggleDays = document.querySelector('#toggleDays');
  const buttons = [buttonToggleUnits, buttonToggleDays].filter(Boolean);

  const openDropdown = ({ currentTarget }) => {
    const dropdown = currentTarget.nextElementSibling;
    const isActive = dropdown?.classList.toggle('active');

    // Mantém apenas um dropdown aberto por vez
    document.querySelectorAll('.dropdown.active').forEach((element) => {
      if (element !== dropdown) {
        element.classList.remove('active');
      }
    });

    // Fecha o dropdown ao clicar fora dele
    if (isActive) {
      const handleClickOutside = (event) => {
        const clickedInsideButton = currentTarget.contains(event.target);
        if (!dropdown.contains(event.target) && !clickedInsideButton) {
          dropdown.classList.remove('active');
          document.removeEventListener('click', handleClickOutside);
        }
      };
      document.addEventListener('click', handleClickOutside);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', openDropdown);
  });
}
