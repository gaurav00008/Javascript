// const varId=7

// accountEmail = "gaurav12@gmail.com"
// accountPass = "22883883"
// accountCity = "Delhi"

// console.log(varId);


// console.table([accountEmail,accountPass,accountCity])



// // DATATYPES IN JAVASCRIPT
// let name = "Gaurav" // String
// let age = 22 // Number
// let isStudent = true // Boolean
// let hobbies = ["coding", "gaming", "traveling"] // Array 


// console.log(typeof undefined); //undefined
// console.log(typeof null); //object




// //OPERATION in JAVASCRIPT
// console.log(5 + 3); // Addition
// console.log(5 - 3); // Subtraction
// console.log(5 * 3); // Multiplication
// console.log(5 / 3); // Division
// console.log(5 % 3); // Modulus
// console.log(5 ** 3); // Exponentiation



// let str1 = "Hello"
// let str2 = "World"

// console.log(str1 + " " + str2); // Concatenation
// console.log(str1.length); // Length of the string



// // COMAPRISON OPERATORS
// console.log(5 == 5);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);


// //OBJEST IN JAVASCRIPT
// const heroes = ["Superman", "Batman", "Spiderman"];
// let myObj={
//     name:"Gaurav",     
//     age:22,
// }



//Stack Memory and Heap Memory || Primitives and Non-Primitives

// Primitives are stored in Stack Memory
// Non-Primitives are stored in Heap Memory

// let myYTChannel = "CodeWithGaurav" 

// let anothername= myYTChannel
// anothername = "CodeWithGaurav2"

// console.log(myYTChannel); // CodeWithGaurav
// console.log(anothername); // CodeWithGaurav2





/*STRINGS IN JAVASCRIPT*/
const name = "Alogmi"
const city = "Kathmandu"

// Concatenation
// console.log(name + " " + city) /*Outdated technique*/

// Template Literals
console.log(`${name} ${city}`) /*Modern technique*/



const gameName = new String("BULBASAUR_IS_A_POKEMON")  //TO DECLARE A STRING OBJECT
console.log(gameName); 
console.log(typeof gameName); //object



console.log(gameName.length); // Length of the string
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.toLowerCase()); // Convert to lowercase


console.log(gameName.charAt(2)); // Get character at index 2
console.log(gameName.indexOf("this")); // Get index of the first occurrence of "this"


const newString = gameName.substring(0, 3); // Get substring from index 0 to 4
console.log(newString); // Output: "Hey "



const str1= gameName.slice(-5, 4); // Get substring from index 0 to 4
console.log(str1); // Output: "Hey"


const trimString = "   Hello World!   "
console.log(trimString); // Original string with whitespace

console.log(trimString.trim()); // Remove whitespace from both ends

const url = "https://www.codewithgaura%200.com"

console.log(url.replace('%200', 'v')); // Replace %20 with space

console.log(url.split('_')); // Split the string into an array using '.' as the separator