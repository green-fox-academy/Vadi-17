'use strict';
let testArray = [1,2,5,8,10,23,1,2,45,32, 3, 16, 40];
console.log(testArray);
let aaa = testArray.filter((rtzu) => rtzu>10);
console.log(aaa);

class BrowserClass {
    constructor(age=12,name="Lajos"){
        this.name = name ;
        this.age=age;
    }

};
let testClassArray = [];
for (let i = 0; i < 10; i++) {
    testClassArray.push(new BrowserClass(i+3));
    
}
// let sliceArray = testClassArray.slice();
console.log("test");
console.log(testClassArray);
console.log("filt");
testClassArray = testClassArray.filter((item) => (item.age>5) );
console.log(testClassArray);
// testClassArray = testClassArray.filter((item) => !(item.age%2) );
// console.log(testClassArray.length);
// console.log(sliceArray);
// let mapArray = testClassArray.map((value,index) => {
//     value.name = "Pista"+index;
//     value.age = index;
// })
// console.log("testArr");
// console.log(testClassArray);
// console.log("maptArr");
// console.log(mapArray);






// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// const animalsCopy = animals.slice();
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals);
// console.log("---(2)");
// console.log(animals.splice(2));
// console.log(animals);
// console.log("--(2, 4)");
// console.log(animals.splice(2, 4));
// console.log(animals);
// console.log("--(1, 5)");
// console.log(animals.splice(1, 5));
// console.log(animals);

