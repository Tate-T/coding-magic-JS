const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

document.addEventListener("keydown", jump)
function jump(event) {
   if(event.key === "w" && dino.classList != "jump") {
    cactus.classList.add("cactusMove")+
    dino.classList.add("jump")
    if (cactus.style.animation === "none"){
        cactus.style.animationPlayState = 'running';
    }
   }
   setTimeout(function () {
    dino.classList.remove("jump")
   }, 600)
}

let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop > -40) {
        cactus.classList.remove("cactusMove")
        alert("GAME OVER")
    } 
}, 10)