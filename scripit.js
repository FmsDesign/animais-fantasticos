const tabImg = document.querySelectorAll(".animais-img li");
const tabConteudo = document.querySelectorAll(
  ".js-tabConteudo .animais-conteudo"
);

if (tabImg.length && tabConteudo.length) {
  function activeTab(index) {
    tabConteudo.forEach((conteudo) => {
      conteudo.classList.remove("ativo");
      tabConteudo[index].classList.add("ativo");
    });
  }
  tabImg.forEach((img, i) => {
    img.addEventListener("click", () => {
      activeTab(i);
    });
  });
}
