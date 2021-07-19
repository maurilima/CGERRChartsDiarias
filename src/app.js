import { URL_TDSE } from "./config/Config.js";
import { getApisEndPoint } from "./libs/getApiEndPoint.js";
import { parseFloat2Decimals } from './libs/lib.js'
// import { getAuthKey } from "./libs/getApiKey.js";
let yearToday = new Date().getFullYear();

let divCharts = document.getElementById('charts')
// console.log(yearToday, divCharts);



//  document.addEventListener('DOMContentLoaded',function(){
let raw = {
     execicio: yearToday,
     limiteDeRegistros: 12
}

// console.log('entra', raw)
// let retorno = await getApisEndPoint(raw, URL_TDSE);


// renderChartsBarOrgao()

//      async function renderChartsBarOrgao(){
// let lSerie = [];
// let lLabels = [];

document.addEventListener('DOMContentLoaded', (event) => {
     console.log(event)

     console.log('Carregour')
     // renderChartsBarOrgao()
     //  console.log(raw)

})


let retorno = await getApisEndPoint(raw, URL_TDSE);
let lSerie = retorno.map(item => parseFloat2Decimals(item.total))
let lLabels = retorno.map(item => item.codigoUnidadeorcamentaria)
let legenda = retorno.map(item => {
     return { codigo: item.codigoUnidadeorcamentaria,
              descricao: item.descricaoUnidadeOrcamentaria,
     }}
);
// console.log(legenda)




let options = {
     chart: {
          type: 'bar',
          width: '90%',
          height: 400
     },
     plotOptions: {
          bar: {
               borderRadius: 4,
               horizontal: false,
               dataLabels: {
                    position: 'top', // top, center, bottom
               },
          }
     },
     series: [
          {
               name: 'Total diarias',
               data: lSerie
          }],
     dataLabels: {
          enabled: true,
          position: 'top',
          style: {
               colors: ['#fff'],
          },

          formatter: function (val, opts) {
               return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

          },
          offsetY: -15,
          style: {
               fontSize: '11px',
               colors: ["#304758"]
          }


     },

     xaxis: {
          categories: lLabels,

     },
     grid: {
          show: true,
          xaxis: {
               lines: {
                    show: true
               }
          }
     },
     title: {
          text: 'Top 10 de Gasto com Diárias',
          align: 'left'

     },

}

let chart = new ApexCharts(charts, options)
chart.render();


// chart.updateSeries(
//      [
//           {
//                data: lSerie
//           }

//      ])




console.log('Fim');
     // }
