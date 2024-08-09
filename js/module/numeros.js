export default class ContNum {
  constructor(numero, container) {
    this.numeros = document.querySelectorAll(numero);
    this.container = document.querySelector(container);
    this.observadorAtivo = this.observadorAtivo.bind(this);
  }
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNum() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
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
