const firebaseConfig = {
    apiKey: "AIzaSyCJAcXMAA41ySRxkRb8_nwE64FAIZhM7bY",
    authDomain: "restaurant-db497.firebaseapp.com",
    projectId: "restaurant-db497",
    storageBucket: "restaurant-db497.appspot.com",
    messagingSenderId: "241228285534",
    appId: "1:241228285534:web:8879ba1d47895559e1d6cf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection('restaurant')
    .get()
    .then((restaurant) => {
        restaurant.forEach((allData) => {
            let restaurant = allData.data()
            let sumNumber = 0;
            for (let i = 0; i < restaurant.grades.length; i++) {
                sumNumber += restaurant.grades[i].score
            }
            let tbody = document.getElementById("myTable");
            let row = tbody.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            cell1.innerHTML = adat.id;
            cell2.innerHTML = restaurant.name;
            cell3.innerHTML = restaurant.address.street;
            cell4.innerHTML = restaurant.borough;
            cell5.innerHTML = restaurant.cuisine;
            cell6.innerHTML = restaurant.address.zipcode;
            cell7.innerHTML = sumNumber;

        })
    });
