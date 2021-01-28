let what = "double";
let numbers = [1, 2, 3, 5, 10];
let outputNumber

if(!what){
    console.log("Kérem, adja meg a műveletet!");
    return;
}else if(what==="sum"){
    outputNumber=numbers.reduce((a, b) => a + b, 0)
}else if(what==="multiply"){
    outputNumber=numbers.reduce( (a,b) => a * b )
}else if(what==="double"){
    outputNumber=numbers.map((xx) => xx * 2);
}else{
    console.log("Nem definiált művelet!");
}
console.log(outputNumber);
