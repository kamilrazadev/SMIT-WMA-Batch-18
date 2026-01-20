// // function fn() {
// //   try {
// //     console.log("Code in try block");
// //     Alert("Hello");

// //     console.log("Code after error in try catch");
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // fn();

// // console.log("Code after error");

// console.log(isNaN("10"));

// var myForm = document.getElementById("myform");

// myForm.addEventListener("submit", handleSubmitWithTryCatch);

// function handleSubmit(e) {
//   e.preventDefault();

//   var errorPara = error;

//   var emailValue = email.value;
//   var passValue = password.value;

//   if (emailValue.trim() === "") {
//     // alert("Email is required");
//     errorPara.innerText = "Email is required";
//     return;
//   }

//   if (passValue.trim() === "") {
//     alert("Password is required");
//     return;
//   }

//   if (passValue.trim().length <= 8) {
//     alert("Password must be minimum 8 characters");
//     return;
//   }
// }

// function handleSubmitWithTryCatch(e) {
//   e.preventDefault();

//   try {
//     var errorPara = error;
//     var emailValue = email.value;
//     var passValue = password.value;

//     if (emailValue.trim() === "")
//       throw { code: 1, message: "Email is required" };

//     if (passValue.trim() === "") throw "Password is required";

//     if (passValue.trim().length <= 8)
//       throw "Password must be minimum 8 characters";

//     errorPara.innerText = "";

//     alert("Login Successfully");
//   } catch (error) {
//     // errorPara.innerText = error;
//     console.log(error);
//   }
// }

// console.log(myVar);

// var myVar = "Kamil";

// fn();

// function fn() {
//   var myVar2 = "Raza";
//   myVar2 = "Update";

//   var myVar2 = "Update again";
// }

// console.log(myVar);

// console.log(myVar2);
// console.log(myVar);

// let myVar = "Kamil";

const myVar = "Kamil";
const myVar = "raza";
console.log(myVar);

// Notes:

// Detailed Breakdown
// Scope
// var: var is function-scoped or globally scoped. This means a variable declared inside a for loop or if statement with var is accessible outside of that block, which can lead to unexpected bugs.
// let and const: Both are block-scoped, limited to the nearest enclosing curly braces {} (e.g., in a loop, function, or if statement). This provides more predictable behavior and is the standard in modern JavaScript.
// Reassignment and Redeclaration
// var: Can be updated and redeclared within the same scope without error.
// let: Can be updated (reassigned a new value) but cannot be redeclared within the same scope.
// const: Cannot be updated or redeclared after its initial assignment. It creates a read-only reference. A key nuance is that while the variable itself cannot be reassigned, the properties of an object or elements of an array declared with const can still be modified.
// Hoisting
// var: Variables are hoisted to the top of their scope and initialized with a default value of undefined. This means you can access a var before it is declared in the code, and it will return undefined.
// let and const: Declarations are also hoisted, but they are not initialized with a default value. Attempting to access them before their declaration results in a ReferenceError, an area known as the Temporal Dead Zone (TDZ). This prevents using variables before they are properly defined.
// Best Practices
// In modern JavaScript development (ES6+):
// Use const by default for all variables, as it signals that the variable's value should not change.
// Use let only when you know the variable's value will need to be reassigned later, such as in a loop counter.
// Avoid using var unless you are specifically working with legacy code that requires it. The use of let and const leads to cleaner, more predictable, and less error-prone code. More information and examples are available from resources like MDN Web Docs and freeCodeCamp.
