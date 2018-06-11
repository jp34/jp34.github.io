let inkyStart = [570, 120];

let inky = new Ghost(inkyStart[0], inkyStart[1], 4);

var inkyDir = "LEFT";
var newInkyDir = "LEFT";
var inkyAxis = "X";

var inkyTile = [inkyStart[0], inkyStart[1]];
var inkyTarget = [];

var newInkyMove = [];

var inkyAnimation = false;
var inkyAnimationDelay = 800;

function runInky() {
    if (inkyAnimation == true) {
        isInkyStuck();
        inkyCurrentTile();
        findInkyTarget();
        findInkyMove();
        findInkyDirection();
        changeInkyDirection();
        moveInky();
    } else if (inkyAnimationDelay == 0) {
        inkyAnimation = true;
    }
}

// Find Current Tile
function inkyCurrentTile() {
    var x = inky.x + 30;
    var y = inky.y + 30;
    for (var i = 0; i < boardCoordinates.length; i++) {
        for (var j = 0; j < boardCoordinates[0].length; j++) {
            if (boardCoordinates[i][j][0] < x && (boardCoordinates[i][j][0] + 60) > x) {
                if (boardCoordinates[i][j][1] < y && (boardCoordinates[i][j][1] + 60) > y) {
                    inkyTile = [boardCoordinates[i][j][0], boardCoordinates[i][j][1]];
                }
            }
        }
    }
}

function inkyAtNode() {
    let x = inky.x + 30;
    let y = inky.y + 30;

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
let slope;
let tempTarget;

function findInkyTarget() {
    if (scatterModeInky == false) {
        inkyTarget = pacmanTile;
    } else {
        inkyTarget = [0, 480];
    }
}

// Find if inky has become stuck
let currentInkyPosition = [inkyTile[0], inkyTile[1]];
let lastInkyPosition;
let inkyDelay = 15;

function isInkyStuck() {
    if (inkyDelay == 0) {
        lastInkyPosition = currentInkyPosition;
        currentInkyPosition = [inkyTile[0], inkyTile[1]];
        if (currentInkyPosition[0] == lastInkyPosition[0]) {
            if (currentInkyPosition[1] == lastInkyPosition[1]) {
                if (newInkyDir == "LEFT") {
                    inky.dir = "RIGHT";
                    inkyDir = "RIGHT";
                    newInkyDir = "RIGHT";
                } else if (newInkyDir == "RIGHT") {
                    inky.dir = "LEFT";
                    inkyDir = "LEFT";
                    newInkyDir = "LEFT";
                } else if (newInkyDir == "UP") {
                    inky.dir = "DOWN";
                    inkyDir = "DOWN";
                    newInkyDir = "DOWN";
                } else if (newInkyDir == "DOWN") {
                    inky.dir = "UP";
                    inkyDir = "UP";
                    newInkyDir = "UP";
                }
            }
        }
        inkyDelay = 15;
    } else {
        inkyDelay--;
    }
}

// Find move and set direction
function findInkyMove() {
    let grid = new PF.Grid(board);
    let finder = new PF.AStarFinder();

    let start = [Math.floor(inkyTile[0] / 60), Math.floor(inkyTile[1] / 60)];
    let end = [Math.floor(inkyTarget[0] / 60), Math.floor(inkyTarget[1] / 60)];

    let path = finder.findPath(start[0], start[1], end[0], end[1], grid);

    if (path.length > 1) {
        newInkyMove = [path[1][0], path[1][1]];
    }
}

var inkyMove = [5, 2];
function findInkyDirection() {
    let lastMove = inkyMove;
    let newMove = newInkyMove;
    let axis = inkyAxis;
    let atNode = inkyAtNode();

    if (newMove[0] != lastMove[0]) {
        if (newMove[0] > lastMove[0]) {
            newInkyDir = "RIGHT";
        } else if (newMove[0] < lastMove[0]) {
            newInkyDir = "LEFT";
        }
    } else if (newMove[1] != lastMove[1]) {
        if (newMove[1] > lastMove[1]) {
            newInkyDir = "DOWN";
        } else if (newMove[1] < lastMove[1]) {
            newInkyDir = "UP";
        }
    }
    inkyMove = newMove;
}

let newInkyAxis;

function changeInkyDirection() {
    let dir = newInkyDir;
    let newAxis = newInkyAxis;

    if (dir == "LEFT" || dir == "RIGHT") {
        newAxis = "X";
    } if (dir == "UP" || dir == "DOWN") {
        newAxis = "Y";
    }

    let atNode = inkyAtNode();

    if (newAxis != inkyAxis) {
        if (atNode == true) {
            inkyAxis = newAxis;
            inkyDir = newInkyDir;
        }
    }
}

// Move inky
function moveInky() {
    var moveX = inky.x + 30;
    var moveY = inky.y + 30;
    var moveDir = inkyDir;

    if (moveDir == "UP") {
        if (moveX == 150 || moveX == 930) {
            if (moveY > 150) {
                inky.y -= inky.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY > 390 || moveY <= 150) {
                if (moveY > 30) {
                    inky.y -= inky.speed;
                }
            }
        } else {
            if (moveY > 30) {
                inky.y -= inky.speed;
            }
        }
    } else if (moveDir == "DOWN") {
        if (moveX == 150 || moveX == 930) {
            if (moveY < 390) {
                inky.y += inky.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY < 150 || moveY > 330) {
                if (moveY < 510) {
                    inky.y += inky.speed;
                }
            }
        } else {
            if (moveY < 510) {
                inky.y += inky.speed;
            }
        }
    } else if (moveDir == "LEFT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX > 150) {
                inky.x -= inky.speed;
            }
        } else if (moveY == 270) {
            if (moveX > 750 || moveX <= 330) {
                if (moveX > 30) {
                    inky.x -= inky.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX > 30 && moveX <= 210) {
                inky.x -= inky.speed;
            } else if (moveX > 330 && moveX <= 750) {
                inky.x -= inky.speed;
            } else if (moveX > 870 && moveX <= 1050) {
                inky.x -= inky.speed;
            }
        } else {
            if (moveX > 30) {
                inky.x -= inky.speed;
            }
        }
    } else if (moveDir == "RIGHT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX < 930) {
                inky.x += inky.speed;
            }
        } else if (moveY == 270) {
            if (moveX >= 750 || moveX < 330) {
                if (moveX < 1050) {
                    inky.x += inky.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX < 210) {
                inky.x += inky.speed;
            } else if (moveX >= 330 && moveX < 750) {
                inky.x += inky.speed;
            } else if (moveX >= 870 && moveX < 1050) {
                inky.x += inky.speed;
            }
        } else {
            if (moveX < 1050) {
                inky.x += inky.speed;
            }
        }
    }
}
