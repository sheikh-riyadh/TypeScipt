{
  // Learn Type Guard

  type Add = (
    param1: string | number,
    param2: string | number,
  ) => string | number;

  //   Learn Type Guard using keyof operator
  const add: Add = (param1, param2) => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(20, 20);
  console.log(result1);

  //   Type Guard using "IN" Operator

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  type User = (user: NormalUser | AdminUser) => NormalUser | AdminUser;

  const getUser: User = (user) => {
    if ("role" in user) {
      return {
        name: "This is an admin user",
        role: "admin",
      };
    } else {
      return {
        name: "This is normal user",
      };
    }
  };

  const normalUser: NormalUser = {
    name: "Riyadh",
  };
  const adminUser: AdminUser = {
    name: "Polash",
    role: "admin",
  };

//   const result2 = getUser(normalUser);
//   console.log(result2);

  const result3 = getUser(adminUser);
  console.log(result3)
}
