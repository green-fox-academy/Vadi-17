'use strict';
import Person from './Person.js';
export default class Student extends Person {
    constructor(name, age, gender,previousOrganization) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }
    getGoal() {
        console.log("Be a junior software developer.");
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }
    skipDays(numberOfDays){
        this.skippedDays += numberOfDays
    }
    student(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.previousOrganization = "The School of Life";
        this.skippedDays = 0;
    }

}