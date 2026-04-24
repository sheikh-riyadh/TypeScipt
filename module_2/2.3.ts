{
  // Here we are learning Genaric Type

  type GenericArray<T> = Array<T>;

  const fruits: GenericArray<string> = ["Apple", "Banna", "Mango"];

  const user: GenericArray<{ name: string; roll: number; department: string }> =
    [
      {
        name: "Polash",
        roll: 350880,
        department: "Computer",
      },
      {
        name: "Sakib",
        roll: 350890,
        department: "Computer",
      },
      {
        name: "Sakib",
        roll: 350890,
        department: "Computer",
      },
    ];

  // Generic Tuple

  type GenericTuple<X, Y> = [X, Y];

  const userWithRoll: GenericTuple<string, string> = ["Sakib", "Mrs.X"];
}
