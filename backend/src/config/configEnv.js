import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV;
let configEnvironment;

if (env === 'production') {
    configEnvironment = {
        db: process.env.MONGODB_URL,
        port: process.env.PORT
    }
}
else {
    configEnvironment = {
        db: 'mongodb://0.0.0.0/blogLocal',
        port: 3001
    }
}

export default configEnvironment;

