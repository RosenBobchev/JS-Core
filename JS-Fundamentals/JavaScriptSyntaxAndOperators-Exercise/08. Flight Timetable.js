function Flight(input) {
    flightDirection = input[0];
    townName = input[1];
    flightTime = input[2];
    flightNumber = input[3];
    gateNumber = input[4];

    console.log(`${flightDirection}: Destination - ${townName}, Flight - ${flightNumber}, Time - ${flightTime}, Gate - ${gateNumber}`);
}

Flight(['Departures', 'London', '22:45', 'BR117', '42']);