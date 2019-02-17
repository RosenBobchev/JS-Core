function solve() {
    let buttons = document.getElementsByTagName('button');
    let chop = buttons[0].addEventListener('click', chopFunc);
    let dice = buttons[1].addEventListener('click', diceFunc);
    let spice = buttons[2].addEventListener('click', spiceFunc);
    let bake = buttons[3].addEventListener('click', bakeFunc);
    let fillet = buttons[4].addEventListener('click', filletFunc);

    function chopFunc() {
        let numForChop = getNumber();
        numForChop /= 2;
        printNumber(numForChop);
    }

    function diceFunc() {
        let numForDice = getNumber();
        numForDice = Math.sqrt(numForDice);
        printNumber(numForDice);
    }

    function spiceFunc() {
        let numForSpice = getNumber();
        numForSpice = Number(numForSpice) + 1;
        printNumber(numForSpice);
    }

    function bakeFunc() {
        let numForBake = getNumber();
        numForBake *= 3;
        printNumber(numForBake);

    }

    function filletFunc() {
        let numForFillet = getNumber();
        numForFillet *= 0.8;
        printNumber(numForFillet);

    }

    function printNumber(num) {
        document.getElementById('output').textContent = num;
    }

    function getNumber() {
        let numToReturn = document.getElementById('output').textContent;
        let numInput = document.querySelector('#exercise input').value;
        if (numToReturn === ''){
            return numInput;
        }
        return numToReturn;
    }
}
