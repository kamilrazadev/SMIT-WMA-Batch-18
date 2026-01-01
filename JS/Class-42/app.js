var whereWeAt = window.location.href;
console.log("whereWeAt: ", whereWeAt);

var theDomain = window.location.hostname;
console.log("theDomain: ", theDomain);

var thePath = window.location.pathname;
console.log("thePath: ", thePath);

var theAnchor = window.location.hash;
console.log("theAnchor: ", theAnchor);

function goToAboutUs() {
  window.location.href = "about.html";
}

function goToSomewhere() {
  window.location.replace("/dashboard");
}

function goTo(url) {
  window.location.href = url;
}

var whereUserCameFrom = document.referrer;
console.log("whereUserCameFrom: ", whereUserCameFrom);

("https://kamilraza.com?utm_medium=http://127.0.0.1:5500/dashboard/profile");

var inputField = document.getElementById("input-field");

var valueOfInput = inputField.value

inputField.value = "New Value Set By JS";