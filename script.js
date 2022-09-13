/*************** função que chama e remove o modal ao click ***************/
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
/***************aciona o evento click no target - e chama as funções alteramodal e inicialmodal ***************/
const listaItens = document.querySelectorAll(".lista-itens");
listaItens.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    const listaItens = e.currentTarget.id
    const idListaItens = `${'#'}${listaItens}`
      alteraModal(idListaItens);    
      iniciaModal("modal-promocao");
  });
});

/***************funcao p/ alterações no modal ***************/
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
/*************** função para limpar o modal ***************/
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

/*************** menu mobile ***************/
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(evento) {
  if (evento.type === 'touchstart') evento.preventDefault();
  
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  const active = nav.classList.contains('active') 
  if(active){
    evento.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    evento.currentTarget.setAttribute('aria-expanded', 'true')
  } else {
    evento.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    evento.currentTarget.setAttribute('aria-expanded', 'false')
  }
}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

/*************** fecha menu ao clicar nas opções ***************/

function fechaMenu(){
  const navMenu = document.getElementById('nav')
  const jsMenu = document.getElementById('menu')
  jsMenu.classList.add('js-menu')
  navMenu.classList.remove('active')
}
const menuNav = document.querySelectorAll('#menu')
menuNav.forEach((item, index)=>{
  item.addEventListener('click',()=>{
    fechaMenu()
  })
})

function teste(){
  const jsMenu = document.getElementById('menu')
  jsMenu.classList.remove('js-menu')
}

const btnMenu = document.querySelectorAll('#btn-mobile')
btnMenu.forEach((item, index)=>{
  item.addEventListener('click',()=>{
    teste()
  })
})
  




