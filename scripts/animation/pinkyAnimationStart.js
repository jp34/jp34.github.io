var pinkyBoxPos = [510, 250];
var pinkyAnimationDir = "DOWN";

function findPinkyBoxPos() {
    if (pinkyAnimationDir == "DOWN") {
        pinkyBoxPos[1]++;
    } else if (pinkyAnimationDir == "UP") {
        pinkyBoxPos[1]--;
    }

    if (frameRate % 25 == 0) {
        if (pinkyAnimationDir == "DOWN") {
            pinkyAnimationDir = "UP";
        } else if (pinkyAnimationDir == "UP") {
            pinkyAnimationDir = "DOWN";
        }
    }
}
