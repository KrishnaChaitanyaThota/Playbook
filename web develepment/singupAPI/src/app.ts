import express, {Application, Request, Response} from 'express';
var router = express.Router();
const mongoose = require('mongoose');


const app: Application = express();
const port: number = 3000;

//const userDetail = require('');

app.get('/', (req: Request, res:Response)=>{
    res.send('Hello world');

});

app.listen(port, ()=>{
    console.log(`Connected Successfully on port ${port}`);

});
