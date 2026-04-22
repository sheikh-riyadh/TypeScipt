{
  // Learning Union and Intersection type

  // Union Type

  type User = {
    name: string;
    roll: number;
    gender: "Male" | "Female"; // This is call Union Type
  };

  const user: User = {
    name: "Riyadh",
    roll: 3508883,
    gender: "Male",
  };

  

  //   Intersection Type

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const Developer: FullStackDeveloper = {
    skills: ["HTML", "CSS", "REACT", "EXPRESS", "NODE", "MONGODB"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
