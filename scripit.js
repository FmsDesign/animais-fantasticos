function initTab() {
  const tabImg = document.querySelectorAll("[data-tab='img'] li");
  const tabConteudo = document.querySelectorAll(
    "[data-tab='conteudo'] .animais-conteudo"
  );

  if (tabImg.length && tabConteudo.length) {
    function activeTab(index) {
      tabConteudo.forEach((conteudo) => {
        conteudo.classList.remove("ativo");
      });
      const animacao = tabConteudo[index].dataset.anime;
      tabConteudo[index].classList.add("ativo", animacao);
    }

    tabImg.forEach((img, i) => {
      img.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}
initTab();

// função faq

function initAccordion() {
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
initAccordion();

// scroll suave
function initScroll() {
  const linksInternos = document.querySelectorAll(
    "[data-anima='menu'] a[href^='#']"
  );

  if (linksInternos.length) {
    function scrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
initScroll();

function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anima='scroll']");
  const windowMetade = window.innerHeight * 0.65;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionView = sectionTop - windowMetade < 0;

        if (sectionView) {
          section.classList.add("ativo");
        }
      });
    }
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

initAnimaScroll();
