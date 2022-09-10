/*********função que chama e remove o modal ao click ***********/

function iniciaModal(e) {
  const modal = document.getElementById(e);
  modal.classList.add("mostrar");
  modal.addEventListener("click", function (e) {
    if (e.target.id == "modal-promocao") {
      modal.classList.remove("mostrar"); 
      limpaModal() 
    }
  });
}
/*************aciona evento click no target *******************/
const listaItens = document.querySelectorAll(".lista-itens");
listaItens.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    if (e.currentTarget.id == "produto1") {
      alteraModal('#produto1');     
      iniciaModal("modal-promocao");
    }
    if (e.currentTarget.id == "produto2") {
      alteraModal('#produto2')        
      iniciaModal("modal-promocao");
    }
    if (e.currentTarget.id == "produto3") {
      alteraModal('#produto3');
      iniciaModal("modal-promocao");
    }
  });
});
/*****************Alteração no modal para hamburguer 1*****************/
function alteraModal(e) {
  const produto = document.querySelectorAll(e);
  const arrayProduto = Array.from(produto).map((item) => {
    const h2 = item.querySelector('h2').innerText;
    const p = item.querySelector("p").innerText;
    const precoAtual = item.querySelector("span.preco-atual").innerText;
    const precoAntigo = item.querySelector("span.preco-antigo").innerText;
    const imagem = item.querySelector('img').src

    const lanches = document.querySelectorAll(".modal-container");
    const arrayLanches = Array.from(lanches).map((lanche) => {
      const titulo = lanche.querySelector("h2");
      titulo.innerText = h2;
      const descricao = lanche.querySelector("p");
      descricao.innerText = p;
      const preco1 = lanche.querySelector("span.preco-atual");
      preco1.innerText = precoAtual;
      const preco2 = lanche.querySelector("span.preco-antigo");
      preco2.innerText = precoAntigo;
      const imagemAlterada = lanche.querySelector('img')
      imagemAlterada.src = imagem
    });
  });
}
function limpaModal(){
  const lanches = document.querySelectorAll(".modal-container");
    const arrayLanches = Array.from(lanches).map((lanche) => {
      const h2Limpo = lanche.querySelector("h2")
      h2Limpo.innerText = ''
      const descricaoLimpo = lanche.querySelector("p")
      descricaoLimpo.innerText =''
      const preco1Limpo = lanche.querySelector("span.preco-atual")
      preco1Limpo.innerText = ''
      const preco2Limpo = lanche.querySelector("span.preco-antigo")
      preco2Limpo.innerText = ''
      const imgLimpo = lanche.querySelector('img')
      imgLimpo.src = ''
    })
}