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
const largestOf3Integers2 = ( ...arg ) => Math.max( ...arg )

console.log( largestOf3Integers2( "a", 1, 2) );
console.log( largestOf3Integers2( 1, 2, 3) );
console.log( largestOf3Integers2( 3, 1, 2) );
console.log( largestOf3Integers2( 3, 4, 2) );
console.log( largestOf3Integers2( 3, 3, 3) );
console.log( largestOf3Integers2( -1, 3, 3) );
console.log( largestOf3Integers2( 0, 3, 3) );

// 5) Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const checkIfInRange = (a,b) => {
    if ( a <= 60 && 
         b <= 60 &&  
         a >= 40 && 
         b >= 40  )
        return `${a} and ${b} are in range of 40..60` 
    else if ( 
        a >= 70 && 
        b >= 70 && 
        a <= 100&& 
        b <= 100 )
        return `${a} and ${b} are in range of 70..100`
    else

    return `${a} and ${b} are not in the rage of 40..60 or 70..100`
}

console.log( checkIfInRange( 42, 56) );
console.log( checkIfInRange( 40, 60) );
console.log( checkIfInRange( 70, 100) );
console.log( checkIfInRange( 64, 66) );
console.log( checkIfInRange( 39, 56) );
console.log( checkIfInRange( 42, 101) );

// 6) Create a function to create a new string of specified copies (positive number) of a given string.

const copyString1 = ( string, copies) => {
    if ( copies > 0 ) {
        let newString = ""
        for (let i = 0; i < copies; i++) 
            newString += string ;
        
        return newString
    }
    else
        return "No songs for you!"
}
//! if NO "|| copies === 0" added console.log will return nothing 
const copyString2 = ( string, copies) => copies < 0 || copies === 0 ? "NO songs for you!" : string.repeat(copies)

console.log(copyString2("lalalalaaa!!!", 5));
console.log(copyString2("lalalalaaa!!!", 0));
console.log(copyString2("lalalalaaa!!!", -2));

// 7) Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.

const displayCityName = (city ="")  => 
    city.substr(0,3) === "Los" 
    || city.substr(0,3) === "New"
        ? city
        : "blank" 

console.log( displayCityName("Los Angeles"));
console.log( displayCityName("New York"));
console.log( displayCityName("Dallas"));
console.log( displayCityName("London"));
console.log( displayCityName());

// 8) Create a function to calculate the sum of three elements of a given array of integers of length 3.

const addUPArrayOf3Numbers1 = arrayOfNumbers => {
    if( arrayOfNumbers.length === 3 ) {
        let sum = 0
        for( let i of arrayOfNumbers)
            if( Number(i) !== NaN)
                sum += Number(i)
        
        return sum
    }
}
const addUPArrayOf3Numbers2 = arrayOfNumbers => {
    let arrLen = arrayOfNumbers.length
    if( arrLen === 3 ) {
        let sum = 0
        for( let i=0; i < arrLen; i++ )
        sum += Number(arrayOfNumbers[i])
        
        return sum
    }
}

const addUPArrayOf3Numbers3 = arrayOfNumbers =>  
    arrayOfNumbers.length === 3 
        ? arrayOfNumbers.reduce( (sum, elem) => sum += Number(elem))
        : undefined



console.log( addUPArrayOf3Numbers3([1,2,3]));
console.log( addUPArrayOf3Numbers3([1,2]));
console.log( addUPArrayOf3Numbers3([1,2,3,4]));
console.log( addUPArrayOf3Numbers3([4,2,3]));
console.log( addUPArrayOf3Numbers3([1,2,"three"]));