var cus1ProdPurchased = 55;
var cus1Loyality = 30;

var cus2ProdPurchased = 30;
var cus2Loyality = 40;

var cus3ProdPurchased = 120;
var cus3Loyality = 55;

var cus4ProdPurchased = 20;
var cus4Loyality = 80;

// if prod purcahsed more than 100, 20 discount.
// if prod purcahsed more than 50, 10 discount.
// Customer loyal more than equal to 75 get 5 dicsount on every purchase.
// if (cus1ProdPurchased > 100 && cus1Loyality > 75) {
//   console.log(cus1ProdPurchased - 25);
// } else if (cus1ProdPurchased > 100 && cus1Loyality < 75) {
//   console.log(cus1ProdPurchased - 20);
// } else if (cus1ProdPurchased > 50 && cus1Loyality > 75) {
//   console.log(cus1ProdPurchased - 15);
// } else if (cus1ProdPurchased > 50 && cus1Loyality < 75) {
//   console.log(cus1ProdPurchased - 10);
// } else if (cus1ProdPurchased < 50 && cus1Loyality > 75) {
//   console.log(cus1ProdPurchased - 5);
// } else {
//   console.log(cus1ProdPurchased);
// }

if (cus1ProdPurchased > 100) {
  if (cus1Loyality >= 75) {
    console.log(cus1ProdPurchased - 25);
  } else {
    console.log(cus1ProdPurchased - 20);
  }
} else if (cus1ProdPurchased > 50) {
  if (cus1Loyality >= 75) {
    console.log(cus1ProdPurchased - 15);
  } else {
    console.log(cus1ProdPurchased - 10);
  }
} else {
  if (cus1Loyality >= 75) {
    console.log(cus1ProdPurchased - 5);
  } else {
    console.log(cus1ProdPurchased);
  }
}
