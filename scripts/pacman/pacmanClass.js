class Pacman {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 6;
        this.size = 25;

        this.dir = "NONE";
        this.axis = "X";
        this.currentNode = 0;

        this.topSide = this.y - this.size;
        this.bottomSide = this.y + this.size;
        this.leftSide = this.x - this.size;
        this.rightSide = this.x + this.size;

        this.chompDelay = 1200;
    }

    updateDirection(dir) {
        this.dir = dir;
    }

    checkAtNode() {
        for (var i = 0; i < nodeX.length; i++) {
            if (nodeX[i] == this.x) {
                if (nodeY[i] == this.y) {
                    this.currentNode = i;
                    this.checkDirection(nodeDirections[i]);
                }
            }
        }
    }

    checkDirection(node) {
        for (var i = 0; i < node.length; i++) {
            if (node[i] == direction) {
                this.changeDirection(node);
            } else if (node[i] == this.dir) {
                this.dir = "NONE";
            }
        }
    }

    changeDirection(node) {
        if (direction == "UP" || direction == "DOWN") {
            this.axis = "Y";
        } else if (direction == "LEFT" || direction == "RIGHT") {
            this.axis = "X";
        }
        this.dir = direction;
        // alert(this.currentNode + 1);
        this.x = nodeX[this.currentNode];
        this.y = nodeY[this.currentNode];
    }

    eatFood() {
        for (var i = 0; i < foodX.length; i++) {
            if (foodX[i] == this.x) {
                if (foodY[i] == this.y) {
                    score += 10;
                    foodX.splice(i, 1);
                    foodY.splice(i, 1);
                    playSound("playChomp");
                    this.chompDelay = 1000;
                }
            } else {
                if (this.chompDelay == 0) {
                    playSound("pauseChomp");
                } else {
                    this.chompDelay--;
                }
            }
        }
    }

    eatPowerPellet() {
        for (var i = 0; i < powerPelletX.length; i++) {
            if (powerPelletX[i] == this.x) {
                if (powerPelletY[i] == this.y) {
                    score += 10;
                    powerPelletX.splice(i, 1);
                    powerPelletY.splice(i, 1);
                    powerPelletEaten();
                }
            }
        }
    }
}
