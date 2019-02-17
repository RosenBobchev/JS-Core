function solve() {
    let buttons = document.getElementsByTagName('button');
    let output = document.getElementById('output').children[0];

    let filterButton = buttons[0].addEventListener('click', filter);
    let sortButton = buttons[1].addEventListener('click', sort);
    let rotateButton = buttons[2].addEventListener('click', rotate);
    let getButton = buttons[3].addEventListener('click', getElement);

    function filter() {
        let input = document.getElementById('input').value;
        let cmd = document.getElementById('filterSecondaryCmd').value;
        let position = document.getElementById('filterPosition').value;

        if (cmd === 'uppercase') {
            output.textContent += input.split('').filter(x => x === x.toUpperCase())[position - 1];
        } else if (cmd === 'lowercase') {
            output.textContent += input.split('').filter(x => x === x.toLowerCase())[position - 1];
        } else if (cmd === 'nums') {
            output.textContent += input.split('').filter(x => !isNaN(x))[position - 1];
        }
    }

    function sort() {
        let input = document.getElementById('input').value;
        let cmd = document.getElementById('sortSecondaryCmd').value;
        let position = document.getElementById('sortPosition').value;

        if (cmd === 'A') {
            output.textContent += input.split('').sort()[position - 1];
        } else if (cmd === 'Z') {
            output.textContent += input.split('').sort().reverse()[position - 1];
        }
    }

    function rotate() {
        let input = document.getElementById('input').value.split('');
        let cmd = document.getElementById('rotateSecondaryCmd').value;
        let position = document.getElementById('rotatePosition').value;

        for (let i = 0; i < cmd; i++) {
            let elementToPush = input.pop();
            input.unshift(elementToPush);
        }

        output.textContent += input[position - 1];
    }

    function getElement() {
        let input = document.getElementById('input').value;
        let position = document.getElementById('getPosition').value;

        output.textContent += input[position - 1];
    }
}