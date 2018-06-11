var gameStarted = false;
var gameOver = false;
var frameRate = 0;
var startDelay = 200;
var score = 0;
var loseScreen = false;
var winScreen = false;

var scatterModeBlinky = false;
var scatterModePinky = false;
var scatterModeInky = false;
var scatterModeClyde = false;

// CHECK THESE OUT
var showTargets = false;
var godMode = false;

function onLoad() {
    drawElements();
    setupResultScreens();
    updateReady();
}

function onStart() {
    if (gameStarted == false) {
        playSound("beginning");
        main();
        gameStarted = true;
    }
}

function main() {
    if (gameOver == false) {
        logging();

        if (startDelay == 0) {
            pacman();
            runBlinky();
        } else {
            startDelay--;
        }

        if (pinkyAnimationDelay == 0) {
            runPinky();
        } else {
            pinkyAnimationDelay--;
            findPinkyBoxPos();
        }

        if (inkyAnimationDelay == 0) {
            runInky();
        } else {
            inkyAnimationDelay--;
            findInkyBoxPos();
        }

        if (clydeAnimationDelay == 0) {
            runClyde();
        } else {
            clydeAnimationDelay--;
            findClydeBoxPos();
        }

        checkGhostReset();
        updateScatterSpeeds();

        playSound("siren");
        checkStatus();
        powerPellets();
    }

    document.onkeydown = checkKeyDown;
    drawElements();
    updateScore();
    updateReady();
    setupResultScreens();
    interval();
}

function logging() {
}

function interval() {
        frameRate++;
        var timer = setTimeout(main, 20);
}

function updateScore() {
    let scoreDisplay;
    let newScoreDisplay;

    if (score == 0) {
        scoreDisplay = "00";
    } else {
        scoreDisplay = score;
    }

    newScoreDisplay = "Score: " + scoreDisplay;
    document.getElementById('scoreLabel').innerHTML = newScoreDisplay;
    newScoreDisplay = "Your Score: " + scoreDisplay;
    document.getElementById('yourWinScore').innerHTML = newScoreDisplay;
    document.getElementById('yourLoseScore').innerHTML = newScoreDisplay;
}

function updateReady() {
    let ready = document.getElementById('ready');

    if (startDelay == 200) {
        ready.style.display = "none";
    } else if (startDelay > 0) {
        ready.style.display = "block";
    } else {
        ready.style.display = "none";
    }
}

function setupResultScreens() {
    let win = document.getElementById('winScreen');
    let lose = document.getElementById('loseScreen');

    if (loseScreen == true) {
        win.style.display = "none";
        lose.style.display = "block";
    } else if (winScreen == true) {
        win.style.display = "block";
        lose.style.display = "none";
    } else {
        win.style.display = "none";
        lose.style.display = "none";
    }
}
