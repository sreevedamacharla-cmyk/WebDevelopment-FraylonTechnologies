// 1. Temperature converter: Prompt for a temperature in Celsius, convert it to Fahrenheit ( F = C * 9/5
// + 32 ), and display the result with a template literal.

let temp = prompt("Enter the temperature in celsius:");
console.log("Temperature in celsius is:", temp);

let fahr = (temp * 9) / 5 + 32;
console.log(`${temp} in fahrenheit is ${fahr}`);

// 2. Even or odd: Prompt for a number and use the modulus operator to alert whether it is even or odd.

let num = prompt("Enter a number:");
if (num % 2 === 0) {
  alert("The number is Even");
} else {
  alert("The number is Odd");
}

// 3. Simple calculator: Prompt for two numbers and an operation (+, -, *, /), perform it, and display the
// result. Handle invalid input.

let val1 = parseInt(prompt("Enter 1st number:"));
let val2 = parseInt(prompt("Enter 2nd number:"));
let operator = prompt("Enter an operator (+ , - , * , /) :");
console.log(val1);
console.log(val2);
if (operator == "+") {
  console.log(val1 + val2);
} else if (operator == "-") {
  console.log(val1 - val2);
} else if (operator == "*") {
  console.log(val1 * val2);
} else if (operator == "/") {
  console.log(val1 / val2);
} else {
  console.log("Invalid operator!");
}

// 4. Grade calculator: Prompt for marks in three subjects, calculate the average, and display a grade (A
// for 90+, B for 75+, C for 60+, else F).

let math = parseInt(prompt("Enter marks for math:"));
let phy = parseInt(prompt("Enter marks for phy:"));
let chem = parseInt(prompt("Enter marks for chem:"));
console.log("math:", math);
console.log("phy:", phy);
console.log("chem:", chem);
let sum = math + phy + chem;
let avg = sum / 3;
console.log("Total Score:", avg);

if (avg >= 90) {
  console.log("Grade: A");
} else if (avg >= 75 && avg <= 90) {
  console.log("B");
} else if (avg >= 60) {
  console.log("Grade: C");
} else {
  console.log("FAIL");
}

// 5. Random dice: Generate and display two random dice rolls (1–6) and their total, using
// Math.random() and Math.floor()

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

console.log("Dice 1:", dice1);
console.log("Dice 2:", dice2);
console.log("Total:", dice1 + dice2);
