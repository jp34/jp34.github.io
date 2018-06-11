function checkKeyDown(e) {

    e = e || window.event;

    if (e.keyCode == "87") {
        direction = "UP";
        if (pacdaddy.axis == "Y") {
            pacdaddy.updateDirection("UP");
        }
    } else if (e.keyCode == "83") {
        direction = "DOWN";
        if (pacdaddy.axis == "Y") {
            pacdaddy.updateDirection("DOWN");
        }
    } else if (e.keyCode == "65") {
        direction = "LEFT";
        if (pacdaddy.axis == "X") {
            pacdaddy.updateDirection("LEFT");
        }
    } else if (e.keyCode == "68") {
        direction = "RIGHT";
        if (pacdaddy.axis == "X") {
            pacdaddy.updateDirection("RIGHT");
        }
    }
}
