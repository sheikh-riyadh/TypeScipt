{
  // Learing type Alias

  type Student = {
    name: string;
    roll: number;
    department: string;
    isMarried: boolean;
    gender: string;
  };

  const student1: Student = {
    name: "Riyadh",
    roll: 350883,
    department: "Computer",
    isMarried: true,
    gender: "Male",
  };

  const student_2: Student = {
    name: "Polash",
    roll: 350889,
    department: "Computer",
    isMarried: false,
    gender: "Male",
  };

  type Add = (num1: number, num2: number) => number;

  const add1: Add = (num1, num2) => {
    return num1 + num2;
  };

  const add: Add = function (num1, num2) {
    return num1 + num2;
  };
}
