function drawPacman() {
    var start1;
    var end1;
    var start2;
    var end2;

    if (mouthOpen == true) {
        if (pacdaddy.dir == "UP") {
            start1 = 0;
            end1 = 2 * Math.PI;
            start2 = 0;
            end2 = 2 * Math.PI;
        } else if (pacdaddy.dir == "DOWN") {
            start1 = 0;
            end1 = 2 * Math.PI;
            start2 = 0;
            end2 = 2 * Math.PI;
        } else if (pacdaddy.dir == "RIGHT") {
            start1 = 0.75 * Math.PI;
            end1 = 1.75 * Math.PI;
            start2 = 0.25 * Math.PI;
            end2 = 1.25 * Math.PI;
        } else if (pacdaddy.dir == "LEFT") {
            start1 = 1.25 * Math.PI;
            end1 = 2.25 * Math.PI;
            start2 = 1.75 * Math.PI;
            end2 = 2.75 * Math.PI;
        }
    } else {
        start1 = 0;
        end1 = 2 * Math.PI;
        start2 = 0;
        end2 = 2 * Math.PI;
    }

    context.strokeStyle = "rgb(255, 255, 0)";
    context.fillStyle = "rgb(255, 255, 0)";
    context.beginPath();
    context.arc(pacdaddy.x, pacdaddy.y, pacdaddy.size, start1, end1);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(pacdaddy.x, pacdaddy.y, pacdaddy.size, start2, end2);
    context.fill();
    context.stroke();

    if (count % 10 == 0) {
        if (mouthOpen == true) {
            mouthOpen = false;
        } else {
            mouthOpen = true;
        }
    }
    count++;
}

function drawBlinky() {
    context.fillStyle = "rgb(215, 0, 0)";
    context.fillRect(blinky.x, blinky.y, 50, 50);

    // Point where claculations are made from
    context.fillStyle = "#000000";
    context.fillRect(blinky.x - 5, blinky.y - 5, 10, 10);
}
