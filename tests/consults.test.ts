import request from 'supertest';
import { app } from '../src/index';  // Asegúrate de exportar app en index.ts

describe('Consulta CRUD', () => {
    it('crear una nueva consulta', async () => {
        const res = await request(app).post('/consult/create').send({
            "fecha": "06/09/2024",
            "doctor": "Martha",
            "descripcion": "Psicología",
            "paciente": "66d95eb6fcc1ea6b07a15127"
        });
        expect(res.status).toBe(201);
        expect(res.body.doctor).toBe('Martha');
    });

    it('Obtener todas las consultas', async () => {
        const res = await request(app).get('/consult')
        expect(res.status).toBe(200);
    });

    it('Actualizar consulta', async () => {
        const res = await request(app).put('/consult/66da060f12d0d1385f5013b0').send({
            "fecha": "06/09/2024",
            "doctor": "Martha Alvarez",
            "descripcion": "Psicología",
            "paciente": "66d95eb6fcc1ea6b07a15127"
        });
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Consulta actualizada correctamente');
    });

    it('Eliminar consulta', async () => {
        const res = await request(app).delete('/consult/66d969351ea64d1ddbfe41dd');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Consulta eliminada correctamente');
    });

    // Agrega más tests
});