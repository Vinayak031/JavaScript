function calculateTotalCartValue(...price){
    let totalPrice=0;
    for(let i=0;i < price.length;i++){
        totalPrice = totalPrice + price[i];
    }
    console.log("The total cart value is "+totalPrice);
}

calculateTotalCartValue(125,20,30);
calculateTotalCartValue(12,13,23,34,45);