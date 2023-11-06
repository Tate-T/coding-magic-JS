const dino = document.querySelector(".dino")
const cactus = document.querySelector(".cactus")

document.addEventListener("keydown", jump)
function jump() {
   if( dino.classList != "jump") {
    dino.classList.add("jump")
    if (cactus.style.animation === "none"){
        cactus.style.animationPlayState = 'running';
    }
   }
   setTimeout(function () {
    dino.classList.remove("jump")
   }, 500)
}

let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop > -40) {
        alert("GAME OVER")  
    } 
}, 10)
