// assigning value to a variable
var carName = "Volvo";

// defining variable x with value 50
var x = 50;

//  Adding variable x and y using concatenation operator
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;

// adding variables x and y and giving alert

var x = 5;
var y = 10;
var z = x + y;
alert(z);

// declaring three variables on one line
var firstName = "john", lastName = "Doe", age = 35;

// multiplying two numbers with and then using alert to give message
alert(10 * 5);

//  diving two numbers and then using alert to give alert
alert(10 / 5);

// alert the remainder
alert(10 % 5);

// using the assignment operator += to add number
x = 10;
y = 5;
x += y;

// using the assignment operator *= to multiply number
x = 10;
y = 5;
x *= y;

// defining datatype in comments
let length = 16;          //Number

let lastName = "Johnson"; //String 

const x = {
    firstName: "John",
    lastName: "Doe"
};                        //Object

//  calling a function
function myFunction() {
    alert("hello world");
}
myFunction();

// created a function 
function myFunction() {
    alert("hello world");
}

// created a function which returns  hello
function myFunction() {
    return "hello";
}
document.getElementById("demo").innerHTML = myFunction();

// CREATED A FUNCTION WHICH DISPLAYS HELLO USING INNERHTML
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello";
}

// defining objects and calling using alert
const person = {
    firstName: "John",
    lastName: "Doe"
};

alert(person.firstName);

//adding new value to person1 object country = norway 
const person1 = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway"
};

// Created an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").
const person2 =
{
    name: "John", age: 50
};
alert(person.name + "is" + person.age);


// using length function and to find length of string 
let txt = "Hello World!";
let x = txt.lenth;
alert(x);

// using escape sequence inorder to defining string using let
{
    let txt = "We are \"Vikings\"";
    alert(txt);
}

// using concatenation operator to add string str1 and str2
let str1 = "Hello ";
let str2 = "World!";
alert(str1 + str2);

// using touppercase method to show text in uppercase
{
    let txt = "Hello World!";
    txt = txt.toUpperCase();
}
// using slice method to slice the string bananas
{
    let txt = "I can eat bananas all day";
    let x = txt.slice(10, 17);
}
// using the replace method to replace the string
{
    let txt = "Hello World";
    txt = txt.replace("Hello", "Welcome");
}
// using the touppercase method to show string in uppercase
{
    let txt = "Hello World";
    txt = txt.toUpperCase();
}

{
    let txt = "Hello World";
    txt = txt.toLowerCase();
}
// fetching the index 1 of an array
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

// replacing the first element with ford
{
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Ford";
}

// alert the array elements
{
    const cars = ["Saab", "Volvo", "BMW"];
    alert(cars.length);
}
// remove last element from an array
{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.pop();
}

// pushed an element into an array
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");

// used splice method to remove element from an array
{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.splice(1, 2);
}
// used the sort method to sort an element of an array
{
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.sort();
}
// created a date object
const d = new Date();
alert(d);

// get full year

{
    const d = new Date();
    year = d.getFullYear();
}
// get month
{
    const d = new Date();
    d.getMonth();
}
// set full year 
{
    const d = new Date();
    d.setFullYear(2020);
}
{
    const d = new Date();
    d.setFullYear(2020);
}