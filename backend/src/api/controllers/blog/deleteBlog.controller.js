import { StatusCodes } from "http-status-codes";

import { blogModel } from "../../../models/index.js";

const deleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const userId = req.user.userId;

        const blog = await blogModel.findById(blogId);


        if (!blog) {
            return res.status(StatusCodes.BAD_REQUEST).json({ status: "error", msg: "Blog posts not found" })
        }

        if (blog.author.toString() !== userId) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ status: "error", msg: "Not a authorized user to delete post" })
        }

        await blogModel.deleteOne({ _id: blogId })

        res.status(StatusCodes.OK).json({ status: "success", msg: "Blog deleted successfully" })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default deleteBlog;