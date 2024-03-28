import express from "express";

import { updateUserController } from "../../controllers/index.js";
import { tokenValidator } from "../../../middleware/index.js"


const router = express.Router();

router.put("/update", tokenValidator, updateUserController);

export default router;