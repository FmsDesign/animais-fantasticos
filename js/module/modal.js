export default function initModal() {
  const modalAbrir = document.querySelector("[data-modal='abrir']");
  const modal = document.querySelector("[data-modal='container']");
  const modalFechar = document.querySelector("[data-modal='fechar']");

  // if (modalAbrir && modal && modalFechar) {
  //   function initLogin(event) {
  //     event.preventDefault();
  //     modal.classList.add("ativo");
  //   }

  //   modalAbrir.addEventListener("click", initLogin);

  //   function fecharLogin() {
  //     modal.classList.remove("ativo");
  //   }

  //   modalFechar.addEventListener("click", fecharLogin);

  //   function cliqueForaModal(event) {
  //     if (event.target === this) {
  //       fecharLogin();
  //     }
  //   }

  //   modal.addEventListener("click", cliqueForaModal);
  // }

  //otimizado
  function initLogin(event) {
    event.preventDefault();
    modal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this || event.target === modalFechar) {
      initLogin(event);
    }
  }

  modalAbrir.addEventListener("click", initLogin);
  modal.addEventListener("click", cliqueForaModal);
}
