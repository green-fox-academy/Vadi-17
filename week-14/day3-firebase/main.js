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

function myFunction1() {
    let tbody = document.getElementById("myTable");
    tbody.innerHTML = '';
    db.collection('restaurant')
        .get()
        .then((restaurant) => {
            restaurant.forEach((allData) => {
                kiir(allData);
            })
        });
}

function myFunction2() {
    let tbody = document.getElementById("myTable");
    tbody.innerHTML = '';
    const restRef = db.collection('restaurant')

    const snapshot = restRef
        .limit(5)
        //.where('bronx', '==', borough)
        .get();
    snapshot.forEach(doc => {
        console.log('id:  ' + doc.id)
        console.log('name:  ' + doc.data().name);
        console.log('borough:  ' + doc.data().borough);
        console.log('cuisine:  ' + doc.data().cuisine);
        console.log('zipcode:  ' + doc.data().address.zipcode);
    });
}

function myFunction3() {
    let tbody = document.getElementById("myTable");
    tbody.innerHTML = '';
    db.collection('restaurant').doc('30112340')
        .get()
        .then((restaurant) => {
            restaurant.forEach((allData) => {
                kiir(allData);
            })
        });
}

function myFunction4() {
    db.collection('restaurant').where("borough", "==", "Bronx")
        .limit(5)
        .get()
        .then((restaurant) => {
            restaurant.forEach((allData) => {
                kiir(allData);
            })
        });
}

function myFunction5() {
    db.collection('restaurant')
        .get()
        .then((restaurant) => {
            restaurant.forEach((allData) => {
                kiir(allData);
            })
        });
}

function myFunction6() {
    db.collection('restaurant')
        .get()
        .then((restaurant) => {
            restaurant.forEach((allData) => {
                kiir(allData);
            })
        });
}







document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Ha a napba nézel, s elveszted látásod, magadat okold, ne a nagy sugárzást";
});

function kiir(allData) {
    let restaurant = allData.data()
    let sumScore = 0;
    for (let i = 0; i < restaurant.grades.length; i++) {
        sumScore += restaurant.grades[i].score
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
    cell1.innerHTML = allData.id;
    cell2.innerHTML = restaurant.name;
    cell3.innerHTML = restaurant.address.street;
    cell4.innerHTML = restaurant.borough;
    cell5.innerHTML = restaurant.cuisine;
    cell6.innerHTML = restaurant.address.zipcode;
    cell7.innerHTML = sumScore;
}