class AnimalShelter {
    budget = 50;
    animals = [];
    adoptersName = [];

    rescue(animal) {
        this.animals.push(animal);
        return this.animals.length;
    }

    heal() {
        const firstNotHealthy = this.animals.find((animal) => !animal.isHealthy);

        console.log(firstNotHealthy);

        if (firstNotHealthy && firstNotHealthy.healCost <= this.budget) {
            firstNotHealthy.heal();
            //heals the not healthy animal

            //check budget
            this.budget -= firstNotHealthy.healCost;
            return 1;
        }
        // return 0 or 1
        return 0;
    }

    addAdopter(name) {
        //takes name as parameter
        //saves to list
        this.adoptersName.push(name);
    }

    findNewOwner() {
        //random name, random animal -> we should check if animal is adoptable!
        const randomOwnerIndex = Math.floor(
            Math.random() * this.adoptersName.length
        );
        const randomAnimalIndex = Math.floor(Math.random() * this.animals.length);

        if (!this.animals[randomAnimalIndex].isHealthy) {
            return `There wasn't any healthy animals.`;
        }

        const [owner] = this.adoptersName.splice(randomOwnerIndex, 1);
        const [animal] = this.animals.splice(randomAnimalIndex, 1);

        animal.setOwnerName(owner);
        return animal; //removes from list
    }

    earnDonation(amount) {
        //takes amount as param
        //increase budget
        this.budget += amount;
        //return budget
        return this.budget;
    }

    toString() {
        // Budget: <budget>€,
        // There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
        // <name> is not healthy (healing would cost: <heal cost> €) and not adoptable
        // <name> is healthy and adoptable

        return (
            `Budget: ${this.budget}€,
      There are ${this.animals.length} animal(s) and ${this.adoptersName.length} potential adopter(s).` +
            this.animals.map(String).join('\n')
        );

        // print all info f shelter and animals
    }
}

export default AnimalShelter;