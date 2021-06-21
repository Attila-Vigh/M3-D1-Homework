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

// 9) Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

const checkfor1an3IfInArray1 = arrayOfNumbers => {
    if(arrayOfNumbers.length === 2 
        && (arrayOfNumbers[0] === 1 
            || arrayOfNumbers[0] === 3
            || arrayOfNumbers[1] === 1
            || arrayOfNumbers[1] === 3    
            )) {
                
                return "The array contains the numbers 1 and 3"
    }
    else
    return null
}


const checkfor1an3IfInArray2 = arrayOfNumbers => { 
    let has_1_or_3 = null
    if( arrayOfNumbers.length === 2 )
        arrayOfNumbers.forEach( elem => {
            if (elem === 1 || elem === 3)
                return has_1_or_3 = "The array contains the numbers 1 and 3"
            else
                return has_1_or_3
            })
            else
                return has_1_or_3
        
    return has_1_or_3
}
    console.log( checkfor1an3IfInArray2([1,3]));
    console.log( checkfor1an3IfInArray2([1]));
    console.log( checkfor1an3IfInArray2([3]));
    console.log( checkfor1an3IfInArray2([1,2,3,4]));
    console.log( checkfor1an3IfInArray2([2,3]));
    console.log( checkfor1an3IfInArray2([1,"three"]));
    
    // 10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
    
const checkfor1an3IfNOTinArray1 = arrayOfNumbers => {
    if(arrayOfNumbers.length === 2 
        && (arrayOfNumbers[0] !== 1 
            && arrayOfNumbers[0] !== 3
            && arrayOfNumbers[1] !== 1
            && arrayOfNumbers[1] !== 3    
            )) {

        return "1 and 3 NOT in array"
    }
    else
        return null
}


const checkfor1an3IfNOTinArray2 = arrayOfNumbers => { 
    let has_1_or_3 = null
    if( arrayOfNumbers.length === 2 ){
        arrayOfNumbers.forEach( elem => {
            console.log(  );
            if (elem === 1 || elem === 3)
                return has_1_or_3
        })
        has_1_or_3
    }
    else
        return has_1_or_3
    
    return "the array has NO 1 or 3"
}
console.log( checkfor1an3IfNOTinArray1([1,3]));
console.log( checkfor1an3IfNOTinArray1([1]));
console.log( checkfor1an3IfNOTinArray1([3]));
console.log( checkfor1an3IfNOTinArray1([1,2,3,4]));
console.log( checkfor1an3IfNOTinArray1([2,3]));
console.log( checkfor1an3IfNOTinArray1([2,4]));
console.log( checkfor1an3IfNOTinArray1([1,"three"]));

// 11) Create a function to find the longest string from a given array of strings.

const longestString = arrayOfStrings => {
    let longestString =""
    for( let string of arrayOfStrings)
        if( string.length > longestString.length )
            longestString = string

    return longestString
} 

const array = [
    "Sparkling Dust Jul 2016",
    "The Programmer and The Poetess",

    "I love a programmer",
    "He is always there making codes",
    "On different ways in order",
    "To show how much he loves you so",

    "There are times when he would",
    "Just throw some complex hints at me",
    "With utmost best I could",
    "Try to find the meaning and see",

    "See that maybe I'm right",
    "With the theory that I have made",
    "And maybe, just maybe",
    "My words rhyme with what's in your head",

    "But sometimes I want to",
    "Just let go and then erase it",
    "Sometimes I want you to",
    "Be brave enough to just admit",

    "That I'm something to you",
    "Not a computer you play with",
    "That your feelings are true",
    "There's no condition that you need",

    "I am afraid to feel",
    "The tragic end of a sonnet",
    "Where two lovers for real",
    "Are mere strangers who'll never ever meet",
]
console.log(  longestString(array) );

/** 12) Create a function to find the types of a given angle.
    * Types of angles:
    *   Acute angle: An angle between 0 and 90 degrees.
    *   Right angle: An 90 degree angle.
    *   btuse angle: An angle between 90 and 180 degrees.
    *   Straight angle: A 180 degree angle.  
*/

const checkTypeOfAngle = angle => {
    if ( angle < 0 || angle > 180)
        return `${ angle } is NOT a valid angle`
    if( angle >= 0 && angle < 90 )
        return `${ angle } is an Acute angle` 
    if( angle === 90 )
        return `${ angle } is a Right angle` 
    if( angle > 90 && angle < 180 )
        return `${ angle } is an obtuse angle` 
    if( angle === 180 )
        return `${ angle } is a Straight angle` 
      
}

console.log(checkTypeOfAngle( -1 ));
console.log(checkTypeOfAngle( 0 ));
console.log(checkTypeOfAngle( 1 ));
console.log(checkTypeOfAngle( 89 ));
console.log(checkTypeOfAngle( 90 ));
console.log(checkTypeOfAngle( 91 ));
console.log(checkTypeOfAngle( 179 ));
console.log(checkTypeOfAngle( 180 ));
console.log(checkTypeOfAngle( 181 ));

// 13) Create a function to find the index of the greatest element of a given array of integers

const gratestInArray1 = ( arrayOfNumbers13) => Math.max(...arrayOfNumbers13) 

const gratestInArray2 = ( arrayOfNumbers13) => {
    let gratesNumber = 0
        for (const number of arrayOfNumbers13 ) 
            if ( gratesNumber < number ) 
                gratesNumber = number
    return gratesNumber
} 

const arrayOfNumbers13 = [ 2, 334, 54, 65, 0, -12]

console.log( gratestInArray2(arrayOfNumbers13) );

// 14) Create a function to get the largest even number from an array of integers.

const gratestEvenInArray2 = ( arrayOfNumbers14) => {
    let gratesNumber = 0
        for (const number of arrayOfNumbers14 ) 
            if ( number%2 === 0 && gratesNumber < number ) 
                gratesNumber = number
    return gratesNumber
} 
console.log( "--------------------------------------------------------------------------------------------------------");
const gratestEvenInArray3 = arrayOfNumbers14 => arrayOfNumbers14.reduce( 
    ( acc, num ) => 
        num%2 === 0 
            ? acc = acc > num 
                ? acc 
                : acc = num 
            : acc
)

const arrayOfNumbers14 = [ 2, 334, 457, 5644, 54, 65, 0, -12]

console.log( gratestEvenInArray3(arrayOfNumbers14) );

// 15) Create a function to check from two given integers, whether one is positive and another one is negative.

const checkIfOnePosOtherNeg = ( a, b ) => ( a < 0 && b > 0) || ( b < 0 && a > 0) ? true : false 

console.log( checkIfOnePosOtherNeg(  1, 2) )
console.log( checkIfOnePosOtherNeg( -1, 2) )
console.log( checkIfOnePosOtherNeg(  1,-2) )
console.log( checkIfOnePosOtherNeg( -1,-2) )

// 16) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const first3Upper = string => 
      string.substr(0, 3).toUpperCase() 
    + string.substr(   3).toLowerCase()


const string16 = "Just throw some complex hints at me"
console.log( first3Upper( string16 ));

// 17) Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const calculateIfInRangeOf = ( a, b) => 
    (a + b) >= 50 && (a + b) <= 80  
        ? 65 
        : 80

console.log( calculateIfInRangeOf( 50, 0) );
console.log( calculateIfInRangeOf( 51, 0) );
console.log( calculateIfInRangeOf( 79, 0) );
console.log( calculateIfInRangeOf( 80, 0) );
console.log( calculateIfInRangeOf( 49, 0) );
console.log( calculateIfInRangeOf( 81, 0) );

/**
    18) Create a function to convert a number to a string, the contents of which depend on the number's factors. 
    Follow next example:
        * If the number has 3 as a factor, output 'Diego'.
        * If the number has 5 as a factor, output 'Riccardo'.
        * If the number has 7 as a factor, output 'Stefano'.
        * If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.

    Examples
        * 28's factors are 1, 2, 4, 7, 14, 28.
        * this would be a simple "Stefano".
        * 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
        * this would be a "DiegoRiccardo".
        * 34 has four factors: 1, 2, 17, and 34.
        * this would be "34".
 */

const converNumToStr = num => {
        let string = ""
        if( num%3 === 0 ) string  = 'Diego' 
        if( num%5 === 0 ) string += 'Riccardo' 
        if( num%7 === 0 ) string += 'Stefano' 
        
        if (string === "")
            return num
        else
            return string
} 

console.log( converNumToStr ( 1   ));
console.log( converNumToStr ( 3   ));
console.log( converNumToStr ( 5   ));
console.log( converNumToStr ( 7   ));
console.log( converNumToStr ( 15  ));
console.log( converNumToStr ( 21  ));
console.log( converNumToStr ( 28  ));
console.log( converNumToStr ( 30  ));
console.log( converNumToStr ( 105 ));
console.log( converNumToStr ( 106 ));
console.log( converNumToStr ( 11  ));
console.log( converNumToStr ( 13  ));
console.log( converNumToStr ( 23  ));

