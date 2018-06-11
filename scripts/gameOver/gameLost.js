var deathAnimationStarted = false;

function gameLost() {
    gameOver = true;
    console.log("Game Over!");
    playSound("pauseSiren");
    playSound("pauseChomp");
    playSound("playDeath");

    deathAnimationStarted = true;
}

let loseScreenTimer = 20;

function showLoseScreen() {
    if (loseScreenTimer > 0) {
        loseScreenTimer--;
    } else {
        loseScreen = true;
    }
}
