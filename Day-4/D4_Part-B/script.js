// 1. Create variables of all seven primitive types and log each with its typeof

let name = "Sreeveda";
console.log(name);
console.log(typeof name);

let age = 20;
console.log(age);
console.log(typeof age);

let isstudent = true;
console.log(isstudent);
console.log(typeof isstudent);

let marks;
console.log(marks);
console.log(typeof marks);

let course;
console.log(course);
console.log(typeof course);

let val = 2005n;
console.log(val);
console.log(typeof val);

let id = Symbol("id");
console.log(Symbol);
console.log(typeof Symbol);

let student = {
  name: "Sreeveda",
  age: 20,
  course: "CSE",
  marks: 84,
  city: "Hyderabad",
};
console.log(student);
console.log(typeof student);

// 2. Demonstrate all six arithmetic operators on two numbers, logging each result.

// 4. Use prompt() to get two numbers, convert them, and log their sum, difference, product, and
// quotient.

let val1 = 20;
let a = prompt("Enter 1st number:");
console.log("1st number: ", a);
let b = prompt("Enter 2nd number:");
console.log("2nd number: ", b);

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// 3. Write code that shows the difference between == and === for at least three value pairs.

let val2 = "20.0";
console.log(val1 == val2);
console.log(val1 === val2);

let num1 = "0";
let num2 = 0;
console.log(num1 == num2);
console.log(num1 === num2);

let v1 = 0;
let v2 = false;
console.log(v1 == v2);
console.log(v1 === v2);

// 5. Create an array of five items and demonstrate push , pop , shift , unshift , and .length .

let nums = [95, 87, 83, 92, 68, 55, 42];
console.log(nums);
nums.push(12);
console.log(nums);
nums.pop();
console.log(nums);
nums.shift();
console.log(nums);
nums.unshift(95);
console.log(nums);
console.log("length of the array is:", nums.length);
