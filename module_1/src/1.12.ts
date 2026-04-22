{
  // Learn nullable, never, and unknown type

  //   Nullable Type
  type SearchType = (
    searchValue: string | null | undefined,
  ) => string | undefined;

  const searchName: SearchType = (searchValue) => {
    if (searchValue) {
      console.log("Searching");
    } else {
      console.log("No searching");
    }
  };

  searchName(null);

  //   Unknown Type
  const checkType = (value: unknown) => {
    if (typeof value === "string") {
      console.log("Your type is string");
    } else if (typeof value === "number") {
      console.log("Your type is number");
    } else if (typeof value === "boolean") {
      console.log("Your type is boolean");
    } else if (typeof Array.isArray(value)) {
      console.log("Your type is array");
    } else {
      console.log("no data matching");
    }
  };

  checkType(1);




  //   Never Type
  const throwError = (msg: string):never => {
    throw new Error(msg);
  };

  throwError("Hello")


}
