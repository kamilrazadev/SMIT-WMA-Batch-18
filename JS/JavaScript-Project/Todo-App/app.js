// console.log("Javascript running -->")

// variables

let inputText = document.getElementById("inputText");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementsByTagName("ul")[0];
// let deleteBtn = document.querySelector(".fa-trash")

// console.log(todoList)
// console.log(inputText)
// console.log(deleteBtn)

function errorsAlert() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Please Enter Input Value</a>',
  });
}

function addHandler() {
    
  // console.log("add handler is working -->", inputText.value)
  if (inputText.value.trim() == "") {
    errorsAlert();
    return;
  }
  todoList.innerHTML += ` <li>
          ${inputText.value}
          <div class="icons">
            <span><i onclick="deleteHandler()" class="fa-solid fa-trash"></i></span>
            <span><i class="fa-solid fa-pen-to-square"></i></span>
          </div>
        </li>`;

        inputText.value = ""
}

function deleteHandler (){
    event.target.parentElement.parentElement.parentElement.remove()
}

addBtn.addEventListener("click", addHandler);

// console.log(deleteBtn)  