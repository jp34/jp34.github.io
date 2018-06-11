var muted = false;

function playSound(sound) {
    if (muted == false) {
        if (sound == "beginning") {
            playBeginning();
        } else if (sound == "siren") {
            playSiren();
        } else if (sound == "pauseSiren") {
            pauseSiren();
        } else if (sound == "playChomp") {
            playChomp();
        }else if (sound == "pauseChomp") {
            pauseChomp();
        } else if (sound == "playPellet") {
            playPellet();
        } else if (sound == "pausePellet") {
            pausePellet();
        } else if (sound == "playDeath") {
            playDeath();
        } else if (sound == "playEatGhost") {
            playEatGhost();
        }
    }
}


var pacmanBeginning = new Audio('sounds/pacman_beginning.mp3');

function playBeginning() {
    pacmanBeginning.play();
}

var pacmanEatFruit = new Audio('sounds/pacman_eatfruit.mp3');

function playEatFruit() {
    pacmanEatFruit.play();
}

// Siren Loop
var pacmanSirenLoop = new Audio('sounds/Pacman_Siren.mp3');

function playSiren() {
    pacmanSirenLoop.volume = 1;
    pacmanSirenLoop.loop = true;
    pacmanSirenLoop.play();
}

function pauseSiren() {
    pacmanSirenLoop.pause();
}

// Eat Food
var pacmanChomp = new Audio('sounds/Pacman_Waka_Waka.mp3');

function playChomp() {
    pacmanChomp.play();
}

function pauseChomp() {
    pacmanChomp.pause();
}

// Eat Pellets
var pacmanPellet = new Audio('sounds/Pacman_Pellet.mp3');

function playPellet() {
    pacmanPellet.loop = true;
    pacmanPellet.play();
}

function pausePellet() {
    pacmanPellet.pause();
}

// Pacman Death
var pacmanDeath = new Audio('sounds/pacman_death.mp3');

function playDeath() {
    pacmanDeath.play();
}

// Eat Ghost
var eatGhost = new Audio('sounds/pacman_eatghost.mp3');

function playEatGhost() {
    eatGhost.play();
}
