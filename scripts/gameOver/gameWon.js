function gameWon() {
    gameOver = true;
    console.log("Game Over!")
    showWinScreen();
}

let winScreenTimer = 20;

function showWinScreen() {
    if (winScreenTimer > 0) {
        winScreenTimer--;
    } else {
        winScreen = true;
    }
}
