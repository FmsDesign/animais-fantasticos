export default function initTab() {
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
