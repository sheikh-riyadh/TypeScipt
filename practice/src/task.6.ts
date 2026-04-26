{
  type Sum = (...value: number[]) => number;

  const sumOfNumber: Sum = (...value) => {
    let result = 0;
    value.forEach((element) => {
      result += element;
    });

    return result;
  };

  console.log(sumOfNumber(10, 20, 30,100));
}
