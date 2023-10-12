function isUserPresent(userName){
    let listOfUsers=['Mahesh','Sandeep','Mithun','Akshay','Vinayak','Prasad','Praney'];
    let c=0;
    for (let index = 0; index < listOfUsers.length; index++) {
        if(userName == listOfUsers[index]){
            console.log('Yes, '+userName+' is a valid user');
            c++;
            break;
        }  
    }if(c==0){
            console.log("No, ",userName," is not valid user");
        }
}

isUserPresent('Mithun');
isUserPresent('Someone');