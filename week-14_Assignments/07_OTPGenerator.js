function OTP(){
    const otp=Math.floor(Math.random()*8999)+1000;
    // here 1000 is added because if the generated value is less than 1000 then it adds to it.
    return otp;
}
console.log(`Your OTP(One Time Password) is : ${OTP()}`);