'use strict';
const fs = require('fs');
// Írj egy függvényt, ami átmásolja egy fájl tartalmát egy másikba
// A két fájl nevét paraméterként kapja meg
// És visszaad egy boolean értéket, attól függően,
// hogy sikeres volt-e a másolás
console.log(copyFileRoutine('my-file.txt', 'copyd-file.txt'))

function copyFileRoutine(originFile, copydFile){
    try {
    fs.copyFile(originFile, copydFile, (err) => {
        if (err) throw err;
        console.log('File was copied to destination');
        return true;
    });
    }
    catch {
        console.log('Unable to copied');
        return false;
    }
}