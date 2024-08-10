import Accordion from "./module/accordion.js";
import ScrollSuave from "./module/scrollsuave.js";
import TabNav from "./module/animacoes.js";
import AnimaScroll from "./module/anima-scroll.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import DropDownMenu from "./module/dropdown-menu.js";
import MenuHamburger from "./module/menuhamburger.js";
import ContNum from "./module/numeros.js";
import Horario from "./module/horario.js";
import Bitcoin from "./module/bitcoin.js";
import SlideNav from "./module/slide.js";

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

const contNum = new ContNum("[data-animaNum]", "[data-numero]", "ativo");
contNum.init();

const bitcoin = new Bitcoin(".contato-bit");
bitcoin.init();

const animaScroll = new AnimaScroll("[data-anima='scroll']");
animaScroll.init();

const dropDownMenu = new DropDownMenu(".dropdown-menu");
dropDownMenu.init();

const menuhamburger = new MenuHamburger(
  "[data-menu='button']",
  "[data-menu='lista']"
);
menuhamburger.init();
// menuhamburger.init(); iniciei a classe no constructor como exemplo

const horario = new Horario("[data-semana]", "aberto");
horario.init();

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControl(".custom-controls");
