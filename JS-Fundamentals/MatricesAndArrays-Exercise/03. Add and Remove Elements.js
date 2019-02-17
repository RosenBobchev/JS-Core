function solve(input) {
    let arr = [];
    for (let i = 1; i <= input.length; i++) {
        let command = input[i - 1];

        if (command === 'add'){
            arr.push(i);
        } else if(command === 'remove'){
            arr.pop();
        }
    }

    if (arr.length === 0){
        arr.push('Empty');
    }

    arr.forEach(x => console.log(x));
}

solve(['remove',
    'remove',
    'remove']
)