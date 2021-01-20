'use strict'

const inputText = document.querySelector('input[type="text"]')
const log = document.getElementById('log')

const teszt =document.querySelector('form')
// console.dir(teszt);
teszt.addEventListener('submit',(event) => {
    log.textContent = `Gombnyomás ${event.target.value}`
})




const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



inputText.addEventListener('invalid', logValue)

function logValue(event) {
    // let ttt = ` ${event.target.value}˙;
    if(event.target.value ===""){
        const usernameTxt = document.querySelector('input[type=text]');
        console.dir(usernameTxt);
        usernameTxt.setCustomValidity("Üresen hagyta a USERNAME mezőt!");

        log.textContent = `Üres a USERNAME${event.target.value}`
    }else{
        log.textContent = `Név: ${event.target.value}`
    }
}
const inputPassword = document.querySelector('input[type="password"]')
const logpassw = document.getElementById('passw')

inputPassword.addEventListener('invalid', logPasswValue)

function logPasswValue(event) {
    // let ttt = ` ${event.target.value}˙;
    if(event.target.value ===""){
        logpassw.textContent = `Üres a jelszó${event.target.value}`
    }
}