{
  // Lear spread and rest

  // Spread Operator
  const bros1: string[] = ["Polash", "Sakib", "Anik"];
  const bros2: string[] = ["Akram", "Babu", "Jibon"];
  bros1.push(...bros2); // Spread o

  const mentors1: {
    typeScript: string;
    redux: string;
    dbms: string;
  } = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2: {
    prisma: string;
    nextJs: string;
    cloud: string;
  } = {
    prisma: "Firoz",
    nextJs: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorlist = {
    ...mentors1,
    ...mentors2,
  };

  //   Rest Operator
  const greting = (...friends: string[]): undefined => {
    friends.forEach((friend) => {
      console.log(`Hi ${friend}`);
    });
  };
}
