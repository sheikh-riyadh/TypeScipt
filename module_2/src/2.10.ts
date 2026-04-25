{
  // Mapped Types

  type Area<T> = {
    [key in keyof T]: T[key];
  };

  const area: Area<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
