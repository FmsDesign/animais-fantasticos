import Accordion from "./module/accordion.js";
import ScrollSuave from "./module/scrollsuave.js";
import TabNav from "./module/animacoes.js";
import AnimaScroll from "./module/anima-scroll.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import initdropDownMenu from "./module/dropdown-menu.js";
import initMenuHamburger from "./module/menuhamburger.js";
import ContNum from "./module/numeros.js";
import initHorario from "./module/horario.js";
import Bitcoin from "./module/bitcoin.js";

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

const tooltip = new Tooltip("[data-tooltip]", "Esse é o endereço");
tooltip.init();

const modal = new Modal(
  "[data-modal='container']",
  "[data-modal='abrir']",
  "[data-modal='fechar']"
);
modal.init();

const contNum = new ContNum("[data-animaNum]", "[data-numero]");
contNum.init();

const bitcoin = new Bitcoin(".contato-bit");
bitcoin.init();

const animaScroll = new AnimaScroll("[data-anima='scroll']");
animaScroll.init();

initdropDownMenu();
initMenuHamburger();
initHorario();
