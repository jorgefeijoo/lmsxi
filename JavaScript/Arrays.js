const arrai = ["Primerio", 30, 50 ,"Final"]
let size = arrai.length
console.log("Numbers of elements of the array: " +size)
console.log("Array: "+ arrai.toString())
console.log("Fourth element of the array: " + arrai[3])

for(let i=0; i<arrai.length;i++){
console.log("el valor del array en la posicion "+ i +" es: "+ arrai[i]);
}

for(const elemento of arrai){
    console.log("O valor do array es "+elemento)
}