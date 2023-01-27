'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// console.log(btnsOpenModal);
// let Arr = [1,2,3,4,5]

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('clicked', function(){
        console.log('button clicked');
    })
}
