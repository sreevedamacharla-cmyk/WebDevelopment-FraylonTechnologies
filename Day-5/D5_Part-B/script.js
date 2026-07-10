// 1. Write examples demonstrating let , const , reassignment, and the difference with var scope.

let age = 20;
age = 21;
console.log(age);

const name = "Veda";
//name = "John"; // returns error

var x = 10;

if (true) {
  var a = 5;
  let b = 10;
}
console.log(a);

// 2. Convert functions into arrow functions

// Traditional:
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

// Arrow:
const add2 = (a, b) => {
  return a + b;
};

const sub2 = (a, b) => {
  return a - b;
};

const mul2 = (a, b) => {
  return a * b;
};

// Implicit return:
const multiply = (a, b) => a * b;

// 3. Demonstrate the spread operator to copy an array, merge two arrays, and merge two objects.

// Copy array:

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1, arr2);

// Merge arrays:

let p = [1, 2];
let q = [3, 4];
let r = [...p, ...q];
console.log(r);

// Merge objects:

let obj1 = {
  name: "Veda",
};
let obj2 = {
  age: 20,
};
let obj3 = {
  qualification: "B.Tech",
};

let obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

// 4. Use object destructuring (with renaming and a default value) and array destructuring (with skipping and rest).
// Object destructuring:

let student = {
  namevar: "Veda",
  agevar: 20,
};

let { namevar: n, agevar = 18 } = student;
console.log(student);

// Array destructuring:

let nums = [10, 20, 30, 40];

let [a2, , c2, ...rest] = nums;

console.log(a2, c2, rest);

// 5. Select an element five different ways ( getElementById , getElementsByClassName ,getElementsByTagName , querySelector , querySelectorAll ) and log each result.

let elem1 = document.getElementById("box2");

let elem2 = document.getElementsByClassName("box1");

let elem3 = document.getElementsByTagName("p");

let elem4 = document.querySelector(".box1");

let elem5 = document.querySelectorAll("p");

console.log(elem1, elem2, elem3, elem4, elem5);
