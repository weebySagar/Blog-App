import express from "express";

import { updateBlogController } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"

const router = express.Router();


router.put("/:blogId", tokenValidator, updateBlogController);


export default router;