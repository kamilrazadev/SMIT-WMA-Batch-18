console.log("Start");

const myPromise = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) resolve("Promise resolved successfully");
  else reject("Promise Rejected");
});

const myPromise2 = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) resolve("Promise resolved successfully");
  else reject("Promise Rejected");
});

const myPromise3 = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) resolve("Promise resolved successfully");
  else reject("Promise Rejected");
});

myPromise
  .then((value) => {
    console.log("My Promise Result: ", value);

    myPromise2.then(myPromise3.then().catch).catch();
  })
  .catch((err) => {
    console.log("Error: ", err);
  })
  .finally(() => {
    console.log("Finally");
  });

try {
  // Api Call => data
  console.log("before error");
  //   let user = "Kamil" //api call for user data
  //   let products = abc;

  // API call 1 => user
  //  API call 2 => user => products
  //   API call 3 => products => category
  //   API call 4 => category => images

  //   Show products in UI
  console.log("after error");
} catch (error) {
  console.log("Something went wrong: ", error);
}

console.log("End");
