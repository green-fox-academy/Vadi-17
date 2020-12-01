// Készíts Student és Teacher osztályokat
// Student
// learn() -> kiírja, hogy a diák valami újat tanul
// question(teacher) -> meghívja a tanár answer metódusát
// Teacher
// teach(student) -> meghívja a diák learn metódusát
// answer() -> kiírja, hogy a tanár megválaszol egy kérdést
// Példányosíts egy Student és egy Teacher objektumot
// Hívd meg a diák question() metódusát és a tanár teach() metódusát
'use strict';
class Student {
    name;
    constructor(name = 'Student42') {
        this.name = name;
    }
    learn(learnNewThing) {
        console.log(`The student ${this.name}, learn about  ${learnNewThing}!`);
    }
    question(teacher, question) {
        return teacher.answer(question);
    }
}
class Teacher {
    name;
    constructor(name = 'King of Teacher') {
        this.name = name;
    }
    answer(question) {
        console.log(`The teacher ${this.name}, answered  ${question}!`);
    }
    teach(student,learnNewThing){
        return student.learn(learnNewThing);
    }
}
const study = new Student("Jakab");
study.learn("History of Rome");


const prof = new Teacher("Attila");

prof.answer("it is possible to create perpetuum mobile");

study.question(prof, "Mik a jövőheti nyerő Lotto számok?");

prof.teach(study,"Mi a Baja?");