import {User} from "../models/user.model.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"

const getUserController = asyncHandler(async (req, res) => {
    const userId = req.user.userId;
 
    if (!userId) throw new ApiError(400,"Id required")

    const user = User.findById(userId).select("fullName queues");

    if(!user) throw new ApiError(400, "User not found");

    const response = new ApiResponse(200,{
        username : username,
        fullName : user.fullName,
        queues : user.queues
    });

    res.status(response.statusCode).json(response);
});

const getUserProfileController = asyncHandler(async (req, res) => {
    const _Id = req.user.userId;

    if (!_Id) throw new ApiError(400,"Id required")

    const user = await User.findById(_Id).select("fullName username queues");

    if(!user) throw new ApiError(400, "User not found");

    const response = new ApiResponse(200,{
        username : user.username,
        fullName : user.fullName,
        queues : user.queues
    });

    res.status(response.statusCode).json(response);
});

export {getUserController, getUserProfileController}