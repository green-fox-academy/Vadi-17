const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const canvasWith = canvas.width;
const canvasHeight = canvas.height
// NE NYÚLJ A FENTI KÓDHOZ

// rajzolj egy piros horizontális vonalat a canvas közepére
// rajzolj egy zöld horizontális vonalat a canvas közepére

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(canvas.height/2, 0);
ctx.lineTo(canvas.height/2, canvas.width);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(0,canvas.width/2);
ctx.lineTo(canvas.height,canvas.width/2);
ctx.stroke();

// Rajzolj egy zöld 10x10-es négyzetet a canvas közepére.

ctx.fillStyle = 'yellow';
ctx.fillRect(canvas.width/2-5, canvas.height/2-5, 10, 10);



// Rajzold be a canvas átlóit
// Amelyik a bal felső sarokból indul, az legyen zöld, a másik piros.

ctx.strokeStyle = 'brown';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(canvas.height, canvas.width);
ctx.stroke();

ctx.strokeStyle = 'cyan';
ctx.beginPath();
ctx.moveTo(0,canvas.width);
ctx.lineTo(canvas.height,0);
ctx.stroke();


// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáját. Majd húz
// egy volnalat abból a pontból a canvas középpontjáig.
// Rajzolj legalább három vonalat egy loop segítségével.





// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// a vonal kezdőpontjának x és y koordinátáit, majd kirajzol
// egy 50 hosszú horizontális vonalat ebből a pontból.
// Rajzolj legalább 3 ilyen vonalat egy loop segítségével.


