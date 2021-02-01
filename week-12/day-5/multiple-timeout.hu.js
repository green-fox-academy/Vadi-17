'use strict';
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms);
    })
}

console.log('alma');
async function loOfDelays(){
   
        await delay (1000)
        console.log("barack");
        await delay (2000)
        console.log("dinnye");
        await delay (5000)
        console.log("mandarin");
    

};
loOfDelays();

setTimeout(() => {
    console.log('barack2');
}, 1000);
setTimeout(() => {
    console.log('dinnye2');
}, 3000);
setTimeout(() => {
    console.log('mandarin2');
}, 8000);