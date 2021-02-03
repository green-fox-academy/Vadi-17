document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
  });

import fetch from "node-fetch";
let fetchInit = {
    // ugye alap értékeket állítok be igazából nincs rá szükség
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
}

fetch(`http://swapi.dev/api/people/?search=Anakin`, fetchInit)
    // a fetch egy promist ad vissza, itt tehát egy promist kapok ezért hívhatom meg a then-t
    .then(
        response => response.json(), // ez a .json metodus kicsomagolja a bodyban kapott adatokat
    )
    .then((data) => {
        for (let person of data.results) {
            console.log("Name:");
            console.log(person.name);

            let node = document.createElement("LI");
            let textnode = document.createTextNode("Water");
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);




            console.log("Films:");
            person.films.forEach(element => {
                getServerData(element)
                    .then((data) => {
                        console.log(data.title);
                    });
            });
        }
    });



function getServerData(url) {
    return fetch(url)
        .then(response => response.json(),
    );
}
