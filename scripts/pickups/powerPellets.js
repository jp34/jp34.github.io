let pelletEaten = false;
let pelletDelay = 0;
function powerPelletEaten() {
    playSound("playPellet");
    startScatterMode();
    pelletEaten = true;
    pelletDelay = 200;
}

function powerPellets() {
    if (pelletDelay > 0) {
        pelletDelay--;
    } else {
        endPowerPellets();
    }
}

function endPowerPellets() {
    playSound("pausePellet");
    endScatterMode();
    pelletEaten = false;
}
