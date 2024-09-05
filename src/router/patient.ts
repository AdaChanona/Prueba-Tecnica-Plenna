import express from 'express';

import {createPatientHandler, getPacienteHandler, updatePacienteHandler, deletePacienteHandler, getAllPacienteHandler } from '../controllers/patient';

export default (router: express.Router) => {
    router.post('/patients/create', createPatientHandler);
    router.get('/patients', getAllPacienteHandler);
    router.get('/patients/:id', getPacienteHandler);
    router.put("/patients/:id", updatePacienteHandler);
    router.delete("/patients/:id", deletePacienteHandler);
};