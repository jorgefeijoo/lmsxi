const students = [
  { name: "Alex", score: 85 },
  { name: "Sam", score: 92 },
  { name: "Jordan", score: 78 }
];

// Change this value to test different names
const studentName = "Sam";

// TODO:
// 1. Find the student in the array using studentName
try {
    let existe= false;
    for (let i = 0; i < students.length; i++) {
     if(students[i].name==studentName){
        console.log("The score of the " +studentName+" is "+students[i].score);
        existe=true;
        break;
     }
    
}
if (existe==false) {
    throw new Error("No existe el alumno");
    
}
} catch (Error) {
    console.log(Error.message);
    
}

// 2. If the student does not exist, throw an error
// 3. If the student exists, display their score
// 4. Use try...catch to handle the error

