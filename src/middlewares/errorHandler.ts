import express from 'express';

export const errorHandler = (err: Error, req: express.Request, res: express.Response) => {
    console.error(err.stack);
    res.status(400).send({ error: 'Something went wrong!' });
    
};
