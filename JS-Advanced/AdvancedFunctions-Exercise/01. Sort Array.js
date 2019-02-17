function solve(arr, sortingString){
    if (sortingString === 'asc'){
        arr.sort((a, b) => a - b);
    } else if (sortingString === 'desc'){
        arr.sort((a, b) => b - a);
    }

    return arr;
}

solve([14, 7, 17, 6, 8], 'asc');