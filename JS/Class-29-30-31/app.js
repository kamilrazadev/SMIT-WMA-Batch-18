// var pets = [];

// pets[0] = "dog";
// pets[1] = "duck";
// pets[2] = "cat";
// pets[3] = "fly";
// pets[4] = "parrot";

// console.log("Pets before: ", pets);

// var splicedReturn = pets.splice(2, 0, "pig", "duck", "emu");

// console.log(splicedReturn);

// console.log("Pets after: ", pets);

// var cleanestCities = [
//   "Attock",
//   "Bahawalpur",
//   "Lahore",
//   "Gujrat",
//   "Rawalpindi",
//   "Karachi",
//   "Multan",
//   "Hyderabad",
// ];

// var cityFromUser = prompt("Enter your city name:");
// var isNotFound = true;

// for (var i = 0; i <= cleanestCities.length - 1; i++) {
//   //   1. var rank = i + 1;
//   if (cityFromUser === cleanestCities[i]) {
//     var rank = i + 1;
//     isNotFound = false;

//     alert(
//       cityFromUser +
//         " is included in top 8 cleanest city of Pakistan and ranked at number " +
//         rank
//     );
//   }
// }

// if (isNotFound) {
//   alert(cityFromUser + " is not in the top 8 cleanest city of Pakistan");
// }

// i == 0 ==> true ==> i++, i = 1;
// i == 1 ==> true ==> i++, i = 2;
// i == 2 ==> true ==> i++, i = 3;
// i == 3 ==> true ==> i++, i = 4;
// i == 4 ==> true ==> i++, i = 5;
// i == 5 ==> false (loop break);

var tableOf = +prompt("Enter a number to print it's table:");

for (var i = 1; i <= 10; i++) {
  console.log(tableOf + " x " + i + " = ", tableOf * i);
}

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x
