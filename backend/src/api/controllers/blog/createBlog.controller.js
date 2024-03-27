import { StatusCodes } from "http-status-codes";

import { blogModel } from "../../../models/index.js";

const createBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        if (!title || !content) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: "error", msg: "Enter all fields"
            })
        }

        const newBlog = await blogModel.create({ title, author: req.user.userId, content, tags })

        res.status(StatusCodes.CREATED).json({ status: "success", msg: "Blog created successfully", blog: newBlog })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default createBlog;