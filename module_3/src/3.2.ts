{
  // Here we learn Inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number): void {
      console.log(`The ${this.name} will sleep ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    playTime(time: string): void {
      console.log(`The ${this.name} play ${time} every day`);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string,
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClasses(numberOfClasses: number) {
      console.log(`The ${this.name} sir will take ${numberOfClasses} every day`);
    }
  }



  const rakib = new Student("Rakib",20, "Dhaka postogola")
  rakib.playTime("6 to 7 pm")


  const sir = new Teacher("Foqrul", 35,"Dhaka postogola","Professior")
  sir.takeClasses(5)



}
