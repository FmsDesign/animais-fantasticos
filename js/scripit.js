import initAccordion from "./module/accordion.js";
import ScrollSuave from "./module/scrollsuave.js";
import initTab from "./module/animacoes.js";
import initAnimaScroll from "./module/anima-scroll.js";
import initModal from "./module/modal.js";
import inittooltip from "./module/tooltip.js";
import initdropDownMenu from "./module/dropdown-menu.js";
import initMenuHamburger from "./module/menuhamburger.js";
import initNum from "./module/numeros.js";
import initHorario from "./module/horario.js";
// import initFetchAnimais from "./module/initFetchAnimais.js";
import initBitcoin from "./module/bitcoin.js";

const scrollSuave = new ScrollSuave("[data-anima='menu'] a[href^='#']");
scrollSuave.init();

initAccordion();
initAnimaScroll();

initTab();
initModal();
inittooltip();
initdropDownMenu();
initMenuHamburger();
initNum();
initHorario();
// initFetchAnimais();
initBitcoin();
