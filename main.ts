                           //DAY 38 CHALLENGE//
//Q.112 create a Map that stores the names of countries as keys and their capitals as value.
//add three countries to the map?

const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C"); //adds USA to the Map
countries.set("Frence", "Paris"); //adds Frence to the Map
countries.set("japan", "Tokyo"); //adds japan to the map
console.log(countries);

//Q.113 write a function that checks if a Map contains a key for "Canada" and logs the capital
//if it exists?
console.log("\n");

function logCapitalcanada(countries: Map<string, string>) : void {
    if (countries.has("Canada")) {
        console.log(`The capital of canada is ${countries.get("Canada")}`);   
    } else {
        console.log("Canada is not in the Map.");  
    }
}
logCapitalcanada(countries);
//checks if canada is in our map and logs the capital if it exist.
 
//Q.114 Iterate over a map of students ids and names,and log each pair to the console.

console.log("\n");
const students = new Map<number, string>();
students.set(1, "Moiz");
students.set(2, "Nabeel");
students.set(3, "Rasheed");
students.set(4, "Zain");

//Itrates over the map and logs each student id and name.
students.forEach((name, id) =>{
    console.log(`student ID: ${id}, Name : $ {name}`);
});




            //39
//Q. 115 use a switch statement to log the days of the week based on a number (1-7)?

function logDayofweek(dayNumber: number): void {
    switch(dayNumber) {
        case 1 :
            console.log("Sunday");
            break;
        case 2 :
            console.log("Monday");
            break;
        case 3 :
            console.log("Tuesday");
            break;
        case 4 :
            console.log("wednesdasy");
            break;
        case 5 :    
            console.log("Thursday");
            break;
        case 6 :
            console.log("Friday");
            break;
        case 7 :
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
            break;       
    }
}
logDayofweek(5);

//Q.116 create a switch case that matches several case to the same code block,
//seasons.

console.log("\n");
function logSeason(month :number): void {
    switch(month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;                                   
    }
}
logSeason(8);


//Q.117 Implement a switch statement that evalutes an expression and uses the defaludt case if
//none of the casse match?

console.log("\n");
function evaluteGrade(grade: string): void {
   switch (grade) {
    case "A":
      console.log("Excellent");
      break;
    case "B":
        console.log("good");
        break;
    case "C":
        console.log("fair");
        break;
    case "D":
         console.log("fail");
         break;
    default:
        console.log("Invalid Grade");
        break;  
   }
}
evaluteGrade("B");
evaluteGrade("M");


           // 40 day
//Q.118 write a loop that logs numbers from 1 to 10 to the console.

for (let i = 0; i <= 10; i++) {
    console.log(i); //logs the current value o i
}


//Q.119 create a while loop that logs "Hellow, World!" 5 times?

console.log("\n");
//initializes a counter
let count: number = 0;
//this while loop runs until count is 5
while (count < 5) {
    console.log("Hellow, world");
    count++; //increment count by 1
}

//Q.120 use a for ... of loop to itrate througn an array of your favorite movies and log each one?

console.log("/n");
const favoriteMovies: string [] = [
    "inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
//use a for... of loop to itrate through favoriteMovie
for (const movie of favoriteMovies) {
    console.log(movie);
}

//day 41
//Q.121 implement a for loop that counts from 1 to 10 but skips number 5 using 
//the continue statement?

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(i);
}
//Q.122 use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5?
console.log("\n");
let counter: number = 10;
while (counter > 0) {
    if (counter === 5) {
        break;
    }
    console.log(counter);
    counter--;
}
//Q.123 create a loop that iterates through a string and stops when it finds the first vowel?
console.log("\n");
function logUntilVowel(str:string): void {
   const vowels = "aeiou" ;
   for (const char of str) {
    if (vowels.includes(char)) {
        console.log(`first vowel found: ${char}`);
        break;
    }
    console.log(char);
   }
}
logUntilVowel("jgflimon");

//day 42
//Q.124 create a function inside an object that returns the objects own name property using the this keywords?
const person = {
    name: "alice",
    getName: function() {
        return this.name;
    },
};
console.log(person.getName());

//Q.125 modify a method in an objects to use the this keywords to access another property in this same object?
console.log("\n");
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;  
    },
};
console.log(rectangle.calculateArea());

//Q.126 explain how the this keyword changes its value when used inside a nested function within a method?
console.log("\n");
const myObject = {
    property: "value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () =>{
            console.log(this.property);
        };
        innerMethod(); 
    },
};
myObject.outerMethod();

//day 43
//Q.127 convert a traditional function expression to an arrow function?
//traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
//converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(6,3));
console.log(arrowFunction(6,3));

//Q.128 Create an arrow function that takes multiple parameters and return the product?
console.log("\n");
const multipleParameter = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
console.log(multipleParameter(2, 3, 4));

//Q.129 Explain how this behaves differently in arrow functions compared to traditional function?
console.log("\n");
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("traditional function:", this.value);
    },
    arrowFunction: () => {
        console.log("arrow function:", this.value);
    },
};
    traditionalVsArrow.traditionalFunction();
    traditionalVsArrow.arrowFunction();

// day 44
//Q.130 Explain how to export  a function from one javascript file and import it into another file?
 
import {add} from "./indax";
console.log(add(5, 2));

//Q.131 Create two modules; one that exports a class, and another that imports the class and
//create an instance?

import { Person } from "./indax";
const alice = new Person("Alice");
alice.greet();

//Q.132 discuss the difference between default and named exports in javascript modules?
//importing named exports
import { untilOne, untilTwo } from "./indax";
//importing a default export
import calculator from "./indax";

// day 45
//Q.133 write a javascript object and convert it into a json string?
// define a javascript object
const Person = {
    name: "hamna",
    age: 20,
    city: "karachi",
};
//converts the object into a json string
const jsonString = JSON.stringify(person);
console.log(jsonString);

//Q.134 Take a json string and parse it into a javascript object?
console.log("\n");
//define json string
const jsonString1 = '{"name":"Hamna", "age": 20, "city":"karachi"}';
//parse the json string back into a javascript object
const person1 = JSON.stringify(jsonString1)
console.log(person1);

//Q.135 explain how you can format a json string with proper identation for readability?
console.log("\n");
const person2 = {
    name: "amna",
    age: "22",
    city: "Islamabad",
};
//convert the object into a json string with identation
const jsonString2 = JSON.stringify(person2, null, 2);
console.log(jsonString2);

// day 46
//Q.136 use  console.log() to debug and track the value of a variable inside a loop?
for (let i = 1; i <=5; i++) {
    console.log(`Iteration ${i}, i value:`,i);  
}
//Q.137 Implement a try catch block to handle potential errors in a block of code?
console.log("\n");
try {
    // itentionally cause an error
    throw new Error("something went wrong");
} catch (error) {
    console.log(error.message);   
}
//Q.138 describe  how to use breakpoints in browser developer tools to debug javascript code?
console.log("\n");
//sample code snippet for setting a breakpoint 
console.log("before breakpoint");
//using your browser developer tools
console.log(
    "this line has a breakpoint set on it in the browser developer tools"
);
console.log("after breakpoint");

// day 47
//Q.139 List three reserved words in javascript and create a valid use case for each?
let count1 = 5;
if (count > 0) {
    console.log("count is greater than 0"); 
}
function add(a:number, b:number) {
    return a + b;
}


//Q.140 explain the error that occurs when trying to use a reserved word as a variable name?
console.log("\n");
console.log(
    "using a reserved word as a variable name cause a syntax error in javascript."
);

//Q.141 discuss the significance of the await reserved word in asynchronous javascript?
console.log("\n");
function fetchSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`data fetched successfully`);
        }, 2000);
    });  
}
async function fetchData() {
    const data = await fetchSomething();
    console.log(data);
}
(async ()  => {
    console.log(
        "the 'await' keyword allows asynchronous, promise based behaviour to bewritten in a cleaner more linear function."
    );
    await fetchData();
})();

// day 48
// Q.142 create a promise that resolves with "hellow, world" after 2 seconds?
const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("hellow, world!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));

//Q.143 show how to use the .then() and .catch() methods to handle promise resolution and rejection?
console.log("\n");
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    } else {
        reject(new Error("failure"));
    }
});
conditionalPromise
.then((result) => console.log(result))
.catch((error) => console.log(error.message));

//Q.144 explain the use of the promise.all() method with an example?
console.log("\n");
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string> ((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);  
});


                   // day 49
//Q.145 create a function that accepts a callback and invokes it with some arguments?
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
): void {
    callback(arg1, arg2);// invokes the callback with specified arguments
}
//example callback function that adds two numbers
const add8 = (a: number, b:number) => {
    console.log(a + b);
};
executeCallback(add8, 5, 3)

//Q.146 show an example of a callback function used to filter an array of numbers.
console.log("\n");
//this array of numbers will be filtered
const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers: number[] = numbers.filter((number) => number > 5);
console.log(filteredNumbers);

//Q.147 explain how to handle errors in a callback pattern.
console.log("\n");


 function fetchData1 (
     callback: (error: Error | null, data?: string) => void
): void {
     const error = new Error("failed to fetch data");
     const data = "some data";
if (Math.random() > 0.5) {
    callback(null, data);
} else {
    callback(error);
  }
}
fetchData1((error, data) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(data);
    }
});

           //day 50
//Q.148 Demonstrate the use of the setTimeout() function to execute code after a delay?
//uses setTimeout to log a message after a 2-second delay
setTimeout(()  => {
    console.log("this message is shown after a 2-second delay.");   
}, 2000)           
// this showcase how to use setTimeout to delay actions in your code.


//Q.149 Explain the concept of the event loop in javascript with an example?
console.log("Start");
setTimeout(()  => {
    console.log("callback executed"); //this to be executed by the event loop
}, 0);
console.log("End");
//Although the timeout is 0, "callback executed" is logged after "end" due to then event loop.


//Q.150 describe how asynchronous callbacks differ from synchronous code execution.
//synchronous example
console.log("before synchronous operation");
//simulate a synchronous blocking operation
for (let i = 0; i <1e9; i++) {}  // A long loop
console.log("after synchronous operation");

//Asynchronous example
console.log("before asynchronous operation");
setTimeout(() => {
    console.log("asynchronous operation completed");
}, 1000);
console.log("after asynchronous function setup");
//demonstrate hoe the rest of the code continues to execute without waiting for the asynchronous operation.



 


















 
