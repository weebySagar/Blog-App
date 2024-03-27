import mongoose from "mongoose";

import configEnvironment from "./configEnv.js";

export const mongoDbConnect = async () => {
    return mongoose.connect(configEnvironment.db)
}