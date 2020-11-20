'use strict';
const telephoneBook = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982"
}
for (let key in telephoneBook) {
    if (key === "John K. Miller") {
        console.log(telephoneBook[key]);
    }
}

for (let key in telephoneBook) {
    if (telephoneBook[key] === "307-687-2982") {
        console.log(key);
    }
}
console.log(telephoneBook.hasOwnProperty(['Chris E. Myer']));
// for (let value of Object.values(telephoneBook)) {
//     if (value === "307-687-2982") {
//         console.log(value);
//     }
// }
