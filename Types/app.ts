// Object Definition
// const person: {
//   name: string;
//   age: number;
// } 
const person = {
  name: 'Trevor',
  age: 39,
  hobbies: ['Sport', 'Cooking']
}

console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];


for(const hobby of person.hobbies){
  console.log(hobby.trim());
}