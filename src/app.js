import { renderChartDiariasOrgao } from "./Charts/RenderChartBarDiariasOrgao.js";
import { renderChartDiariasServidor } from "./Charts/RenderChartBarDiariasServidor.js";
// import { validateYear } from "./libs/lib.js";

let yearToday = new Date().getFullYear();

let btnYearUnidade = document.getElementById("btnChartUO")

let btnChartServidor = document.getElementById("btnChartServidor")

btnYearUnidade.addEventListener('click', validateYearUO, true);
btnChartServidor.addEventListener('click', validateYearServidor, true);


document.addEventListener("DOMContentLoaded", function (event) {
     console.log("DOM completamente carregado e analisado");


});



renderChartDiariasOrgao(yearToday);
renderChartDiariasServidor(yearToday);



function validateYearUO() {
     let yearEnter = document.getElementById("yearUO").value;
     if (validateDate(yearEnter,yearToday)) {
          renderChartDiariasOrgao(yearEnter);
     }
     // if (yearSelected === '') yearSelected = YearToday;
     // if (parseInt(yearSelected) <= 1980 | parseInt(yearSelected) > YearToday) {
     //   alert('Ano nao pode Ser Menor que 1980 ou maior que ' + YearToday)
     // }
     // else {

     // }
}

function validateYearServidor() {
     let yearEnter = document.getElementById("YearServidor").value;
     if (validateDate(yearEnter,yearToday)) {
          renderChartDiariasServidor(yearEnter);
     }
     // if (yearSelected === '') yearSelected = YearToday;
     // if (parseInt(yearSelected) <= 1980 | parseInt(yearSelected) > YearToday) {
     //   alert('Ano nao pode Ser Menor que 1980 ou maior que ' + YearToday)
     // }
     // else {

     // }
}

function validateDate(yearSelected, YearToday) {
     if (yearSelected === '') yearSelected = YearToday;
     if (parseInt(yearSelected) <= 1980 | parseInt(yearSelected) > YearToday) {
          alert('Ano nao pode Ser Menor que 1980 ou maior que ' + YearToday)
     }
     else  return true;

}
