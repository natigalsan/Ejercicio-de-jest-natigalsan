// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    var numb = 106.5833333333333;
    numb = numb.toFixed(2);
    let valueInYenes = valueInDollar *  numb;
    // retornamos el valor
    return Number(valueInYenes);
}

const fromYenToPound = function(valueInYenes){
    // convertimos el valor a pounds
    var numb = 0.0062548866301798;
    //numb = numb.toFixed(5); 
    let valueInPounds = valueInYenes *  numb;
    // retornamos el valor
    return Number(valueInPounds.toFixed(5));
}


//esta es mi función que suma dos números: 
const sum = (a, b) => {
    return a + b; 
}

//solo un registro en consola para nosotros.
console.log(sum(7, 3));
 
//exporta la función para usarla en otros archivos
//similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };