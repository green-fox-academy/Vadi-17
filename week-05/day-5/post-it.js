// Készíts egy PostIt osztályt, aminek a következők a tagváltozói:
// backgroundColor
// text
// textColor
// Készíts néhány példa post-it objektumot:
// egy narancssárgát kék szöveggel: "Egy, megerett a meggy"
// egy rózsaszínt fekete szöveggel: "Ketto, csipkebokor vesszo"
// egy sárgát zöld szöveggel: "1 liter tej!"
'use strict';

class PostIt{
    constructor(backgroundColor,text,textColor){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}
const orange = new PostIt("orange","Egy, megerett a meggy","blue");
const pink = new PostIt("pink","Ketto, csipkebokor vesszo","black");
const yellow = new PostIt("yellow","1 liter tej!","green");

console.log(PostIt);
console.log(orange);
console.log(pink);
console.log(yellow);