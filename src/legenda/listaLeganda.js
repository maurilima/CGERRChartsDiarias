export function listaLegenda(data) {
    let list =  document.querySelector('ul');
    

    let legenda = data.map((item, i) =>{
        console.log(item.codigo, item.descricao)
        return  `<li> ${item.codigo} - ${item.descricao}</li>`;
    })
    console.log(legenda);
    
    list.innerHTML = legenda
    console.log(list);

    return   

}

export function listaLegendaSimples(itens,data, local) {
    let list =  document.querySelector(local+ ' ul');

 
    let Lista = [] 
    for(var i=0; i<data.length; i++) {
        Lista.push({codigo:itens[i],descricao:data[i]}) 
    }

    let legenda = Lista.map((item, i) =>{
        return  `<li> ${item.codigo} - ${item.descricao}</li>`;
    })
    list.innerHTML = legenda

    return   

}