import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Queue } from "../models/queue.model.js";
import { Token } from "../models/token.model.js";

const getUserController = asyncHandler(async (req, res) => {
  const userId = req.user.userId;

  if (!userId) throw new ApiError(400, "Id required");

  const user = User.findById(userId).select("fullName queues");

  if (!user) throw new ApiError(400, "User not found");

  const response = new ApiResponse(200, {
    username: username,
    fullName: user.fullName,
    queues: user.queues,
  });

  res.status(response.statusCode).json(response);
});

const getUserProfileController = asyncHandler(async (req, res) => {
  const _Id = req.user.userId;

  if (!_Id) throw new ApiError(400, "Id required");

  const user = await User.findById(_Id).select("fullName username queues");

  if (!user) throw new ApiError(400, "User not found");

  const response = new ApiResponse(200, {
    username: user.username,
    fullName: user.fullName,
    queues: user.queues,
  });

  res.status(response.statusCode).json(response);
});

const getUserQueues = asyncHandler(async (req, res) => {
  const userId = req.user.userId;

  if (!userId) throw new ApiError(400, "user id required");

  const queues = await Queue.find({ "createdBy.creatorId": userId }).exec();

  if (!queues) throw new ApiError(500, "queues not founded");
  return res
    .status(200)
    .json(new ApiResponse(200, queues, "queues feached successfully"));
});

const getUserTokens = asyncHandler(async (req, res) => {
  const userId = req.user.userId;

  if (!userId) throw new ApiError(400, "user id required");

  const tokens = await Token.find({ owner: userId });

  if (!tokens) throw new ApiError(500, "tokens not founded");
  return res
    .status(200)
    .json(new ApiResponse(200, tokens, "tokens feached successfully"));
});

export {
  getUserController,
  getUserProfileController,
  getUserQueues,
  getUserTokens,
};
