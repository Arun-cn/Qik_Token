import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;

  // Check all fields not empty
  if (
    [username, email, fullName, password].some((fields) => fields?.trim === "")
  ) {
    throw new apiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Email validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = password.length >= 8;

    if (!isEmailValid || !isPasswordValid) {
      throw new ApiError(400,"Invalid email or password")
    }

  // Password validation (at least 8 characters)

  const user = await User.findOne({ email });

  if (!user) throw new ApiError(400, "Invalid email or password");

  const isPasswordMatch = await user.isPasswordCorrect(password);

  if (!isPasswordMatch) throw new ApiError(401, "Invalid email or password");

  return res.status(200).json(new ApiResponse(200, user, "Login successfully"));
});

export { registerUser, userLogin };
