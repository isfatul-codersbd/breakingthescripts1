let firstName = "Saikat";
let lastName = "Rozario";
let age = 30;
let isApproved = false;
let Designation;
let selectedColors = null;

let date = new Date();
console.log(date.getDate());

let colors = ["red", "blue"];

colors[2] = "green";
//dot notation
console.log(colors.length);

function square(number) {
  return number * number;
}

function getWishes(name) {
  console.log("Hello " + name);
}

console.log(square(2));

getWishes("Sifat");

//bracket notation

/*
primitive types
1. String 
2. Number
3. Boolean 
4. undefined
5. null 

reference types 
1. Object 
2. Array 
3. function 

*/
