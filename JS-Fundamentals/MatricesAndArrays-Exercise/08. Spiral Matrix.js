function solve(row, col) {
    let matrix = [];
    let directions = ['right', 'down', 'left', 'up'];
    for(let i = 0; i < row; i++) {
        matrix[i] = [];
        for(let j = 0; j < col; j++) {
            matrix[i][j] = 0;
        }
    }

    let currentDirection = directions[0];
    let currentRow = 0;
    let currentCol = 0;
    let steps = row * col;
    let counter = 1;
    for (let i = 1; i <= steps; i++) {
        matrix[currentRow][currentCol] = counter;
        counter++;

        if (currentDirection === directions[0]){
            if (currentCol + 1 >= col || matrix[currentRow][currentCol + 1] !== 0){
                currentDirection = directions[1];
                currentRow++;
            } else {
                currentCol++;
            }
        } else if (currentDirection === directions[1]){
            if (currentRow + 1 >= row || matrix[currentRow + 1][currentCol] !== 0){
                currentDirection = directions[2];
                currentCol--;
            } else {
                currentRow++;
            }
        } else if (currentDirection === directions[2]){
            if (currentCol - 1 < 0 || matrix[currentRow][currentCol - 1] !== 0){
                currentDirection = directions[3];
                currentRow--;
            } else {
                currentCol--;
            }
        } else if (currentDirection === directions[3]){
            if (currentRow - 1 < 0 || matrix[currentRow - 1][currentCol] !== 0){
                currentDirection = directions[0];
                currentCol++;
            } else {
                currentRow--;
            }
        }
    }

    for (const num of matrix){
        console.log(num.join(' '));
    }
}

solve(5, 5);