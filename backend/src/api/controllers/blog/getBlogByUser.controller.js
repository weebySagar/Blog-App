import { StatusCodes } from "http-status-codes";

import { blogModel } from "../../../models/index.js";

const getBlogByUser = async (req, res) => {
    try {
        const blogs = await blogModel.find({ author: req.user.userId.toString() }).sort({ createdAt: "desc" });
        res.status(StatusCodes.OK).json({ stattus: "success", msg: "fetched blog", blogs })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default getBlogByUser;