// import initNum from "./numeros.js";

// export default function initFetchAnimais() {
//   async function fetchAnimais(url) {
//     const animaisResponse = await fetch(url);
//     const animaisJson = await animaisResponse.json();
//     const container = document.querySelector(".numeros");

//     animaisJson.forEach((animal) => {
//       const divAnimal = createAnimal(animal);
//       container.appendChild(divAnimal);
//       initNum();
//     });
//   }

//   function createAnimal(animal) {
//     const div = document.createElement("div");
//     div.innerHTML = ` <h3 class="font-sub-display cor-9">${animal.specie}</h3>
//         <span data-animaNum class="font-m2 cor-s2">${animal.total}</span>`;
//     return div;
//   }

//   fetchAnimais("../animaisapi.json");
// }

// // import initNum from "./numeros.js";

// // async function fetchAnimais(url) {
//   const animaisResponse = await fetch(url);
//   const animaisJson = await animaisResponse.json();

//   animaisJson.forEach((animal) => createAnimal(animal));
// }
// function createAnimal(animal) {
//   const div = document.createElement("div");
//   div.innerHTML = ` <h3 class="font-sub-display cor-9">${animal.specie}</h3>
//         <span data-animaNum class="font-m2 cor-s2">${animal.total}</span>`;

//   const container = document.querySelector(".numeros");
//   container.appendChild(div);
//   initNum();
// }
// fetchAnimais("../js/animaisapi.json");
