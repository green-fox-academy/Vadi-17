import firebase from 'firebase';

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

const restRef = db.collection('restaurant') .doc('30112340')
const doc = restRef.get();
if (!doc.exists) {
    console.log('No such document!');
} else {
    console.log('Document data:', doc.data());
}