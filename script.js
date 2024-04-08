function setup() {
    createCanvas(560, 560);
    noLoop();
}

function draw() {
    let count = 0;
    for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 4; x++) {
            let posX = x * 140;
            let posY = y * 80;
            fill(random(255), random(255), random(255));
            rect(posX, posY, 140, 80);
            fill(0);
            textSize(32);
            textAlign(CENTER, CENTER);
            text(++count, posX + 70, posY + 40);
        }
    }
}
