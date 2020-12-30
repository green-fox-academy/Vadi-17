// Készíts egy Pirate osztályt. Bármilyen tagváltozót vagy metódust hozzáadhatsz az 
// osztályhoz, de a következő metódusokat definiálnod kell:
// drinkSomeRum() - egy kicsit részegebbé teszi a kalózt
// howsItGoingMate() - meghívásra a kalóz válaszol attól függően,
//  hogy a drinkSomeRun hányszor volt meghívva:
// 0-4-szer: "Meg egy korsoval!"
// különben: "♫ Nyaaar van es semmi baaj, ... ♪", a kalóz kidől, és kialussza magát.
// Ha idáig eljutottál, megpróbálhatod a következőt.

// die() - ez megöli a kalózt. Ez esetben, DrinkSomeRum, stb. meghívása csak azzal a szöveggel tér vissza,
//  hogy A kaloz halott..
// brawl(otherPirate) - a kalóz megküzd egy másik kalózzal (ha a másik életben van)
//  és 1/3 az esélye, hogy az egyik meghal, a másik meghal vagy mindketten kidőlnek.

export class Pirate {
    name;
    status;
    loaded;
    constructor(name, loaded = 0) {
        this.name = name;
        this.loaded = loaded;
        this.status = 'alive';
    }
    drinkSomeRum() {
        if (this.status === 'dead') return ('A kaloz halott..');
        this.loaded++;
        return this.loaded;
    }
    // 0-4-szer: "Meg egy korsoval!"
    // különben: "♫ Nyaaar van es semmi baaj, ... ♪", a kalóz kidől, és kialussza magát.
    howsItGoingMate() {
        if (this.status === 'dead') return ('A kaloz halott..');
        if (this.loaded <= 4) {
            return "Meg egy korsoval!";
        } else {
            this.status = 'sleep';
            this.loaded = 0;
            return "♫ Nyaaar van es semmi baaj, ... ♪"
        }

    }
    // die() - ez megöli a kalózt. Ez esetben, DrinkSomeRum, stb. meghívása csak azzal a szöveggel tér vissza,
    //  hogy A kaloz halott..
    die() {
        this.status = 'dead'
        this.loaded = 0;
    }
    // brawl(otherPirate) - a kalóz megküzd egy másik kalózzal (ha a másik életben van)
    //  és 1/3 az esélye, hogy az egyik meghal, a másik meghal vagy mindketten kidőlnek.
    brawl(otherPirate){
        console.log(otherPirate);
        if (otherPirate.status === 'dead' || this.status === 'dead') return ('Az egyik kalóz már halott!..');
        let chance =Math.round(Math.random()*3);
   //     console.log(chance);
        if (chance ===1){
            console.log("joe meghalt");
            this.die();
        }else if(chance ===2){
            console.log("bob meghalt");
            otherPirate.die();
        }else{
            this.status = 'sleep';
            this.loaded = 0;
            otherPirate.status = 'sleep';
            otherPirate.loaded = 0;
        }
     }

}