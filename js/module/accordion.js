export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anima='accordion'] dt"
  );
  const ativo = "ativo";

  accordionList[0].classList.add(ativo);
  accordionList[0].nextElementSibling.classList.add(ativo);

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
