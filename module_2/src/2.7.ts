{
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user1 = {
    name: "Polash",
    roll: 350880,
    email: "polash@gmail.com",
  };

  const result = getPropertyValue(user1, "roll");
  console.log(result);

  const user2 = {
    name: "Riyadh",
    roll: 350883,
    email: "sheikh@gmail.com",
    bike: "Yamaha",
    engineCapacity: "170cc",
  };




  const result2 = getPropertyValue(user2, "engineCapacity")
  console.log(result2)
}
