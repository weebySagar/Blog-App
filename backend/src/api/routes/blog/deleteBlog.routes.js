import express from "express";

import { deleteBlogController } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"

const router = express.Router();


router.delete("/:blogId", tokenValidator, deleteBlogController);


export default router;