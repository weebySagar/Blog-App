import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { userModel } from "../../../models/index.js";

dotenv.config();


const login = async (req, res) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!email || !password) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ status: "error", msg: "Enter all details" })
        }

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ status: "error", msg: "Account not found, create new one" })
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ status: "error", msg: "Invalid email or password" })
        }

        const data = {
            user: {
                userId: user._id,
                email: user.email
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        return res.status(StatusCodes.OK).json({ status: "success", token: authToken, msg: "Login Successfull", user })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: "error", msg: "Internal server error" })
    }
}

export default login;