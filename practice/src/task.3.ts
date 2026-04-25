{
  type Person = {
    name: string;
    address: string;
    color: {
      hairColor: string;
      eyesColor: string;
    };
    income: string;
    expense: string;
    hobbies: Array<string>;
    familyMembers: number;
    job: string;
    skills: Array<string>;
    maritalStatus: boolean;
    friends: Array<string>;
  };

  const person: Person = {
    name: "Riyadh",
    address: "Dhaka postogola 1204",
    color: {
      eyesColor: "black",
      hairColor: "black",
    },
    income: "1200",
    expense: "1000",
    familyMembers: 5,
    hobbies: ["Learning", "Reading", "Travaling"],
    job: "Full-stack developer",
    maritalStatus: true,
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "OAuth",
    ],
    friends: ["Akram", "Anik", "Polash", "Jibon", "Azizul", "Tipu", "Sakib"],
  };
}
