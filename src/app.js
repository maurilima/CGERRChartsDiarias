import { URL_TDSE } from "./config/Config.js";
import { getApisEndPoint } from "./libs/getApiEndPoint.js";
// import { getAuthKey } from "./libs/getApiKey.js";
let yearToday = new Date().getFullYear();

let divCharts = document.getElementById('charts')
// console.log(yearToday, divCharts);



//  document.addEventListener('DOMContentLoaded',function(){
let raw = {
     execicio: yearToday,
     limiteDeRegistros: 15
}

// console.log('entra', raw)
// let retorno = await getApisEndPoint(raw, URL_TDSE);

document.addEventListener('DOMContentLoaded', (event) => {

     // console.log('Carregour')
     // renderChartsBarOrgao()
     //  console.log(raw)

})

// renderChartsBarOrgao()

//      async function renderChartsBarOrgao(){

let retorno = await getApisEndPoint(raw, URL_TDSE);
let lSerie = retorno.map(item => item.total)
let lLabels =retorno.map(item => item.codigoUnidadeorcamentaria) 

let options = {
     chart: {
          type: 'bar',
          width : '90%',
          height: 600
     },
     series: [
          {
               name: 'Total diarias',

               data: lSerie
          }],
     xaxis: {
          categories: lLabels

     },
     grid: {
          show: true,
          xaxis:{
               lines:{
                    show:true
               }
          }
     },
     title: {
          text: 'Top 15 em Diárias',
          align: 'left'

     }

}
let chart = new ApexCharts(charts, options)
chart.render();


          // console.log(retorno);
     // }      
