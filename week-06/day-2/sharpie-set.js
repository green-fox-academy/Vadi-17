// Készíts egy Sharpie osztályt
// Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width (legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
// Példányosításkor a color és a width legyenek kötelezően megadandóak
// Minden példányosított filctoll inkAmount értéke legyen alapból 100
// Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét


// Használd újra a Sharpie osztályod
// Készíts egy SharpieSet osztályt
// ez tartalmazzon egy Sharpie listát
// countUsable() -> egy filctoll használható, ha van benne tinta
// removeTrash() -> kitöröl minden használhatatlan filcet

'use strict';

class Sharpie {
    constructor(color, width, inkAmount = 100) {
        if (typeof color != "string" || color === '') {
            throw new Error('Wrong color')
        }
        if (typeof width != "number" || width === 0) {
            throw new Error('Wrong width')
        }
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use() {
        this.inkAmount--;
    }
    countUsable() {
        if (this.inkAmount > 0) {
            console.log("can be used");
            return true;
        } else {
            console.log("can not be used");
            return false;
        };
    }

}
try {

    let filctoll1 = new Sharpie("green", 2);
    console.log('Before used: ', filctoll1);
    filctoll1.use();
    console.log('After used: ', filctoll1);
    console.log(filctoll1.countUsable());
    filctoll1.inkAmount=0;
    console.log(filctoll1.countUsable());

} catch (error) {

    console.log(error.message);

}