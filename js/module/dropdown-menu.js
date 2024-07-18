export default function initdropDownMenu() {
  const dropdown = document.querySelector("[data-dropdown]");
  const dropdownBox = document.querySelector(".dropdown-menu");
  const link = document.querySelectorAll("[data-dropdown] a");

  function onMouseMove() {
    dropdownBox.classList.toggle("ativo");
  }
  ["click", "touchstart"].forEach((userEvent) => {
    dropdown.addEventListener(userEvent, onMouseMove);
  });

  function onclick(link) {
    link.preventDefault();
  }

  link.forEach((item) => item.addEventListener("click", onclick));
}
