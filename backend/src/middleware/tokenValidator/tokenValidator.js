import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const tokenValidator = async (req, res, next) => {
    try {
        const token = req.header('Authorization')

        if (!token) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ status: "error", msg: "Unauthorized user, token is not provided" })
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res
                    .status(StatusCodes.UNAUTHORIZED)
                    .json({ status: "error", msg: "Unauthorized user, cannot verify token" });
            }

            req.user = decoded.user;
            next()
        })
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: "error", msg: "Internal Server Error!!" });
    }
}

export default tokenValidator;