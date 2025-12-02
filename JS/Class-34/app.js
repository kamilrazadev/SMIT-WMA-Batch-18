function tellTime() {
  var now = new Date();
  console.log("Date now: ", now);
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  alert("Current time: " + theHr + ":" + theMin);
}

// tellTime();

function greetUser(name) {
  alert("Hello, " + name + " Welcome to the website");
}

// greetUser("Kamil");

// greetUser("Raza");

function addTwoNumbers(n1, n2) {
  var sum = n1 + n2;
  console.log("Sum: ", sum);
}

// addTwoNumbers(1, 4);
// addTwoNumbers(18, 2);
// addTwoNumbers(10, 112);

var n1 = 10;
var n2 = 23;

// addTwoNumbers(n1, n2);

// function showMessage(m, string, num) {
//   alert(m + string + num);
// }

// var month = "March";
// showMessage(month, "'s winner number is ", 23);

function addTwoNumbersReturnSum(n1, n2) {
  var sum = n1 + n2;
  //   console.log("Sum: ", sum);
  return sum;
}

// var answer1 = addTwoNumbersReturnSum();
// var answer2 = addTwoNumbersReturnSum(13, 27);

// console.log(answer1);
// console.log(answer2);

// op = "+" | "-" | "*" | "/"
function calculator(n1, n2, op) {
  if (op === "+") {
    return n1 + n2;
  } else if (op === "-") {
    return n1 - n2;
  } else if (op === "*") {
    return n1 * n2;
  } else if (op === "/") {
    return n1 / n2;
  } else {
    return false;
  }
}

function showAnswer(answer) {
  if (answer === false) {
    alert("Wrong Operator");
  } else {
    alert("Answer: " + answer.toFixed(2));
  }
}

// var userNum1 = +prompt("Enter first number");
// var userNum2 = +prompt("Enter second number");
// var operator = prompt("Choose operator (+, -, *, /)");

// var answer = calculator(userNum1, userNum2, operator);
// showAnswer(answer);

// var theSum;

// console.log(theSum);

// addNum();

// console.log(theSum);

function addNum() {
  var theSum = 10 + 20;

  return theSum;
}

var theSum = addNum();

console.log(theSum);
