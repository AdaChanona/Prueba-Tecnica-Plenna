import express from 'express';
import { unifyAvailability } from '../utils/unifyAvailability';

export const getDoctorAvailability = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const rawData = require('../utils/pruebaTecnica.json'); // Load the JSON file
        // Transform the raw JSON data into the expected DoctorAvailability format
        const doctorAvailabilities = rawData.schedules.map((schedule: any) => ({
            idDoctor: schedule.idDoctor,
            slotdates: schedule.slotdates.map((slotdate: any) => ({
                date: slotdate.date,
                slots: slotdate.slots ? slotdate.slots.map((slot: any) => ({
                    time: new Date(slot.dateTime).toISOString().split('T')[1].substring(0, 5) // Convert dateTime to HH:mm format
                })) : []
            }))
        }));

        // Pass the transformed data to unifyAvailability function
        const unifiedAvailability = unifyAvailability(doctorAvailabilities);
        return res.status(200).json(unifiedAvailability).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
