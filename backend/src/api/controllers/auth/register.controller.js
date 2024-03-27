import { StatusCodes } from "http-status-codes"
import { userModel } from "../../../models";
import { hashPassword } from "../../../services";


const register = async (req, res) => {

    try {
        const { email, password } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({ status: "error", msg: "User already registered" })
        }

        const hashedPassword = hashPassword(password);

        const newUser = await userModel.create({ email, hashedPassword });

        res.status(StatusCodes.CREATED).json({ status: "success", msg: "User created successfully", user: newUser })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default { register };