{
  // Learing instanceof operator

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeow() {
      console.log("I am meowing");
    }
  }

  const isDog = (animal: Animal):animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getSound = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const cat = new Cat("Pertian", "meowing");
  const dog = new Dog("German shepard", "gew gew");

  getSound(cat);

  //
}
