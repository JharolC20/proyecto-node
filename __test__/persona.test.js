const request = require('supertest');
const app = require('../index'); // Importa tu aplicación Express

describe('Pruebas unitarias para las rutas de personas', () => {
  it('Debería crear una nueva persona', async () => {
    const res = await request(app)
      .post('/personas')
      .send({ nombre: 'Nuevo', apellido: 'Apellido', edad: 25 });

    expect(res.statusCode).toEqual(201);
    expect(res.body.mensaje).toBe('Persona agregada correctamente');
  });

  it('Debería actualizar los datos de una persona existente', async () => {
    const res = await request(app)
      .put('/personas/2')
      .send({ nombre: 'Nombre Actualizado', apellido: 'apellido', edad: 30 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensaje).toBe('Datos de persona actualizados');
  });

  it('Debería manejar la actualización de una persona inexistente', async () => {
    const res = await request(app)
      .put('/personas/999')
      .send({ nombre: 'Nombre Actualizado', apellido: 'apellido actualizado', edad: 30 });

    expect(res.statusCode).toEqual(404);
    expect(res.body.mensaje).toBe('Persona no encontrada');
  });

  it('Debería eliminar los datos de una persona existente', async () => {
    const res = await request(app)
      .delete('/personas/2')
      expect(res.body.mensaje).toBe('Persona eliminada');

    expect(res.statusCode).toEqual(200);

  });
});
