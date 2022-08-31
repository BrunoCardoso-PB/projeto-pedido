const listaItens = document.querySelectorAll('.lista-itens h2');



function ativar(evento){
    evento.preventDefault()
    listaItens.forEach((item)=>{
        item.classList.toggle('ativo')
    })
}

listaItens.forEach((item,index)=>{
    item.addEventListener('click', ativar)
})


