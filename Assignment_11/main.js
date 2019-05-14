//click number
var number = 0;
var clickedNumber = document.getElementById('timesClicked');
//get input color value
var color = document.querySelector('input[name="color"]');
//get input size value
var size = document.querySelector('input[name="size"]');
//get all inputs value
var inputs = document.querySelectorAll('input');
//update value from input
function handleUpdate(e) {
    ballColor = color.value;
    ballRadius = parseInt(size.value);
}
//I dont know what it is but it help?
inputs.forEach(input => input.addEventListener('change', handleUpdate));

//Canvas with ball inside
var canvas = document.getElementById("Game");
var context = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;

var ballColor = color.value;
var ballRadius = parseInt(size.value);

var speedX = 5;
var speedY = 3;
var moveRight = true;
var moveDown = true;

function animate(){
    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //draw the ball
    context.beginPath();
    context.fillStyle = ballColor;
    context.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    context.fill();

    if(ballX + ballRadius >= canvas.width || (ballX - ballRadius <= 0) ){
        moveRight = !moveRight;
    }

    if(ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0){
        moveDown = !moveDown;
    }

    if(moveRight){
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }

    if(moveDown){
        ballY = ballY + speedY;
    } else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('click', function(event) {
    if (ballX-event.clientX < ballRadius && ballY-event.clientY < ballRadius) {
        number += 1;
        clickedNumber.innerHTML = number;
    }
})

$(".btn").click(function(){
    //ballColor = "#333333";
    //ballRadius = "50";
    //number = 0;
    //clickedNumber.innerHTML = number;
    window.location.reload();
});
