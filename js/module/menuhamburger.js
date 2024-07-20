import outsideClick from "./outsideClick.js";

export default function initMenuHamburger() {
  const btnHamburger = document.querySelector("[data-menu='button']");
  const listaHamburger = document.querySelector("[data-menu='lista']");
  const eventos = ["click", "touchstart"];

  if (btnHamburger) {
    function expandMenu(item) {
      const btnFalse = btnHamburger.getAttribute("aria-expanded");
      listaHamburger.classList.add("ativo");
      // if (btnFalse === "false") {
      //   this.setAttribute("aria-expanded", "true");
      //   listaHamburger.classList.add("ativo");
      // } else {
      //   this.setAttribute("aria-expanded", "false");
      //   listaHamburger.classList.add("ativo");
      // }

      outsideClick(listaHamburger, eventos, () =>
        listaHamburger.classList.remove("ativo")
      );
    }
    eventos.forEach((evento) =>
      btnHamburger.addEventListener(evento, expandMenu)
    );
  }
}
