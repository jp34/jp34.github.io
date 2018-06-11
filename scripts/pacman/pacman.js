const pacmanStart = [540, 390];

let pacdaddy = new Pacman(pacmanStart[0], pacmanStart[1]);

var direction = "NONE";
var pacmanTile = [pacmanStart[0], pacmanStart[1]];

function pacman() {
    pacdaddy.checkAtNode();
    pacdaddy.eatFood();
    pacdaddy.eatPowerPellet();

    movePacman();
    pacmanCurrentTile();
}

// Find current tile
function pacmanCurrentTile() {
    var x = pacdaddy.x;
    var y = pacdaddy.y;
    for (var i = 0; i < boardCoordinates.length; i++) {
        for (var j = 0; j < boardCoordinates[0].length; j++) {
            if (boardCoordinates[i][j][0] < x && (boardCoordinates[i][j][0] + 60) > x) {
                if (boardCoordinates[i][j][1] < y && (boardCoordinates[i][j][1] + 60) > y) {
                    pacmanTile = [boardCoordinates[i][j][0], boardCoordinates[i][j][1]];
                }
            }
        }
    }
}

// Draw tile
function drawPacmanTile() {
    context.fillStyle = "rgb(0, 120, 0, 0.75)";
    context.fillRect(pacmanTile[0], pacmanTile[1], 60, 60);
}

// Move
function movePacman() {
    var moveX = pacdaddy.x;
    var moveY = pacdaddy.y;
    var moveDir = pacdaddy.dir;


    if (moveDir == "UP") {
        if (moveX == 150 || moveX == 930) {
            if (moveY > 150) {
                pacdaddy.y -= pacdaddy.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY > 390 || moveY <= 150) {
                if (moveY > 30) {
                    pacdaddy.y -= pacdaddy.speed;
                }
            }
        } else {
            if (moveY > 30) {
                pacdaddy.y -= pacdaddy.speed;
            }
        }
    } else if (moveDir == "DOWN") {
        if (moveX == 150 || moveX == 930) {
            if (moveY < 390) {
                pacdaddy.y += pacdaddy.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY < 150 || moveY > 330) {
                if (moveY < 510) {
                    pacdaddy.y += pacdaddy.speed;
                }
            }
        } else {
            if (moveY < 510) {
                pacdaddy.y += pacdaddy.speed;
            }
        }
    } else if (moveDir == "LEFT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX > 150) {
                pacdaddy.x -= pacdaddy.speed;
            }
        } else if (moveY == 270) {
            if (moveX > 750 || moveX <= 330) {
                if (moveX > 30) {
                    pacdaddy.x -= pacdaddy.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX > 30 && moveX <= 210) {
                pacdaddy.x -= pacdaddy.speed;
            } else if (moveX > 330 && moveX <= 750) {
                pacdaddy.x -= pacdaddy.speed;
            } else if (moveX > 870 && moveX <= 1050) {
                pacdaddy.x -= pacdaddy.speed;
            }
        } else {
            if (moveX > 30) {
                pacdaddy.x -= pacdaddy.speed;
            }
        }
    } else if (moveDir == "RIGHT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX < 930) {
                pacdaddy.x += pacdaddy.speed;
            }
        } else if (moveY == 270) {
            if (moveX >= 750 || moveX < 330) {
                if (moveX < 1050) {
                    pacdaddy.x += pacdaddy.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX < 210) {
                pacdaddy.x += pacdaddy.speed;
            } else if (moveX >= 330 && moveX < 750) {
                pacdaddy.x += pacdaddy.speed;
            } else if (moveX >= 870 && moveX < 1050) {
                pacdaddy.x += pacdaddy.speed;
            }
        } else {
            if (moveX < 1050) {
                pacdaddy.x += pacdaddy.speed;
            }
        }
    }
}
