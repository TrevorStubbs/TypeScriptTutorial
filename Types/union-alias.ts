console.log('Union: ')
// Union Types
function unionCombine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = unionCombine(30, 26);
console.log(combinedAges);

const combinedNames = unionCombine('max', 'anna');
console.log(combinedNames);

console.log('');
console.log('Literal: ')

// Literal Types
function literalTypeCombine(
  input1: number | string,
  input2: number | string,
  /* Literal Definition ->*/
  resultType: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultType === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAgesLit = literalTypeCombine(30, 26, 'as-number');
console.log(combinedAgesLit);

const combineStringAgesLit = literalTypeCombine('30', '26', 'as-number');
console.log(combineStringAgesLit);

const combinedNamesLit = literalTypeCombine('max', 'anna', 'as-text');
console.log(combinedNamesLit);

console.log('');
console.log('Type Alias: ')

// Type Aliases
type Combinable = number | string;
type ConversationDescriptor = 'as-number' | 'as-text';

function typeAliasCombine(
  input1: Combinable,
  input2: Combinable,
  /* Literal Definition ->*/
  resultType: ConversationDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultType === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const aliasAge = typeAliasCombine(30, 26, 'as-number');
console.log(aliasAge);

const aliasStringAges = typeAliasCombine('30', '26', 'as-number');
console.log(aliasStringAges);

const aliasName = typeAliasCombine('max', 'anna', 'as-text');
console.log(aliasName);