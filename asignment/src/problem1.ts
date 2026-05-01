{
  `Description: Create a function that takes a string and an optional boolean.
        1.If the boolean is true or not provided, return the string in uppercase.
        2.If the boolean is false, return the string in lowercase.`;

  type FormatString = (input: string, toUpper?: boolean) => string;

  const formatString: FormatString = (input, toUpper) => {
    if (toUpper !== undefined && toUpper) {
      return input.toUpperCase();
    } else if (toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  };

  const result = formatString("Hello", false);
  console.log(result);
}
