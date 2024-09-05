import express from 'express';
import doctor from './doctor';
import patient from './patient';
import consult from './consult';

const router = express.Router();

export default (): express.Router =>{
    doctor(router);
    patient(router);
    consult(router);
    return router;
};