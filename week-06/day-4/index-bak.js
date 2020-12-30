'use strict';
// import Map from './map.js';
// import Animal from './Animal.js';
import { Maps } from './maps.js';
let currentLevel = 0;
const cellaSize = 72;

const florr = document.getElementById('floor');
const wall = document.getElementById('wall');
const heroup = document.getElementById('hero-up');
const heroRight = document.getElementById('hero-right');
const heroDown = document.getElementById('hero-down');
const heroLeft = document.getElementById('hero-left');
const skeleton = document.getElementById('skeleton-up');
const boss = document.getElementById('boss');
// let fff=3444;
// class Maps {

//   constructor(ownerName) {
//       this.ownerName = ownerName;
//   }
  
//   drawMap() {
//       fffs = 232243;
//       ctx.fillText(` ${fffs}`, 180, 150);
//       // const florr = document.getElementById('floor');
//       // for (let i = 0; i <= 10; i++) {
//       //     for (let k = 0; k <= 10; k++) {
//       //         ctx.drawImage(florr, i * 72, k * 72);
//       //     }
//       // }
//       // return;
//   }

// }

// Hozzájutni a rajz contexthez
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Ez a függvény azután fut le, hogy a képek betöltöttek
window.onload = () => {
  // Kirajzolni egy padló csempét
  const florr = document.getElementById('floor');
  const wall = document.getElementById('wall');
  const heroup = document.getElementById('hero-up');
  const heroRight = document.getElementById('hero-right');
  const heroDown = document.getElementById('hero-down');
  const heroLeft = document.getElementById('hero-left');
  const skeleton = document.getElementById('skeleton-up');
  const boss = document.getElementById('boss');
  ctx.drawImage(florr, 525, 325);
  ctx.drawImage(heroup, 190, 190);
  // Maps.drawMap()
  // ctx.font = '20px Arial';
  // let fff = 345;
  // // Maps.drawMap("teszt");
  // Maps.drawMap()
  // fff = fackszar();
  // ctx.fillText(` ${fff}`, 180, 150);
 // Map.drawMap("teszt")
 // Map.drawMap("teszt")
  // ctx.font = '20px Arial';`
  // ctx.fillText("fff", 100, 100);
  // for (let i = 0; i <= 10; i++) {
  //   for (let k = 0; k <= 10; k++) {
  //     ctx.drawImage(florr, i * 72, k * 72);
  //   }
  // }

};

/* Csak ki kell cserélned a paraméter string-et a document.getElementById('floor')-ban
 *
 * Lehetséges képek:
 * - floor
 * - wall
 * - hero-up
 * - hero-right
 * - hero-down
 * - hero-left
 * - boss
 * - skeleton
 */

// Függvény a gombnyomások kezelésére
function onKeyPress(event) {
  // Nyilak kezelése
  switch (event.keyCode) {
    case 37:
      alert('balra');
      break;
    case 38:
      alert('fel');
      break;
    case 39:
      alert('jobbra');
      break;
    case 40:
      alert('le');
      break;
  }
}

// Event listener hozzáadaása a gombnyomásokra
document.body.addEventListener('keydown', onKeyPress);
const direction = Object.freeze({
  1: "UP",
  2: "RIGHT",
  3: "DOWN",
  4: "LEFT"
})
ctx.font = '20px Arial';
ctx.fillText(direction[3], 100, 100);

let fff = 345;
// // Maps.drawMap("teszt");
// Maps.drawMap()
// Map.drawMap("teszt")
Maps.drawMap()
// fackszar();
// ctx.fillText(` ${fff}`, 180, 150);
// const florr = document.getElementById('floor');
// for (let i = 0; i <= 10; i++) {
//     for (let k = 0; k <= 10; k++) {
//         ctx.drawImage(florr, i * 72, k * 72);
//     }
// }





function fackszar() {

 // ctx.fillText(` ${fff}`, 180, 150);
        const florr = document.getElementById('floor');
        for (let i = 0; i <= 10; i++) {
            for (let k = 0; k <= 10; k++) {
                ctx.drawImage(florr, i * 72, k * 72);
            }
        }
        return;
};

