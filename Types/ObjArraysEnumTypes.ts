// Object Definition
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // Tuple Definition
  role: [number, string];
} = {
  name: 'Trevor',
  age: 39,
  hobbies: ['Sport', 'Cooking'],
  role: [2, 'author']
}

// Push is an exception to tuple
person.role.push('admin');

console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.trim());
}

// Enum Definition
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const pers = {
  name: 'Trevor',
  age: 39,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN
}

if (pers.role === Role.AUTHOR) {
  console.log('is author');
} else {
  console.log('is not author');
}

// Any *