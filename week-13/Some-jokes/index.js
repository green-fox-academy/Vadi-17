
'use strict';
// import fetch from "node-fetch";

let button = document.querySelector('button');
let container = document.getElementById('container');

button.addEventListener('click', () => {
    fetch(`http://api.icndb.com/jokes/random`)
        // http://api.icndb.com/jokes/id/1
        // a fetch egy promist ad vissza, itt tehát egy promist kapok ezért hívhatom meg a then-t
        .then(
            response => response.json(), // ez a .json metodus kicsomagolja a bodyban kapott adatokat
        )
        .then((data) => {
            container.textContent = data.value.joke;
            // console.log(data.value.joke);
        });

});
