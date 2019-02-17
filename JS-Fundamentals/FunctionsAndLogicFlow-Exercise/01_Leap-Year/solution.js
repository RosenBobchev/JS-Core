function leapYear() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', clickEvent)

    function clickEvent(e){
        let input = document.querySelector('#exercise input');

        let leapYear = checkLeapYear(input.value);
        let divElement = document.getElementById('year').children;
        let h2Element = divElement[0];
        let innerDivElement = divElement[1];

        if (leapYear){
            h2Element.textContent = 'Leap Year';
        } else {
            h2Element.textContent = 'Not Leap Year';
        }

        innerDivElement.textContent = input.value;
        input.value = '';
    }

    function checkLeapYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
}