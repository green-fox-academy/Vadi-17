'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy 'a' betűt
// Próbálj meg beépített metódust használni ciklus helyett!

const animals = ['koal', 'pand', 'zebr'];
const animalsA = animals.map(animal => animal + "a");
animalsA.forEach(animalsA => console.log(animalsA));
