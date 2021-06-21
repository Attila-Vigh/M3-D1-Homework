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

// 3) Create a function to remove a character at the specified position of a given string and return the new string.


const extractChPosistion = ( string, position) => {
    if (position === undefined || position > string.length || position < -string.length)
        
        return " You have to introduce a valid number "
    else 
        return string.substr(0, position) + string.substr( position +1)
}

let string = "Hello world!"

console.log(  extractChPosistion( string, -1) );
console.log(  extractChPosistion( string, -2) );
console.log(  extractChPosistion( string, -3) );
console.log(  extractChPosistion( string, -11) );
console.log(  extractChPosistion( string, -string.length) );
console.log(  extractChPosistion( string, -13) );
console.log(  extractChPosistion( string, -14) );
console.log(  extractChPosistion( string, 0) );
console.log(  extractChPosistion( string, 1) );
console.log(  extractChPosistion( string, 2) );
console.log(  extractChPosistion( string, 11) );
console.log(  extractChPosistion( string, string.length) );
console.log(  extractChPosistion( string, 13) );
console.log(  extractChPosistion( string) );

// 4) Create a function to find the largest of three given integers.

const largestOf3Integers = ( a, b, c) => {
    
        if ( parseInt( a ) === NaN || parseInt( b ) === NaN || parseInt( c ) === NaN )
            return "A valid integer has to be introduced."
        else if ( a >= b && a >= c)
            return a
        else if ( b >= a && b >= c)
            return b
        else if ( c >= b && c >= a)
            return c
        // else
}

console.log( largestOf3Integers( "a", 1, 2) );
console.log( largestOf3Integers( 1, 2, 3) );
console.log( largestOf3Integers( 3, 1, 2) );
console.log( largestOf3Integers( 3, 4, 2) );
console.log( largestOf3Integers( 3, 3, 3) );
console.log( largestOf3Integers( -1, 3, 3) );
console.log( largestOf3Integers( 0, 3, 3) );

