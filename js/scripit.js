import Accordion from "./module/accordion.js";
import ScrollSuave from "./module/scrollsuave.js";
import TabNav from "./module/animacoes.js";
import initAnimaScroll from "./module/anima-scroll.js";
import Modal from "./module/modal.js";
import inittooltip from "./module/tooltip.js";
import initdropDownMenu from "./module/dropdown-menu.js";
import initMenuHamburger from "./module/menuhamburger.js";
import initNum from "./module/numeros.js";
import initHorario from "./module/horario.js";
// import initFetchAnimais from "./module/initFetchAnimais.js";
import initBitcoin from "./module/bitcoin.js";

const scrollSuave = new ScrollSuave("[data-anima='menu'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anima='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='img'] li",
  "[data-tab='conteudo'] .animais-conteudo",
  "show-down"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='container']",
  "[data-modal='abrir']",
  "[data-modal='fechar']"
);
modal.init();

initAnimaScroll();
inittooltip();
initdropDownMenu();
initMenuHamburger();
initNum();
initHorario();
// initFetchAnimais();
initBitcoin();
