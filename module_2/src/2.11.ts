{
  // Utility Types

  type User = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //   Pick utility type get "name" and "age" property and type from User type
  type NameAge = Pick<User, "name" | "age">;

  //   Omit utility type get all the property and type except the "name"
  type UserWithoutName = Omit<User, "name">;
}
