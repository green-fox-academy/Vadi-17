'use strict';

const namesArray = [
  'Egg', 'Tom', 'Mary', 'Brian', 'Daisy'
];

const namesInput = document.getElementById('input-name');

const url = 'http://127.0.0.1:5000/tickets';

const postMethod = {
  method: 'POST',
  mode: 'cors',
  headers: {
    "Content-Type": "application/json"
  }
};




namesArray.forEach(name => {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = name;
  namesInput.appendChild(option);
});


const form = document.getElementById('form-input');




form.addEventListener('submit', (event) => {

  event.preventDefault();

  console.log(event.target);

  if (form.checkValidity()) {

    form.classList.remove('was-validated');

    const data = getInputData();
    postMethod['body'] = JSON.stringify(data);

    console.log(postMethod);

    fetch(url, postMethod)
      .then(response => {

        if (response.status !== 200) {
          throw new Error('Hiba van, Géza!');
        } else {
          return response.json();
        }

      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });

  } else {
    form.classList.add('was-validated');
  }

});

function getInputData() {
  const name = document.getElementById('input-name').value;
  const manufacturer = document.getElementById('input-manufacturer').value;
  const serial = document.getElementById('input-serial').value;
  const description = document.getElementById('input-description').value;

  return {
    name, manufacturer, serial, description
  };
}


document.getElementById('fetch-button').addEventListener("click", (event) => {
  event.preventDefault();

  fetch('http://127.0.0.1:5000/tickets')
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Ez gáz! - ', response.statusText);
      } else {
        return response.json();
      }
    })
    .then(response => {

      pasteTableData(response);

    })
    .catch(err => {
      console.error('hiba: ', err);
    });

});


const tableHeaderMap = [
  'id', 'reporter', 'manufacturer', 'serial_number', 'description', 'reported_at'
];

function pasteTableData(response) {

  const table = document.querySelector('table');
  const tbody = document.querySelector('tbody');

  response.tickets.forEach(ticket => {

    const row = document.createElement('tr');

    const id = 'ticket_' + ticket.id;

    row.setAttribute('id', id);

    tableHeaderMap.forEach(header => {
      const td = document.createElement('td');
      td.textContent = ticket[header];
      row.appendChild(td);
    })

    const td = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-secondary');
    deleteButton.setAttribute('type', 'submit');
    deleteButton.style.color = 'black';
    deleteButton.addEventListener('click', (event) => {
      event.preventDefault();

      const parent = event.target.parentNode.id;
      parent.classList.add('d-none');

    });

    row.appendChild(deleteButton);

    tbody.appendChild(row);
  });
}