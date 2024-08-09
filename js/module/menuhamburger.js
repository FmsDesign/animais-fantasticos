import outsideClick from "./outsideClick.js";

export default class MenuHamburger {
  constructor(btn, menu, events) {
    this.btnHamburger = document.querySelector(btn);
    this.listaHamburger = document.querySelector(menu);

    //define o evento
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.expandMenu = this.expandMenu.bind(this);

    //é possível iniciar a classe diretamente no constructor
    this.init();
  }

  // abri e fecha o menu
  expandMenu(item) {
    item.preventDefault();
    const btnFalse = this.btnHamburger.getAttribute("aria-expanded");
    if (btnFalse === "false") {
      this.btnHamburger.setAttribute("aria-expanded", "true");
      this.listaHamburger.classList.add("ativo");
    }
    outsideClick(this.listaHamburger, this.events, () => {
      this.btnHamburger.setAttribute("aria-expanded", "false");
      this.listaHamburger.classList.remove("ativo");
    });
  }

  //evento que aciona o callback
  addMenuEvent() {
    this.events.forEach((evento) =>
      this.btnHamburger.addEventListener(evento, this.expandMenu)
    );
  }
  init() {
    if (this.btnHamburger && this.listaHamburger) {
      this.addMenuEvent();
    }
    return this;
  }
}
