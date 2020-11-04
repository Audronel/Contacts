
let filterInput = document.querySelector('#filterInput')
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('names');
    // get li from ul
    let li = ul.querySelectorAll('li.collection-item')
    // loop through collection-item list
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display ='none'
        }
    }
}