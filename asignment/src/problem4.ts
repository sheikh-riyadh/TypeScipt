{
  class Vehicle {
    private _make: string;
    private _year: number;
    constructor(make: string, year: number) {
      this._make = make;
      this._year = year;
    }

    getInfo(): void {
      console.log(`Make: ${this._make}, Year:${this._year}`);
    }
  }

  class Car extends Vehicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this._model = model;
    }

    getModel(): void {
      console.log(`Model: ${this._model}`);
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  myCar.getModel(); // Output: "Model: Corolla"
}
