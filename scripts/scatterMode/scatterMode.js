function startScatterMode() {
    scatterModeBlinky = true;
    scatterModePinky = true;
    scatterModeInky = true;
    scatterModeClyde = true;
}

function endScatterMode() {
    scatterModeBlinky = false;
    scatterModePinky = false;
    scatterModeInky = false;
    scatterModeClyde = false;
}

function updateScatterSpeeds() {
    if (scatterModeBlinky == true) {
        blinky.speed = 3;
    } else {
        blinky.speed = 5;
    }

    if (scatterModePinky == true) {
        pinky.speed = 3;
    } else {
        pinky.speed = 4;
    }

    if (scatterModeInky == true) {
        inky.speed = 3;
    } else {
        inky.speed = 4;
    }

    if (scatterModeClyde == true) {
        inky.speed = 3;
    } else {
        inky.speed = 4;
    }
}

function blinkyScatterTarget() {
    let target;
    if (blinky.x < 540) {
        target = [1020, 240];
    } else {
        target = [30, 240];
    }
    return target
}

function pinkyScatterTarget() {
    let target;
    if (pinky.x < 540) {
        target = [1020, 240];
    } else {
        target = [30, 240];
    }
    return target
}

function inkyScatterTarget() {
    let target;
    if (inky.x < 540) {
        target = [1020, 240];
    } else {
        target = [30, 240];
    }
    return target
}

function clydeScatterTarget() {
    let target;
    if (clyde.x < 540) {
        target = [1020, 240];
    } else {
        target = [30, 240];
    }
    return target
}
