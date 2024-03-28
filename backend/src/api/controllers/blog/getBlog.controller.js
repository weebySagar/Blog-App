import { StatusCodes } from "http-status-codes";

import { blogModel } from "../../../models/index.js";

const getBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await blogModel.findById(blogId).populate({ path: "author", select: "-password" });

        res.status(StatusCodes.OK).json({ stattus: "success", msg: "fetched blog", blog })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default getBlog;