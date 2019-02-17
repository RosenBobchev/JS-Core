function getNext() {
    let number = document.getElementById('num').value;

    let resultInput;
    resultInput = sequence(number);

    document.getElementById('result').textContent = resultInput;

    function sequence(number){
        let n = Number(number);
        let seq = [n];

        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2;
            }
            else {
                n = (n * 3) + 1;
            }

            seq += (' ' + n);
        }

        return seq + ' ';
    }
}