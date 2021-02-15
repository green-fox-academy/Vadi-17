"use strict"

const backend = {
    protocol: 'http',
    host: '127.0.0.1',
    port: 5000
};
const backendUrl = `${backend.protocol}://${backend.host}:${backend.port}`;

const loginFormElement = document.getElementById('loginForm');


loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("itt vagyok");

    // const firstName = document.getElementById('firstName').value;
    // const lastName = document.getElementById('lastName').value;
    // const password = document.getElementById('password').value;
    // const email = document.getElementById('email').value;
    // const police_car = document.getElementById('police-cars').checked;
    // const diplomat_cars = document.getElementById('diplomat-cars').checked;
    // const selectedRadioElement = document.querySelector('[name=filter]:checked');
    // const autoSelected = document.querySelector('[name=filter]:checked').value;
    // const pgdpr = document.getElementById('gdpr').checked;
    // const nameSelected = document.querySelector('.form-select').value;
    // console.log(firstName);
    // console.log(lastName);
    // console.log(password);
    // console.log(email);
    // console.log(police_car);
    // console.log(diplomat_cars);
    // console.log(selectedRadioElement);
    // console.log(pgdpr);
    // console.log(autoSelected);
    // console.log(nameSelected);





});

