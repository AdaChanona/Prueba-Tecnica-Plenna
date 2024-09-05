import { Request, Response, NextFunction } from 'express';

import {createConsult, getConsultById, getAllConsult, updateConsultById, deleteConsultById } from '../db/consult';

export const createConsultHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consulta = await createConsult(req.body)
        return res.status(201).json(consulta);
    } catch (error) {
        next(error);
    }
};

export const getConsultHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consulta = await getConsultById(req.params.id);
        if (!consulta) return res.status(404).json({ error: 'Paciente no encontrado' });
        res.json(consulta);
    } catch (error) {
        next(error);
    }
};

export const getAllConsultHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consulta = await getAllConsult();
        if (!consulta) return res.status(404).json({ error: 'Pacientes no encontrado' });
        res.json(consulta);
    } catch (error) {
        next(error);
    }
};

export const updateConsultHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consulta = await updateConsultById(req.params.id, req.body);
        if (!consulta) return res.status(404).json({ error: 'Consulta no encontrado' });
        res.json({message: 'Consulta actualizada correctamente'});
    } catch (error) {
        next(error);
    }
};

export const deleteConsultHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consulta = await deleteConsultById(req.params.id);
        if (!consulta) return res.status(404).json({ error: 'Consulta no encontrado' });
        res.json({ message: 'Consulta eliminada correctamente' });
    } catch (error) {
        next(error);
    }
};