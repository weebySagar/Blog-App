import express from 'express';
import dotenv from 'dotenv';

import { mongoDbConnect } from './src/config/mongoDBConfig.js';
import { registerRoute } from "./src/api/routes/index.js"


dotenv.config();

const app = express();
app.use(express.json())

app.use("/api/auth", registerRoute)


const restart = () => mongoDbConnect().then(() => {
    console.log('mongodb connected');
    app.listen(process.env.PORT || 3000, () => console.log(`server listening to ${process.env.PORT}`))


}).catch(err => {
    console.log('something went wrong,server stopped ,', err);
    restart()
})


restart()




