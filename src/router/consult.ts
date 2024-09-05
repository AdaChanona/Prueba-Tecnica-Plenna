import express from 'express';

import {createConsultHandler, getConsultHandler, getAllConsultHandler, updateConsultHandler, deleteConsultHandler} from '../controllers/consult';

export default (router: express.Router) => {
    router.post('/consult/create', createConsultHandler);
    router.get('/consult', getAllConsultHandler);
    router.get('/consult/:id', getConsultHandler);
    router.put("/consult/:id", updateConsultHandler);
    router.delete("/consult/:id", deleteConsultHandler);
};