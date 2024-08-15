let slots = [0, 0, 0];
let money = 10, bet = 0.1, lastWin = 0, noMoney = false, biggestWin = 0;

let kartinki = [box, gem[0], gem[1], gem[2], gem[3], gem[4], gem[5], gem[6], laserGreen[2]];

function update() {
    // Any update logic if needed
}

function draw() {
    // Draw the slot images
    for (let i = 0; i < 3; i++) {
        drawImage(kartinki[slots[i]], i * 100, 0, 100, 100);
    }

    drawImage(signRight, 350, 0, 100, 100);

    context.font = "25px Arial";
    context.fillStyle = "black";

    context.fillText("Money: $" + Math.floor(money * 100) / 100, 0, 150);
    context.fillText("Bet: $" + Math.floor(bet * 100) / 100, 0, 175);
    context.fillText("Last Win: $" + Math.floor(lastWin * 100) / 100, 0, 200);
    context.fillText("Biggest Win: $" + Math.floor(biggestWin * 100) / 100, 0, 225);

    if (noMoney) {
        drawImage(back3D, 0, 0, 800, 600);
        context.font = "50px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("No Money!", 400, 250);
        context.fillText("Get Out!", 400, 300);
    }
}

function PlaceBet() {
    if (money < bet) {
        noMoney = true;
        return;
    }

    money -= bet;

    // Remove 'box' after the first spin, only gems and laserGreen[2] can appear
    let slotOptions = kartinki.slice(1);

    // Randomize the first slot (no laserGreen[2] allowed here)
    slots[0] = randomInteger(slotOptions.length - 2) + 1;

    // Randomize the second and third slot (laserGreen[2] can appear)
    for (let i = 1; i < 3; i++) {
        slots[i] = randomInteger(slotOptions.length - 1) + 1;
    }

    // Check for winnings
    let pechalba = 0;
    if ((slots[0] == slots[1] && slots[1] == slots[2]) || // All slots match
        (slots[1] == 8 && slots[0] == slots[2]) ||        // laserGreen[2] in 2nd slot
        (slots[2] == 8 && slots[0] == slots[1]) ||        // laserGreen[2] in 3rd slot
        (slots[1] == 8 && slots[2] == 8)) {               // Two laserGreen[2]

        // Increased win multipliers
        switch (slots[0] - 1) {
            case 0:
                pechalba = bet * 30;  // Increased from 20
                break;
            case 1:
                pechalba = bet * 15;  // Increased from 10
                break;
            case 2:
                pechalba = bet * 7.5; // Increased from 5
                break;
            case 3:
                pechalba = bet * 4;   // Increased from 2
                break;
            case 4:
                pechalba = bet * 2.5; // Increased from 1
                break;
            case 5:
                pechalba = bet * 1.5; // Increased from 0.5
                break;
            case 6:
                pechalba = bet * 1;   // Increased from 0.2
                break;
            default:
                break;
        }

        money += pechalba;
        lastWin = pechalba;
        if (pechalba > biggestWin) {
            biggestWin = pechalba;
        }
    }
}

function mouseup() {
    if (areColliding(mouseX, mouseY, 1, 1, 350, 0, 100, 100)) {
        PlaceBet();
        draw();
    }
}

function keydown(key) {
    if (key == 32) {
        PlaceBet();
        draw();
    }
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}
