'use strict';
export default class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
    }
    getGoal() {
        console.log("My goal is: Live for the moment!");
    }
    Person(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
    }


}
