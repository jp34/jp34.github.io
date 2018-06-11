function checkStatus() {
    checkWin();
    checkLoss();
}

function checkWin() {
    if (foodX.length < 1) {
        if (powerPelletX.length < 1) {
            gameWon();
        }
    }
}

function checkLoss() {
    if (godMode == false) {
        if (blinkyTile[0] == pacmanTile[0]) {
            if (blinkyTile[1] == pacmanTile[1]) {
                if (scatterModeBlinky == false) {
                    if (blinkyEaten == false) {
                        console.log("BLINKY");
                        gameLost();
                    }
                } else {
                    eatBlinky();
                    playSound("playEatGhost");
                }
            }
        } else if (pinkyTile[0] == pacmanTile[0]) {
            if (pinkyTile[1] == pacmanTile[1]) {
                if (scatterModePinky == false) {
                    if (pinkyEaten == false) {
                        console.log("PINKY");
                        gameLost();
                    }
                } else {
                    eatPinky();
                    playSound("playEatGhost");
                }
            }
        } else if (inkyTile[0] == pacmanTile[0]) {
            if (inkyTile[1] == pacmanTile[1]) {
                if (scatterModeInky == false) {
                    if (inkyEaten == false) {
                        console.log("INKY");
                        gameLost();
                    }
                } else {
                    eatInky();
                    playSound("playEatGhost");
                }
            }
        } else if (clydeTile[0] == pacmanTile[0]) {
            if (clydeTile[1] == pacmanTile[1]) {
                if (scatterModeClyde == false) {
                    if (clydeEaten == false) {
                        console.log("CLYDE");
                        gameLost();
                    }
                } else {
                    eatClyde();
                    playSound("playEatGhost");
                }
            }
        }
    }
}
