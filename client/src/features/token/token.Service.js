import axiosInstance from "../../services/axiosInstance"
import { fetchTokensSuccess, fetchTokensFailure } from "./token.Slice"

const API_URL = "api/v1/user/tokens"

export const fetchTokens = () => {
    return async (dispatch) =>{
        try {
            const tokens = await axiosInstance.get(API_URL);
             const data = tokens.data.data
             dispatch(fetchTokensSuccess(data));

        } catch (error) {
            dispatch(fetchTokensFailure(error.message))
        }
    }
}