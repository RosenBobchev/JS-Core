function solve(firstName, age, weight, height) {
    let heightForBMI = height * 0.010;
    let heightSQRT = Math.pow(heightForBMI, 2);
    let bmi = Math.round(weight / heightSQRT);

    let status = '';

    if (bmi < 18.5){
        status = 'underweight';
    } else if (bmi < 25){
        status = 'normal';
    } else if (bmi < 30){
        status = 'overweight';
    } else if (bmi >= 30) {
        status = 'obese';
    }

    let obj = {
        name: firstName,
        personalInfo: {
            age: age,
            weight: weight,
            height: height,
        },
        BMI: bmi,
        status: status
    };

    if (status === 'obese'){
        obj['recommendation'] = 'admission required';
    }

    return obj;
}

solve('Honey Boo Boo', 9, 57, 137);