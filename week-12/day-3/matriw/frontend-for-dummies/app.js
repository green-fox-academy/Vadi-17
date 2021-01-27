const backend = {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3000
};
const backendUrl = `${backend.protocol}://${backend.host}:${backend.port}`;

const endpoint = {
    singles: backendUrl + '/singles'
};

fetch(endpoint.singles)
    .then((res) => res.json())
    .then((singles) => {
        loadDataIntoMain(singles);
    });

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