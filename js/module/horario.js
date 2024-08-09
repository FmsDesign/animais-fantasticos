// export default function initHorario() {
//   const funcionamento = document.querySelector("[data-semana]");
//   const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
//   const horasSemana = funcionamento.dataset.hora.split(",").map(Number);

//   const dataAgora = new Date();
//   const diaAgora = dataAgora.getDay();
//   const horaAgora = dataAgora.getHours();

//   const aberto = diasSemana.indexOf(diaAgora) !== -1;

//   if (horaAgora > horasSemana[0] && horaAgora < horasSemana[1] && aberto) {
//     funcionamento.classList.add("aberto");
//   }
// }

export default class Horario {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
    this.init();
  }

  horarioFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horasSemana = this.funcionamento.dataset.hora.split(",").map(Number);
  }

  getdata() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  aberto() {
    const semana = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horario =
      this.horaAgora > this.horasSemana[0] &&
      this.horaAgora < this.horasSemana[1];

    if (horario && semana) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.horarioFuncionamento();
      this.getdata();
      this.aberto();
    }
    return this;
  }
}
