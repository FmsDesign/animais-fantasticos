export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollToSelection = this.scrollToSelection.bind(this);
  }

  scrollToSelection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSelection);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }

    return this;
  }
}
