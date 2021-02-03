function sajatfugveny (adat){
    console.log("itt járunk");
    console.log(adat);
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let xValamiTortentEzAzEredmeny = Math.floor(Math.random() * 10);
        let xValamiTortentEzAzEredmeny = 8;
        if (xValamiTortentEzAzEredmeny > 5) {
            console.log("a dolog megvalosult ezért meghívom a reject-tet");
            resolve({ name: "Piri" })
            // itt már nincs promis megszűnik
        } else {
            console.log("a dolog NEM NEM sikerült");
            reject({ error: "Piri" })
             // itt már nincs promis megszűnik
        }
    }, 1000);
});
myPromise.then(
    // az elsőbe kerül bele a sikeres hívás adata és meghívódik ehy bármilyen fügvény amibe belekerül a kiscica
    // a kiscica a resolve fügvényből jön. Nekem jell gondoskodnom arról hogy az adat belekerüljön
    kiscica => sajatfugveny(kiscica),
    //mindig a második az nem megvalósuló ág
    err2 => console.log(err2)
);

