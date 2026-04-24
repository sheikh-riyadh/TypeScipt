{
  // Here we learn type assertion let's drive into assertion (:

  type KgToKillo = (value: string | number) => string | number | undefined;
  type PhoneNumberType = any;

  const kgToKillo: KgToKillo = (value) => {
    if (typeof value === "string") {
      return `Converted value is ${parseFloat(value) * 1000}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToKillo(1000) as number; // This is called type assertion
  const result2 = kgToKillo("1000") as string; // This is called type assertion

  let phoneNumber: PhoneNumberType;

  phoneNumber = "1919195934";
  phoneNumber as string;

  phoneNumber = 123456789;
  phoneNumber as number;
}
