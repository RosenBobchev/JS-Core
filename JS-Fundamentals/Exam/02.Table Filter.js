function solve(matrix, commandStr) {
        let splitCommand = commandStr.split(' ');
        let command = splitCommand[0];
        let commandBy = splitCommand[1];

        switch (command) {
                case 'sort':
                        sort();
                        break;
                case 'filter':
                        filter();
                        break;
                case 'hide':
                        hide();
                        break;
        }

        function hide() {
                let index = matrix[0].indexOf(commandBy);

                let deleteColumn = matrix.map(x => x.splice(index, 1))[0];

                matrix.forEach((x) => {
                        console.log(x.join(' | '))
                })
        }

        function filter() {
                let index = matrix[0].indexOf(commandBy);
                let search = splitCommand[2];

                let sliceArr = matrix.slice(1);

                let newMatrix = [];

                sliceArr.forEach((x) => {
                        if (x[index] === search) {
                                newMatrix.push(x);
                        }
                });

                console.log(matrix[0].join(' | '));
                newMatrix.forEach((x) => {
                        console.log(x.join(' | '))
                })
        }

        function sort() {
                let index = matrix[0].indexOf(commandBy);

                let sliceArr = matrix.slice(1);

                sliceArr.sort(function (a, b) {
                        if (a[index] > b[index]) {
                                return 1;
                        }
                        if (a[index] < b[index]) {
                                return -1;
                        }
                        return 0;
                });

                console.log(matrix[0].join(' | '));
                sliceArr.forEach((x) => {
                        console.log(x.join(' | '))
                })
        }
}


solve([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
        'hide name');