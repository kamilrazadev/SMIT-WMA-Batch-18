function makeBig() {
  var paraElem = document.getElementById("para");

  paraElem.className += " big";
}

function swapPic() {
  var imgElem = document.getElementById("before");

  imgElem.src = "https://i.brecorder.com/primary/2024/03/65eb834209270.jpg";
}

function addMargin() {
  var stylesP = document.getElementById("marginP").style;

  console.log("style ==> ", stylesP);

  stylesP.margin = "40px";

  console.log("style ==> ", stylesP);
}

function manipulatePara() {
  var paras = document.getElementsByTagName("p");

  console.log("paras ==> ", paras);

  for (var i = 0; i <= paras.length; i++) {
    paras[i].className = "red";
  }

  //   var parent = document.getElementById("myDiv");
  //   var paraInMyDiv = parent.getElementsByTagName("p");

  //   console.log("parent => ", parent);
  //   console.log("paraInMyDiv => ", paraInMyDiv);

  //   for (var i = 0; i <= paraInMyDiv.length; i++) {
  //     paraInMyDiv[i].className = "red";
  //   }
}

var doc = document.childNodes[1].childNodes[2].childNodes[9].childNodes;

console.log("doc child: ", doc);
