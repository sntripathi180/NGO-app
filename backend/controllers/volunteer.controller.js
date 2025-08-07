import { User } from "../models/user.model.js"; 
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getVolunteers = asyncHandler(async (req, res) => {

  const volunteers = await User.find({ role: { $in: ["user", null] } }).select("-password");

  if (!volunteers) {
    throw new ApiError(404, "No volunteers found");
  }

  res.status(200).json(new ApiResponse(200, volunteers, "Volunteers retrieved successfully"));
});

export { getVolunteers };
