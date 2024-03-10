import axiosInstance from "../../services/axiosInstance"
import { fetchQueuesFailure, fetchQueuesSuccess } from "./queue.Slice"

const API_URL = "api/v1/user/tokens"

export const fetchQueues = () => {
    return async (dispatch) =>{
        try {
            const queue = await axiosInstance.get(API_URL);
             const data = queue.data.data
             dispatch(fetchQueuesSuccess(data));

        } catch (error) {
            dispatch(fetchQueuesFailure(error.message))
        }
    }
}