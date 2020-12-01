import { Pokemon } from './Pokemon.hu.js';

let pokemonOfAsh = initializePokemon();
// console.log(pokemonOfAsh);
// Minden Pokemonnak van egy neve és egy típusa.
// Bizonyos típusok hatékonyak mások ellen, pl. a víz hatékony a tűz ellen.
// Ash-nek van pár Pokemonja.
// Egy vad Pokemon tűnik fel!
let wildPokemon = new Pokemon('Oddish', 'leaf', 'water');

// Melyik Pokemont használja Ash?
// Implementáld az alábbi `chooseEffective` függvényt, hogy Ash a hatékony pokémont válassza.
console.log(`${chooseEffective(pokemonOfAsh, wildPokemon)}, teged valasztalak!`);
// console.log("wildPokemon : : :" , wildPokemon);
// console.log("pokemonOfAsh  : : :" , pokemonOfAsh);

function initializePokemon() {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

function chooseEffective(pokemons, opponent) {
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].effectiveAgainst === opponent.type) {
            return pokemons[i].name;
        }
    }
    return "Készüljünk a kudarcra, mert nincs senki"
};