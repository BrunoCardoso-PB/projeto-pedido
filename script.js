function iniciaModal(e) {
    const modal = document.getElementById(e);
    modal.classList.add("mostrar");
    modal.addEventListener("click", function (e) {
        if (e.target.id == "modal-promocao") {
            modal.classList.remove("mostrar");
        }
    });
}


const listaItens = document.querySelectorAll(".lista-itens");
listaItens.forEach((item, index) => {
    item.addEventListener("click", function (e) {
        if (e.currentTarget.id == "hamburguer1") {
            iniciaModal("modal-promocao");
        }
        if(e.currentTarget.id == "hamburguer2"){
            console.log('clicou')
        }
    });
});




// const lanches = document.querySelectorAll('.lista-itens')
// const arrayLanches = Array.from(lanches)

// const objetosLanches = arrayLanches.map((lanche)=>{
//     const titulo = lanche.querySelector('h2').innerText;
//     const nomeLanche = titulo
//     console.log(nomeLanche)
// })
