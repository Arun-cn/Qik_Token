import jwt from "jsonwebtoken";
import {ApiError} from "../utils/apiError.js";

const requireAuth = async (req, res, next) => {
  const token = req.headers.autherization;

  if (!token) {
    const unauthorizedError = new ApiError(
      401,
      "Unauthorized - No token provided"
    );
    return next(unauthorizedError);
  }

  try {
    // Verify the token and extract user information
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Attach user information to the request object
    req.user = {
      userId: decoded._id,
      email: decoded.email,
      username: decoded.username,
      fullName: decoded.fullName,
      // Add more user-related information if needed
    };

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    const unauthorizedError = new ApiError(401, "Unauthorized - Invalid token");
    return next(unauthorizedError);
  }
};

export { requireAuth };
