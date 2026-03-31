// // const p = new Promise((resolve, reject) => {
// //   // do something async (or sync)
// //   const success = false;
// //   if (success) resolve("All good!");
// //   else reject("Something went wrong");
// // });

// // // consume:
// // p
// // .then((value) => console.log("Resolved:", value))
// // .catch((err) =>
// //   console.log("Rejected:", err),
// // );

// // const myPromise = new Promise((resolve, reject) => {
// //   const apiResponse = false;

// //   if (apiResponse) resolve({ success: true, message: "API runs successfully" });
// //   else reject({ success: false, message: "API responds an error" });
// // });

// // myPromise
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const delayedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("after 2s run successfully"), 2000);
// });

// const delayedPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("after 505ms run successfully"), 505);
// });

// const delayedPromise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("after 3s run successfully"), 3000);
// });

// const delayedPromise4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("after 500ms run successfully"), 500);
// });

// const myPromise = new Promise((resolve, reject) => {
//   const isResolved = false;

//   if (isResolved) resolve("Successfully Fullfilled");
//   else reject("Rejected with an Error");
// });

// console.log("Before Call");

// // delayedPromise
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch();

// // delayedPromise2
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch();

// // delayedPromise3
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch();

// // delayedPromise4
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch();

// myPromise
//   .then((val) => {
//     console.log("Result: ", val);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log("After Call");

// function fetch1() {
//   return new Promise((res, rej) => setTimeout(() => rej("first"), 500));
// }
// function fetch2(prev) {
//   return new Promise((res) => setTimeout(() => res(prev + " -> second"), 500));
// }

// // chaining correctly:
// fetch1()
//   .then((result) => {
//     // return the next promise
//     return fetch2(result);
//   })
//   .then((result2) => {
//     return fetch2(result2);
//     // "first -> second"
//   })
//   .then((final) => console.log(final))
//   .catch((err) => console.log("Error: ", err));

// try {

// } catch (error) {

// }

// throw new Error("Something went wrong!");

console.log("before");

try {
  // throw new Error("Something went wrong!");
  // let b = a;
  // let a = 10;
  // console.log(a, b);
  // ----
  // fetch user data
  if (user == null) throw new Error("User not found");
  // fetch post data
  // fetch likes data
} catch (error) {
  console.error("An Error Occured: ", error);
}

console.log("after");
