const products = [
    {name:"Laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"Laptop Bag",price:20000},
    {name:"Watch",price:20000},
    {name:"Mobile Charger",price:1500},
];

function checkProductPrice(productDetails){
    let highest=productDetails[0].price;
    let lowest=productDetails[0].price;
    let hName=productDetails[0].name;
    let lName=productDetails[0].name;
    for(let i=0;i<productDetails.length;i++){
        if(productDetails[i].price > highest){
            highest = productDetails[i].price;
            hName=productDetails[i].name;
        }
        if(productDetails[i].price < lowest){
            lowest = productDetails[i].price;
            lName=productDetails[i].name;
        }
    }
    console.log("The Product with maximum ammount is "+hName+" which is priced at Rs."+highest);
    console.log("The Product with minimum ammount is "+lName+" which is priced at Rs."+lowest);
}

checkProductPrice(products);