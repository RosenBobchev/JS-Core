function Fruit(name, weightInput, price) {
    let weight = weightInput / 1000;

    let neededMoney = weight * price;

    console.log(`I need ${neededMoney.toFixed(2)} leva to buy ${weight.toFixed(2)} kilograms ${name}.`);
}

Fruit("orange", 2500, 1.80);