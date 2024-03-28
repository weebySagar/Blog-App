import express from "express";

import { getBlogByUserController } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"

const router = express.Router();


router.get("/user", tokenValidator, getBlogByUserController);


export default router;