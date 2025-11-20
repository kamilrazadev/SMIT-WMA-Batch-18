// for (var i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i == 2) {
//     break;
//   }
// }
// var name = "KamiL RAza";
// console.log(name.toLowerCase(), name.toUpperCase());

// Top 8 CLeanest city of Pakistan
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
//   console.log("Iteration no. ", i, " and city is ", cleanestCities[i]);
//   //   1. var rank = i + 1;
//   if (cityFromUser.toLowerCase() === cleanestCities[i].toLowerCase()) {
//     var rank = i + 1;
//     isNotFound = false;

//     alert(
//       cityFromUser +
//         " is included in top 8 cleanest city of Pakistan and ranked at number " +
//         rank
//     );
//     break;
//   }
// }

// if (isNotFound) {
//   alert(cityFromUser + " is not in the top 8 cleanest city of Pakistan");
// }

// const firstNames = [
//   "Ayaan",
//   "Zain",
//   "Imran",
//   "Hamza",
//   "Yusuf",
//   "Khalid",
//   "Ibrahim",
//   "Farhan",
//   "Nabil",
//   "Rashid",
// ];

// const lastNames = [
//   "Khan",
//   "Farooqi",
//   "Ansari",
//   "Siddiqui",
//   "Al-Farsi",
//   "Mirza",
//   "Hussain",
//   "Qureshi",
//   "Sheikh",
//   "Abbasi",
// ];

// // console.log(firstNames[0] + " " + lastNames[0]);
// // console.log(firstNames[0] + " " + lastNames[1]);
// // console.log(firstNames[0] + " " + lastNames[2]);
// // console.log(firstNames[0] + " " + lastNames[3]);
// // console.log(firstNames[0] + " " + lastNames[4]);
// // console.log(firstNames[0] + " " + lastNames[5]);
// // console.log(firstNames[0] + " " + lastNames[6]);
// // console.log(firstNames[0] + " " + lastNames[7]);
// // console.log(firstNames[0] + " " + lastNames[8]);
// // console.log(firstNames[0] + " " + lastNames[9]);

// for (var i = 0; i < firstNames.length; i++) {
//   //   console.log("firstName's iteration no. ", i);
//   for (var j = 0; j < lastNames.length; j++) {
//     // console.log("  lastName's iteration no. ", j);
//     console.log(firstNames[i] + " " + lastNames[j]);
//   }
// }

// Kamil@gmail.com
// KAmil@gmail.com
// kAmil@gmail.com
// kamiL@gmail.com

// var myName = "M  Kamil Raza";
// var firstChar = myName.slice(0, 1);

// console.log(myName.slice(3, 5));
// console.log(myName.length);
// console.log(myName[2]);
// console.log(firstChar);

var userName = prompt("Enter you full name:");

for (var i = 0; i < userName.length; i++) {
  if (userName.slice(i, i + 2) === "  ") {
    alert("Double space found");
    break;
  }
}
