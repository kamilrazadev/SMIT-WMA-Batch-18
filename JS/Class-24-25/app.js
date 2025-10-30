// var firstName = "Kamil Raza";
// var userName = "kamil raza";

// // console.log("My name is " + userName + " abc");
// // console.log(userName + " is a developer");
// // console.log("hello " + userName + " developer");

// // // Undefined because of hoisting
// // console.log(myName);
// // console.log(myVar);

// // var myVar = "ABC"

// // // Decleration
// // var myName;

// // console.log(myName);

// // // Initialization
// // myName = "Mera naaam";

// // console.log(myName);

// // // Re-Initialization
// // myName = "Kamil";

// // console.log(myName);

// // // alert("Welcome to my website");
// // // window.alert("Click Ok to continue");

// var a = 10;
// var b = 20;

// var sum = a + b;

// console.log("Values of a and b are: " + a + ", " + b);
// console.log("Sum of a and b is: " + sum);

// // separate using ,
// console.log("Sum of a and b ", a + b);

// // concatination
// console.log("Sum of a and b " + a + b);

// // Re-Initialization var a
// a = a + 10;

// console.log("Now value of a is ", a);

// var numInStrings = "20";

// console.log(numInStrings + 10);

// var newNum = numInStrings + 10;

// console.log("new num is: ", newNum);

// // alert(newNum);

// // Legal and Illegal Variable names

// // Legal
// var my_Name123;

// var myAlert = "This is alert";

// var myalert = "This is another alert";

// var aboutMyCompany; //camel case

// var about_my_company;

// var ABOUTMYCOMPANY;

// var aboutmycompany;

// var about_My_Company;

// var n1;

// var n2;

// // Illegal

// // var 1n;

// // var 2n;

// // var my&name;

// // var my name;

// // alert("This is an alert 1");

// var alert = 12;

// console.log(alert);

// // alert("This is an alert 2");

// // Math Operations

// var n1 = 10;
// var n2 = 20;

// var sum = n1 + n2;
// var subtraction = n1 - n2;
// var multiplication = n1 * n2;
// var division = n1 / n2;
// var modulus = n1 % n2;

// console.log(sum);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);
// console.log(modulus);

// var var1 = 5;
// console.log(var1);

// var1 = var1 + 1;
// console.log(var1);

// var1 = var1 + 1;
// console.log(var1);

// //
// console.log("With Prefix Increment");
// var var1 = 5;
// console.log(var1);

// var1 = ++var1;
// console.log(var1);

// var1 = ++var1;
// console.log(var1);

// console.log("With Postfix Increment");
// var var1 = 5;
// console.log(var1);
// //5    //5 //6
// var1 = var1++;
// console.log(var1);
// //5    //5 //6
// var1 = var1++;
// console.log(var1);

// console.log("With Prefix Decrement");
// var var1 = 5;
// console.log(var1);

// var1 = --var1;
// console.log(var1);

// var1 = --var1;
// console.log(var1);

// console.log("With Postfix Decrement");
// var var1 = 5;
// console.log(var1);
// //5    //5 //6
// var1 = var1--;
// console.log(var1);
// //5    //5 //6
// var1 = var1--;
// console.log(var1);

// console.log("==========================");

// var var2 = 10;
// var2--; //9
// var2++; //10
// --var2; //9

// console.log(var2);

// var a = 10;
// var b = 20;
//          //10 + 1  //20 = 30 - 11 = 19
// var result1 = a++ + b - a--; // a is used in the expression, then incremented
// console.log("Result 1:", result1); // Expected: 30 (10 + 20)
// console.log("Value of a after result1:", a); // Expected: 11

var a = 4;
var b = 6;
//4     +   12       +   9 = 25
var aPlusBWholeSquare = a * a + 2 * (a) * (b) + b * b;

console.log(aPlusBWholeSquare);
