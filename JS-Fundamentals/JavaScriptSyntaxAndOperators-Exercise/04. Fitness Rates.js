function Fitness(day, service, time) {
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        if (time >= 8.00 && time <= 15.00 && service === "Fitness"){
            price = 5.00;
        }
        else if (time > 15.00 && time <= 22.00 && service === "Fitness") {
            price = 7.50;
        }
        if (time >= 8.00 && time <= 15.00 && service === "Sauna") {
            price = 4.00;
        }
        else if (time > 15.00 && time <= 22.00 && service === "Sauna") {
            price = 6.50;
        }
        if (time >= 8.00 && time <= 15.00 && service === "Instructor") {
            price = 10.00;
        }
        else if (time > 15.00 && time <= 22.00 && service === "Instructor") {
            price = 12.50;
        }
    }

    if (day === "Saturday" || day === "Sunday") {
        if (service === "Fitness") {
            price = 8.00;
        }
        else if (service === "Sauna") {
            price = 7.00;
        }
        else if(service === "Instructor") {
            price = 15.00;
        }
    }

    console.log(price);
}

Fitness('Sunday', 'Fitness', 8);