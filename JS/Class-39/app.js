// function makeBig() {
//   var paraElem = document.getElementById("para");

//   paraElem.className += " big";
// }

// function swapPic() {
//   var imgElem = document.getElementById("before");

//   imgElem.src = "https://i.brecorder.com/primary/2024/03/65eb834209270.jpg";
// }

// function addMargin() {
//   var stylesP = document.getElementById("marginP").style;

//   console.log("style ==> ", stylesP);

//   stylesP.margin = "40px";

//   console.log("style ==> ", stylesP);
// }

// function manipulatePara() {
//   var paras = document.getElementsByTagName("p");

//   console.log("paras ==> ", paras);

//   for (var i = 0; i <= paras.length; i++) {
//     paras[i].className = "red";
//   }

//   //   var parent = document.getElementById("myDiv");
//   //   var paraInMyDiv = parent.getElementsByTagName("p");

//   //   console.log("parent => ", parent);
//   //   console.log("paraInMyDiv => ", paraInMyDiv);

//   //   for (var i = 0; i <= paraInMyDiv.length; i++) {
//   //     paraInMyDiv[i].className = "red";
//   //   }
// }

// var doc = document.childNodes[1].childNodes[2].childNodes;

// var targetNode = document.childNodes[1].childNodes[2].childNodes[11];

// var nType = targetNode.nodeType;

// // console.log("doc child: ", doc);

// // console.log("targetNode: ", targetNode);
// // console.log("nType: ", nType);

// // The standard DOM node types and their corresponding integer values are as follows:
// // 1: ELEMENT_NODE (Represents an HTML element, such as <p> or <div>)
// // 2: ATTRIBUTE_NODE (Represents an attribute of an element, such as src in <img src="...">. Note: attributes are primarily managed through element properties in modern web development)
// // 3: TEXT_NODE (Represents the actual text content within an element)
// // 4: CDATA_SECTION_NODE (Represents a CDATA section in an XML document)
// // 5: ENTITY_REFERENCE_NODE (Deprecated; browsers usually resolve entity references automatically)
// // 6: ENTITY_NODE (Deprecated; primarily relevant for older XML document structures)
// // 7: PROCESSING_INSTRUCTION_NODE (Represents a processing instruction in an XML document, such as <?xml-stylesheet ...?>)
// // 8: COMMENT_NODE (Represents a comment, such as <!-- ... -->)
// // 9: DOCUMENT_NODE (Represents the entire document, the root of the DOM tree)
// // 10: DOCUMENT_TYPE_NODE (Represents the <!DOCTYPE html> node)
// // 11: DOCUMENT_FRAGMENT_NODE (A lightweight object used as a temporary container for nodes)
// // 12: NOTATION_NODE (Represents a notation declared in the DTD)

// var c1 = document.getElementById("c1");

// // var html = document.getElementsByTagName("html");

// // console.log("html: ", html[0].parentNode);
// // console.log("html.parentElement: ", html[0].parentElement);

// console.log("c1.nodeName: ", c1.childNodes[0].nodeValue);

// console.log(c1.innerText);

// console.log(c1.hasAttribute("class"));
// console.log(c1.getAttribute("class"));

// var link = document.getElementById("link");
// link.setAttribute("href", "www.github.com");

// console.log("link.attributes: ", link.attributes);
// console.log("link.attributes.length: ", link.attributes.length);

// // console.log("c1.parentNode: ", c1.parentNode);

var bodyElem = document.getElementsByTagName("body");
var newPara = document.createElement("p");
var textNode = document.createTextNode("Hello!");
newPara.appendChild(textNode);

bodyElem[0].appendChild(newPara);
