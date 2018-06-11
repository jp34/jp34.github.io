function drawBlinky(beginning) {
    context.fillStyle = "rgb(215, 0, 0)";
    let x = blinky.x;
    let y = blinky.y;
    let adjusterX = 0;
    let adjusterY = 8;
    let direction = blinkyDir;

    if (scatterModeBlinky == true) {
        context.fillStyle = "rgb(0, 0, 225)";
        if (pelletDelay < 50) {
            if (pelletDelay % 6 == 0) {
                context.fillStyle = "rgb(255, 255, 255)";
            }
        }
    }

    // Draw Body
    if (blinkyEaten == false) {
        context.fillRect(x + 24 + adjusterX, y - 3 + adjusterY, 12, 3);
        context.fillRect(x + 18 + adjusterX, y + 0 + adjusterY, 24, 3);
        context.fillRect(x + 15 + adjusterX, y + 3 + adjusterY, 30, 3);
        context.fillRect(x + 12 + adjusterX, y + 6 + adjusterY, 36, 3);
        context.fillRect(x + 12 + adjusterX, y + 9 + adjusterY, 36, 3);
        context.fillRect(x + 12 + adjusterX, y + 12 + adjusterY, 36, 3);
        context.fillRect(x + 9 + adjusterX, y + 15 + adjusterY, 42, 3);
        context.fillRect(x + 9 + adjusterX, y + 18 + adjusterY, 42, 3);
        context.fillRect(x + 9 + adjusterX, y + 21 + adjusterY, 42, 3);
        context.fillRect(x + 9 + adjusterX, y + 24 + adjusterY, 42, 3);
        context.fillRect(x + 9 + adjusterX, y + 27 + adjusterY, 42, 3);
        context.fillRect(x + 9 + adjusterX, y + 30 + adjusterY, 42, 3);

        if (frameRate % 5 == 0) {
            context.fillRect(x + 9 + adjusterX, y + 33 + adjusterY, 6, 3);
            context.fillRect(x + 9 + adjusterX, y + 36 + adjusterY, 3, 3);
            context.fillRect(x + 18 + adjusterX, y + 33 + adjusterY, 9, 3);
            context.fillRect(x + 21 + adjusterX, y + 36 + adjusterY, 6, 3);
            context.fillRect(x + 33 + adjusterX, y + 33 + adjusterY, 9, 3);
            context.fillRect(x + 33 + adjusterX, y + 36 + adjusterY, 6, 3);
            context.fillRect(x + 45 + adjusterX, y + 33 + adjusterY, 6, 3);
            context.fillRect(x + 48 + adjusterX, y + 36 + adjusterY, 3, 3);
        } else {
            context.fillRect(x + 9 + adjusterX, y + 33 + adjusterY, 12, 3);
            context.fillRect(x + 24 + adjusterX, y + 33 + adjusterY, 12, 3);
            context.fillRect(x + 39 + adjusterX, y + 33 + adjusterY, 12, 3);
            context.fillRect(x + 12 + adjusterX, y + 36 + adjusterY, 6, 3);
            context.fillRect(x + 27 + adjusterX, y + 36 + adjusterY, 6, 3);
            context.fillRect(x + 42 + adjusterX, y + 36 + adjusterY, 6, 3);
        }
    }

    // Draw Eyes and Pupils
    if (scatterModeBlinky == true) {
        context.fillStyle = "rgb(255, 255, 255)";
        if (pelletDelay < 50) {
            if (pelletDelay % 6 == 0) {
                context.fillStyle = "rgb(0, 0, 225)";
            }
        }

        // Pupils
        context.fillRect(x + 21 + adjusterX, y + 12 + adjusterY, 6, 6);
        context.fillRect(x + 33 + adjusterX, y + 12 + adjusterY, 6, 6);

        // Mouth (Bottom Row)
        context.fillRect(x + 12 + adjusterX, y + 27 + adjusterY, 3, 3);
        context.fillRect(x + 21 + adjusterX, y + 27 + adjusterY, 6, 3);
        context.fillRect(x + 33 + adjusterX, y + 27 + adjusterY, 6, 3);
        context.fillRect(x + 45 + adjusterX, y + 27 + adjusterY, 3, 3);

        // Mouth (Top Row)
        context.fillRect(x + 15 + adjusterX, y + 24 + adjusterY, 6, 3);
        context.fillRect(x + 27 + adjusterX, y + 24 + adjusterY, 6, 3);
        context.fillRect(x + 39 + adjusterX, y + 24 + adjusterY, 6, 3);

    } else {
        if (direction == "RIGHT") {
            context.fillStyle = "#FFFFFF";

            // Left Eye
            context.fillRect(x + 21 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 18 + adjusterX, y + 9 + adjusterY, 12, 9);

            // Right Eye
            context.fillRect(x + 39 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 36 + adjusterX, y + 9 + adjusterY, 12, 9);

            context.fillStyle = "rgb(76, 96, 170)";

            // Left Pupil
            context.fillRect(x + 24 + adjusterX, y + 12 + adjusterY, 6, 6);

            // Right Pupil
            context.fillRect(x + 42 + adjusterX, y + 12 + adjusterY, 6, 6);

        } else if (direction == "LEFT") {
            context.fillStyle = "#FFFFFF";
            adjusterX -= 6;

            // Left Eye
            context.fillRect(x + 21 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 18 + adjusterX, y + 9 + adjusterY, 12, 9);

            // Right Eye
            context.fillRect(x + 39 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 36 + adjusterX, y + 9 + adjusterY, 12, 9);

            context.fillStyle = "rgb(76, 96, 170)";

            adjusterX -= 6;

            // Left Pupil
            context.fillRect(x + 24 + adjusterX, y + 12 + adjusterY, 6, 6);

            // Right Pupil
            context.fillRect(x + 42 + adjusterX, y + 12 + adjusterY, 6, 6);
        } else if (direction == "UP") {
            context.fillStyle = "#FFFFFF";
            adjusterX -= 3;

            // Left Eye
            context.fillRect(x + 21 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 18 + adjusterX, y + 9 + adjusterY, 12, 9);

            // Right Eye
            context.fillRect(x + 39 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 36 + adjusterX, y + 9 + adjusterY, 12, 9);

            context.fillStyle = "rgb(76, 96, 170)";

            adjusterX -= 3;
            adjusterY -= 6;

            // Left Pupil
            context.fillRect(x + 24 + adjusterX, y + 12 + adjusterY, 6, 6);

            // Right Pupil
            context.fillRect(x + 42 + adjusterX, y + 12 + adjusterY, 6, 6);
        } else if (direction == "DOWN") {
            context.fillStyle = "#FFFFFF";
            adjusterX -= 3;

            // Left Eye
            context.fillRect(x + 21 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 18 + adjusterX, y + 9 + adjusterY, 12, 9);

            // Right Eye
            context.fillRect(x + 39 + adjusterX, y + 6 + adjusterY, 6, 15);
            context.fillRect(x + 36 + adjusterX, y + 9 + adjusterY, 12, 9);

            context.fillStyle = "rgb(76, 96, 170)";

            adjusterX -= 3;
            adjusterY += 3;

            // Left Pupil
            context.fillRect(x + 24 + adjusterX, y + 12 + adjusterY, 6, 6);

            // Right Pupil
            context.fillRect(x + 42 + adjusterX, y + 12 + adjusterY, 6, 6);
        }
    }
}
