function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
        btn.addEventListener('click', clickEvent)
    });

    function clickEvent(event) {
        let parentElement = this.parentElement;

        let radioButton = parentElement.querySelectorAll('input')[0];
        if (!radioButton.checked){
            let hiddenFieldElement = parentElement.querySelector('[id$="HiddenFields"]');

            if (this.textContent === 'Show more') {
                hiddenFieldElement.style.display = 'block';
                this.textContent = 'Hide it';
            } else {
                hiddenFieldElement.style.display = 'none';
                this.textContent = 'Show more';
            }
        }
    }
} 