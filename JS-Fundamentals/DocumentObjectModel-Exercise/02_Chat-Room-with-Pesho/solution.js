function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
        btn.addEventListener('click', clickEvent)
    });

    function clickEvent(event) {
        let divElement = document.createElement('div');
        let spanElement = document.createElement('span');
        let pElement = document.createElement('p');

        if (event.target.name === 'myBtn'){
            divElement.style.textAlign = 'left';
            spanElement.textContent += 'Me';
            pElement.textContent += document.getElementById('myChatBox').value;
        }
        else if (event.target.name === 'peshoBtn'){
            divElement.style.textAlign = 'right';
            spanElement.textContent += 'Pesho';
            pElement.textContent += document.getElementById('peshoChatBox').value;
        }

        document.getElementById('peshoChatBox').value = "";
        document.getElementById('myChatBox').value = "";
        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);

        let chatBox = document.getElementById('chatChronology');
        chatBox.appendChild(divElement);
    }
}
