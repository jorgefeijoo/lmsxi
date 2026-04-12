let products1 =  {

    name:"Mazan",
    price: 35,
    inStock:true

}


let products2 =  {

    name:"Sandia",
    price: 67,
    inStock:false

}



let products3 =  {

    name:"periña",
    price: 99,
    inStock:true

}


let product=[products1,products2,products3];

function newProduct(name,price,stock){
    let products4={
        name:name,
        price:price,
        inStock:stock
    }

    product.push(products4);

}

function sumaValores() {
    let suma=0;
    for(let i=0;i<product.length;i++){
        suma=suma+product[i].price;
    }
    console.log("La suma de los productos es: "+ suma);
    
}

function inStock() {
     for(let i=0;i<product.length;i++){
        if (product[i].inStock) {
            
            console.log("los productos en stock son: "+product[i].name+", "+ product[i].price+", "+ product[i].inStock);
             
        }
    }
}

newProduct("cirueliña",76,true);
sumaValores();
inStock();


