'use strict';
let promise = Promise.reject(new Error('This is a fatal error'));

promise.catch( (err) => {
 setTimeout(() => {
     console.error(err.message);
 }, 500);

});