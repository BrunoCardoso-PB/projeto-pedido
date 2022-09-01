function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
}

const logo = document.querySelector('.logo')
logo.addEventListener('click', function(){
    iniciaModal('modal-promocao')
})

