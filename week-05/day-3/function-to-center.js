'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.

for (let i = 0; i <= canvas.width; i += 20) {
    drawsLine(i, canvas.height);
    drawsLine(i, 0);
}
for (let i = 0; i <= canvas.height; i += 20) {
    drawsLine(canvas.width, i);
    drawsLine(0, i);
}

function drawsLine(origoX, origoY) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(origoX, origoY);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami egy paramétert vár:
// Egy listát [x, y] pontokkal
// és összeköti őket zöld vonalakkal.
// Kösd össze, kapsz egy dobozt: [[10, 10], [290, 10], [290, 290], [10, 290]]
// Kösd össze ezeket: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
// let arryBox = [[10, 10], [290, 10], [290, 290], [10, 290]]
// ctx.font = "40px Arial";
// ctx.textAlign = "start";
// ctx.fillText(arryBox[1][1], 150, 60);

ctx.strokeStyle = 'red';
connectTwoPoints([[120, 100], [85, 130], [50, 100]]);
ctx.strokeStyle = 'green';
connectTwoPoints([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]]);
ctx.strokeStyle = 'blue';
connectTwoPoints([[20, 10], [185, 230], [56, 180], [89, 197], [197, 111]]);



function connectTwoPoints(points) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();
}