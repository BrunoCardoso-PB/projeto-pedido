/*********função que chama e remove o modal ao click ***********/

function iniciaModal(e) {
  const modal = document.getElementById(e);
  modal.classList.add("mostrar");
  modal.addEventListener("click", function (e) {
    if (e.target.id == "modal-promocao") {
      modal.classList.remove("mostrar");
    }
  });
}
/*************função adciona evento click no target *******************/
const listaItens = document.querySelectorAll(".lista-itens");
listaItens.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    if (e.currentTarget.id == "hamburguer1") {
        alteraModal1()
      iniciaModal("modal-promocao");
    }
    if (e.currentTarget.id == "hamburguer2") {
        alteraModal2()
        iniciaModal("modal-promocao");
        }    
    })
})

/*****************Alteração no modal para hamburguer 1*****************/

function alteraModal1(){
    const produto2 = document.querySelectorAll('#hamburguer1')
    const arrayProduto2 = Array.from(produto2)
    const objetoProduto = arrayProduto2.map((item)=>{
        let h2 = item.querySelector('h2').innerText
        let p = item.querySelector('p').innerText
                
    const lanches = document.querySelectorAll(".modal-container");      
    const arrayLanches = Array.from(lanches);
    const objetosLanches = arrayLanches.map((lanche) => {
        let titulo = lanche.querySelector("h2")
        titulo.innerText = h2;      
        let descricao = lanche.querySelector('p')
        descricao.innerText = p
    }) 
  })
}

/*****************Alteração no modal para hamburguer 2*****************/
function alteraModal2(){
    const produto2 = document.querySelectorAll('#hamburguer2')
    const arrayProduto2 = Array.from(produto2)
    const objetoProduto = arrayProduto2.map((item)=>{
        let h2 = item.querySelector('h2').innerText
        let p  = item.querySelector('p').innerText 
                
    const lanches = document.querySelectorAll(".modal-container");      
    const arrayLanches = Array.from(lanches);
    const objetosLanches = arrayLanches.map((lanche) => {
        let titulo = lanche.querySelector("h2")
        titulo.innerText = h2;    
        let descricao = lanche.querySelector('p')  
        descricao.innerText = p;
    }) 
  })
}
