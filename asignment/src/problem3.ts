{
  //
  `Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.`;

  type Concate<T> = (...arrays: T[][]) => T[];

  const concatenateArrays: Concate<any> = (...arrays) => {
    let result: any[] = [];

    arrays.forEach((item) => {
      result.push(...item);
    });

    return result;
  };

  const result1 = concatenateArrays(["a", "b"], ["c"]);
  console.log(result1);
  const result2 = concatenateArrays([1, 2], [3, 4], [5]);
  console.log(result2);

  //
}
