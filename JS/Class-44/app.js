// console.log("Javascript runnning -->")









let genders = document.getElementsByName("gender")
console.log(genders)

let arr = [1, 2, 3]
// console.log(arr[1])


function submitHandler() {
    // console.log("chl raha hon...")
    for (let i = 0; i < arr.length; i++) {
        // console.log(genders[i].checked)

        if(genders[i].checked){
            console.log(genders[i].value)
        }


    }

}

// let multipleInputs = [{},{}, {}]