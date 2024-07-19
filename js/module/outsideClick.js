export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outise";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      html.addEventListener(userEvents, clicou);
    });
    element.setAttribute(outside, "");
  }

  function clicou(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "");
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, clicou);
      });

      callback();
    }
  }
}

function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 4000, "olá mundo");
