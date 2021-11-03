import { URL_TDPSO } from "../libs/urlApi.js";
import { listaLegendaSimples } from "../legenda/listaLeganda.js";
import { getApiEndPoint } from "../libs/getApiEndPoint.js";
import { getUO, parseFloat2Decimals } from '../libs/lib.js';
// import { listUO } from "../libs/UO.js";

let Labels = ['1º','2º','3º','4º','5º','6º','7º','8º','9º','10º', ]

const listUO = await getUO()

// console.log(listUO)

export async function renderChartDiariasUOServidor(selctedUO, yearToday){
     // let yearToday = new Date().getFullYear();

     document.getElementById("chartsDiariaUOServidor").innerHTML = '&nbsp;';     
     let divCharts = document.getElementById('chartsDiariaUOServidor')
     let raw = {
          codigoUnidadeOrcamentaria: selctedUO,
          exercicio: yearToday,
          limiteDeRegistros: 10
     }   

     const retorno = await getApiEndPoint(raw, URL_TDPSO);

     let lSerie = retorno.map(item =>  parseFloat2Decimals(item.total))
   
    let Legends = retorno.map( item  => item.cpf+'-'+item.nomeCredor)    
    var descr = listUO.find(el => el.codigo === selctedUO )

    Legends.splice(Legends.indexOf(false),0);   

    listaLegendaSimples(Labels,Legends, '.legendaUOS');

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
                         orientation: 'vertical',
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
               x: 2,
                y: -10,
               style: {
                    colors: ['#fff'],
               },

               formatter: function (val, opts) {
                    return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
               },
               offsetY: 10,
               style: {
                    fontSize: '11px',
                    colors: ["#304758"],
                    // horizontal: false,
               }
          },

          xaxis: {
               categories: Labels,
          },
        // theme: {
        //     mode: 'light', 
        //     palette: 'palette10', 
        //     monochrome: {
        //         enabled: false,
        //         color: '#A300D6',
        //         shadeTo: 'light',
        //         shadeIntensity: 0.65
        //     },
        // },
        
        
          lengend: {
               show: true,
               position: 'top',
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
               text: 'Top 10 Servidores Diárias, UO:'+ descr.descricao+  ' Exercicío: '+yearToday,
               align: 'left'
          },
     }

     let chart = new ApexCharts(divCharts, options)
     chart.render();

    }