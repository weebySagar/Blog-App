import { StatusCodes } from "http-status-codes";

import { blogModel } from "../../../models/index.js";

const fetchAllBlogs = async (req, res) => {
    try {
        const allBlogs = await blogModel.find().sort({ createdAt: "desc" }).populate({ path: "author", select: "-password" });

        res.status(StatusCodes.OK).json({ stattus: "success", msg: "fetched all blogs", blogs: allBlogs })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default fetchAllBlogs;