export default function inittooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => item.addEventListener("mouseover", onMouseOver));

  function onMouseOver(event) {
    const tooltipBox = criarTooltipbox(this);

    this.addEventListener("mousemove", onMouseMove);
    function onMouseMove(event) {
      tooltipBox.style.top = event.pageY + 20 + "px";
      tooltipBox.style.left = event.pageX + 20 + "px";
    }

    this.addEventListener("mouseleave", onMouseLeave);
    function onMouseLeave() {
      tooltipBox.remove();
      this.removeEventListener("mouseleave", onMouseLeave);
      this.removeEventListener("mouseleave", onMouseMove);
    }
  }

  function criarTooltipbox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip", "font-s", "cor-0");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
