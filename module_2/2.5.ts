{
  // Generic Function

  const createArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");

  const createGenericArray = <T>(param: T): T[] => {
    return [param];
  };

  const result2 = createGenericArray<string>("Bangladesh");
  const result3 = createGenericArray<boolean>(true);
  const result4 = createGenericArray<{ name: string; roll: number }>({
    name: "Riyadh",
    roll: 350883,
  });

  interface User {
    name: string;
    roll: number;
  }

  const result5 = createGenericArray<User>({
    name: "Riyadh",
    roll: 350883,
  });

  // create tuple with generic

  const createTuple = (param1: string, param2: string): [string, string] => {
    return [param1, param2];
  };

  const result6 = createTuple("Riyadh", "Polash");

  const createTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };

  const result7 = createTupleWithGeneric<string, number>("Riyadh", 350883);

  type CreateArray<T> = (param: T) => T[];

  const createArrayWithGenericType: CreateArray<string> = (param) => {
    return [param];
  };

  const createArrayWithGenericType2: CreateArray<number> = (param) => {
    return [param];
  };
}
