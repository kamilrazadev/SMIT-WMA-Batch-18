// const p = new Promise((resolve, reject) => {
//   // do something async (or sync)
//   const success = false;
//   if (success) resolve("All good!");
//   else reject("Something went wrong");
// });

// // consume:
// p
// .then((value) => console.log("Resolved:", value))
// .catch((err) =>
//   console.log("Rejected:", err),
// );

// const myPromise = new Promise((resolve, reject) => {
//   const apiResponse = false;

//   if (apiResponse) resolve({ success: true, message: "API runs successfully" });
//   else reject({ success: false, message: "API responds an error" });
// });

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("after 2s run successfully"), 2000);
});

const delayedPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("after 505ms run successfully"), 505);
});

const delayedPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("after 3s run successfully"), 3000);
});

const delayedPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("after 500ms run successfully"), 500);
});

console.log("Before Call");

delayedPromise
  .then((value) => {
    console.log(value);
  })
  .catch();

delayedPromise2
  .then((value) => {
    console.log(value);
  })
  .catch();

//
for (let i = 0; i <= 900000; i++) {
  for (let i = 0; i <= 900; i++) {
    let a = i * i * i;
    let b = a;
  }
}

delayedPromise3
  .then((value) => {
    console.log(value);
  })
  .catch();

delayedPromise4
  .then((value) => {
    console.log(value);
  })
  .catch();

console.log("After Call");
