import express from "express";

import { getBlog } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"

const router = express.Router();


router.get("/:blogId", tokenValidator, getBlog);


export default router;