let animals = ['farkas','roka','puma','rabbit', 'tigris'];
let eatenAnimals = [];
let dontEatenAnimals = []; 
let animalsLength = animals.length;
console.log(animals)
// indexof- ne egye meg nyuszikát
for (let i=0 ; i<animalsLength; i++){
    let isRabbitExist = animals.indexOf("rabbit") !== -1;
    console.log("Nyuszika élmég?" , isRabbitExist);
    console.log('rabbit sorszáma: ' + animals.indexOf("rabbit"));
    console.log('index:  '+i);
    if(isRabbitExist){
        const rabbit = animals.splice(animals.indexOf("rabbit"),1);
        dontEatenAnimals.push(rabbit[0])
        animalsLength--
    }
    console.log('Medve megette  ' + animals[0]);
    eatenAnimals.push(animals.shift());
    console.log(animals);
    console.log('------------');
}
console.log("Megevett állatok" , eatenAnimals);
console.log("Nem ette meg" , dontEatenAnimals);