function solve() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', clickEvent);

    function clickEvent(e) {
        let input = document.getElementById('input').value;
        let output = document.getElementById('output');

        let pattern = /[0-9]+/gm;

        let lengthFromInput = pattern.exec(input)[0];
        let resultFromInput = input.substr(lengthFromInput.length, +lengthFromInput);
        let delimiter = resultFromInput[resultFromInput.length - 1];

        let stringArr = resultFromInput.split(delimiter).filter(x => x);

        let regex = new RegExp(`[${stringArr[0]}]+`, 'g');
        let result = stringArr[1].split(regex).join('').split('#').join(' ');

        output.value = result;
    }
}