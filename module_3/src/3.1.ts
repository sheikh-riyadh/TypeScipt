{
  // General Way of declearation class and property
  class Animal1 {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    public makeSound(): void {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog1 = new Animal1("German shaperd vai", "dog", " gew gew");
  const cat1 = new Animal1("Persian vai", "cat", "meow meow");
  dog1.makeSound();

  // Standerd way of declearation class

  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string,
    ) {}

    makeSound(): void {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog2 = new Animal2("German shapard vai", "dog", "gew gew");
  const cat2 = new Animal2("Persian vai", "cat", "meow meow");

  cat2.makeSound()
}
