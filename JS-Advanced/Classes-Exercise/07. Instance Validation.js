class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (!Number.isInteger(+value) || value.length !== 6){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const regex = /[a-zA-Z0-9]+@[a-zA-z.]+/gm;
        let correctEmail = regex.test(value);

        if (!correctEmail) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        const regex = /[a-zA-Z]+/gm;
        let correctFirstName = regex.test(value);

        if (!correctFirstName){
            throw new TypeError('First name must contain only Latin characters');
        }

        if (value.length < 3 || value.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        const regex = /[a-zA-Z]+/gm;
        let correctLastName = regex.test(value);

        if (!correctLastName){
            throw new TypeError('Last name must contain only Latin characters');
        }

        if (value.length < 3 || value.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        this._lastName = value;
    }

}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');