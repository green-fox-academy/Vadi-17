// let mySet = new Set()
let mySet = [1,2,3,4,5,1,2,3,8];

// mySet.add(1)           // Set [ 1 ]
// mySet.add(5)           // Set [ 1, 5 ]
// mySet.add(4)           // Set [ 1, 5 ]
// mySet.add('some text') // Set [ 1, 5, 'some text' ]
// let o = {a: 1, b: 2}
// mySet.add(o)

console.log(mySet);
let aaa = new Set(mySet);

console.log(aaa);