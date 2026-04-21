{
  // Learing Destructur Object

  const user: {
    id: string;
    name: {
      firstName: string;
      lastName: string;
    };
  } = {
    id: "350883",
    name: {
      firstName: "Riyadh",
      lastName: "Hasan",
    },
  };

  const {
    name: { firstName, lastName },
    id,
  } = user;

  //   Learing Destructuring Array
  const friends: Array<string> = [
    "Polash",
    "Sakib",
    "Anik",
    "Jibon",
    "Babu",
    "Akram",
    "Siam",
  ];

  const [friend1, friend2, ...restFriends] = friends;
  console.log(friend1, friend2);
}
