const openButton = document.querySelector(".button-footer");
const closeButton = document.querySelector(".close-button");
const backdrop = document.querySelector(".backdrop js-backdrop")
const input = document.querySelector(".input-footer")

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);


function openModal() {
   var inputValue = input.value;
   if (inputValue.trim() !== "") {
       document.body.classList.add("show-modal");
       backdrop.style.display = "block";
   } 
}


function closeModal (){
   document.body.classList.add("show-modal");
   backdrop.style.display = "none";
};
