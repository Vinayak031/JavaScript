function remainingDays(eventDate1){
    let currentDate = new Date();
    let eventDate2 = new Date(eventDate1);
    let daysRemaining = eventDate2- currentDate;
    let result = Math.ceil((daysRemaining/(1000*60*60*24)));
    return result;
}
let eventDate="2023-10-15";
console.log(remainingDays(eventDate));