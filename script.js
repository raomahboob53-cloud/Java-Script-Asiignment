
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

console.log("Full Name: " + firstName + " " + lastName);


let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

console.log("Addition: " + (num1 + num2 + num3));
console.log("Subtraction: " + (num1 - num2 - num3));
console.log("Multiplication: " + (num1 * num2 * num3));

if (num2 !== 0 && num3 !== 0) {
    console.log("Division: " + (num1 / num2 / num3));
} else {
    console.log("Cannot divide by zero");
}


let temperature = Number(prompt("Enter temperature in Celsius:"));

if (temperature <= 0) {
    console.log("Freezing");
} else {
    console.log("Not freezing");
}


let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid age");
}


let units = Number(prompt("Enter electricity units:"));
let bill;

if (units < 0) {
    console.log("Invalid units");
} else if (units <= 100) {
    bill = units * 10;
    console.log("Electricity Bill: Rs. " + bill);
} else if (units <= 200) {
    bill = (100 * 10) + ((units - 100) * 15);
    console.log("Electricity Bill: Rs. " + bill);
} else {
    bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
    console.log("Electricity Bill: Rs. " + bill);
}


let color = prompt("Enter traffic light color:");

if (color.toLowerCase() === "red") {
    console.log("Stop");
} else if (color.toLowerCase() === "yellow") {
    console.log("Ready");
} else if (color.toLowerCase() === "green") {
    console.log("Go");
} else {
    console.log("Invalid Color");
}


let money = Number(prompt("Enter your pocket money:"));

if (money > 500) {
    console.log("You can buy a gift");
} else {
    console.log("Save your money");
}


let shoppingAmount = Number(prompt("Enter shopping amount:"));

if (shoppingAmount >= 2000) {
    console.log("Free Delivery");
} else {
    console.log("Delivery Charges Apply");
}
