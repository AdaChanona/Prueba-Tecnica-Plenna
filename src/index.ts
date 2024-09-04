import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';
import { env } from "./env";

const app = express();

app.use(cors({
    credentials: true,
}))
app.use(bodyParser.json());

// Middleware global para manejar solicitudes POST vacías
app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'POST' && !Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Bad Request: Empty body' });
    }
    next();
});

// Logger básico
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const server = http.createServer(app)

server.listen(env.PORT, ()=>{
    console.log('Server running on http://'+env.HOST+':'+env.PORT+'/');
});

app.use('/',router());