const triple = require('../funcionMap');

describe('testeando mi funcion Triple', () => {
    it('testeando con numeros del 1 al 3', async () => {
       
        expect(triple([1,2,3])).toEqual([3,6,9]);
        
    });
    it('Testeando con el Arreglo vacio',async ()=>{
        expect(triple([])).toEqual([])
    });

})


