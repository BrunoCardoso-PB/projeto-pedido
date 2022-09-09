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
    if (e.currentTarget.id == "produto") {
      alteraModal();
      iniciaModal("modal-promocao");
    }
    if (e.currentTarget.id == "produto2") {
      alteraModal2();
      iniciaModal("modal-promocao");
    }
    if (e.currentTarget.id == "produto3") {
      alteraModal3();
      iniciaModal("modal-promocao");
    }
  });
});
/*****************Alteração no modal para hamburguer 1*****************/
function alteraModal() {
  const produto = document.querySelectorAll("#produto");
  const arrayProduto = Array.from(produto).map((item) => {
    let h2 = item.querySelector("h2").innerText;
    let p = item.querySelector("p").innerText;
    let precoAtual = item.querySelector("span.preco-atual").innerText;
    let precoAntigo = item.querySelector("span.preco-antigo").innerText;
    let imagem = item.querySelector('img').src
    
    const lanches = document.querySelectorAll(".modal-container");
    const arrayLanches = Array.from(lanches).map((lanche) => {
      let titulo = lanche.querySelector("h2");
      titulo.innerText = h2;
      let descricao = lanche.querySelector("p");
      descricao.innerText = p;
      let preco1 = lanche.querySelector("span.preco-atual");
      preco1.innerText = precoAtual;
      let preco2 = lanche.querySelector("span.preco-antigo");
      preco2.innerText = precoAntigo;
      let imagemAlterada = lanche.querySelector('img')
      imagemAlterada.src = imagem
    });
  });
}


/*****************Alteração no modal para hamburguer 2*****************/
function alteraModal2() {
  const produto = document.querySelectorAll("#produto2");
  const arrayProduto = Array.from(produto).map((item) => {
    let h2 = item.querySelector("h2").innerText;
    let p = item.querySelector("p").innerText;
    let precoAtual = item.querySelector("span.preco-atual").innerText;
    let precoAntigo = item.querySelector("span.preco-antigo").innerText;
    let imagem = item.querySelector('img').src

    const lanches = document.querySelectorAll(".modal-container");
    const arrayLanches = Array.from(lanches).map((lanche) => {
      let titulo = lanche.querySelector("h2");
      titulo.innerText = h2;
      let descricao = lanche.querySelector("p");
      descricao.innerText = p;
      let preco1 = lanche.querySelector("span.preco-atual");
      preco1.innerText = precoAtual;
      let preco2 = lanche.querySelector("span.preco-antigo");
      preco2.innerText = precoAntigo;
      let imagemAlterada = lanche.querySelector('img')
      imagemAlterada.src = imagem
    });
  });
}
alteraModal2();
/***************Alteração no modal para hamburguer 3*******************/
function alteraModal3() {
  const produto = document.querySelectorAll("#produto3");
  const arrayProduto = Array.from(produto).map((item) => {
    let h2 = item.querySelector("h2").innerText;
    let p = item.querySelector("p").innerText;
    let precoAtual = item.querySelector("span.preco-atual").innerText;
    let precoAntigo = item.querySelector("span.preco-antigo").innerText;
    let imagem = item.querySelector('img').src

    const lanches = document.querySelectorAll(".modal-container");
    const arrayLanches = Array.from(lanches).map((lanche) => {
      let titulo = lanche.querySelector("h2");
      titulo.innerText = h2;
      let descricao = lanche.querySelector("p");
      descricao.innerText = p;
      let preco1 = lanche.querySelector("span.preco-atual");
      preco1.innerText = precoAtual;
      let preco2 = lanche.querySelector("span.preco-antigo");
      preco2.innerText = precoAntigo;
      let imagemAlterada = lanche.querySelector('img')
      imagemAlterada.src = imagem
    });
  });
}
