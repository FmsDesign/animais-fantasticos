import outsideClick from "./outsideClick.js";

export default function initdropDownMenu() {
  const dropdown = document.querySelector("[data-dropdown]");
  const dropdownBox = document.querySelector(".dropdown-menu");

  function onMouseMove(event) {
    event.preventDefault();
    dropdownBox.classList.toggle("ativo");
    outsideClick(this, ["click"], function () {
      dropdownBox.classList.remove("ativo");
    });
  }

  dropdown.addEventListener("click", onMouseMove);
}
