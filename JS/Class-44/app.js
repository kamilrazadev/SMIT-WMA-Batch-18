// console.log("Javascript runnning -->")









// let genders = document.getElementsByName("gender")
// console.log(genders)

let arr = [1, 2, 3]
// console.log(arr[1])


// function submitHandler() {
//     // console.log("chl raha hon...")
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(genders[i].checked)

//         if(genders[i].checked){
//             console.log(genders[i].value)
//         }


//     }

// }

// let multipleInputs = [{},{}, {}]
let select = document.getElementsByTagName("select")

// console.log(select)
let selectOptions = document.getElementsByTagName("option") 
// console.log(selectOptions, "Options ==>")

// function submit (){
//     // console.log("mai chl rhaaa hon...")
// // console.log(select.value)
// // console.log(selectOptions)
// for(let i = 0 ; i < selectOptions.length; i++){
//     // console.log(selectOptions[i].selected)
//     console.log()
//     if(selectOptions[i].selected){
//         console.log(selectOptions[i].value)
//     }

// }
// }   


function emailValidation (){
    let email = document.getElementById("email")
// console.log("Email Value -->" , email.value)

// if(email.value.indexOf(" ") !== -1){
//     console.log("No spaces are allow")
//     return
// }

// console.log("mai agy bi chlaaa")

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
if(regex.test(email.value)){
    console.log("Valid Email")
}else {
    console.log("Please Enter a Valid Email")
}
}




