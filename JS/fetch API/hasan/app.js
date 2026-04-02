// console.log("meri file read kerooo")
// console.log("login kerooo")

let parentContainer = document.getElementById("parent")


// fetch("https://dummyjson.com/products")
// .then((response) => {
//     return response.json()
// }).then((result)=> {
//     let htmlUsingMap =  result.products.map((item) => {
//     return `<div class="card mb-2" style="width: 18rem;">
//   <img src=${item.images[0]} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${item.title}</h5>
//     <p class="card-text">${item.description}</p>
//     <a href="#" class="btn btn-primary">Buy Now ${item.price}</a>
//   </div>
// </div>`


//  })

//  parentContainer.innerHTML = htmlUsingMap.join(" ")
// })


const card = (item) => {
    return  `<div class="card mb-2" style="width: 18rem;">
   <img src=${item?.images??[0]} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${item?.title}</h5>
     <p class="card-text">${item?.description}</p>
     <a href="#" class="btn btn-primary">Buy Now ${item?.price}</a>
   </div>
 </div>`
}

// console.log(card())

const apiCall = async () => {
  try {
    let response = await fetch("https://dummyjson.com/products")
 const result = await response.json()


  let htmlForParentContainer = result.products.map((item) => card(item))

  parentContainer.innerHTML = htmlForParentContainer.join(" ")
 
  } catch (error) {
    console.log(error)
  }
 
}


apiCall()




















