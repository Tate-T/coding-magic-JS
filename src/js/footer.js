const openButton = document.querySelector(".button-footer");
const closeButton = document.querySelector(".close-button");
const backdrop = document.querySelector(".backdrop js-backdrop")

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);


function openModal (){
 document.body.classList.add("show-modal");
};


function closeModal (){
   document.body.classList.add("show-modal");
};
