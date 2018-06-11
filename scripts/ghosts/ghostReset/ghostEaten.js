var blinkyEaten = false;
var pinkyEaten = false;
var inkyEaten = false;
var clydeEaten = false;


function eatBlinky() {
    score += 200;
    scatterModeBlinky = false;
    blinkyEaten = true;
}

function eatPinky() {
    score += 200;
    scatterModePinky = false;
    pinkyEaten = true;
}

function eatInky() {
    score += 200;
    scatterModeInky = false;
    inkyEaten = true;
}

function eatClyde() {
    score += 200;
    scatterModeClyde = false;
    clydeEaten = true;
}

function checkGhostReset() {
    if (blinkyEaten == true) {
        if (blinky.x == 510) {
            if (blinky.y == 120) {
                blinkyEaten = false;
            }
        }
    }

    if (pinkyEaten == true) {
        if (pinky.x == 510) {
            if (pinky.y == 120) {
                pinkyEaten = false;
            }
        }
    }

    if (inkyEaten == true) {
        if (inky.x == 510) {
            if (inky.y == 120) {
                inkyEaten = false;
            }
        }
    }

    if (clydeEaten == true) {
        if (clyde.x == 510) {
            if (clyde.y == 120) {
                clydeEaten = false;
            }
        }
    }
}
