import express from 'express';

import { getDoctorAvailability } from '../controllers/doctor';

export default (router: express.Router) => {
    router.get('/doctors/availability', getDoctorAvailability);
};