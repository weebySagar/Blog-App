import express from "express";

import { getAllBlogsController } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"

const router = express.Router();


router.get("/", tokenValidator, getAllBlogsController);


export default router;