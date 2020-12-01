// Készíts egy Station és egy Car osztályt
// Station
// gasAmount -> az állomáson elérhető üzemanyag mennyisége
// refill(car) -> csökkenti az állomás gasAmount értékét és növeli az autó gasAmount értékét, az autó kapacitásától függően
// Car
// gasAmount -> az autóban lévő üzemanyag mennyisége
// capacity -> az autó üzemanyag tankjának mérete
// készíts konstruktort a Car osztályhoz, amely:
// kezdőértéket ad: gasAmount -> 0
// kezdőértéket ad: capacity -> 100
'use strict';

class Station {
    gasAmount;
    constructor(gasAmount) {
        this.gasAmount = gasAmount
    }
    refill(car) {
        this.gasAmount = this.gasAmount - (car.capacity - car.gasAmount);
        car.gasAmount = car.capacity;
    }

};

class Car {
    carType;
    gasAmount;
    capacity;
    constructor(carType, gasAmount = 0, capacity = 100) {
        this.carType = carType;
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
    print() {
      //  console.log(`Type: ${this.carType}  gasAmount: ${this.gasAmount} capacity: ${this.capacity}`);
    }
};

// const shellBudakalasz = new Station(12000);
// console.log(shellBudakalasz);

const cars = [
    new Car('Trabi', 5, 20),
    new Car('Lada', 30),
    new Car('Zaporozsec'),
    new Car('pobeda')
];
// cars.forEach(cars => cars.print());

// console.log();
// console.log(cars[0]);
cars.forEach((car,i) => console.log(cars[i]) );

// console.log(shellBudakalasz);
// cars.forEach((cars) => cars.print());
// consol.log("objekt key:");
console.log("objekt key:");
console.log(cars[0]);
Object.keys(cars[0]).forEach(key => console.log(`${key}: ${cars[0][key]}`));