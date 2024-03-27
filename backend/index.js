import express from 'express';
import dotenv from 'dotenv';

import { mongoDbConnect } from './src/config/mongoDBConfig.js';


dotenv.config();

const app = express();


const restart = () => mongoDbConnect().then(() => {
    console.log('mongodb connected');
    app.listen(process.env.PORT || 3000, () => console.log(`server listening to ${process.env.PORT}`))


}).catch(err => {
    console.log('something went wrong,server stopped ,', err);
    restart()
})


restart()




