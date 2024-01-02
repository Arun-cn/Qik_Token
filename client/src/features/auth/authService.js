import axios from "axios"

const API_URL = "api/user/";

const login = async(userData) => {
    const respose = await axios.post(API_URL, userData);

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