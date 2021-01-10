
'use strict';
export default class Garden {
    plantsArray = [];
    constructor(name, plantsArray) {
        this.name = name;
        // this.plantsArray = plantsArray;
    }
    addPlants(plant) {
        this.plantsArray.push(plant);
    }
    getInfo() {
        this.plantsArray.forEach(plant => {
            let text = `The ${plant.name} ${plant.constructor.name}`
            let needWater = (plant.amountOfWater > plant.waterMin ? ` doesnt need water` : ` needs water`);
            console.log(text + needWater);
        });
    }
    watering(water) {
        let needPlants = 0
        this.plantsArray.forEach(plant =>{
            if(plant.amountOfWater < plant.waterMin) needPlants++;
        } )
        if(needPlants != 0){
            this.plantsArray.forEach(plant =>{
                if(plant.amountOfWater < plant.waterMin){
                    plant.amountOfWater += (water / needPlants) * plant.waterPercentage
                }
            }) 
        }
    }
}