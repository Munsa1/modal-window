'use strict';


/*Grab DOM Elements For MAnipulation*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')


/*Reusable Open Modal Function*/
const showModal = ()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


/*Reusable Close Modal Function*/
const closeModal = ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

/*Show Modal Loop*/
for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', showModal)
}   


/*Close Modal and Overlay Event Listeners*/
    btnCloseModal.addEventListener('click', closeModal)

    overlay.addEventListener('click', closeModal)
