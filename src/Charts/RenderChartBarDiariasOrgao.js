import { URL_TDSE } from "../config/Config.js";
import { getApiEndPoint } from "../libs/getApiEndPoint.js";
import { parseFloat2Decimals } from '../libs/lib.js';


export async function renderChartDiariasOrgao(){
     let yearToday = new Date().getFullYear();

     let divCharts = document.getElementById('chartsDiariaOrgao')
     let lraw = {
          execicio: yearToday,
          limiteDeRegistros: 10
     }     
     let retorno = await getApiEndPoint(lraw, URL_TDSE);
     let lSerie = retorno.map(item => parseFloat2Decimals(item.total))
     let lLabels = retorno.map(item => item.codigoUnidadeorcamentaria)
     let legenda = retorno.map(item => {
          return {
               codigo: item.codigoUnidadeorcamentaria,
               descricao: item.descricaoUnidadeOrcamentaria,
          }
     }
     );     

     let options = {
          chart: {
               type: 'bar',
               width: '100%',
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

     let chart = new ApexCharts(divCharts, options)
     chart.render();

    }