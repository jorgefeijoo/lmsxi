
let comidas= ["Patatas con Milanesa", "Ensalada", "Hamburguesa"]

for(let i= 0; i<comidas.length;i++){
console.log("El valor del array en la posicion " + i + " es "+ comidas[i])
}

let valor=""
for(let i=0; i<comidas.length;i++){
    valor= valor+", "+comidas[i];
}
console.log(valor);


console.log("-------------");

let nums = [10, 20, 30]; 
console.log(nums[2]);





console.log("----------------");

const numeros = [ 10,5,15,3,20]
let maximo = numeros[0];
for(let i= 0; i<numeros.length;i++){
if (numeros[i]>maximo) {
    maximo=numeros[i] ; 
}
}
 console.log("El mayor numero del array es: " + maximo);




