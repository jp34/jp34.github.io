// Canvas
var context;
var height = 540;
var width = 1080;

// Pacman
var mouthOpen = true;
var count = 1;

function drawElements() {
    context = document.getElementById('mainCanvas').getContext('2d');

    clearCanvas();

    drawWalls();
    drawPickups();

    drawBlinky(false);
    drawPinky(pinkyAnimation);
    drawInky(inkyAnimation);
    drawClyde(clydeAnimation);

    if (deathAnimationStarted == false) {
        drawPacman();
    } else {
        drawDeathScene();
    }

    if (showTargets == true) {
        drawPinkyTarget();
        drawBlinkyTarget();
        drawInkyTarget();
        drawClydeTarget();
    }
}

function drawSquare() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(510, 120, 60, 60);
}

function clearCanvas() {
    context.clearRect(0, 0, width, height);
}

// Blinky
function drawBlinkyTarget() {
    context.fillStyle = "rgb(255, 0, 0, 0.75)";
    context.fillRect(blinkyTarget[0] + 15, blinkyTarget[1] + 15, 30, 30);
}

// Pinky
function drawPinkyTarget() {
    context.fillStyle = "rgb(231, 164, 251, 0.75)";
    context.fillRect(pinkyTarget[0] + 15, pinkyTarget[1] + 15, 30, 30);
}

// Inky
function drawInkyTarget() {
    context.fillStyle = "rgb(28, 216, 215, 0.75)";
    context.fillRect(inkyTarget[0] + 15, inkyTarget[1] + 15, 30, 30);
}

// Clyde
function drawClydeTarget() {
    context.fillStyle = "rgb(253, 142, 9, 0.75)";
    context.fillRect(clydeTarget[0] + 15, clydeTarget[1] + 15, 30, 30);
}
