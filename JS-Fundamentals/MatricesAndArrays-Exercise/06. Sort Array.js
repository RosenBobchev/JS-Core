function solve(input) {
    let result = input.sort((a, b) => {
       return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase());
    });

    result.forEach(x => console.log(x));
}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);