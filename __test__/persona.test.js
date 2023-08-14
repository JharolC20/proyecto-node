const request = require('supertest');
const app = require('../index'); // Importa tu aplicación Express

describe('Pruebas unitarias para las rutas de personas', () => {
  it('Debería crear una nueva persona', async () => {
    const res = await request(app)
      .post('/personas')
      .send({ nombre: 'Nuevo', edad: 25 });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('Persona creada ');
  });

  it('Debería actualizar los datos de una persona existente', async () => {
    const res = await request(app)
      .put('/personas/1')
      .send({ nombre: 'Nombre Actualizado', edad: 30 });

      

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Persona actualizada exitosamente');
  });

  it('Debería manejar la actualización de una persona inexistente', async () => {
    const res = await request(app)
      .put('/personas/999')
      .send({ nombre: 'Nombre Actualizado', edad: 30 });

    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toBe('Persona no encontrada');
  });
});
