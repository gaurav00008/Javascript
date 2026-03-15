// const chalk = require('chalk');

// console.log(chalk.red("Error message"));
// console.log(chalk.green("Success message"));
// console.log(chalk.yellow("Warning"));



// // // // // // // // // // const varId=7

// // // // // // // // // // accountEmail = "gaurav12@gmail.com"
// // // // // // // // // // accountPass = "22883883"
// // // // // // // // // // accountCity = "Delhi"

// // // // // // // // // // console.log(varId);


// // // // // // // // // // console.table([accountEmail,accountPass,accountCity])



// // // // // // // // // // // DATATYPES IN JAVASCRIPT
// // // // // // // // // // let name = "Gaurav" // String
// // // // // // // // // // let age = 22 // Number
// // // // // // // // // // let isStudent = true // Boolean
// // // // // // // // // // let hobbies = ["coding", "gaming", "traveling"] // Array 


// // // // // // // // // // console.log(typeof undefined); //undefined
// // // // // // // // // // console.log(typeof null); //object




// // // // // // // // // // //OPERATION in JAVASCRIPT
// // // // // // // // // // console.log(5 + 3); // Addition
// // // // // // // // // // console.log(5 - 3); // Subtraction
// // // // // // // // // // console.log(5 * 3); // Multiplication
// // // // // // // // // // console.log(5 / 3); // Division
// // // // // // // // // // console.log(5 % 3); // Modulus
// // // // // // // // // // console.log(5 ** 3); // Exponentiation



// // // // // // // // // // let str1 = "Hello"
// // // // // // // // // // let str2 = "World"

// // // // // // // // // // console.log(str1 + " " + str2); // Concatenation
// // // // // // // // // // console.log(str1.length); // Length of the string



// // // // // // // // // // // COMAPRISON OPERATORS
// // // // // // // // // // console.log(5 == 5);

// // // // // // // // // // console.log(null>0);
// // // // // // // // // // console.log(null==0);
// // // // // // // // // // console.log(null>=0);


// // // // // // // // // // //OBJEST IN JAVASCRIPT
// // // // // // // // // // const heroes = ["Superman", "Batman", "Spiderman"];
// // // // // // // // // // let myObj={
// // // // // // // // // //     name:"Gaurav",     
// // // // // // // // // //     age:22,
// // // // // // // // // // }



// // // // // // // // // //Stack Memory and Heap Memory || Primitives and Non-Primitives

// // // // // // // // // // Primitives are stored in Stack Memory
// // // // // // // // // // Non-Primitives are stored in Heap Memory

// // // // // // // // // // let myYTChannel = "CodeWithGaurav" 

// // // // // // // // // // let anothername= myYTChannel
// // // // // // // // // // anothername = "CodeWithGaurav2"

// // // // // // // // // // console.log(myYTChannel); // CodeWithGaurav
// // // // // // // // // // console.log(anothername); // CodeWithGaurav2





// // // // // // // // // /*STRINGS IN JAVASCRIPT*/
// // // // // // // // // const name = "Alogmi"
// // // // // // // // // const city = "Kathmandu"

// // // // // // // // // // Concatenation
// // // // // // // // // // console.log(name + " " + city) /*Outdated technique*/

// // // // // // // // // // Template Literals
// // // // // // // // // console.log(`${name} ${city}`) /*Modern technique*/



// // // // // // // // // const gameName = new String("BULBASAUR_IS_A_POKEMON")  //TO DECLARE A STRING OBJECT
// // // // // // // // // console.log(gameName); 
// // // // // // // // // console.log(typeof gameName); //object



// // // // // // // // // console.log(gameName.length); // Length of the string
// // // // // // // // // console.log(gameName.toUpperCase()); // Convert to uppercase
// // // // // // // // // console.log(gameName.toLowerCase()); // Convert to lowercase


// // // // // // // // // console.log(gameName.charAt(2)); // Get character at index 2
// // // // // // // // // console.log(gameName.indexOf("this")); // Get index of the first occurrence of "this"


// // // // // // // // // const newString = gameName.substring(0, 3); // Get substring from index 0 to 4
// // // // // // // // // console.log(newString); // Output: "Hey "



// // // // // // // // // const str1= gameName.slice(-5, 4); // Get substring from index 0 to 4
// // // // // // // // // console.log(str1); // Output: "Hey"


// // // // // // // // // const trimString = "   Hello World!   "
// // // // // // // // // console.log(trimString); // Original string with whitespace

// // // // // // // // // console.log(trimString.trim()); // Remove whitespace from both ends

// // // // // // // // // const url = "https://www.codewithgaura%200.com"

// // // // // // // // // console.log(url.replace('%200', 'v')); // Replace %20 with space

// // // // // // // // // console.log(url.split('_')); // Split the string into an array using '.' as the separator



// // // // // // // // /*NUMBERS AND MATHS IN JAVASCRIPTS*/ 

// // // // // // // // //NUMBERS IN JAVASCRIPT
// // // // // // // // // const num=100;
// // // // // // // // // console.log(num);//NUMBER

// // // // // // // // // // console.log(typeof balance); //object  


// // // // // // // // // const balance = new Number(500.1263845); //TO DECLARE A NUMBER OBJECT
// // // // // // // // // console.log(balance);



// // // // // // // // // console.log(balance.toString().length); // Convert number to string)
// // // // // // // // // console.log(balance.toFixed(2)); // Format number to 2 decimal places

// // // // // // // // // const otherNumber = 3.14159;
// // // // // // // // // console.log(otherNumber.toPrecision(3)); // Format number to 3 significant digits


// // // // // // // // // const hundreds = 100000000
// // // // // // // // // console.log(hundreds.toLocaleString('en-US')); // Format number with commas as thousands separators 




// // // // // //             /*MATHS IN JAVASCRIPT*/

// // // // // // // // console.log(Math);
// // // // // // // // console.log(Math.PI); // Get the value of PI 
// // // // // // // // console.log(Math.abs(-4)); // Get the absolute value of -4
// // // // // // // // console.log(Math.round(8.31)); // Round to the nearest integer

// // // // // // // // console.log(Math.min(4,5,6,7,8,9,10,119,182,128)); // Get the minimum value from a list of numbers
// // // // // // // // console.log(Math.max(4,5,6,7,8,9,10,119,182,128)); // Get the maximum value from a list of numbers


// // // // // // // console.log(Math.random()); // Get a random number between 0 and 1

// // // // // // // const min = 10;
// // // // // // // const max = 20;

// // // // // // // console.log(Math.floor(Math.random() * (max - min + 1)) + min);



// // // // // // // DATES IN JAVASCRIPT

// // // // // // let myDate =new Date(); // Create a new Date object with the current date and time
// // // // // // console.log(myDate.toString()); // Output the current date and time
// // // // // // console.log(myDate.toDateString());    // Output the date portion of the Date object as a string
// // // // // // console.log(myDate.toTimeString()); // Output the time portion of the Date object as a string
// // // // // // console.log(typeof myDate); // Output the type of the Date object (object)


// // // // // // let myCretaionDate = new Date(2026, 2, 8); // Create a new Date object with a specific date
// // // // // // console.log(myCretaionDate.toString()); 


// // // // // // let myTimestamp = Date.now();
// // // // // // console.log(myTimestamp); // Output the current timestamp in milliseconds since January 1, 1970

// // // // // // console.log(myCretaionDate.getTime());

// // // // // // console.log(Math.floor(Date.now()/1000)); // Output the current timestamp in seconds since January 1, 1970  




// // // // // /*ARRAYS IN JAVASCRIPT*/
// // // // // const myArr = [0,1,2,3]
// // // // // const myHeroes = ["Deku", "All Might", "Bakugo", "Todoroki", "Uraraka"]


// // // // // const myArr2= new Array(6,7,8,9,10) //TO DECLARE AN ARRAY OBJECT

// // // // // // console.log(myHeroes.length); // Output the array
// // // // // // console.log(myArr.length); // Output the array



// // // // // // ARRAY METHOES IN JAVASCRIPT

// // // // // // myArr.push(10)
// // // // // // console.log(myArr); // Output the array after adding an element to the end

// // // // // // myArr.pop()
// // // // // // console.log(myArr); // Output the array after removing the last element

// // // // // // myArr.unshift(0) // Add an element to the beginning of the array
// // // // // // console.log(myArr); // Output the array after adding an element to the beginning

// // // // // // myArr.shift() // Remove the first element of the array
// // // // // // console.log(myArr); // Output the array after removing the first element


// // // // // // console.log(myArr.includes(5)); // Check if the array includes the value 5
// // // // // // console.log(myArr.indexOf(2)); // Get the index of the first occurrence of the value 2 in the array


// // // // // const newArr = myArr.join()
// // // // // console.log(myArr); // Output the array as a string with elements separated by commas

// // // // // console.log(newArr)

// // // // // console.log(typeof newArr); // Output the type of the newArr variable (string)



// // // // /*SLICE AND SPLICE IN JAVASCRIPT */


// // // // myArr = [0,1,2,3,4,5,6,7,8,9]
// // // // const newArr = myArr.slice(1,4)
// // // // console.log(newArr);



// // // // const splArr = myArr.splice(1,4)
// // // // console.log(splArr); // Output the removed elements from the array



// // // /*ARRAY PART 2*/

// // // const marvel_heroes = ["Thor", "Iron Man", "Hulk", "Captain America", "Black Widow"]
// // // const dc_heroes = ["Superman", "Batman", "Wonder"] 

// // // // marvel_heroes.push(dc_heroes)

// // // // console.log(marvel_heroes); // Output the array after adding the dc_heroes array as an element to the end of the marvel_heroes array

// // // // console.log(marvel_heroes[5][0]); // Output the first element of the dc_heroes array that was added to the marvel_heroes array (Superman)

// // // // marvel_heroes.concat(dc_heroes) // Concatenate the dc_heroes array to the end of the marvel_heroes array
// // // // console.log(marvel_heroes); 
 

// // // const allHeroes = [...marvel_heroes, ...dc_heroes] // Use the spread operator to concatenate the marvel_heroes and dc_heroes arrays into a new array called allHeroes
// // // console.log(allHeroes); // Output the allHeroes array, which contains all the elements from both the marvel_heroes and dc_heroes arrays


// // const another_array= [1,2,3,[4,5,6],7,[8,9,10]]

// // const real_another_array = another_array.flat(Infinity) // Use the flat() method to flatten the nested arrays in another_array into a single-level array called real_another_array
// // console.log(real_another_array);



// /*TO CONVERT ANYTHING INTO A ARRAY*/

// let s1=100
// let s2=200
// let s3=300
// let s4=400
// let s5=500

// console.log(Array.of(s1,s2,s3,s4,s5)); // Use the Array.of() method to create a new array containing the values of s1, s2, s3, s4, and s5



// OBJECT IN JAVASCRIPT

// const JsUser = {
//     name: "Algomi",
//     age: 30,
//     locatuion: "Kathmandu",
//     email: "algomi@example.com",
//     isLogged: true,
//     lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
// }


// console.log(JsUser.email)


// JsUser.email = "change@email.com" // Update the email property of the JsUser object
// console.log(JsUser.email) 

// Object.freeze(JsUser) // Freeze the JsUser object to prevent any further modifications to its properties

// JsUser.email = "login@gmail.com"

// console.log(JsUser.email)



// ANOTHER EXAMPLES OF OBJECT

// let person = {
//     name: "Gaurav",
//     age: 20,
//     country: "Nepal"
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.country);


// const tinderUser = {}

// tinderUser.id = "12345"
// tinderUser.nae = "Prakash"
// tinderUser.isLoggedIn = true

// console.log(tinderUser)

// const regularUser = {
//     email: "regular@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Gaurav",
//             lastname: "Paneru"
//         }
//     }
// }


// // console.log(regularUser.fullname.userfullname.lastname);

// const obj1 = {1: "one", 2: "two"}
// const obj2 = {3: "three", 4: "four"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


/*OBJECT DESTRUCTURING IN JAVASCRIPT*/

// const course = {
//     coursename: "JavaScript",
//     price: 999,
//     courseInstructor: "Code aur Chai"
// }

// // course.courseInstructor

// const{courseInstructor} = course

// console.log(courseInstructor);





/*APIS*/



// JSON
// {
//     "name": "Gaurav",
//     "coursename": "JavaScript",
//     "price": 999,
//     "courseInstructor": "Code aur Chai"
// }







// // EXAMPLE OF API 

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }




/**FUNCTIONS IN JAVASCRIPT*/

// function sayMyName(){
//     console.log("G");
//     console.log("A");
//     console.log("u");
//     console.log("R");
//     console.log("A");
//     console.log("V");
// }


// sayMyName()  //FUNCTION CALL 




// function Sum(a, b){
//    console.log( a + b); 
// }


// Sum(298, 726);


/*function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}


const result = addTwoNumbers(100, 200)
// console.log("The result is:",result);


function loginUserMessage(username){
  
    if(username === undefined){
        console.log("Please enter a username");
        return
    }

    return `Hey,  ${username} just logged in`
}

console.log(loginUserMessage()); */



/*FUNCTIONS PART 2*/

/*function addToCart(num1){
    return num1
}


console.log(addToCart(4)) */


/* REST OPERATOR IN JAVASCRIPT*/

// function calculateCartPrice(...num1){
//     return num1
// }


// console.log(calculateCartPrice(100, 200, 300, 400, 500))

// const user = {
//     namae: "Gaurav",
//     age: 22,
//     city: "Delhi"
// }

// function handleObject(anyobject){
//     console.log(`The name of the user is ${anyobject.namae}, age is ${anyobject.age} and city is ${anyobject.city}`);
// }

// handleObject(user)


// //PASSING ARRAY AS AN ARGUMENT IN FUNCTION

// const newArr = [1,2,3,4,5]

// function returnSecondValue(getArray){
//     return getArray[3]
// }

// console.log(returnSecondValue(newArr));






// SCOPES

// let a = 300

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(a); // Output: 10 (block scope)
// }



// console.log(a); // Output: 300 (global scope)
// console.log(b);
// console.log(c);


 
// function one() {
//     const username = "Gaurav"


//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }

//     // console.log(website);
    
//     two()


// }

// one()



// function addone(num){
//     return num + 1
// }


// console.log(addone(10));





/**ARROW FUNCTIONS IN JAVASCRIPT**/

// const user = {
//     username: "Gaurav",
//     price: 1028,
//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to our website`);
//         console.log(this);
        
//     }

// }


// user.welcomeMessage()

// user.username = "Sammy"
// user.welcomeMessage() 


// console.log(this); // In the global scope, 'this' refers to the global object (window in browsers)



// function chai() {
//     let usnername = "gaurav"
//     console.log(this.username);
// }

// chai();



//DECLARING A ARROW FUNCTION
// const chai = () => {
//     let username = "gaurav"
//     console.log(this.username);
// }


// chai()



/*BASIC ARROW FUNCTION SYNTAX*/

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)  //We dont need to write return statement if we have only one line of code in the function body

// console.log(addTwo(100, 20));





/**Immediately Invoked Function Expression (IIFE)**/


//NAMED IFFE
// (function chai() {
//     console.log("DB is connected");
// })();

//UNNAMED IFFE
// ((name ) => {
//     console.log(`DB is connected using arrow function  ${name}`);
// })("Algomi")









/*Control Flow in JavaScript*/

/*IF STATEMENT*/


// const isUserLoggedIn = true

// if(isUserLoggedIn) {
//  //Code to be executed if the condition is true


// }


// if(false) {
//     //Code to be executed if the condition is false
// }


// if( 2 === "2") {
//     console.log("Executed");
// }



// const temp = 20

// if (temp >  25) {
//     console.log("It's a hot day");
// }

// else {
//     console.log("Temperature is greater than 25");
// }



// const score = 200

// if(score >= 100) {
//     const power = "fly"
//     console.log(`You have the power to ${power}`);
// }

// console.log(`You have the power to ${power}`);  // The scope of the power variable ends within the loop



//Shorthand notation for if


// const balance =299; 

// if (balance > 200) console.log("You can buy the product");






/*NESTED IF STATEMENT*/

// const balance = 1000

// if (balance < 500) 
//     {
//     console.log("Your balance is less than 500");
// } 

// else if (balance < 750)
//      {
//     console.log("Your balance is less than 750");
// } 

// else
//      {
//     console.log("You have sufficient funds");
// }



/*REAL LIFE EXAMPLE OF IF STATEMENT*/

// const userLoggedIn = true;
// const debitCard = true;
// const loggedinFromGoogle = false;
// const loggedinFromEmail = true;


// if (userLoggedIn && debitCard) {
//     console.log("You can make a purchase");
// }


// if (loggedinFromGoogle || loggedinFromEmail) {
//     console.log("You can log in");
// }



/*SWITCH STATEMENT IN JAVASCRIPT*/

//  const month = 3

//  switch (month)
//   {
//     case 1:
//         console.log("January");
//         break;

//     case 2:
//         console.log("February");
//         break;  
    
//     case 3:
//         console.log("March");
//         break;
    
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Invalid month");
//         break;
//  }




/*TRUTHY AND FALSY VALUES IN JAVASCRIPT*/

//The Truthy values are:-    [], true, "0, 'false", " ", [], {}, function() {}


//The Falsy values are:-    False, 0, -0, BigInt(0n), "", null, undefined, NaN


/*const userEmail = "h@user.mail"

if (userEmail) {
    console.log("You have a valid email address");
} else{
    console.log("Please provide a valid email address");
}



 */



/*To CHECK IF AN OBJECT IS EMPTY OR NOT*/

/*
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("The object is empty");
}*/





//NULLISH COALESCING OPERATOR (??): NULL, UNDEFINED

/*EXAMPLE 1*/

// let val1;
// val1 = 5 ?? 10

// console.log(val1);




/*EXAMPLE 2*/

// val1 =null ??10

// console.log(val1);


// val1 = undefined ?? 14
// console.log(val1);




/*TERNARY OPERATOR*/

// condition ? true : false

// const iceTeaPrice =100

// iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")






/*FOR LOOPS */


//SYNTAX
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


/*EXAMPLE 1*/

// for (let i = 0;i < 10; i++) 
//     {
//     const element = i;
//     if(element == 5)
//     {
//         console.log("5 is the best number out there")
//     }
//     console.log(element);  
// }





/*EXAMPLE 2*/

/*********  TO PRINT TABLE FROM 0 to 10  ************/

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loop Value: ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         //console.log(`Inner Loop Value: ${j} and inner loop value ${i}`);
//     }
// }




/*EXAMPLE 3*/

// let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }





/*BREAK AND CONTINUE*/


// for (let index = 1; index <=20; index++) 
// {
//     if(index == 5)
//     {
//         console.log(`The number 5 is detected`);
//         break;
//     }
//     console.log(`Value of i is ${index}`)
    
// }


for (let index = 1; index <=20; index++) 
{
    if(index == 5)
    {
        console.log(`The number 5 is detected`);
        continue
    }
    console.log(`Value of i is ${index}`)
    
}