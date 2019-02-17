function solve() {
    let button = document.getElementById('searchBtn');
    button.addEventListener('click', clickEvent);
    let trValues = document.querySelectorAll('tbody tr');

    function clickEvent(e) {
        let searchQuery = document.getElementById('searchField').value.toLowerCase();

        for (const tr of trValues){
            tr.className = '';
        }

        if (searchQuery){
            for (const tr of trValues){
                for (const td of tr.getElementsByTagName('td')){
                    let tdValue = td.textContent.toLowerCase();
                    
                    if (tdValue.includes(searchQuery)){
                        tr.className = 'select';
                    }
                }
            }

            document.getElementById('searchField').value = '';
        }
    }
}