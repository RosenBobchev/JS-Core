function solve() {
    let number = document.getElementById('num').value;

    let result = calculate(number);

    document.getElementById('result').textContent = result;

    function calculate(number) {
        let num = Number(number);
        let str = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                str.push(i);
            }
        }
        return str.join(' ');
    }
}