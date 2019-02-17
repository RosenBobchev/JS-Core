function EvenNumber(n) {
    for (let i = 1; i <=n ; i++) {
        let number = Number(n);

        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

EvenNumber(5)