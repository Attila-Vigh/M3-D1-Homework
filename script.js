// 1) Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.

const sum = (a, b) => a === b ? 3*( a+b ) : a+b

console.log( sum( 3, 3));
console.log( sum( 2, 3));

// 2) Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const checkTwoNumbersAre50 = (a, b) => a === 50 ? true : b === 50 ? true : a + b === 50 ? true : false;

console.log( checkTwoNumbersAre50( 23, 3));
console.log( checkTwoNumbersAre50( 25, 25));
console.log( checkTwoNumbersAre50( 50, 25));
console.log( checkTwoNumbersAre50(  5, 50));
