let totalValue = 2000;
let discountPercentage = 20;

if (discountPercentage != 0) {
    let mrp = (totalValue * discountPercentage) / 100;
    console.log("The final price after discount : " + totalValue - mrp);
}
else {
    console.log("Sorry you have no discount");
    console.log("The final price : " + totalValue);
}