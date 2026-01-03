console.log("Javascript is running -->")

// console.log()

// let user ={
//     name  :" Abdullah"
// }
// user.name = "Hasan"
// console.log(user)

// window.location.href = "https://github.com/"

// window.location.assign("https://github.com/")

// history.back(1)



// var windowOpen = window.open()

// var windowContentHTML = `<h1> This is a Heading </h1>`

// window.open(document.writeln(windowContentHTML))



// var monkeyWindow = window.open();
// console.log(monkeyWindow)
//  var windowContent = `<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a
// group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
// robes with large hoods covering their heads.</p>`;
//  window.open(document.write(windowContent));

// let isAdmin = null;



// function checkForPopBlocker() {
// var testPop = window.open("", "","width=100,height=100");

// console.log(testPop)
// if (testPop === null) {
// alert("Please disable your popup blocker.");
// }else {
//     console.log("kuch bi nhi howa kia ....")
// }
// testPop.close();
// }


// checkForPopBlocker()


// let stu1 ={
//     name : "Ashas",
//     printName : function  (){
//         console.log(this.name)
//     }
// }

// stu1.printName()



let inputName = document.getElementById("name")
let password = document.getElementById("password")
let gender = document.getElementsByName("gender")

// console.log(gender)
// let inputName = namee.value

// console.log(password.value)

function popup (mess, status){
     Swal.fire({
            icon: `${status}`,
            title: "Oops...",
            // text: "Please Enter a Name!",
            text: `${mess}`,
        });
}



function submitHandler(e) {
    e.preventDefault()

    if (inputName.value == "" || inputName.value.trim() == "") {
        // console.log(inputName.value)
       popup("Please Enter a Name", "error")
        return null
        // console.log("mai chlaaa -->", inputName.value)
    }

    console.log(password.value.length)
    if(password.value.length == 0 || password.value.length <= 7  ){
        console.log("password milgiya")
        popup("Please Enter a Password", "error")
        return 
    }

    if(password.value.length >= 8){
        console.log("Password Ok ki halat mai hai")
    }

    for(var i = 0; i < gender.length; i++){
    // console.log(gender[i].value)
    if(gender[i].checked){
        console.log(gender[i].value)
    }
}


     popup("Congratulations! Successfully Signup!", "success")




}