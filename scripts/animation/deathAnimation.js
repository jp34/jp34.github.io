var deathAnimationStarted = false;

function deathAnimation() {
    deathAnimationStarted = true;
}

const changeRate = .06;

// First Step
let start1 = 0.75 * Math.PI;
let end1 = 1.75 * Math.PI;
let start2 = 0.25 * Math.PI;
let end2 = 1.25 * Math.PI;

let step1 = false;

// Second Step
let step2Start = Math.PI / 2;
let step2End = (3 * Math.PI) / 2;

let step2 = false;

// Third Step
let ringSize = pacdaddy.size / 2;
let ringIterations = 0;

let step3 = false;

function drawDeathScene() {
    context.strokeStyle = "rgb(255, 255, 0)";
    context.fillStyle = "rgb(255, 255, 0)";

    if (step1 == false) {
        context.beginPath();
        context.arc(pacdaddy.x, pacdaddy.y, pacdaddy.size, start1, end1);
        context.fill();
        context.stroke();

        if (start1 > (Math.PI / 2)) {
            start1 -= changeRate;
            end1 -= changeRate;
        } else {
            step1 = true;
        }

        context.beginPath();
        context.arc(pacdaddy.x, pacdaddy.y, pacdaddy.size, start2, end2);
        context.fill();
        context.stroke();

        if (start2 <  (Math.PI / 2)) {
            start2 += changeRate;
            end2 += changeRate;
        }
    } else {
        if (step2 == false) {
            context.beginPath();
            context.arc(pacdaddy.x, pacdaddy.y, pacdaddy.size, step2Start, step2End);
            context.fill();
            context.stroke();

            let x1 = Math.cos(step2Start) * pacdaddy.size;
            let y1 = Math.sin(step2Start) * pacdaddy.size;

            let x2 = Math.cos(step2End) * pacdaddy.size;
            let y2 = Math.sin(step2End) * pacdaddy.size;

            context.beginPath();
            context.moveTo(pacdaddy.x, pacdaddy.y);
            context.lineTo(x1 + pacdaddy.x, y1 + pacdaddy.y);
            context.lineTo(x2 + pacdaddy.x, y2 + pacdaddy.y);
            context.closePath();
            context.fill();

            if (step2Start < Math.PI) {
                step2Start += changeRate;
                step2End -= changeRate;
            } else {
                step2 = true;
            }
        } else {
            if (step3 == false) {
                context.lineWidth = 2;

                context.beginPath();
                context.arc(pacdaddy.x, pacdaddy.y, ringSize, 0, 2 * Math.PI);
                context.stroke();

                context.strokeStyle = "rgb(100, 100, 100, 0.25)";
                context.beginPath();
                context.arc(pacdaddy.x, pacdaddy.y, ringSize, 0, 2 * Math.PI);
                context.stroke();

                if (ringIterations < 2) {
                    if (ringSize < pacdaddy.size) {
                        ringSize += 2;
                    } else {
                        ringIterations += 1;
                        ringSize = pacdaddy.size / 2;
                    }
                } else {
                    step3 = true;
                }
            }
        }
    }

    if (step3 == true) {
        showLoseScreen();
    }
}
