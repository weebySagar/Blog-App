import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";

export default hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log("hashPassword", error);
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: "error", msg: "Internal Server Error!!" });
    }
}