{
  // Contraints

  interface StudentType {
    name: string;
    roll: number;
    email: string;
  }

  const addCourseToStudent = <T extends StudentType>(student: T) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Riyadh",
    roll: 350883,
    email: "sheikh@gmail.com",
    bike:"Yamaha"
  });
}
