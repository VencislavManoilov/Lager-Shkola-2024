let cameraX = 0, cameraY = 0, objects = [];

for(let i = 0; i < 15; i++) {
    objects.push({x: randomInteger(1000), y: randomInteger(1000)});
}

function update() {
    if(isKeyPressed[65]) {
        cameraX -= 1;
    }
    if(isKeyPressed[68]) {
        cameraX += 1;
    }
    if(isKeyPressed[87]) {
        cameraY -= 1;
    }
    if(isKeyPressed[83]) {
        cameraY += 1;
    }
}

function draw() {
    for(let i = 0; i < objects.length; i++) {
        drawImage(box, objects[i].x - cameraX, objects[i].y - cameraY, 100, 100);
    }
}