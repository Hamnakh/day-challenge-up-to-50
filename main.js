"use strict";
//DAY 38 CHALLENGE//
//Q.112 create a Map that stores the names of countries as keys and their capitals as value.
//add three countries to the map?
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var countries = new Map();
countries.set("USA", "Washington, D.C"); //adds USA to the Map
countries.set("Frence", "Paris"); //adds Frence to the Map
countries.set("japan", "Tokyo"); //adds japan to the map
console.log(countries);
//Q.113 write a function that checks if a Map contains a key for "Canada" and logs the capital
//if it exists?
console.log("\n");
function logCapitalcanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalcanada(countries);
//checks if canada is in our map and logs the capital if it exist.
//Q.114 Iterate over a map of students ids and names,and log each pair to the console.
console.log("\n");
var students = new Map();
students.set(1, "Moiz");
students.set(2, "Nabeel");
students.set(3, "Rasheed");
students.set(4, "Zain");
//Itrates over the map and logs each student id and name.
students.forEach(function (name, id) {
    console.log("student ID: ".concat(id, ", Name : $ {name}"));
});
//39
//Q. 115 use a switch statement to log the days of the week based on a number (1-7)?
function logDayofweek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("wednesdasy");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
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
function logSeason(month) {
    switch (month) {
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
function evaluteGrade(grade) {
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
for (var i = 0; i <= 10; i++) {
    console.log(i); //logs the current value o i
}
//Q.119 create a while loop that logs "Hellow, World!" 5 times?
console.log("\n");
//initializes a counter
var count = 0;
//this while loop runs until count is 5
while (count < 5) {
    console.log("Hellow, world");
    count++; //increment count by 1
}
//Q.120 use a for ... of loop to itrate througn an array of your favorite movies and log each one?
console.log("/n");
var favoriteMovies = [
    "inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
//use a for... of loop to itrate through favoriteMovie
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log(movie);
}
//day 41
//Q.121 implement a for loop that counts from 1 to 10 but skips number 5 using 
//the continue statement?
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
//Q.122 use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5?
console.log("\n");
var counter = 10;
while (counter > 0) {
    if (counter === 5) {
        break;
    }
    console.log(counter);
    counter--;
}
//Q.123 create a loop that iterates through a string and stops when it finds the first vowel?
console.log("\n");
function logUntilVowel(str) {
    var vowels = "aeiou";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("first vowel found: ".concat(char));
            break;
        }
        console.log(char);
    }
}
logUntilVowel("jgflimon");
//day 42
//Q.124 create a function inside an object that returns the objects own name property using the this keywords?
var person = {
    name: "alice",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());
//Q.125 modify a method in an objects to use the this keywords to access another property in this same object?
console.log("\n");
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
//Q.126 explain how the this keyword changes its value when used inside a nested function within a method?
console.log("\n");
var myObject = {
    property: "value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
//day 43
//Q.127 convert a traditional function expression to an arrow function?
//traditional function expression
var traditionalFunction = function (a, b) {
    return a + b;
};
//converted to arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(6, 3));
console.log(arrowFunction(6, 3));
//Q.128 Create an arrow function that takes multiple parameters and return the product?
console.log("\n");
var multipleParameter = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multipleParameter(2, 3, 4));
//Q.129 Explain how this behaves differently in arrow functions compared to traditional function?
console.log("\n");
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("traditional function:", this.value);
    },
    arrowFunction: function () {
        console.log("arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
// day 44
//Q.130 Explain how to export  a function from one javascript file and import it into another file?
var indax_js_1 = require("./indax.js");
console.log((0, indax_js_1.add)(5, 2));
