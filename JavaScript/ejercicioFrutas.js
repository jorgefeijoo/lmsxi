const fruitFresas ={
    code:1,
    descripcion:"fresas",
    price:"3,50"
}
const fruitPlatano ={
    code:2,
    descripcion:"amarillo",
    price:"2,50"
}
const fruitFrambuesa ={
    code:3,
    descripcion:"rojas",
    price:"5,50"
}






let frutas=[fruitFresas,fruitPlatano,fruitFrambuesa]

for(let i=0;i<frutas.length;i++){
console.log("Code: "+ frutas[i].code+ " Descripcion: "+frutas[i].descripcion+ " Price: " + frutas[i].price);
}
