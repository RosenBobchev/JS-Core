function solve() {
    let sortedArr = [];
    let obj = {};

    for (let i = 0; i < arguments.length; i++) {
        let temp = arguments[i];
        let type = typeof temp;

        console.log(`${type}: ${temp}`);
        
        if (!obj[type]) {
            obj[type] = 1;
        } else {
            obj[type]++;
        }
    }

    for (let el in obj){
        sortedArr.push([el, obj[el]]);
    }

    for (let el of sortedArr.sort((a, b) => b[1] - a[1])){
        console.log(`${el[0]} = ${el[1]}`);
    }
}

solve(42, 'cat', 15, 'kitten', 'tomcat');