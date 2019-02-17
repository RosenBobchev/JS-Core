function Calories(input) {
    let productCalories = {}
    for (let i = 0; i < input.length; i++) {
        productCalories[input[i]] = Number(input[++i]);
    }

    console.log(productCalories);
}

Calories(['Yoghurt', '48', 'Rise', 138, 'Apple', 52])