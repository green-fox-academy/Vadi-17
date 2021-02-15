'use strict';


const api = 'http://127.0.0.1:5000';

document.querySelector('form').addEventListener('submit', (event) => {

  event.preventDefault();

  const nameElement = document.getElementById('input-name');


  const plateElement = document.getElementsByTagName('license-plate');


  const ch1 = document.getElementById('check-1');
  const ch2 = document.getElementById('check-2');
//   ch2.checked = false;

  const nameValue = nameElement.value;
  const plate = plateElement.value;
  const check_1 = ch1.checked;
  const check_2 = ch2.checked;

  const queries = {
    nameValue
  };

  /*  if (plate !== '') {
    queries['plate'] = plate;
  } */
  console.log(queries);
  if (check_1) {
    queries['check_1'] = true;
  }
  console.log(queries);
  if (check_2) {
    queries['check_2'] = true;
  }

console.log(queries);
  nameElement.value = "";
  ch1.checked = false;

  const queryString = new URLSearchParams(queries).toString();
  const url = api + '?' + queryString;


  /* const body = JSON.stringify(queries); */

  console.log(url);


//   fetch(url, {
//     method: 'POST',
//     headers: {
//       "Content-type": "application/json"
//     },
//     body
//   })
//     .then(response => {

//       if (response.status !== 200) {
//         throw new Error('not ok!');
//       } else {
//         response.json();
//       }
//     }).then(response => {

//       workHard(response);

//     })
//     .catch(err => {

//       document.div.classlist.add('warning')

//     });
// });


// // fetch - GET

// fetch(url)
//   .then(response => {
//     if (response.status !== 200) {
//       throw new Error('Hiba!');
//     } else {
//       response.json();
//     }
//   })
//   .then(response => {

//     //html manipulate
//     workHard(response);

//   })
//   .catch(err => {

//     //dom manipulate
//     /*  visszajelzés a felhasználónak, pl. div => d-none */

//     console.log(err.message);
//   });


// // fetch - POST

// fetch(url, {
//   method: 'POST',
//   headers: {
//     "Content-type": "application/json"
//   },
//   body  // JSON.stringify !!!
// });

// // numberRegex = '^[0-9]*$'


})