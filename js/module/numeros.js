export default function initNum() {
  const numeros = document.querySelectorAll("[data-animaNum]");
  const num = document.querySelector("[data-numero]");

  function animaNum() {
    numeros.forEach((item) => {
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

  function observadorAtivo(evento) {
    if (evento[0].target.classList.contains("ativo")) {
      animaNum();
      observer.disconnect();
    }
  }

  const observer = new MutationObserver(observadorAtivo);
  observer.observe(num, { attributes: true });
}
