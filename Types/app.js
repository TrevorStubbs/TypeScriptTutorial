// Unknown Type
var userInput; //unknown;
var userName;
userInput = 'Max';
userInput = 5;
// Need an extra type check to when using unknown.
if (typeof userInput === 'string') {
    userName = userInput;
}
// Never function return type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
