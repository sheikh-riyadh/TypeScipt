// Learning function

// Noraml function

function sum_1(num1: number, num2: number): number {
  return num1 + num2;
}

function sum_2(num1: number, num2: number = 20): number {
  return num1 + num2;
}

// Arrow function
const sum_3 = (num1: number, num2: number): number => {
  return num1 + num2;
};

const sum_4 = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};

const arr: number[] = [1, 2, 3];

const sqr: number[] = arr.map((element: number): number => element * element);
