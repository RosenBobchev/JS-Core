function solve([matrixRow, matrixCol, initialRow, initialCol]) {
    let matrix = [];

    for (let row = 0; row < matrixRow; row++) {
        matrix[row] = [];
        for (let col = 0; col < matrixCol; col++) {
            matrix[row][col] = Math.max(Math.abs(initialCol - col), Math.abs(initialRow - row)) + 1;
        }
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

solve([4, 4, 0, 0]);