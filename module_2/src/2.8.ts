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

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getTodoPromise = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    return data;
  };

  const showTodo = async (): Promise<void> => {
    const result = await getTodoPromise();
    console.log(result);
  };

  showTodo();
}
