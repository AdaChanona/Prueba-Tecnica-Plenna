import express from 'express';
import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

export const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.info(`${req.method} ${req.url}`);
    next();
};
