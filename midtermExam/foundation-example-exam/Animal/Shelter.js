'use strict';
export class Shelter {
    animals = [];
    adopters = [];
    constructor(budget) {
        this.budget = 50
    }
    // vesz egy paraméterben kapott állatot és felveszi az állatot a menhelybe, 
    // és vissza adja a lista méretét
    rescue(animal) {
        this.animals.push(animal);
        return this.animals.length;
    }
    // az első nem egészséges állatot gyógyítja (csak egyet) ha költségkeret alapján ez lehetséges
    // visszaadja a meggyógyult állatok mennyiségét (0 vagy 1 ha sikeres volt)
    heal() {
        for (let i = 0; i < this.animals.length; i++) {
            if (!this.animals[i].healthState && this.budget >= this.animals[i].healCost) {
                this.budget -= this.animals[i].healCost;
                this.animals[i].healthState = true;
                this.animals[i].adoptable = true;
                return 1
            } else {
                return 0
            }
            const element = array[i];

        }

    }
    // a parameterben kapott nevet berakja az örökbefogadó lista végére
    addAdopter(name) {
        this.adopters.push(name);
    }
    // egy véletlenszerű nevet párosít egy véletlenszerűen befogadható állattal, ha lehetséges
    //és törli mindkettőjüket a listákról
    findNewOwner() {
        let takeawayAnimal;
        let takerAdapt;
        
        let adopAnimalNum = (this.animals.filter(animals => animals.adoptable).length);
        let adopAnimalArry = new Array(adopAnimalNum);
        // ha van adaptálható állat ÉS van adaptáló is, akkor mehet
        if ((adopAnimalNum > 0) && (this.adopters.length > 0)) {
            let j = 0;
            for (let i = 0; i < this.animals.length; i++) {
                if (this.animals.adoptable) {
                    adopAnimalArry[j] = i;
                    j++
                }
            }
            //kiválasztani a szerencsés párt :-)
            takeawayAnimal = Math.floor(Math.random() * j);
            takerAdapt = Math.floor(Math.random() * this.adopters.length);
            // itt történik az adaptálás
            this.animals[takeawayAnimal].ownerName = this.adopters[takerAdapt];
            console.log("Elvitt állat:");
            console.log(this.animals[takeawayAnimal]);
            console.log("Ő az új gazdija:");
            console.log(this.adopters[takerAdapt]);
            // itt vannak a törlések:
            this.animals.splice(takeawayAnimal, 1);
            this.adopters.splice(takerAdapt, 1);
        }



    }
    // vesz amountparaméterként és növeli a menedékház költségvetését 
    // a paraméter értékével, és visszaadja az aktuális költségkeretet
    earnDonation(amount) {
        this.budget += amount;

    }
    // Budget: <budget>€, 
    // There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
    // <name> is not healthy (healing would cost: <heal cost> €) and not adoptable
    // <name> is healthy and adoptable
    toString() {
        console.log(`Budget: ${this.budget}€, \nThere are ${this.animals.length} animal(s) and ${this.adopters.length} potential adopter(s).`);
        this.animals.forEach((animal) => {
            animal.toString();
        });
    }

}