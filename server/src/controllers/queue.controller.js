import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { Queue } from "../models/queue.model.js";

const createQueue = asyncHandler(async (req, res) => {
  const userId = req.user.userId;
  const { queueName, location, creatorType, Id, url } = req.body;

  if (!userId) throw new ApiError(400, "userid reqiured");
  if (!queueName) throw new ApiError(400, "queue name reqiured");
  if (!location) throw new ApiError(400, "Loaction reqiured");
  if (!creatorType) throw new ApiError(400, "UnKnown Creator");
  if (!url) throw new ApiError(400, "Url reqiured");

  const creatorId = creatorType == "User" ? userId : Id;

  const existedQueue = await Queue.findOne({ url });
  if (existedQueue) throw new ApiError(409, "queue url already existed");

  const newQueue = new Queue({
    queueName: queueName,
    url: url.toLowerCase(),
    location: location,
    createdBy: {
      creatorType: creatorType,
      creatorId: creatorId,
    },
  });

  if (creatorType === "User") {
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) throw new ApiError(400, "User not found");
    user.queues.push(newQueue.id);
    const newUser = await user.save();

    if (!newUser) throw new ApiError(500, "queue not saved in user");
  } else {
    throw ApiError(400, "creator type not found");
  }

  await newQueue.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "queue created successfully"));
});

const getQueue = asyncHandler(async (req, res) => {
  const { url } = req.params;

  if (!url) throw new ApiError(400, "Queue id requried");

  const queue = await Queue.findOne({ url });

  if (!queue) throw new ApiError(400, "Queue not found");

  const responseQueue = {
    id: queue._id,
    url: queue.url,
    name: queue.queueName,
    location: queue.location,
    currentToken: queue.currentToken,
    creatorType: queue.createdBy.creatorType,
    creatorId: queue.createdBy.creatorId,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, responseQueue, "queue fetched Successfully"));
});

export { createQueue, getQueue };
