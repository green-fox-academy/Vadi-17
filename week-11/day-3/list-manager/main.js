'use strict';
const body = document.querySelector('body');
const main = document.createElement('main');
body.appendChild(main);

const leftBox = document.createElement('ui');
const rightBox = document.createElement('ui');
const centerBox = document.createElement('div');

main.appendChild(leftBox);
main.appendChild(rightBox);
main.appendChild(centerBox);

const foodArray = ['bread', 'milk', 'orange', 'tomato', 'next food'];
for (let i = 0; i < foodArray.length; i++) {
    const newFood = document.createElement('li');
    newFood.textContent = foodArray[i];
    leftBox.appendChild(newFood);
}
console.log(leftBox);

const buttonUp = centerBox.appendChild(document.createElement('button'));
buttonUp.textContent = "Up";
const buttonGoRight = centerBox.appendChild(document.createElement('button'));
buttonGoRight.textContent = ">";
const buttonDelete = centerBox.appendChild(document.createElement('button'));
buttonDelete.textContent = "X";
const buttonDown = centerBox.appendChild(document.createElement('button'));
buttonDown.textContent = "Down";


console.log(centerBox);
document.addEventListener('DOMContentLoaded', function () {
    buttonUp.addEventListener('click', () => {
        alert("up")
    });

    buttonDown.addEventListener('click', () => {
        alert("down")
    });

    buttonGoRight.addEventListener('click', () => {
        alert("Lets go right")
        const newFood = document.createElement('li');
        newFood.textContent = "első";
        rightBox.appendChild(newFood);



    });

    buttonDelete.addEventListener('click', () => {
        alert("delete")
    });



});


