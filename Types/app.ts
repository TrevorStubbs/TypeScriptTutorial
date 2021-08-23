// Unknown Type
let userInput; //unknown;
let userName: string;

userInput = 'Max';
userInput = 5;

// Need an extra type check to when using unknown.
if (typeof userInput === 'string') {
  userName = userInput;
}

// Never function return type
function generateError(message: string, code: number): never{
  throw {message: message, errorCode: code};
}

generateError('An error occurred', 500);