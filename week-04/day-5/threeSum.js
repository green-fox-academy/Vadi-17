'use strict';
/*

Készíts egy threeSum nevű függvényt, ami

- egy integer (egész szám) tömböt (array) kér inputként,
- talál 3 különböző elemet
(az értékük megegyezhet, de az indexük különböző kell legyen)
a tömbben, megkeresi a 3 legkissebb elem összegét és
- visszatér a legkisebb összeggel integer-ként.
- -1-gyel tér vissza, ha a tömb mérete kisebb, mint 3.

Példák:

threeSum([1, 2, 3, 4, 5]);
Amivel vissza kellene térnie: 6, mert 1, 2 és 3
adja a legkisebb összeget.

threeSum([100, 450, 200, 5]);
Amivel vissza kellene térnie: 305, mert 100, 200 és 5
adja a legkisebb összeget.

threeSum([1, 2]);
Amivel vissza kellene térnie: -1 mert nincs 3 különböző szám a tömbben.

A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket

 */

function threeSum(integArry) {
    if (integArry.length < 3) {
        return -1;
    } else {
        let workArry = []
        for (let i = 0; i < integArry.length; i++) {
            workArry.push(integArry[i]);
        }
        workArry.sort(function (a, b) { return a - b });
        return (workArry[0] + workArry[1] + workArry[2]) / 3
    }
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ INNEN FELFELE LÉVŐ DOLGOKAT SZERKESZTHETED ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ------ EZT A SORT ÉS AMI EZ ALATT VAN AZT NE TÖRÖLD, NE MÓDOSÍTSD, EZ ALÁ A SOR ALÁ NE ÍRJ SEMMIT,
// ------ KÜLÖNBEN NEM FOG MŰKÖDNI AZ ELLENŐRZŐ ÉS AUTOMATIKUSAN 0%-ot fog adni -----------

module.exports = threeSum;
