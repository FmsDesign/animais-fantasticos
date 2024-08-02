export default class Modal {
  constructor(containe, abrir, fechar) {
    this.modalAbrir = document.querySelector(abrir);
    this.modal = document.querySelector(containe);
    this.modalFechar = document.querySelector(fechar);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  //abre ou fecha o modal
  toggleModal() {
    this.modal.classList.toggle("ativo");
  }

  //adiciona toggleModal no evento
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar fora
  cliqueForaModal(event) {
    if (event.target === this) {
      this.classList.toggle("ativo");
    }
  }

  //eventos
  addModalEvent() {
    this.modalAbrir.addEventListener("click", this.eventToggleModal);
    this.modalFechar.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.modal && this.modalAbrir && this.modalFechar) {
      this.addModalEvent();
    }
    return this;
  }
}
