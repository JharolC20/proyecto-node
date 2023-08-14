const impares = require('../funcionFilter');

describe('testeando mi funcion impares', () => {
    it('testeando con solo pares', async () => {

        expect(impares([2, 4, 6])).toEqual([]);

    });
    it('testeando con solo impares', async () => {
        expect(impares([1, 3, 5])).toEqual([1, 3, 5])
    });

    it('Testeando con todo los numeros', async () => {
        expect(impares([1, 2, 3, 4, 5])).toEqual([1, 3, 5])
    });
    it('Testeando con el Arreglo vacio', async () => {
        expect(impares([])).toEqual([])
    });

})