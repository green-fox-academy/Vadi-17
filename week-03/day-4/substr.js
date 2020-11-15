// Írj egy function-t (függvényt) ami 2 string paramétert vár
// Térjen vissza (return) egy index-szel, ami megmondja,
// hogy az első paraméterként megadott változóban
// hanyadik karaktertől fordul elő a második paraméterként megadott string.
// -1-gyel tér vissza (return) ha nem található meg a második paraméter
// az első paraméterként megadott string-ben
'use strict';

console.log(substr("ksdjfhsopikjfhuedgtrhtfh", "opi"))

function substr(str, keyword) {
    return str.indexOf(keyword);
}

// Példák
console.log(substr("ksdjfhsopikjfhuedgtrhtfh", "opi"))

// eredmény: `17`, mert a 'searching' a 17. indextől található meg.
console.log(substr('this is what I\'m searching in', 'searching'));

// eredmény: `-1`, mert nem található meg benne
console.log(substr('this is what I\'m searching in', 'not'));