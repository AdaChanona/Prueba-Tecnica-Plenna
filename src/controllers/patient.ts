import { Request, Response, NextFunction } from 'express';

import { createPatient, getPatientById, updatePatientById, deletePatientById, getAllPatients } from '../db/patient';

export const createPatientHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paciente = await createPatient(req.body)
        return res.status(201).json(paciente);
    } catch (error) {
        next(error);
    }
};

export const getPacienteHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paciente = await getPatientById(req.params.id);
        if (!paciente) return res.status(404).json({ error: 'Paciente no encontrado' });
        res.json(paciente);
    } catch (error) {
        next(error);
    }
};

export const getAllPacienteHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paciente = await getAllPatients();
        if (!paciente) return res.status(404).json({ error: 'Pacientes no encontrado' });
        res.json(paciente);
    } catch (error) {
        next(error);
    }
};

export const updatePacienteHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paciente = await updatePatientById(req.params.id, req.body);
        if (!paciente) return res.status(404).json({ error: 'Paciente no encontrado' });
        res.json({message: 'Paciente actualizado correctamente'});
    } catch (error) {
        next(error);
    }
};

export const deletePacienteHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paciente = await deletePatientById(req.params.id);
        if (!paciente) return res.status(404).json({ error: 'Paciente no encontrado' });
        res.json({ message: 'Paciente eliminado correctamente' });
    } catch (error) {
        next(error);
    }
};
