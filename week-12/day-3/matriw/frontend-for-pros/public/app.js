const backend = {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3000
};

// http://localhost:3000
const backendUrl = `${backend.protocol}://${backend.host}:${backend.port}`;

const endpoint = {
    singles: backendUrl + '/singles'
};

// http://localhost:3000/singles
// böngészőbe beépített függvény 
fetch(endpoint.singles)
    // ez a szerverről jön
    // itt kellene feldolgozni a header adatokat
    .then((res) => res.json())

    // megvárja hogy megjöjjön minden adat, utána betöltődik
    // ha sikeres volt a betöltés
    .then((res) => {
        const mainElement = document.querySelector('main');
        const h2Element = document.createElement('h2');
        h2Element.textContent = 'Egyedülállók listája';
        const singlesList = document.createElement('ul');

        res.forEach((single) => {
            // ha fals adatok vannak akkor ne jelenjenek meg
            if (typeof single.lastName === 'string' && typeof single.firstName === 'string') {
                const itemElement = document.createElement('li');
                itemElement.textContent = `${single.lastName} ${single.firstName} (${single.birthDate})`;
                singlesList.appendChild(itemElement);
            }
        });

        mainElement.prepend(singlesList);
        mainElement.prepend(h2Element);
    });

const formElement = document.getElementById('regForm');

formElement.addEventListener('submit', (event) => {
    // megakadályozzuk, hogy alapesetben meglegyen/lefusson a submit
    event.preventDefault();

    // megszerezzük a bevitt adatokat kézzel
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    alert(firstName);
    alert(lastName);
    // http://localhost:3000/singles
    // adatokat küldünk a szerverre (backend) 
    // kell az url, és az adat
    fetch(endpoint.singles, {
        method: 'POST',
        headers: {
            // ha ez nincs benne nagy szívás, mert nem tudja mit küldünk nem foglalkozik vele
            //tehát kell egy headers amiben ezt leírjuk
            'Content-Type': 'application/json'
        },
        // a backend formátumában küldjük az adatokat
        // ha megegyezik a kulcs és az érték nem kell kiirni
        // firstName : firstName  lehet egyszerűbben így:
        body: JSON.stringify({
            firstName,
            lastName
        })
    });
});
/*
fetch(endpoint.singles)
    .then((res) => res.json())
    .then((singles) => {
        // loadDataIntoMain(singles);
    });
 */
/*
function loadDataIntoMain(singles) {
    const mainElement = document.querySelector('main');
    const ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    singles.forEach((single) => {
        const liElement = document.createElement('li');
        liElement.textContent = `${single.lastName} ${single.firstName} (${single.birthDate})`;
        ulElement.appendChild(liElement);
    });
}
 */