const students = [
    {
        name:'Mithun',
        marks:95
    },
    {
        name:'Prabir',
        marks:75
    },
    {
        name:'Alka',
        marks:92
    },
    {
        name:'Shivam',
        marks:70
    },
    {
        name:'Farman',
        marks:99
    },
];

function checkResults(studentName){
    let count=0;
    for(let i=0;i<students.length;i++){
        if(students[i].name==studentName){
            if(students[i].marks > 90){
                console.log("Congrats! "+studentName+" you have passed exam");
                count++;
                break;
            }
            else{
                console.log("Sorry "+studentName+" you have failed in exam");
                count++;
                break;
            }
        }
    }
    if(count==0){
        console.log("Invalid Student Name !");
    }
}

checkResults('Mithun');
checkResults('Prabir');
checkResults('Alka n');