import { StatusCodes } from "http-status-codes";
import { userModel } from "../../../models/index.js";

const updateUser = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.user.userId;

        const user = await userModel.findByIdAndUpdate(userId, { name }, { new: true });

        res.status(StatusCodes.OK).json({ status: "success", msg: "User updated successfully", user })

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}

export default updateUser;