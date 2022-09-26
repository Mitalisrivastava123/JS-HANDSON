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
    country:"Norway"
};

// Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").
const person2=
 {
  name:"John", age:50
};
alert(person.name + "is" + person.age);