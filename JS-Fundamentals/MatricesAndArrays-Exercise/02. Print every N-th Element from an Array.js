function solve(input) {
    let step = input.pop();

    input = input.filter((x, i) => i % step === 0).forEach(x => console.log(x));
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
)