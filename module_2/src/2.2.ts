{
  // Learn Interface VS Type

  //  Type we can extented the type throw through intersection
  type User1 = {
    name: string;
    roll: number;
  };

  type UserWithDepartment1 = User1 & {
    department: string;
  };

  type Mentors1 = {
    name: string[];
  };

  interface User2 {
    name: string;
    roll: number;
  }

  interface UserWithDepartment2 extends User2 {
    department: string;
  }

  interface Mentors2 {
    [index: number]: string;
  }

  const user1: UserWithDepartment1 = {
    name: "Riyadh",
    roll: 350883,
    department: "Computer",
  };

  const user2: UserWithDepartment2 = {
    name: "Riyadh",
    roll: 350883,
    department: "Computer",
  };
}
