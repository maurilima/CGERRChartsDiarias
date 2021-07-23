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