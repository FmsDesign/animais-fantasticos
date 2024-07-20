export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outise";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      setTimeout(() => html.addEventListener(userEvents, clicou));
    });
    element.setAttribute(outside, "");
  }

  function clicou(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, clicou);
      });

      callback();
    }
  }
}
