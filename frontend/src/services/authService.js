import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/auth`
export const loginService = async (userData) => {
    try {
        const { data } = await axios.post(BASE_URL + '/login', userData);
        return data;
    } catch (error) {
        console.log(error.response.data.msg);
        throw new Error(error.response.data.msg)
        return error.response.data.msg
    }
}
