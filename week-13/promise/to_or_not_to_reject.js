'use strict';

let myPromise = new Promise((resolve, reject) => {
    resolve('I FIRED'); // ez meg is szünteti a Promis-t :-)
    
    reject(new Error('I DID NOT FIRE'));  // ez már nem vezérlést
    
});

function printReject(error) {
    console.log(error.message);
}

myPromise.then(console.log, printReject);