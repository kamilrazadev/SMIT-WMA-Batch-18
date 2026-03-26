// console.log("js running -->")


// function callFn (){
// let username =" saleem "


//     function displayName (){
// console.log(username)
//     }

   

//     return  displayName()

// }

// let display = callFn()


// console.log(display)



// function makeAdder (num){
// // console.log(num)

// return function (n){
// console.log(num + n)
// }
// }


// let addTo5 = makeAdder(10)
// addTo5(5)
// let addTo10 = makeAdder(10)
// addTo10(10)


// let closure = document.getElementById("Clousers")
// let btn = document.getElementById("btn")


// function makeSizer (size){
//     closure.style.fontSize = `${size}px`
//     console.log(size)
// }


// btn.addEventListener("click", function (){
//     makeSizer(52)
// })



// currying in js 



// function sum (a,b,c){
// console.log(a+b+c)
// }

// sum(12,12,12)


//             // 12
// function sum(n1){
//                 // 24
// return function (n2){
//                 // 12
// return function (n3){
//     console.log(n1+n2+n3)
// }
// }
// }

// let n2 = sum(12)

// let n3 = n2(24)


// n3(12)




// Requirement ==>


    // to  ==> Email ==> codermhasan@gmail.com
    // sub ==> Application For Frontend Developer Position 
    // body ==> Hello! I'm Muhammad Hasan Ashraf a full stack developer with 2+ years of experience in web development.


    // function sendEmail (to){
    //     return function (sub){
    //         return function (body){
    //             console.log(`Sending Email to: ${to} with Subject: ${sub} and Body:${body}
                    
    //                 Regards, SMIT
    //                 `)
    //         }

    //     }
    // }


//     const sendEmail = (to) => (sub) => (body) => {
//      console.log(`Sending Email to: ${to} with Subject: ${sub} and Body:${body}
//         Regards, SMIT`)
//     }

// sendEmail("codermhasan@gmail.com")("Application For Frontend Developer Position ")("Hello! I'm Muhammad Hasan Ashraf a full stack developer with 2+ years of experience in web development.")

//    let sub=  sendEmail("codermhasan@gmail.com")

//    let body = sub("Application For Frontend Developer Position ")

//    body("Hello! I'm Muhammad Hasan Ashraf a full stack developer with 2+ years of experience in web development.")


// let arr = [[12,34],[56,78]]
// console.log(arr[0][0])


// const arrowFn = () => {
//     return () => {
//         console.log("Arham")
//     }
// }


// console.log(arrowFn())




// let students = ["Ashir","Shakir","Nasir","Shakoor"]

// for(let i of students){
//     console.log(i)
// }





// Destructuring



// Array Destructuring
//  let students = ["Ashir","Shakir","Nasir","Shakoor"]

// const [stu1, ...other] = students

// console.log(other)


// let stuArray = [...students, "Bilal", "Shayaan"]
// console.log("Puraaana Student Array ==> ",students)
// console.log("Student Array ==> ",stuArray)




// Object Destructuring

let userObj = {
    role:"Guest",
    email :"codermhasan@gmail.com",
    contact : 3170243866,
    password : "12345678",
    age : 23,
    cnic : 43475621654,
    gender : "Male",
    dob : "22-08-2003",
    username : "hasanCoder66"
}

// console.log(userObj.username)


// let {email, password, ...others} = userObj
// console.log(others)


// let random = {
//     ...userObj,
//     email : "shayan@gmail.com"
// }

// console.log(random)


// let user1 = {
//     email : "codermahsan@gmail.com"
// }

// let user2 = {
//     email :"shakoor@gmail.com"
// }


// let mainObj = {
//     ...user1, 
//     ...user2,
//     email :"arham@gmail.com"
// }

// console.log(mainObj)


let arr = ["1","2","3"]


console.log(...arr)


