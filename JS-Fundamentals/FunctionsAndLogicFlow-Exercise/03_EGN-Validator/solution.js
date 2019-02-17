function validate() {
    let button = document.querySelector('#exercise button');
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    
    button.addEventListener('click', clickEvent);
    
    function clickEvent() {
        let yearInput = document.getElementById('year');
        let selected = document.getElementById('month');
        let monthIndex = selected.options[selected.selectedIndex].index;
        let dateInput = document.getElementById('date');
        let maleInput = document.getElementById('male');
        let femaleInput = document.getElementById('female');
        let regionalCodeInput = document.getElementById('region');

        let year = yearInput.value.toString().substr(2, 2);
        let month = '';
        if (monthIndex < 10){
            month = '0' + monthIndex;
        } else {
            month = monthIndex.toString();
        }

        let dateForEGN = '';
        if (dateInput.value < 10){
            dateForEGN = '0' + dateInput.value;
        } else {
            dateForEGN = dateInput.value;
        }

        let regionCode = regionalCodeInput.value.toString().substr(0, 2);
        if (maleInput.checked){
            regionCode += '2';
        } else if (femaleInput.checked){
            regionCode += '1';
        }

        let initialEGN = year + month + dateForEGN + regionCode;

        let reminder = lastNumber(initialEGN);

        let EGN = initialEGN + reminder;

        let pElement = document.createElement('p');
        pElement.textContent = `Your EGN is: ${EGN}`;
        let result = document.getElementById('egn');
        result.appendChild(pElement);

        clearInputFields(yearInput, selected, dateInput, maleInput, femaleInput, regionalCodeInput);
    }

    function lastNumber(initialEGN) {

        for (let i = 0; i < 9; i++) {
            let temp1 = initialEGN[i];
            let temp2 = weights[i];

            sum += temp1 * temp2;
        }

        let reminder = sum % 11;

        if (reminder === 10){
            reminder = 0;
        }

        return reminder;
    }

    function clearInputFields(yearInput, selected, dateInput, maleInput, femaleInput, regionalCodeInput) {
        yearInput.value = '';
        selected.value = '';
        dateInput.value = '';
        maleInput.checked = false;
        femaleInput.checked = false;
        regionalCodeInput.value = '';
    }
}