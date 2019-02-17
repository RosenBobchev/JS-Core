function solve(input) {
    let reverseCount = input.pop();
    for (let i = 0; i < reverseCount % input.length; i++) {
        let element = input.pop();
        input.unshift(element);
    }
    console.log(input.join(' '));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
)