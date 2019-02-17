function solve() {
    let buttons = Array.from(document.querySelectorAll('section button'));
    let summaryButton = document.getElementById('summary');
    let output = document.getElementById('output');
    let obj = {
        'Levski' : {
            'A' : 10,
            'B' : 7,
            'C' : 5,
        },
        'Litex' : {
            'A' : 10,
            'B' : 7,
            'C' : 5,
        },
        'VIP' : {
            'A' : 25,
            'B' : 15,
            'C' : 10,
        }
    };
    let totalProfit = 0;
    let fans = 0;

    buttons.forEach(x => x.addEventListener('click', clickEvent));
    summaryButton.addEventListener('click', summary);

    function clickEvent(e){
        let seat = e.target.textContent;
        let zone = getParentNodeByTagName(e.target, 'SECTION').classList[0];
        let sector = String.fromCharCode(65 + e.target.parentElement.cellIndex);

       if (e.target.style.backgroundColor === ''){
           e.target.style.backgroundColor = 'rgb(255,0,0)';
           fans += 1;
           totalProfit += obj[zone][sector];
           output.textContent += ` Seat ${seat} in zone ${zone} sector ${sector} was taken.\n`;
       }  else {
           output.textContent += ` Seat ${seat} in zone ${zone} sector ${sector} is unavailable.\n`;
       }
    }

    function summary() {
        let span = summaryButton.getElementsByTagName('span')[0];
        span.textContent = `${totalProfit} leva, ${fans} fans.`;
    }

    function getParentNodeByTagName(element, tagName) {
        while ( element !== null && element.tagName !== tagName){
            element = element.parentNode;
        }

        return element;
    }
}