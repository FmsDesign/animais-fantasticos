export default function initHorario() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horasSemana = funcionamento.dataset.hora.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const aberto = diasSemana.indexOf(diaAgora) !== -1;

  if (horaAgora > horasSemana[0] && horaAgora < horasSemana[1] && aberto) {
    funcionamento.classList.add("aberto");
  }
}
