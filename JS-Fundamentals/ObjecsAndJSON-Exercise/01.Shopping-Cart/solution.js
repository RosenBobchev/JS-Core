function solve() {
    let buttons = Array.from(document.querySelectorAll('#exercise button'));
    let output = document.getElementsByTagName('textarea')[0];

    let milkButton = buttons[0].addEventListener('click', buyMilk);
    let breadButton = buttons[1].addEventListener('click', buyBread);
    let tomatoesButton = buttons[2].addEventListener('click', buyTomatoes);
    let buyButton = buttons[3].addEventListener('click', buy);

    let totalPrice = 0;
    let boughtProducts = [];
    function buyMilk(e) {
        printElement('Milk', 1.09);
        totalPrice += 1.09;
        boughtProducts.push('Milk');
    }
    function buyBread() {
        printElement('Bread', 0.80);
        totalPrice += 0.80;
        boughtProducts.push('Bread');
    }
    function buyTomatoes() {
        printElement('Tomatoes', 0.99);
        totalPrice += 0.99;
        boughtProducts.push('Tomatoes');
    }
    function buy() {
        let products = boughtProducts.join(', ');
        output.value += `You bought ${products} for ${totalPrice.toFixed(2)}.\n`;
        totalPrice = 0;
        boughtProducts = [];
    }

    function printElement(name, price) {
        output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }
}