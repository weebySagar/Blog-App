import express from "express";

import { createBlogController } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"

const router = express.Router();


router.post("/create", tokenValidator, createBlogController);


export default router;