


const formElement = document.getElementById('regForm');

formElement.addEventListener('submit', (event) => {

    event.preventDefault();

    const firstName = document.getElementById('firstName').value;

    let searchResult = darthVadi(firstName)

    const mainElement = document.querySelector('main');
    const h2Element = document.createElement('h2');
    h2Element.textContent = 'list movies';
    const singlesList = document.createElement('ul');
    const itemElement = document.createElement('li');


    itemElement.textContent = searchResult.name + " Birth:"+searchResult.birth_year
    singlesList.appendChild(itemElement);

    for (let i = 0; i < searchResult.films.length; i++) {
        let itemElement = document.createElement('li');
        itemElement.textContent = darthFilm(searchResult.films[i])
        singlesList.appendChild(itemElement);
        mainElement.prepend(singlesList);
    }
    mainElement.prepend(singlesList);
    mainElement.prepend(h2Element);

});



function darthVadi(firstName) {
    let result
    const baseApiUrl = `https://swapi.dev/api/people/?search=${firstName}`;

    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', baseApiUrl);
    httpRequest.send(null);


    const getUserRequest = new XMLHttpRequest();
    getUserRequest.open('GET', baseApiUrl, false);
    getUserRequest.send(null);

    const response = getUserRequest.response;
    const user = JSON.parse(response);
    result = {
        "name": user.results[0].name,
        "height": user.results[0].height,
        "birth_year": user.results[0].birth_year,
        "films": user.results[0].films
    }

    return result
}

function darthFilm(filmUrl) {
    let resultFilm
    const baseApiUrl = filmUrl;
 
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', baseApiUrl);
    httpRequest.send(null);


    const getUserRequest = new XMLHttpRequest();
    getUserRequest.open('GET', baseApiUrl, false);
    getUserRequest.send(null);

    const response = getUserRequest.response;
    const user = JSON.parse(response);
    
    resultFilm = user.title +" "+ user.release_date
 
    return resultFilm;
}
