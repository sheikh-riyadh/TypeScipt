{
  type MyType = (value: unknown) => unknown;

  const myFunction: MyType = (value) => {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * value;
    }
  };

  const result1 = myFunction("Hello") as number;
  const result2 = myFunction(5) as number;
  console.log({result1, result2});
}
