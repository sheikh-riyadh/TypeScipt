{
  // learn ternary,optional chaining, and nullish-coalescing-operator

  const age: number = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }

  //   Ternary Operator
  const result = age >= 18 ? "Adult" : "Not adult";
  console.log(result);

  // Nullish coallecing operator work only for null and undefined
  const isAuthenticated: null | undefined = undefined;

  const result1 = isAuthenticated ?? "Gest";
  console.log(result1);
}
