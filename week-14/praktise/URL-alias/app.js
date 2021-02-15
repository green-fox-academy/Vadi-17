'use strict';
const fetchURL = 'http://localhost:3000/api/links';

const form = document.querySelector('form');
const url = document.getElementById('url');
const alias = document.getElementById('alias');
const successAlert = document.getElementById('success-alert');
const errorAlert = document.getElementById('error-alert');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    successAlert.classList.add('d-none');
    errorAlert.classList.add('d-none');

    console.log('fetching...');
    const data = {
        "url": url.value,
        "alias": alias.value
    };
    fetch(fetchURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status === 400) {
                throw new Error("Alias already in use, please choose an other one!");
            }
            return response.json();
        })
        .then((responseData) => {
            if (responseData.id >= 0) {
                successAlert.textContent = `Your URL is aliased to ${responseData.alias} and your secret code is ${responseData.secretCode}.`;
                successAlert.classList.remove('d-none');
                form.reset();
            }
        })
        .catch((error) => {
            form.reset();
            errorAlert.textContent = `${error.message}`;
            errorAlert.classList.remove('d-none');
        });
    //.then(data => console.log(data));
});