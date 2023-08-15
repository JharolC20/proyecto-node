const express = require('express')
const apis = require('./apis.js');

//const { getAllPersonas, getPersonaById, postNewPersona, putPersonaById } from './apis.js';
const app = express()
const port = 3000

app.use(express.json());

app.get('/personas', apis.getAllPersonas);
app.get('/personas/:id', apis.getPersonaById);
app.post('/personas', apis.postNewPersona);
app.put('/personas/:id', apis.putPersonaById);
app.delete('/personas/:id', apis.deletePersonaById);




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app