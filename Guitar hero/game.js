let noteX = 800, noteY = 0,boxX=0,boxY=300;

function update() {
    noteX = noteX - 3;

    if(noteX<0){
        noteX=800;
    }

    if(mouseY <= 300) {
        boxY = 0;
    } else {
        boxY = 300;
    }
}

function draw() {
    drawImage(backField, 0, 0, 800, 600);
    drawImage(note, noteX, noteY, 100, 300);
    drawImage(box,boxX,boxY,30,300);
}
function keyup(key) {
    if(boxY==0){
        boxY=300;
    }
    if(boxY== 300){
        boxY=0;
    }
    console.log("Pressed key", key);
}

function mouseup() {
boxY=0;
    console.log("Mouse clicked at", mouseX, mouseY);
}
