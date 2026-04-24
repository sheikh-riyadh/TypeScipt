{
  // Generic with using interface

  interface Developer<X, Y = null> {
    name: string;
    computer: {
      name: string;
      model: string;
      realseYear: string;
    };
    watch: X;
    bike?: Y;
  }

  interface Watch {
    name: string;
    model: string;
  }

  interface Bike {
    name: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<Watch, Bike> = {
    name: "Riyad",
    computer: {
      name: "Asus",
      model: "X507U",
      realseYear: "2021",
    },
    watch: {
      name: "Apple watch",
      model: "Apple007",
    },
    bike: {
      name: "Yamaha",
      engineCapacity: "200cc",
    },
  };

  const poorDeveloper: Developer<Watch> = {
    name: "Sakib",
    computer: {
      name: "Gigabyte",
      model: "G445",
      realseYear: "2000",
    },
    watch: {
      name: "Smart watch",
      model: "Android001",
    },
  };
}
