function drawWalls() {
    /*
        Blue Wall Outline
    */

    context.fillStyle = "rgb(28, 48, 218)";

    // L Pieces
    context.fillRect(70, 70, 40, 160);
    context.fillRect(70, 310, 40, 160);
    context.fillRect(970, 70, 40, 160);
    context.fillRect(970, 310, 40, 160);

    // L Piece Corners
    context.fillRect(70, 70, 100, 40);
    context.fillRect(900, 70, 100, 40);
    context.fillRect(70, 430, 100, 40);
    context.fillRect(900, 430, 100, 40);

    // 2 High Vertical
    context.fillRect(250, 0, 40, 110);
    context.fillRect(790, 0, 40, 110);
    context.fillRect(250, 430, 40, 110);
    context.fillRect(790, 430, 40, 110);

    // 6 Wide Horizontal
    context.fillRect(370, 70, 340, 40);
    context.fillRect(370, 430, 340, 40);

    // 2 Wide Horizontal
    context.fillRect(190, 190, 100, 40);
    context.fillRect(190, 310, 100, 40);
    context.fillRect(790, 190, 100, 40);
    context.fillRect(790, 310, 100, 40);

    // Starting Box
    context.fillRect(370, 310, 340, 40);
    context.fillRect(370, 190, 40, 160);
    context.fillRect(670, 190, 40, 160);
    context.fillRect(370, 190, 110, 40);
    context.fillRect(600, 190, 110, 40);

    // Starting Box Opening
    context.fillRect(488, 195, 30, 30);
    context.fillRect(525, 195, 30, 30);
    context.fillRect(562, 195, 30, 30);

    /*
        Inner Wall Coloring
    */

    context.fillStyle = "#000000";

    // L Pieces
    context.fillRect(75, 75, 30, 150);
    context.fillRect(75, 315, 30, 150);
    context.fillRect(975, 75, 30, 150);
    context.fillRect(975, 315, 30, 150);

    // L Piece Corners
    context.fillRect(75, 75, 90, 30);
    context.fillRect(905, 75, 90, 30);
    context.fillRect(75, 435, 90, 30);
    context.fillRect(905, 435, 90, 30);

    // 2 High Vertical
    context.fillRect(255, 0, 30, 105);
    context.fillRect(795, 0, 30, 105);
    context.fillRect(255, 435, 30, 110);
    context.fillRect(795, 435, 30, 110);

    // 6 Wide Horizontal
    context.fillRect(375, 75, 330, 30);
    context.fillRect(375, 435, 330, 30);

    // 2 Wide Horizontal
    context.fillRect(195, 195, 90, 30);
    context.fillRect(195, 315, 90, 30);
    context.fillRect(795, 195, 90, 30);
    context.fillRect(795, 315, 90, 30);

    // Starting Box
    context.fillRect(375, 315, 330, 30);
    context.fillRect(375, 195, 30, 150);
    context.fillRect(675, 195, 30, 150);
    context.fillRect(375, 195, 100, 30);
    context.fillRect(605, 195, 100, 30);

    // Starting Box Opening
    context.fillRect(493, 200, 20, 20);
    context.fillRect(530, 200, 20, 20);
    context.fillRect(567, 200, 20, 20);
}
