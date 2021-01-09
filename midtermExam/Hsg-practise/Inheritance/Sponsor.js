'use strict';
import Person from './Person.js';
export default class Sponsor extends Person {
    constructor(name, age, gender, company) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }
    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }
    Sponsor(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.company = "Google";
        this.hiredStudents = 0;
    }
    hire(){
        this.hiredStudents ++
    }
}