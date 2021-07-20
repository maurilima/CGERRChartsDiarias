import { renderChartDiariasOrgao } from "./Charts/RenderChartBarDiariasOrgao.js";



renderChartDiariasOrgao()
document.addEventListener("DOMContentLoaded", function (event) {
     console.log("DOM completamente carregado e analisado");

     
});

  




     // console.log("entra")
     // let retorno = await getApiEndPoint(lraw, URL_TDSE);
     // let lSerie = retorno.map(item => parseFloat2Decimals(item.total))
     // let lLabels = retorno.map(item => item.codigoUnidadeorcamentaria)
     // let legenda = retorno.map(item => {
     //      return {
     //           codigo: item.codigoUnidadeorcamentaria,
     //           descricao: item.descricaoUnidadeOrcamentaria,
     //      }
     // }
     // );     

     // let options = {
     //      chart: {
     //           type: 'bar',
     //           width: '90%',
     //           height: 400
     //      },
     //      plotOptions: {
     //           bar: {
     //                borderRadius: 4,
     //                horizontal: false,
     //                dataLabels: {
     //                     position: 'top', // top, center, bottom
     //                },
     //           }
     //      },
     //      series: [
     //           {
     //                name: 'Total diarias',
     //                data: lSerie
     //           }],
     //      dataLabels: {
     //           enabled: true,
     //           position: 'top',
     //           style: {
     //                colors: ['#fff'],
     //           },

     //           formatter: function (val, opts) {
     //                return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
     //           },
     //           offsetY: -15,
     //           style: {
     //                fontSize: '11px',
     //                colors: ["#304758"]
     //           }
     //      },

     //      xaxis: {
     //           categories: lLabels,
     //      },
     //      grid: {
     //           show: true,
     //           xaxis: {
     //                lines: {
     //                     show: true
     //                }
     //           }
     //      },
     //      title: {
     //           text: 'Top 10 de Gasto com Diárias',
     //           align: 'left'
     //      },
     // }

     // let chart = new ApexCharts(divCharts, options)
     // chart.render();

