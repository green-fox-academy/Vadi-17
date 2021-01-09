'use strict';
import Person from './Person.js';
export default class Mentor extends Person {
    constructor(name, age, gender, level) {
        super(name, age, gender);
        this.level = level;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor`);
    }
    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }
    Mentor(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.level = "intermediate"
    }
}