import request from 'supertest';
import { app } from '../src/index';  // Asegúrate de exportar app en index.ts

describe('Paciente CRUD', () => {
    it('crear un nuevo paciente', async () => {
        const res = await request(app).post('/patients/create').send({
            "nombre": "Ada",
            "apellido": "Chanona",
            "contacto": "ada@gmail.com",
            "historialMedico": []
        });
        expect(res.status).toBe(201);
        expect(res.body.nombre).toBe('Ada');
    });

    it('Obtener todos los pacientes', async () => {
        const res = await request(app).get('/patients')
        expect(res.status).toBe(200);
    });

    it('Actualizar paciente', async () => {
        const res = await request(app).put('/patients/66daab5c21dd5a918f4c049d').send({
            "nombre": "Ada Isabel",
            "apellido": "Chanona",
            "contacto": "ada@gmail.com",
            "historialMedico": []
        });
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Paciente actualizado correctamente');
    });

    it('Eliminar paciente', async () => {
        const res = await request(app).delete('/patients/66daa831a81b338f82d63782');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Paciente eliminado correctamente');
    });

    // Agrega más tests
});
