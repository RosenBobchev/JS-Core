class Rat{
    constructor(name){
        this.name = name;
        this.currentRatAssociates = [];
    }

    unite(obj){
        if (obj instanceof Rat) {
            this.currentRatAssociates.push(obj);
        }
    }

    getRats(){
        return this.currentRatAssociates;
    }

    toString(){
        let result = [];
        result.push(this.name);
        for(let rat of this.currentRatAssociates){
            result.push(`##${rat.name}`);
        }

        return result;
    }
}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho



