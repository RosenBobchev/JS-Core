function SameNumbers(n) {
    let number = n.toString();
    let same = false;
    let total = 0;

    for (let i = 0; i < number.length ; i++) {
        let firstDigit = number[0];
        if (firstDigit === number[i]) {
            same = true;
        }
        else {
            same = false;
        }
        total = total + Number(number[i]);
    }
    console.log(same);
    console.log(total);
}

SameNumbers(1234)