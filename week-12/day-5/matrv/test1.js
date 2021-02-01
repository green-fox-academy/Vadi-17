setTimeout(() => {
    console.log("első");
    setTimeout(() => {
        console.log("második");
        setTimeout(() => {
            console.log("harmadik");
        }, 2000);
    }, 2000);
}, 2000);

console.log("itt kint járok éppen");


function delay(ms) {
    console.log("bent vagyok a fügvényben a return elött");
    return new Promise((resolve, reject) => {
        console.log("bent vagyok a Promisban");
        setTimeout(() => {
            console.log(`${ms} timeout value`);
            resolve(ms)
        }, ms);
    })
}

// delay(2500).then(ms => console.log(('Result'), ms))

// delay(2200)
//     .then(ms => { return delay(1500) })
//     .then(ms => { return delay(3800) })
//     .then(ms => { return delay(100) })
//     .then(ms => { return delay(4000) })
//     .catch(console.log("itt valami hiba volt"))

async function loOfDelays(){
   
        await delay (1000)
        await delay (500)
        await delay (2000)
        await delay (800)
    

};
loOfDelays();
