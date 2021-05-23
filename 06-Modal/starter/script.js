'use strict';


const modal = document.querySelector('.modal'); // selects the class 
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// utility functions to handle the modal 

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };



for(let i=0; i < btnOpenModal.length; i++){

    console.log(btnOpenModal[i].textContent);
    btnOpenModal[i].addEventListener('click',function(){

        console.log("Button-clicked");
        openModal();
        //modal.classList.remove('hidden');

    })

    btnCloseModal.addEventListener('click',function(){
        console.log("the modal x has been clicked ");
        closeModal();
    })

    overlay.addEventListener('click',function(){

        console.log("the overlay was clicked");
        closeModal();
    }
    )

   


}

// keydown event 
document.addEventListener('keydown',function(e){

    console.log(e.key);
    if(e.key ==="Escape"){
        console.log("Esc was pressed");
        
        if(!modal.classList.contains('hidden')){
            
            console.log('esc so clocosing modal');
            closeModal();
        }
    
    }

})