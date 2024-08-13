let grid = [];
let turn = 1;

// 0 - empty
// 1 - X
// 2 - O

for (let x = 0; x < 3; x++) {
    grid[x] = [];
    for (let y = 0; y < 3; y++) {
        grid[x][y] = 0;
    }
}

function update() {

}

function draw() {
    drawLine(100, 0, 100, 300);
    drawLine(200, 0, 200, 300);
    drawLine(0, 100, 300, 100);
    drawLine(0, 200, 300, 200);

    // Draw Xs and Os
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (grid[x][y] == 1) {
                drawImage(laserBlue[2], 100 * x, 100 * y, 100, 100); // Draw X
            } else if (grid[x][y] == 2) {
                drawImage(box, 100 * x, 100 * y, 100, 100); // Draw O
            }
        }
    }
}

// This checks if someone has won the game
function checkWin(player) {
    // Check rows
    for (let x = 0; x < 3; x++) {
        if (grid[x][0] == player && grid[x][1] == player && grid[x][2] == player) {
            return true; // This row is a win
        }
    }

    // Check columns
    for (let y = 0; y < 3; y++) {
        if (grid[0][y] == player && grid[1][y] == player && grid[2][y] == player) {
            return true; // This column is a win
        }
    }

    // Check diagonals
    if (grid[0][0] == player && grid[1][1] == player && grid[2][2] == player) {
        return true; // This diagonal is a win
    }

    if (grid[0][2] == player && grid[1][1] == player && grid[2][0] == player) {
        return true; // This diagonal is a win
    }

    return false; // No win yet
}

// This happens when you click on the board
function mouseup() {
    if (mouseX <= 300 && mouseY <= 300) { // Make sure the click is inside the grid
        let x = Math.floor(mouseX / 100); // Find which square was clicked (x position)
        let y = Math.floor(mouseY / 100); // Find which square was clicked (y position)

        if (grid[x][y] == 0) { // If the square is empty
            grid[x][y] = turn; // Put X or O in the square

            if (checkWin(turn)) { // Check if someone won
                console.log("Player " + turn + " wins!"); // Say who won
                return; // Stop the game
            }

            // Switch turns: if it was X's turn, now it's O's turn, or the other way around
            if (turn == 1) {
                turn = 2; // Switch to O
            } else {
                turn = 1; // Switch to X
            }
        }
    }
}