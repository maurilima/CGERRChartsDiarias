import { UO } from "../testar/UO.js";
import { renderChartDiariasOrgao } from "./Charts/RenderChartBarDiariasOrgao.js";
import { renderChartDiariasServidor } from "./Charts/RenderChartBarDiariasServidor.js";
import { loadUO } from "./libs/lib.js";
// import { validateYear } from "./libs/lib.js";


// let listUO = UO.map(item => {
//      return {
//        codigo : item.codigoUnidadeorcamentaria,
//        descricao : item.descricaoUnidadeOrcamentaria    
//      }
// })

// console.log(listUO)



let yearToday = new Date().getFullYear();

let btnYearUnidade = document.getElementById("btnChartUO")
btnYearUnidade.addEventListener('click', validateYearUO, true);

let btnChartServidor = document.getElementById("btnChartServidor")
btnChartServidor.addEventListener('click', validateYearServidor, true);

let selectorUO = document.getElementById('selectUO');
let selectedUO = 0;

selectorUO.addEventListener('change', SelectedUO, false);

loadUO(selectUO);


document.addEventListener("DOMContentLoaded", function () {
     console.log("DOM completamente carregado e analisado");


});



renderChartDiariasOrgao(yearToday);
renderChartDiariasServidor(yearToday);



function validateYearUO() {
     let yearEnter = document.getElementById("yearUO").value;
     if (validateDate(yearEnter, yearToday)) {
          renderChartDiariasOrgao(yearEnter);
     }

}

function validateYearServidor() {
     let yearEnter = document.getElementById("YearServidor").value;
     if (validateDate(yearEnter, yearToday)) {
          renderChartDiariasServidor(yearEnter);
     }

}

function validateDate(yearSelected, YearToday) {
     if (yearSelected === '') yearSelected = YearToday;
     if (parseInt(yearSelected) <= 1980 | parseInt(yearSelected) > YearToday) {
          alert('Ano nao pode Ser Menor que 1980 ou maior que ' + YearToday)
     }
     else return true;

}

function SelectedUO() {
     selectedUO =  selectUO.value;
     console.log(selectedUO)
   }
   
