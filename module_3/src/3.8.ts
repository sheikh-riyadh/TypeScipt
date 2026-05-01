{
  // Polymorphism

  class Person {
    getSleep(): void {
      console.log("I am sleeping");
    }
  }

  class NormalPerson extends Person {
    getSleep(): void {
      console.log("Normal person get sleep 8 hrs per night");
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log("Developer sleep 6 hrs per night");
    }
  }

  const getSleepingTime = (param: Person) => {
    param.getSleep();
  };

  const person1 = new NormalPerson();
  const person2 = new Developer();

  getSleepingTime(person1);
  getSleepingTime(person2);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    higth: number;
    width: number;
    constructor(hight: number, width: number) {
      super();
      this.higth = hight;
      this.width = width;
    }
    getArea(): number {
      return this.higth * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };


  const shape1 = new Circle(10)
  const shape2 = new Rectangle(10,52)

  getShapeArea(shape1)
  getShapeArea(shape2)

  //
}
