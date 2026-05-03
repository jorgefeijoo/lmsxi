const user={
name: "Anxito",
age: 18,
country: "ESPAÑA",
mostrar: function(){
    console.log(this.name+" "+ this.age+" "+this.country);
    
}
}

const user2={
name: "Gonzalo",
age: 18,
country: "ESPAÑA",
mostrar: function(){
    console.log(this.name+" "+ this.age+" "+this.country);
    
}
}

const user3={
name: "Gorge",
age: 20,
country: "Feitizos",
mostrar: function(){
    console.log(this.name+" "+ this.age+" "+this.country);
    
}
}
user.mostrar();

const usuario=[user,user2,user3]
for(let i= 0; i<usuario.length;i++){
    console.log("Name: "+ usuario[i].name+ " age " + usuario[i].age+ " Country: "+ usuario[i].country);
    
}



const car={
    brand: "BMW",
    model: "M4 competition",
    year: 2015,
    mostrar: function(){
console.log(this.brand+" "+ this.model+" "+this.year);
    }
}

car.mostrar();

car.year=2022;

car.mostrar();

car.color="dark";

console.log(car.color);


const scores={
    math:9,
    english:8,
    science:5,

    

}
  const suma=(scores.math+scores.english+scores.science)/3
console.log("La suma de las notas es: "+suma);
