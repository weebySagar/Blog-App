import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/auth`
export const loginService = async (userData) => {
    try {
        const { data } = await axios.post(BASE_URL + '/login', userData);
        return data;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}


export const registerUserService = async (userData) => {
    try {
        const { data } = await axios.post(BASE_URL + '/signup', userData);
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
}
