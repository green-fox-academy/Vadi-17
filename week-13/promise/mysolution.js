'use strict';

const myPromise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILgLED!');
    }, 1000);
});

myPromise.then(console.log);