class perison {
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    sayHello() {
        console.log(`Hello, ${this.name}!`);    
    }
    incraseScore(amount) {
        this.score += amount;
    }
    
}
const person1 = new perison('Krisztián', 100)
console.log(person1);
console.log(person1.name);
console.log(perison.name);
person1.sayHello();
person1.incraseScore(50);
console.log(person1);
console.log(perison.prototype);



// class Person {
//     constructor( name,score){
//         this.name = name;
//         this.score = score;
//     }
//     sayHello(){
//         console.log(`Hello, ${this.name}!`);
//     }
// }
// const person1 = new Person('Krisztián', 100);
// console.log(person1);