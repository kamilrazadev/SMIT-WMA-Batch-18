// let v1 = "10";
// let v2 = v1;

// console.log("before====");
// console.log("v1: ", v1);
// console.log("v2: ", v2);

// v1 = "20";

// console.log("after====");
// console.log("v1: ", v1);
// console.log("v2: ", v2);

let std1 = {
  name: "kamil",
  class: 10,
  section: "B",
};
let std2 = JSON.parse(JSON.stringify(std1));
// let std2 = std1.name;

// std2.name = "raza";

console.log("before====");
console.log("std1: ", std1);
console.log("std2: ", std2);

std2.name = "raza";

console.log("after====");
console.log("std1: ", std1);
console.log("std2: ", std2);

// let arr1 = ["kamil", "raza"];

// console.log(arr1);

// arr1.push("kamil2");

// console.log(arr1);

// const links = {
//   socials: [{ image: "", title: "", desc: "" }],
//   shopping: [{ image: "", title: "", desc: "" }],
// };

const links = [
  { image: "", title: "", desc: "", type: "social" },
  { image: "", title: "", desc: "", type: "shopping" },
];
