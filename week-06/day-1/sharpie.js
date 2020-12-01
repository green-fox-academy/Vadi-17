// Készíts egy Sharpie osztályt
// Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width (legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
// Példányosításkor a color és a width legyenek kötelezően megadandóak
// Minden példányosított filctoll inkAmount értéke legyen alapból 100
// Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét

'use strict';

class Sharpie {
    constructor(color, width, inkAmount = 100) {
        if(typeof color != "string" || color === '' ){
            throw new Error('Wrong color')
        }
        if(typeof width != "number" || width === 0 ){
            throw new Error('Wrong width')
        }
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use() {
        this.inkAmount--;
    }

}
try {

    let filctoll1 = new Sharpie("blue",2);
    console.log('Before used: ' ,filctoll1);
    filctoll1.use();
    console.log('After used: ' , filctoll1);

} catch (error) {
    console.log(error.message);
    
}
