// Object Definition
// const person: {
//   name: string;
//   age: number;
// } 
var person = {
    name: 'Trevor',
    age: 39,
    hobbies: ['Sport', 'Cooking']
};
console.log(person.name);
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.trim());
}