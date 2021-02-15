"use strict"

const backend = {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3000
};
const backendUrl = `${backend.protocol}://${backend.host}:${backend.port}`;

fetch(backendUrl + '/tickets')
    .then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(response.statusText);
        }
    })
    .then((adat) => {

        let tbody = document.getElementById("myTicketsTable");
        tbody.innerHTML = '';
        adat.tickets.forEach((tiket) => {
            let row = tbody.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);

            cell1.innerHTML = tiket.id;
            cell2.innerHTML = tiket.reporter;
            cell3.innerHTML = tiket.manufacturer;
            cell4.innerHTML = tiket.serial_number;
            cell5.innerHTML = tiket.description;
            cell6.innerHTML = tiket.reported_at;
            cell7.innerHTML = `<a href="https://www.w3schools.com/html/html_links.asp">Delete</a>`;
        });
        

    })
    .catch(err =>{
        throw new Error(response.statusText);
    });

