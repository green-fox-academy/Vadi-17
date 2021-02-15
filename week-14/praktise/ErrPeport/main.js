"use strict"

const backend = {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3000
};
const backendUrl = `${backend.protocol}://${backend.host}:${backend.port}`;

const loginFormElement = document.getElementById('loginForm');


loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const police_car = document.getElementById('police-cars').checked;
    const diplomat_cars = document.getElementById('diplomat-cars').checked;
    const selectedRadioElement = document.querySelector('[name=filter]:checked');
    const autoSelected = document.querySelector('[name=filter]:checked').value;
    const pgdpr = document.getElementById('gdpr').checked;
    const nameSelected = document.querySelector('.form-select').value;
    console.log(firstName);
    console.log(lastName);
    console.log(password);
    console.log(email);
    console.log(police_car);
    console.log(diplomat_cars);
    console.log(selectedRadioElement);
    console.log(pgdpr);
    console.log(autoSelected);
    console.log(nameSelected);



    fetch(backendUrl + '/users')
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error(response.statusText);
            }
        })
        .then((singles) => {
            loadDataIntoMain_List(singles);
            loadDataInto_MyTable(singles);
            loadDataInto_Select(singles);
            //     singles.forEach((single) => {
            //         console.log(single.lastName);
    
            //     })
        });


});



function loadDataIntoMain_List(adat) {
    const mainElement = document.querySelector('main');
    const ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    adat.users.forEach((user) => {
        const liElement = document.createElement('li');
        liElement.textContent = `${user.lastName} ${user.firstName}`;
        ulElement.appendChild(liElement);
    });
}

function loadDataInto_MyTable(adat) {
    let tbody = document.getElementById("myTable");
    tbody.innerHTML = '';
    adat.users.forEach((user) => {
        let row = tbody.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = user.id;
        cell2.innerHTML = user.firstName;
        cell3.innerHTML = user.lastName;
        cell4.innerHTML = user.firstName;
    });


}

function loadDataInto_Select(adat) {

    let myParent = document.getElementById("mySelect");

    //Create array of options to be added
    let array = ["Volvo", "Saab", "Mercades", "Audi"];

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.classList = "form-select";
    myParent.appendChild(selectList);

    //Create and append the options
    for (let i = 0; i < adat.users.length; i++) {
        let option = document.createElement("option");

        option.textContent = adat.users[i].firstName +" "+ adat.users[i].lastName;
        selectList.appendChild(option);
    }



}

