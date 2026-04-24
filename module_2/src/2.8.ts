{
  // Promise type

  type Data = { name: string };

  const getPromiseData = async (): Promise<Data> => {
    return new Promise<Data>((resolve, reject) => {
      const data: Data = { name: "Hello promise" };
      if (data.name) {
        return resolve(data);
      } else reject("No data found");
    });
  };

  const showData = async () => {
    const result = await getPromiseData();
    console.log(result);
  };

  showData();
}
