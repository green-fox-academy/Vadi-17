
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
        console.log(`Refilled ${car.carType} get ${(car.capacity - car.gasAmount)} liter`);
        car.gasAmount = car.capacity;
    }

};

class Car {
    carType;
    gasAmount;
    capacity;
    constructor(carType, gasAmount, capacity) {
        this.carType = carType;
        this.gasAmount = typeof gasAmount === 'number' ? gasAmount : 0;
        this.capacity = typeof capacity === 'number' ? capacity : 100;
    }
    print() {
        console.log(`Type: ${this.carType}  gasAmount: ${this.gasAmount} capacity: ${this.capacity}`);
    }
};

const shellBudakalasz = new Station(12000);
console.log(shellBudakalasz);

const auto = new Car('Mercedes', 20, 60);
const cars = [
    new Car('Trabi', 5, 20),
    new Car('Lada', 30),
    new Car('Zaporozsec'),
    new Car('Pobeda')
];
console.log("Original list: ");
cars.forEach(cars => cars.print());
console.log();

shellBudakalasz.refill(auto);
cars.forEach((car, i) => shellBudakalasz.refill(cars[i]));

console.log("After refilled: ");
console.log(shellBudakalasz);
cars.forEach((cars) => cars.print());