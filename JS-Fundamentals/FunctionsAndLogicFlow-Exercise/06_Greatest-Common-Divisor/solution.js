function greatestCD() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');

    let result = gcd(firstNum.value, secondNum.value);

    document.getElementById('result').textContent = result;

    function gcd(a,b) {
        a = Math.abs(a);
        b = Math.abs(b);
        if (b > a) {var temp = a; a = b; b = temp;}
        while (true) {
            if (b === 0) {
                return a;
            }
            a %= b;

            if (a === 0) {
                return b;
            }

            b %= a;
        }
    }
}