import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Queue } from "../models/queue.model.js";
import { Token } from "../models/token.model.js";

const createToken = asyncHandler(async (req, res) => {
  const { queueId } = req.body;
  const userId = req.user.userId;

  if (!queueId && !userId)
    throw new ApiError(409, "queue id and user requried");

  const queue = await Queue.findById(queueId);
  if (!queue) throw new ApiError(500, "queue not found");
  
  const TokenNumber = queue.lastGivenTokenNumber + 1;
  
  const newToken = new Token({
    owner: userId,
    queue: queueId,
    tokenNumber: TokenNumber,
  });

  await newToken.save();

  queue.lastGivenTokenNumber = TokenNumber;
  await queue.save();

  return res
    .status(200)
    .json(new ApiResponse(200, newToken, "token creared successfully"));
});

export { createToken };
