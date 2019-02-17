function solve(examPoints, homeworkPoints, maxHomeworkPoints) {
    let pointsFromExam = (examPoints / 400) * 0.9 * 100;
    let grade = 0;

    if (examPoints === 400) {
        grade = 6.00;
    } else {
        let pointsFromHomework = (homeworkPoints / maxHomeworkPoints) * 100;

        let pointsPercentage = Math.floor(pointsFromHomework / 10);

        pointsFromExam += pointsPercentage;

        grade = 3 + 2 * (pointsFromExam - 100 / 5) / (100 / 2);
    }
    
    if (grade < 3){
        grade = 2.00;
    } else if (grade > 6.00){
        grade = 6.00;
    }
    console.log(grade.toFixed(2));
}

console.log(solve(300, 6, 9));
