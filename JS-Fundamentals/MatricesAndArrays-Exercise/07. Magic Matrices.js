function solve(arr) {
    let rowSum = 0;

    for (let row = 0; row < arr.length; row++) {
        let colSum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            colSum += arr[row][col];
        }

        if (rowSum !== 0 && rowSum !== colSum){
            return false;
        }

        rowSum = colSum;
    }

    for (let col = 0; col < arr[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < arr.length; row++) {
            colSum += arr[row][col];
        }
        if (rowSum !== colSum){
            return false;
        }
    }

    return true;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));