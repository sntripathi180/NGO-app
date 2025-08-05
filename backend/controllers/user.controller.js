import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import  jwt  from "jsonwebtoken";
const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }
    const accessToken = user.generateAccessToken();
    console.log("user.generateAccessToken:", user.generateAccessToken);
console.log("user:", user);

    return accessToken
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access token"
    );
  }
};


const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  if ([fullname, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const nameParts = fullname.trim().split(" ");
  if (nameParts.length < 2) {
    throw new ApiError(
      400,
      "Please provide both first and last name in fullname field"
    );
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "User with email already exists");
  }

  try {
    const user = await User.create({
      fullname,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering a user");
    }

    // ✅ Generate token
    const token = user.generateAccessToken(); // <-- make sure this method exists in your User model

    console.log("Registered user details are", createdUser);

    // ✅ Send user + token in response
    return res.status(201).json(
      new ApiResponse(201, {
        user: createdUser,
        token,
      }, "User registered successfully")
    );
  } catch (error) {
    console.error("User creation failed", error);
    throw new ApiError(500, "Internal server error");
  }
});




const loginUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body;

    if(!email){
        throw new ApiError(400,"Email is required")
    }
    const user = await User.findOne({email})

    if(!user){
        throw new ApiError(404,"User not found")
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid credentials")
    }

    const accessToken = await generateAccessToken(
        user._id
    )

    const loggedInUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly : true,
        secure:process.env.NODE_ENV === "production"
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .json(
        new ApiResponse(
            200,{
                user: loggedInUser,
                accessToken
            },
            "User logged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req,res) =>{
    const options = {
        httpOnly: true,
        secure:process.env.NODE_ENV === "production",
    }

    return res.status(200).clearCookie("accessToken",options)
    .json(new ApiResponse(200,{},"User logged out successfully"));
})



export {
    registerUser,
    loginUser,
    logoutUser
}
