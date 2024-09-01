// Task 1: Variables and Data Types

// Employee Information
let employeeName = "Alejandra Colon";
const employeeID = 1;
var isActive = true;

// Logging Employee to Console
console.log ("Employee Name: " + employeeName + " | Type: " + typeof(employeeName)); 
console.log ("Employee ID: " + employeeID + " | Type: " + typeof(employeeID)); 
console.log ("Is Active: " + isActive + " | Type: " + typeof(isActive)); 

// Task 2: Compound Data Types

// Declared Array Information
let products = ["Brush", "Towel", "Mat"];
const productDetails = new Object();

//Declared Object Information
productDetails.name = "Brush";
productDetails.price = 7;
productDetails.inStock = true;

// Logged Array and Object to Console
console.log(products);
console.log( "Product Name: " + productDetails.name 
    + " | Product Price:" + productDetails.price 
    + " | Product in Stock:" + productDetails.inStock);

// Task 3: Assignment Operators

// Declared variable and assigned an inital 
let accountBalance = 50;
 // Adding 
accountBalance += 15;
console.log(accountBalance); // Updated Profit: 65
accountBalance -= 25;
console.log(accountBalance); // Updated Profit: 40
accountBalance *= 2;
console.log(accountBalance); // Updated Profit: 80
accountBalance /=20;
console.log(accountBalance); // Updated Profit: 4
accountBalance %= 2;
console.log(accountBalance); // Updated Profit: 0   

// Task 4: Comparison Operators

let employeeScore1 = 75;
let employeeScore2 = 90;

console.log(employeeScore1 < employeeScore2); // Output: true
console.log(employeeScore1 > employeeScore2); // Output: false
console.log(employeeScore1 > employeeScore2); // Output: false
console.log(employeeScore1 >= employeeScore2); // Output: true
console.log(employeeScore1 <= employeeScore2); // Output: false
console.log(employeeScore1 === employeeScore2); // Output: true
console.log(employeeScore1 !== employeeScore2); // Output: true

// Task 5: Logical Operators

const hasKeyCard = true;
const hasPermission = false;

console.log(hasKeyCard && hasPermission); // Output: false
console.log(hasKeyCard || hasPermission); // Output: true
console.log(!hasKeyCard); // Output: false
console.log(!hasPermission); // Output: true