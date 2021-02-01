const start = new Date().valueOf();
console.log('start:', start);

setTimeout(() => {
    const end = new Date().valueOf();
    console.log('end:', end);
    console.log('delta:', end - start);
}, 500); // 500 ms múlva fogja beütemezni!!!

console.log('max_int', Number.MAX_SAFE_INTEGER);
for (let i = 0; i < 1_000_000_000; i++){
}

// setInterval(() => {
//     const end = new Date().valueOf();
//     console.log('end:', end);
//     console.log('delta:', end - start);
// }, 500); // 500 ms múlva fogja újra és újra beütemezni!!!

let counter = {
    i: 1
};
function intervalCb(counter) {
    const end = new Date().valueOf();
    console.log('end:', end);
    console.log('delta:', end - start);
    if (counter.i === 1) {
        for (let i = 0; i < 3_000_000_000; i++) {
            
        }
    }
    else if (counter.i === 5) {
        console.log('CLEAR INTERVAL');
        clearInterval(interval);
    }
    counter.i++;
}
const interval = setInterval(intervalCb, 1000, counter);
