import outsideClick from "./outsideClick.js";

export default class DropDownMenu {
  constructor(dropdownMenu, events) {
    this.dropdown = document.querySelector(dropdownMenu);
    if (events === undefined) this.events = ["click"];
    else this.events = events;

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(event) {
    event.preventDefault();
    this.dropdown.classList.toggle("ativo");
    outsideClick(this.dropdown, ["click"], () => {
      this.dropdown.classList.remove("ativo");
    });
  }

  addDropEvent() {
    this.events.forEach((item) => {
      this.dropdown.addEventListener(item, this.onMouseMove);
    });
  }

  init() {
    if (this.dropdown) {
      this.addDropEvent();
    }

    return this;
  }
}
