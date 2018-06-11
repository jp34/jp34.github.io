var clydeBoxPos = [570, 230];
var clydeAnimationDir = "UP";

function findClydeBoxPos() {
    if (clydeAnimationDir == "DOWN") {
        clydeBoxPos[1]++;
    } else if (clydeAnimationDir == "UP") {
        clydeBoxPos[1]--;
    }

    if (frameRate % 25 == 0) {
        if (clydeAnimationDir == "DOWN") {
            clydeAnimationDir = "UP";
        } else if (clydeAnimationDir == "UP") {
            clydeAnimationDir = "DOWN";
        }
    }
}
