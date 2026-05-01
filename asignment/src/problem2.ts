{
  //

  `Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.`;

  type Items = Array<{ title: string; rating: number }>;

  type FilterType = (items: Items) => Items;

  const filterByRating: FilterType = (items) => {
    return items.filter((item) => item.rating > 4);
  };

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  const result = filterByRating(books); 
  console.log(result)

  //
}
