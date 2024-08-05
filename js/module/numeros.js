export default class ContNum {
  constructor(numeros, container) {
    this.numeros = document.querySelectorAll(numeros);
    this.num = document.querySelector(container);
    this.observadorAtivo = this.observadorAtivo.bind(this);
  }

  // recebe um elemento do DOMException, com número
  // incrementa o valor de 0 até o número final
  static incremento(item) {
    const incremento = Math.floor(+item.innerText / 100);
    const total = +item.innerText;
    let i = 0;

    this.setInterval = setInterval(() => {
      i += incremento;
      item.innerText = i;
      if (i > total) {
        clearInterval(this.setInterval);
        item.innerText = total;
      }
    }, 25 * Math.random());
  }

  animaNum() {
    this.numeros.forEach((item) => {
      this.constructor.incremento(item);
    });
  }

  // funcção que ocorre quando o evento ocorrer
  observadorAtivo() {
    if (this.num.classList.contains("ativo")) {
      this.observer.disconnect();
      this.animaNum();
    }
  }

  // adiciona o evento que verifica se o elemento recebeu a classe "ativo"
  observador() {
    this.observer = new MutationObserver(this.observadorAtivo);
    this.observer.observe(this.num, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.num) {
      this.observador();
    }
  }
}
