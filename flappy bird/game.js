// Suzdavame promenlivi
let myX, myY, vragX = 750, vragY = 300;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 100;
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myY = myY + 3;

    vragX = vragX - 5;
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(dogRun[3], vragX, vragY, 50, 50);
}
function mouseup() {
    
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    myY = myY - 100;
}
