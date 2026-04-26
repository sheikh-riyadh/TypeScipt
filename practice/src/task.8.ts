{
  type User = {
    name: string;
    email: string;
  };

  type AdminUser = User & {
    adminLevel: string;
  };

  type Describe = (user: AdminUser) => string;

  const describeAdmin: Describe = (user) => {
    return `${user.name}, ${user.email}, ${user.adminLevel}`;
  };

  const result = describeAdmin({
    name: "Riyadh",
    email: "sheikh@gmail.com",
    adminLevel: "This is admin level",
  });

  console.log(result);
}
