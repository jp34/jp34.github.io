var inkyBoxPos = [450, 230];
var inkyAnimationDir = "UP";

function findInkyBoxPos() {
    if (inkyAnimationDir == "DOWN") {
        inkyBoxPos[1]++;
    } else if (inkyAnimationDir == "UP") {
        inkyBoxPos[1]--;
    }

    if (frameRate % 25 == 0) {
        if (inkyAnimationDir == "DOWN") {
            inkyAnimationDir = "UP";
        } else if (inkyAnimationDir == "UP") {
            inkyAnimationDir = "DOWN";
        }
    }
}
