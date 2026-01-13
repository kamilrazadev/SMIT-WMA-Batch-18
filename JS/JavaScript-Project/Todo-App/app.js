// console.log("Javascript running -->")

// variables

let inputText = document.getElementById("inputText");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementsByTagName("ul")[0];
let deleteBtn = document.querySelector(".btn");
// let todoText = "";
let editItem = null;
// let deleteBtn = document.querySelector(".fa-trash")

// console.log(todoList)
// console.log(inputText)
// console.log(deleteBtn)

function errorsAlert(icon, title, message) {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
  });
}

function editHandler(event) {
  editItem = event.parentElement.parentElement.parentElement;
  // console.log(editItem)

  todoText = editItem.innerText;

  inputText.value = todoText;
}
function addHandler() {
  if (editItem !== null) {

    editItem.textContent = inputText.value
    console.log(editItem)
    editItem = null
    inputText.value = ""
    // editItem.innerText = todoText

  }
  // let condition = editItem == null;
  // if (condition) {
  //   console.log("element mil gaya");
  // } else {
  //   editItem.innerText = todoText;
  // }

  if (inputText.value.trim() == "") {
    errorsAlert("error", "kuchbi", "Please Enter a Value");
    return;
  }
  todoList.innerHTML += ` <li>
          ${inputText.value}
          <div class="icons">
            <span><i onclick="deleteHandler()" class="fa-solid fa-trash"></i></span>
            <span><i class="fa-solid fa-pen-to-square" onclick="editHandler(this)"></i></span>
          </div>
        </li>`;

  inputText.value = "";
}

function deleteAllHandler() {
  // console.log("mai chl raha hon ==>")
  // if(){}

  console.log(todoList.children);

  if (todoList.children.length == 0) {
    errorsAlert("error", "kuchbi", "Nothing to Delete!");
    return;
  }
  let todoArr = todoList.children;

  // for (let i = 0; i < todoArr.length; i++) {

  //   todoArr[i].remove()
  //   // i--
  //   errorsAlert("success", "Complete", "Deleted Successfully")
  // }

  // while(todoList.children){
  //   // console.log(todoList.children)
  // }
  let i = 0;
  while (i < todoList.children.length) {
    todoList.children[i].remove();
  }
  console.log("mai agy bi chla ==>");
}

function deleteHandler() {
  event.target.parentElement.parentElement.parentElement.remove();
}

addBtn.addEventListener("click", addHandler);
deleteBtn.addEventListener("click", deleteAllHandler);

// console.log(deleteBtn)

// [0,1,2]

// arr => 0 remove
// updated Arr = >  [1,2]

// let i = 1  - 1 0
