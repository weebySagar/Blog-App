import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/blog`;

const token = localStorage.getItem("storyversetoken")

export const getAllBlogs = async () => {
    try {
        const { data } = await axios.get(BASE_URL, {
            headers: {
                Authorization: token
            }
        });
        return data.blogs;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}