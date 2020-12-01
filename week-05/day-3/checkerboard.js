'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ
// Töltsd ki a canvast sakktábla mintával.  ctx.beginPath();

const size = 50

ctx.fillStyle = 'black';

for (let i = 0; i < 8; i++) {
    for (let j=0 ; j < 8; j++) {
        if((i+j)%2===0 ){
            ctx.fillRect(i * size, j * size, size, size);
        }
    }
}