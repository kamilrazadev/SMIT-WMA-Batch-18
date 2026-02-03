// abc(1,2,3) /// normal fn
// signupHandler(1,2,3)  // arrow fn

// console.log("js chl rhai ")

// let registeredUser = []

// let obj = {
//     name : "hasan",
//     email : "codermhasan@gmail.com",
//     password : "fulanadhimkana"
// }

// registeredUser.push(obj)

// let str = JSON.stringify(obj)
// localStorage.setItem("users",JSON.stringify(obj))

// // console.log(str)

// let users = JSON.parse(localStorage.getItem("users"))
// console.log(users)

// // console.log(JSON.parse(users))

// localStorage.setItem("users", JSON.stringify(registeredUser))
// console.log(localStorage.getItem("users"))

// Arrow Functions ==>

// 1 syntax 2 hoisting 3 this 4 arguements

// function abc(){
// // console.log(this)
// }

// let obj = {
//   name: "hasan",
//   get: {
//     getFullName: function () {
//       console.log(this);
//     },
//   },
// };

// obj.get.getFullName();

// const signupHandler = (...arg) => {
//   console.log(this);
// };

// console.log(typeof signupHandler)

// signupHandler(1, 2, 3); // arrow fn

let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
let signupBtn = document.getElementById("signupBtn");

const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message,
  });
};

const signupHandler = () => {
  if (
    firstName.value.trim() == "" ||
    lastName.value.trim() == "" ||
    email.value.trim() == "" ||
    day.value.trim() == "" ||
    month.value.trim() == "" ||
    year.value.trim() == "" ||
    password.value.trim() == ""
  ) {
    return sweety("error", "something went wrong", "Please Enter all fields!");
  }

  if (password.value.length < 8) {
    return sweety(
      "error",
      "something went wrong",
      "Password at least 8 character!" || password.value.trim() == "",
    );
  }
  console.log("aagy bi chalaa");

  var userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    day: day.value,
    month: month.value,
    year: year.value,
    password: password.value,
  };

  // console.log("chl rahaa ho =>")
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userObj.gender = gender[i].value;
    }
  }

  // get previous users from local storage
  let usersFromDB = JSON.parse(localStorage.getItem("users")) || [];

  // setting/register new user and save in the local storage
  // console.log(usersFromDB)
  usersFromDB.push(userObj);
  // console.log(usersFromDB)
  localStorage.setItem("users", JSON.stringify(usersFromDB));

  sweety("success", "Signup Done", "Congratulations! signup successfully!");

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  day.value = "";
  month.value = "";
  year.value = "";
  password.value = "";
};

signupBtn.addEventListener("click", signupHandler);
