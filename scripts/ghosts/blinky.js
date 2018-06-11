let blinkyStart = [510, 120];

let blinky = new Ghost(blinkyStart[0], blinkyStart[1], 5);

var blinkyDir = "LEFT";
var newBlinkyDir = "LEFT";
var blinkyAxis = "X";

var blinkyTile = [blinkyStart[0], blinkyStart[1]];
var blinkyTarget = [];

var newBlinkyMove = [];

function runBlinky() {
    isBlinkyStuck();
    blinkyCurrentTile();
    findBlinkyTarget();
    findBlinkyMove();
    findBlinkyDirection();
    changeBlinkyDirection();
    moveBlinky();
}

// Find Current Tile
function blinkyCurrentTile() {
    var x = blinky.x + 30;
    var y = blinky.y + 30;
    for (var i = 0; i < boardCoordinates.length; i++) {
        for (var j = 0; j < boardCoordinates[0].length; j++) {
            if (boardCoordinates[i][j][0] < x && (boardCoordinates[i][j][0] + 60) > x) {
                if (boardCoordinates[i][j][1] < y && (boardCoordinates[i][j][1] + 60) > y) {
                    blinkyTile = [boardCoordinates[i][j][0], boardCoordinates[i][j][1]];
                }
            }
        }
    }
}

function blinkyAtNode() {
    let x = blinky.x + 30;
    let y = blinky.y + 30;

    for (var i = 0; i < nodeX.length; i++) {
        for (var j = 0; j < nodeY.length; j++) {
            if (x < nodeX[i] + 5 && x > nodeX[i] - 5) {
                if (y < nodeY[j] + 5 && y > nodeY[j] - 5) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Find Target
function findBlinkyTarget() {
    if (scatterModeBlinky == false) {
        if (blinkyEaten == false) {
            blinkyTarget = pacmanTile;
        } else {
            blinkyTarget = [510, 120];
        }
    } else {
        blinkyTarget = [0, 0];
    }
}

// Find if blinky has become stuck
let currentPosition = [blinkyTile[0], blinkyTile[1]];
let lastPosition;
let delay = 15;

function isBlinkyStuck() {
    if (delay == 0) {
        lastPosition = currentPosition;
        currentPosition = [blinkyTile[0], blinkyTile[1]];
        if (currentPosition[0] == lastPosition[0]) {
            if (currentPosition[1] == lastPosition[1]) {
                if (newBlinkyDir == "LEFT") {
                    blinky.dir = "RIGHT";
                    blinkyDir = "RIGHT";
                    newBlinkyDir = "RIGHT";
                } else if (newBlinkyDir == "RIGHT") {
                    blinky.dir = "LEFT";
                    blinkyDir = "LEFT";
                    newBlinkyDir = "LEFT";
                } else if (newBlinkyDir == "UP") {
                    blinky.dir = "DOWN";
                    blinkyDir = "DOWN";
                    newBlinkyDir = "DOWN";
                } else if (newBlinkyDir == "DOWN") {
                    blinky.dir = "UP";
                    blinkyDir = "UP";
                    newBlinkyDir = "UP";
                }
            }
        }
        delay = 15;
    } else {
        delay--;
    }
}

// Find move and set direction
function findBlinkyMove() {
    let grid = new PF.Grid(board);
    let finder = new PF.AStarFinder();

    let start = [Math.floor(blinkyTile[0] / 60), Math.floor(blinkyTile[1] / 60)];
    let end = [Math.floor(blinkyTarget[0] / 60), Math.floor(blinkyTarget[1] / 60)];

    let path = finder.findPath(start[0], start[1], end[0], end[1], grid);

    if (path.length > 1) {
        newBlinkyMove = [path[1][0], path[1][1]];
    }
}

var blinkyMove = [5, 2];
function findBlinkyDirection() {
    let lastMove = blinkyMove;
    let newMove = newBlinkyMove;
    let axis = blinkyAxis;
    let atNode = blinkyAtNode();

    if (newMove[0] != lastMove[0]) {
        if (newMove[0] > lastMove[0]) {
            newBlinkyDir = "RIGHT";
        } else if (newMove[0] < lastMove[0]) {
            newBlinkyDir = "LEFT";
        }
    } else if (newMove[1] != lastMove[1]) {
        if (newMove[1] > lastMove[1]) {
            newBlinkyDir = "DOWN";
        } else if (newMove[1] < lastMove[1]) {
            newBlinkyDir = "UP";
        }
    }
    blinkyMove = newMove;
}

let newBlinkyAxis;

function changeBlinkyDirection() {
    let dir = newBlinkyDir;
    let newAxis = newBlinkyAxis;

    if (dir == "LEFT" || dir == "RIGHT") {
        newAxis = "X";
    } if (dir == "UP" || dir == "DOWN") {
        newAxis = "Y";
    }

    let atNode = blinkyAtNode();

    if (newAxis != blinkyAxis) {
        if (atNode == true) {
            blinkyAxis = newAxis;
            blinkyDir = newBlinkyDir;
        }
    }
}

// Move blinky
function moveBlinky() {
    var moveX = blinky.x + 30;
    var moveY = blinky.y + 30;
    var moveDir = blinkyDir;

    if (moveDir == "UP") {
        if (moveX == 150 || moveX == 930) {
            if (moveY > 150) {
                blinky.y -= blinky.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY > 390 || moveY <= 150) {
                if (moveY > 30) {
                    blinky.y -= blinky.speed;
                }
            }
        } else {
            if (moveY > 30) {
                blinky.y -= blinky.speed;
            }
        }
    } else if (moveDir == "DOWN") {
        if (moveX == 150 || moveX == 930) {
            if (moveY < 390) {
                blinky.y += blinky.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY < 150 || moveY > 330) {
                if (moveY < 510) {
                    blinky.y += blinky.speed;
                }
            }
        } else {
            if (moveY < 510) {
                blinky.y += blinky.speed;
            }
        }
    } else if (moveDir == "LEFT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX > 150) {
                blinky.x -= blinky.speed;
            }
        } else if (moveY == 270) {
            if (moveX > 750 || moveX <= 330) {
                if (moveX > 30) {
                    blinky.x -= blinky.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX > 30 && moveX <= 210) {
                blinky.x -= blinky.speed;
            } else if (moveX > 330 && moveX <= 750) {
                blinky.x -= blinky.speed;
            } else if (moveX > 870 && moveX <= 1050) {
                blinky.x -= blinky.speed;
            }
        } else {
            if (moveX > 30) {
                blinky.x -= blinky.speed;
            }
        }
    } else if (moveDir == "RIGHT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX < 930) {
                blinky.x += blinky.speed;
            }
        } else if (moveY == 270) {
            if (moveX >= 750 || moveX < 330) {
                if (moveX < 1050) {
                    blinky.x += blinky.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX < 210) {
                blinky.x += blinky.speed;
            } else if (moveX >= 330 && moveX < 750) {
                blinky.x += blinky.speed;
            } else if (moveX >= 870 && moveX < 1050) {
                blinky.x += blinky.speed;
            }
        } else {
            if (moveX < 1050) {
                blinky.x += blinky.speed;
            }
        }
    }
}
