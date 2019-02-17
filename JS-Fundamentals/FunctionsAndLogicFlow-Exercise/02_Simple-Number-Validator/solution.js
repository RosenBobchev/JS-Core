function validate() {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    
    let button = document.querySelector('#exercise > fieldset > div > button');

    button.addEventListener('click', clickEvent);

    function clickEvent(){
        let input = document.querySelector('#exercise > fieldset > div > input').value;

        let lastDigit = input[input.length - 1];

        for (let i = 0; i < 9; i++) {
            let temp1 = input[i];
            let temp2 = weights[i];
            
            sum += temp1 * temp2;
        }
        
        let reminder = sum % 11;
        
        if (reminder === 10){
            reminder = 0;
        }

        let result = document.getElementById('response');
        
        if (reminder === +lastDigit) {
            result.textContent = 'This number is Valid!';
        } else{
            result.textContent = 'This number is NOT Valid!';
        }
    }
}