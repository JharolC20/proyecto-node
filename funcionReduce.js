

function suma(numeros) {
    return numeros.reduce((acumulador, numero) =>
        acumulador + numero,0);

    
}


module.exports = suma;



// var animales = ['perro', 'pollo', 'gato', 'perro', 'pollo', 'pollo', 'conejo'];

// var contador = animales.reduce((diccionario, animal) => {
//     if (!diccionario[animal]) {
//         diccionario [animal] = 1;
//     } else {
//         diccionario[animal]++;
//     }
//     return diccionario;
// }, {});
// console.log('Animales:', animales);
// console.log('Total: ', contador); 