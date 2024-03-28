import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"

import { mongoDbConnect } from './src/config/mongoDBConfig.js';
import { registerRoute, loginRoute, createBlogRoute, deleteBlogRoute, updateBlogRoute, getAllBlogsRoute, getBlogRoute, getBlogByUserRoute, updateUserRoute } from "./src/api/routes/index.js"


dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use("/api/auth", registerRoute, loginRoute, updateUserRoute);
app.use("/api/blog", getBlogByUserRoute, getAllBlogsRoute, getBlogRoute, createBlogRoute, deleteBlogRoute, updateBlogRoute)


const restart = () => mongoDbConnect().then(() => {
    console.log('mongodb connected');
    app.listen(process.env.PORT || 3000, () => console.log(`server listening to ${process.env.PORT}`))


}).catch(err => {
    console.log('something went wrong,server stopped ,', err);
    restart()
})


restart()




