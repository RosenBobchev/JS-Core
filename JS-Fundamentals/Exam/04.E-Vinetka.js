function solve(input) {
    let towns = [];
    let profitableTown = '';
    let tempTown = '';
    let tempPrice = 0;
    let obj = {};
    let sortable = [];
    let price = 0;
    let model = '';

    for (let element of input) {
        if (obj.hasOwnProperty(element.town)) {
            obj[element.town] += element.price;
        } else {
            obj[element.town] = element.price;
        }
        if (tempPrice === element.price) {
            towns.push(Object.values(element)[2]);
            let firstTownCount = 0;
            let secondTownCount = 0;
            for (let town in towns){
                if (town === tempTown){
                    firstTownCount += 1;
                } else if (town === element.town){
                    secondTownCount += 1;
                }
            }

            if (firstTownCount > secondTownCount){
                profitableTown = tempTown;
            } else if (secondTownCount > firstTownCount) {
                profitableTown = element.town;
            } else if (firstTownCount === secondTownCount){
                let townsToSort = [];
                townsToSort.push(tempTown);
                townsToSort.push(element.town);

                townsToSort.sort((a, b) => a.localeCompare(b));
                profitableTown = townsToSort[0];
            }
        }
    }

    if (profitableTown === '') {
        for (let town in obj){
            sortable.push([town, obj[town]]);
        }
        let sortedTown = sortable.sort((a, b) => b[1] - a[1])[0];
        profitableTown = sortedTown[0];
        price = sortedTown[1];
    }

    let cars = input.filter(x => x.town === profitableTown).map(c => c.model);
    if (cars.length === 1) {
        model = cars;
    } else {
       let carsForCheck = [];
       for (let car of input){
           if (car.town === profitableTown){
               carsForCheck.push(car);
           }
       }

        let currentPrice = 0;
       let modelForCheck = [];
       for (let carPrice of carsForCheck) {
           modelForCheck.push(carPrice.model);
           if (carPrice.price > currentPrice){
               currentPrice = carPrice.price;
               model = carPrice.model;
           } else if (0 === 0){
               let carsForSort = [];
               for (let i = 0; i < cars.length; i++) {
                   carsForSort.push(cars[i]);
               }
               let result = carsForSort.sort((a, b) => a.localeCompare(b))[0];

               model = result.toString();
           }
       }
        function hasDuplicates(array) {
           var valuesSoFar = Object.create(null);
            for (var i = 0; i < array.length; ++i) {
                var value = array[i];
                if (value in valuesSoFar) {
                    return value;
                }
                valuesSoFar[value] = true;
            }
            return '';
        }
        let duplicatedCar = hasDuplicates(modelForCheck);

       if (duplicatedCar !== ''){
           model = duplicatedCar;
       }
    }


    let townsWithCar = input.filter(x => x.model === model.toString());
    let carObj = {};
    let sortedCars = [];

    for (let car of townsWithCar){
        if (!carObj.hasOwnProperty(car.town)) {
            carObj[car.town] = [];
            carObj[car.town].push(car.regNumber);
        } else {
            carObj[car.town].push(car.regNumber);
        }
    }

    for (let vehicle in carObj){
        sortedCars.push([vehicle, carObj[vehicle]]);
    }

    let sortedCarsAndRegs = sortedCars.sort(function(a,b){
        retVal=0;
        if(a[0]!==b[0]) retVal=a[0]>b[0]?1:-1;
        else if(a[1]!==b[1]) retVal=a[1]>b[1]?1:-1;
        else if(a[2]!==b[2]) retVal=a[2]>b[2]?1:-1;
        return retVal
    });

    let output = `${profitableTown} is most profitable - ${price} BGN\n`;
    output += `Most driven model: ${model}\n`;
    for (let result of sortedCarsAndRegs){
        output += `${result[0]}: ${result[1].sort().join(', ')}\n`;
    }

    console.log(output);
}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 3},
    { model: 'aa', regNumber: 'NIKOLA', town: 'Burgas', price: 3}]);
