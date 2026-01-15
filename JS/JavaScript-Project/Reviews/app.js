let dataArray = [
  {
    name: "Abdullah Hamdani",
    field: "cousin of mamdani",
    review:
      "Ashas bhai jesa to koi hai hi nhi. Me khud bhai se Tution leta hun. Ap sab bhi liya karo. Big Fan Brooo!!!!",
  },
  {
    name: "Hasan Ashraf",
    field: "web developer",
    review:
      "Cheeeetaaaaaaaaa! Bolte!. Matlabbb...... Bhai mera sab se Genious Student Hai ye. Ye Jitni Effort karta hai na Me Samajh Sakta HUn Kiun ke Me Khud Wahan se hi Uth ke Aya hun! Bqi Ashas ka to Bohot hi Saeee Seeeen Hai, Boy Market me Aakar TO Machaa hi de ga.",
  },
  {
    name: "Kamil Raza",
    field: "web developer",
    review:
      "Ashas is a committed and enthusiastic student. He has developed a solid understanding of JavaScript, and his HTML and CSS skills are satisfactory. He is now ready to move forward with React, and I believe he will adapt well to more advanced concepts with continued practice.",
  },
];

let profilePic = document.getElementById("img");
let userName = document.getElementById("name");
let jobTitle = document.getElementById("field");
let jobDescription = document.getElementById("review");
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let index = 0;

function showData() {
  userName.innerText = dataArray[index].name;
  jobTitle.innerText = dataArray[index].field;
  jobDescription.innerText = dataArray[index].review;
}
showData();

function nextHandler() {
  // console.log(2 == 2)
  if (index == dataArray.length) {
    index = 0;
  }
  //   profilePic.innerText = dataArray[index].profilePic;
  showData();
  index++;
  //   console.log("Next Handler -> index", index);
}

function previousHandler() {
  if (index == 0) {
    index = dataArray.length - 1;
  } else {
    --index;
  }
  showData();
}

btnLeft.addEventListener("click", previousHandler);
btnRight.addEventListener("click", nextHandler);

// 3 ==> undefined.reviews  / error milyga -->
