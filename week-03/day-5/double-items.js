'use strict';
// Hozz létre egy `drinks` változót az alábbi tartalommal:
// `['Gin', 'Whiskey', 'Wine', 'Beer']`
// Duplázd meg a stringeket (szöveges elemeket)!
// Használj beépített metódust a ciklusok helyett!
// Logold ki az eredményt!
// A várt eredmény: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
const drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
const drinkDrink = drinks.map(drinks => drinks + drinks);
drinkDrink.forEach(drinkDrink => console.log(drinkDrink));