{
  interface Book {
    name: string;
    realseData: string;
    author: {
      name: string;
      dateOfBirth: string;
    };
  }

  interface Magazine {
    category: string;
    publisher: string;
    issueNumber: number;
    editor: {
      name: string;
      experience: number;
    };
    pages: number;
    language: string;
    price: number;
  }

  type A = Book | Magazine;

  type B = Book & Magazine;
}
