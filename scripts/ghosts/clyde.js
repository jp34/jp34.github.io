let clydeStart = [570, 120];

let clyde = new Ghost(clydeStart[0], clydeStart[1], 4);

var clydeDir = "LEFT";
var newClydeDir = "LEFT";
var clydeAxis = "X";

var clydeTile = [clydeStart[0], clydeStart[1]];
var clydeTarget = [];

var newClydeMove = [];

var clydeAnimation = false;
var clydeAnimationDelay = 1000;

function runClyde() {
    if (clydeAnimation == true) {
        isClydeStuck();
        clydeCurrentTile();
        findClydeTarget();
        findClydeMove();
        findClydeDirection();
        changeClydeDirection();
        moveClyde();
    } else if (clydeAnimationDelay == 0) {
        clydeAnimation = true;
    }
}

// Find Current Tile
function clydeCurrentTile() {
    var x = clyde.x + 30;
    var y = clyde.y + 30;
    for (var i = 0; i < boardCoordinates.length; i++) {
        for (var j = 0; j < boardCoordinates[0].length; j++) {
            if (boardCoordinates[i][j][0] < x && (boardCoordinates[i][j][0] + 60) > x) {
                if (boardCoordinates[i][j][1] < y && (boardCoordinates[i][j][1] + 60) > y) {
                    clydeTile = [boardCoordinates[i][j][0], boardCoordinates[i][j][1]];
                }
            }
        }
    }
}

function clydeAtNode() {
    let x = clyde.x + 30;
    let y = clyde.y + 30;

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
var clydeBackupTargets = [[0, 0], [1020, 480]];
var clydeBackup = [0, 0];
var newClydeTargetDelay = 100;
function findClydeTarget() {
    if (scatterModeClyde == false) {
        let distance = [Math.abs((pacmanTile[0] / 60) - (clydeTile[0] / 60)),
                        Math.abs((pacmanTile[1] / 60) - (clydeTile[1] / 60))]

        if (distance[0] >= 6) {
            clydeTarget = pacmanTile;
        } else if (distance[1] >= 6) {
            clydeTarget = pacmanTile;
        } else {
            if (newClydeTargetDelay == 0) {
                let randomInt = Math.floor(Math.random() * 2) + 0;
                clydeBackup = clydeBackupTargets[randomInt];
            } else {
                newClydeTargetDelay--;
            }
            clydeTarget = clydeBackup;
        }
    } else {
        clydeTarget = [1020, 480];
    }
}

// Find if clyde has become stuck
let currentClydePosition = [clydeTile[0], clydeTile[1]];
let lastClydePosition;
let clydeDelay = 15;

function isClydeStuck() {
    if (clydeDelay == 0) {
        lastClydePosition = currentClydePosition;
        currentClydePosition = [clydeTile[0], clydeTile[1]];
        if (currentClydePosition[0] == lastClydePosition[0]) {
            if (currentClydePosition[1] == lastClydePosition[1]) {
                if (newClydeDir == "LEFT") {
                    clyde.dir = "RIGHT";
                    clydeDir = "RIGHT";
                    newClydeDir = "RIGHT";
                } else if (newClydeDir == "RIGHT") {
                    clyde.dir = "LEFT";
                    clydeDir = "LEFT";
                    newClydeDir = "LEFT";
                } else if (newClydeDir == "UP") {
                    clyde.dir = "DOWN";
                    clydeDir = "DOWN";
                    newClydeDir = "DOWN";
                } else if (newClydeDir == "DOWN") {
                    clyde.dir = "UP";
                    clydeDir = "UP";
                    newClydeDir = "UP";
                }
            }
        }
        clydeDelay = 15;
    } else {
        clydeDelay--;
    }
}

// Find move and set direction
function findClydeMove() {
    let grid = new PF.Grid(board);
    let finder = new PF.AStarFinder();

    let start = [Math.floor(clydeTile[0] / 60), Math.floor(clydeTile[1] / 60)];
    let end = [Math.floor(clydeTarget[0] / 60), Math.floor(clydeTarget[1] / 60)];

    let path = finder.findPath(start[0], start[1], end[0], end[1], grid);

    if (path.length > 1) {
        newClydeMove = [path[1][0], path[1][1]];
    }
}

var clydeMove = [5, 2];
function findClydeDirection() {
    let lastMove = clydeMove;
    let newMove = newClydeMove;
    let axis = clydeAxis;
    let atNode = clydeAtNode();

    if (newMove[0] != lastMove[0]) {
        if (newMove[0] > lastMove[0]) {
            newClydeDir = "RIGHT";
        } else if (newMove[0] < lastMove[0]) {
            newClydeDir = "LEFT";
        }
    } else if (newMove[1] != lastMove[1]) {
        if (newMove[1] > lastMove[1]) {
            newClydeDir = "DOWN";
        } else if (newMove[1] < lastMove[1]) {
            newClydeDir = "UP";
        }
    }
    clydeMove = newMove;
}

let newClydeAxis;

function changeClydeDirection() {
    let dir = newClydeDir;
    let newAxis = newClydeAxis;

    if (dir == "LEFT" || dir == "RIGHT") {
        newAxis = "X";
    } if (dir == "UP" || dir == "DOWN") {
        newAxis = "Y";
    }

    let atNode = clydeAtNode();

    if (newAxis != clydeAxis) {
        if (atNode == true) {
            clydeAxis = newAxis;
            clydeDir = newClydeDir;
        }
    }
}

// Move clyde
function moveClyde() {
    var moveX = clyde.x + 30;
    var moveY = clyde.y + 30;
    var moveDir = clydeDir;

    if (moveDir == "UP") {
        if (moveX == 150 || moveX == 930) {
            if (moveY > 150) {
                clyde.y -= clyde.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY > 390 || moveY <= 150) {
                if (moveY > 30) {
                    clyde.y -= clyde.speed;
                }
            }
        } else {
            if (moveY > 30) {
                clyde.y -= clyde.speed;
            }
        }
    } else if (moveDir == "DOWN") {
        if (moveX == 150 || moveX == 930) {
            if (moveY < 390) {
                clyde.y += clyde.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY < 150 || moveY > 330) {
                if (moveY < 510) {
                    clyde.y += clyde.speed;
                }
            }
        } else {
            if (moveY < 510) {
                clyde.y += clyde.speed;
            }
        }
    } else if (moveDir == "LEFT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX > 150) {
                clyde.x -= clyde.speed;
            }
        } else if (moveY == 270) {
            if (moveX > 750 || moveX <= 330) {
                if (moveX > 30) {
                    clyde.x -= clyde.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX > 30 && moveX <= 210) {
                clyde.x -= clyde.speed;
            } else if (moveX > 330 && moveX <= 750) {
                clyde.x -= clyde.speed;
            } else if (moveX > 870 && moveX <= 1050) {
                clyde.x -= clyde.speed;
            }
        } else {
            if (moveX > 30) {
                clyde.x -= clyde.speed;
            }
        }
    } else if (moveDir == "RIGHT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX < 930) {
                clyde.x += clyde.speed;
            }
        } else if (moveY == 270) {
            if (moveX >= 750 || moveX < 330) {
                if (moveX < 1050) {
                    clyde.x += clyde.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX < 210) {
                clyde.x += clyde.speed;
            } else if (moveX >= 330 && moveX < 750) {
                clyde.x += clyde.speed;
            } else if (moveX >= 870 && moveX < 1050) {
                clyde.x += clyde.speed;
            }
        } else {
            if (moveX < 1050) {
                clyde.x += clyde.speed;
            }
        }
    }
}
