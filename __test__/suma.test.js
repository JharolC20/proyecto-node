const suma = require('../funcionReduce');

describe('testeando mi funcion suma', () => {
    it('testeando suma', async () => {

        expect(suma([2, 4, 6])).toEqual(12);

    });
    it('Testeando con el Arreglo vacio', async () => {
        expect(suma([])).toEqual(0)
    });

})