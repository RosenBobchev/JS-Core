function solve(input) {
    let min = Number.NEGATIVE_INFINITY;

    let result = input.reduce((acc, element) => {
        if (element >= min){
            acc.push(element);
            min = element;
        }

        return acc;
    }, []);

    result.forEach(x => console.log(x));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)