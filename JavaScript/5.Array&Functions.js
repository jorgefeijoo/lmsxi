function average(arrai){
   let suma = 0;
    for(let i=0; i<arrai.length; i++){
    suma+=arrai[i];
   }
    return suma/arrai.length;
}

console.log("La media del array es: "+average([10,20,30,40,50]));
