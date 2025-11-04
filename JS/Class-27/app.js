// var std1 = "A";
// var std2 = "A";

// if (std1 >= std2) {
//   console.log("Condition matched");
// }

// var age = +prompt("Enter your age");

// // if(condition) {} else {}

// if (age >= 18) {
//   alert("You are eligible for CNIC!");
// } else {
//   alert("Bare hokar aao!");
// }

// var userAnswer = prompt("Short of Islamabad");

// if (userAnswer == "ISL" || userAnswer == "isl") {
//   alert("Correct Answer");
// } else {
//   alert("Wrong Answer");
// }

// var obtainedMarks = +prompt("Obtained marks from 1100");
// var totalMarks = 1100;
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade;
// // percentage >= 80 ==> A+
// // percentage >= 70 ==> A
// // percentage >= 60 ==> B
// // percentage >= 50 ==> C
// // percentage >= 40 ==> D
// // percentage < 40 ==> Fail

// // ❌ Wrong
// // if (percentage >= 80) {
// //   grade = "A+";
// //   alert("Your grade is A+");
// // }
// // if (percentage >= 70 && percentage < 80) {
// //   grade = "A";
// //   alert("Your grade is A");
// // }

// if (percentage >= 80) {
//   grade = "A+";
// } else if (percentage >= 70) {
//   grade = "A";
// }

// var message =
//   "Your percentage is " + percentage + " and your grade is " + grade;

// alert(message);

// let char = "A";
// let asciiValue = char.charCodeAt(0);

// console.log(asciiValue)

var marks = 85;

if (marks > 40) {
  if (marks >= 80) {
    alert("A+");
  } else if (marks >= 70) {
    alert("A");
  }
} else {
  alert("You are Failed");
}
