import { URL_TDSE } from "../libs/urlApi.js";
import { getApiEndPoint } from "../libs/getApiEndPoint.js";
import { parseFloat2Decimals } from '../libs/lib.js';


export async function renderChartDiariasOrgao(yearToday) {
     document.getElementById("chartsDiariaOrgao").innerHTML = '&nbsp;';

     let divCharts = document.getElementById('chartsDiariaOrgao')
     let lraw = {
          exercicio: yearToday,
          limiteDeRegistros: 10,
     }
     // console.log(lraw, URL_TDSE)  ;
     const retorno = await getApiEndPoint(lraw, URL_TDSE);
     var lSerie = retorno.map(item => parseFloat2Decimals(item.total))
     var lLabels = retorno.map(item => item.sigla)

     let options = {
          chart: {
               type: 'bar',
               width: '100%',
               height: 350
          },
          plotOptions: {
               bar: {
                    borderRadius: 4,
                    horizontal: false,
                    dataLabels: {
                         position: 'bottom', // top, center, bottom
                         orientation: "vertical",
                    },
               }
          },
          series: [
               {
                    name: 'Total diarias',
                    data: lSerie
               }],
          dataLabels: {
               // enabled: true,
               position: 'top',
               orientation: "vertical",
               style: {
                    colors: ['#fff'],
               },

               formatter: function (val, opts) {
                    return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
               },
               offsetY: 10,
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
               text: 'Top 10 por Unidade Or??amentaria, por Gastos com Di??rias Exercic??o: ' + yearToday,
               align: 'left'
          },
     }

     let chart = new ApexCharts(divCharts, options)
     chart.render();

}