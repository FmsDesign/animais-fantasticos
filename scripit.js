// --------forma abreviada de FOREACH------
// const imgs = document.querySelectorAll("img");
// imgs.forEach((item) => {
//   console.log(item);
// });

// Uma linha de comando
// imgs.forEach((item) => console.log(item));
// ----------------------

// const menu = document.querySelector(".menu");
// menu.classList.remove("ativo");

// if (menu.classList.contains("ativo")) {
//   console.log("brazil is free");
// }
// setAttribute----------------------
// const animais = document.querySelector(".font-title");
// animais.setAttribute("alt", "nao");

// const menu = document.querySelectorAll(".menu a");
// menu.forEach((item) => item.classList.add("ativo"));

// const menuRemove = document.querySelectorAll(".menu a+a");
// menuRemove.forEach((item) => item.classList.remove("ativo"));

// menu.forEach((item) => console.log(item));

// const imgs = document.querySelectorAll("img");

// imgs.forEach((img) => {
//   if (img.hasAttribute("alt")) {
//     console.log("possui alt");
//   } else {
//     console.log(img);
//   }
// });

// const menu = document.querySelectorAll(".menu a:last-child");
// const linkExterno = menu[menu.length - 1];

// linkExterno.setAttribute("href", "https://www.google.com/");

// const imgs = document.querySelectorAll("img");
// let totalImg = 0;

// imgs.forEach((img) => {
//   totalImg += img.offsetWidth;
// });
// console.log(totalImg);

// const links = document.querySelectorAll(".menu a");
// links.forEach((link) => {
//   const checkheight = link.offsetHeight;
//   const checkWidith = link.offsetWidth;
//   if (checkWidith >= 48 && checkheight >= 48) {
//     console.log("está na medida");
//     console.log(checkWidith);
//   } else {
//     console.log(`${link.innerHTML} não está na medida`);
//   }
// });

// const menu = document.querySelector(".menu");
// const mobile = window.innerWidth;

// menu.forEach((link) => {
//   if (mobile < 720) {
//     link.classList.add("menu-mobile");
//   }
// });

// const browserSmall = window.matchMedia("(max-width: 700px)").matches;

// if (browserSmall) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu-mobile");
// }
