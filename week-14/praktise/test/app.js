'use strict';

const backendUrl = "http://localhost:8000";


const tableMaping = [
    'id', 'reporter', 'manufacturer', 'serial_number', 'description', 'reported_at', 'actions'
];

const createTicketForm = document.getElementById('create-ticket');
const reportBtn = document.getElementById('report-btn');


createTicketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const indexHTML = document.querySelector('.container');
    const ticketsHTML = document.querySelector('.container2');
    indexHTML.classList.add('d-none');
    ticketsHTML.classList.remove('d-none');
    const searchEndpoint = backendUrl + "/tickets";
    fetch(searchEndpoint)
        .then((response) => {
            if (response.status === 200) {
                return response.json()

            } else {
                throw new Error(response.statusText);
            }
        })
        .then((data) => {
            const result = data.tickets;
            const tbody = document.getElementById('report-datas');
            console.log(result)
            if (result.length > 0) {
                result.forEach((row) => {
                    const rowElement = document.createElement('tr');

                    tableMaping.forEach((key) => {
                        if (key == 'actions') {
                            const btnDelete = document.createElement('button');
                            btnDelete.textContent = 'delete';
                            rowElement.appendChild(btnDelete);
                            btnDelete.addEventListener('click', (e) => {
                                e.preventDefault();
                                rowElement.remove();
                            })
                        }
                        if (key == 'reported_at') {
                            const date = document.createElement('td');
                            date.textContent = new Date();
                            rowElement.appendChild(date);
                            tbody.appendChild(rowElement);
                        } else {
                            const element = document.createElement('td');
                            element.textContent = row[key];
                            rowElement.appendChild(element);
                            tbody.appendChild(rowElement);
                        }

                    })
                })
            }
        })
        .catch(err => {
            const errorElement = document.getElementById('form-error');
            errorElement.textContent = response.statusText;
            errorElement.classList.remove('d-none');
        })
})