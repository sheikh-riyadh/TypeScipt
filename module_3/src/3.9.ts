{
  // Abstraction using interface

  interface StudentInterface {
    name: string;
    roll: number;
    sleepingTime: () => void;
    wakeupTime: () => void;
  }

  class Student implements StudentInterface {
    name: string;
    roll: number;
    constructor(name: string, roll: number) {
      this.name = name;
      this.roll = roll;
    }
    sleepingTime() {
      console.log("I am sleeping at the 11:00 PM");
    }
    wakeupTime() {
      console.log("I am wakeup 8:00 AM every day");
    }
  }

  // Abstraction using "abstract keyword"

  abstract class Parant {
    name: string;
    roll: number;
    constructor(name: string, roll: number) {
      this.name = name;
      this.roll = roll;
    }

    abstract sleepingTime(): void;
    abstract wakeupTime(): void;
  }

  class Student1 extends Parant {
    constructor(name: string, roll: number) {
      super(name, roll);
    }
    sleepingTime(): void {
      console.log("I am sleep at 11:00 PM every night");
    }
    wakeupTime(): void {
      console.log("I am wakeup at 8:00 AM every day");
    }
  }

  //
}
