import { StatusCodes } from "http-status-codes"
import { userModel } from "../../../models/index.js";
import { hashPassword } from "../../../services/index.js";


const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(StatusCodes.BAD_REQUEST).json({ status: "error", msg: "Enter all details" })
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({ status: "error", msg: "User already registered" })
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await userModel.create({ name, email, password: hashedPassword });

        res.status(StatusCodes.CREATED).json({ status: "success", msg: "User created successfully", user: newUser })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}


export default { register };