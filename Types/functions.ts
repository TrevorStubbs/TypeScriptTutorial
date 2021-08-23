// function return type

function add(n1: number, n2: number): number{
  return n1 + n2;
}

function printResult(num: number): void{
  console.log(`Result: ${num}`);
}

printResult(add(5, 12));

// Defines this var to be any function
let combineValues: Function;
combineValues = add;
console.log(combineValues(8, 8));

// Defines this var to be specifically a function that takes 2 numbers and returns 1 number.
let combineFunction: (a: number, b: number) => number;
combineFunction = add;
console.log(combineFunction(8, 8));

const multiply = (n1: number, n2: number): number => {
  return n1 * n2;
}

combineFunction = multiply;
console.log(combineFunction(2, 10));

// Function that takes a callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10,20, (result) => {
  console.log(result);
})
