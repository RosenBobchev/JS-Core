function solve(ticketsArr, sortingString) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (let i = 0; i < ticketsArr.length; i++) {
        let tokens = ticketsArr[i].split('|');
        let currentDestination = tokens[0];
        let currentPrice = Number(tokens[1]);
        let currentStatus = tokens[2];

        let ticket = new Ticket(currentDestination, currentPrice, currentStatus);
        tickets.push(ticket);
    }

    tickets.sort((a,b) => (a[sortingString] > b[sortingString]) ? 1 : ((b[sortingString] > a[sortingString]) ? -1 : 0));

    return tickets;
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');