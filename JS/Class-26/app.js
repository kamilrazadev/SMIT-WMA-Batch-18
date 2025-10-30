// console.log("2 plus 2 equals ", 2 + 2);

// Prompt Box

// var number1 = +prompt("Enter first number"); //2
// var number2 = +prompt("Enter second number"); //5
// var sum = number1 + number2;

// // console.log(typeof number1)

// // // To convert into number data type
// // console.log(typeof +number1)
// // console.log(typeof Number(number1))

// console.log("Sum :", sum);

// var gender = prompt("Enter your gender", "male")
// var age = +prompt("Enter your age");
// if (age == 18) {
//   console.log("You are 18 year old");
// }

if (false) {
  console.log("If condition is true");
}

// Conditional operators

// 1. == (exact match)
// 2. > (greater than) ==> 19 > 18 = true, 20 > 92 = false, 20 > 20 = false
// 3. < (less than) ==> 18 < 19 = true, 98 < 10 = false, 10 < 10 = false
// 4. >= (greater than and equal to) ==> 20 >= 20 = true
// 5. <= (less than and equal to) ==> 10 <= 10 = true
// 6. != (no exact match)

// console.log(19 == 18);

// var password = prompt("Create your password");
// var reEnterPassword = prompt("Re-Enter your password");

// if (reEnterPassword != password) {
//   alert("Wrong Password");
// }

// var OriginaluserName = "kamilrazadev";
// var OriginalPassword = "Abc123";

// var userName = prompt("Enter your username");
// var password = prompt("Enter your password");

// if (userName != OriginaluserName) {
//   alert("Wrong Credentials");
// }

// if (password != OriginalPassword) {
//   alert("Wrong Password");
// }
// //  true                        true
// if (userName == OriginaluserName && password == OriginalPassword) {
//   alert("Login Successfully!");
// }

// Logical Operators

// 1. && => If and only if all conditions are true then returns true else false.
// 2. || => If any of the conditions are true then returns true, If all conditions are false then returns false

// var interPerc = prompt("Enter your Intermediate percentage");
// var admissionTestMarks = prompt("Enter your admission test marks (Out of 100)");
// var appliedThroughSelfFinance = prompt(
//   "If applied through self finance write 'Yes' otherwise write 'No'"
// );

// 1. inter percentage 80% >= eligible
// 2. test marks 85 >= eligible
// 3. self finance > eligible

// if (
//   interPerc >= 80 ||
//   admissionTestMarks >= 85 ||
//   appliedThroughSelfFinance == "Yes"
// ) {
//   alert("You admission is confirmed");
// }

// 1. inter percentage 80% >= eligible and test marks 85 >= eligible
// 2. self finance > eligible

// if (
//   (interPerc >= 80 && admissionTestMarks >= 85) ||
//   appliedThroughSelfFinance == "Yes"
// ) {
//   alert("You admission is confirmed");
// }

// var correctAns1 = "ISLAMABAD";
// var correctAns2 = "C";
// var correctAns3 = "366";
// var score = 0;
// var grade;

// var answer1 = prompt("Capital of Pakistan (write in CAPS)");
// if (answer1 == correctAns1) {
//   score++;
// }

// var answer2 = prompt("Mother of Programming Languages (write in CAPS)");
// if (answer2 == correctAns2) {
//   score++;
// }

// var answer3 = prompt("Days in a Leap Year");
// if (answer3 == correctAns3) {
//   score++;
// }

// if (score == 3) {
//   grade = "A+";
// }

// if (score == 2) {
//   grade = "B";
// }

// if (score == 1) {
//   grade = "C";
// }

// if (score == 0) {
//   grade = "Failed";
// }

// console.log("Your score is: ", score);
// console.log("Your grade is: ", grade);

// if ("2" == 2) {
//   console.log("Condition is true from ==");
// }

// if (2 === 2) {
//   console.log("Condition is true from ===");
// }

if ("true" == true) {
  console.log("Condition is true from ==");
}

if ("true" === true) {
  console.log("Condition is true from ===");
}
