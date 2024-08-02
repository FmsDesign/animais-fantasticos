export default class tabNav {
  constructor(reference, content, animacao) {
    this.tabMenu = document.querySelectorAll(reference);
    this.tabConteudo = document.querySelectorAll(content);
    this.activeClass = "ativo";

    this.animacao = animacao;
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(i) {
    this.tabConteudo.forEach((conteudo) => {
      conteudo.classList.remove(this.activeClass);
    });
    // const animacao = this.tabConteudo[i].dataset.anime;
    this.tabConteudo[i].classList.add(this.activeClass, this.animacao);
  }

  //adicionaa os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((img, i) => {
      img.addEventListener("click", () => this.activeTab(i));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabConteudo.length) {
      this.addTabNavEvent();
    }
    this.activeTab(0);
  }
}
