const productDetails = {
    name: `Apple 2020 MacBook Air Laptop`,
    price: 82000,
    colour:`Grey`,
    hardDisk:`256 GB`
};

console.log("Beow are the product details:");
for(let num of Object.keys(productDetails)){
    console.log(`${num} : ${productDetails[num]}`);
}