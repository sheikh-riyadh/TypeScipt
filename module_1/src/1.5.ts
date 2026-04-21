// NON-PRIMITIVE TYPE

// Object Type
const user: {
  name: string;
  roll: number;
  department?: string; // Optional Type
} = {
  name: "Riyadh",
  roll: 350883,
};

const user_2: {
  name: string;
  nationality: string;
  isMarried?: boolean;
} = {
  name: "Polash",
  nationality: "Bangladeshi",
  isMarried: false,
};

// Liternal Type

const user_3: {
  name: string;
  nationality: "Bangladeshi"; // This is called Literal Type
  isMarried: boolean;
} = {
  name: "Najmus Sakib",
  nationality: "Bangladeshi",
  isMarried: true,
};

// readOnly Property

const user_4: {
  name: string;
  readonly NID: string;
} = {
  name: "Anik",
  NID: "26054679",
};

user_4.NID = "3584912132"; // Geting error because NID property is readOnly can not be modify
