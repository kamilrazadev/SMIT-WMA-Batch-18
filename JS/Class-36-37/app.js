function checkAddress(fieldId) {
  //   alert("fieldId: " + fieldId);

  var emailInput = document.getElementById(fieldId);
  var emailValue = emailInput.value;

  if (emailValue.trim() === "") {
    var errorElement = document.getElementById("error");
    errorElement.innerText = "Email is required";
    alert("Email is required");
  } else {
    alert("Login Successfully as " + emailValue);
  }
}

var showBtn = document.getElementById("show");
var hideBtn = document.getElementById("hide");
var headingElement = document.getElementById("heading");

function showHeading() {
  showBtn.className = "hide";
  hideBtn.className = "show";
  headingElement.className = "show";
}

function hideHeading() {
  showBtn.className = "show";
  hideBtn.className = "hide";
  headingElement.className = "hide";
}

function autoSuggestPassword() {
  var passwordInput = document.getElementById("password");
  passwordInput.value = Date.now();
}
