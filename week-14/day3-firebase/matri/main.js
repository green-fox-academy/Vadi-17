// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjzLWM5fOpwxdPvbF6JFgTs4ARI2zD5EY",
  authDomain: "database-vadi.firebaseapp.com",
  projectId: "database-vadi",
  storageBucket: "database-vadi.appspot.com",
  messagingSenderId: "1068490018550",
  appId: "1:1068490018550:web:ec4a3408f426b8b4b0a6d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 
db.collection('users')
  .onSnapshot(processData);

function getAll() {
    db.collection('users')
        .orderBy('username', 'desc') // asc: ascending (növekvő), desc: descending (csökkenő)
        .get()
        .then(processData)
        .catch((error) => {
            console.error(error);
        });
}

function getUserByUsername() {
    const username = document.getElementById('search-username').value;

    db.collection('users')
    // .where('username', '==', username)
    .get()
    .then(processData)
    .catch((error) => {
        console.error(error);
    });
}

function add() {
    db.collection('users')
        .add(getFormData())
        .then((doc) => {
            console.log(`OK: ${ doc.id }`);

            fillForm(null, null, null, null);
        })
        .catch((error) => {
            console.error(error);
        });
}

function updateForm(id, doc) {

    fillForm(doc.username, doc.password, doc.last_name, doc.first_name);

    document.getElementById('update-btn').onclick = () => update(id);
}

function update(id) {
    db.collection('users')
        .doc(id)
        .set(getFormData())
        .then(() => {
            console.log(`UPDATE OK`);

            fillForm(null, null, null, null);
            document.getElementById('update-btn').onclick = null;
        })
        .catch((error) => {
            console.error(error);
        });
}

function remove(id) {
    db.collection('users')
        .doc(id)
        .delete()
        .then(() => {
            console.log(`DELETE OK`);
        })
        .catch((error) => {
            console.error(error);
        });
}

function fillForm(username, password, lastName, firstName) {

    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
    document.getElementById('last_name').value = lastName;
    document.getElementById('first_name').value = firstName;
}

function getFormData() {
    return {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        last_name: document.getElementById('last_name').value,
        first_name: document.getElementById('first_name').value
    };
}

function processData(data) {
    const tbody = document.querySelector('table#users tbody');
    tbody.innerHTML = '';

    data.forEach((doc) => {
        const user = doc.data();

        const tr = document.createElement('tr');
    
        const tdUsername = document.createElement('td');
        tdUsername.textContent = user.username;

        const tdPassword = document.createElement('td');
        tdPassword.textContent = user.password;

        const tdLastname = document.createElement('td');
        tdLastname.textContent = user.last_name;

        const tdFirstname = document.createElement('td');
        tdFirstname.textContent = user.first_name;

        const tdActions = document.createElement('td');
        const updateButton = document.createElement('button');
        updateButton.textContent = 'update';
        updateButton.onclick = () => updateForm(doc.id, user);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.onclick = () => remove(doc.id);

        tdActions.appendChild(updateButton);
        tdActions.appendChild(deleteButton);

        tr.appendChild(tdUsername);
        tr.appendChild(tdPassword);
        tr.appendChild(tdLastname);
        tr.appendChild(tdFirstname);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    });
} 