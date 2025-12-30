// function Plan(name, price, space, transfer, pages) {
//   this.planTitle = name;
//   this.price = price;
//   this.space = space;
//   this.transfer = transfer;
//   this.pages = pages;
//   this.calcPrice = function (noOfMonths) {
//     return (this.price * noOfMonths).toFixed(2);
//   };
// }

function Plan(name, price, space, transfer, pages) {
  this.planTitle = name;
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;
}

Plan.prototype.calcPrice = function (noOfMonths) {
  return (this.price * noOfMonths).toFixed(2);
};

Plan.prototype.cancellable = true;

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
plan1.cancellable = false;
var plan2 = new Plan("Basic 2", 4.99, 1000, 100000, 50);
var plan3 = new Plan("Basic 3", 6.99, 10000, 1000000, 100);

// console.log(plan1, plan2, plan3);

// console.log("plan 1 price for 5 months: ", plan1.calcPrice(5));
// console.log("Plan 2 has cancellable? ", "cancellable" in plan2);
// console.log("Plan 2 has cancellable? ", plan2.hasOwnProperty("cancellable"));

// console.log("Plan 1 has hasOwnProperty? ", "hasOwnProperty" in plan2);
// console.log(
//   "Plan 1 has hasOwnProperty? ",
//   plan2.hasOwnProperty("hasOwnProperty")
// );

// console.log("Prototype of Plan:", Plan.prototype);

function Product(image, title, desc, price, stock, likes, reviews) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.desc = desc;
  this.stock = stock;
  this.likes = likes;
  this.reviews = reviews;
}

var p1 = new Product(
  "https://www.01net.com/app/uploads/2025/09/Apple-iPhone-17-Pro-2.jpg",
  "IPhone 17 Pro Max",
  "This is the newly launched iphone 17 pro max in orange color.",
  600000,
  1290,
  19202,
  [
    {
      name: "John Doe",
      rating: 4.5,
      comment: "This is a nice product",
    },
    {
      name: "Jane Doe",
      rating: 3.5,
      comment: "This is a bad product",
    },
    {
      name: "Sufiyan Doe",
      rating: 2.1,
      comment: "This is a not better than samsung",
    },
  ]
);

var p2 = new Product(
  "https://www.01net.com/app/uploads/2025/09/Apple-iPhone-17-Pro-2.jpg",
  "IPhone 17 Pro Max 2",
  "This is the newly launched iphone 17 pro max in orange color.",
  610000,
  190,
  1202,
  [
    {
      name: "John Doe",
      rating: 3.5,
      comment: "This is a nice product",
    },
    {
      name: "Jane Doe",
      rating: 2.5,
      comment: "This is a bad product",
    },
    {
      name: "Sufiyan Doe",
      rating: 2.1,
      comment: "This is a not better than samsung",
    },
  ]
);

var products = [p1, p2];

console.log(products);

var prodGrid = document.getElementById("prod-grid");

prodGrid.innerHTML = `<div class="prod-card">
            <div class="bg-image">
                <!-- bg image -->
            </div>
            <h3>${p1.title}</h3>
            <p class="desc">${p1.desc}</p>
            <p>PKR ${p1.price}</p>
            <div class="likes-reviews-container">
                <p>likes: ${p1.likes}</p>
                <p>reviews: ${p1.reviews.length}</p>
            </div>
        </div>`;
