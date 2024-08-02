export default class ContNum {
  constructor(numero, container) {
    this.numeros = document.querySelectorAll(numero);
    this.container = document.querySelector(container);
    this.observadorAtivo = this.observadorAtivo.bind(this);
  }
  animaNum() {
    this.numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);
      let i = 0;

      const callbackNum = setInterval(callback, 25 * Math.random());

      function callback() {
        i += incremento;
        item.innerText = i;
        if (i > total) {
          clearInterval(callbackNum);
          item.innerText = total;
        }
      }
    });
  }

  observadorAtivo(evento) {
    if (evento[0].target.classList.contains("ativo")) {
      this.animaNum();
      this.observer.disconnect();
    }
  }

  observador() {
    this.observer = new MutationObserver(this.observadorAtivo);
    this.observer.observe(this.container, { attributes: true });
  }

  init() {
    this.observador();
  }
}
