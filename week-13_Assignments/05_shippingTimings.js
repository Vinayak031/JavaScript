let timeOfShipping = "express";

switch (timeOfShipping) {
    case "standard":
        console.log("Your order will arrive after 3-5 days");
        break;
    case "express":
        console.log("Your order will arrive after 1-2 days");
        break;
    case "overnight":
        console.log("Your order will arrive Tommorow");
        break;
    default :
        console.log("404 ERROR");
        break;
}