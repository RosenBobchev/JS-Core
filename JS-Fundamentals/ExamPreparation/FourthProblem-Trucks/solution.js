function solve() {
    let buttons = document.querySelectorAll('#exercise fieldset button');

    Array.from(buttons).filter(x => x.textContent === 'Add new truck')[0].addEventListener('click', AddTrack);
    Array.from(buttons).filter(x => x.textContent === 'Add new tires')[0].addEventListener('click', AddTires);
    Array.from(buttons).filter(x => x.textContent === 'Go to work')[0].addEventListener('click', goToWork);
    document.querySelector('#exercise section > button').addEventListener('click', endOfShift);

    let backUpTireSets = document.querySelectorAll('#exercise section')[1].querySelectorAll('fieldset > div')[0];
    let trucksResult = document.querySelectorAll('#exercise section')[1].querySelectorAll('fieldset div')[1];
    let textAreaResult = document.querySelector('#exercise section textarea');

    let trucks = [];
    let tires = [];

    function AddTrack() {
        let newTruckPlateNumber = document.getElementById('newTruckPlateNumber').value;
        let newTruckTiresCondition = document.getElementById('newTruckTiresCondition').value
            .split(' ').map(Number);

        let truck = {
            plateNumber: newTruckPlateNumber,
            tiresCondition: newTruckTiresCondition,
            distance: 0
        };

        appendTruck(newTruckPlateNumber);
        trucks.push(truck);
    }

    function AddTires() {
        let newTiresCondition = document.getElementById('newTiresCondition').value.split(' ').map(Number);
        tires.push(newTiresCondition);
        appendTireSet(newTiresCondition)
    }

    function goToWork() {
        let distance = Number(document.getElementById('distance').value);
        let workPlateNumber = document.getElementById('workPlateNumber').value;

        if (!trucks.some(x => x.plateNumber === workPlateNumber)){
            return;
        }

        let truck = trucks.find(x => x.plateNumber === workPlateNumber);
        if (Math.min(...truck.tiresCondition) * 1000 < distance){
            changeTires(truck);
        }

        if (Math.min(...truck.tiresCondition) * 1000 >= distance){
            truck.distance += distance;
            truck.tiresCondition = truck.tiresCondition.map(x => x - distance / 1000);
        }
    }

    function changeTires(truck) {
        if (tires.length > 0){
            truck.tiresCondition = tires.shift();
            return true;
        }

        return false;
    }

    function endOfShift(e){
        trucks.forEach(x => {
            textAreaResult.value += `Truck ${x.plateNumber} has traveled ${x.distance}.\n`
        });

        textAreaResult.value += `You have ${tires.length} sets of tires left.\n`
    }

    function appendTireSet(tireSet){
        let div = document.createElement('div');
        div.classList.add('tireSet');
        div.textContent = tireSet.join(' ');

        backUpTireSets.appendChild(div);
    }

    function appendTruck(plateNumber){
        let div = document.createElement('div');
        div.classList.add('truck');
        div.textContent = plateNumber;

        trucksResult.appendChild(div);
    }
}