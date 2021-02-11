import firebase from 'firebase';
import fs from 'fs';

//CSERÉLD LE A SAJÁT APPOD CONFIG OBJECTJÉRE!
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJAcXMAA41ySRxkRb8_nwE64FAIZhM7bY",
    authDomain: "restaurant-db497.firebaseapp.com",
    projectId: "restaurant-db497",
    storageBucket: "restaurant-db497.appspot.com",
    messagingSenderId: "241228285534",
    appId: "1:241228285534:web:8879ba1d47895559e1d6cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

const db = firebase.firestore();

firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    console.log('signed in');
  })
  .catch((error) => {
    console.error(error);
  });

const fileName = './restaurants.json';
let content = [];

fs.readFile(fileName, function read(err, data) {
  if (err) {
    throw err;
  }

  content = JSON.parse(data);
});

firebase.auth().onAuthStateChanged(async (user) => {
  console.log(user);
  if (user) {
    const restaurants = Object.keys(content);

    for (let i = 0; i < restaurants.length; i++) {
      db.collection('restaurant')
        .doc(restaurants[i])
        .set(content[restaurants[i]])
        .then(() => {
          console.log('Document written');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  } else {
    console.log('No user');
  }
});

// -----------------------
// A Fenti kódhoz ne nyúlj!
// -----------------------