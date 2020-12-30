console.log('before window onload');



window.onload = function () {
    console.log("windows loadod");

};
// while(true){

// }
setTimeout(function () {
    console.log('settimeout loaded');
}, 0);

const interval1 = setInterval(function () {
    console.log('setinterval 1 loaded');
    clearInterval(interval1);
    for (let i = 0; i < 99; i++) { }
}, 30);
const interval2 = setInterval(function () {
    console.log('setinterval 2 loaded');
    clearInterval(interval2);
    for (let i = 0; i < 99; i++) { }
}, 30);

console.log("after windows loaded");

// document.querySelector('#sea').onload = function() {
//      alert('image loaded');
// };
// window.addEventListener('keypress', function(event) {
//     console.log(event);
// });
// window.addEventListener('mouseup', function(event) {
//     console.log(event);
// });
// const input = {}
// window.addEventListener('keyup', (event) => {
//     input[event.key] = true
//     console.log(event);
//     console.log(event.key);
// });
// window.addEventListener('keydown', (event) => {
//     console.log(event);
// });

// console.log(direction);
// console.log(direction.up);
// console.log(direction.left);


document.body.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
    const direction = Object.freeze({
        up: "ArrowUp",
        right: "ArrowRight",
        down: "ArrowDown",
        left: "ArrowLeft"
      })
    // Nyilak kezelése
    console.log(event.key);
    switch (event.key) {
      case direction.up:
        alert('fel');
        break;
      case direction.right:
        alert('jobra');
        break;
      case direction.down:
        alert('le');
        break;
      case direction.left:
        alert('balra');
        break;
    }
  }