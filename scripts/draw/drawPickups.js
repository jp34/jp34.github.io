let powerPelletChange = "DECREASE";

function drawPickups() {
    // Draw Food
    for (var i = 0; i < foodX.length; i++) {
        drawFood(foodX[i], foodY[i], foodSize);
    }

    // Adjust Power Pellet Size
    if (frameRate % 20 == 0) {
        if (powerPelletChange == "DECREASE") {
            powerPelletChange = "INCREASE";
        } else if (powerPelletChange == "INCREASE") {
            powerPelletChange = "DECREASE";
        }
    }

    if (frameRate % 5 == 0) {
        if (powerPelletChange == "INCREASE") {
            powerPelletSize++;
        } else if (powerPelletChange == "DECREASE") {
            powerPelletSize--;
        }
    }

    // Draw Power Pellets
    for (var i = 0; i < powerPelletX.length; i++) {
        drawCircle(powerPelletX[i], powerPelletY[i], powerPelletSize);
    }
}

function drawCircle(x, y, size) {
    context.fillStyle = "rgb(250, 182, 150)";
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}

function drawFood(x, y, size) {
    context.fillStyle = "rgb(250, 182, 150)";
    context.fillRect(x - size, y - size, size * 2, size * 2);
}
