export default class tooltip {
  constructor(tooltip, text) {
    this.tooltips = document.querySelectorAll(tooltip);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.text = text;
  }

  criarTooltipbox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip", "font-s", "cor-0");
    tooltipBox.innerText = this.text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.target.removeEventListener("mousemove", this.onMouseMove);
    event.target.removeEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseOver(event) {
    this.criarTooltipbox(event.currentTarget);

    event.target.addEventListener("mousemove", this.onMouseMove);
    event.target.addEventListener("mouseleave", this.onMouseLeave);
  }

  eventTooltips() {
    this.tooltips.forEach((tooltip) =>
      tooltip.addEventListener("mouseover", this.onMouseOver)
    );
  }

  init() {
    if (this.tooltips.length) {
      this.eventTooltips();
    }
    return this;
  }
}
