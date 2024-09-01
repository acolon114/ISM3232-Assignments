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