import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';
import { env } from "./env";
import { errorHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/logger';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials: true,
}))

app.use(bodyParser.json());
app.use(errorHandler);
app.use(requestLogger);

const server = http.createServer(app)

server.listen(env.PORT, ()=>{
    console.log('Server running on http://'+env.HOST+':'+env.PORT+'/');
});

mongoose.Promise = Promise;
mongoose.connect(env.MONGO_URL);
mongoose.connection.on('error',(error: Error)=> console.log(error));

app.use('/',router());