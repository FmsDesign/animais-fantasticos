export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anima='scroll']");
  const windowMetade = window.innerHeight * 0.9;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionView = sectionTop - windowMetade < 0;

      if (sectionView) {
        section.classList.add("ativo");
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
