import express from 'express';
import { unifyAvailability } from '../utils/unifyAvailability'

export const getDoctorAvailability = (req: express.Request, res: express.Response) => {
    try {
        const doctorAvailabilities = require('../utils/pruebaTecnica.json');
        const unifiedAvailability = unifyAvailability(doctorAvailabilities);
        return res.status(200).json(unifiedAvailability).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
