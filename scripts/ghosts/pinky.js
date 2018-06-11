let pinkyStart = [510, 120];

let pinky = new Ghost(pinkyStart[0], pinkyStart[1], 4);

var pinkyDir = "RIGHT";
var newPinkyDir = "RIGHT";
var pinkyAxis = "X";

var pinkyTile = [pinkyStart[0], pinkyStart[1]];
var pinkyTarget = [];

var pinkyAnimation = false;
var pinkyAnimationDelay = 350;

var newPinkyMove = [];

function runPinky() {
    if (pinkyAnimation == true) {
        isPinkyStuck();
        pinkyCurrentTile();
        findPinkyTarget();
        findPinkyMove();
        findPinkyDirection();
        changePinkyDirection();
        movePinky();
    } else if (pinkyAnimationDelay == 0) {
        pinkyAnimation = true;
    }
}

// Find Current Tile
function pinkyCurrentTile() {
    var x = pinky.x + 30;
    var y = pinky.y + 30;
    for (var i = 0; i < boardCoordinates.length; i++) {
        for (var j = 0; j < boardCoordinates[0].length; j++) {
            if (boardCoordinates[i][j][0] < x && (boardCoordinates[i][j][0] + 60) > x) {
                if (boardCoordinates[i][j][1] < y && (boardCoordinates[i][j][1] + 60) > y) {
                    pinkyTile = [boardCoordinates[i][j][0], boardCoordinates[i][j][1]];
                }
            }
        }
    }
}

function pinkyAtNode() {
    let x = pinky.x + 30;
    let y = pinky.y + 30;

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

// Check if pinky has become stuck
let currentPinkyPosition = [pinkyTile[0], pinkyTile[1]];
let lastPinkyPostition;
let pinkyDelay = 5;

function isPinkyStuck() {
    if (pinkyDelay == 0) {
        lastPinkyPostition = currentPinkyPosition;
        currentPinkyPosition = [pinky.x, pinky.y];
        if (currentPinkyPosition[0] == lastPinkyPostition[0]) {
            if (currentPinkyPosition[1] == lastPinkyPostition[1]) {
                if (newPinkyDir == "LEFT") {
                    pinky.dir = "RIGHT";
                    pinkyDir = "RIGHT";
                    newPinkyDir = "RIGHT";
                } else if (newPinkyDir == "RIGHT") {
                    pinky.dir = "LEFT";
                    pinkyDir = "LEFT";
                    newPinkyDir = "LEFT";
                } else if (newPinkyDir == "UP") {
                    pinky.dir = "DOWN";
                    pinkyDir = "DOWN";
                    newPinkyDir = "DOWN";
                } else if (newPinkyDir == "DOWN") {
                    pinky.dir = "UP";
                    pinkyDir = "UP";
                    newPinkyDir = "UP";
                }
            }
        }
        pinkyDelay = 15;
    } else {
        pinkyDelay--;
    }
}

// Find Target
function findPinkyTarget() {
    let possibleMoves = [];

    if (direction == "UP") {
        // [X, Y, Tile Score]
        possibleMoves = [[(pacmanTile[0] / 60) - 1, pacmanTile[1] / 60, 1], // Left of Pacman
                         [(pacmanTile[0] / 60) + 1, pacmanTile[1] / 60, 2], // Right of Pacman
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) - 1, 3], // 1 Up, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) - 1, 4], // 1 Up, Right
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) - 1, 5], // 1 Up
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) - 2, 6], // 2 Up, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) - 2, 7], // 2 Up, Right
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) - 2, 15], // 2 Up, Best Tile
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) - 3, 8], // 3 Up, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) - 3, 9], // 3 Up, Right
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) - 2, 10]]; // 3 Up
    } else if (direction == "DOWN") {
        // [X, Y, Tile Score]
        possibleMoves = [[(pacmanTile[0] / 60) - 1, pacmanTile[1] / 60, 1], // Left of Pacman
                         [(pacmanTile[0] / 60) + 1, pacmanTile[1] / 60, 2], // Right of Pacman
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) + 1, 3], // 1 Down, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) + 1, 4], // 1 Down, Right
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) + 1, 5], // 1 Down
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) + 2, 6], // 2 Down, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) + 2, 7], // 2 Down, Right
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) + 2, 15], // 2 Down, Best Tile
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) + 3, 8], // 3 Down, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) + 3, 9], // 3 Down, Right
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) + 3, 10]]; // 3 Down
    } else if (direction == "LEFT") {
        // [X, Y, Tile Score]
        possibleMoves = [[pacmanTile[0] / 60, (pacmanTile[1] / 60) - 1, 1], // Under Pacman
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) + 1, 2], // Above Pacman
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) - 1, 3], // 1 Left, Up
                         [(pacmanTile[0] / 60) - 1, (pacmanTile[1] / 60) + 1, 4], // 1 Left, Right
                         [(pacmanTile[0] / 60) - 1, pacmanTile[1] / 60, 5], // 1 Up
                         [(pacmanTile[0] / 60) - 2, (pacmanTile[1] / 60) - 1, 6], // 2 Left, Up
                         [(pacmanTile[0] / 60) - 2, (pacmanTile[1] / 60) + 1, 7], // 2 Left, Right
                         [(pacmanTile[0] / 60) - 2, pacmanTile[1] / 60, 15], // 2 Left, Best Tile
                         [(pacmanTile[0] / 60) - 3, (pacmanTile[1] / 60) - 1, 8], // 3 Left, Up
                         [(pacmanTile[0] / 60) - 3, (pacmanTile[1] / 60) + 1, 9], // 3 Left, Right
                         [(pacmanTile[0] / 60) - 3, pacmanTile[1] / 60, 10]]; // 3 Left
    } else if (direction == "RIGHT") {
        // [X, Y, Tile Score]
        possibleMoves = [[pacmanTile[0] / 60, (pacmanTile[1] / 60) - 1, 1], // Under Pacman
                         [pacmanTile[0] / 60, (pacmanTile[1] / 60) + 1, 2], // Above Pacman
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) - 1, 3], // 1 Right, Left
                         [(pacmanTile[0] / 60) + 1, (pacmanTile[1] / 60) + 1, 4], // 1 Right, Right
                         [(pacmanTile[0] / 60) + 1, pacmanTile[1] / 60, 5], // 1 Left
                         [(pacmanTile[0] / 60) + 2, (pacmanTile[1] / 60) - 1, 6], // 2 Left, Left
                         [(pacmanTile[0] / 60) + 2, (pacmanTile[1] / 60) + 1, 7], // 2 Left, Right
                         [(pacmanTile[0] / 60) + 2, pacmanTile[1] / 60, 15], // 2 Left, Best Tile
                         [(pacmanTile[0] / 60) + 3, (pacmanTile[1] / 60) - 1, 8], // 3 Left, Left
                         [(pacmanTile[0] / 60) + 3, (pacmanTile[1] / 60) + 1, 9], // 3 Left, Right
                         [(pacmanTile[0] / 60) + 3, pacmanTile[1] / 60, 10]]; // 3 Left
    }

    let validMoves = [];
    let validMoveScores = [];

    for (var i = 0; i < possibleMoves.length; i++) {
        if (possibleMoves[i][0] > 0 && possibleMoves[i][0] < 18) {
            if (possibleMoves[i][1] > 0 && possibleMoves[i][1] < 9) {
                if (board[possibleMoves[i][1]][possibleMoves[i][0]] == 0) {
                    validMoves.push([possibleMoves[i][0], possibleMoves[i][1]]);
                    validMoveScores.push(possibleMoves[i][2]);
                }
            }
        }
    }

    if (scatterModePinky == false) {
        if (pinkyEaten == false) {
            let highestScore = 0;
            let bestMove = [];
            if (validMoveScores.length > 0) {
                for (var i = 0; i < validMoveScores.length; i++) {
                    if (validMoveScores[i] > highestScore) {
                        highestScore = validMoveScores[i];
                        bestMove = validMoves[i];
                    }
                }
                pinkyTarget = [bestMove[0] * 60, bestMove[1] * 60];
            } else {
                pinkyTarget = pacmanTile;
            }
        } else {
            pinkyTarget = [510, 120];
        }
    } else {
        pinkyTarget = [1020, 0];
    }
}

// Find move and set direction
function findPinkyMove() {
    let grid = new PF.Grid(board);
    let finder = new PF.AStarFinder();

    let start = [Math.floor(pinkyTile[0] / 60), Math.floor(pinkyTile[1] / 60)];
    let end = [Math.floor(pinkyTarget[0] / 60), Math.floor(pinkyTarget[1] / 60)];

    let path = finder.findPath(start[0], start[1], end[0], end[1], grid);

    if (path.length > 1) {
        newPinkyMove = [path[1][0], path[1][1]];
    }
}

let pinkyMove = [12, 2];
function findPinkyDirection() {
    let lastMove = pinkyMove;
    let newMove = newPinkyMove;
    let axis = pinkyAxis;
    let atNode = pinkyAtNode();

    if (newMove[0] != lastMove[0]) {
        if (newMove[0] > lastMove[0]) {
            newPinkyDir = "RIGHT";
        } else if (newMove[0] < lastMove[0]) {
            newPinkyDir = "LEFT";
        }
    } else if (newMove[1] != lastMove[1]) {
        if (newMove[1] > lastMove[1]) {
            newPinkyDir = "DOWN";
        } else if (newMove[1] < lastMove[1]) {
            newPinkyDir = "UP";
        }
    }

    pinkyMove = newMove;
}

let newPinkyAxis;

function changePinkyDirection() {
    let dir = newPinkyDir;
    let newAxis = newPinkyAxis;

    if (dir == "LEFT" || dir == "RIGHT") {
        newAxis = "X";
    } else if (dir == "UP" || dir == "DOWN") {
        newAxis = "Y";
    }

    let atNode = pinkyAtNode();

    if (newAxis != pinkyAxis) {
        if (atNode == true) {
            pinkyAxis = newAxis;
            pinkyDir = newPinkyDir;
        }
    }
}

// Move pinky
function movePinky() {
    var moveX = pinky.x + 30;
    var moveY = pinky.y + 30;
    var moveDir = pinkyDir;

    if (moveDir == "UP") {
        if (moveX == 150 || moveX == 930) {
            if (moveY > 150) {
                pinky.y -= pinky.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY > 390 || moveY <= 150) {
                if (moveY > 30) {
                    pinky.y -= pinky.speed;
                }
            }
        } else {
            if (moveY > 30) {
                pinky.y -= pinky.speed;
            }
        }
    } else if (moveDir == "DOWN") {
        if (moveX == 150 || moveX == 930) {
            if (moveY < 390) {
                pinky.y += pinky.speed;
            }
        } else if (moveX == 210 || moveX == 870) {
            if (moveY < 150 || moveY > 330) {
                if (moveY < 510) {
                    pinky.y += pinky.speed;
                }
            }
        } else {
            if (moveY < 510) {
                pinky.y += pinky.speed;
            }
        }
    } else if (moveDir == "LEFT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX > 150) {
                pinky.x -= pinky.speed;
            }
        } else if (moveY == 270) {
            if (moveX > 750 || moveX <= 330) {
                if (moveX > 30) {
                    pinky.x -= pinky.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX > 30 && moveX <= 210) {
                pinky.x -= pinky.speed;
            } else if (moveX > 330 && moveX <= 750) {
                pinky.x -= pinky.speed;
            } else if (moveX > 870 && moveX <= 1050) {
                pinky.x -= pinky.speed;
            }
        } else {
            if (moveX > 30) {
                pinky.x -= pinky.speed;
            }
        }
    } else if (moveDir == "RIGHT") {
        if (moveY == 150 || moveY ==390) {
            if (moveX < 930) {
                pinky.x += pinky.speed;
            }
        } else if (moveY == 270) {
            if (moveX >= 750 || moveX < 330) {
                if (moveX < 1050) {
                    pinky.x += pinky.speed;
                }
            }
        } else if (moveY == 30 || moveY == 510) {
            if (moveX < 210) {
                pinky.x += pinky.speed;
            } else if (moveX >= 330 && moveX < 750) {
                pinky.x += pinky.speed;
            } else if (moveX >= 870 && moveX < 1050) {
                pinky.x += pinky.speed;
            }
        } else {
            if (moveX < 1050) {
                pinky.x += pinky.speed;
            }
        }
    }
}
