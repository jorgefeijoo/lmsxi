const students=[
    {name: anxo, score:0},
    {name: Eli, score:90},
    {name:jorge , score:100},
]

let studentName="eli";

try {
    for(let i=0;i<students.length;i++){
        if(students!=studentName){
            throw new Error("El estudiante no se encuentra"); 
        }
    }
} catch (error) {
    Error
}

