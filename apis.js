const connection = require('./db');


exports.getAllPersonas = (request, response) => {
    const query = 'SELECT * FROM persona';

    connection.query(query, (error, results) => {
        if (error) {
            response.status(500).json({ error: 'Error al obtener la tabla persona' });
        } else {
            response.status(200).json(results);
        }

    });
}

exports.getPersonaById = (request, response) => {

    const id = request.params.id; // Obtén el ID de la consulta

    const query = 'SELECT * FROM persona WHERE id = ?';

    connection.query(query, [id], (error, results) => {
        if (error) {
            response.status(500).json({ error: 'Error al buscar persona por ID' });
        } else {
            if (results.length === 0) {
                response.status(404).json({ mensaje: 'Persona no encontrada' });
            } else {
                let persona = results[0];
                response.status(200).json({ mensaje: 'Persona encontrada', persona });
            }
        }
    });

}


exports.postNewPersona = (request, response) => {
    const { nombre, apellido, edad } = request.body; // Obtén los datos de la nueva persona

    const query = 'INSERT INTO persona (nombre,apellido, edad) VALUES (?, ? ,?)';

    connection.query(query, [nombre, apellido, edad], (error, results) => {
        if (error) {
            response.status(500).json({ error: 'Error al agregar una persona' });
            
        } else {

            response.status(201).json({ mensaje: 'Persona agregada correctamente' });
        }
    });
};


exports.putPersonaById = (request, response) => {
    const id = request.params.id; // Obtén el ID de la persona a actualizar
    const { nombre, apellido, edad } = request.body; // Obtén los nuevos datos de la persona

    const query = 'UPDATE persona SET nombre = ?,apellido=?, edad = ? WHERE id = ?';

    connection.query(query, [nombre, apellido, edad, id], (error, results) => {
        if (error) {
            response.status(500).json({ error: 'Error al actualizar los datos de la persona' });
        } else {
            if (results.affectedRows === 0) {
                response.status(404).json({ mensaje: 'Persona no encontrada' });
            } else {
                response.status(200).json({ mensaje: 'Datos de persona actualizados' });
            }
        }
    });
}
exports.deletePersonaById = (request, response) => {
    const id = parseInt(request.params.id); // Obtén el ID de la persona a eliminar
    const query = 'DELETE FROM persona WHERE id = ?';

    connection.query(query, [id], (error, results) => {
        if (error) {
            response.status(500).json({ error: 'Error al eliminar persona por ID' });
        } else {
            if (results.affectedRows === 0) {
                response.status(404).json({ mensaje: 'Persona no encontrada' });
            } else {
                response.status(200).json({ mensaje: 'Persona eliminada' });
            }
        }
    });


}
