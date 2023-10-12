function uniqueCharacterCheck(name) {
    let nameArray=Array.from(name);
    let nameSet=new Set(name);
    if(nameArray.length==nameSet.size){
        console.log("The input string contains unique characters");
    }else{
        console.log("The input string doesn't contains unique characters");
    }
}

uniqueCharacterCheck('vinayak');
uniqueCharacterCheck('sohan');
uniqueCharacterCheck('prasad');