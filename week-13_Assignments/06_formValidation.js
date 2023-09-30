let Name = "Vinayak";
let email = "vinayak.s@pw.live";
let age = "17"

if (typeof Name !== "string") {
    console.log("Name should be String");
} else if (typeof email !== "string") {
    console.log("Email should be String");
} else if (typeof age !== "number") {
    console.log("Age should be Number");
} else {
    console.log("Invalid");
}