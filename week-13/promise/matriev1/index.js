import https from 'https';
console.log("valami");
// aszinkron
// több feladat egyszerre, párhuzamosan futhat
// majd elkészül valamikor
// eredményt callback függvény segítségével tudjuk felhasználni

// szinkron
// egymás után futnak a feladatok
// egyiknek meg kell várnia a másikat
// előző eredményét fel tudja használni a következő szekvenciálisan

// let arr = new Array(8).fill(0);
// console.log(arr[4]);

// aszinkron függvények:
// user: setTimeout, setInterval
// built-in: addEventListener, fs.readFile

// Promise
// olyan objektum, ami majd egyszer valamikor biztosan ad eredményt (vagy sikeres vagy sikertelen)
// eventually run/return
// az eredmény sikeres kimenetelére nincs garancia, tehát fel kell készülnünk mindegyik esetre
// státuszok:
// - pending
// - settled
//   - resolved/fulfilled
//   - rejected

// process.on('unhandledrejection', () => {
//     console.error('UNHANDLED REJECTION');
// });

const promisex = new Promise(function (teljesit, visszautasit) { });
const promise = new Promise(function (resolve, reject) {
    resolve('sikeres adat');
    reject('az ok, amiért nem sikerült');
});

// console.log(promise, Promise.resolve('sikeres adat'));

const promiseAsync = new Promise(function (resolve, reject) {

    setTimeout(() => resolve('sikeres adat'), 100);
    // reject('az ok, amiért nem sikerült');
});

// console.log(promiseAsync);
// setTimeout(() => console.log(promiseAsync), 5000);

promiseAsync.then(
    function onFulfilled(data) { },
    function onRejected(reason) { }
);

const béluska = {
    doHouseWork() {
        return new Promise(function (rendbenAnya /* resolve */, mindjartAnya /* reject */) {
            // rendbenAnya('KÉSZ');
            // setTimeout( rendbenAnya, 1000, 'cukorka' );

            // const setTimeoutCb = ( value ) => {
            //     rendbenAnya(value);
            // };

            // setTimeout( ( value ) => {
            //     rendbenAnya(value);
            // }, 1000, 'cukorka' );

            setTimeout(mindjartAnya, 2000, 'Anya! Az online játékokat nem lehet le pausolni!');
        });
    }
};
const anya = {
    requestToBéluska() {
        béluska.doHouseWork()
            .then(
                function onFulfilled(data) {
                    console.log(`Ügyes vagy Béluskám, tessék itt van, amit kértél: ${data}`);
                },
                function onRejected(reason) {
                    console.log(`Bélus: ${reason}`);
                    console.log(`Anya: rendben, akkor kihúztam a routert egy évre.`);
                }
            );
    }
};

// anya.requestToBéluska();
// console.log('Anya megkérte Béluskát, válaszra várunk...');

// function anyFunction( value ) {
//     console.log(value);
//     console.log(arguments);
// }

// anyFunction('első', 'második', 'harmadik');

// Promise.resolve();
// Promise.reject();

// const pizzaOrder = new Promise( (resolve, reject) => {
//     setTimeout(resolve, 1000, ['gombás pizza']);
//     throw new Error('Ceglédnél felsővezeték szakadás volt');
//     // setTimeout(reject, 1000, 'Ceglédnél felsővezeték szakadás volt');
// });

// const orderResult = pizzaOrder.then( food => {

//     console.log('Amit először megkaptunk:', food);

//     if (!food.includes('coca cola')) {
//         // dehát én kólát is rendeltem
//         return new Promise((resolve, reject) => {
//             // setTimeout(resolve, 1000, ['coca cola', 'barackos süti']);
//             // setTimeout(reject, 1000, 'lejárt a műszakom');
//             throw new Error('lejárt a műszakom');
//         });
//     }

//     // return Promise.resolve();
// } )
// .then( newFood => {
//     console.log('Amit másodszor megkaptunk:', newFood);
// })
// .catch( reason => {
//     console.log(`Bocsi bocsi siettem, de ${ reason }`);
// })
// .then( data => {
//     console.log('third then', data);

//     throw new Error('GO TO second catch');
// } )
// .catch( reason => {
//     console.log('second catch', reason.message);
// });

// async try-catch

// doesn't work :(
// try {
//     setTimeout(() => {
//         throw new Error('setTimeout exception')
//     }, 0)
// }
// catch(err) {
//     console.log('setTimeout error:', err.message);
// }

const telexFeed = new Promise((resolve, reject) => {
    // let httpRequest = new XMLHttpRequest();
    // httpRequest.onload = () => resolve(httpRequest.response);
    // httpRequest.onerror = (error) => reject(error);
    // httpRequest.open('GET', 'https://telex.hu/rss', true);
    // httpRequest.send(null);
    const req = https.get('https://telex.hu/rss', (res) => {

        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });
        data = "haliho"
        res.on('end', () => {
            resolve(data);
        });
    });

    req.on('error', (err) => {
        reject(err);
    });
});

// telexFeed.then( xhrResponse => {
//     console.log(xhrResponse);
// }).catch( error => {
//     console.log('XHR ERROR:', error.message);
// });

const rss = await telexFeed;

console.log(rss);

async function myAsyncFunction() {
    let sampleNumber = 0;

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 5);
    }).then(number => {
        sampleNumber = 5;
    });

    return sampleNumber;
}

setTimeout(() => {
    console.log('AFTER MY SETTIMEOUT', 0);
});

console.log('MY', await myAsyncFunction());

console.log('AFTER MY');

// setTimeout(console.log, 2100, orderResult);

// pizzaOrder.catch();

// Fetch API:
// fetch() csak böngészőben
// node-ra van a 'node-fetch' 3rd-party csomag, de nem szükségszerű (a http(s) built-in csomagokkal is lehet request-eket küldeni)
// fetch('https://telex.hu/rss'); // returns a Promise