  
'use strict';

const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 500);
});

promise.then(console.log);