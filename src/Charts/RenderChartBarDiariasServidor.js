import { URL_TDPS } from "../libs/urlApi.js";
import { listaLegendaSimples } from "../legenda/listaLeganda.js";
import { getApiEndPoint } from "../libs/getApiEndPoint.js";
import { parseFloat2Decimals } from '../libs/lib.js';


let Labels = ['1º','2º','3º','4º','5º','6º','7º','8º','9º','10º', ]


export async function renderChartDiariasServidor(yearToday){
     // let yearToday = new Date().getFullYear();

     document.getElementById("chartsDiariaServidor").innerHTML = '&nbsp;';     
     let divCharts = document.getElementById('chartsDiariaServidor')
     let lraw = {
          exercicio: yearToday,
          limiteDeRegistros: 11
     }    
     let retorno = await getApiEndPoint(lraw, URL_TDPS);

     //  *********************
     //  POG(Programação Orientada a Gambiarras ) para resolver o problema que o Ministerio Publico
     //  Cadastra funcionarios no FIPLAN somente o custo total de Diarais
     //  não á Administração Direta

     let lSerie =  retorno.map(item => {
     //     if (item.nomeCredor != "MINISTERIO PUBLICO ESTADUAL") {
              return parseFloat2Decimals(item.total)
         }
     //     else {return false}
     //    }
     )
    
     lSerie.splice(lSerie.indexOf(false),1);
     // ***************************************
        
     let Legends = retorno.map( item  => {
        
     //    if (item.nomeCredor != "MINISTERIO PUBLICO ESTADUAL") {
             return item.cpf+'-'+item.nomeCredor}
     //    else {return false}
     //   }
    )
        
    Legends.splice(Legends.indexOf(false),0);    
        

     listaLegendaSimples(Labels,Legends, '.legenda');



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
               offsetY: -16,
               style: {
                    fontSize: '11px',
                    colors: ["#304758"]
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
               text: 'Top 10 Servidores por Gasto com Diárias Exercico: '+yearToday,
               align: 'left'
          },
     }

     let chart = new ApexCharts(divCharts, options)
     chart.render();

    }