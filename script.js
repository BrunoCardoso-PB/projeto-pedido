function inciaModal(e){
    const modal = document.getElementById(e)
    modal.classList.add('mostrar')
    modal.addEventListener('click', function(e){
        if(e.target.id == 'modal-promocao'){
            modal.classList.remove('mostrar')
        }
    })
}


const hamburguer1 = document.querySelector('#hamburguer1')
hamburguer1.addEventListener('click', function(){
    inciaModal('modal-promocao')
})







// function iniciaModal(e){
//     const modal = document.getElementById(e)
//     modal.classList.add('mostrar')
//     modal.addEventListener('click', (e) => {
//         if(e.target.id == 'modal-promocao'){
//             modal.classList.remove('mostrar')
//         }
//     })
// }

// const logo = document.querySelector('.logo')
// logo.addEventListener('click', function(){
//     iniciaModal('modal-promocao')
// })