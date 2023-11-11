const ball = document.querySelector(".ball");
const field = document.querySelector(".game");
const ballWidth = ball.clientWidth;
const ballHeight = ball.clientHeight;

ball.style.left = field.clientWidth / 2 - ballWidth / 2 + "px"
ball.style.top = field.clientHeight / 2 - ballHeight / 2 + "px"

field.addEventListener("click", moveBall)

function moveBall(event) {
    console.log(event.clientY)
    ball.style.left = event.pageX - field.offsetLeft - ballWidth / 2 + "px"
    ball.style.top = event.pageY - field.offsetTop - ballHeight / 2 + "px"
    if (parseInt(ball.style.left) < 0){
        ball.style.left = "0px"
    }
    if (parseInt(ball.style.top) < 0){
        ball.style.top = "0px"
    }
    if (parseInt(ball.style.left) > field.clientWidth - ballWidth){
        ball.style.left = field.clientWidth - ballWidth + "px"
    }
    if (parseInt(ball.style.top) > field.clientHeight - ballHeight){
        ball.style.top = field.clientHeight - ballHeight + "px"
    }
}