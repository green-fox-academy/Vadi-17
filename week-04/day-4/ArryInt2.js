'use strict';
let TombA = ["Alma", "Avokádó", "Áfonya", "Durian", "Mangó" ];
console.log(TombA);
//Készíts egy új tömböt TombB névvel amely a TombA értékeit tartalmazza!
let TombB = TombA.map(elemen => elemen);
//Írattasd ki, hogy a TombA tartalmazza-e a Durian-t vagy sem!
// n = str.indexOf("Durian");
if(TombA.includes("Durian")){
    console.log("yes include Durian")
}
//Távolítsd el a Durian-t a TombB-ből!
TombB.splice(TombB.indexOf("Durian"),1);

//Add hozzá a Kivi-t a TombA 4. eleme utánn!
TombA.splice(5, 0, "Kivi");
console.log(TombA);

//Hasonlítsd össze TombA és TombB méretét!
if(TombB.length>TombA.length){
    console.log("TömbB nagyobb");
}else{
    console.log("TömbA nagyobb");
}
//Keresd meg az Avokádó indexét a TombA-ban!
console.log(TombA.indexOf("Avokádó"));
//Keresd meg az Durian indexét a TombB-ban!
console.log(TombB.indexOf("Durian"));
//Add hozzá a TombB-hez a Dinnye-t és a Pomelo-t egyszerre!
TombB.push( "Dinnye","Pomelo");
console.log(TombB);
//Írasd ki a TombA 3. elemét!
console.log(TombA[2]);