const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const menu = document.getElementById("menu");
const bgMusic = document.getElementById("bgMusic");
const hitSound = document.getElementById("hitSound");

const ballImage = new Image();
ballImage.src= "ball.png";

const gravity = 0.3, jump = -9;
let score = 0, gameOver = false, gameStarted = false;

const ball = {
    x : canvas.width/2,
    y: canvas.height/2,
    radius:35,
    dy:0,
    dx:0,
    angle:0,
    rotationSpeed:0
};

function startGame(){
    menu.style.display = "none";
    gameStarted = true;
    bgMusic.play();
    requestAnimationFrame(loop);
}

function resetGame() {
    Object.assign(ball, {
        x: canvas.width / 2,
        y: canvas.height / 2,
        dy: 0,
        dx: 0,
        angle: 0,
        rotationSpeed: 0
    });
    score = 0;
    gameOver = false;

    // Restart the background music
    bgMusic.currentTime = 0;
    bgMusic.play(); 
}

function update() {
    if (gameOver) return;

    ball.dy += gravity;
    ball.y += ball.dy;
    ball.x += ball.dx;
    ball.angle += ball.rotationSpeed;
    ball.rotationSpeed *= 0.98;

    if (ball.y + ball.radius >= canvas.height) {
        gameOver = true;
        bgMusic.pause();  // Stop the music when the game is over
        bgMusic.currentTime = 0; // Reset the music so it starts from the beginning when restarted
        return;
    }

    if (ball.y - ball.radius <= 0) {
        ball.y = ball.radius;
        ball.dy = 0;
    }

    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
        ball.dx *= -0.8;
    }
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(ball.x, ball.y);
    ctx.rotate(ball.angle);
    ctx.drawImage(ballImage, -ball.radius, -ball.radius, ball.radius * 2, ball.radius * 2);
    ctx.restore();

    ctx.fillStyle = "white";
    ctx.font = "25px Roboto";
    ctx.fillText( `Score:${score}`, 10, 30);

    if(gameOver) ctx.fillText("Game Over! Tap to Restart", 80, canvas.height/2);
}

function loop(){
    if(gameStarted){
        update();
        draw();
        requestAnimationFrame(loop);
    }
}


const maxSpeedY = 6;  // Max vertical speed (prevents ball from flying off)
const maxSpeedX = 4;  // Max horizontal speed (prevents extreme side movement)

function tap(event) {
    if (gameOver) return resetGame();

    const { left, top } = canvas.getBoundingClientRect();
    const clickX = event.clientX - left, clickY = event.clientY - top;
    const dist = Math.hypot(clickX - ball.x, clickY - ball.y);

    if (dist <= ball.radius*2.3) {
        ball.dy = jump;
        ball.dx = (ball.x - clickX) * 0.2;
        ball.rotationSpeed = (ball.x - clickX) * 0.01;

        // **Limit vertical speed**
        if (ball.dy < -maxSpeedY) ball.dy = -maxSpeedY;

        // **Limit horizontal speed**
        if (ball.dx > maxSpeedX) ball.dx = maxSpeedX;
        if (ball.dx < -maxSpeedX) ball.dx = -maxSpeedX;

        score++;
        hitSound.currentTime = 0;
        hitSound.play();
    }
}

canvas.addEventListener("click", tap);

