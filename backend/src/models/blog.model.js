import mongoose, { mongo } from "mongoose";

const Blog = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [String]
}, { timestamps: true })

export default mongoose.model('Blog', Blog)