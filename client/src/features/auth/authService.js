import axiosInstance from "../../services/axiosInstance"

const API_URL = "api/v1/auth/login";

const login = async(userData) => {
    const respose = await axiosInstance.post(API_URL, userData);

    if(respose.data) {
        localStorage.setItem("user" ,JSON.stringify(respose.data));
    }

    return respose.data;

}

const logout = () => {

  localStorage.removeItem("user");

}

const authService = {
    login,
    logout
}

export default authService;