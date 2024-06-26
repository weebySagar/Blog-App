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

export const getBlog = async (blogId) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${blogId}`, {
            headers: {
                Authorization: token
            }
        });
        return data.blog;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}


export const getBlogByUser = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/user`, {
            headers: {
                Authorization: token
            }
        });
        return data.blogs;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}


export const deleteBlog = async (blogId) => {
    try {
        const { data } = await axios.delete(`${BASE_URL}/${blogId}`, {
            headers: {
                Authorization: token
            }
        });
        return data.blogs;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}

export const createBlog = async (title, subtitle, content) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/create`, { title, subtitle, content }, {
            headers: {
                Authorization: token
            }
        });
        return data.blog;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}