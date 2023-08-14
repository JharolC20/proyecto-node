const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


let personas = [{
    id: 1,
    nombre: 'JOse',
    apellido: 'Ruiz',
    edad: 12
},
{
    id: 2,
    nombre: 'luis',
    apellido: 'Ruiz',
    edad: 12
}]

app.get('/personas', (request, response) => {

    response.json(personas)
})

app.get('/personas/:id', (request, response) => {
    let id = request.params.id
    console.log(id)
     let busquedad = function (persona) {
         return persona.id == id
     }
    // let busquedad = (persona)=>persona.id==id

    let resultado = personas.filter(busquedad)

    if (resultado.length === 1) {
        response.json(resultado[0])
    } else {
        response.status(404).send('Persona no encontrada');
    }

})


app.post('/personas', (request, response) => {
    const nuevaPersona = request.body;
    nuevaPersona.id = personas.length + 1
    personas.push(nuevaPersona);
    console.log('Nueva persona creada:', nuevaPersona);

    response.status(201).json({ message: 'Persona creada ' });
});

app.put('/personas/:id', (request, response) => {
    const personaId = parseInt(request.params.id);
    const datosActualizados = request.body;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].id === personaId) {
            personas[i] = { ...personas[i], ...datosActualizados };
            return response.json({ message: 'Persona actualizada exitosamente' });
        }
    }
    response.status(404).send({message:'Persona no encontrada'});
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports=app