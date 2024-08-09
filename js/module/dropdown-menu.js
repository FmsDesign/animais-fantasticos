import outsideClick from "./outsideClick.js";

export default class DropDownMenu {
  constructor(dropdownMenu, events) {
    this.dropdown = document.querySelector(dropdownMenu);
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(event) {
    event.preventDefault();
    this.dropdown.classList.add("ativo");
    outsideClick(this.dropdown, ["touchstart", "click"], () => {
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
