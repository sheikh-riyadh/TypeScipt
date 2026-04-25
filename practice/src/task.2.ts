{
  type Role = "admin" | "user" | "gest";

  type User = (name: string, age: number, role: Role) => void;

  const showUser: User = (name, age, role) => {
    console.log({ name, age, role });
  };

  showUser("Riyadh", 24, "gest");
}
