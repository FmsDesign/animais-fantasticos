import outsideClick from "./outsideClick.js";

export default function initdropDownMenu() {
  const dropdown = document.querySelector("[data-dropdown]");
  const dropdownBox = document.querySelector(".dropdown-menu");

  function onMouseMove(event) {
    event.preventDefault();
    dropdownBox.classList.add("ativo");
    outsideClick(this, ["touchstart"], function () {
      dropdownBox.classList.remove("ativo");
    });
  }
  ["click", "touchstart"].forEach((userEvent) => {
    dropdown.addEventListener(userEvent, onMouseMove);
  });
}
