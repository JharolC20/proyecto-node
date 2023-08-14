
const numeros = [1, 2, 3, 4];

 const resta = numeros.reduce( (acumulador, numero)=>
 acumulador + numero,2)
 console.log(resta)

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